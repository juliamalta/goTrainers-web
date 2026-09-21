import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

import config from '@payload-config'
import InstagramImport from '@/app/(frontend)/dashboard/InstagramImport'

interface InstagramPageProps {
    searchParams: Promise<{
        template?: string
    }>
}

export default async function InstagramPage({ searchParams }: InstagramPageProps) {
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

    const validTemplates = ['fitness', 'premium', 'clean']

    if (!validTemplates.includes(template)) {
        redirect('/dashboard')
    }

    return <InstagramImport template={template} />
}
