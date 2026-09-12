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
        },

        premium: {
            name: 'Template 2 — PREMIUM',
            image: '/images/templates.png',
        },

        clean: {
            name: 'Template 3 — CLEAN',
            image: '/images/templates.png',
        },
    }

    const selectedTemplate = templates[template as keyof typeof templates] || templates.fitness

    return (
        <CustomizeSite
            templateName={selectedTemplate.name}
            templateImage={selectedTemplate.image}
            userName={user?.name || ''}
        />
    )
}
