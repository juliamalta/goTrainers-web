import { NextResponse } from 'next/server'
import { ApifyClient } from 'apify-client'

const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
})

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const username = String(body.username || '')
            .replace('@', '')
            .trim()

        if (!username) {
            return NextResponse.json({ error: 'Informe seu Instagram.' }, { status: 400 })
        }

        if (!process.env.APIFY_API_TOKEN) {
            console.error('APIFY_API_TOKEN não configurado')

            return NextResponse.json({ error: 'Serviço de Instagram não configurado.' }, { status: 500 })
        }

        // Executa o Instagram Profile Scraper
        const run = await client.actor('apify/instagram-profile-scraper').call({
            usernames: [username],
        })

        // Busca o resultado
        const { items } = await client.dataset(run.defaultDatasetId).listItems()

        if (!items.length) {
            return NextResponse.json({ error: 'Perfil do Instagram não encontrado.' }, { status: 404 })
        }

        const result = items[0]

        // Retornamos somente o que o GoTrainers precisa
        const profile = {
            username: result.username ?? username,
            name: result.fullName ?? '',
            biography: result.biography ?? '',
            profilePicture: result.profilePicUrl ?? '',
            followersCount: result.followersCount ?? 0,
            followingCount: result.followsCount ?? 0,
            postsCount: result.postsCount ?? 0,
            private: result.private ?? false,
            verified: result.verified ?? false,
            isBusinessAccount: result.isBusinessAccount ?? false,
        }

        return NextResponse.json({
            success: true,
            profile,
        })
    } catch (error) {
        console.error('Erro Apify:', error)

        return NextResponse.json({ error: 'Não foi possível importar esse Instagram.' }, { status: 500 })
    }
}
