import { notFound } from 'next/navigation'

import { getPayload } from 'payload'
import config from '@payload-config'

import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'

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

export default async function SitePage({ params }: PageProps) {
    const { slug } = await params

    const payload = await getPayload({
        config,
    })

    const result = await payload.find({
        collection: 'sites',
        where: {
            slug: {
                equals: slug,
            },
        },
        limit: 1,
    })

    const site = result.docs[0] as any

    if (!site) {
        notFound()
    }

    const template = site.template1

    if (!template) {
        notFound()
    }

    const getHeroIcon = (icon: string) => {
        switch (icon) {
            case 'users':
                return <FaUsers color="#00E676" size={20} />

            case 'star':
                return <FaStar color="#00E676" size={20} />

            case 'timer':
                return <CiTimer color="#00E676" size={20} />

            default:
                return null
        }
    }

    const heroTags = template.hero.tags.map((item: any) => ({
        text: item.text,
        icon: getHeroIcon(item.icon),
    }))

    return (
        <main className="min-h-screen bg-[#0C0F0F]">
            <div>
                {/* =====================================================
                    HERO
                ===================================================== */}

                <HeroSection1
                    titlePrimary={template.hero.titlePrimary}
                    title={
                        <>
                            {template.hero.title}{' '}
                            <span className="font-bold text-color-malachite">{template.hero.titleHighlight}</span>
                        </>
                    }
                    desc={template.hero.desc}
                    button1text={template.hero.button1text}
                    img={typeof template.hero.img === 'object' ? template.hero.img?.url || '' : ''}
                    tag={heroTags}
                />

                {/* =====================================================
                    MÉTRICAS
                ===================================================== */}

                <Metrics1
                    metrics={template.metrics.map((metric: any) => ({
                        number: metric.number,
                        text: metric.text,
                    }))}
                />

                {/* =====================================================
                    SERVIÇOS
                ===================================================== */}

                <Cards5
                    title={template.services.title}
                    desc={template.services.desc}
                    cards={template.services.cards.map((card: any) => ({
                        title: card.title,
                        desc: card.desc,
                        text: card.text,
                        number: card.number,
                        iconBgColor: card.iconBgColor,
                        featured: card.featured,
                    }))}
                />

                {/* =====================================================
                    SOBRE O PROFISSIONAL
                ===================================================== */}

                <Features2
                    img={typeof template.about.img === 'object' ? template.about.img?.url || '' : ''}
                    title={template.about.title}
                    desc={template.about.desc}
                    features={template.about.features.map((feature: any) => ({
                        title: feature.title,
                    }))}
                />

                {/* =====================================================
                    DEPOIMENTOS
                ===================================================== */}

                <Cards2
                    title={template.testimonials.title}
                    desc={template.testimonials.desc}
                    cards={template.testimonials.cards.map((card: any) => ({
                        name: card.name,
                        text: card.text,
                        icon: card.icon,
                        iconBgColor: card.iconBgColor,
                    }))}
                />

                {/* =====================================================
                    CONTATO
                ===================================================== */}

                <Contact
                    title={
                        <>
                            {template.contact.title}
                            <br />
                            <span className="font-bold text-color-malachite">{template.contact.titleHighlight}</span>
                        </>
                    }
                    text={template.contact.text}
                    buttontext={template.contact.buttontext}
                />

                {/* =====================================================
                    WHATSAPP
                ===================================================== */}

                {template.whatsapp.enabled && <WhatsAppFloat phone={template.whatsapp.phone} />}
            </div>
        </main>
    )
}
