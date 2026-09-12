import { NextRequest, NextResponse } from 'next/server'

import { getPayload } from 'payload'

import config from '../../../../payload.config'

export async function GET(request: NextRequest) {
    try {
        const payload = await getPayload({
            config,
        })

        const authResult = await payload.auth({
            headers: request.headers,
        })

        if (!authResult.user) {
            return NextResponse.json(
                {
                    message: 'Você precisa estar logado.',
                },
                {
                    status: 401,
                }
            )
        }

        const { searchParams } = new URL(request.url)

        const slug = searchParams.get('where[slug][equals]')

        const result = await payload.find({
            collection: 'sites',
            where: slug
                ? {
                      slug: {
                          equals: slug,
                      },
                  }
                : {
                      user: {
                          equals: authResult.user.id,
                      },
                  },
            limit: 1,
        })

        return NextResponse.json(result)
    } catch (error) {
        console.error('ERRO AO BUSCAR SITE:', error)

        return NextResponse.json(
            {
                message: error instanceof Error ? error.message : 'Erro ao buscar site.',
            },
            {
                status: 500,
            }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const payload = await getPayload({
            config,
        })

        const authResult = await payload.auth({
            headers: request.headers,
        })

        if (!authResult.user) {
            return NextResponse.json(
                {
                    message: 'Você precisa estar logado para publicar o site.',
                },
                {
                    status: 401,
                }
            )
        }

        const body = await request.json()

        const site = await payload.create({
            collection: 'sites',
            data: {
                ...body,
                user: authResult.user.id,
            },
        })

        return NextResponse.json(site, {
            status: 201,
        })
    } catch (error) {
        console.error('ERRO AO PUBLICAR SITE:', error)

        return NextResponse.json(
            {
                message: error instanceof Error ? error.message : 'Erro ao publicar site.',
            },
            {
                status: 500,
            }
        )
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const payload = await getPayload({
            config,
        })

        const authResult = await payload.auth({
            headers: request.headers,
        })

        if (!authResult.user) {
            return NextResponse.json(
                {
                    message: 'Você precisa estar logado.',
                },
                {
                    status: 401,
                }
            )
        }

        const { searchParams } = new URL(request.url)

        /*
         * O Admin do Payload envia o ID neste formato:
         *
         * where[and][0][id][in][0]=ID
         *
         * Também aceitamos:
         *
         * where[id][equals]=ID
         */
        const id = searchParams.get('where[and][0][id][in][0]') || searchParams.get('where[id][equals]')

        if (!id) {
            return NextResponse.json(
                {
                    message: 'ID do site não informado.',
                },
                {
                    status: 400,
                }
            )
        }

        /*
         * Busca o site.
         *
         * overrideAccess é usado aqui porque já estamos
         * verificando manualmente o usuário autenticado.
         */
        const site = await payload.findByID({
            collection: 'sites',
            id,
            overrideAccess: true,
        })

        if (!site) {
            return NextResponse.json(
                {
                    message: 'Site não encontrado.',
                },
                {
                    status: 404,
                }
            )
        }

        /*
         * Descobre o ID do usuário dono do site.
         */
        const siteUser = typeof site.user === 'object' && site.user !== null ? site.user.id : site.user

        /*
         * Impede que um usuário exclua o site de outra pessoa.
         */
        if (String(siteUser) !== String(authResult.user.id)) {
            return NextResponse.json(
                {
                    message: 'Você não tem permissão para excluir este site.',
                },
                {
                    status: 403,
                }
            )
        }

        /*
         * Exclui o site.
         */
        const deletedSite = await payload.delete({
            collection: 'sites',
            id,
            overrideAccess: true,
        })

        return NextResponse.json(deletedSite, {
            status: 200,
        })
    } catch (error) {
        console.error('ERRO AO EXCLUIR SITE:', error)

        return NextResponse.json(
            {
                message: error instanceof Error ? error.message : 'Erro ao excluir site.',
            },
            {
                status: 500,
            }
        )
    }
}
