import { notFound } from 'next/navigation'

import { getPayload } from 'payload'

import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'

import {
    Accessibility,
    ChartNoAxesCombined,
    DraftingCompass,
    Dumbbell,
    RefreshCw,
    TrendingUp,
    UserRoundSearch,
    Zap,
} from 'lucide-react'

import config from '@/../payload.config'

import { HeroSection3, MethodTicker } from '@/components/sections/hero-section/hero-section3'
import AboutUs1 from '@/components/sections/AboutUs/AboutUs'
import AboutUs2 from '@/components/sections/AboutUs/About2'
import AboutUs3 from '@/components/sections/AboutUs/AboutUs3'
import Card7 from '@/components/sections/Cards/Card7'
import { Forms1 } from '@/components/sections/Form/Forms1'
import { Features4 } from '@/components/sections/Features/Features4'
import Testimonials2 from '@/components/sections/testimonials/testimonial2'
import Feelings1 from '@/components/sections/Feelings/Feelings1'
import Contact3 from '@/components/sections/Contact/Contact3'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

type PageProps = {
    params: Promise<{
        slug: string
    }>
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
                        equals: 'template-3',
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

    const template = site.template3

    if (!template) {
        notFound()
    }

    // =====================================================
    // DADOS
    // =====================================================

    const hero = template.hero
    const about = template.about
    const method = template.method
    const personalization = template.personalization
    const form = template.form
    const features = template.features
    const motivation = template.motivation
    const testimonials = template.testimonials
    const feelings = template.feelings
    const contact = template.contact
    const whatsapp = template.whatsapp

    // =====================================================
    // IMAGENS
    // =====================================================

    const heroImage = typeof hero?.img === 'object' && hero.img?.url ? hero.img.url : '/images/image3.png'

    const featuresImage =
        typeof features?.img === 'object' && features.img?.url ? features.img.url : '/images/img12.png'

    // =====================================================
    // WHATSAPP
    // =====================================================

    const whatsappPhone = whatsapp?.phone ?? '5531999999999'

    const whatsappLink = `https://wa.me/${whatsappPhone}`

    // =====================================================
    // SINTONIA E PROPÓSITO
    // =====================================================

    const feelingsData = [
        {
            label: 'FORTE',
            title: feelings?.forte?.title ?? 'SENTIR-SE FORTE',
            description:
                feelings?.forte?.description ??
                'Construir força para realizar as tarefas do dia a dia com mais segurança, autonomia e confiança.',
        },
        {
            label: 'DISPOSTO',
            title: feelings?.disposto?.title ?? 'SENTIR-SE DISPOSTO',
            description:
                feelings?.disposto?.description ??
                'Recuperar a energia para enfrentar uma rotina intensa sem terminar o dia completamente esgotado.',
        },
        {
            label: 'CONFIANTE',
            title: feelings?.confiante?.title ?? 'SENTIR-SE CONFIANTE',
            description:
                feelings?.confiante?.description ??
                'Desenvolver consciência corporal e segurança para se movimentar melhor dentro e fora do treino.',
        },
        {
            label: 'LEVE',
            title: feelings?.leve?.title ?? 'SENTIR-SE LEVE',
            description:
                feelings?.leve?.description ??
                'Aliviar tensões acumuladas nos ombros e trapézio através de soltura e mobilidade direcionada.',
        },
        {
            label: 'ATIVO',
            title: feelings?.ativo?.title ?? 'SENTIR-SE ATIVO',
            description:
                feelings?.ativo?.description ??
                'Manter o corpo em movimento com uma rotina de exercícios possível, prazerosa e consistente.',
        },
        {
            label: 'SAUDÁVEL',
            title: feelings?.saudavel?.title ?? 'SENTIR-SE SAUDÁVEL',
            description:
                feelings?.saudavel?.description ??
                'Criar hábitos de movimento que contribuam para sua saúde, bem-estar e qualidade de vida a longo prazo.',
        },
        {
            label: 'CAPAZ',
            title: feelings?.capaz?.title ?? 'SENTIR-SE CAPAZ',
            description:
                feelings?.capaz?.description ??
                'Conquistar mais mobilidade, resistência e independência para fazer o que você gosta sem medo ou limitações.',
        },
    ]

    return (
        <main className="min-h-screen bg-white">
            <div>
                {/* HERO */}

                <HeroSection3
                    titlePrimary={hero?.titlePrimary ?? 'PERSONAL TRAINER • PERFORMANCE • SAÚDE • WELLNESS'}
                    title={
                        <>
                            {hero?.title ?? 'Seu corpo pode mais.'}
                            <br />
                            {hero?.titleSecondary ?? 'Seu treino pode ser'}{' '}
                            <span className="font-medium italic">{hero?.titleHighlight ?? 'diferente.'}</span>
                        </>
                    }
                    desc={
                        hero?.desc ??
                        'Treinos personalizados para construir força, disposição e uma rotina sustentável que realmente funcione na sua vida. Sem extremismos, com precisão biomecânica.'
                    }
                    button1text={hero?.button1text ?? 'COMEÇAR MINHA JORNADA'}
                    button2text={hero?.button2text ?? 'CONHECER MEU MÉTODO'}
                    img={heroImage}
                    tag={[
                        {
                            icon: <FaUsers color="#F5C842" size={20} />,
                            text: hero?.tags?.[0]?.text ?? '+120 alunos transformados',
                        },
                        {
                            icon: <FaStar color="#F5C842" size={20} />,
                            text: hero?.tags?.[1]?.text ?? 'Avaliação 4.9',
                        },
                        {
                            icon: <CiTimer color="#F5C842" size={20} />,
                            text: hero?.tags?.[2]?.text ?? 'Online + Presencial',
                        },
                    ]}
                    cardText={hero?.cardText ?? '+120 ALUNOS TRANSFORMADOS'}
                    cardTitle={hero?.cardTitle ?? '100% PERSONALIZADO'}
                />

                {/* TICKER */}

                <MethodTicker />

                {/* NOVA FORMA DE TREINAR */}

                <AboutUs1
                    eyebrow={about?.eyebrow ?? 'Uma nova forma de treinar'}
                    title={about?.title ?? 'Não é sobre treinar mais'}
                    highlightedTitle={
                        <>
                            É sobre <em className="rounded-full bg-color-softgray px-2 sm:px-3">entender</em> seu corpo,
                            construir <em className="rounded-full bg-color-softgray px-2 sm:px-3">constância</em> e
                            transformar <em className="rounded-full bg-color-softgray px-2 sm:px-3">movimento</em> em
                            parte natural da sua <em className="rounded-full bg-color-softgray px-2 sm:px-3">vida</em>.
                        </>
                    }
                    description={
                        about?.description ??
                        'Sem metas irreais que te esgotam na terceira semana. Construímos autonomia, força real e longevidade através de ciência do movimento e empatia.'
                    }
                />

                {/* PROCESSO ESTRUTURADO */}

                <Card7
                    title={method?.title ?? 'Um método pensado para você.'}
                    desc={
                        method?.desc ??
                        'Não existem duas rotinas iguais. Por isso, seu treino também não deveria ser igual ao de todo mundo.'
                    }
                    cards={[
                        {
                            title: method?.cards?.[0]?.title ?? 'Conhecer',
                            text:
                                method?.cards?.[0]?.text ??
                                'Entender sua rotina real, histórico articular, preferências, dores e o tempo efetivo disponível na sua semana.',
                            icon: <UserRoundSearch size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                        {
                            title: method?.cards?.[1]?.title ?? 'Planejar',
                            text:
                                method?.cards?.[1]?.text ??
                                'Criar uma estratégia biomecânica customizada: séries, cargas, intensidade e mobilidade adequadas ao seu momento.',
                            icon: <DraftingCompass size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                        {
                            title: method?.cards?.[2]?.title ?? 'Acompanhar',
                            text:
                                method?.cards?.[2]?.text ??
                                'Feedback contínuo e ajustes dinâmicos. A vida oscila e o treino precisa se adaptar às suas semanas boas e difíceis.',
                            icon: <ChartNoAxesCombined size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                        {
                            title: method?.cards?.[3]?.title ?? 'Evoluir',
                            text:
                                method?.cards?.[3]?.text ??
                                'Consolidação de força, tônus muscular e postura sustentável. O resultado é consequência da consistência.',
                            icon: <TrendingUp size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                    ]}
                />

                {/* PERSONALIZAÇÃO */}

                <AboutUs2
                    eyebrow={personalization?.eyebrow ?? 'PERSONALIZAÇÃO DE VERDADE'}
                    title={personalization?.title ?? 'Seu treino ainda não existe.'}
                    highlightedTitle={personalization?.highlightedTitle ?? 'Porque primeiro eu preciso conhecer você.'}
                    description={
                        personalization?.description ??
                        'Responda algumas perguntas rápidas para eu entender seu momento atual, limitações, histórico e o que realmente faz sentido para sua rotina.'
                    }
                    button2text={personalization?.button2text ?? 'Quero começar minha avaliação'}
                />

                {/* ANAMNESE */}

                <Forms1
                    title={form?.title ?? 'Vamos conhecer você.'}
                    desc={form?.desc ?? 'Conte um pouco sobre suas medidas básicas:'}
                    contact={[]}
                />

                {/* FUNDAMENTOS CINÉTICOS */}

                <Features4
                    img={featuresImage}
                    title={features?.title ?? 'Seu corpo em movimento contínuo.'}
                    features={[
                        {
                            number: '01.',
                            title: features?.items?.[0]?.title ?? 'Força Sustentável',
                            desc:
                                features?.items?.[0]?.desc ??
                                'A musculatura protege suas articulações, regula o metabolismo e desacelera o envelhecimento ósseo-celular.',
                            icon: <Dumbbell size={18} strokeWidth={1.8} />,
                        },
                        {
                            number: '02.',
                            title: features?.items?.[1]?.title ?? 'Mobilidade Funcional',
                            desc:
                                features?.items?.[1]?.desc ??
                                'Amplitude e liberdade para sentar, agachar, carregar compras e brincar sem dores articulares nas costas.',
                            icon: <Accessibility size={18} strokeWidth={1.8} />,
                        },
                        {
                            number: '03.',
                            title: features?.items?.[2]?.title ?? 'Energia & Disposição',
                            desc:
                                features?.items?.[2]?.desc ??
                                'Treinar não é para cansar seu dia; é para encher seu dia de clareza mental e vitalidade renovada.',
                            icon: <Zap size={18} strokeWidth={1.8} />,
                        },
                        {
                            number: '04.',
                            title: features?.items?.[3]?.title ?? 'Constância Real',
                            desc:
                                features?.items?.[3]?.desc ??
                                'A rotina que se sustenta ao longo dos anos, respeitando períodos de descanso, trabalho e férias.',
                            icon: <RefreshCw size={18} strokeWidth={1.8} />,
                        },
                    ]}
                />

                {/* CTA INTERMEDIÁRIO */}

                <AboutUs3
                    title={motivation?.title ?? 'Você não precisa estar pronto. Só precisa'}
                    highlightedTitle={motivation?.highlightedTitle ?? 'começar.'}
                    description={
                        motivation?.description ??
                        'A evolução acontece a cada sessão executada com consciência e paciência.'
                    }
                    button2text={motivation?.button2text ?? 'DAR O PRIMEIRO PASSO'}
                />

                {/* DEPOIMENTOS */}

                {testimonials?.enabled !== false && (
                    <Testimonials2
                        title={testimonials?.title ?? 'Quem treina com o método'}
                        testimonial={(testimonials?.cards ?? []).map((testimonial) => ({
                            name: testimonial.name ?? '',
                            type: testimonial.type ?? '',
                            desc: testimonial.desc ?? '',
                            rating: testimonial.rating ?? 5,
                            avatar:
                                typeof testimonial.avatar === 'object' && testimonial.avatar?.url
                                    ? testimonial.avatar.url
                                    : '',
                        }))}
                    />
                )}

                {/* SINTONIA E PROPÓSITO */}

                <Feelings1
                    eyebrow={feelings?.eyebrow ?? 'SINTONIA E PROPÓSITO'}
                    title={feelings?.title ?? 'Como você quer se sentir?'}
                    description={
                        feelings?.description ??
                        'Clique nos sentimentos abaixo para descobrir o caminho de treino ideal:'
                    }
                    defaultFeeling={feelings?.defaultFeeling ?? 'LEVE'}
                    feelings={feelingsData}
                />

                {/* CONTATO */}

                <Contact3
                    eyebrow={contact?.eyebrow ?? 'PRÓXIMO PASSO'}
                    title={contact?.title ?? 'Vamos construir uma rotina que realmente funcione para você?'}
                    description={
                        contact?.description ??
                        'Preencha a breve anamnese ou mande uma mensagem direta no WhatsApp para alinharmos seu formato ideal.'
                    }
                    primaryButtonText={contact?.primaryButtonText ?? 'PREENCHER ANAMNESE INICIAL'}
                    primaryButtonHref={contact?.primaryButtonHref ?? '#anamnese'}
                    secondaryButtonText={contact?.secondaryButtonText ?? 'CONVERSAR NO WHATSAPP'}
                    secondaryButtonHref={whatsappLink}
                />

                {/* WHATSAPP */}

                {whatsapp?.enabled !== false && <WhatsAppFloat phone={whatsappPhone} />}
            </div>
        </main>
    )
}
