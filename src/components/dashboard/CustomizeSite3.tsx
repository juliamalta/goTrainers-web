'use client'

import * as React from 'react'
import Link from 'next/link'

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

import { CiTimer } from 'react-icons/ci'
import { FaStar, FaUsers } from 'react-icons/fa6'

import AboutUs1 from '@/components/sections/AboutUs/AboutUs'
import AboutUs2 from '@/components/sections/AboutUs/About2'
import AboutUs3 from '@/components/sections/AboutUs/AboutUs3'
import Card7 from '@/components/sections/Cards/Card7'
import Contact3 from '@/components/sections/Contact/Contact3'
import Feelings1 from '@/components/sections/Feelings/Feelings1'
import { Features4 } from '@/components/sections/Features/Features4'
import { Forms1 } from '@/components/sections/Form/Forms1'
import { HeroSection3, MethodTicker } from '@/components/sections/hero-section/hero-section3'
import Testimonials2 from '@/components/sections/testimonials/testimonial2'
import { Button } from '@/components/ui/button'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

import type { Media, Site } from '../../../payload-types'

// ================================================================
// TYPES
// ================================================================

interface CustomizeSite3Props {
    templateName: string
    templateImage: string
    userName: string
    site?: Site | null
}

type MediaValue = string | number | Media | null | undefined

type FeelingKey = 'FORTE' | 'DISPOSTO' | 'CONFIANTE' | 'LEVE' | 'ATIVO' | 'SAUDÁVEL' | 'CAPAZ'

interface Template3Data {
    hero: {
        titlePrimary: string
        title: string
        titleSecondary: string
        titleHighlight: string
        desc: string
        button1text: string
        button1url: string
        button2text: string
        button2url: string
        img: string
        cardTitle: string
        cardText: string
    }

    about: {
        eyebrow: string
        title: string
        highlightedStart: string
        highlightedUnderstand: string
        highlightedConstancy: string
        highlightedMovement: string
        highlightedLife: string
        description: string
    }

    method: {
        title: string
        desc: string
        cards: {
            title: string
            text: string
        }[]
    }

    personalization: {
        eyebrow: string
        title: string
        highlightedTitle: string
        description: string
        button2text: string
        button2url: string
    }

    form: {
        title: string
        desc: string
    }

    features: {
        img: string
        title: string
        items: {
            title: string
            desc: string
        }[]
    }

    motivation: {
        title: string
        highlightedTitle: string
        description: string
        button2text: string
    }

    testimonials: {
        enabled: boolean
        title: string
        cards: {
            name: string
            type: string
            desc: string
            rating: number
            avatar: string
        }[]
    }

    feelings: {
        eyebrow: string
        title: string
        description: string
        defaultFeeling: FeelingKey

        forte: FeelingData
        disposto: FeelingData
        confiante: FeelingData
        leve: FeelingData
        ativo: FeelingData
        saudavel: FeelingData
        capaz: FeelingData
    }

    contact: {
        eyebrow: string
        title: string
        description: string
        primaryButtonText: string
        primaryButtonHref: string
        secondaryButtonText: string
        secondaryButtonHref: string
    }

    whatsapp: {
        enabled: boolean
        phone: string
        message: string
    }
}

interface FeelingData {
    title: string
    description: string
}

// ================================================================
// MEDIA HELPERS
// ================================================================

function getMediaUrl(media: MediaValue, fallback = ''): string {
    if (typeof media === 'object' && media !== null && media.url) {
        return media.url
    }

    return fallback
}

function getMediaId(media: MediaValue): string | null {
    if (!media) {
        return null
    }

    if (typeof media === 'string' || typeof media === 'number') {
        return String(media)
    }

    if (media.id) {
        return String(media.id)
    }

    return null
}

function getMediaAlt(media: MediaValue, fallback: string): string {
    if (typeof media === 'object' && media !== null && media.alt) {
        return media.alt
    }

    return fallback
}

// ================================================================
// INITIAL DATA
// ================================================================

