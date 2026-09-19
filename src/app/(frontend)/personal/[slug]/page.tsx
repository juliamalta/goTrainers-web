import { notFound } from 'next/navigation'

import { getPayload } from 'payload'

import config from '@payload-config'
import Template1Page from '@/app/(frontend)/template1/[slug]/page'
import Template2Page from '@/app/(frontend)/template2/[slug]/page'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function PersonalPage({ params }: PageProps) {
    const { slug } = await params

    const payload = await getPayload({
        config,
    })

    const result = await payload.find({
        collection: 'sites',
        where: {
            and: [
                {
                    slug: {
                        equals: slug,
                    },
                },
                {
                    published: {
                        equals: true,
                    },
                },
            ],
        },
        limit: 1,
        depth: 0,
    })

    const site = result.docs[0]

    if (!site) {
        notFound()
    }

    switch (site.template) {
        case 'template-1':
            return <Template1Page params={Promise.resolve({ slug })} />

        case 'template-2':
            return <Template2Page params={Promise.resolve({ slug })} />

        default:
            notFound()
    }
}
