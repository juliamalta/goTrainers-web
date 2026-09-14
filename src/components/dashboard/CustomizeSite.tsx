'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { HeroSection1 } from '@/components/sections/hero-section'
import Metrics1 from '@/components/sections/Metrics/Metrics1'
import Cards5 from '@/components/sections/Cards/Card5'
import { Features2 } from '@/components/sections/Features/Features2'
import Cards2 from '@/components/sections/Cards/Card2'
import Contact from '@/components/sections/Contact/Contact'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

interface CustomizeSiteProps {
    templateName: string
    templateImage: string
    userName: string
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

export default function CustomizeSite({ templateName, templateImage, userName }: CustomizeSiteProps) {
    const [step, setStep] = React.useState(0)
    const [publishing, setPublishing] = React.useState(false)
    const [publishMessage, setPublishMessage] = React.useState('')
    const [publishError, setPublishError] = React.useState('')

    const previewScrollRef = React.useRef<HTMLDivElement | null>(null)
    const previewSectionRefs = React.useRef<Array<HTMLDivElement | null>>([])
    const [previewScale, setPreviewScale] = React.useState(1)

    const [siteName, setSiteName] = React.useState(userName || '')
    const [slug, setSlug] = React.useState('')

    const [heroImageFile, setHeroImageFile] = React.useState<File | null>(null)
    const [aboutImageFile, setAboutImageFile] = React.useState<File | null>(null)

    const [heroImagePreview, setHeroImagePreview] = React.useState(templateImage)
    const [aboutImagePreview, setAboutImagePreview] = React.useState(templateImage)

    const [heroImageAlt, setHeroImageAlt] = React.useState('Imagem principal do site')
    const [aboutImageAlt, setAboutImageAlt] = React.useState('Foto sobre o profissional')

    const [data, setData] = React.useState<Template1Data>({
        hero: {
            titlePrimary: '',
            title: '',
            titleHighlight: '',
            desc: '',
            button1text: '',
            button1url: '#contato',
            img: templateImage,
        },

        metrics: [
            {
                number: '',
                text: '',
            },
            {
                number: '',
                text: '',
            },
            {
                number: '',
                text: '',
            },
            {
                number: '',
                text: '',
            },
        ],

        services: {
            title: '',
            desc: '',

            cards: [
                {
                    title: '',
                    desc: '',
                    text: '',
                    featured: false,
                },
                {
                    title: '',
                    desc: '',
                    text: '',
                    featured: false,
                },
                {
                    title: '',
                    desc: '',
                    text: '',
                    featured: false,
                },
            ],
        },

        about: {
            img: templateImage,
            title: '',
            desc: '',

            features: [{ title: '' }, { title: '' }, { title: '' }, { title: '' }],
        },

        testimonials: {
            title: '',
            desc: '',

            cards: [
                {
                    name: '',
                    text: '',
                },
                {
                    name: '',
                    text: '',
                },
                {
                    name: '',
                    text: '',
                },
                {
                    name: '',
                    text: '',
                },
            ],
        },

        contact: {
            title: '',
            titleHighlight: '',
            text: '',
            buttontext: '',
            buttonurl: '',
        },

        whatsapp: {
            enabled: true,
            phone: '',
            message: '',
        },
    })

    // ============================================================
    // PREVIEW — TAMANHO E FOCO
    // ============================================================

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
        value: string | boolean
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
            setHeroImageFile(file)

            setHeroImagePreview((current) => {
                if (current.startsWith('blob:')) {
                    URL.revokeObjectURL(current)
                }

                return previewUrl
            })
        } else {
            setAboutImageFile(file)

            setAboutImagePreview((current) => {
                if (current.startsWith('blob:')) {
                    URL.revokeObjectURL(current)
                }

                return previewUrl
            })
        }
    }

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

            const heroFile = heroImageFile || (await createTemplateImageFile())

            const aboutFile = aboutImageFile || heroFile

            const heroMediaId = await uploadMedia(heroFile, heroImageAlt)

            const aboutMediaId =
                aboutImageFile || heroImageFile ? await uploadMedia(aboutFile, aboutImageAlt) : heroMediaId

            const searchParams = new URLSearchParams()

            searchParams.set('where[slug][equals]', cleanSlug)

            searchParams.set('limit', '1')

            const existingResponse = await fetch(`/api/sites?${searchParams.toString()}`, {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store',
            })

            if (!existingResponse.ok) {
                throw new Error('Não foi possível verificar o site.')
            }

            const existingResult = await existingResponse.json()

            const existingSite = existingResult?.docs?.[0] || null

            if (existingSite?.user?.id && existingSite.user.id !== user.id) {
                throw new Error('Esse endereço já está sendo usado por outro usuário.')
            }

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

            let response: Response

            if (existingSite?.id) {
                response = await fetch(`/api/sites/${existingSite.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(payloadData),
                })
            } else {
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

            setSlug(cleanSlug)

            setPublishMessage('Seu site foi publicado com sucesso!')

            window.setTimeout(() => {
                window.location.href = `/template1/${cleanSlug}`
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
        desc: card.desc || 'Descrição do serviço',
        text: card.text || 'Descreva aqui o seu serviço.',
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
        <section className="min-h-screen bg-color-woodsmoke py-8">
            <div className="container mx-auto px-4">
                {/* ========================================================
                    CABEÇALHO
                ======================================================== */}

                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase text-color-malachite">Vamos começar?</p>

                    <h1 className="mt-2 text-3xl font-semibold text-white">Configure seu site</h1>

                    <p className="mt-2 text-sm text-color-clay">
                        Personalize seu {templateName} e veja o resultado em tempo real.
                    </p>
                </div>

                {/* ========================================================
                    PROGRESSO
                ======================================================== */}

                <div className="mb-8 rounded-2xl border border-white/10 bg-color-codgray p-5">
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

                    <div className="rounded-2xl border border-white/10 bg-color-codgray p-6">
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
                                        /template1/
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
                            BOTÕES DE NAVEGAÇÃO
                        ================================================== */}

                        {publishMessage && (
                            <div className="border-color-malachite/20 bg-color-malachite/10 mb-4 rounded-xl border p-4 text-sm font-medium text-color-malachite">
                                {publishMessage}
                            </div>
                        )}

                        {publishError && (
                            <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm font-medium text-red-400">
                                {publishError}
                            </div>
                        )}

                        <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
                            {step > 0 && (
                                <Button type="button" variant="outline" onClick={previousStep} className="h-12 flex-1">
                                    ← Voltar
                                </Button>
                            )}

                            {step < steps.length - 1 ? (
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="h-12 flex-1 bg-color-malachite text-black hover:text-white">
                                    Continuar →
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    onClick={handleFinish}
                                    disabled={publishing}
                                    className="h-12 flex-1 bg-color-malachite text-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60">
                                    {publishing ? 'Publicando...' : 'Publicar meu site'}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* ====================================================
                        PREVIEW
                    ==================================================== */}

                    <div className="hidden min-w-0 md:block">
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
                                                ? 'outline-color-malachite/60 outline outline-2 outline-offset-[-2px]'
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
                                                ? 'outline-color-malachite/60 outline outline-2 outline-offset-[-2px]'
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
                                                ? 'outline-color-malachite/60 outline outline-2 outline-offset-[-2px]'
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
                                                ? 'outline-color-malachite/60 outline outline-2 outline-offset-[-2px]'
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
                                                ? 'outline-color-malachite/60 outline outline-2 outline-offset-[-2px]'
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
                                                ? 'outline-color-malachite/60 outline outline-2 outline-offset-[-2px]'
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
                                                ? 'outline-color-malachite/60 outline outline-2 outline-offset-[-2px]'
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
                    className="resize-none rounded-lg border border-white/10 bg-color-woodsmoke px-4 py-3 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-color-malachite"
                />
            ) : (
                <input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={(event) => onChange(event.target.value)}
                    className="h-12 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-color-malachite"
                />
            )}
        </div>
    )
}
