import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '../../../../payload.config'

export async function POST(request: NextRequest) {
    try {
        const payload = await getPayload({ config })
        const { user } = await payload.auth({ headers: request.headers })

        if (!user) {
            return NextResponse.json({ message: 'Você precisa estar logado.' }, { status: 401 })
        }

        const { fullName, email, phone, message, template } = await request.json()
        const fields = [fullName, email, phone, template]

        if (!fields.every((value) => typeof value === 'string' && value.trim())) {
            return NextResponse.json({ message: 'Preencha nome, e-mail e telefone.' }, { status: 400 })
        }

        const lead = await payload.create({
            collection: 'site-creation-requests',
            data: {
                fullName: fullName.trim(),
                email: email.trim(),
                phone: phone.trim(),
                template: template.trim(),
                message: typeof message === 'string' ? message.trim() : '',
                user: user.id,
                status: 'pending',
            },
            overrideAccess: true,
        })

        return NextResponse.json({ id: lead.id }, { status: 201 })
    } catch (error) {
        console.error('Erro ao salvar solicitação de criação:', error)
        return NextResponse.json({ message: 'Não foi possível enviar sua solicitação.' }, { status: 500 })
    }
}
