'use client'

import * as React from 'react'
import Link from 'next/link'

import Cards2 from '@/components/sections/Cards/Card2'
import Cards5 from '@/components/sections/Cards/Card5'
import Contact from '@/components/sections/Contact/Contact'
import { Features2 } from '@/components/sections/Features/Features2'
import { HeroSection1 } from '@/components/sections/hero-section'
import Metrics1 from '@/components/sections/Metrics/Metrics1'
import { Button } from '@/components/ui/button'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

interface CustomizeSiteProps {
    templateName: string
    templateImage: string
    userName: string
    site?: Site | null
}

type Site = {
    id: string
    name?: string | null
    slug?: string | null
    template1?: {
        hero?: {
            titlePrimary?: string | null
            title?: string | null
            titleHighlight?: string | null
            desc?: string | null
            button1text?: string | null
            button1url?: string | null
            img?: string | { id?: string; url?: string | null; alt?: string | null } | null
        } | null

        metrics?: Array<{
            number?: string | null
            text?: string | null
        }> | null

        services?: {
            title?: string | null
            desc?: string | null
            cards?: Array<{
                title?: string | null
                desc?: string | null
                text?: string | null
                price?: string | null
                option?: Array<{
                    text?: string | null
                }> | null
                link?: string | null
                featured?: boolean | null
            }> | null
        } | null

        about?: {
            img?: string | { id?: string; url?: string | null; alt?: string | null } | null
            title?: string | null
            desc?: string | null
            features?: Array<{ title?: string | null }> | null
        } | null

        testimonials?: {
            title?: string | null
            desc?: string | null
            cards?: Array<{
                name?: string | null
                text?: string | null
            }> | null
        } | null

        contact?: {
            title?: string | null
            titleHighlight?: string | null
            text?: string | null
            buttontext?: string | null
            buttonurl?: string | null
        } | null

        whatsapp?: {
            enabled?: boolean | null
            phone?: string | null
            message?: string | null
        } | null
    } | null
}

interface Template1Data {
    hero: {
        titlePrimary: string
        title: string
        titleHighlight: string
        desc: string
        button1text: string
        button1url: string
        img: string
    }

    metrics: {
        number: string
        text: string
    }[]

    services: {
        title: string
        desc: string
        cards: {
            title: string
            desc: string
            text: string
            price: string
            option: string[]
            link: string
            featured: boolean
        }[]
    }

    about: {
        img: string
        title: string
        desc: string
        features: {
            title: string
        }[]
    }

    testimonials: {
        title: string
        desc: string
        cards: {
            name: string
            text: string
        }[]
    }

    contact: {
        title: string
        titleHighlight: string
        text: string
        buttontext: string
        buttonurl: string
    }

    whatsapp: {
        enabled: boolean
        phone: string
        message: string
    }
}

/**
 * Retorna a URL da imagem para o preview.
 */
function getMediaUrl(
    media:
        | string
        | {
              id?: string
              url?: string | null
              alt?: string | null
          }
        | null
        | undefined,
    fallback: string
) {
    if (typeof media === 'object' && media?.url) {
        return media.url
    }

    return fallback
}

/**
 * Retorna o ID da mídia existente no Payload.
 *
 * Isso é importante porque, quando o usuário edita somente
 * textos, precisamos manter a imagem que já existe.
 */
function getMediaId(
    media:
        | string
        | {
              id?: string
              url?: string | null
              alt?: string | null
          }
        | null
        | undefined
): string | null {
    if (!media) {
        return null
    }

    if (typeof media === 'string') {
        return media
    }

    if (media.id) {
        return String(media.id)
    }

    return null
}

/**
 * Retorna o alt da mídia existente.
 */
function getMediaAlt(
    media:
        | string
        | {
              id?: string
              url?: string | null
              alt?: string | null
          }
        | null
        | undefined,
    fallback: string
) {
    if (typeof media === 'object' && media?.alt) {
        return media.alt
    }

    return fallback
}

function createInitialData(site: Site | null | undefined, templateImage: string): Template1Data {
    const template1 = site?.template1
    const defaults: Template1Data = {
        hero: {
            titlePrimary: 'PROFISSIONALISMO QUE GERA RESULTADOS',
            title: 'Transforme seu objetivo em',
            titleHighlight: 'resultados reais.',
            desc: 'Ofereço um serviço personalizado, pensado para entender suas necessidades e entregar uma experiência de qualidade, com atenção aos detalhes e foco no que realmente importa para você.',
            button1text: 'Quero começar',
            button1url: '#contato',
            img: templateImage,
        },

        metrics: [
            { number: '+8', text: 'Anos de experiência' },
            { number: '+480', text: 'Clientes atendidos' },
            { number: '4.9', text: 'Nota média dos clientes' },
            { number: '+1mil', text: 'Projetos realizados' },
        ],

        services: {
            title: 'Meus serviços',
            desc: 'Conheça as soluções que ofereço e escolha a opção ideal para você',
            cards: [
                {
                    desc: 'Atendimento personalizado',
                    title: 'Serviço Personalizado',
                    text: 'Uma solução pensada de acordo com suas necessidades, objetivos e expectativas.',
                    price: 'R$ 299,90',
                    option: ['Atendimento personalizado', 'Solução sob medida', 'Acompanhamento completo'],
                    link: '',
                    featured: true,
                },
                {
                    desc: 'Qualidade e atenção',
                    title: 'Atendimento Completo',
                    text: 'Conte com acompanhamento próximo e atenção em cada etapa do processo.',
                    price: 'R$ 499,90/mês',
                    option: ['Acompanhamento próximo', 'Suporte durante o processo', 'Atendimento completo'],
                    link: '',
                    featured: true,
                },
                {
                    desc: 'Foco em resultados',
                    title: 'Soluções Sob Medida',
                    text: 'Estratégias e serviços desenvolvidos para entregar resultados que realmente fazem diferença.',
                    price: 'R$ 799,90',
                    option: ['Estratégia personalizada', 'Foco em resultados', 'Soluções sob medida'],
                    link: '',
                    featured: false,
                },
            ],
        },

        about: {
            img: templateImage,
            title: 'Experiência, dedicação e compromisso com você',
            desc: 'Meu objetivo é oferecer um serviço de qualidade, entender o que você precisa e buscar sempre a melhor solução. Trabalho com dedicação, profissionalismo e atenção aos detalhes para proporcionar uma experiência diferenciada.',
            features: [
                { title: 'Atendimento personalizado para cada cliente' },
                { title: 'Experiência e conhecimento na área' },
                { title: 'Acompanhamento próximo durante todo o processo' },
                { title: 'Compromisso com qualidade e bons resultados' },
            ],
        },

        testimonials: {
            title: 'O que meus clientes dizem?',
            desc: '',
            cards: [
                {
                    name: 'Mariana Costa',
                    text: 'Fiquei muito satisfeita com o atendimento. Desde o primeiro contato fui muito bem atendida e o resultado superou minhas expectativas.',
                },
                {
                    name: 'Rafael Mendes',
                    text: 'Profissional extremamente atencioso e comprometido. Entendeu exatamente o que eu precisava e entregou um ótimo resultado.',
                },
                {
                    name: 'Camila Oliveira',
                    text: 'O atendimento fez toda a diferença. Tive suporte durante todo o processo e fiquei muito satisfeita com o resultado final.',
                },
                {
                    name: 'Bruno Almeida',
                    text: 'Excelente profissional. Trabalho de qualidade, atendimento rápido e muita atenção aos detalhes. Recomendo muito.',
                },
            ],
        },

        contact: {
            title: 'Pronto para dar o próximo passo?',
            titleHighlight: 'Entre em contato comigo.',
            text: 'Conte um pouco sobre o que você precisa e descubra como posso ajudar. Será um prazer conversar com você.',
            buttontext: 'Entre em contato',
            buttonurl: '',
        },

        whatsapp: {
            enabled: true,
            phone: '',
            message: 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços.',
        },
    }

    if (!site || !template1) {
        return defaults
    }

    return {
        hero: {
            titlePrimary: template1.hero?.titlePrimary ?? defaults.hero.titlePrimary,
            title: template1.hero?.title ?? defaults.hero.title,
            titleHighlight: template1.hero?.titleHighlight ?? defaults.hero.titleHighlight,
            desc: template1.hero?.desc ?? defaults.hero.desc,
            button1text: template1.hero?.button1text ?? defaults.hero.button1text,
            button1url: template1.hero?.button1url ?? defaults.hero.button1url,
            img: getMediaUrl(template1.hero?.img, templateImage),
        },

        metrics: defaults.metrics.map((defaultMetric, index) => ({
            number: template1.metrics?.[index]?.number ?? defaultMetric.number,
            text: template1.metrics?.[index]?.text ?? defaultMetric.text,
        })),

        services: {
            title: template1.services?.title ?? defaults.services.title,
            desc: template1.services?.desc ?? defaults.services.desc,
            cards: defaults.services.cards.map((defaultCard, index) => {
                const savedCard = template1.services?.cards?.[index]

                return {
                    title: savedCard?.title ?? defaultCard.title,
                    desc: savedCard?.desc ?? defaultCard.desc,
                    text: savedCard?.text ?? defaultCard.text,
                    price: savedCard?.price ?? defaultCard.price,
                    option:
                        savedCard?.option !== undefined && savedCard?.option !== null
                            ? savedCard.option.map((item) => item.text ?? '').filter(Boolean)
                            : defaultCard.option,
                    link: savedCard?.link ?? defaultCard.link,
                    featured: savedCard?.featured ?? defaultCard.featured,
                }
            }),
        },

        about: {
            img: getMediaUrl(template1.about?.img, templateImage),
            title: template1.about?.title ?? defaults.about.title,
            desc: template1.about?.desc ?? defaults.about.desc,
            features: defaults.about.features.map((defaultFeature, index) => ({
                title: template1.about?.features?.[index]?.title ?? defaultFeature.title,
            })),
        },

        testimonials: {
            title: template1.testimonials?.title ?? defaults.testimonials.title,
            desc: template1.testimonials?.desc ?? defaults.testimonials.desc,
            cards: defaults.testimonials.cards.map((defaultCard, index) => ({
                name: template1.testimonials?.cards?.[index]?.name ?? defaultCard.name,
                text: template1.testimonials?.cards?.[index]?.text ?? defaultCard.text,
            })),
        },

        contact: {
            title: template1.contact?.title ?? defaults.contact.title,
            titleHighlight: template1.contact?.titleHighlight ?? defaults.contact.titleHighlight,
            text: template1.contact?.text ?? defaults.contact.text,
            buttontext: template1.contact?.buttontext ?? defaults.contact.buttontext,
            buttonurl: template1.contact?.buttonurl ?? defaults.contact.buttonurl,
        },

        whatsapp: {
            enabled: template1.whatsapp?.enabled ?? defaults.whatsapp.enabled,
            phone: template1.whatsapp?.phone ?? defaults.whatsapp.phone,
            message: template1.whatsapp?.message ?? defaults.whatsapp.message,
        },
    }
}

