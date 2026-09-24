'use client'

import * as React from 'react'
import Link from 'next/link'
import { CiTimer } from 'react-icons/ci'
import { FaStar, FaUsers } from 'react-icons/fa6'

import AboutUs4 from '@/components/sections/AboutUs/AboutUs4'
import Card8 from '@/components/sections/Cards/Card8'
import Cards9 from '@/components/sections/Cards/Card9'
import Contact4 from '@/components/sections/Contact/Contact4'
import { HeroSection4 } from '@/components/sections/hero-section/hero-section4'
import Metrics3 from '@/components/sections/Metrics/Metrics3'
import Results4 from '@/components/sections/Results/Results4'
import { Button } from '@/components/ui/button'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

type Media = string | { id?: string; url?: string | null; alt?: string | null } | null

type Site = {
    id: string
    name?: string | null
    slug?: string | null
    template4?: {
        hero?: any
        metrics?: any[]
        method?: any
        results?: { cards?: any[] | null } | null
        services?: any
        about?: any
        contact?: any
        whatsapp?: any
    } | null
}

interface Props {
    templateName: string
    templateImage: string
    userName: string
    site?: Site | null
}

type ResultCard = {
    beforeLabel: string
    beforeTitle: string
    beforeText: string
    beforeImage: string
    afterLabel: string
    afterTitle: string
    afterText: string
    afterImage: string
    name: string
    quote: string
    objective: string
    plan: string
}

type ServiceCard = {
    desc: string
    title: string
    text: string
    price: string
    option: string[]
    link: string
    iconBgColor: string
    featured: boolean
}

type Data = {
    hero: {
        titlePrimary: string
        title: string
        titleHighlight: string
        titleSecondary: string
        desc: string
        button1text: string
        button1url: string
        button2text: string
        button2url: string
        offer: { label: string; originalPrice: string; price: string; suffix: string; savings: string }
        img: string
        tags: { text: string }[]
    }
    metrics: { number: string; title: string; text: string }[]
    method: {
        title: string
        desc: string
        cards: { number: string; title: string; text: string }[]
        button1text: string
        button1url: string
        cardTitle: string
        cardText: string
    }
    results: { cards: ResultCard[] }
    services: { title: string; desc: string; cards: ServiceCard[] }
    about: {
        title: string
        description: string
        imgTitle: string
        imgDesc: string
        img: string
        paragraphs: string[]
        cards: { title: string; description: string }[]
    }
    contact: {
        eyebrow: string
        title: string
        description: string
        primaryButtonText: string
        primaryButtonHref: string
        secondaryButtonText: string
    }
    whatsapp: { enabled: boolean; phone: string; message: string }
}

const TEMPLATE4_DEFAULT_IMAGE = '/images/pessoa4.png'

