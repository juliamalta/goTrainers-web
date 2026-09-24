import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'

import config from '@/../payload.config'

import { HeroSection4 } from '@/components/sections/hero-section/hero-section4'
import Metrics3 from '@/components/sections/Metrics/Metrics3'
import Card8 from '@/components/sections/Cards/Card8'
import Results4 from '@/components/sections/Results/Results4'

import AboutUs4 from '@/components/sections/AboutUs/AboutUs4'
import Contact4 from '@/components/sections/Contact/Contact4'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import Cards9 from '@/components/sections/Cards/Card9'

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

// =====================================================
// WHATSAPP
// =====================================================

function getWhatsAppLink(phone: string, message?: string | null) {
    const cleanPhone = phone.replace(/\D/g, '')
    const cleanMessage = message?.trim()

    const query = cleanMessage ? `?text=${encodeURIComponent(cleanMessage)}` : ''

    return `https://wa.me/${cleanPhone}${query}`
}

function getButtonLink(value: string | null | undefined, fallback: string, whatsappMessage?: string | null) {
    const link = value?.trim()

    if (!link) {
        return fallback
    }

    if (/^\+?\d[\d\s()-]*$/.test(link)) {
        return getWhatsAppLink(link, whatsappMessage)
    }

    if (link.startsWith('wa.me/')) {
        return `https://${link}`
    }

    return link
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
                        equals: 'template-4',
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

    const template = site.template4

    if (!template) {
        notFound()
    }

    // =====================================================
    // DADOS
    // =====================================================

    const hero = template.hero
    const metrics = template.metrics
    const method = template.method
    const results = template.results
    const services = template.services
    const about = template.about
    const contact = template.contact
    const whatsapp = template.whatsapp

    // =====================================================
    // IMAGENS
    // =====================================================

    const heroImage = typeof hero?.img === 'object' && hero.img?.url ? hero.img.url : '/images/pessoa4.png'

    const aboutImage = typeof about?.img === 'object' && about.img?.url ? about.img.url : '/images/pessoa4.png'

    // =====================================================
    // WHATSAPP
    // =====================================================

    const whatsappPhone = whatsapp?.phone ?? '5531999999999'

    const whatsappLink = getWhatsAppLink(whatsappPhone, whatsapp?.message)

    const heroButton1Link = getButtonLink(hero?.button1url, whatsappLink, whatsapp?.message)

    const heroButton2Link = getButtonLink(hero?.button2url, '#programa', whatsapp?.message)

    // =====================================================
    // RESULTS
    // =====================================================

    const resultsData = (results?.cards ?? []).map((item) => ({
        beforeLabel: item.beforeLabel ?? '',
        beforeTitle: item.beforeTitle ?? '',
        beforeText: item.beforeText ?? '',

        afterLabel: item.afterLabel ?? '',
        afterTitle: item.afterTitle ?? '',
        afterText: item.afterText ?? '',

        name: item.name ?? '',

        beforeImage: typeof item.beforeImage === 'object' && item.beforeImage?.url ? item.beforeImage.url : '',

        afterImage: typeof item.afterImage === 'object' && item.afterImage?.url ? item.afterImage.url : '',

        quote: item.quote ?? '',
        objective: item.objective ?? '',
        plan: item.plan ?? '',
    }))

    return (
        <main className="min-h-screen bg-color-ivory">
            <div>
                {/* =====================================================
                    HERO
                ===================================================== */}

                <HeroSection4
                    titlePrimary={hero?.titlePrimary ?? 'TREINAMENTO FEMININO'}
                    title={
                        <>
                            {hero?.title ?? 'Treinamento feminino para você se sentir mais '}

                            <span className="font-medium italic text-color-dustyRose">
                                {hero?.titleHighlight ?? 'forte, saudável'}
                            </span>

                            {hero?.titleSecondary ?? ' e confiante.'}
                        </>
                    }
                    desc={
                        hero?.desc ??
                        'Metodologia baseada na fisiologia feminina, planejada para a sua rotina real — seja em casa ou na academia. Conquiste definição, postura e vitalidade com acompanhamento próximo e profissional.'
                    }
                    button1text={hero?.button1text ?? 'Quero começar agora'}
                    button1url={heroButton1Link}
                    button2text={hero?.button2text ?? 'Conhecer o programa'}
                    button2url={heroButton2Link}
                    offer={{
                        label: hero?.offer?.label ?? 'Apenas nesta turma',

                        originalPrice: hero?.offer?.originalPrice ?? 'De R$ 270',

                        price: hero?.offer?.price ?? 'R$ 100',

                        suffix: hero?.offer?.suffix ?? '/mês no plano inicial',

                        savings: hero?.offer?.savings ?? 'Economize R$ 170 e garanta suporte individual.',
                    }}
                    img={heroImage}
                    tag={[
                        {
                            icon: <FaUsers color="#4a192c" size={20} />,
                            text: hero?.tags?.[0]?.text ?? 'Treino 100% personalizado',
                        },
                        {
                            icon: <CiTimer color="#4a192c" size={20} />,
                            text: hero?.tags?.[1]?.text ?? 'Acompanhamento online',
                        },
                        {
                            icon: <FaStar color="#4a192c" size={20} />,
                            text: hero?.tags?.[2]?.text ?? 'Vídeos explicativos em HD',
                        },
                    ]}
                />

                {/* =====================================================
                    MÉTRICAS
                ===================================================== */}

                <Metrics3
                    metrics={[
                        {
                            number: metrics?.[0]?.number ?? '+9 Anos',
                            title: metrics?.[0]?.title ?? 'DE EXPERIÊNCIA',
                            text: metrics?.[0]?.text ?? 'Presencial e Consultoria Online',
                        },
                        {
                            number: metrics?.[1]?.number ?? '100%',
                            title: metrics?.[1]?.title ?? 'TREINOS PERSONALIZADOS',
                            text: metrics?.[1]?.text ?? 'Fisiologia e rotina individual',
                        },
                        {
                            number: metrics?.[2]?.number ?? 'Direto',
                            title: metrics?.[2]?.title ?? 'ACOMPANHAMENTO ONLINE',
                            text: metrics?.[2]?.text ?? 'Feedback e ajustes semanais',
                        },
                        {
                            number: metrics?.[3]?.number ?? 'Para Você',
                            title: metrics?.[3]?.title ?? 'TODOS OS NÍVEIS',
                            text: metrics?.[3]?.text ?? 'Iniciante, intermediária e avançada',
                        },
                    ]}
                />

                {/* =====================================================
                    COMO FUNCIONA
                ===================================================== */}

                <Card8
                    title={method?.title ?? 'Como funciona'}
                    desc={
                        method?.desc ??
                        'Um acompanhamento personalizado, pensado para seus objetivos, sua rotina e seu nível de condicionamento.'
                    }
                    cards={[
                        {
                            number: method?.cards?.[0]?.number ?? '01',
                            title: method?.cards?.[0]?.title ?? 'Conte seus objetivos',
                            text:
                                method?.cards?.[0]?.text ??
                                'Você preenche uma anamnese detalhada sobre seu histórico, dores, nível de condicionamento, rotina diária e tempo disponível para treinar.',
                            iconBgColor: '#F5E7EA',
                        },
                        {
                            number: method?.cards?.[1]?.number ?? '02',
                            title: method?.cards?.[1]?.title ?? 'Receba seu treino personalizado',
                            text:
                                method?.cards?.[1]?.text ??
                                'Desenvolvo seu plano exclusivo de treino, em casa ou na academia, com vídeos demonstrativos e orientações posturais.',
                            iconBgColor: '#F5E7EA',
                        },
                        {
                            number: method?.cards?.[2]?.number ?? '03',
                            title: method?.cards?.[2]?.title ?? 'Evolua com acompanhamento',
                            text:
                                method?.cards?.[2]?.text ??
                                'Tiramos dúvidas, corrigimos sua execução e fazemos ajustes contínuos para manter sua evolução.',
                            iconBgColor: '#F5E7EA',
                        },
                    ]}
                    button1text={method?.button1text ?? 'Garantir minha vaga bonus'}
                    button1url={getButtonLink(method?.button1url, whatsappLink, whatsapp?.message)}
                    cardText={
                        method?.cardText ??
                        '“Assinando qualquer plano, você participa de uma aula online em grupo por mês para tirar dúvidas, melhorar a execução e manter a motivação.”'
                    }
                    cardTitle={method?.cardTitle ?? 'Encontro Mensal em Grupo ao Vivo'}
                />

                {/* =====================================================
                    RESULTADOS
                ===================================================== */}

                {resultsData.length > 0 && <Results4 results={resultsData} />}

                {/* =====================================================
                    SERVIÇOS / PLANOS
                ===================================================== */}

                <Cards9
                    title={services?.title ?? 'Treinamento pensado para você.'}
                    desc={
                        services?.desc ??
                        'Cada acompanhamento é pensado para sua rotina, seus objetivos e seu momento atual.'
                    }
                    cards={(services?.cards ?? []).map((card) => ({
                        desc: card.desc ?? '',
                        title: card.title ?? '',
                        text: card.text ?? '',
                        price: card.price ?? '',

                        option: card.option?.map((option) => option.text ?? '') ?? [],

                        link: getButtonLink(card.link, whatsappLink, whatsapp?.message),

                        iconBgColor: card.iconBgColor ?? '#F5E7EA',

                        featured: card.featured ?? false,
                    }))}
                />

                {/* =====================================================
                    SOBRE
                ===================================================== */}

                <AboutUs4
                    title={about?.title ?? 'Conheça Camila Ribeiro'}
                    description={
                        about?.description ??
                        'Treinadora pessoal que ajuda você a conquistar mais força, disposição e confiança.'
                    }
                    imgTitle={about?.imgTitle ?? 'REGISTRO PROFISSIONAL ATIVO'}
                    imgDesc={about?.imgDesc ?? 'CREF 032253G/MG'}
                    img={aboutImage}
                    paragraphs={about?.paragraphs?.map((paragraph) => paragraph.text ?? '') ?? []}
                    cards={
                        about?.cards?.map((card) => ({
                            title: card.title ?? '',
                            description: card.description ?? '',
                        })) ?? []
                    }
                />

                {/* =====================================================
                    CONTATO
                ===================================================== */}

                <Contact4
                    eyebrow={contact?.eyebrow ?? 'VAGAS LIMITADAS PARA ACOMPANHAMENTO'}
                    title={contact?.title ?? 'Pronta para começar sua transformação?'}
                    description={
                        contact?.description ??
                        'Você não precisa de horas na academia nem de métodos radicais. Precisa apenas de um plano feito para o seu corpo e do suporte certo para não desistir.'
                    }
                    primaryButtonText={contact?.primaryButtonText ?? 'Quero iniciar meu treinamento'}
                    primaryButtonHref={contact?.primaryButtonHref ?? '#anamnese'}
                    secondaryButtonText={contact?.secondaryButtonText ?? 'Falar no WhatsApp'}
                    secondaryButtonHref={whatsappLink}
                />

                {/* =====================================================
                    WHATSAPP
                ===================================================== */}

                {whatsapp?.enabled !== false && <WhatsAppFloat phone={whatsappPhone} />}
            </div>
        </main>
    )
}
