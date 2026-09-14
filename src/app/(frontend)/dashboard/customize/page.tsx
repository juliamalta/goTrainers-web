import { headers } from 'next/headers'

import { getPayload } from 'payload'

import config from '@payload-config'

import CustomizeSite from '@/components/dashboard/CustomizeSite'

interface CustomizePageProps {
    searchParams: Promise<{
        template?: string
    }>
}

export default async function CustomizePage({ searchParams }: CustomizePageProps) {
    const params = await searchParams

    const template = params.template || 'fitness'

    const payload = await getPayload({
        config,
    })

    const { user } = await payload.auth({
        headers: await headers(),
    })

    const templates = {
        fitness: {
            name: 'Template 1 — FITNESS',
            image: '/images/templates.png',
            value: 'template-1',
        },

        premium: {
            name: 'Template 2 — PREMIUM',
            image: '/images/templates.png',
            value: 'template-2',
        },

        clean: {
            name: 'Template 3 — CLEAN',
            image: '/images/templates.png',
            value: 'template-3',
        },
    }

    const selectedTemplate = templates[template as keyof typeof templates] || templates.fitness

    let site = null

    if (user) {
        const sites = await payload.find({
            collection: 'sites',
            where: {
                user: {
                    equals: user.id,
                },
                template: {
                    equals: selectedTemplate.value,
                },
            },
            limit: 1,
            depth: 1,
        })

        site = sites.docs[0] || null
    }

    return (
        <CustomizeSite
            templateName={selectedTemplate.name}
            templateImage={selectedTemplate.image}
            userName={user?.name || ''}
            site={site}
        />
    )
}
