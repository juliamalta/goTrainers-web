import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '../../../../payload.config'

const MAX_IMAGE_REDIRECTS = 3

function isAllowedImageUrl(value: URL) {
    const host = value.hostname.toLowerCase()

    return (
        value.protocol === 'https:' &&
        !value.username &&
        !value.password &&
        (!value.port || value.port === '443') &&
        (host === 'instagram.com' ||
            host.endsWith('.instagram.com') ||
            host.endsWith('.cdninstagram.com') ||
            host.endsWith('.fbcdn.net'))
    )
}

async function fetchAllowedImage(url: URL) {
    let currentUrl = url

    for (let redirectCount = 0; redirectCount <= MAX_IMAGE_REDIRECTS; redirectCount += 1) {
        const response = await fetch(currentUrl, { redirect: 'manual' })

        if (response.status < 300 || response.status >= 400) {
            return response
        }

        const location = response.headers.get('location')
        if (!location || redirectCount === MAX_IMAGE_REDIRECTS) {
            throw new Error('A URL da imagem possui redirecionamentos inválidos ou excessivos.')
        }

        const redirectedUrl = new URL(location, currentUrl)
        if (!isAllowedImageUrl(redirectedUrl)) {
            throw new Error('O redirecionamento da imagem aponta para um domínio não permitido.')
        }

        currentUrl = redirectedUrl
    }

    throw new Error('Não foi possível validar a URL da imagem.')
}

export async function POST(request: NextRequest) {
    try {
        if (!process.env.BLOB_READ_WRITE_TOKEN && process.env.NODE_ENV === 'production') {
            return NextResponse.json(
                {
                    message:
                        'O armazenamento permanente de imagens não está configurado. Defina BLOB_READ_WRITE_TOKEN antes de enviar uma imagem.',
                },
                {
                    status: 503,
                }
            )
        }

        const payload = await getPayload({
            config,
        })

        const authResult = await payload.auth({
            headers: request.headers,
        })

        if (!authResult.user) {
            return NextResponse.json(
                {
                    message: 'Você precisa estar logado para enviar uma imagem.',
                },
                {
                    status: 401,
                }
            )
        }

        const formData = await request.formData()

        const file = formData.get('file')
        const sourceUrl = formData.get('sourceUrl')
        const alt = formData.get('alt')

        if (!(file instanceof File) && typeof sourceUrl !== 'string') {
            return NextResponse.json(
                {
                    message: 'Nenhuma imagem foi enviada.',
                },
                {
                    status: 400,
                }
            )
        }

        let imageData: Buffer
        let imageType: string
        let imageName: string
        let imageSize: number

        if (file instanceof File) {
            imageData = Buffer.from(await file.arrayBuffer())
            imageType = file.type
            imageName = file.name
            imageSize = file.size
        } else {
            let parsedUrl: URL

            try {
                parsedUrl = new URL(sourceUrl as string)
            } catch {
                return NextResponse.json({ message: 'URL da imagem invÃ¡lida.' }, { status: 400 })
            }

            if (parsedUrl.protocol !== 'https:') {
                return NextResponse.json({ message: 'A imagem precisa usar uma URL HTTPS.' }, { status: 400 })
            }

            if (!isAllowedImageUrl(parsedUrl)) {
                return NextResponse.json({ message: 'A imagem precisa vir do Instagram.' }, { status: 400 })
            }

            const imageResponse = await fetchAllowedImage(parsedUrl)
            if (!imageResponse.ok) {
                return NextResponse.json({ message: 'NÃ£o foi possÃ­vel baixar a imagem importada.' }, { status: 400 })
            }

            imageType = imageResponse.headers.get('content-type')?.split(';')[0] || ''
            if (!imageType.startsWith('image/')) {
                return NextResponse.json({ message: 'A URL informada nÃ£o Ã© uma imagem.' }, { status: 400 })
            }

            imageData = Buffer.from(await imageResponse.arrayBuffer())
            imageSize = imageData.byteLength
            imageName = `instagram-${Date.now()}.${imageType.split('/')[1] || 'jpg'}`
        }

        if (imageSize > 5 * 1024 * 1024) {
            return NextResponse.json({ message: 'A imagem deve ter no mÃ¡ximo 5 MB.' }, { status: 400 })
        }

        if (typeof alt !== 'string' || !alt.trim()) {
            return NextResponse.json(
                {
                    message: 'O texto alternativo da imagem é obrigatório.',
                },
                {
                    status: 400,
                }
            )
        }

        const media = await payload.create({
            collection: 'media',
            data: {
                alt: alt.trim(),
            },
            file: {
                data: imageData,
                mimetype: imageType,
                name: imageName,
                size: imageSize,
            },
        })

        return NextResponse.json(
            {
                doc: media,
            },
            {
                status: 201,
            }
        )
    } catch (error) {
        console.error('ERRO AO ENVIAR IMAGEM:', error)

        return NextResponse.json(
            {
                message: error instanceof Error ? error.message : 'Erro ao enviar imagem.',
            },
            {
                status: 500,
            }
        )
    }
}