const steps = [
    {
        title: 'Informações',
        description: 'Comece com as informações principais.',
    },
    {
        title: 'Hero',
        description: 'Configure a primeira seção do seu site.',
    },
    {
        title: 'Métricas',
        description: 'Mostre seus principais números.',
    },
    {
        title: 'Serviços',
        description: 'Apresente seus serviços.',
    },
    {
        title: 'Sobre',
        description: 'Conte um pouco sobre você.',
    },
    {
        title: 'Depoimentos',
        description: 'Mostre a opinião dos seus clientes.',
    },
    {
        title: 'Contato',
        description: 'Configure sua chamada para ação.',
    },
    {
        title: 'WhatsApp',
        description: 'Configure seu atendimento.',
    },
]

export default function CustomizeSite({ templateName, templateImage, userName, site }: CustomizeSiteProps) {
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

    const [heroImageFile, setHeroImageFile] = React.useState<File | null>(null)

    const [aboutImageFile, setAboutImageFile] = React.useState<File | null>(null)

    /**
     * Guarda o ID da mídia que já está salva no Payload.
     *
     * Se o usuário alterar somente textos, esses IDs continuam iguais
     * e nenhuma imagem precisa ser enviada novamente.
     *
     * Só ficam null quando o usuário escolhe uma imagem nova. Nesse caso,
     * o upload é feito no handleFinish e o novo ID passa a ser o salvo.
     */
    const [heroImageId, setHeroImageId] = React.useState<string | null>(() => getMediaId(site?.template1?.hero?.img))

    const [aboutImageId, setAboutImageId] = React.useState<string | null>(() => getMediaId(site?.template1?.about?.img))

    /**
     * IMPORTANTE:
     * Agora o preview começa com a imagem existente do site.
     * Se não existir, usa a imagem padrão do template.
     */
    const [heroImagePreview, setHeroImagePreview] = React.useState(() =>
        getMediaUrl(site?.template1?.hero?.img, templateImage)
    )

    const [aboutImagePreview, setAboutImagePreview] = React.useState(() =>
        getMediaUrl(site?.template1?.about?.img, templateImage)
    )

    const [heroImageAlt, setHeroImageAlt] = React.useState(() =>
        getMediaAlt(site?.template1?.hero?.img, 'Imagem principal do site')
    )

    const [aboutImageAlt, setAboutImageAlt] = React.useState(() =>
        getMediaAlt(site?.template1?.about?.img, 'Foto sobre o profissional')
    )

    const [data, setData] = React.useState<Template1Data>(() => createInitialData(site, templateImage))

    // ============================================================
    // INSTAGRAM IMPORT
    // ============================================================

    React.useEffect(() => {
        if (site || typeof window === 'undefined') return

        const params = new URLSearchParams(window.location.search)

        if (params.get('source') !== 'instagram') return

        const rawImport = window.sessionStorage.getItem('instagram-import')

        if (!rawImport) return

        try {
            const parsed = JSON.parse(rawImport) as {
                profile?: {
                    username?: string
                    name?: string
                    fullName?: string
                    biography?: string
                    profilePicture?: string
                    profilePicUrl?: string
                    followersCount?: number
                    postsCount?: number
                }
                username?: string
                name?: string
                fullName?: string
                biography?: string
                profilePicture?: string
                profilePicUrl?: string
                followersCount?: number
                postsCount?: number
            }

            // Aceita tanto o formato novo { profile: ... } quanto o formato antigo direto.
            const profile = parsed.profile ?? parsed

            const importedName = (profile.name || profile.fullName || profile.username || '').trim()
            const importedUsername = (profile.username || '').trim()
            const importedBio = (profile.biography || '').trim()
            const importedImage = (profile.profilePicture || profile.profilePicUrl || '').trim()
            const followers = typeof profile.followersCount === 'number' ? profile.followersCount : null
            const posts = typeof profile.postsCount === 'number' ? profile.postsCount : null
            const firstName = importedName.split(/\s+/)[0] || 'Personal'

            if (importedName) {
                setSiteName(importedName)
            }

            if (importedUsername) {
                const importedSlug = importedUsername
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/-+/g, '-')
                    .replace(/^-|-$/g, '')

                if (importedSlug) {
                    setSlug(importedSlug)
                }
            }

            if (importedImage) {
                setHeroImagePreview(importedImage)
                setAboutImagePreview(importedImage)
                setHeroImageId(null)
                setAboutImageId(null)
            }

            const bioLower = importedBio
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()

            const hasConstancy = bioLower.includes('constancia')
            const hasPersonalized = bioLower.includes('personalizado') || bioLower.includes('personalizada')
            const hasWeightLoss = bioLower.includes('emagrec')
            const hasHypertrophy = bioLower.includes('hipertrof')
            const hasPerformance = bioLower.includes('performance')

            let focus = 'resultados consistentes'
            if (hasWeightLoss) focus = 'emagrecimento com estratégia'
            else if (hasHypertrophy) focus = 'hipertrofia e evolução'
            else if (hasPerformance) focus = 'performance e evolução'
            else if (hasConstancy) focus = 'constância e evolução'

            const personalizedText = hasPersonalized
                ? 'Treino personalizado de acordo com seus objetivos, rotina e nível atual.'
                : 'Acompanhamento pensado de acordo com seus objetivos, rotina e evolução.'

            setData((current) => ({
                ...current,
                hero: {
                    ...current.hero,
                    titlePrimary: importedName
                        ? `${importedName.toUpperCase()} • PERSONAL TRAINER`
                        : 'TREINAMENTO PERSONALIZADO',
                    title: 'Transforme seu treino em',
                    titleHighlight: `${focus}.`,
                    desc:
                        importedBio ||
                        `${personalizedText} Um processo construído para gerar evolução com segurança e consistência.`,
                    button1text: 'Quero começar',
                    button1url: '#contato',
                    img: importedImage || current.hero.img,
                },

                metrics: [
                    {
                        number: followers !== null ? followers.toLocaleString('pt-BR') : '100%',
                        text: followers !== null ? 'Seguidores no Instagram' : 'Treino personalizado',
                    },
                    {
                        number: posts !== null ? posts.toLocaleString('pt-BR') : '1:1',
                        text: posts !== null ? 'Conteúdos publicados' : 'Acompanhamento individual',
                    },
                    {
                        number: '3',
                        text: 'Etapas: avaliação, estratégia e evolução',
                    },
                    {
                        number: '100%',
                        text: 'Foco em constância e progresso',
                    },
                ],

                services: {
                    ...current.services,
                    title: `Treinos pensados para a sua evolução`,
                    desc: `${firstName} trabalha com acompanhamento personalizado para transformar objetivos em um plano de treino possível de seguir no dia a dia.`,
                    cards: [
                        {
                            ...current.services.cards[0],
                            desc: 'TREINO PERSONALIZADO',
                            title: 'Personal Training',
                            text: personalizedText,
                            price: '',
                            option: [
                                'Planejamento individual',
                                'Treinos adaptados à sua rotina',
                                'Acompanhamento da evolução',
                            ],
                            link: '',
                            featured: true,
                        },
                        {
                            ...current.services.cards[1],
                            desc: 'ACOMPANHAMENTO',
                            title: 'Evolução com constância',
                            text: `Estratégia de treino com ajustes ao longo do processo para manter sua evolução de forma consistente.`,
                            price: '',
                            option: [
                                'Ajustes de treino',
                                'Orientação durante o processo',
                                'Foco em execução e consistência',
                            ],
                            link: '',
                            featured: false,
                        },
                        {
                            ...current.services.cards[2],
                            desc: 'ESTRATÉGIA',
                            title: 'Treino para seus objetivos',
                            text: `Uma abordagem direcionada para ${focus}, respeitando seu momento, sua rotina e seus objetivos.`,
                            price: '',
                            option: ['Objetivos bem definidos', 'Progressão planejada', 'Treino adaptável'],
                            link: '',
                            featured: false,
                        },
                    ],
                },

                about: {
                    ...current.about,
                    img: importedImage || current.about.img,
                    title: importedName
                        ? `${importedName}: treino com estratégia e acompanhamento`
                        : 'Treino com estratégia e acompanhamento',
                    desc:
                        importedBio ||
                        `${personalizedText} A proposta é construir um processo sustentável, com orientação próxima e evolução progressiva.`,
                    features: [
                        { title: 'Treino personalizado para seus objetivos' },
                        { title: 'Planejamento de acordo com sua rotina' },
                        { title: 'Acompanhamento e ajustes durante o processo' },
                        { title: 'Foco em constância, segurança e evolução' },
                    ],
                },

                // O Instagram não fornece depoimentos reais dos alunos.
                // Limpamos os exemplos para não publicar testemunhos fictícios.
                testimonials: {
                    ...current.testimonials,
                    title: 'Resultados construídos com acompanhamento',
                    desc: 'Adicione aqui depoimentos reais dos seus alunos.',
                    cards: current.testimonials.cards.map(() => ({
                        name: '',
                        text: '',
                    })),
                },

                contact: {
                    ...current.contact,
                    title: 'Pronto para começar sua evolução?',
                    titleHighlight: `Fale com ${firstName}.`,
                    text: `Conte seus objetivos e descubra como um acompanhamento personalizado pode ajudar você a construir ${focus}.`,
                    buttontext: 'Quero começar',
                    buttonurl: '',
                },

                whatsapp: {
                    ...current.whatsapp,
                    enabled: true,
                    message: `Olá, ${firstName}! Vi seu site e gostaria de saber mais sobre o acompanhamento personalizado.`,
                },
            }))

            console.log('DADOS DO INSTAGRAM APLICADOS AO TEMPLATE FITNESS:', profile)
        } catch (error) {
            console.error('Não foi possível aplicar os dados do Instagram ao Template 1:', error)
        }
    }, [site])

    React.useEffect(() => {
        if (!mobilePreviewOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [mobilePreviewOpen])

    React.useEffect(() => {
        const preview = previewScrollRef.current

        if (!preview) return

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

    React.useEffect(() => {
        const previewIndex = Math.max(0, step - 1)
        const section = previewSectionRefs.current[previewIndex]

        if (!section) return

        const timer = window.setTimeout(() => {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }, 80)

        return () => window.clearTimeout(timer)
    }, [step])

    React.useEffect(() => {
        if (!mobilePreviewOpen) return

        // step 0 (Informações) abre no topo/Hero.
        // A partir do Hero, cada etapa acompanha sua seção no preview.
        const previewIndex = Math.max(0, Math.min(6, step - 1))
        const section = mobilePreviewSectionRefs.current[previewIndex]
        const scrollContainer = mobilePreviewScrollRef.current

        const timer = window.setTimeout(() => {
            if (step === 0) {
                scrollContainer?.scrollTo({ top: 0, behavior: 'auto' })
                return
            }

            section?.scrollIntoView({
                behavior: 'auto',
                block: 'start',
            })
        }, 100)

        return () => window.clearTimeout(timer)
    }, [mobilePreviewOpen, step])

    // ============================================================
    // HERO
    // ============================================================

    function updateHero(field: keyof Template1Data['hero'], value: string) {
        setData((current) => ({
            ...current,
            hero: {
                ...current.hero,
                [field]: value,
            },
        }))
    }

    // ============================================================
    // MÉTRICAS
    // ============================================================

    function updateMetric(index: number, field: 'number' | 'text', value: string) {
        setData((current) => {
            const metrics = [...current.metrics]

            metrics[index] = {
                ...metrics[index],
                [field]: value,
            }

            return {
                ...current,
                metrics,
            }
        })
    }

    // ============================================================
    // SERVIÇOS
    // ============================================================

    function updateServices(field: 'title' | 'desc', value: string) {
        setData((current) => ({
            ...current,
            services: {
                ...current.services,
                [field]: value,
            },
        }))
    }

    function updateServiceCard(
        index: number,
        field: keyof Template1Data['services']['cards'][number],
        value: string | boolean | string[]
    ) {
        setData((current) => {
            const cards = [...current.services.cards]

            cards[index] = {
                ...cards[index],
                [field]: value,
            }

            return {
                ...current,
                services: {
                    ...current.services,
                    cards,
                },
            }
        })
    }

    function updateServiceOption(serviceIndex: number, optionIndex: number, value: string) {
        setData((current) => {
            const cards = [...current.services.cards]
            const options = [...cards[serviceIndex].option]

            options[optionIndex] = value

            cards[serviceIndex] = {
                ...cards[serviceIndex],
                option: options,
            }

            return {
                ...current,
                services: {
                    ...current.services,
                    cards,
                },
            }
        })
    }

    function addServiceOption(serviceIndex: number) {
        setData((current) => {
            const cards = [...current.services.cards]
            const currentOptions = cards[serviceIndex].option

            if (currentOptions.length >= 4) {
                return current
            }

            cards[serviceIndex] = {
                ...cards[serviceIndex],
                option: [...currentOptions, ''],
            }

            return {
                ...current,
                services: {
                    ...current.services,
                    cards,
                },
            }
        })
    }

    function removeServiceOption(serviceIndex: number, optionIndex: number) {
        setData((current) => {
            const cards = [...current.services.cards]

            cards[serviceIndex] = {
                ...cards[serviceIndex],
                option: cards[serviceIndex].option.filter((_, index) => index !== optionIndex),
            }

            return {
                ...current,
                services: {
                    ...current.services,
                    cards,
                },
            }
        })
    }

    // ============================================================
    // SOBRE
    // ============================================================

    function updateAbout(field: 'title' | 'desc', value: string) {
        setData((current) => ({
            ...current,
            about: {
                ...current.about,
                [field]: value,
            },
        }))
    }

    function updateFeature(index: number, value: string) {
        setData((current) => {
            const features = [...current.about.features]

            features[index] = {
                ...features[index],
                title: value,
            }

            return {
                ...current,
                about: {
                    ...current.about,
                    features,
                },
            }
        })
    }

    // ============================================================
    // DEPOIMENTOS
    // ============================================================

    function updateTestimonials(field: 'title' | 'desc', value: string) {
        setData((current) => ({
            ...current,
            testimonials: {
                ...current.testimonials,
                [field]: value,
            },
        }))
    }

    function updateTestimonial(
        index: number,
        field: keyof Template1Data['testimonials']['cards'][number],
        value: string
    ) {
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

    // ============================================================
    // CONTATO
    // ============================================================

    function updateContact(field: keyof Template1Data['contact'], value: string) {
        setData((current) => ({
            ...current,
            contact: {
                ...current.contact,
                [field]: value,
            },
        }))
    }

    // ============================================================
    // WHATSAPP
    // ============================================================

    function updateWhatsapp(field: keyof Template1Data['whatsapp'], value: string | boolean) {
        setData((current) => ({
            ...current,
            whatsapp: {
                ...current.whatsapp,
                [field]: value,
            },
        }))
    }

    // ============================================================
    // NAVEGAÇÃO
    // ============================================================

    React.useEffect(() => {
        const timer = window.setTimeout(() => {
            const element = formRef.current

            if (!element) return

            const top = element.getBoundingClientRect().top + window.scrollY - 16

            window.scrollTo({
                top: Math.max(0, top),
                behavior: 'smooth',
            })
        }, 50)

        return () => window.clearTimeout(timer)
    }, [step])

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
            console.error('Erro ao enviar imagem para Media:', result)

            throw new Error(result?.errors?.[0]?.message || result?.message || 'Não foi possível enviar a imagem.')
        }

        return String(result.doc.id)
    }

    async function createTemplateImageFile(): Promise<File> {
        const imageResponse = await fetch(templateImage, {
            method: 'GET',
            cache: 'no-store',
        })

        if (!imageResponse.ok) {
            throw new Error('Não foi possível carregar a imagem padrão do template.')
        }

        const blob = await imageResponse.blob()

        const extension = blob.type === 'image/png' ? 'png' : blob.type === 'image/webp' ? 'webp' : 'jpg'

        return new File([blob], `template-1-${Date.now()}.${extension}`, {
            type: blob.type || 'image/png',
        })
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>, type: 'hero' | 'about') {
        const file = event.target.files?.[0]

        if (!file) return

        if (!file.type.startsWith('image/')) {
            setPublishError('Selecione um arquivo de imagem válido.')
            return
        }

        if (file.size > 5 * 1024 * 1024) {
            setPublishError('A imagem deve ter no máximo 5 MB.')
            return
        }

        setPublishError('')
        setPublishMessage('')

        const previewUrl = URL.createObjectURL(file)

        if (type === 'hero') {
            // A partir daqui existe uma imagem nova aguardando upload.
            setHeroImageFile(file)
            setHeroImageId(null)

            setHeroImagePreview((current) => {
                if (current.startsWith('blob:')) {
                    URL.revokeObjectURL(current)
                }

                return previewUrl
            })
        } else {
            // A partir daqui existe uma imagem nova aguardando upload.
            setAboutImageFile(file)
            setAboutImageId(null)

            setAboutImagePreview((current) => {
                if (current.startsWith('blob:')) {
                    URL.revokeObjectURL(current)
                }

                return previewUrl
            })
        }

        /**
         * Atualiza também a imagem usada no preview do site.
         */
        setData((current) => {
            if (type === 'hero') {
                return {
                    ...current,
                    hero: {
                        ...current.hero,
                        img: previewUrl,
                    },
                }
            }

            return {
                ...current,
                about: {
                    ...current.about,
                    img: previewUrl,
                },
            }
        })
    }

    // ============================================================
    // PUBLICAR
    // ============================================================

    async function handleFinish() {
        if (publishing) return

        setPublishMessage('')
        setPublishError('')

        if (!siteName.trim()) {
            setPublishError('Digite o nome do site.')
            return
        }

        if (!slug.trim()) {
            setPublishError('Digite o slug do site.')
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

        // ========================================================
        // VALIDAR OPÇÕES DOS SERVIÇOS
        // ========================================================

        // As opções são opcionais e cada serviço pode ter até 4 benefícios.
        for (let index = 0; index < data.services.cards.length; index++) {
            const options = data.services.cards[index].option

            if (options.length > 4) {
                setPublishError(`O Serviço ${index + 1} pode ter no máximo 4 opções.`)
                setStep(3)
                return
            }

            if (options.some((option) => !option.trim())) {
                setPublishError(`Preencha ou remova as opções vazias do Serviço ${index + 1}.`)
                setStep(3)
                return
            }
        }

        setPublishing(true)

        try {
            const userResponse = await fetch('/api/users/me', {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store',
            })

            if (!userResponse.ok) {
                throw new Error('Você precisa estar logado para publicar o site.')
            }

            const userResult = await userResponse.json()
            const user = userResult?.user

            if (!user?.id) {
                throw new Error('Não foi possível identificar o usuário logado.')
            }

            if (!/^[a-fA-F0-9]{24}$/.test(String(user.id))) {
                throw new Error(
                    'O usuário logado possui um ID inválido para o MongoDB. Verifique o registro do usuário na collection users.'
                )
            }

            // ========================================================
            // LOCALIZAR O SITE DO USUÁRIO
            // ========================================================
            //
            // REGRA PRINCIPAL:
            // O usuário só pode ter UM site.
            //
            // Se ele já possui um site, sempre atualizamos aquele site.
            // Nunca criamos outro apenas porque o slug foi alterado.
            //
            // O site só poderá ser criado novamente depois que o anterior
            // for realmente excluído.
            // ========================================================

            let existingSite = site || null

            // Primeiro procuramos pelo usuário, e NÃO pelo slug.
            // Isso impede que trocar o endereço do site crie um segundo site.
            const userSiteParams = new URLSearchParams()
            userSiteParams.set('where[user][equals]', String(user.id))
            userSiteParams.set('limit', '1')

            const userSiteResponse = await fetch(`/api/sites?${userSiteParams.toString()}`, {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store',
            })

            if (!userSiteResponse.ok) {
                throw new Error('Não foi possível verificar se você já possui um site.')
            }

            const userSiteResult = await userSiteResponse.json()
            const siteOwnedByUser = userSiteResult?.docs?.[0] || null

            if (siteOwnedByUser?.id) {
                existingSite = siteOwnedByUser
            }

            // ========================================================
            // VERIFICAR CONFLITO DE SLUG
            // ========================================================
            //
            // Podemos alterar o slug do próprio site.
            // Mas não podemos pegar o slug de outro usuário.
            // ========================================================

            const slugParams = new URLSearchParams()
            slugParams.set('where[slug][equals]', cleanSlug)
            slugParams.set('limit', '1')

            const slugResponse = await fetch(`/api/sites?${slugParams.toString()}`, {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store',
            })

            if (!slugResponse.ok) {
                throw new Error('Não foi possível verificar o endereço do site.')
            }

            const slugResult = await slugResponse.json()
            const siteWithSlug = slugResult?.docs?.[0] || null

            if (siteWithSlug?.id && String(siteWithSlug.id) !== String(existingSite?.id || '')) {
                throw new Error('Esse endereço já está sendo usado por outro site.')
            }

            // ========================================================
            // IMAGENS
            // ========================================================
            //
            // REGRA:
            //
            // 1. Se escolheu imagem nova: faz upload.
            //
            // 2. Se não escolheu imagem nova e já existe imagem: mantém
            //    exatamente o mesmo ID da mídia no Payload.
            //
            // 3. Se não existe site/imagem: usa a imagem padrão do template.
            //
            // Assim, alterar textos, preços, opções, links etc. NÃO exige
            // reenviar a imagem.
            // ========================================================

            let heroMediaId: string
            let aboutMediaId: string

            // --------------------------------------------------------
            // HERO
            // --------------------------------------------------------

            if (heroImageFile) {
                // Usuário escolheu uma imagem nova.
                heroMediaId = await uploadMedia(heroImageFile, heroImageAlt)
                setHeroImageId(heroMediaId)
            } else if (heroImageId) {
                // Usuário não escolheu uma imagem nova.
                // Mantém a mídia que já está salva.
                heroMediaId = heroImageId
            } else {
                // Site novo sem imagem.
                const existingHeroMediaId = getMediaId(existingSite?.template1?.hero?.img)

                if (existingHeroMediaId) {
                    heroMediaId = existingHeroMediaId
                    setHeroImageId(heroMediaId)
                } else {
                    const heroFile = await createTemplateImageFile()
                    heroMediaId = await uploadMedia(heroFile, heroImageAlt)
                    setHeroImageId(heroMediaId)
                }
            }

            // --------------------------------------------------------
            // SOBRE
            // --------------------------------------------------------

            if (aboutImageFile) {
                // Usuário escolheu uma imagem nova.
                aboutMediaId = await uploadMedia(aboutImageFile, aboutImageAlt)
                setAboutImageId(aboutMediaId)
            } else if (aboutImageId) {
                // Usuário não escolheu uma imagem nova.
                // Mantém a mídia que já está salva.
                aboutMediaId = aboutImageId
            } else {
                const existingAboutMediaId = getMediaId(existingSite?.template1?.about?.img)

                if (existingAboutMediaId) {
                    aboutMediaId = existingAboutMediaId
                    setAboutImageId(aboutMediaId)
                } else {
                    // Se não existe imagem de Sobre, usamos a mesma do Hero.
                    aboutMediaId = heroMediaId
                    setAboutImageId(aboutMediaId)
                }
            }

            // ========================================================
            // DADOS DO SITE
            // ========================================================

            const payloadData = {
                name: siteName.trim(),

                slug: cleanSlug,

                template: 'template-1',

                published: true,

                user: user.id,

                template1: {
                    hero: {
                        titlePrimary: data.hero.titlePrimary,

                        title: data.hero.title,

                        titleHighlight: data.hero.titleHighlight,

                        desc: data.hero.desc,

                        button1text: data.hero.button1text,

                        button1url: data.hero.button1url,

                        img: heroMediaId,
                    },

                    metrics: data.metrics.map((metric) => ({
                        number: metric.number,

                        text: metric.text,
                    })),

                    services: {
                        title: data.services.title,

                        desc: data.services.desc,

                        cards: data.services.cards.map((card) => ({
                            title: card.title,

                            desc: card.desc,

                            text: card.text,

                            price: card.price || undefined,

                            option:
                                card.option.length > 0
                                    ? card.option
                                          .filter((item) => item.trim())
                                          .map((item) => ({
                                              text: item,
                                          }))
                                    : undefined,

                            link: card.link || undefined,

                            featured: card.featured,
                        })),
                    },

                    about: {
                        img: aboutMediaId,

                        title: data.about.title,

                        desc: data.about.desc,

                        features: data.about.features.map((feature) => ({
                            title: feature.title,
                        })),
                    },

                    testimonials: {
                        title: data.testimonials.title,

                        desc: data.testimonials.desc,

                        cards: data.testimonials.cards.map((card) => ({
                            name: card.name,

                            text: card.text,
                        })),
                    },

                    contact: {
                        ...data.contact,
                    },

                    whatsapp: {
                        ...data.whatsapp,
                    },
                },
            }

            // ========================================================
            // ATUALIZAR OU CRIAR
            // ========================================================

            let response: Response

            if (existingSite?.id) {
                // ----------------------------------------------------
                // SITE JÁ EXISTE
                // ----------------------------------------------------
                //
                // Sempre usamos PATCH no site existente.
                // Isso vale mesmo se o usuário tiver alterado o slug.
                // Portanto, editar nunca cria um segundo site.
                // ----------------------------------------------------
                response = await fetch(`/api/sites/${existingSite.id}`, {
                    method: 'PATCH',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    credentials: 'include',

                    body: JSON.stringify(payloadData),
                })
            } else {
                // ----------------------------------------------------
                // NENHUM SITE EXISTE
                // ----------------------------------------------------
                //
                // Só chegamos aqui quando o usuário realmente não
                // possui nenhum site. Depois que esse site existir,
                // as próximas personalizações sempre cairão no PATCH.
                // ----------------------------------------------------
                response = await fetch('/api/sites', {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    credentials: 'include',

                    body: JSON.stringify(payloadData),
                })
            }

            const result = await response.json().catch(() => null)

            if (!response.ok) {
                console.error('Erro Payload:', result)

                throw new Error(result?.errors?.[0]?.message || result?.message || 'Não foi possível publicar o site.')
            }

            // ========================================================
            // SUCESSO
            // ========================================================

            const savedSlug = result?.doc?.slug ?? result?.slug
            const publishedSlug = typeof savedSlug === 'string' && savedSlug ? savedSlug : cleanSlug

            setSlug(publishedSlug)

            setPublishMessage('Seu site foi publicado com sucesso!')

            window.setTimeout(() => {
                window.location.href = `/personal/${encodeURIComponent(publishedSlug)}`
            }, 1200)
        } catch (error) {
            console.error('Erro ao publicar site:', error)

            setPublishError(error instanceof Error ? error.message : 'Erro ao publicar o site.')
        } finally {
            setPublishing(false)
        }
    }

    // ============================================================
    // PREVIEW
    // ============================================================

    const previewMetrics = data.metrics.map((metric) => ({
        number: metric.number || '0',

        text: metric.text || 'Sua métrica',
    }))

    const previewServices = data.services.cards.map((card) => ({
        title: card.title || 'Seu serviço',

        desc: card.desc || 'Descrição do serviço.',

        text: card.text || 'Descreva aqui o seu serviço.',

        price: card.price || '',

        option: card.option.filter(Boolean),

        link: card.link || '',

        featured: card.featured,
    }))

    const previewFeatures = data.about.features.map((feature) => ({
        title: feature.title || 'Seu diferencial',
    }))

    const previewTestimonials = data.testimonials.cards.map((card) => ({
        name: card.name || 'Nome do cliente',

        text: card.text || 'O depoimento do seu cliente aparecerá aqui.',
    }))

    return (
        <section className="min-h-screen bg-color-woodsmoke py-8 pb-28 md:pb-8">
            <div className="container mx-auto px-4">
                {/* ========================================================
                    CABEÇALHO
                ======================================================== */}

                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase text-color-malachite">Vamos começar?</p>

                        <h1 className="mt-2 text-3xl font-semibold text-white">Configure seu site</h1>

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

                {/* ========================================================
                    PROGRESSO
                ======================================================== */}

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

                {/* ========================================================
                    EDITOR + PREVIEW
                ======================================================== */}

                <div className="grid gap-6 xl:grid-cols-[500px_1fr]">
                    {/* ====================================================
                        FORMULÁRIO
                    ==================================================== */}

                    <div
                        ref={formRef}
                        className="scroll-mt-4 rounded-2xl border border-white/10 bg-color-codgray p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-6">
                        {/* ==================================================
                            ETAPA 1 — INFORMAÇÕES
                        ================================================== */}

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

                                    <p className="mt-2 text-sm text-color-clay">
                                        /personal/
                                        {slug || 'seu-endereco'}
                                    </p>
                                </div>
                            </StepContainer>
                        )}

                        {/* ==================================================
                            ETAPA 2 — HERO
                        ================================================== */}

                        {step === 1 && (
                            <StepContainer
                                title="Hero"
                                description="Essa é a primeira seção que seus visitantes verão.">
                                <Field
                                    label="Texto superior"
                                    value={data.hero.titlePrimary}
                                    placeholder="Ex: PROFISSIONALISMO QUE GERA RESULTADOS"
                                    onChange={(value) => updateHero('titlePrimary', value)}
                                />

                                <Field
                                    label="Título principal"
                                    value={data.hero.title}
                                    placeholder="Ex: Transforme seu objetivo em"
                                    textarea
                                    onChange={(value) => updateHero('title', value)}
                                />

                                <Field
                                    label="Texto destacado"
                                    value={data.hero.titleHighlight}
                                    placeholder="Ex: resultados reais."
                                    onChange={(value) => updateHero('titleHighlight', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.hero.desc}
                                    placeholder="Conte um pouco sobre seu trabalho..."
                                    textarea
                                    onChange={(value) => updateHero('desc', value)}
                                />

                                <Field
                                    label="Texto do botão"
                                    value={data.hero.button1text}
                                    placeholder="Ex: Quero começar"
                                    onChange={(value) => updateHero('button1text', value)}
                                />

                                <Field
                                    label="Link do botão"
                                    value={data.hero.button1url}
                                    placeholder="Ex: #contato"
                                    onChange={(value) => updateHero('button1url', value)}
                                />

                                <ImageField
                                    label="Imagem do Hero"
                                    altLabel="Texto alternativo"
                                    altValue={heroImageAlt}
                                    preview={heroImagePreview}
                                    onAltChange={setHeroImageAlt}
                                    onChange={(event) => handleImageChange(event, 'hero')}
                                />
                            </StepContainer>
                        )}

                        {/* ==================================================
                            ETAPA 3 — MÉTRICAS
                        ================================================== */}

                        {step === 2 && (
                            <StepContainer title="Métricas" description="O Template 1 utiliza exatamente 4 métricas.">
                                {data.metrics.map((metric, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
                                        <p className="mb-4 text-sm font-semibold text-color-malachite">
                                            Métrica {String(index + 1).padStart(2, '0')}
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <Field
                                                label="Número"
                                                value={metric.number}
                                                placeholder="Ex: 480"
                                                onChange={(value) => updateMetric(index, 'number', value)}
                                            />

                                            <Field
                                                label="Texto"
                                                value={metric.text}
                                                placeholder="Ex: Clientes atendidos"
                                                onChange={(value) => updateMetric(index, 'text', value)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </StepContainer>
                        )}

                        {/* ==================================================
                            ETAPA 4 — SERVIÇOS
                        ================================================== */}

                        {step === 3 && (
                            <StepContainer title="Serviços" description="O Template 1 possui exatamente 3 serviços.">
                                <Field
                                    label="Título da seção"
                                    value={data.services.title}
                                    placeholder="Ex: Meus serviços"
                                    onChange={(value) => updateServices('title', value)}
                                />

                                <Field
                                    label="Descrição da seção"
                                    value={data.services.desc}
                                    placeholder="Ex: Conheça as soluções que ofereço..."
                                    textarea
                                    onChange={(value) => updateServices('desc', value)}
                                />

                                {data.services.cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
                                        <p className="mb-4 text-sm font-semibold text-color-malachite">
                                            Serviço {String(index + 1).padStart(2, '0')}
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <Field
                                                label="Título"
                                                value={card.title}
                                                placeholder="Ex: Treino personalizado"
                                                onChange={(value) => updateServiceCard(index, 'title', value)}
                                            />

                                            <Field
                                                label="Descrição curta"
                                                value={card.desc}
                                                placeholder="Ex: Um plano feito para você"
                                                onChange={(value) => updateServiceCard(index, 'desc', value)}
                                            />

                                            <Field
                                                label="Texto"
                                                value={card.text}
                                                placeholder="Descreva o serviço..."
                                                textarea
                                                onChange={(value) => updateServiceCard(index, 'text', value)}
                                            />

                                            <Field
                                                label="Preço"
                                                value={card.price}
                                                placeholder="Ex: R$ 199,90/mês ou Consulte"
                                                onChange={(value) => updateServiceCard(index, 'price', value)}
                                            />

                                            <Field
                                                label="Link do WhatsApp"
                                                value={card.link}
                                                placeholder="Ex: https://wa.me/5531999999999"
                                                onChange={(value) => updateServiceCard(index, 'link', value)}
                                            />

                                            <div className="flex flex-col gap-3 rounded-lg border border-white/10 p-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">
                                                            Opções do plano
                                                        </p>

                                                        <p className="text-xs text-color-clay">
                                                            {card.option.length === 0
                                                                ? 'Opcional — adicione até 4 benefícios'
                                                                : `${card.option.length}/4 opções`}
                                                        </p>
                                                    </div>

                                                    {card.option.length < 4 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => addServiceOption(index)}
                                                            className="rounded-lg bg-color-malachite px-3 py-2 text-xs font-semibold text-black transition hover:opacity-90">
                                                            + Adicionar
                                                        </button>
                                                    )}
                                                </div>

                                                {card.option.length > 0 ? (
                                                    <div className="flex flex-col gap-3">
                                                        {card.option.map((option, optionIndex) => (
                                                            <div key={optionIndex} className="flex gap-2">
                                                                <input
                                                                    type="text"
                                                                    value={option}
                                                                    placeholder={`Opção ${optionIndex + 1}`}
                                                                    onChange={(event) =>
                                                                        updateServiceOption(
                                                                            index,
                                                                            optionIndex,
                                                                            event.target.value
                                                                        )
                                                                    }
                                                                    className="h-11 flex-1 rounded-lg border border-white/10 bg-color-codgray px-4 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-[var(--malachite-700)]"
                                                                />

                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        removeServiceOption(index, optionIndex)
                                                                    }
                                                                    className="rounded-lg border border-red-500/20 px-3 text-sm text-red-400 transition hover:bg-red-500/10">
                                                                    ×
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-xs text-color-clay">Nenhuma opção adicionada.</p>
                                                )}
                                            </div>

                                            <label className="flex cursor-pointer items-center gap-3 text-sm text-white">
                                                <input
                                                    type="checkbox"
                                                    checked={card.featured}
                                                    onChange={(event) =>
                                                        updateServiceCard(index, 'featured', event.target.checked)
                                                    }
                                                />
                                                Destacar serviço
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </StepContainer>
                        )}

                        {/* ==================================================
                            ETAPA 5 — SOBRE
                        ================================================== */}

                        {step === 4 && (
                            <StepContainer title="Sobre você" description="Conte para seus visitantes quem você é.">
                                <Field
                                    label="Título"
                                    value={data.about.title}
                                    placeholder="Ex: Experiência, dedicação e compromisso com você"
                                    onChange={(value) => updateAbout('title', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.about.desc}
                                    placeholder="Conte sua experiência..."
                                    textarea
                                    onChange={(value) => updateAbout('desc', value)}
                                />

                                <div className="flex flex-col gap-4">
                                    <p className="text-sm font-medium text-white">4 diferenciais</p>

                                    {data.about.features.map((feature, index) => (
                                        <Field
                                            key={index}
                                            label={`Diferencial ${index + 1}`}
                                            value={feature.title}
                                            placeholder="Ex: Atendimento personalizado"
                                            onChange={(value) => updateFeature(index, value)}
                                        />
                                    ))}
                                </div>

                                <ImageField
                                    label="Imagem sobre você"
                                    altLabel="Texto alternativo"
                                    altValue={aboutImageAlt}
                                    preview={aboutImagePreview}
                                    onAltChange={setAboutImageAlt}
                                    onChange={(event) => handleImageChange(event, 'about')}
                                />
                            </StepContainer>
                        )}

                        {/* ==================================================
                            ETAPA 6 — DEPOIMENTOS
                        ================================================== */}

                        {step === 5 && (
                            <StepContainer
                                title="Clientes dizem"
                                description="O Template 1 utiliza exatamente 4 depoimentos.">
                                <Field
                                    label="Título"
                                    value={data.testimonials.title}
                                    placeholder="Ex: O que meus clientes dizem?"
                                    onChange={(value) => updateTestimonials('title', value)}
                                />

                                <Field
                                    label="Descrição"
                                    value={data.testimonials.desc}
                                    placeholder="Ex: Veja a experiência dos meus clientes..."
                                    textarea
                                    onChange={(value) => updateTestimonials('desc', value)}
                                />

                                {data.testimonials.cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
                                        <p className="mb-4 text-sm font-semibold text-color-malachite">
                                            Cliente {String(index + 1).padStart(2, '0')}
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <Field
                                                label="Nome"
                                                value={card.name}
                                                placeholder="Ex: Mariana Costa"
                                                onChange={(value) => updateTestimonial(index, 'name', value)}
                                            />

                                            <Field
                                                label="Depoimento"
                                                value={card.text}
                                                placeholder="Escreva o depoimento..."
                                                textarea
                                                onChange={(value) => updateTestimonial(index, 'text', value)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </StepContainer>
                        )}

                        {/* ==================================================
                            ETAPA 7 — CONTATO
                        ================================================== */}

                        {step === 6 && (
                            <StepContainer title="Contato" description="Configure a chamada para ação do seu site.">
                                <Field
                                    label="Título"
                                    value={data.contact.title}
                                    placeholder="Ex: Pronto para dar o próximo passo?"
                                    textarea
                                    onChange={(value) => updateContact('title', value)}
                                />

                                <Field
                                    label="Texto destacado"
                                    value={data.contact.titleHighlight}
                                    placeholder="Ex: Entre em contato comigo."
                                    onChange={(value) => updateContact('titleHighlight', value)}
                                />

                                <Field
                                    label="Texto"
                                    value={data.contact.text}
                                    placeholder="Ex: Conte um pouco sobre o que você precisa..."
                                    textarea
                                    onChange={(value) => updateContact('text', value)}
                                />

                                <Field
                                    label="Texto do botão"
                                    value={data.contact.buttontext}
                                    placeholder="Ex: Entre em contato"
                                    onChange={(value) => updateContact('buttontext', value)}
                                />

                                <Field
                                    label="Link do botão"
                                    value={data.contact.buttonurl}
                                    placeholder="Ex: https://wa.me/5531999999999"
                                    onChange={(value) => updateContact('buttonurl', value)}
                                />
                            </StepContainer>
                        )}

                        {/* ==================================================
                            ETAPA 8 — WHATSAPP
                        ================================================== */}

                        {step === 7 && (
                            <StepContainer title="WhatsApp" description="Configure o botão de WhatsApp do seu site.">
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
                                    onChange={(value) => updateWhatsapp('phone', value)}
                                />

                                <Field
                                    label="Mensagem automática"
                                    value={data.whatsapp.message}
                                    placeholder="Ex: Olá! Vi seu site e gostaria de saber mais."
                                    textarea
                                    onChange={(value) => updateWhatsapp('message', value)}
                                />
                            </StepContainer>
                        )}

                        {/* ==================================================
                            MENSAGENS
                        ================================================== */}

                        {publishMessage && (
                            <div className="mb-4 rounded-xl border border-[color-mix(in_srgb,var(--malachite-500)_20%,transparent)] bg-[color-mix(in_srgb,var(--malachite-500)_10%,transparent)] p-4 text-sm font-medium text-color-malachite">
                                {publishMessage}
                            </div>
                        )}

                        {publishError && (
                            <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm font-medium text-red-400">
                                {publishError}
                            </div>
                        )}

                        {/* ==================================================
                            BOTÕES
                        ================================================== */}

                        <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
                            {step > 0 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={previousStep}
                                    className="h-12 flex-1 rounded-lg border-white/10 bg-color-woodsmoke text-white hover:bg-color-woodsmoke hover:text-color-malachite focus-visible:ring-color-malachite">
                                    ← Voltar
                                </Button>
                            )}

                            {step < steps.length - 1 ? (
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="h-12 flex-1 rounded-lg bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110 focus-visible:ring-color-malachite focus-visible:ring-offset-color-codgray">
                                    Continuar →
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    onClick={handleFinish}
                                    disabled={publishing}
                                    className="h-12 flex-1 rounded-lg bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110 focus-visible:ring-color-malachite focus-visible:ring-offset-color-codgray disabled:cursor-not-allowed disabled:opacity-60">
                                    {publishing ? 'Publicando...' : 'Publicar meu site'}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* ====================================================
                        PREVIEW
                    ==================================================== */}

                    <div className="hidden min-w-0 rounded-2xl border border-white/10 bg-color-codgray p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-6 md:block">
                        <div className="sticky top-6">
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-white">Preview do seu site</h2>

                                <p className="text-sm text-color-clay">As alterações aparecem em tempo real.</p>
                            </div>

                            <div
                                ref={previewScrollRef}
                                className="h-[calc(100vh-180px)] overflow-y-auto overflow-x-hidden rounded-2xl border border-white/10 bg-black">
                                <div
                                    className="min-h-full overflow-visible"
                                    style={{
                                        width: '1280px',
                                        maxWidth: 'none',
                                        zoom: previewScale,
                                    }}>
                                    {/* HERO */}

                                    <div
                                        ref={(element) => {
                                            previewSectionRefs.current[0] = element
                                        }}
                                        className={`transition-all duration-300 ${
                                            step <= 1
                                                ? 'outline outline-2 outline-offset-[-2px] outline-[color-mix(in_srgb,var(--malachite-500)_60%,transparent)]'
                                                : ''
                                        }`}>
                                        <HeroSection1
                                            titlePrimary={data.hero.titlePrimary || 'SEU TEXTO SUPERIOR'}
                                            title={
                                                <>
                                                    {data.hero.title || 'Seu título principal'}

                                                    {data.hero.titleHighlight && (
                                                        <>
                                                            {' '}
                                                            <span className="font-bold text-color-malachite">
                                                                {data.hero.titleHighlight}
                                                            </span>
                                                        </>
                                                    )}
                                                </>
                                            }
                                            desc={data.hero.desc || 'Sua descrição aparecerá aqui.'}
                                            button1text={data.hero.button1text || 'Seu botão'}
                                            button2text=""
                                            img={data.hero.img || templateImage}
                                        />
                                    </div>

                                    {/* MÉTRICAS */}

                                    <div
                                        ref={(element) => {
                                            previewSectionRefs.current[1] = element
                                        }}
                                        className={`transition-all duration-300 ${
                                            step === 2
                                                ? 'outline outline-2 outline-offset-[-2px] outline-[color-mix(in_srgb,var(--malachite-500)_60%,transparent)]'
                                                : ''
                                        }`}>
                                        <Metrics1 metrics={previewMetrics} />
                                    </div>

                                    {/* SERVIÇOS */}

                                    <div
                                        ref={(element) => {
                                            previewSectionRefs.current[2] = element
                                        }}
                                        className={`transition-all duration-300 ${
                                            step === 3
                                                ? 'outline outline-2 outline-offset-[-2px] outline-[color-mix(in_srgb,var(--malachite-500)_60%,transparent)]'
                                                : ''
                                        }`}>
                                        <Cards5
                                            title={data.services.title || 'Meus serviços'}
                                            desc={data.services.desc || 'Conheça meus serviços.'}
                                            cards={previewServices}
                                        />
                                    </div>

                                    {/* SOBRE */}

                                    <div
                                        ref={(element) => {
                                            previewSectionRefs.current[3] = element
                                        }}
                                        className={`transition-all duration-300 ${
                                            step === 4
                                                ? 'outline outline-2 outline-offset-[-2px] outline-[color-mix(in_srgb,var(--malachite-500)_60%,transparent)]'
                                                : ''
                                        }`}>
                                        <Features2
                                            img={data.about.img || templateImage}
                                            title={data.about.title || 'Sobre mim'}
                                            desc={data.about.desc || 'Conte aqui um pouco sobre você.'}
                                            features={previewFeatures}
                                        />
                                    </div>

                                    {/* DEPOIMENTOS */}

                                    <div
                                        ref={(element) => {
                                            previewSectionRefs.current[4] = element
                                        }}
                                        className={`transition-all duration-300 ${
                                            step === 5
                                                ? 'outline outline-2 outline-offset-[-2px] outline-[color-mix(in_srgb,var(--malachite-500)_60%,transparent)]'
                                                : ''
                                        }`}>
                                        <Cards2
                                            title={data.testimonials.title || 'O que meus clientes dizem?'}
                                            desc={data.testimonials.desc || ''}
                                            cards={previewTestimonials}
                                        />
                                    </div>

                                    {/* CONTATO */}

                                    <div
                                        ref={(element) => {
                                            previewSectionRefs.current[5] = element
                                        }}
                                        className={`transition-all duration-300 ${
                                            step === 6
                                                ? 'outline outline-2 outline-offset-[-2px] outline-[color-mix(in_srgb,var(--malachite-500)_60%,transparent)]'
                                                : ''
                                        }`}>
                                        <Contact
                                            title={
                                                <>
                                                    {data.contact.title || 'Entre em contato'}

                                                    {data.contact.titleHighlight && (
                                                        <>
                                                            <br />

                                                            <span className="font-bold text-color-malachite">
                                                                {data.contact.titleHighlight}
                                                            </span>
                                                        </>
                                                    )}
                                                </>
                                            }
                                            text={data.contact.text || 'Seu texto de contato aparecerá aqui.'}
                                            buttontext={data.contact.buttontext || 'Entre em contato'}
                                        />
                                    </div>

                                    {/* WHATSAPP */}

                                    <div
                                        ref={(element) => {
                                            previewSectionRefs.current[6] = element
                                        }}
                                        className={`transition-all duration-300 ${
                                            step === 7
                                                ? 'outline outline-2 outline-offset-[-2px] outline-[color-mix(in_srgb,var(--malachite-500)_60%,transparent)]'
                                                : ''
                                        }`}>
                                        {data.whatsapp.enabled && data.whatsapp.phone && (
                                            <WhatsAppFloat phone={data.whatsapp.phone} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====================================================
                BOTÃO FIXO DE PREVIEW — MOBILE
            ==================================================== */}

            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[color-mix(in_srgb,var(--cod-gray-950)_95%,transparent)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
                <div className="mx-auto max-w-md">
                    <Button
                        type="button"
                        onClick={() => setMobilePreviewOpen(true)}
                        className="h-12 w-full rounded-lg bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110 focus-visible:ring-color-malachite focus-visible:ring-offset-color-codgray">
                        Ver prévia do site
                    </Button>
                </div>
            </div>

            {/* ====================================================
                PREVIEW EM TELA CHEIA — MOBILE
            ==================================================== */}

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
                        className="flex-1 scroll-pt-4 overflow-y-auto overflow-x-hidden bg-black">
                        <div
                            ref={(element) => {
                                mobilePreviewSectionRefs.current[0] = element
                            }}>
                            <HeroSection1
                                titlePrimary={data.hero.titlePrimary || 'SEU TEXTO SUPERIOR'}
                                title={
                                    <>
                                        {data.hero.title || 'Seu título principal'}
                                        {data.hero.titleHighlight && (
                                            <>
                                                {' '}
                                                <span className="font-bold text-color-malachite">
                                                    {data.hero.titleHighlight}
                                                </span>
                                            </>
                                        )}
                                    </>
                                }
                                desc={data.hero.desc || 'Sua descrição aparecerá aqui.'}
                                button1text={data.hero.button1text || 'Seu botão'}
                                button2text=""
                                img={data.hero.img || templateImage}
                            />
                        </div>

                        <div
                            ref={(element) => {
                                mobilePreviewSectionRefs.current[1] = element
                            }}>
                            <Metrics1 metrics={previewMetrics} />
                        </div>

                        <div
                            ref={(element) => {
                                mobilePreviewSectionRefs.current[2] = element
                            }}>
                            <Cards5
                                title={data.services.title || 'Meus serviços'}
                                desc={data.services.desc || 'Conheça meus serviços.'}
                                cards={previewServices}
                            />
                        </div>

                        <div
                            ref={(element) => {
                                mobilePreviewSectionRefs.current[3] = element
                            }}>
                            <Features2
                                img={data.about.img || templateImage}
                                title={data.about.title || 'Sobre mim'}
                                desc={data.about.desc || 'Conte aqui um pouco sobre você.'}
                                features={previewFeatures}
                            />
                        </div>

                        <div
                            ref={(element) => {
                                mobilePreviewSectionRefs.current[4] = element
                            }}>
                            <Cards2
                                title={data.testimonials.title || 'O que meus clientes dizem?'}
                                desc={data.testimonials.desc || ''}
                                cards={previewTestimonials}
                            />
                        </div>

                        <div
                            ref={(element) => {
                                mobilePreviewSectionRefs.current[5] = element
                            }}>
                            <Contact
                                title={
                                    <>
                                        {data.contact.title || 'Entre em contato'}
                                        {data.contact.titleHighlight && (
                                            <>
                                                <br />
                                                <span className="font-bold text-color-malachite">
                                                    {data.contact.titleHighlight}
                                                </span>
                                            </>
                                        )}
                                    </>
                                }
                                text={data.contact.text || 'Seu texto de contato aparecerá aqui.'}
                                buttontext={data.contact.buttontext || 'Entre em contato'}
                            />
                        </div>

                        <div
                            ref={(element) => {
                                mobilePreviewSectionRefs.current[6] = element
                            }}
                            className="min-h-24">
                            {data.whatsapp.enabled && data.whatsapp.phone && (
                                <WhatsAppFloat phone={data.whatsapp.phone} />
                            )}
                        </div>
                    </div>

                    <div className="shrink-0 border-t border-white/10 bg-[color-mix(in_srgb,var(--cod-gray-950)_95%,transparent)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
                        <div className="mx-auto max-w-md">
                            <Button
                                type="button"
                                onClick={() => setMobilePreviewOpen(false)}
                                className="h-12 w-full rounded-lg bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110 focus-visible:ring-color-malachite focus-visible:ring-offset-color-codgray">
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
// COMPONENTE DE ETAPA
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
// CAMPO DE IMAGEM
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
// CAMPO
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
