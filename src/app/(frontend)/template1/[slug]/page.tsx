import { notFound } from 'next/navigation'

import { getPayload } from 'payload'

import config from '@payload-config'

import { HeroSection1 } from '@/components/sections/hero-section'

import Cards2 from '@/components/sections/Cards/Card2'

import Metrics1 from '@/components/sections/Metrics/Metrics1'

import { Features2 } from '@/components/sections/Features/Features2'

import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

import Cards5 from '@/components/sections/Cards/Card5'

import Contact from '@/components/sections/Contact/Contact'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

type Media = {
    id?: string | number
    url?: string | null
    alt?: string | null
}

function getMediaUrl(media: string | Media | null | undefined): string {
    if (!media) {
        return ''
    }

    /*
     * Quando o Payload está com depth, a mídia vem como objeto:
     *
     * {
     *     id: '...',
     *     url: '/api/media/file/imagem.jpg'
     * }
     */
    if (typeof media === 'object') {
        return media.url || ''
    }

    /*
     * Caso o Payload ainda retorne apenas uma string,
     * verificamos se ela já é uma URL.
     */
    if (media.startsWith('/') || media.startsWith('http://') || media.startsWith('https://')) {
        return media
    }

    /*
     * Se for somente um ID da mídia, não tentamos inventar
     * uma URL. O depth da consulta abaixo deve trazer o objeto.
     */
    return ''
}

function getWhatsAppLink(phone: string | null | undefined, message?: string | null) {
    const cleanPhone = phone?.replace(/\D/g, '') || ''
    const cleanMessage = message?.trim()
    const query = cleanMessage ? `?text=${encodeURIComponent(cleanMessage)}` : ''

    return cleanPhone ? `https://wa.me/${cleanPhone}${query}` : '#contato'
}

function getButtonLink(value: string | null | undefined, fallback: string, message?: string | null) {
    const link = value?.trim()

    if (!link) return fallback
    if (/^\+?\d[\d\s()-]*$/.test(link)) return getWhatsAppLink(link, message)
    if (link.startsWith('wa.me/')) return `https://${link}`

    return link
}

export default async function SitePage({ params }: PageProps) {
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
                    template: {
                        equals: 'template-1',
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

        /*
         * IMPORTANTE:
         *
         * Isso faz o Payload popular os relacionamentos de Media.
         *
         * Assim:
         *
         * img: 'ID_DA_MEDIA'
         *
         * vira:
         *
         * img: {
         *     id: 'ID_DA_MEDIA',
         *     url: '/api/media/file/imagem.jpg',
         *     alt: '...'
         * }
         */
        depth: 2,
    })

    const site = result.docs[0] as any

    if (!site) {
        notFound()
    }

    const template = site.template1

    if (!template) {
        notFound()
    }

    /*
     * ============================================================
     * IMAGENS
     * ============================================================
     */

    const heroImage = getMediaUrl(template.hero?.img)

    const aboutImage = getMediaUrl(template.about?.img)

    const whatsappLink = getWhatsAppLink(template.whatsapp?.phone, template.whatsapp?.message)
    const heroButtonLink = getButtonLink(template.hero?.button1url, whatsappLink, template.whatsapp?.message)
    const contactButtonLink = getButtonLink(template.contact?.buttonurl, whatsappLink, template.whatsapp?.message)

    return (
        <main className="min-h-screen bg-[#0C0F0F]">
            <div>
                {/* =====================================================
                    HERO
                ===================================================== */}

                <HeroSection1
                    titlePrimary={template.hero?.titlePrimary || ''}
                    title={
                        <>
                            {template.hero?.title || ''}{' '}
                            {template.hero?.titleHighlight && (
                                <span className="font-bold text-color-malachite">{template.hero.titleHighlight}</span>
                            )}
                        </>
                    }
                    desc={template.hero?.desc || ''}
                    button1text={template.hero?.button1text || ''}
                    button1url={heroButtonLink}
                    img={heroImage}
                />

                {/* =====================================================
                    MÉTRICAS
                ===================================================== */}

                <Metrics1
                    metrics={(template.metrics || []).map((metric: any) => ({
                        number: metric.number || '',
                        text: metric.text || '',
                    }))}
                />

                {/* =====================================================
                    SERVIÇOS
                ===================================================== */}

                <Cards5
                    title={template.services?.title || ''}
                    desc={template.services?.desc || ''}
                    cards={(template.services?.cards || []).map((card: any) => ({
                        title: card.title || '',
                        desc: card.desc || '',
                        text: card.text || '',

                        /*
                         * PREÇO
                         */
                        price: card.price || '',

                        /*
                         * OPÇÕES
                         *
                         * Payload:
                         *
                         * [
                         *     { text: 'opção 1' },
                         *     { text: 'opção 2' }
                         * ]
                         *
                         * CardPlan:
                         *
                         * [
                         *     'opção 1',
                         *     'opção 2'
                         * ]
                         */
                        option: (card.option || []).map((item: any) => item?.text || '').filter(Boolean),

                        /*
                         * LINK
                         */
                        link: card.link || '',

                        /*
                         * DESTAQUE
                         */
                        featured: Boolean(card.featured),
                    }))}
                />

                {/* =====================================================
                    SOBRE O PROFISSIONAL
                ===================================================== */}

                <Features2
                    img={aboutImage}
                    title={template.about?.title || ''}
                    desc={template.about?.desc || ''}
                    features={(template.about?.features || []).map((feature: any) => ({
                        title: feature.title || '',
                    }))}
                />

                {/* =====================================================
                    DEPOIMENTOS
                ===================================================== */}

                <Cards2
                    title={template.testimonials?.title || ''}
                    desc={template.testimonials?.desc || ''}
                    cards={(template.testimonials?.cards || []).map((card: any) => ({
                        name: card.name || '',
                        text: card.text || '',
                    }))}
                />

                {/* =====================================================
                    CONTATO
                ===================================================== */}

                <Contact
                    title={
                        <>
                            {template.contact?.title || ''}

                            <br />

                            <span className="font-bold text-color-malachite">
                                {template.contact?.titleHighlight || ''}
                            </span>
                        </>
                    }
                    text={template.contact?.text || ''}
                    buttontext={template.contact?.buttontext || ''}
                    buttonurl={contactButtonLink}
                />

                {/* =====================================================
                    WHATSAPP
                ===================================================== */}

                {template.whatsapp?.enabled && <WhatsAppFloat phone={template.whatsapp?.phone || ''} />}
            </div>
        </main>
    )
}