function createInitialData(site: Site | null | undefined): Template3Data {
    const saved = site?.template3

    const defaults: Template3Data = {
        hero: {
            titlePrimary: 'PERSONAL TRAINER • PERFORMANCE • SAÚDE • WELLNESS',

            title: 'Seu corpo pode mais.',

            titleSecondary: 'Seu treino pode ser',

            titleHighlight: 'diferente.',

            desc: 'Treinos personalizados para construir força, disposição e uma rotina sustentável que realmente funcione na sua vida. Sem extremismos, com precisão biomecânica.',

            button1text: 'COMEÇAR MINHA JORNADA',

            button1url: '#anamnese',

            button2text: 'CONHECER MEU MÉTODO',

            button2url: '#metodo',

            img: '/images/image3.png',

            cardTitle: '100% PERSONALIZADO',

            cardText: '+120 ALUNOS TRANSFORMADOS',
        },

        about: {
            eyebrow: 'Uma nova forma de treinar',

            title: 'Não é sobre treinar mais',

            highlightedStart: 'É sobre',

            highlightedUnderstand: 'entender',

            highlightedConstancy: 'constância',

            highlightedMovement: 'movimento',

            highlightedLife: 'vida',

            description:
                'Sem metas irreais que te esgotam na terceira semana. Construímos autonomia, força real e longevidade através de ciência do movimento e empatia.',
        },

        method: {
            title: 'Um método pensado para você.',

            desc: 'Não existem duas rotinas iguais. Por isso, seu treino também não deveria ser igual ao de todo mundo.',

            cards: [
                {
                    title: 'Conhecer',
                    text: 'Entender sua rotina real, histórico articular, preferências, dores e o tempo efetivo disponível na sua semana.',
                },
                {
                    title: 'Planejar',
                    text: 'Criar uma estratégia biomecânica customizada: séries, cargas, intensidade e mobilidade adequadas ao seu momento.',
                },
                {
                    title: 'Acompanhar',
                    text: 'Feedback contínuo e ajustes dinâmicos. A vida oscila e o treino precisa se adaptar às suas semanas boas e difíceis.',
                },
                {
                    title: 'Evoluir',
                    text: 'Consolidação de força, tônus muscular e postura sustentável. O resultado é consequência da consistência.',
                },
            ],
        },

        personalization: {
            eyebrow: 'PERSONALIZAÇÃO DE VERDADE',

            title: 'Seu treino ainda não existe.',

            highlightedTitle: 'Porque primeiro eu preciso conhecer você.',

            description:
                'Responda algumas perguntas rápidas para eu entender seu momento atual, limitações, histórico e o que realmente faz sentido para sua rotina.',

            button2text: 'Quero começar minha avaliação',

            button2url: '#anamnese',
        },

        form: {
            title: 'Vamos conhecer você.',

            desc: 'Conte um pouco sobre suas medidas básicas:',
        },

        features: {
            img: '/images/img12.png',

            title: 'Seu corpo em movimento contínuo.',

            items: [
                {
                    title: 'Força Sustentável',

                    desc: 'A musculatura protege suas articulações, regula o metabolismo e desacelera o envelhecimento ósseo-celular.',
                },
                {
                    title: 'Mobilidade Funcional',

                    desc: 'Amplitude e liberdade para sentar, agachar, carregar compras e brincar sem dores articulares nas costas.',
                },
                {
                    title: 'Energia & Disposição',

                    desc: 'Treinar não é para cansar seu dia; é para encher seu dia de clareza mental e vitalidade renovada.',
                },
                {
                    title: 'Constância Real',

                    desc: 'A rotina que se sustenta ao longo dos anos, respeitando períodos de descanso, trabalho e férias.',
                },
            ],
        },

        motivation: {
            title: 'Você não precisa estar pronto. Só precisa',

            highlightedTitle: 'começar.',

            description: 'A evolução acontece a cada sessão executada com consciência e paciência.',

            button2text: 'DAR O PRIMEIRO PASSO',
        },

        testimonials: {
            enabled: true,

            title: 'Quem treina com o método',

            cards: [
                {
                    name: 'Mariana Alves',

                    type: 'Aluna há 2 anos',

                    desc: 'Eu achava que precisava treinar no limite para ter resultado. Hoje treino com mais consciência, tenho mais força e, principalmente, não sinto mais as dores que faziam parte da minha rotina.',

                    rating: 5,

                    avatar: 'https://i.pravatar.cc/300?img=47',
                },

                {
                    name: 'Rafael Martins',

                    type: 'Aluno há 1 ano',

                    desc: 'O treino se encaixou na minha rotina de verdade. Ganhei disposição para trabalhar, melhor condicionamento e finalmente consegui manter constância sem transformar a academia em uma obrigação.',

                    rating: 5,

                    avatar: 'https://i.pravatar.cc/300?img=12',
                },

                {
                    name: 'Camila Ferreira',

                    type: 'Aluna há 8 meses',

                    desc: 'Comecei buscando mudança estética, mas encontrei muito mais. Hoje me sinto mais forte, tenho mais mobilidade e percebo a diferença da atividade física em praticamente tudo que faço.',

                    rating: 5,

                    avatar: 'https://i.pravatar.cc/300?img=32',
                },

                {
                    name: 'Lucas Ribeiro',

                    type: 'Aluno há 1 ano e 6 meses',

                    desc: 'Pela primeira vez consegui construir uma rotina de treino que não abandono depois de algumas semanas. O acompanhamento e os ajustes fizeram toda a diferença na minha evolução.',

                    rating: 5,

                    avatar: 'https://i.pravatar.cc/300?img=11',
                },
            ],
        },

        feelings: {
            eyebrow: 'SINTONIA E PROPÓSITO',

            title: 'Como você quer se sentir?',

            description: 'Clique nos sentimentos abaixo para descobrir o caminho de treino ideal:',

            defaultFeeling: 'LEVE',

            forte: {
                title: 'SENTIR-SE FORTE',

                description:
                    'Construir força para realizar as tarefas do dia a dia com mais segurança, autonomia e confiança.',
            },

            disposto: {
                title: 'SENTIR-SE DISPOSTO',

                description:
                    'Recuperar a energia para enfrentar uma rotina intensa sem terminar o dia completamente esgotado.',
            },

            confiante: {
                title: 'SENTIR-SE CONFIANTE',

                description:
                    'Desenvolver consciência corporal e segurança para se movimentar melhor dentro e fora do treino.',
            },

            leve: {
                title: 'SENTIR-SE LEVE',

                description:
                    'Aliviar tensões acumuladas nos ombros e trapézio através de soltura e mobilidade direcionada.',
            },

            ativo: {
                title: 'SENTIR-SE ATIVO',

                description:
                    'Manter o corpo em movimento com uma rotina de exercícios possível, prazerosa e consistente.',
            },

            saudavel: {
                title: 'SENTIR-SE SAUDÁVEL',

                description:
                    'Criar hábitos de movimento que contribuam para sua saúde, bem-estar e qualidade de vida a longo prazo.',
            },

            capaz: {
                title: 'SENTIR-SE CAPAZ',

                description:
                    'Conquistar mais mobilidade, resistência e independência para fazer o que você gosta sem medo ou limitações.',
            },
        },

        contact: {
            eyebrow: 'PRÓXIMO PASSO',

            title: 'Vamos construir uma rotina que realmente funcione para você?',

            description:
                'Preencha a breve anamnese ou mande uma mensagem direta no WhatsApp para alinharmos seu formato ideal.',

            primaryButtonText: 'PREENCHER ANAMNESE INICIAL',

            primaryButtonHref: '#anamnese',

            secondaryButtonText: 'CONVERSAR NO WHATSAPP',

            secondaryButtonHref: '',
        },

        whatsapp: {
            enabled: true,

            phone: '',

            message: 'Olá! Gostaria de conhecer seu acompanhamento.',
        },
    }

    if (!saved) {
        return defaults
    }

    return {
        hero: {
            titlePrimary: saved.hero?.titlePrimary ?? defaults.hero.titlePrimary,

            title: saved.hero?.title ?? defaults.hero.title,

            titleSecondary: saved.hero?.titleSecondary ?? defaults.hero.titleSecondary,

            titleHighlight: saved.hero?.titleHighlight ?? defaults.hero.titleHighlight,

            desc: saved.hero?.desc ?? defaults.hero.desc,

            button1text: saved.hero?.button1text ?? defaults.hero.button1text,

            button1url: saved.hero?.button1url ?? defaults.hero.button1url,

            button2text: saved.hero?.button2text ?? defaults.hero.button2text,

            button2url: saved.hero?.button2url ?? defaults.hero.button2url,

            img: getMediaUrl(saved.hero?.img, defaults.hero.img),

            cardTitle: saved.hero?.cardTitle ?? defaults.hero.cardTitle,

            cardText: saved.hero?.cardText ?? defaults.hero.cardText,
        },

        about: {
            eyebrow: saved.about?.eyebrow ?? defaults.about.eyebrow,

            title: saved.about?.title ?? defaults.about.title,

            highlightedStart: saved.about?.highlightedStart ?? defaults.about.highlightedStart,

            highlightedUnderstand: saved.about?.highlightedUnderstand ?? defaults.about.highlightedUnderstand,

            highlightedConstancy: saved.about?.highlightedConstancy ?? defaults.about.highlightedConstancy,

            highlightedMovement: saved.about?.highlightedMovement ?? defaults.about.highlightedMovement,

            highlightedLife: saved.about?.highlightedLife ?? defaults.about.highlightedLife,

            description: saved.about?.description ?? defaults.about.description,
        },

        method: {
            title: saved.method?.title ?? defaults.method.title,

            desc: saved.method?.desc ?? defaults.method.desc,

            cards: defaults.method.cards.map((card, index) => ({
                title: saved.method?.cards?.[index]?.title ?? card.title,

                text: saved.method?.cards?.[index]?.text ?? card.text,
            })),
        },

        personalization: {
            eyebrow: saved.personalization?.eyebrow ?? defaults.personalization.eyebrow,

            title: saved.personalization?.title ?? defaults.personalization.title,

            highlightedTitle: saved.personalization?.highlightedTitle ?? defaults.personalization.highlightedTitle,

            description: saved.personalization?.description ?? defaults.personalization.description,

            button2text: saved.personalization?.button2text ?? defaults.personalization.button2text,

            button2url: saved.personalization?.button2url ?? defaults.personalization.button2url,
        },

        form: {
            title: saved.form?.title ?? defaults.form.title,

            desc: saved.form?.desc ?? defaults.form.desc,
        },

        features: {
            img: getMediaUrl(saved.features?.img, defaults.features.img),

            title: saved.features?.title ?? defaults.features.title,

            items: defaults.features.items.map((item, index) => ({
                title: saved.features?.items?.[index]?.title ?? item.title,

                desc: saved.features?.items?.[index]?.desc ?? item.desc,
            })),
        },

        motivation: {
            title: saved.motivation?.title ?? defaults.motivation.title,

            highlightedTitle: saved.motivation?.highlightedTitle ?? defaults.motivation.highlightedTitle,

            description: saved.motivation?.description ?? defaults.motivation.description,

            button2text: saved.motivation?.button2text ?? defaults.motivation.button2text,
        },

        testimonials: {
            enabled: saved.testimonials?.enabled ?? defaults.testimonials.enabled,

            title: saved.testimonials?.title ?? defaults.testimonials.title,

            cards: defaults.testimonials.cards.map((card, index) => {
                const current = saved.testimonials?.cards?.[index]

                return {
                    name: current?.name ?? card.name,

                    type: current?.type ?? card.type,

                    desc: current?.desc ?? card.desc,

                    rating: current?.rating ?? card.rating,

                    avatar: getMediaUrl(current?.avatar, card.avatar),
                }
            }),
        },

        feelings: {
            eyebrow: saved.feelings?.eyebrow ?? defaults.feelings.eyebrow,

            title: saved.feelings?.title ?? defaults.feelings.title,

            description: saved.feelings?.description ?? defaults.feelings.description,

            defaultFeeling: (saved.feelings?.defaultFeeling ?? defaults.feelings.defaultFeeling) as FeelingKey,

            forte: {
                title: saved.feelings?.forte?.title ?? defaults.feelings.forte.title,

                description: saved.feelings?.forte?.description ?? defaults.feelings.forte.description,
            },

            disposto: {
                title: saved.feelings?.disposto?.title ?? defaults.feelings.disposto.title,

                description: saved.feelings?.disposto?.description ?? defaults.feelings.disposto.description,
            },

            confiante: {
                title: saved.feelings?.confiante?.title ?? defaults.feelings.confiante.title,

                description: saved.feelings?.confiante?.description ?? defaults.feelings.confiante.description,
            },

            leve: {
                title: saved.feelings?.leve?.title ?? defaults.feelings.leve.title,

                description: saved.feelings?.leve?.description ?? defaults.feelings.leve.description,
            },

            ativo: {
                title: saved.feelings?.ativo?.title ?? defaults.feelings.ativo.title,

                description: saved.feelings?.ativo?.description ?? defaults.feelings.ativo.description,
            },

            saudavel: {
                title: saved.feelings?.saudavel?.title ?? defaults.feelings.saudavel.title,

                description: saved.feelings?.saudavel?.description ?? defaults.feelings.saudavel.description,
            },

            capaz: {
                title: saved.feelings?.capaz?.title ?? defaults.feelings.capaz.title,

                description: saved.feelings?.capaz?.description ?? defaults.feelings.capaz.description,
            },
        },

        contact: {
            eyebrow: saved.contact?.eyebrow ?? defaults.contact.eyebrow,

            title: saved.contact?.title ?? defaults.contact.title,

            description: saved.contact?.description ?? defaults.contact.description,

            primaryButtonText: saved.contact?.primaryButtonText ?? defaults.contact.primaryButtonText,

            primaryButtonHref: saved.contact?.primaryButtonHref ?? defaults.contact.primaryButtonHref,

            secondaryButtonText: saved.contact?.secondaryButtonText ?? defaults.contact.secondaryButtonText,

            secondaryButtonHref: saved.contact?.secondaryButtonHref ?? defaults.contact.secondaryButtonHref,
        },

        whatsapp: {
            enabled: saved.whatsapp?.enabled ?? defaults.whatsapp.enabled,

            phone: saved.whatsapp?.phone ?? defaults.whatsapp.phone,

            message: saved.whatsapp?.message ?? defaults.whatsapp.message,
        },
    }
}