const mediaUrl = (m: Media | undefined, fallback = '') => {
    if (typeof m === 'string' && (m.startsWith('/') || /^https?:\/\//.test(m))) return m
    if (typeof m === 'object' && m?.url) return m.url
    return fallback
}

const mediaId = (m: Media | undefined) => (!m ? null : typeof m === 'string' ? m : m.id ? String(m.id) : null)

const mediaAlt = (m: Media | undefined, fallback: string) => (typeof m === 'object' && m?.alt ? m.alt : fallback)

function removeEmojis(value: string) {
    return value
        .replace(/[\u{1F1E6}-\u{1F1FF}\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '')
        .replace(/\s+/g, ' ')
        .trim()
}

function defaults(): Data {
    return {
        hero: {
            titlePrimary: 'TREINAMENTO FEMININO',
            title: 'Treinamento feminino para você se sentir mais',
            titleHighlight: 'forte, saudável',
            titleSecondary: 'e confiante.',
            desc: 'Metodologia baseada na fisiologia feminina, planejada para a sua rotina real — seja em casa ou na academia. Conquiste definição, postura e vitalidade com acompanhamento próximo e profissional.',
            button1text: 'Quero começar agora',
            button1url: '',
            button2text: 'Conhecer o programa',
            button2url: '#programa',
            offer: {
                label: 'Apenas nesta turma',
                originalPrice: 'De R$ 270',
                price: 'R$ 100',
                suffix: '/mês no plano inicial',
                savings: 'Economize R$ 170 e garanta suporte individual.',
            },
            img: TEMPLATE4_DEFAULT_IMAGE,
            tags: [
                { text: 'Treino 100% personalizado' },
                { text: 'Acompanhamento online' },
                { text: 'Vídeos explicativos em HD' },
            ],
        },
        metrics: [
            { number: '+9 Anos', title: 'DE EXPERIÊNCIA', text: 'Presencial e Consultoria Online' },
            { number: '100%', title: 'TREINOS PERSONALIZADOS', text: 'Fisiologia e rotina individual' },
            { number: 'Direto', title: 'ACOMPANHAMENTO ONLINE', text: 'Feedback e ajustes semanais' },
            { number: 'Para Você', title: 'TODOS OS NÍVEIS', text: 'Iniciante, intermediária e avançada' },
        ],
        method: {
            title: 'Como funciona',
            desc: 'Um acompanhamento personalizado, pensado para seus objetivos, sua rotina e seu nível de condicionamento.',
            cards: [
                {
                    number: '01',
                    title: 'Conte seus objetivos',
                    text: 'Você preenche uma anamnese detalhada sobre seu histórico, dores, nível de condicionamento, rotina diária e tempo disponível para treinar.',
                },
                {
                    number: '02',
                    title: 'Receba seu treino personalizado',
                    text: 'Desenvolvo seu plano exclusivo de treino, em casa ou na academia, com vídeos demonstrativos e orientações posturais.',
                },
                {
                    number: '03',
                    title: 'Evolua com acompanhamento',
                    text: 'Tiramos dúvidas, corrigimos sua execução e fazemos ajustes contínuos para manter sua evolução.',
                },
            ],
            button1text: 'Garantir minha vaga bonus',
            button1url: '',
            cardTitle: 'Encontro Mensal em Grupo ao Vivo',
            cardText:
                'Assinando qualquer plano, você participa de uma aula online em grupo por mês para tirar dúvidas, melhorar a execução e manter a motivação.',
        },
        results: {
            cards: [
                {
                    beforeLabel: 'Antes (sedentária)',
                    beforeTitle: 'Dores nas costas',
                    beforeText: 'Baixa disposição',
                    beforeImage: '/images/results4-before.png',
                    afterLabel: 'Depois (4 meses)',
                    afterTitle: '−7kg de gordura',
                    afterText: 'Postura corrigida',
                    afterImage: '/images/results4-after.png',
                    name: 'Camila Vasconcelos, 34 anos',
                    quote: 'Tinha medo de me machucar treinando em casa, mas os vídeos deram total segurança.',
                    objective: 'Tonificação e Saúde',
                    plan: 'Plano Trimestral',
                },
            ],
        },
        services: {
            title: 'Treinamento pensado para você.',
            desc: 'Cada acompanhamento é pensado para sua rotina, seus objetivos e seu momento atual.',
            cards: [
                {
                    desc: 'MÓDULO PRESENCIAL',
                    title: 'Performance Privativa',
                    text: 'Sessões presenciais com acompanhamento personalizado.',
                    price: 'R$ 1.490/mês',
                    option: ['Avaliação postural completa', 'Periodização sob medida', 'Suporte contínuo'],
                    link: '',
                    iconBgColor: '#F5E7EA',
                    featured: false,
                },
                {
                    desc: 'CONCIERGE TOTAL',
                    title: 'Concierge Executivo Full',
                    text: 'Atendimento híbrido e acompanhamento completo.',
                    price: 'R$ 2.990/mês',
                    option: ['Planejamento personalizado', 'Monitoramento contínuo', 'Atendimento prioritário'],
                    link: '',
                    iconBgColor: '#F5E7EA',
                    featured: true,
                },
                {
                    desc: 'MÓDULO REMOTO',
                    title: 'Consultoria Remota Elite',
                    text: 'Prescrição estratégica remota para quem treina com autonomia.',
                    price: 'R$ 890/mês',
                    option: ['Análise em vídeo', 'Ajustes e progressão', 'Canal via WhatsApp'],
                    link: '',
                    iconBgColor: '#F5E7EA',
                    featured: false,
                },
            ],
        },
        about: {
            title: 'Conheça Camila Ribeiro',
            description: 'Treinadora pessoal que ajuda você a conquistar mais força, disposição e confiança.',
            imgTitle: 'REGISTRO PROFISSIONAL ATIVO',
            imgDesc: 'CREF 032253G/MG',
            img: TEMPLATE4_DEFAULT_IMAGE,
            paragraphs: [
                'Há mais de 9 anos, ajudo mulheres a conquistar saúde, força e disposição por meio do exercício físico.',
                'Cada treino é pensado para respeitar sua rotina e acompanhar sua evolução.',
            ],
            cards: [
                { title: 'Pós-graduação', description: 'Bases fisiológicas do treinamento físico.' },
                { title: 'Especialização', description: 'Treinamento de força para mulheres.' },
                { title: 'Certificação', description: 'Avaliação física e prescrição de exercícios.' },
            ],
        },
        contact: {
            eyebrow: 'VAGAS LIMITADAS PARA ACOMPANHAMENTO',
            title: 'Pronta para começar sua transformação?',
            description:
                'Você não precisa de horas na academia nem de métodos radicais. Precisa apenas de um plano feito para o seu corpo e do suporte certo para não desistir.',
            primaryButtonText: 'Quero iniciar meu treinamento',
            primaryButtonHref: '#anamnese',
            secondaryButtonText: 'Falar no WhatsApp',
        },
        whatsapp: {
            enabled: true,
            phone: '5531999999999',
            message: 'Olá! Vi seu site e gostaria de saber mais sobre seu treinamento.',
        },
    }
}

function initial(site: Site | null | undefined): Data {
    const d = defaults()
    const t = site?.template4
    if (!t) return d

    return {
        hero: {
            ...d.hero,
            ...t.hero,
            offer: { ...d.hero.offer, ...(t.hero?.offer || {}) },
            img: mediaUrl(t.hero?.img, TEMPLATE4_DEFAULT_IMAGE),
            tags: d.hero.tags.map((x, i) => ({ text: t.hero?.tags?.[i]?.text ?? x.text })),
        },
        metrics: d.metrics.map((x, i) => ({ ...x, ...(t.metrics?.[i] || {}) })),
        method: {
            ...d.method,
            ...t.method,
            cards: d.method.cards.map((x, i) => ({ ...x, ...(t.method?.cards?.[i] || {}) })),
        },
        results: {
            cards: (t.results?.cards ?? d.results.cards).slice(0, 2).map((x: any) => ({
                beforeLabel: x.beforeLabel ?? '',
                beforeTitle: x.beforeTitle ?? '',
                beforeText: x.beforeText ?? '',
                beforeImage: mediaUrl(x.beforeImage, '/images/results4-before.png'),
                afterLabel: x.afterLabel ?? '',
                afterTitle: x.afterTitle ?? '',
                afterText: x.afterText ?? '',
                afterImage: mediaUrl(x.afterImage, '/images/results4-after.png'),
                name: x.name ?? '',
                quote: x.quote ?? '',
                objective: x.objective ?? '',
                plan: x.plan ?? '',
            })),
        },
        services: {
            title: t.services?.title ?? d.services.title,
            desc: t.services?.desc ?? d.services.desc,
            cards: (t.services?.cards?.length ? t.services.cards : d.services.cards)
                .slice(0, 3)
                .map((x: any, i: number) => ({
                    desc: x.desc ?? d.services.cards[i]?.desc ?? '',
                    title: x.title ?? d.services.cards[i]?.title ?? '',
                    text: x.text ?? d.services.cards[i]?.text ?? '',
                    price: x.price ?? d.services.cards[i]?.price ?? '',
                    option:
                        x.option?.map((o: any) => o.text ?? '').filter(Boolean) ?? d.services.cards[i]?.option ?? [],
                    link: x.link ?? '',
                    iconBgColor: x.iconBgColor ?? '#F5E7EA',
                    featured: x.featured ?? false,
                })),
        },
        about: {
            ...d.about,
            ...t.about,
            img: mediaUrl(t.about?.img, TEMPLATE4_DEFAULT_IMAGE),
            paragraphs: t.about?.paragraphs?.map((p: any) => p.text ?? '').filter(Boolean) ?? d.about.paragraphs,
            cards:
                t.about?.cards?.map((c: any) => ({ title: c.title ?? '', description: c.description ?? '' })) ??
                d.about.cards,
        },
        contact: { ...d.contact, ...(t.contact || {}) },
        whatsapp: { ...d.whatsapp, ...(t.whatsapp || {}) },
    }
}

const steps = [
    'Informações',
    'Hero',
    'Métricas',
    'Como funciona',
    'Resultados',
    'Treinamentos',
    'Sobre',
    'Contato',
    'WhatsApp',
]

export default function CustomizeSite4({ templateName, userName, site }: Props) {
    const [step, setStep] = React.useState(0)
    const [data, setData] = React.useState<Data>(() => initial(site))
    const [siteName, setSiteName] = React.useState(site?.name || userName || '')
    const [slug, setSlug] = React.useState(site?.slug || '')
    const [publishing, setPublishing] = React.useState(false)
    const [error, setError] = React.useState('')
    const [success, setSuccess] = React.useState('')
    const [mobilePreview, setMobilePreview] = React.useState(false)

    const previewScrollRef = React.useRef<HTMLDivElement | null>(null)
    const previewSectionRefs = React.useRef<Array<HTMLDivElement | null>>([])

    const [heroFile, setHeroFile] = React.useState<File | null>(null)
    const [heroId, setHeroId] = React.useState<string | null>(() => mediaId(site?.template4?.hero?.img))
    const [heroAlt, setHeroAlt] = React.useState(() => mediaAlt(site?.template4?.hero?.img, 'Imagem principal'))

    const [aboutFile, setAboutFile] = React.useState<File | null>(null)
    const [aboutId, setAboutId] = React.useState<string | null>(() => mediaId(site?.template4?.about?.img))
    const [aboutAlt, setAboutAlt] = React.useState(() => mediaAlt(site?.template4?.about?.img, 'Foto do profissional'))

    const [resultFiles, setResultFiles] = React.useState<Record<string, File | null>>({})
    const [resultIds, setResultIds] = React.useState<Record<string, string | null>>(() => {
        const ids: Record<string, string | null> = {}
        site?.template4?.results?.cards?.forEach((r: any, i: number) => {
            ids[`${i}-before`] = mediaId(r.beforeImage)
            ids[`${i}-after`] = mediaId(r.afterImage)
        })
        return ids
    })

    React.useEffect(() => {
        if (site || typeof window === 'undefined') return

        const params = new URLSearchParams(window.location.search)
        if (params.get('source') !== 'instagram') return

        const storedImport = window.sessionStorage.getItem('instagram-import')
        if (!storedImport) return

        try {
            const imported = JSON.parse(storedImport) as {
                profile?: {
                    username?: string
                    name?: string
                    biography?: string
                    profilePicture?: string
                    profilePicUrl?: string
                    followersCount?: number
                    postsCount?: number
                }
                template?: string
            }

            const profile = imported.profile
            if (!profile || imported.template !== 'feminino') return

            const name = removeEmojis(String(profile.name || profile.username || ''))
            const username = removeEmojis(String(profile.username || ''))
            const biography = removeEmojis(String(profile.biography || ''))
            const picture = String(profile.profilePicture || profile.profilePicUrl || '').trim()
            const followers = typeof profile.followersCount === 'number' ? profile.followersCount : null
            const posts = typeof profile.postsCount === 'number' ? profile.postsCount : null

            if (name) setSiteName(name)
            if (username) {
                setSlug(
                    username
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/-+/g, '-')
                        .replace(/^-|-$/g, '')
                )
            }

            setData((current) => ({
                ...current,
                hero: {
                    ...current.hero,
                    ...(name ? { titlePrimary: 'TREINAMENTO FEMININO' } : {}),
                    ...(biography
                        ? {
                              title: 'Treinamento feminino para você se sentir mais',
                              titleHighlight: 'forte, saudável',
                              titleSecondary: 'e confiante.',
                              desc: biography,
                              button1text: 'Quero começar agora',
                              button2text: 'Conhecer o programa',
                          }
                        : {}),
                    offer: {
                        ...current.hero.offer,
                        ...(name
                            ? { savings: `Acompanhe o trabalho de ${name} com um plano feito para a sua rotina.` }
                            : {}),
                    },
                    ...(picture ? { img: picture } : {}),
                    tags: [
                        username ? { text: `@${username}` } : current.hero.tags[0],
                        followers !== null
                            ? { text: `${followers.toLocaleString('pt-BR')} seguidores` }
                            : current.hero.tags[1],
                        posts !== null
                            ? { text: `${posts.toLocaleString('pt-BR')} publicações` }
                            : current.hero.tags[2],
                    ],
                },
                metrics: current.metrics.map((metric, index) => {
                    if (index === 0 && followers !== null) {
                        return {
                            ...metric,
                            number: followers.toLocaleString('pt-BR'),
                            text: 'pessoas acompanham este trabalho no Instagram.',
                        }
                    }
                    if (index === 1 && posts !== null) {
                        return {
                            ...metric,
                            number: posts.toLocaleString('pt-BR'),
                            text: 'publicações compartilhando conteúdo e rotina.',
                        }
                    }
                    return metric
                }),
                method: biography
                    ? {
                          ...current.method,
                          title: 'Um acompanhamento pensado para você.',
                          desc: 'Conheça seu momento, organize um plano possível e evolua com acompanhamento profissional.',
                          cards: [
                              {
                                  number: '01',
                                  title: 'Conte seus objetivos',
                                  text: 'Compartilhe sua rotina, seus objetivos e o que você deseja transformar.',
                              },
                              {
                                  number: '02',
                                  title: 'Receba seu plano',
                                  text: 'Seu treinamento é organizado de acordo com seu nível, sua rotina e suas necessidades.',
                              },
                              {
                                  number: '03',
                                  title: 'Evolua com acompanhamento',
                                  text: 'Acompanhe sua evolução e faça ajustes para continuar avançando com segurança.',
                              },
                          ],
                          button1text: 'Quero começar meu acompanhamento',
                          cardTitle: 'Acompanhamento personalizado',
                          cardText: `Um processo próximo para ajudar ${name || 'você'} a manter constância e evolução.`,
                      }
                    : current.method,
                services: biography
                    ? {
                          ...current.services,
                          title: 'Treinamentos personalizados para você',
                          desc: `Escolha a melhor opção de acompanhamento com ${name || 'sua personal'} para sua rotina e seus objetivos.`,
                          cards: [
                              {
                                  ...current.services.cards[0],
                                  desc: 'TREINO PERSONALIZADO',
                                  title: 'Acompanhamento completo',
                                  text: 'Planejamento de treino individualizado, com orientação e progressão de acordo com seus objetivos.',
                                  option: [
                                      'Plano personalizado',
                                      'Orientação profissional',
                                      'Ajustes durante o processo',
                                  ],
                              },
                              {
                                  ...current.services.cards[1],
                                  desc: 'CONSULTORIA ONLINE',
                                  title: 'Treino à distância',
                                  text: 'Uma opção prática para treinar onde estiver com suporte profissional e acompanhamento contínuo.',
                                  option: ['Prescrição de treino', 'Orientações de execução', 'Acompanhamento remoto'],
                                  featured: true,
                              },
                              {
                                  ...current.services.cards[2],
                                  desc: 'MÓDULO DE EVOLUÇÃO',
                                  title: 'Progressão e resultados',
                                  text: 'Estratégias para manter sua consistência, acompanhar resultados e evoluir com segurança.',
                                  option: [
                                      'Avaliação da evolução',
                                      'Ajustes no planejamento',
                                      'Suporte durante o processo',
                                  ],
                              },
                          ],
                      }
                    : current.services,
                about: {
                    ...current.about,
                    ...(name ? { title: `Conheça ${name}` } : {}),
                    ...(biography
                        ? {
                              description: biography,
                              paragraphs: [
                                  `O trabalho de ${name || 'este profissional'} é construído a partir dos seus objetivos, da sua rotina e do seu momento atual.`,
                                  'Cada orientação é pensada para tornar o treino mais possível, consistente e seguro.',
                              ],
                              cards: [
                                  {
                                      title: 'Plano individual',
                                      description: 'Treinos adaptados aos seus objetivos e ao seu nível atual.',
                                  },
                                  {
                                      title: 'Acompanhamento próximo',
                                      description: 'Orientação para melhorar a execução e manter a constância.',
                                  },
                                  {
                                      title: 'Evolução contínua',
                                      description: 'Ajustes no planejamento conforme seus resultados.',
                                  },
                              ],
                          }
                        : {}),
                    ...(picture ? { img: picture } : {}),
                },
                contact:
                    name || biography
                        ? {
                              ...current.contact,
                              eyebrow: 'PRÓXIMO PASSO',
                              title: `Comece seu acompanhamento com ${name || 'a gente'}.`,
                              description:
                                  'Conte quais são seus objetivos e descubra como um acompanhamento personalizado pode ajudar você a evoluir.',
                              primaryButtonText: 'Quero começar meu treinamento',
                              secondaryButtonText: 'Falar no WhatsApp',
                          }
                        : current.contact,
                whatsapp: name
                    ? {
                          ...current.whatsapp,
                          message: `Olá, ${name}! Conheci seu trabalho no Instagram e gostaria de saber mais sobre o acompanhamento.`,
                      }
                    : current.whatsapp,
            }))
        } catch (error) {
            console.error('Não foi possível aplicar os dados do Instagram no template 4:', error)
        }
    }, [site])

    const patch = <K extends keyof Data>(key: K, value: Data[K]) => setData((c) => ({ ...c, [key]: value }))

    function imageChange(e: React.ChangeEvent<HTMLInputElement>, kind: 'hero' | 'about') {
        const file = e.target.files?.[0]
        if (!file) return
        if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
            setError('Use uma imagem JPG, PNG ou WEBP de até 5 MB.')
            return
        }
        const url = URL.createObjectURL(file)
        if (kind === 'hero') {
            setHeroFile(file)
            setHeroId(null)
            patch('hero', { ...data.hero, img: url })
        } else {
            setAboutFile(file)
            setAboutId(null)
            patch('about', { ...data.about, img: url })
        }
    }

    function resultImageChange(e: React.ChangeEvent<HTMLInputElement>, index: number, side: 'before' | 'after') {
        const file = e.target.files?.[0]
        if (!file) return
        const key = `${index}-${side}`
        const cards = [...data.results.cards]
        cards[index] = {
            ...cards[index],
            [side === 'before' ? 'beforeImage' : 'afterImage']: URL.createObjectURL(file),
        }
        setResultFiles((c) => ({ ...c, [key]: file }))
        setResultIds((c) => ({ ...c, [key]: null }))
        patch('results', { cards })
    }

    async function upload(file: File, alt: string) {
        const fd = new FormData()
        fd.append('file', file, file.name)
        fd.append('alt', alt || 'Imagem do site')
        const res = await fetch('/api/upload-media', { method: 'POST', credentials: 'include', body: fd })
        const json = await res.json().catch(() => null)
        if (!res.ok || !json?.doc?.id) throw new Error(json?.message || 'Erro ao enviar imagem.')
        return String(json.doc.id)
    }

    async function uploadFromUrl(url: string, alt: string) {
        const fd = new FormData()
        fd.append('sourceUrl', url)
        fd.append('alt', alt || 'Imagem importada do Instagram')
        const res = await fetch('/api/upload-media', { method: 'POST', credentials: 'include', body: fd })
        const json = await res.json().catch(() => null)
        if (!res.ok || !json?.doc?.id) throw new Error(json?.message || 'Erro ao salvar a imagem importada.')
        return String(json.doc.id)
    }

    async function defaultImageFile() {
        const res = await fetch(TEMPLATE4_DEFAULT_IMAGE, { cache: 'no-store' })
        if (!res.ok) throw new Error('Não foi possível carregar a imagem padrão.')
        const blob = await res.blob()
        return new File([blob], `template-4-${Date.now()}.png`, { type: blob.type || 'image/png' })
    }

    async function publish() {
        if (publishing) return
        setError('')
        setSuccess('')

        const cleanSlug = slug
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
        if (!siteName.trim()) return setError('Digite o nome do site.')
        if (!cleanSlug) return setError('Digite um slug válido.')
        if (data.metrics.length !== 4) return setError('São necessárias exatamente 4 métricas.')
        if (data.method.cards.length !== 3) return setError('São necessários exatamente 3 cards no Como funciona.')
        if (data.results.cards.length > 2) return setError('Use no máximo 2 resultados.')
        if (data.services.cards.length > 3) return setError('Use no máximo 3 treinamentos.')

        setPublishing(true)
        try {
            const meRes = await fetch('/api/users/me', { credentials: 'include', cache: 'no-store' })
            const me = await meRes.json()
            if (!meRes.ok || !me?.user?.id) throw new Error('Você precisa estar logado.')
            const userId = String(me.user.id)

            const q = new URLSearchParams({ 'where[user][equals]': userId, limit: '1' })
            const ownedRes = await fetch(`/api/sites?${q}`, { credentials: 'include', cache: 'no-store' })
            const owned = await ownedRes.json()
            if (!ownedRes.ok) throw new Error('Não foi possível verificar seu site.')
            const existing = owned?.docs?.[0] || site || null

            const sq = new URLSearchParams({ 'where[slug][equals]': cleanSlug, limit: '1' })
            const slugRes = await fetch(`/api/sites?${sq}`, { credentials: 'include', cache: 'no-store' })
            const slugJson = await slugRes.json()
            const conflict = slugJson?.docs?.[0]
            if (conflict?.id && String(conflict.id) !== String(existing?.id || ''))
                throw new Error('Esse endereço já está em uso.')

            let hId = heroId
            if (heroFile) hId = await upload(heroFile, heroAlt)
            if (!hId && /^https:\/\//.test(data.hero.img)) hId = await uploadFromUrl(data.hero.img, heroAlt)
            if (!hId) hId = await upload(await defaultImageFile(), heroAlt)

            let aId = aboutId
            if (aboutFile) aId = await upload(aboutFile, aboutAlt)
            if (!aId && /^https:\/\//.test(data.about.img)) aId = await uploadFromUrl(data.about.img, aboutAlt)
            if (!aId) aId = hId

            const results = []
            for (let i = 0; i < data.results.cards.length; i++) {
                const r = data.results.cards[i]
                let before = resultIds[`${i}-before`]
                let after = resultIds[`${i}-after`]
                if (resultFiles[`${i}-before`]) before = await upload(resultFiles[`${i}-before`]!, `Antes ${r.name}`)
                if (resultFiles[`${i}-after`]) after = await upload(resultFiles[`${i}-after`]!, `Depois ${r.name}`)
                results.push({ ...r, beforeImage: before || undefined, afterImage: after || undefined })
            }

            const body = {
                name: siteName.trim(),
                slug: cleanSlug,
                template: 'template-4',
                published: true,
                user: userId,
                template4: {
                    hero: { ...data.hero, img: hId },
                    metrics: data.metrics,
                    method: data.method,
                    results: { cards: results },
                    services: {
                        ...data.services,
                        cards: data.services.cards.map((c) => ({
                            ...c,
                            option: c.option.filter(Boolean).map((text) => ({ text })),
                        })),
                    },
                    about: {
                        ...data.about,
                        img: aId,
                        paragraphs: data.about.paragraphs.filter(Boolean).map((text) => ({ text })),
                    },
                    contact: data.contact,
                    whatsapp: data.whatsapp,
                },
            }

            const res = await fetch(existing?.id ? `/api/sites/${existing.id}` : '/api/sites', {
                method: existing?.id ? 'PATCH' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(body),
            })
            const json = await res.json().catch(() => null)
            if (!res.ok) throw new Error(json?.errors?.[0]?.message || json?.message || 'Não foi possível publicar.')
            const savedSlug = json?.doc?.slug ?? cleanSlug
            setSuccess('Seu site foi publicado com sucesso!')
            window.setTimeout(() => {
                window.location.href = `/personal/${encodeURIComponent(savedSlug)}`
            }, 1000)
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Erro ao publicar.')
        } finally {
            setPublishing(false)
        }
    }

    const previewIndexForStep = React.useCallback((currentStep: number) => {
        const map: Record<number, number> = {
            0: 0, // Informações -> Hero
            1: 0, // Hero
            2: 1, // Métricas
            3: 2, // Como funciona
            4: 3, // Resultados
            5: 4, // Treinamentos
            6: 5, // Sobre
            7: 6, // Contato
            8: 6, // WhatsApp -> Contato
        }

        return map[currentStep] ?? 0
    }, [])

    React.useEffect(() => {
        const index = previewIndexForStep(step)
        const section = previewSectionRefs.current[index]
        const scroll = previewScrollRef.current

        if (!section || !scroll) return

        const timer = window.setTimeout(() => {
            if (step === 0 || step === 1) {
                scroll.scrollTo({ top: 0, behavior: 'smooth' })
                return
            }

            const scrollRect = scroll.getBoundingClientRect()
            const sectionRect = section.getBoundingClientRect()
            const targetTop = scroll.scrollTop + sectionRect.top - scrollRect.top

            scroll.scrollTo({
                top: Math.max(0, targetTop),
                behavior: 'smooth',
            })
        }, 80)

        return () => window.clearTimeout(timer)
    }, [step, previewIndexForStep])

    const wa = `https://wa.me/${data.whatsapp.phone.replace(/\D/g, '')}${data.whatsapp.message ? `?text=${encodeURIComponent(data.whatsapp.message)}` : ''}`

    const Preview = () => (
        <div className="min-h-full bg-color-ivory">
            <div
                ref={(el) => {
                    previewSectionRefs.current[0] = el
                }}>
                <HeroSection4
                    titlePrimary={data.hero.titlePrimary}
                    title={
                        <>
                            {data.hero.title}{' '}
                            <span className="font-medium italic text-color-dustyRose">{data.hero.titleHighlight}</span>{' '}
                            {data.hero.titleSecondary}
                        </>
                    }
                    desc={data.hero.desc}
                    button1text={data.hero.button1text}
                    button2text={data.hero.button2text}
                    offer={data.hero.offer}
                    img={data.hero.img || TEMPLATE4_DEFAULT_IMAGE}
                    tag={[
                        { icon: <FaUsers color="#4a192c" size={20} />, text: data.hero.tags[0]?.text || '' },
                        { icon: <CiTimer color="#4a192c" size={20} />, text: data.hero.tags[1]?.text || '' },
                        { icon: <FaStar color="#4a192c" size={20} />, text: data.hero.tags[2]?.text || '' },
                    ]}
                />
            </div>
            <div
                ref={(el) => {
                    previewSectionRefs.current[1] = el
                }}>
                <Metrics3 metrics={data.metrics} />
            </div>
            <div
                ref={(el) => {
                    previewSectionRefs.current[2] = el
                }}>
                <Card8
                    title={data.method.title}
                    desc={data.method.desc}
                    cards={data.method.cards.map((c) => ({ ...c, iconBgColor: '#F5E7EA' }))}
                    button1text={data.method.button1text}
                    button1url={data.method.button1url}
                    cardText={data.method.cardText}
                    cardTitle={data.method.cardTitle}
                />
            </div>
            <div
                ref={(el) => {
                    previewSectionRefs.current[3] = el
                }}>
                {data.results.cards.length > 0 && <Results4 results={data.results.cards} />}
            </div>
            <div
                ref={(el) => {
                    previewSectionRefs.current[4] = el
                }}>
                <Cards9 title={data.services.title} desc={data.services.desc} cards={data.services.cards} />
            </div>
            <div
                ref={(el) => {
                    previewSectionRefs.current[5] = el
                }}>
                <AboutUs4
                    title={data.about.title}
                    description={data.about.description}
                    imgTitle={data.about.imgTitle}
                    imgDesc={data.about.imgDesc}
                    img={data.about.img || TEMPLATE4_DEFAULT_IMAGE}
                    paragraphs={data.about.paragraphs}
                    cards={data.about.cards}
                />
            </div>
            <div
                ref={(el) => {
                    previewSectionRefs.current[6] = el
                }}>
                <Contact4
                    eyebrow={data.contact.eyebrow}
                    title={data.contact.title}
                    description={data.contact.description}
                    primaryButtonText={data.contact.primaryButtonText}
                    primaryButtonHref={data.contact.primaryButtonHref}
                    secondaryButtonText={data.contact.secondaryButtonText}
                    secondaryButtonHref={wa}
                />
            </div>
            {data.whatsapp.enabled && data.whatsapp.phone && <WhatsAppFloat phone={data.whatsapp.phone} />}
        </div>
    )

    const setMetric = (i: number, key: 'number' | 'title' | 'text', value: string) => {
        const arr = [...data.metrics]
        arr[i] = { ...arr[i], [key]: value }
        patch('metrics', arr)
    }
    const setMethod = (i: number, key: 'number' | 'title' | 'text', value: string) => {
        const arr = [...data.method.cards]
        arr[i] = { ...arr[i], [key]: value }
        patch('method', { ...data.method, cards: arr })
    }
    const setResult = (i: number, key: keyof ResultCard, value: string) => {
        const arr = [...data.results.cards]
        arr[i] = { ...arr[i], [key]: value }
        patch('results', { cards: arr })
    }
    const setService = (i: number, key: keyof ServiceCard, value: any) => {
        const arr = [...data.services.cards]
        arr[i] = { ...arr[i], [key]: value }
        patch('services', { ...data.services, cards: arr })
    }

    return (
        <section className="min-h-screen bg-color-woodsmoke py-8 pb-28 md:pb-8">
            <div className="container mx-auto px-4">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase text-color-malachite">Vamos começar?</p>
                        <h1 className="mt-2 text-3xl font-semibold text-white">Configure seu site</h1>
                        <p className="mt-2 text-sm text-color-clay">
                            Personalize seu {templateName} e veja o resultado em tempo real.
                        </p>
                    </div>
                    {!site && (
                        <Button asChild className="bg-color-malachite font-semibold text-black">
                            <Link href="/dashboard">Voltar para templates</Link>
                        </Button>
                    )}
                </div>

                <div className="mb-8 rounded-2xl border border-white/10 bg-color-codgray p-5 sm:p-6">
                    <div className="mb-4 flex justify-between">
                        <div>
                            <p className="text-sm text-color-clay">
                                Etapa {step + 1} de {steps.length}
                            </p>
                            <p className="font-semibold text-white">{steps[step]}</p>
                        </div>
                        <span className="text-sm text-color-malachite">
                            {Math.round(((step + 1) / steps.length) * 100)}%
                        </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-color-woodsmoke">
                        <div
                            className="h-full bg-color-malachite"
                            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                        />
                    </div>
                    <div className="mt-4 hidden gap-2 overflow-x-auto lg:flex">
                        {steps.map((s, i) => (
                            <button
                                key={s}
                                type="button"
                                onClick={() => setStep(i)}
                                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs ${i === step ? 'bg-color-malachite text-black' : 'text-color-clay'}`}>
                                {i + 1}. {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[500px_1fr]">
                    <div className="rounded-2xl border border-white/10 bg-color-codgray p-5 sm:p-6">
                        {step === 0 && (
                            <Step title="Informações" desc="Informações básicas do site.">
                                <Field label="Nome do site" value={siteName} onChange={setSiteName} />
                                <Field label="Slug" value={slug} onChange={setSlug} />
                                <Info>/personal/{slug || 'seu-endereco'}</Info>
                            </Step>
                        )}

                        {step === 1 && (
                            <Step title="Hero" desc="Configure o HeroSection4.">
                                <Field
                                    label="Texto superior"
                                    value={data.hero.titlePrimary}
                                    onChange={(v) => patch('hero', { ...data.hero, titlePrimary: v })}
                                />
                                <Field
                                    label="Título"
                                    value={data.hero.title}
                                    textarea
                                    onChange={(v) => patch('hero', { ...data.hero, title: v })}
                                />
                                <Field
                                    label="Destaque"
                                    value={data.hero.titleHighlight}
                                    onChange={(v) => patch('hero', { ...data.hero, titleHighlight: v })}
                                />
                                <Field
                                    label="Final do título"
                                    value={data.hero.titleSecondary}
                                    onChange={(v) => patch('hero', { ...data.hero, titleSecondary: v })}
                                />
                                <Field
                                    label="Descrição"
                                    value={data.hero.desc}
                                    textarea
                                    onChange={(v) => patch('hero', { ...data.hero, desc: v })}
                                />
                                <Field
                                    label="Botão principal"
                                    value={data.hero.button1text}
                                    onChange={(v) => patch('hero', { ...data.hero, button1text: v })}
                                />
                                <Field
                                    label="Link principal"
                                    value={data.hero.button1url}
                                    onChange={(v) => patch('hero', { ...data.hero, button1url: v })}
                                />
                                <Field
                                    label="Botão secundário"
                                    value={data.hero.button2text}
                                    onChange={(v) => patch('hero', { ...data.hero, button2text: v })}
                                />
                                <Field
                                    label="Link secundário"
                                    value={data.hero.button2url}
                                    onChange={(v) => patch('hero', { ...data.hero, button2url: v })}
                                />
                                <Title>Oferta</Title>
                                {(['label', 'originalPrice', 'price', 'suffix', 'savings'] as const).map((k) => (
                                    <Field
                                        key={k}
                                        label={k}
                                        value={data.hero.offer[k]}
                                        textarea={k === 'savings'}
                                        onChange={(v) =>
                                            patch('hero', { ...data.hero, offer: { ...data.hero.offer, [k]: v } })
                                        }
                                    />
                                ))}
                                <Title>Destaques</Title>
                                {data.hero.tags.map((t, i) => (
                                    <Field
                                        key={i}
                                        label={`Destaque ${i + 1}`}
                                        value={t.text}
                                        onChange={(v) => {
                                            const tags = [...data.hero.tags]
                                            tags[i] = { text: v }
                                            patch('hero', { ...data.hero, tags })
                                        }}
                                    />
                                ))}
                                <ImageField
                                    label="Imagem do Hero"
                                    preview={data.hero.img}
                                    alt={heroAlt}
                                    onAlt={setHeroAlt}
                                    onChange={(e) => imageChange(e, 'hero')}
                                />
                            </Step>
                        )}

                        {step === 2 && (
                            <Step title="Métricas" desc="Exatamente 4 métricas.">
                                {data.metrics.map((m, i) => (
                                    <Box key={i} title={`Métrica ${i + 1}`}>
                                        <Field
                                            label="Número"
                                            value={m.number}
                                            onChange={(v) => setMetric(i, 'number', v)}
                                        />
                                        <Field
                                            label="Título"
                                            value={m.title}
                                            onChange={(v) => setMetric(i, 'title', v)}
                                        />
                                        <Field label="Texto" value={m.text} onChange={(v) => setMetric(i, 'text', v)} />
                                    </Box>
                                ))}
                            </Step>
                        )}

                        {step === 3 && (
                            <Step title="Como funciona" desc="Card8 com exatamente 3 cards.">
                                <Field
                                    label="Título"
                                    value={data.method.title}
                                    onChange={(v) => patch('method', { ...data.method, title: v })}
                                />
                                <Field
                                    label="Descrição"
                                    value={data.method.desc}
                                    textarea
                                    onChange={(v) => patch('method', { ...data.method, desc: v })}
                                />
                                {data.method.cards.map((c, i) => (
                                    <Box key={i} title={`Etapa ${i + 1}`}>
                                        <Field
                                            label="Número"
                                            value={c.number}
                                            onChange={(v) => setMethod(i, 'number', v)}
                                        />
                                        <Field
                                            label="Título"
                                            value={c.title}
                                            onChange={(v) => setMethod(i, 'title', v)}
                                        />
                                        <Field
                                            label="Texto"
                                            value={c.text}
                                            textarea
                                            onChange={(v) => setMethod(i, 'text', v)}
                                        />
                                    </Box>
                                ))}
                                <Field
                                    label="Texto do botão"
                                    value={data.method.button1text}
                                    onChange={(v) => patch('method', { ...data.method, button1text: v })}
                                />
                                <Field
                                    label="Link do botão"
                                    value={data.method.button1url}
                                    onChange={(v) => patch('method', { ...data.method, button1url: v })}
                                />
                                <Field
                                    label="Título do destaque"
                                    value={data.method.cardTitle}
                                    onChange={(v) => patch('method', { ...data.method, cardTitle: v })}
                                />
                                <Field
                                    label="Texto do destaque"
                                    value={data.method.cardText}
                                    textarea
                                    onChange={(v) => patch('method', { ...data.method, cardText: v })}
                                />
                            </Step>
                        )}

                        {step === 4 && (
                            <Step title="Resultados" desc="Opcional. Adicione no máximo 2 resultados.">
                                {data.results.cards.length < 2 && (
                                    <Small
                                        onClick={() =>
                                            patch('results', {
                                                cards: [
                                                    ...data.results.cards,
                                                    {
                                                        beforeLabel: 'Antes',
                                                        beforeTitle: '',
                                                        beforeText: '',
                                                        beforeImage: '/images/results4-before.png',
                                                        afterLabel: 'Depois',
                                                        afterTitle: '',
                                                        afterText: '',
                                                        afterImage: '/images/results4-after.png',
                                                        name: '',
                                                        quote: '',
                                                        objective: '',
                                                        plan: '',
                                                    },
                                                ],
                                            })
                                        }>
                                        + Adicionar resultado
                                    </Small>
                                )}
                                {data.results.cards.map((r, i) => (
                                    <Box key={i} title={`Resultado ${i + 1}`}>
                                        <Danger
                                            onClick={() =>
                                                patch('results', {
                                                    cards: data.results.cards.filter((_, x) => x !== i),
                                                })
                                            }>
                                            Remover resultado
                                        </Danger>
                                        <Field
                                            label="Antes — identificação"
                                            value={r.beforeLabel}
                                            onChange={(v) => setResult(i, 'beforeLabel', v)}
                                        />
                                        <Field
                                            label="Antes — título"
                                            value={r.beforeTitle}
                                            onChange={(v) => setResult(i, 'beforeTitle', v)}
                                        />
                                        <Field
                                            label="Antes — texto"
                                            value={r.beforeText}
                                            onChange={(v) => setResult(i, 'beforeText', v)}
                                        />
                                        <SimpleImage
                                            label="Foto antes"
                                            preview={r.beforeImage}
                                            onChange={(e) => resultImageChange(e, i, 'before')}
                                        />
                                        <Field
                                            label="Depois — identificação"
                                            value={r.afterLabel}
                                            onChange={(v) => setResult(i, 'afterLabel', v)}
                                        />
                                        <Field
                                            label="Depois — título"
                                            value={r.afterTitle}
                                            onChange={(v) => setResult(i, 'afterTitle', v)}
                                        />
                                        <Field
                                            label="Depois — texto"
                                            value={r.afterText}
                                            onChange={(v) => setResult(i, 'afterText', v)}
                                        />
                                        <SimpleImage
                                            label="Foto depois"
                                            preview={r.afterImage}
                                            onChange={(e) => resultImageChange(e, i, 'after')}
                                        />
                                        <Field label="Nome" value={r.name} onChange={(v) => setResult(i, 'name', v)} />
                                        <Field
                                            label="Depoimento"
                                            value={r.quote}
                                            textarea
                                            onChange={(v) => setResult(i, 'quote', v)}
                                        />
                                        <Field
                                            label="Objetivo"
                                            value={r.objective}
                                            onChange={(v) => setResult(i, 'objective', v)}
                                        />
                                        <Field label="Plano" value={r.plan} onChange={(v) => setResult(i, 'plan', v)} />
                                    </Box>
                                ))}
                            </Step>
                        )}

                        {step === 5 && (
                            <Step
                                title="Treinamentos"
                                desc="Cadastre até 3 opções de treinamento, informando nome, descrição, preço e benefícios.">
                                <Field
                                    label="Título"
                                    value={data.services.title}
                                    onChange={(v) => patch('services', { ...data.services, title: v })}
                                />
                                <Field
                                    label="Descrição"
                                    value={data.services.desc}
                                    textarea
                                    onChange={(v) => patch('services', { ...data.services, desc: v })}
                                />
                                {data.services.cards.length < 3 && (
                                    <Small
                                        onClick={() =>
                                            patch('services', {
                                                ...data.services,
                                                cards: [
                                                    ...data.services.cards,
                                                    {
                                                        desc: '',
                                                        title: '',
                                                        text: '',
                                                        price: '',
                                                        option: [],
                                                        link: '',
                                                        iconBgColor: '#F5E7EA',
                                                        featured: false,
                                                    },
                                                ],
                                            })
                                        }>
                                        + Adicionar card
                                    </Small>
                                )}
                                {data.services.cards.map((c, i) => (
                                    <Box key={i} title={`Card ${i + 1}`}>
                                        <Danger
                                            onClick={() =>
                                                patch('services', {
                                                    ...data.services,
                                                    cards: data.services.cards.filter((_, x) => x !== i),
                                                })
                                            }>
                                            Remover card
                                        </Danger>
                                        <Field
                                            label="Categoria"
                                            value={c.desc}
                                            onChange={(v) => setService(i, 'desc', v)}
                                        />
                                        <Field
                                            label="Título"
                                            value={c.title}
                                            onChange={(v) => setService(i, 'title', v)}
                                        />
                                        <Field
                                            label="Descrição"
                                            value={c.text}
                                            textarea
                                            onChange={(v) => setService(i, 'text', v)}
                                        />
                                        <Field
                                            label="Preço"
                                            value={c.price}
                                            onChange={(v) => setService(i, 'price', v)}
                                        />
                                        <Field label="Link" value={c.link} onChange={(v) => setService(i, 'link', v)} />
                                        <label className="flex gap-2 text-sm text-white">
                                            <input
                                                type="checkbox"
                                                checked={c.featured}
                                                onChange={(e) => setService(i, 'featured', e.target.checked)}
                                            />{' '}
                                            Destacar card
                                        </label>
                                        <Title>Benefícios</Title>
                                        {c.option.map((o, oi) => (
                                            <Field
                                                key={oi}
                                                label={`Benefício ${oi + 1}`}
                                                value={o}
                                                onChange={(v) => {
                                                    const a = [...c.option]
                                                    a[oi] = v
                                                    setService(i, 'option', a)
                                                }}
                                            />
                                        ))}
                                        {c.option.length < 4 && (
                                            <Small onClick={() => setService(i, 'option', [...c.option, ''])}>
                                                + Benefício
                                            </Small>
                                        )}
                                    </Box>
                                ))}
                            </Step>
                        )}

                        {step === 6 && (
                            <Step title="Sobre" desc="Configure o AboutUs4.">
                                <Field
                                    label="Título"
                                    value={data.about.title}
                                    onChange={(v) => patch('about', { ...data.about, title: v })}
                                />
                                <Field
                                    label="Descrição"
                                    value={data.about.description}
                                    textarea
                                    onChange={(v) => patch('about', { ...data.about, description: v })}
                                />
                                <Field
                                    label="Título do registro"
                                    value={data.about.imgTitle}
                                    onChange={(v) => patch('about', { ...data.about, imgTitle: v })}
                                />
                                <Field
                                    label="Registro profissional"
                                    value={data.about.imgDesc}
                                    onChange={(v) => patch('about', { ...data.about, imgDesc: v })}
                                />
                                <ImageField
                                    label="Foto"
                                    preview={data.about.img}
                                    alt={aboutAlt}
                                    onAlt={setAboutAlt}
                                    onChange={(e) => imageChange(e, 'about')}
                                />
                                {data.about.paragraphs.map((p, i) => (
                                    <Field
                                        key={i}
                                        label={`Parágrafo ${i + 1}`}
                                        value={p}
                                        textarea
                                        onChange={(v) => {
                                            const a = [...data.about.paragraphs]
                                            a[i] = v
                                            patch('about', { ...data.about, paragraphs: a })
                                        }}
                                    />
                                ))}
                                {data.about.cards.map((c, i) => (
                                    <Box key={i} title={`Formação ${i + 1}`}>
                                        <Field
                                            label="Título"
                                            value={c.title}
                                            onChange={(v) => {
                                                const a = [...data.about.cards]
                                                a[i] = { ...c, title: v }
                                                patch('about', { ...data.about, cards: a })
                                            }}
                                        />
                                        <Field
                                            label="Descrição"
                                            value={c.description}
                                            textarea
                                            onChange={(v) => {
                                                const a = [...data.about.cards]
                                                a[i] = { ...c, description: v }
                                                patch('about', { ...data.about, cards: a })
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Step>
                        )}

                        {step === 7 && (
                            <Step title="Contato" desc="Configure o Contact4.">
                                {(
                                    [
                                        'eyebrow',
                                        'title',
                                        'description',
                                        'primaryButtonText',
                                        'primaryButtonHref',
                                        'secondaryButtonText',
                                    ] as const
                                ).map((k) => (
                                    <Field
                                        key={k}
                                        label={k}
                                        value={data.contact[k]}
                                        textarea={k === 'description'}
                                        onChange={(v) => patch('contact', { ...data.contact, [k]: v })}
                                    />
                                ))}
                            </Step>
                        )}

                        {step === 8 && (
                            <Step title="WhatsApp" desc="Configure seu atendimento.">
                                <label className="flex gap-2 text-sm text-white">
                                    <input
                                        type="checkbox"
                                        checked={data.whatsapp.enabled}
                                        onChange={(e) =>
                                            patch('whatsapp', { ...data.whatsapp, enabled: e.target.checked })
                                        }
                                    />{' '}
                                    Mostrar WhatsApp
                                </label>
                                <Field
                                    label="Telefone"
                                    value={data.whatsapp.phone}
                                    onChange={(v) => patch('whatsapp', { ...data.whatsapp, phone: v })}
                                />
                                <Field
                                    label="Mensagem"
                                    value={data.whatsapp.message}
                                    textarea
                                    onChange={(v) => patch('whatsapp', { ...data.whatsapp, message: v })}
                                />
                            </Step>
                        )}

                        {error && <p className="mt-5 rounded-lg bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
                        {success && (
                            <p className="mt-5 rounded-lg bg-green-500/10 p-3 text-sm text-green-300">{success}</p>
                        )}
                        <div className="mt-8 flex gap-3">
                            {step > 0 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setStep((s) => s - 1)}
                                    className="flex-1">
                                    Anterior
                                </Button>
                            )}
                            {step < steps.length - 1 ? (
                                <Button
                                    type="button"
                                    onClick={() => setStep((s) => s + 1)}
                                    className="flex-1 bg-color-malachite font-semibold text-black">
                                    Próximo
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    disabled={publishing}
                                    onClick={publish}
                                    className="flex-1 bg-color-malachite font-semibold text-black">
                                    {publishing ? 'Publicando...' : 'Publicar site'}
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="hidden xl:block">
                        <div
                            ref={previewScrollRef}
                            className="sticky top-4 h-[82vh] overflow-y-auto rounded-2xl border border-white/10 bg-black">
                            <Preview />
                        </div>
                    </div>
                </div>

                <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-color-codgray p-3 md:hidden">
                    <Button
                        type="button"
                        onClick={() => setMobilePreview(true)}
                        className="w-full bg-color-malachite font-semibold text-black">
                        Ver prévia do site
                    </Button>
                </div>
            </div>

            {mobilePreview && (
                <div className="fixed inset-0 z-50 flex flex-col bg-black md:hidden">
                    <div className="flex-1 overflow-y-auto">
                        <Preview />
                    </div>
                    <div className="bg-color-codgray p-3">
                        <Button
                            type="button"
                            onClick={() => setMobilePreview(false)}
                            className="w-full bg-color-malachite font-semibold text-black">
                            Voltar para edição
                        </Button>
                    </div>
                </div>
            )}
        </section>
    )
}

function Step({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mb-7 mt-1 text-sm text-color-clay">{desc}</p>
            <div className="flex flex-col gap-5">{children}</div>
        </div>
    )
}
function Field({
    label,
    value,
    onChange,
    textarea = false,
}: {
    label: string
    value: string
    onChange: (v: string) => void
    textarea?: boolean
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">{label}</label>
            {textarea ? (
                <textarea
                    rows={4}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="rounded-lg border border-white/10 bg-color-woodsmoke px-4 py-3 text-sm text-white outline-none"
                />
            ) : (
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="h-11 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white outline-none"
                />
            )}
        </div>
    )
}
function Box({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
            <p className="mb-4 text-sm font-semibold text-color-malachite">{title}</p>
            <div className="flex flex-col gap-4">{children}</div>
        </div>
    )
}
function Title({ children }: { children: React.ReactNode }) {
    return <p className="border-b border-white/10 pb-2 text-sm font-semibold text-color-malachite">{children}</p>
}
function Small({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-lg bg-color-malachite px-3 py-2 text-xs font-semibold text-black">
            {children}
        </button>
    )
}
function Danger({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-400">
            {children}
        </button>
    )
}
function Info({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-white/10 bg-color-woodsmoke p-4 text-sm text-color-clay">
            {children}
        </div>
    )
}
function ImageField({
    label,
    preview,
    alt,
    onAlt,
    onChange,
}: {
    label: string
    preview: string
    alt: string
    onAlt: (v: string) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
            <p className="mb-3 text-sm font-medium text-white">{label}</p>
            {preview && <img src={preview} alt={alt || label} className="mb-3 h-48 w-full rounded-xl object-cover" />}
            <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={onChange}
                className="mb-4 block w-full text-xs text-color-clay"
            />
            <Field label="Texto alternativo" value={alt} onChange={onAlt} />
        </div>
    )
}
function SimpleImage({
    label,
    preview,
    onChange,
}: {
    label: string
    preview: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <div>
            <p className="mb-2 text-sm font-medium text-white">{label}</p>
            {preview && <img src={preview} alt={label} className="mb-2 h-40 w-full rounded-lg object-cover" />}
            <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={onChange}
                className="block w-full text-xs text-color-clay"
            />
        </div>
    )
}
