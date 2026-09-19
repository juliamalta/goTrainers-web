import { NextRequest, NextResponse } from 'next/server'

import { getPayload } from 'payload'

import config from '../../../../payload.config'

export async function POST(request: NextRequest) {
    try {
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
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
        const alt = formData.get('alt')

        if (!(file instanceof File)) {
            return NextResponse.json(
                {
                    message: 'Nenhuma imagem foi enviada.',
                },
                {
                    status: 400,
                }
            )
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
                data: Buffer.from(await file.arrayBuffer()),
                mimetype: file.type,
                name: file.name,
                size: file.size,
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