// ================================================================
// STEPS
// ================================================================

const steps = [
    {
        title: 'Informações',
        description: 'Comece com as informações principais.',
    },
    {
        title: 'Hero',
        description: 'Configure a apresentação do seu site.',
    },
    {
        title: 'Sobre',
        description: 'Apresente sua forma de trabalhar.',
    },
    {
        title: 'Método',
        description: 'Configure as quatro etapas do método.',
    },
    {
        title: 'Personalização',
        description: 'Configure a chamada para a avaliação.',
    },
    {
        title: 'Anamnese',
        description: 'Configure a introdução da anamnese.',
    },
    {
        title: 'Fundamentos',
        description: 'Configure os quatro fundamentos.',
    },
    {
        title: 'Motivação',
        description: 'Configure a chamada intermediária.',
    },
    {
        title: 'Depoimentos',
        description: 'Mostre a experiência dos alunos.',
    },
    {
        title: 'Sintonia',
        description: 'Configure os sentimentos.',
    },
    {
        title: 'Contato',
        description: 'Configure sua chamada final.',
    },
    {
        title: 'WhatsApp',
        description: 'Configure seu atendimento.',
    },
]

// ================================================================
// COMPONENT
// ================================================================

export default function CustomizeSite3({ templateName, userName, site }: CustomizeSite3Props) {
    const [step, setStep] = React.useState(0)

    const [publishing, setPublishing] = React.useState(false)

    const [publishMessage, setPublishMessage] = React.useState('')

    const [publishError, setPublishError] = React.useState('')

    const [mobilePreviewOpen, setMobilePreviewOpen] = React.useState(false)

    const formRef = React.useRef<HTMLDivElement | null>(null)

    const previewScrollRef = React.useRef<HTMLDivElement | null>(null)

    const previewSectionRefs = React.useRef<Array<HTMLDivElement | null>>([])

    const mobilePreviewScrollRef = React.useRef<HTMLDivElement | null>(null)

    const mobilePreviewSectionRefs = React.useRef<Array<HTMLDivElement | null>>([])

    const [previewScale, setPreviewScale] = React.useState(1)

    const [siteName, setSiteName] = React.useState(site?.name || userName || '')

    const [slug, setSlug] = React.useState(site?.slug || '')

    const [data, setData] = React.useState<Template3Data>(() => createInitialData(site))

    // ============================================================
    // IMAGES
    // ============================================================

    const [heroImageFile, setHeroImageFile] = React.useState<File | null>(null)

    const [featuresImageFile, setFeaturesImageFile] = React.useState<File | null>(null)

    const [heroImageId, setHeroImageId] = React.useState<string | null>(() => getMediaId(site?.template3?.hero?.img))

    const [featuresImageId, setFeaturesImageId] = React.useState<string | null>(() =>
        getMediaId(site?.template3?.features?.img)
    )

    const [heroImageAlt, setHeroImageAlt] = React.useState(() =>
        getMediaAlt(site?.template3?.hero?.img, 'Imagem principal do personal trainer')
    )

    const [featuresImageAlt, setFeaturesImageAlt] = React.useState(() =>
        getMediaAlt(site?.template3?.features?.img, 'Personal trainer em movimento')
    )

    // ============================================================
    // TESTIMONIAL AVATARS
    // ============================================================

    const [testimonialFiles, setTestimonialFiles] = React.useState<Array<File | null>>([null, null, null, null])

    const [testimonialIds, setTestimonialIds] = React.useState<Array<string | null>>(() =>
        [0, 1, 2, 3].map((index) => getMediaId(site?.template3?.testimonials?.cards?.[index]?.avatar))
    )

    // ============================================================
    // MOBILE LOCK
    // ============================================================

    React.useEffect(() => {
        if (!mobilePreviewOpen) {
            return
        }

        const previous = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previous
        }
    }, [mobilePreviewOpen])

    // ============================================================
    // PREVIEW SCALE
    // ============================================================

    React.useEffect(() => {
        const preview = previewScrollRef.current

        if (!preview) {
            return
        }

        const updateScale = () => {
            const availableWidth = preview.clientWidth

            const baseWidth = 1280

            const nextScale = Math.min(1, Math.max(0.45, availableWidth / baseWidth))

            setPreviewScale(nextScale)
        }

        updateScale()

        const observer = new ResizeObserver(updateScale)

        observer.observe(preview)

        return () => observer.disconnect()
    }, [])

    // ============================================================
    // STEP -> PREVIEW SECTION
    // ============================================================

    const previewIndexForStep = React.useCallback((currentStep: number) => {
        if (currentStep <= 1) {
            return 0
        }

        return Math.min(10, currentStep - 1)
    }, [])

    React.useEffect(() => {
        const index = previewIndexForStep(step)

        const section = previewSectionRefs.current[index]

        if (!section) {
            return
        }

        const timer = window.setTimeout(() => {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }, 80)

        return () => window.clearTimeout(timer)
    }, [step, previewIndexForStep])

    React.useEffect(() => {
        if (!mobilePreviewOpen) {
            return
        }

        const index = previewIndexForStep(step)

        const section = mobilePreviewSectionRefs.current[index]

        const scroll = mobilePreviewScrollRef.current

        const timer = window.setTimeout(() => {
            if (step === 0) {
                scroll?.scrollTo({
                    top: 0,
                    behavior: 'auto',
                })

                return
            }

            section?.scrollIntoView({
                behavior: 'auto',
                block: 'start',
            })
        }, 100)

        return () => window.clearTimeout(timer)
    }, [mobilePreviewOpen, step, previewIndexForStep])

    // ============================================================
    // FORM SCROLL
    // ============================================================

    React.useEffect(() => {
        const timer = window.setTimeout(() => {
            const element = formRef.current

            if (!element) {
                return
            }

            const top = element.getBoundingClientRect().top + window.scrollY - 16

            window.scrollTo({
                top: Math.max(0, top),
                behavior: 'smooth',
            })
        }, 50)

        return () => window.clearTimeout(timer)
    }, [step])

    // ============================================================
    // UPDATE HELPERS
    // ============================================================

    function updateHero(field: keyof Template3Data['hero'], value: string) {
        setData((current) => ({
            ...current,

            hero: {
                ...current.hero,
                [field]: value,
            },
        }))
    }

    function updateAbout(field: keyof Template3Data['about'], value: string) {
        setData((current) => ({
            ...current,

            about: {
                ...current.about,
                [field]: value,
            },
        }))
    }

    function updateMethod(field: 'title' | 'desc', value: string) {
        setData((current) => ({
            ...current,

            method: {
                ...current.method,
                [field]: value,
            },
        }))
    }

    function updateMethodCard(index: number, field: 'title' | 'text', value: string) {
        setData((current) => {
            const cards = [...current.method.cards]

            cards[index] = {
                ...cards[index],
                [field]: value,
            }

            return {
                ...current,

                method: {
                    ...current.method,
                    cards,
                },
            }
        })
    }

    function updatePersonalization(field: keyof Template3Data['personalization'], value: string) {
        setData((current) => ({
            ...current,

            personalization: {
                ...current.personalization,
                [field]: value,
            },
        }))
    }

    function updateForm(field: 'title' | 'desc', value: string) {
        setData((current) => ({
            ...current,

            form: {
                ...current.form,
                [field]: value,
            },
        }))
    }

    function updateFeatures(field: 'title', value: string) {
        setData((current) => ({
            ...current,

            features: {
                ...current.features,
                [field]: value,
            },
        }))
    }

    function updateFeature(index: number, field: 'title' | 'desc', value: string) {
        setData((current) => {
            const items = [...current.features.items]

            items[index] = {
                ...items[index],
                [field]: value,
            }

            return {
                ...current,

                features: {
                    ...current.features,
                    items,
                },
            }
        })
    }

    function updateMotivation(field: keyof Template3Data['motivation'], value: string) {
        setData((current) => ({
            ...current,

            motivation: {
                ...current.motivation,
                [field]: value,
            },
        }))
    }

    function updateTestimonial(index: number, field: 'name' | 'type' | 'desc' | 'rating', value: string | number) {
        setData((current) => {
            const cards = [...current.testimonials.cards]

            cards[index] = {
                ...cards[index],
                [field]: value,
            }

            return {
                ...current,

                testimonials: {
                    ...current.testimonials,
                    cards,
                },
            }
        })
    }

    function updateFeeling(
        key: 'forte' | 'disposto' | 'confiante' | 'leve' | 'ativo' | 'saudavel' | 'capaz',

        field: 'title' | 'description',

        value: string
    ) {
        setData((current) => ({
            ...current,

            feelings: {
                ...current.feelings,

                [key]: {
                    ...current.feelings[key],

                    [field]: value,
                },
            },
        }))
    }

    function updateContact(field: keyof Template3Data['contact'], value: string) {
        setData((current) => ({
            ...current,

            contact: {
                ...current.contact,
                [field]: value,
            },
        }))
    }

    function updateWhatsapp(field: keyof Template3Data['whatsapp'], value: string | boolean) {
        setData((current) => ({
            ...current,

            whatsapp: {
                ...current.whatsapp,
                [field]: value,
            },
        }))
    }

    // ============================================================
    // IMAGE CHANGE
    // ============================================================

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>, type: 'hero' | 'features') {
        const file = event.target.files?.[0]

        if (!file) {
            return
        }

        if (!file.type.startsWith('image/')) {
            setPublishError('Selecione um arquivo de imagem válido.')

            return
        }

        if (file.size > 5 * 1024 * 1024) {
            setPublishError('A imagem deve ter no máximo 5 MB.')

            return
        }

        setPublishError('')

        const previewUrl = URL.createObjectURL(file)

        if (type === 'hero') {
            setHeroImageFile(file)
            setHeroImageId(null)

            setData((current) => ({
                ...current,

                hero: {
                    ...current.hero,
                    img: previewUrl,
                },
            }))

            return
        }

        setFeaturesImageFile(file)
        setFeaturesImageId(null)

        setData((current) => ({
            ...current,

            features: {
                ...current.features,
                img: previewUrl,
            },
        }))
    }

    function handleTestimonialImage(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]

        if (!file) {
            return
        }

        if (!file.type.startsWith('image/')) {
            setPublishError('Selecione uma imagem válida.')

            return
        }

        if (file.size > 5 * 1024 * 1024) {
            setPublishError('A imagem deve ter no máximo 5 MB.')

            return
        }

        const previewUrl = URL.createObjectURL(file)

        setTestimonialFiles((current) => {
            const next = [...current]

            next[index] = file

            return next
        })

        setTestimonialIds((current) => {
            const next = [...current]

            next[index] = null

            return next
        })

        setData((current) => {
            const cards = [...current.testimonials.cards]

            cards[index] = {
                ...cards[index],
                avatar: previewUrl,
            }

            return {
                ...current,

                testimonials: {
                    ...current.testimonials,
                    cards,
                },
            }
        })
    }

    // ============================================================
    // UPLOAD
    // ============================================================

    async function uploadMedia(file: File, alt: string): Promise<string> {
        const formData = new FormData()

        formData.append('file', file, file.name)

        formData.append('alt', alt.trim() || 'Imagem do site')

        const response = await fetch('/api/upload-media', {
            method: 'POST',
            credentials: 'include',
            body: formData,
        })

        const result = await response.json().catch(() => null)

        if (!response.ok || !result?.doc?.id) {
            throw new Error(result?.errors?.[0]?.message || result?.message || 'Não foi possível enviar a imagem.')
        }

        return String(result.doc.id)
    }

    async function createDefaultImageFile(url: string, filename: string) {
        const response = await fetch(url, {
            cache: 'no-store',
        })

        if (!response.ok) {
            throw new Error('Não foi possível carregar a imagem padrão.')
        }

        const blob = await response.blob()

        const extension = blob.type === 'image/webp' ? 'webp' : blob.type === 'image/jpeg' ? 'jpg' : 'png'

        return new File([blob], `${filename}.${extension}`, {
            type: blob.type || 'image/png',
        })
    }

    // ============================================================
    // NAVIGATION
    // ============================================================

    function nextStep() {
        if (step < steps.length - 1) {
            setStep((current) => current + 1)
        }
    }

    function previousStep() {
        if (step > 0) {
            setStep((current) => current - 1)
        }
    }

    // ============================================================
    // PUBLISH
    // ============================================================

    async function handleFinish() {
        if (publishing) {
            return
        }

        setPublishError('')
        setPublishMessage('')

        if (!siteName.trim()) {
            setPublishError('Digite o nome do site.')

            setStep(0)
            return
        }

        if (!slug.trim()) {
            setPublishError('Digite o slug do site.')

            setStep(0)
            return
        }

        const cleanSlug = slug
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')

        if (!cleanSlug) {
            setPublishError('Digite um slug válido.')

            return
        }

        setPublishing(true)

        try {
            // ====================================================
            // USER
            // ====================================================

            const userResponse = await fetch('/api/users/me', {
                credentials: 'include',

                cache: 'no-store',
            })

            if (!userResponse.ok) {
                throw new Error('Você precisa estar logado.')
            }

            const userResult = await userResponse.json()

            const user = userResult?.user

            if (!user?.id) {
                throw new Error('Não foi possível identificar o usuário.')
            }

            // ====================================================
            // SITE DO USUÁRIO
            // ====================================================

            let existingSite: Site | null = site || null

            const userParams = new URLSearchParams()

            userParams.set('where[user][equals]', String(user.id))

            userParams.set('limit', '1')

            const existingResponse = await fetch(`/api/sites?${userParams.toString()}`, {
                credentials: 'include',

                cache: 'no-store',
            })

            if (existingResponse.ok) {
                const result = await existingResponse.json()

                if (result?.docs?.[0]) {
                    existingSite = result.docs[0]
                }
            }

            // ====================================================
            // SLUG
            // ====================================================

            const slugParams = new URLSearchParams()

            slugParams.set('where[slug][equals]', cleanSlug)

            slugParams.set('limit', '1')

            const slugResponse = await fetch(`/api/sites?${slugParams.toString()}`, {
                credentials: 'include',

                cache: 'no-store',
            })

            if (slugResponse.ok) {
                const slugResult = await slugResponse.json()

                const found = slugResult?.docs?.[0]

                if (found?.id && String(found.id) !== String(existingSite?.id || '')) {
                    throw new Error('Esse endereço já está sendo usado por outro site.')
                }
            }

            // ====================================================
            // HERO IMAGE
            // ====================================================

            let finalHeroId = heroImageId

            if (heroImageFile) {
                finalHeroId = await uploadMedia(heroImageFile, heroImageAlt)
            }

            if (!finalHeroId) {
                const existingId = getMediaId(existingSite?.template3?.hero?.img)

                if (existingId) {
                    finalHeroId = existingId
                } else {
                    const file = await createDefaultImageFile('/images/image3.png', `template-3-hero-${Date.now()}`)

                    finalHeroId = await uploadMedia(file, heroImageAlt)
                }
            }

            // ====================================================
            // FEATURES IMAGE
            // ====================================================

            let finalFeaturesId = featuresImageId

            if (featuresImageFile) {
                finalFeaturesId = await uploadMedia(featuresImageFile, featuresImageAlt)
            }

            if (!finalFeaturesId) {
                const existingId = getMediaId(existingSite?.template3?.features?.img)

                if (existingId) {
                    finalFeaturesId = existingId
                } else {
                    const file = await createDefaultImageFile('/images/img12.png', `template-3-features-${Date.now()}`)

                    finalFeaturesId = await uploadMedia(file, featuresImageAlt)
                }
            }

            // ====================================================
            // TESTIMONIAL AVATARS
            // ====================================================

            const finalAvatarIds: Array<string | undefined> = []

            for (let index = 0; index < 4; index++) {
                const file = testimonialFiles[index]

                if (file) {
                    finalAvatarIds[index] = await uploadMedia(
                        file,
                        `${data.testimonials.cards[index].name} - depoimento`
                    )

                    continue
                }

                const currentId = testimonialIds[index]

                if (currentId) {
                    finalAvatarIds[index] = currentId

                    continue
                }

                const existingId = getMediaId(existingSite?.template3?.testimonials?.cards?.[index]?.avatar)

                if (existingId) {
                    finalAvatarIds[index] = existingId
                }
            }

            // ====================================================
            // PAYLOAD
            // ====================================================

            const payloadData = {
                name: siteName.trim(),

                slug: cleanSlug,

                user: user.id,

                template: 'template-3',

                published: true,

                template3: {
                    hero: {
                        titlePrimary: data.hero.titlePrimary,

                        title: data.hero.title,

                        titleSecondary: data.hero.titleSecondary,

                        titleHighlight: data.hero.titleHighlight,

                        desc: data.hero.desc,

                        button1text: data.hero.button1text,

                        button1url: data.hero.button1url,

                        button2text: data.hero.button2text,

                        button2url: data.hero.button2url,

                        img: finalHeroId,

                        cardTitle: data.hero.cardTitle,

                        cardText: data.hero.cardText,
                    },

                    about: {
                        ...data.about,
                    },

                    method: {
                        title: data.method.title,

                        desc: data.method.desc,

                        cards: data.method.cards,
                    },

                    personalization: {
                        ...data.personalization,
                    },

                    form: {
                        ...data.form,
                    },

                    features: {
                        img: finalFeaturesId,

                        title: data.features.title,

                        items: data.features.items,
                    },

                    motivation: {
                        ...data.motivation,
                    },

                    testimonials: {
                        enabled: data.testimonials.enabled,

                        title: data.testimonials.title,

                        cards: data.testimonials.cards.map((card, index) => ({
                            name: card.name,

                            type: card.type,

                            desc: card.desc,

                            rating: card.rating,

                            ...(finalAvatarIds[index]
                                ? {
                                      avatar: finalAvatarIds[index],
                                  }
                                : {}),
                        })),
                    },

                    feelings: {
                        ...data.feelings,
                    },

                    contact: {
                        ...data.contact,
                    },

                    whatsapp: {
                        ...data.whatsapp,
                    },
                },
            }

            // ====================================================
            // CREATE / UPDATE
            // ====================================================

            let response: Response

            if (existingSite?.id) {
                response = await fetch(`/api/sites/${existingSite.id}`, {
                    method: 'PATCH',

                    credentials: 'include',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(payloadData),
                })
            } else {
                response = await fetch('/api/sites', {
                    method: 'POST',

                    credentials: 'include',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(payloadData),
                })
            }

            const result = await response.json().catch(() => null)

            if (!response.ok) {
                console.error('Erro Payload:', result)

                throw new Error(result?.errors?.[0]?.message || result?.message || 'Não foi possível publicar o site.')
            }

            const savedSlug = result?.doc?.slug ?? result?.slug ?? cleanSlug

            setSlug(savedSlug)

            setPublishMessage('Seu site foi publicado com sucesso!')

            window.setTimeout(() => {
                window.location.href = `/personal/${encodeURIComponent(savedSlug)}`
            }, 1200)
        } catch (error) {
            console.error(error)

            setPublishError(error instanceof Error ? error.message : 'Erro ao publicar o site.')
        } finally {
            setPublishing(false)
        }
    }

    // ============================================================
    // PREVIEW DATA
    // ============================================================

    const methodIcons = [
        <UserRoundSearch key="1" size={18} />,
        <DraftingCompass key="2" size={18} />,
        <ChartNoAxesCombined key="3" size={18} />,
        <TrendingUp key="4" size={18} />,
    ]

    const featureIcons = [
        <Dumbbell key="1" size={18} strokeWidth={1.8} />,
        <Accessibility key="2" size={18} strokeWidth={1.8} />,
        <Zap key="3" size={18} strokeWidth={1.8} />,
        <RefreshCw key="4" size={18} strokeWidth={1.8} />,
    ]

    const previewMethod = data.method.cards.map((card, index) => ({
        ...card,

        icon: methodIcons[index],

        iconBgColor: '#EDE9DF',
    }))

    const previewFeatures = data.features.items.map((item, index) => ({
        number: `0${index + 1}.`,

        ...item,

        icon: featureIcons[index],
    }))

    const previewFeelings = [
        {
            label: 'FORTE',
            ...data.feelings.forte,
        },
        {
            label: 'DISPOSTO',
            ...data.feelings.disposto,
        },
        {
            label: 'CONFIANTE',
            ...data.feelings.confiante,
        },
        {
            label: 'LEVE',
            ...data.feelings.leve,
        },
        {
            label: 'ATIVO',
            ...data.feelings.ativo,
        },
        {
            label: 'SAUDÁVEL',
            ...data.feelings.saudavel,
        },
        {
            label: 'CAPAZ',
            ...data.feelings.capaz,
        },
    ]

    // ============================================================
    // PREVIEW COMPONENT
    // ============================================================

    function resolveButtonHref(value: string, fallbackToWhatsapp = false) {
        const rawValue = value.trim()

        if (!rawValue && fallbackToWhatsapp && data.whatsapp.phone) {
            return `https://wa.me/${data.whatsapp.phone.replace(/\D/g, '')}`
        }

        const phone = rawValue.replace(/\D/g, '')

        if (phone && phone === rawValue.replace(/[\s()+-]/g, '')) {
            return `https://wa.me/${phone}`
        }

        return rawValue || '#'
    }

    function PreviewContent({ mobile = false }: { mobile?: boolean }) {
        const refs = mobile ? mobilePreviewSectionRefs : previewSectionRefs

        return (
            <main className="min-h-screen bg-white">
                {/* HERO */}

                <div
                    ref={(element) => {
                        refs.current[0] = element
                    }}>
                    <HeroSection3
                        titlePrimary={data.hero.titlePrimary}
                        title={
                            <>
                                {data.hero.title}
                                <br />
                                {data.hero.titleSecondary}{' '}
                                <span className="font-medium italic">{data.hero.titleHighlight}</span>
                            </>
                        }
                        desc={data.hero.desc}
                        button1text={data.hero.button1text}
                        button2text={data.hero.button2text}
                        img={data.hero.img}
                        tag={[
                            {
                                icon: <FaUsers color="#F5C842" size={20} />,

                                text: '+120 alunos transformados',
                            },
                            {
                                icon: <FaStar color="#F5C842" size={20} />,

                                text: 'Avaliação 4.9',
                            },
                            {
                                icon: <CiTimer color="#F5C842" size={20} />,

                                text: 'Online + Presencial',
                            },
                        ]}
                        cardTitle={data.hero.cardTitle}
                        cardText={data.hero.cardText}
                    />

                    <MethodTicker />
                </div>

                {/* ABOUT */}

                <div
                    ref={(element) => {
                        refs.current[1] = element
                    }}>
                    <AboutUs1
                        eyebrow={data.about.eyebrow}
                        title={data.about.title}
                        highlightedTitle={
                            <>
                                {data.about.highlightedStart}{' '}
                                <em className="rounded-full bg-color-softgray px-2 sm:px-3">
                                    {data.about.highlightedUnderstand}
                                </em>{' '}
                                seu corpo, construir{' '}
                                <em className="rounded-full bg-color-softgray px-2 sm:px-3">
                                    {data.about.highlightedConstancy}
                                </em>{' '}
                                e transformar{' '}
                                <em className="rounded-full bg-color-softgray px-2 sm:px-3">
                                    {data.about.highlightedMovement}
                                </em>{' '}
                                em parte natural da sua{' '}
                                <em className="rounded-full bg-color-softgray px-2 sm:px-3">
                                    {data.about.highlightedLife}
                                </em>
                                .
                            </>
                        }
                        description={data.about.description}
                    />
                </div>

                {/* METHOD */}

                <div
                    ref={(element) => {
                        refs.current[2] = element
                    }}>
                    <Card7 title={data.method.title} desc={data.method.desc} cards={previewMethod} />
                </div>

                {/* PERSONALIZATION */}

                <div
                    ref={(element) => {
                        refs.current[3] = element
                    }}>
                    <AboutUs2
                        eyebrow={data.personalization.eyebrow}
                        title={data.personalization.title}
                        highlightedTitle={data.personalization.highlightedTitle}
                        description={data.personalization.description}
                        button2text={data.personalization.button2text}
                    />
                </div>

                {/* FORM */}

                <div
                    ref={(element) => {
                        refs.current[4] = element
                    }}>
                    <Forms1 title={data.form.title} desc={data.form.desc} contact={[]} />
                </div>

                {/* FEATURES */}

                <div
                    ref={(element) => {
                        refs.current[5] = element
                    }}>
                    <Features4 img={data.features.img} title={data.features.title} features={previewFeatures} />
                </div>

                {/* MOTIVATION */}

                <div
                    ref={(element) => {
                        refs.current[6] = element
                    }}>
                    <AboutUs3
                        title={data.motivation.title}
                        highlightedTitle={data.motivation.highlightedTitle}
                        description={data.motivation.description}
                        button2text={data.motivation.button2text}
                    />
                </div>

                {/* TESTIMONIALS */}

                <div
                    ref={(element) => {
                        refs.current[7] = element
                    }}>
                    {data.testimonials.enabled && (
                        <Testimonials2 title={data.testimonials.title} testimonial={data.testimonials.cards} />
                    )}
                </div>

                {/* FEELINGS */}

                <div
                    ref={(element) => {
                        refs.current[8] = element
                    }}>
                    <Feelings1
                        eyebrow={data.feelings.eyebrow}
                        title={data.feelings.title}
                        description={data.feelings.description}
                        defaultFeeling={data.feelings.defaultFeeling}
                        feelings={previewFeelings}
                    />
                </div>

                {/* CONTACT */}

                <div
                    ref={(element) => {
                        refs.current[9] = element
                    }}>
                    <Contact3
                        eyebrow={data.contact.eyebrow}
                        title={data.contact.title}
                        description={data.contact.description}
                        primaryButtonText={data.contact.primaryButtonText}
                        primaryButtonHref={resolveButtonHref(data.contact.primaryButtonHref)}
                        secondaryButtonText={data.contact.secondaryButtonText}
                        secondaryButtonHref={resolveButtonHref(data.contact.secondaryButtonHref, true)}
                    />
                </div>

                {/* WHATSAPP */}

                <div
                    ref={(element) => {
                        refs.current[10] = element
                    }}
                    className="min-h-10">
                    {data.whatsapp.enabled && data.whatsapp.phone && <WhatsAppFloat phone={data.whatsapp.phone} />}
                </div>
            </main>
        )
    }

    // ============================================================
    // RETURN
    // ============================================================

    return (
        <section className="min-h-screen bg-color-woodsmoke px-4 pb-28 pt-8 sm:px-6 md:pb-12 lg:px-8">
            <div className="mx-auto max-w-[1600px]">
                {/* HEADER */}

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.15em] text-color-malachite">
                            Template Clean
                        </p>

                        <h1 className="mt-2 text-3xl font-semibold text-white">Personalize seu site</h1>

                        <p className="mt-2 text-sm text-color-clay">
                            Personalize seu {templateName} e veja o resultado em tempo real.
                        </p>
                    </div>

                    {!site && (
                        <Button
                            asChild
                            className="bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110">
                            <Link href="/dashboard">Voltar para templates</Link>
                        </Button>
                    )}
                </div>

                {/* PROGRESS */}

                <div className="mb-8 rounded-2xl border border-white/10 bg-color-codgray p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-color-clay">
                                Etapa {step + 1} de {steps.length}
                            </p>

                            <p className="font-semibold text-white">{steps[step].title}</p>
                        </div>

                        <span className="text-sm text-color-malachite">
                            {Math.round(((step + 1) / steps.length) * 100)}%
                        </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-color-woodsmoke">
                        <div
                            className="h-full rounded-full bg-color-malachite transition-all duration-300"
                            style={{
                                width: `${((step + 1) / steps.length) * 100}%`,
                            }}
                        />
                    </div>

                    <div className="mt-4 hidden gap-2 overflow-x-auto lg:flex">
                        {steps.map((item, index) => (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setStep(index)}
                                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs transition ${
                                    index === step
                                        ? 'bg-color-malachite text-black'
                                        : index < step
                                          ? 'bg-white/10 text-white'
                                          : 'text-color-clay'
                                }`}>
                                {index + 1}. {item.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* EDITOR + PREVIEW */}

                <div className="grid gap-6 xl:grid-cols-[500px_1fr]">
                    {/* FORM */}

                    <div
                        ref={formRef}
                        className="scroll-mt-4 rounded-2xl border border-white/10 bg-color-codgray p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-6">
                        {/* STEP 0 */}

                        {step === 0 && (
                            <StepContainer
                                title="Informações do seu site"
                                description="Comece preenchendo as informações básicas.">
                                <Field
                                    label="Nome do site"
                                    value={siteName}
                                    placeholder="Ex: Lucas Andrade Personal"
                                    onChange={setSiteName}
                                />

                                <Field label="Slug" value={slug} placeholder="Ex: lucas-andrade" onChange={setSlug} />

                                <div className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
                                    <p className="text-sm font-medium text-white">Seu endereço</p>

                                    <p className="mt-2 break-all text-sm text-color-clay">
                                        /personal/
                                        {slug || 'seu-slug'}
                                    </p>
                                </div>
                            </StepContainer>
                        )}

                        {/* STEP 1 - HERO */}

                        {step === 1 && (
                            <StepContainer
                                title="Apresentação"
                                description="Configure a primeira seção do Template Clean.">
                                <Field
                                    label="Texto superior"
                                    value={data.hero.titlePrimary}
                                    onChange={(value) => updateHero('titlePrimary', value)}
                                />

                                <Field
                                    label="Primeira linha"
                                    value={data.hero.title}
                                    onChange={(value) => updateHero('title', value)}
                                />

                                <Field
                                    label="Segunda linha"
                                    value={data.hero.titleSecondary}
                                    onChange={(value) => updateHero('titleSecondary', value)}
                                />

                                <Field
                                    label="Texto em destaque"
                                    value={data.hero.titleHighlight}
                                    onChange={(value) => updateHero('titleHighlight', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.hero.desc}
                                    textarea
                                    onChange={(value) => updateHero('desc', value)}
                                />

                                <Field
                                    label="Texto do botão principal"
                                    value={data.hero.button1text}
                                    onChange={(value) => updateHero('button1text', value)}
                                />

                                <Field
                                    label="Link ou número do WhatsApp — botão principal"
                                    value={data.hero.button1url}
                                    onChange={(value) => updateHero('button1url', value)}
                                    placeholder="Ex.: #anamnese, https://... ou 5531999999999"
                                />

                                <Field
                                    label="Texto do botão secundário"
                                    value={data.hero.button2text}
                                    onChange={(value) => updateHero('button2text', value)}
                                />

                                <Field
                                    label="Link ou número do WhatsApp — botão secundário"
                                    value={data.hero.button2url}
                                    onChange={(value) => updateHero('button2url', value)}
                                    placeholder="Ex.: #metodo, https://... ou 5531999999999"
                                />

                                <ImageField
                                    label="Imagem principal"
                                    altLabel="Texto alternativo"
                                    altValue={heroImageAlt}
                                    preview={data.hero.img}
                                    onAltChange={setHeroImageAlt}
                                    onChange={(event) => handleImageChange(event, 'hero')}
                                />

                                <Field
                                    label="Título do card"
                                    value={data.hero.cardTitle}
                                    onChange={(value) => updateHero('cardTitle', value)}
                                />

                                <Field
                                    label="Texto do card"
                                    value={data.hero.cardText}
                                    onChange={(value) => updateHero('cardText', value)}
                                />
                            </StepContainer>
                        )}

                        {/* STEP 2 - ABOUT */}

                        {step === 2 && (
                            <StepContainer
                                title="Uma nova forma de treinar"
                                description="Edite a frase principal por partes. Os campos marcados como destaque aparecem em itálico dentro das formas arredondadas do site.">
                                <Field
                                    label="Texto superior"
                                    value={data.about.eyebrow}
                                    onChange={(value) => updateAbout('eyebrow', value)}
                                />

                                <Field
                                    label="Título"
                                    value={data.about.title}
                                    onChange={(value) => updateAbout('title', value)}
                                />

                                <Field
                                    label="Início da frase — antes do 1º destaque"
                                    value={data.about.highlightedStart}
                                    onChange={(value) => updateAbout('highlightedStart', value)}
                                />

                                <Field
                                    label="1ª palavra em destaque — ex.: entender"
                                    value={data.about.highlightedUnderstand}
                                    onChange={(value) => updateAbout('highlightedUnderstand', value)}
                                />

                                <Field
                                    label="2ª palavra em destaque — ex.: constância"
                                    value={data.about.highlightedConstancy}
                                    onChange={(value) => updateAbout('highlightedConstancy', value)}
                                />

                                <Field
                                    label="3ª palavra em destaque — ex.: movimento"
                                    value={data.about.highlightedMovement}
                                    onChange={(value) => updateAbout('highlightedMovement', value)}
                                />

                                <Field
                                    label="4ª palavra em destaque — ex.: vida"
                                    value={data.about.highlightedLife}
                                    onChange={(value) => updateAbout('highlightedLife', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.about.description}
                                    textarea
                                    onChange={(value) => updateAbout('description', value)}
                                />
                            </StepContainer>
                        )}

                        {/* STEP 3 - METHOD */}

                        {step === 3 && (
                            <StepContainer
                                title="Processo estruturado"
                                description="O Template Clean possui exatamente quatro etapas.">
                                <Field
                                    label="Título"
                                    value={data.method.title}
                                    onChange={(value) => updateMethod('title', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.method.desc}
                                    textarea
                                    onChange={(value) => updateMethod('desc', value)}
                                />

                                {data.method.cards.map((card, index) => (
                                    <EditorCard key={index} title={`Etapa ${index + 1}`}>
                                        <Field
                                            label="Título"
                                            value={card.title}
                                            onChange={(value) => updateMethodCard(index, 'title', value)}
                                        />

                                        <Field
                                            label="Descrição"
                                            value={card.text}
                                            textarea
                                            onChange={(value) => updateMethodCard(index, 'text', value)}
                                        />
                                    </EditorCard>
                                ))}
                            </StepContainer>
                        )}

                        {/* STEP 4 */}

                        {step === 4 && (
                            <StepContainer
                                title="Personalização de verdade"
                                description="Configure a chamada para a avaliação.">
                                <Field
                                    label="Texto superior"
                                    value={data.personalization.eyebrow}
                                    onChange={(value) => updatePersonalization('eyebrow', value)}
                                />

                                <Field
                                    label="Título"
                                    value={data.personalization.title}
                                    onChange={(value) => updatePersonalization('title', value)}
                                />

                                <Field
                                    label="Subtítulo"
                                    value={data.personalization.highlightedTitle}
                                    onChange={(value) => updatePersonalization('highlightedTitle', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.personalization.description}
                                    textarea
                                    onChange={(value) => updatePersonalization('description', value)}
                                />

                                <Field
                                    label="Texto do botão"
                                    value={data.personalization.button2text}
                                    onChange={(value) => updatePersonalization('button2text', value)}
                                />

                                <Field
                                    label="Link do botão"
                                    value={data.personalization.button2url}
                                    onChange={(value) => updatePersonalization('button2url', value)}
                                />
                            </StepContainer>
                        )}

                        {/* STEP 5 */}

                        {step === 5 && (
                            <StepContainer title="Anamnese inicial" description="Configure a introdução da anamnese.">
                                <Field
                                    label="Título"
                                    value={data.form.title}
                                    onChange={(value) => updateForm('title', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.form.desc}
                                    textarea
                                    onChange={(value) => updateForm('desc', value)}
                                />
                            </StepContainer>
                        )}

                        {/* STEP 6 */}

                        {step === 6 && (
                            <StepContainer
                                title="Fundamentos cinéticos"
                                description="O Template Clean possui exatamente quatro fundamentos.">
                                <ImageField
                                    label="Imagem da seção"
                                    altLabel="Texto alternativo"
                                    altValue={featuresImageAlt}
                                    preview={data.features.img}
                                    onAltChange={setFeaturesImageAlt}
                                    onChange={(event) => handleImageChange(event, 'features')}
                                />

                                <Field
                                    label="Título"
                                    value={data.features.title}
                                    onChange={(value) => updateFeatures('title', value)}
                                />

                                {data.features.items.map((item, index) => (
                                    <EditorCard key={index} title={`Fundamento ${index + 1}`}>
                                        <Field
                                            label="Título"
                                            value={item.title}
                                            onChange={(value) => updateFeature(index, 'title', value)}
                                        />

                                        <Field
                                            label="Descrição"
                                            value={item.desc}
                                            textarea
                                            onChange={(value) => updateFeature(index, 'desc', value)}
                                        />
                                    </EditorCard>
                                ))}
                            </StepContainer>
                        )}

                        {/* STEP 7 */}

                        {step === 7 && (
                            <StepContainer
                                title="Chamada intermediária"
                                description="Configure a chamada de motivação.">
                                <Field
                                    label="Título"
                                    value={data.motivation.title}
                                    onChange={(value) => updateMotivation('title', value)}
                                />

                                <Field
                                    label="Texto em destaque"
                                    value={data.motivation.highlightedTitle}
                                    onChange={(value) => updateMotivation('highlightedTitle', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.motivation.description}
                                    textarea
                                    onChange={(value) => updateMotivation('description', value)}
                                />

                                <Field
                                    label="Texto do botão"
                                    value={data.motivation.button2text}
                                    onChange={(value) => updateMotivation('button2text', value)}
                                />
                            </StepContainer>
                        )}

                        {/* STEP 8 */}

                        {step === 8 && (
                            <StepContainer
                                title="Depoimentos"
                                description="O Template Clean possui exatamente quatro depoimentos.">
                                <label className="flex cursor-pointer items-center gap-3 text-sm text-white">
                                    <input
                                        type="checkbox"
                                        checked={data.testimonials.enabled}
                                        onChange={(event) =>
                                            setData((current) => ({
                                                ...current,

                                                testimonials: {
                                                    ...current.testimonials,

                                                    enabled: event.target.checked,
                                                },
                                            }))
                                        }
                                    />
                                    Mostrar depoimentos
                                </label>

                                <Field
                                    label="Título"
                                    value={data.testimonials.title}
                                    onChange={(value) =>
                                        setData((current) => ({
                                            ...current,

                                            testimonials: {
                                                ...current.testimonials,

                                                title: value,
                                            },
                                        }))
                                    }
                                />

                                {data.testimonials.cards.map((card, index) => (
                                    <EditorCard key={index} title={`Depoimento ${index + 1}`}>
                                        <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                                            <img
                                                src={card.avatar}
                                                alt={card.name}
                                                className="h-40 w-full object-cover"
                                            />
                                        </div>

                                        <label className="flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-color-woodsmoke px-4 py-3 text-sm font-medium text-white transition hover:border-color-malachite hover:text-color-malachite">
                                            Trocar foto
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/webp"
                                                className="hidden"
                                                onChange={(event) => handleTestimonialImage(index, event)}
                                            />
                                        </label>

                                        <Field
                                            label="Nome"
                                            value={card.name}
                                            onChange={(value) => updateTestimonial(index, 'name', value)}
                                        />

                                        <Field
                                            label="Informação"
                                            value={card.type}
                                            onChange={(value) => updateTestimonial(index, 'type', value)}
                                        />

                                        <Field
                                            label="Depoimento"
                                            value={card.desc}
                                            textarea
                                            onChange={(value) => updateTestimonial(index, 'desc', value)}
                                        />

                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-white">Avaliação</label>

                                            <select
                                                value={card.rating}
                                                onChange={(event) =>
                                                    updateTestimonial(index, 'rating', Number(event.target.value))
                                                }
                                                className="h-12 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white outline-none focus:border-[var(--malachite-700)]">
                                                <option value="5">5 estrelas</option>
                                                <option value="4">4 estrelas</option>
                                                <option value="3">3 estrelas</option>
                                                <option value="2">2 estrelas</option>
                                                <option value="1">1 estrela</option>
                                            </select>
                                        </div>
                                    </EditorCard>
                                ))}
                            </StepContainer>
                        )}

                        {/* STEP 9 */}

                        {step === 9 && (
                            <StepContainer
                                title="Sintonia e propósito"
                                description="Cada sentimento possui um único conteúdo.">
                                <Field
                                    label="Texto superior"
                                    value={data.feelings.eyebrow}
                                    onChange={(value) =>
                                        setData((current) => ({
                                            ...current,

                                            feelings: {
                                                ...current.feelings,

                                                eyebrow: value,
                                            },
                                        }))
                                    }
                                />

                                <Field
                                    label="Título"
                                    value={data.feelings.title}
                                    onChange={(value) =>
                                        setData((current) => ({
                                            ...current,

                                            feelings: {
                                                ...current.feelings,

                                                title: value,
                                            },
                                        }))
                                    }
                                />

                                <Field
                                    label="Descrição"
                                    value={data.feelings.description}
                                    textarea
                                    onChange={(value) =>
                                        setData((current) => ({
                                            ...current,

                                            feelings: {
                                                ...current.feelings,

                                                description: value,
                                            },
                                        }))
                                    }
                                />

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-white">Sentimento inicial</label>

                                    <select
                                        value={data.feelings.defaultFeeling}
                                        onChange={(event) =>
                                            setData((current) => ({
                                                ...current,

                                                feelings: {
                                                    ...current.feelings,

                                                    defaultFeeling: event.target.value as FeelingKey,
                                                },
                                            }))
                                        }
                                        className="h-12 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white outline-none">
                                        <option value="FORTE">FORTE</option>
                                        <option value="DISPOSTO">DISPOSTO</option>
                                        <option value="CONFIANTE">CONFIANTE</option>
                                        <option value="LEVE">LEVE</option>
                                        <option value="ATIVO">ATIVO</option>
                                        <option value="SAUDÁVEL">SAUDÁVEL</option>
                                        <option value="CAPAZ">CAPAZ</option>
                                    </select>
                                </div>

                                {(
                                    [
                                        ['forte', 'FORTE'],
                                        ['disposto', 'DISPOSTO'],
                                        ['confiante', 'CONFIANTE'],
                                        ['leve', 'LEVE'],
                                        ['ativo', 'ATIVO'],
                                        ['saudavel', 'SAUDÁVEL'],
                                        ['capaz', 'CAPAZ'],
                                    ] as const
                                ).map(([key, label]) => (
                                    <EditorCard key={key} title={label}>
                                        <Field
                                            label="Título"
                                            value={data.feelings[key].title}
                                            onChange={(value) => updateFeeling(key, 'title', value)}
                                        />

                                        <Field
                                            label="Descrição"
                                            value={data.feelings[key].description}
                                            textarea
                                            onChange={(value) => updateFeeling(key, 'description', value)}
                                        />
                                    </EditorCard>
                                ))}
                            </StepContainer>
                        )}

                        {/* STEP 10 */}

                        {step === 10 && (
                            <StepContainer title="Próximo passo" description="Configure a chamada final do site.">
                                <Field
                                    label="Texto superior"
                                    value={data.contact.eyebrow}
                                    onChange={(value) => updateContact('eyebrow', value)}
                                />

                                <Field
                                    label="Título"
                                    value={data.contact.title}
                                    textarea
                                    onChange={(value) => updateContact('title', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.contact.description}
                                    textarea
                                    onChange={(value) => updateContact('description', value)}
                                />

                                <Field
                                    label="Botão da anamnese"
                                    value={data.contact.primaryButtonText}
                                    onChange={(value) => updateContact('primaryButtonText', value)}
                                />

                                <Field
                                    label="Link da anamnese ou número do WhatsApp"
                                    value={data.contact.primaryButtonHref}
                                    onChange={(value) => updateContact('primaryButtonHref', value)}
                                    placeholder="Ex.: #anamnese, https://... ou 5531999999999"
                                />

                                <Field
                                    label="Botão do WhatsApp"
                                    value={data.contact.secondaryButtonText}
                                    onChange={(value) => updateContact('secondaryButtonText', value)}
                                />

                                <Field
                                    label="Link ou número do WhatsApp"
                                    value={data.contact.secondaryButtonHref}
                                    onChange={(value) => updateContact('secondaryButtonHref', value)}
                                    placeholder="Ex.: 5531999999999 ou https://wa.me/..."
                                />
                            </StepContainer>
                        )}

                        {/* STEP 11 */}

                        {step === 11 && (
                            <StepContainer title="WhatsApp" description="Configure o botão de WhatsApp.">
                                <label className="flex cursor-pointer items-center gap-3 text-sm text-white">
                                    <input
                                        type="checkbox"
                                        checked={data.whatsapp.enabled}
                                        onChange={(event) => updateWhatsapp('enabled', event.target.checked)}
                                    />
                                    Mostrar botão do WhatsApp
                                </label>

                                <Field
                                    label="Número"
                                    value={data.whatsapp.phone}
                                    placeholder="Ex: 5531999999999"
                                    onChange={(value) => updateWhatsapp('phone', value.replace(/\D/g, ''))}
                                />

                                <Field
                                    label="Mensagem automática"
                                    value={data.whatsapp.message}
                                    textarea
                                    onChange={(value) => updateWhatsapp('message', value)}
                                />
                            </StepContainer>
                        )}

                        {/* MESSAGES */}

                        {publishMessage && (
                            <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
                                {publishMessage}
                            </div>
                        )}

                        {publishError && (
                            <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                                {publishError}
                            </div>
                        )}

                        {/* NAVIGATION */}

                        <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
                            {step > 0 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={previousStep}
                                    className="h-12 flex-1 border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white">
                                    Voltar
                                </Button>
                            )}

                            {step < steps.length - 1 ? (
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="h-12 flex-1 bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110">
                                    Continuar
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    onClick={handleFinish}
                                    disabled={publishing}
                                    className="h-12 flex-1 bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110 disabled:opacity-60">
                                    {publishing ? 'Publicando...' : site ? 'Salvar alterações' : 'Publicar meu site'}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* DESKTOP PREVIEW */}

                    <div className="hidden min-w-0 rounded-2xl border border-white/10 bg-color-codgray p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-6 md:block">
                        <div className="sticky top-6">
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-white">Preview do seu site</h2>

                                <p className="text-sm text-color-clay">As alterações aparecem em tempo real.</p>
                            </div>

                            <div
                                ref={previewScrollRef}
                                className="h-[calc(100vh-180px)] overflow-y-auto overflow-x-hidden rounded-2xl border border-white/10 bg-white">
                                <div
                                    className="min-h-full overflow-visible"
                                    style={{
                                        width: '1280px',

                                        maxWidth: 'none',

                                        zoom: previewScale,
                                    }}>
                                    <PreviewContent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE FIXED BUTTON */}

            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[color-mix(in_srgb,var(--cod-gray-950)_95%,transparent)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
                <div className="mx-auto max-w-md">
                    <Button
                        type="button"
                        onClick={() => setMobilePreviewOpen(true)}
                        className="h-12 w-full rounded-lg bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110">
                        Ver prévia do site
                    </Button>
                </div>
            </div>

            {/* MOBILE PREVIEW */}

            {mobilePreviewOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-color-woodsmoke md:hidden">
                    <div className="shrink-0 border-b border-white/10 bg-color-codgray px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] text-center">
                        <p className="truncate text-sm font-semibold text-white">Prévia do site</p>

                        <p className="mt-1 text-xs text-color-clay">
                            Etapa {step + 1}: {steps[step].title}
                        </p>
                    </div>

                    <div
                        ref={mobilePreviewScrollRef}
                        className="flex-1 scroll-pt-4 overflow-y-auto overflow-x-hidden bg-white">
                        <PreviewContent mobile />
                    </div>

                    <div className="shrink-0 border-t border-white/10 bg-[color-mix(in_srgb,var(--cod-gray-950)_95%,transparent)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
                        <div className="mx-auto max-w-md">
                            <Button
                                type="button"
                                onClick={() => setMobilePreviewOpen(false)}
                                className="h-12 w-full rounded-lg bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110">
                                Voltar para edição
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

// ================================================================
// STEP
// ================================================================

interface StepContainerProps {
    title: string
    description: string
    children: React.ReactNode
}

function StepContainer({ title, description, children }: StepContainerProps) {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>

                <p className="mt-1 text-sm text-color-clay">{description}</p>
            </div>

            <div className="flex flex-col gap-5">{children}</div>
        </div>
    )
}

// ================================================================
// EDITOR CARD
// ================================================================

function EditorCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
            <p className="mb-4 text-sm font-semibold text-color-malachite">{title}</p>

            <div className="flex flex-col gap-4">{children}</div>
        </div>
    )
}

// ================================================================
// IMAGE FIELD
// ================================================================

interface ImageFieldProps {
    label: string
    altLabel: string
    altValue: string
    preview: string
    onAltChange: (value: string) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function ImageField({ label, altLabel, altValue, preview, onAltChange, onChange }: ImageFieldProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-sm font-medium text-white">{label}</p>

                    <p className="mt-1 text-xs text-color-clay">JPG, PNG ou WEBP • máximo 5 MB</p>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                    <img src={preview} alt={altValue || label} className="h-48 w-full object-cover" />
                </div>

                <label className="flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-color-woodsmoke px-4 py-3 text-sm font-medium text-white transition hover:border-color-malachite hover:text-color-malachite">
                    Escolher imagem
                    <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={onChange}
                        className="hidden"
                    />
                </label>

                <Field label={altLabel} value={altValue} placeholder="Descreva a imagem" onChange={onAltChange} />
            </div>
        </div>
    )
}

// ================================================================
// FIELD
// ================================================================

interface FieldProps {
    label: string
    value: string
    placeholder?: string
    textarea?: boolean
    onChange: (value: string) => void
}

function Field({ label, value, placeholder, textarea = false, onChange }: FieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">{label}</label>

            {textarea ? (
                <textarea
                    value={value}
                    placeholder={placeholder}
                    rows={4}
                    onChange={(event) => onChange(event.target.value)}
                    className="resize-none rounded-lg border border-white/10 bg-color-woodsmoke px-4 py-3 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-[var(--malachite-700)]"
                />
            ) : (
                <input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={(event) => onChange(event.target.value)}
                    className="h-12 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-[var(--malachite-700)]"
                />
            )}
        </div>
    )
}
