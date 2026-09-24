import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa6'

import config from '@/../payload.config'

import { HeroSection5, type HeroSection5Theme } from '@/components/sections/hero-section/hero-section5'

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

// =====================================================
// MEDIA
// =====================================================

function getMediaUrl(media: unknown, fallback: string) {
    if (typeof media === 'object' && media && 'url' in media && typeof media.url === 'string' && media.url) {
        return media.url
    }

    if (typeof media === 'string' && (media.startsWith('/') || /^https?:\/\//.test(media))) {
        return media
    }

    return fallback
}

// =====================================================
// WHATSAPP
// =====================================================

function getWhatsAppLink(phone: string) {
    const cleanPhone = phone.replace(/\D/g, '')

    return `https://wa.me/${cleanPhone}`
}

// =====================================================
// SOCIAL ICON
// =====================================================

function getSocialIcon(type?: string | null) {
    switch (type) {
        case 'instagram':
            return <FaInstagram size={24} />

        case 'whatsapp':
            return <FaWhatsapp size={24} />

        case 'tiktok':
            return <FaTiktok size={24} />

        case 'youtube':
            return <FaYoutube size={24} />

        case 'facebook':
            return <FaFacebookF size={24} />

        default:
            return null
    }
}

// =====================================================
// PAGE
// =====================================================

export default async function Home({ params }: PageProps) {
    const { slug } = await params

    const payload = await getPayload({
        config,
    })

    // =====================================================
    // BUSCA SITE PELO SLUG
    // =====================================================

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
                        equals: 'template-5',
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
        depth: 2,
    })

    const site = result.docs[0]

    if (!site) {
        notFound()
    }

    const template = site.template5

    if (!template) {
        notFound()
    }

    // =====================================================
    // DADOS
    // =====================================================

    const hero = template.hero
    const socials = template.socialLinks ?? []
    const cards = template.cards ?? []

    // =====================================================
    // IMAGEM
    // =====================================================

    const profileImage = getMediaUrl(hero?.profileImage, '/images/pessoa4.png')

    // =====================================================
    // THEME
    // =====================================================

    const theme = (template.theme ?? 'neon') as HeroSection5Theme

    // =====================================================
    // SOCIAL LINKS
    // =====================================================

    const socialLinks = socials.map((social) => {
        let href = social.href ?? '#'

        if (social.type === 'whatsapp' && social.href && /^\+?\d[\d\s()-]*$/.test(social.href)) {
            href = getWhatsAppLink(social.href)
        }

        return {
            label: social.label ?? '',
            href,
            icon: getSocialIcon(social.type),
        }
    })

    // =====================================================
    // CARDS
    // =====================================================

    const cardsData = cards.map((card) => {
        let href = card.href ?? '#'

        if (card.type === 'whatsapp' && card.href && /^\+?\d[\d\s()-]*$/.test(card.href)) {
            href = getWhatsAppLink(card.href)
        }

        return {
            title: card.title ?? '',
            description: card.description ?? '',
            href,
            icon: card.type === 'whatsapp' ? <FaWhatsapp size={23} /> : undefined,
            highlighted: card.highlighted ?? false,
            mostPopular: card.mostPopular ?? false,
        }
    })

    return (
        <main className="min-h-screen bg-color-ivory">
            <div>
                {/* =====================================================
                    HERO / LINK NA BIO
                ===================================================== */}

                <HeroSection5
                    theme={theme}
                    titlePrimary={hero?.titlePrimary ?? 'Vagas abertas para consultoria'}
                    profileName={hero?.profileName ?? 'Alex Andrade'}
                    profileUsername={hero?.profileUsername ?? '@AlexAndrade'}
                    profileDescription={
                        hero?.profileDescription ??
                        'Ajudo você a transformar seu corpo através de treino personalizado, biomecânica inteligente e acompanhamento profissional diário.'
                    }
                    profileImage={profileImage}
                    socialLinks={socialLinks}
                    cards={cardsData}
                />
            </div>
        </main>
    )
}
