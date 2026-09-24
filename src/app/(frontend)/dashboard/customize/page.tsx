import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

import config from '@payload-config'

import CustomizeSite from '@/components/dashboard/CustomizeSite'
import CustomizeSite2 from '@/components/dashboard/CustomizeSite2'
import CustomizeSite3 from '@/components/dashboard/CustomizeSite3'
import CustomizeSite4 from '@/components/dashboard/CustomizeSite4'
import CustomizeSite5 from '@/components/dashboard/CustomizeSite5'

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

    if (!user) {
        redirect('/auth/login')
    }

    const templates = {
        fitness: {
            name: 'Template 1 — FITNESS',
            image: '/images/templates.png',
            value: 'template-1',
        },

        premium: {
            name: 'Template 2 — PREMIUM',
            image: '/images/imag2.png',
            value: 'template-2',
        },

        clean: {
            name: 'Template 3 — CLEAN',
            image: '/images/template3.png',
            value: 'template-3',
        },
        feminino: {
            name: 'Template 4 — Vendas',
            image: '/images/template4.png',
            value: 'template-4',
        },
        'template-5': {
            name: 'Template 5 — Link na Bio',
            image: '/images/template5.png',
            value: 'template-5',
        },
    }

    const templateKey = template === 'linkInbio' ? 'template-5' : template
    const selectedTemplate = templates[templateKey as keyof typeof templates] ?? templates.fitness

    const sites = await payload.find({
        collection: 'sites',

        where: {
            user: {
                equals: user.id,
            },
        },

        limit: 1,
        // As imagens ficam dentro de grupos do template. Carregamos a
        // relação de Media para exibir o arquivo que o usuário enviou ao reabrir o editor.
        depth: 2,
    })

    const site = sites.docs[0] ?? null

    if (selectedTemplate.value === 'template-5') {
        return (
            <CustomizeSite5
                key={site?.id ?? 'new-template-5'}
                templateName={selectedTemplate.name}
                templateImage={selectedTemplate.image}
                userName={user.name || ''}
                site={site}
            />
        )
    }

    // ============================================================
    // TEMPLATE 2 — PREMIUM
    // ============================================================

    if (selectedTemplate.value === 'template-2') {
        return (
            <CustomizeSite2
                templateName={selectedTemplate.name}
                templateImage={selectedTemplate.image}
                userName={user.name || ''}
                site={site}
            />
        )
    }

    // ============================================================
    // TEMPLATE 3 — CLEAN
    // ============================================================

    if (selectedTemplate.value === 'template-3') {
        return (
            <CustomizeSite3
                templateName={selectedTemplate.name}
                templateImage={selectedTemplate.image}
                userName={user.name || ''}
                site={site}
            />
        )
    }
    // ============================================================
    // TEMPLATE 1 — FITNESS
    // ============================================================
    if (selectedTemplate.value === 'template-4') {
        return (
            <CustomizeSite4
                templateName={selectedTemplate.name}
                templateImage={selectedTemplate.image}
                userName={user.name || ''}
                site={site}
            />
        )
    }
    return (
        <CustomizeSite
            templateName={selectedTemplate.name}
            templateImage={selectedTemplate.image}
            userName={user.name || ''}
            site={site}
        />
    )
}
