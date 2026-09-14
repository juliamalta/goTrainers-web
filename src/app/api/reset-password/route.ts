import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { getPayload } from 'payload'
import config from '@payload-config'

const TOKEN_SECRET = process.env.PAYLOAD_SECRET || 'dev-reset-password-secret'

function createToken(email: string) {
    const expires = Date.now() + 15 * 60 * 1000

    const value = `${email}:${expires}`

    const signature = createHmac('sha256', TOKEN_SECRET).update(value).digest('hex')

    return Buffer.from(`${email}:${expires}:${signature}`).toString('base64url')
}

function verifyToken(token: string) {
    try {
        const decoded = Buffer.from(token, 'base64url').toString('utf8')

        const parts = decoded.split(':')

        if (parts.length !== 3) {
            return null
        }

        const [email, expiresString, signature] = parts
        const expires = Number(expiresString)

        if (!email || !expires || !signature) {
            return null
        }

        if (Date.now() > expires) {
            return null
        }

        const value = `${email}:${expires}`

        const expectedSignature = createHmac('sha256', TOKEN_SECRET).update(value).digest('hex')

        if (signature !== expectedSignature) {
            return null
        }

        return email
    } catch {
        return null
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const email = body?.email?.trim()?.toLowerCase()

        if (!email) {
            return NextResponse.json({ message: 'Informe seu email.' }, { status: 400 })
        }

        const payload = await getPayload({ config })

        const result = await payload.find({
            collection: 'users',
            where: {
                email: {
                    equals: email,
                },
            },
            limit: 1,
            overrideAccess: true,
        })

        if (!result.docs.length) {
            return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 })
        }

        const token = createToken(email)

        return NextResponse.json({
            success: true,
            token,
        })
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            {
                message: 'Não foi possível iniciar a recuperação.',
            },
            { status: 500 }
        )
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json()

        const token = body?.token
        const password = body?.password

        if (!token || !password) {
            return NextResponse.json(
                {
                    message: 'Token e senha são obrigatórios.',
                },
                { status: 400 }
            )
        }

        if (password.length < 8) {
            return NextResponse.json(
                {
                    message: 'A senha precisa ter pelo menos 8 caracteres.',
                },
                { status: 400 }
            )
        }

        const email = verifyToken(token)

        if (!email) {
            return NextResponse.json(
                {
                    message: 'Token inválido ou expirado.',
                },
                { status: 400 }
            )
        }

        const payload = await getPayload({ config })

        const result = await payload.find({
            collection: 'users',
            where: {
                email: {
                    equals: email,
                },
            },
            limit: 1,
            overrideAccess: true,
        })

        const user = result.docs[0]

        if (!user) {
            return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 })
        }

        await payload.update({
            collection: 'users',
            id: user.id,
            data: {
                password,
            },
            overrideAccess: true,
        })

        return NextResponse.json({
            success: true,
            message: 'Senha alterada com sucesso.',
        })
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            {
                message: 'Não foi possível alterar a senha.',
            },
            { status: 500 }
        )
    }
}
