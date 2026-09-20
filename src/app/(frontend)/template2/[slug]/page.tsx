import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'

import config from '@/../payload.config'
import Cards6 from '@/components/sections/Cards/Card6'
import { Contact1 } from '@/components/sections/Contact/Contact1'
import { Features3 } from '@/components/sections/Features/Features3'
import { HeroSection2 } from '@/components/sections/hero-section/hero-section2'
import Metrics2 from '@/components/sections/Metrics/Metrics2'
import Testimonials1 from '@/components/sections/testimonials/testimonials1'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

type PageProps = {
    params: Promise<{
        slug: string
    }>
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

export default async function Home({ params }: PageProps) {
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
                        equals: 'template-2',
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

    const template = site.template2

    if (!template) {
        notFound()
    }

    const hero = template.hero
    const metrics = template.metrics ?? []
    const services = template.services
    const about = template.about
    const testimonials = template.testimonials
    const contact = template.contact
    const whatsapp = template.whatsapp

    const heroImage = typeof hero?.img === 'object' && hero.img?.url ? hero.img.url : '/images/imag2.png'

    const aboutImage = typeof about?.img === 'object' && about.img?.url ? about.img.url : '/images/imag3.png'
    const whatsappLink = getWhatsAppLink(whatsapp?.phone, whatsapp?.message)
    const contactLink = getButtonLink(contact?.link, whatsappLink, whatsapp?.message)

    return (
        <main className="min-h-screen bg-[#0C0F0F]">
            <div>
                {/* HERO */}
                <HeroSection2
                    titlePrimary={hero?.titlePrimary ?? 'PERSONAL TRAINING EXCLUSIVO'}
                    title={
                        <>
                            {hero?.title ?? 'Transformação Física Performance para'}

                            <span className="font-medium italic text-color-saffron">
                                {' '}
                                {hero?.titleHighlight ?? 'Líderes de Alto Padrão.'}
                            </span>
                        </>
                    }
                    desc={
                        hero?.desc ??
                        'Metodologia científica individualizada, privacidade absoluta e acompanhamento sob medida para quem valoriza tempo, estética e saúde no mais alto nível.'
                    }
                    button1text={hero?.button1text ?? 'COMECE SUA TRANSFORMAÇÃO'}
                    button1url={whatsappLink}
                    button2text={hero?.button2text ?? 'CONHEÇA O MÉTODO'}
                    button2url="#trabalho"
                    img={heroImage}
                    tag={[
                        {
                            icon: <FaUsers color="#F5C842" size={20} />,
                            text: hero?.tags?.[0]?.text ?? 'Vagas exclusivas',
                        },
                        {
                            icon: <FaStar color="#F5C842" size={20} />,
                            text: hero?.tags?.[1]?.text ?? 'Apenas 8 clientes ativos',
                        },
                        {
                            icon: <CiTimer color="#F5C842" size={20} />,
                            text: hero?.tags?.[2]?.text ?? 'Acompanhamento individual',
                        },
                    ]}
                    cardText={hero?.cardText ?? 'Apenas 8 Clientes Ativos'}
                    cardTitle={hero?.cardTitle ?? 'VAGAS EXCLUSIVAS'}
                />

                {/* MÉTRICAS */}
                <Metrics2
                    metrics={metrics.map((metric) => ({
                        number: metric.number ?? '',
                        text: metric.text ?? '',
                    }))}
                />

                {/* SERVIÇOS */}
                {services && (
                    <Cards6
                        title={services.title ?? 'Treinamento pensado para você.'}
                        desc={
                            services.desc ??
                            'Cada acompanhamento é minuciosamente calibrado para a sua rotina, objetivos biomecânicos e ritmo de vida executivo.'
                        }
                        cards={(services.cards ?? []).map((card, index) => ({
                            desc: card.desc ?? '',
                            title: card.title ?? '',
                            text: card.text ?? '',
                            price: card.price ?? '',

                            option: (card.option ?? []).map((item) => item.text ?? ''),

                            link: card.link ?? '',

                            iconBgColor: index === 0 ? '#D1FAE5' : index === 1 ? '#CCFBF1' : '#DCFCE7',

                            featured: card.featured ?? false,
                        }))}
                    />
                )}

                {/* SOBRE */}
                {about && (
                    <Features3
                        img={aboutImage}
                        title={about.title ?? 'Experiência, dedicação e compromisso com você'}
                        desc={
                            about.desc ??
                            'Meu objetivo é oferecer um acompanhamento de alto nível, com estratégia, atenção individual e ajustes constantes para alcançar resultados consistentes.'
                        }
                        features={(about.features ?? []).map((feature) => ({
                            number: feature.number ?? '',
                            title: feature.title ?? '',
                            desc: feature.desc ?? '',
                        }))}
                    />
                )}

                {/* DEPOIMENTOS */}
                {testimonials?.enabled !== false && (
                    <Testimonials1
                        title={testimonials?.title ?? 'Resultados que falam por si.'}
                        testimonial={(testimonials?.cards ?? []).map((testimonial) => ({
                            name: testimonial.name ?? '',
                            desc: testimonial.desc ?? '',
                            type: testimonial.type ?? '',
                        }))}
                    />
                )}

                {/* CONTATO */}
                {contact && (
                    <Contact1
                        title={contact.title ?? 'Seu próximo nível começa agora.'}
                        desc={
                            contact.desc ??
                            'Treinamento personalizado, estratégia e acompanhamento exclusivo para quem busca resultados de alta performance sem abrir mão do conforto e discrição.'
                        }
                        buttontext={contact.buttontext ?? 'COMECE SUA TRANSFORMAÇÃO'}
                        link={contactLink}
                    />
                )}

                {whatsapp?.enabled !== false && whatsapp?.phone && <WhatsAppFloat phone={whatsapp.phone} />}
            </div>
        </main>
    )
}
