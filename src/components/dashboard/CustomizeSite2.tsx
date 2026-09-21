'use client'

import * as React from 'react'
import Link from 'next/link'
import { CiTimer } from 'react-icons/ci'
import { FaStar, FaUsers } from 'react-icons/fa6'

import Cards6 from '@/components/sections/Cards/Card6'
import { Contact1 } from '@/components/sections/Contact/Contact1'
import { Features3 } from '@/components/sections/Features/Features3'
import { HeroSection2 } from '@/components/sections/hero-section/hero-section2'
import Metrics2 from '@/components/sections/Metrics/Metrics2'
import Testimonials1 from '@/components/sections/testimonials/testimonials1'
import { Button } from '@/components/ui/button'

type Media =
    | string
    | {
          id?: string
          url?: string | null
          thumbnailURL?: string | null
          alt?: string | null
      }
    | null

type Site = {
    id: string
    name?: string | null
    slug?: string | null
    template2?: {
        hero?: {
            titlePrimary?: string | null
            title?: string | null
            titleHighlight?: string | null
            desc?: string | null
            button1text?: string | null
            button2text?: string | null
            img?: Media
            tags?: Array<{ text?: string | null }> | null
            cardTitle?: string | null
            cardText?: string | null
        } | null
        metrics?: Array<{
            number?: string | null
            text?: string | null
        }> | null
        services?: {
            title?: string | null
            desc?: string | null
            cards?: Array<{
                desc?: string | null
                title?: string | null
                text?: string | null
                price?: string | null
                option?: Array<{ text?: string | null }> | null
                link?: string | null
                featured?: boolean | null
            }> | null
        } | null
        about?: {
            img?: Media
            title?: string | null
            desc?: string | null
            features?: Array<{
                number?: string | null
                title?: string | null
                desc?: string | null
            }> | null
        } | null
        testimonials?: {
            enabled?: boolean | null
            title?: string | null
            cards?: Array<{
                name?: string | null
                desc?: string | null
                type?: string | null
            }> | null
        } | null
        contact?: {
            title?: string | null
            desc?: string | null
            buttontext?: string | null
            link?: string | null
        } | null
        whatsapp?: {
            enabled?: boolean | null
            phone?: string | null
            message?: string | null
        } | null
    } | null
}

interface CustomizeSite2Props {
    templateName: string
    templateImage: string
    userName: string
    site?: Site | null
}

type Data = {
    hero: {
        titlePrimary: string
        title: string
        titleHighlight: string
        desc: string
        button1text: string
        button2text: string
        tags: string[]
        cardTitle: string
        cardText: string
    }
    metrics: Array<{
        number: string
        text: string
    }>
    services: {
        title: string
        desc: string
        cards: Array<{
            desc: string
            title: string
            text: string
            price: string
            option: string[]
            link: string
            featured: boolean
        }>
    }
    about: {
        title: string
        desc: string
        features: Array<{
            number: string
            title: string
            desc: string
        }>
    }
    testimonials: {
        enabled: boolean
        title: string
        cards: Array<{
            name: string
            desc: string
            type: string
        }>
    }
    contact: {
        title: string
        desc: string
        buttontext: string
        link: string
    }
    whatsapp: {
        enabled: boolean
        phone: string
        message: string
    }
}

const defaults: Data = {
    hero: {
        titlePrimary: 'PERSONAL TRAINING EXCLUSIVO',
        title: 'Transformação Física Performance para',
        titleHighlight: 'Líderes de Alto Padrão.',
        desc: 'Metodologia científica individualizada, privacidade absoluta e acompanhamento sob medida para quem valoriza tempo, estética e saúde no mais alto nível.',
        button1text: 'COMECE SUA TRANSFORMAÇÃO',
        button2text: 'CONHEÇA O MÉTODO',
        tags: ['Vagas exclusivas', 'Apenas 8 clientes ativos', 'Acompanhamento individual'],
        cardTitle: 'VAGAS EXCLUSIVAS',
        cardText: 'Apenas 8 Clientes Ativos',
    },

    metrics: [
        {
            number: '+8 anos',
            text: 'de experiência prática em alta performance e biomecânica avançada.',
        },
        {
            number: '+300',
            text: 'alunos e executivos C-level transformados com longevidade.',
        },
        {
            number: '95%',
            text: 'de retenção e consistência ininterrupta a longo prazo.',
        },
        {
            number: '1:1',
            text: 'atendimento 100% individualizado, privativo e sem dispersão.',
        },
    ],

    services: {
        title: 'Treinamento pensado para você.',
        desc: 'Cada acompanhamento é minuciosamente calibrado para a sua rotina, objetivos biomecânicos e ritmo de vida executivo.',
        cards: [
            {
                desc: 'MÓDULO PRESENCIAL',
                title: 'Performance Privativa',
                text: 'Sessões 100% presenciais em estúdio privativo selecionado ou no conforto do seu condomínio com privacidade irrepreensível.',
                price: 'R$ 1.490/mês',
                option: [
                    'Avaliação postural tridimensional completa',
                    'Periodização sob medida com foco estético e postural',
                    'Suporte contínuo para recuperação e sono',
                ],
                link: '',
                featured: false,
            },
            {
                desc: 'CONCIERGE TOTAL',
                title: 'Concierge Executivo Full',
                text: 'Atendimento híbrido de máxima conveniência. Gestão atlética completa para quem viaja frequentemente e busca precisão cirúrgica.',
                price: 'R$ 2.990/mês',
                option: [
                    'Alinhamento direto com seu médico e nutricionista',
                    'Planejamento de treinos em viagens internacionais',
                    'Monitoramento de biomarcadores e recuperação diária',
                    'Atendimento presencial prioritário flexível',
                ],
                link: '',
                featured: true,
            },
            {
                desc: 'MÓDULO REMOTO',
                title: 'Consultoria Remota Elite',
                text: 'Prescrição estratégica remota para líderes que treinam com autonomia ao redor do mundo, sem prescindir do mais alto padrão técnico.',
                price: 'R$ 890/mês',
                option: [
                    'Análise postural e biomecânica em vídeo semanal',
                    'Ajustes biomecânicos e progressão milimétrica de carga',
                    'Canal privativo prioritário via WhatsApp',
                ],
                link: '',
                featured: false,
            },
        ],
    },

    about: {
        title: 'Experiência, dedicação e compromisso com você',
        desc: 'Meu objetivo é oferecer um acompanhamento de alto nível, com estratégia, atenção individual e ajustes constantes para alcançar resultados consistentes.',
        features: [
            {
                number: '01',
                title: 'Estratégia Personalizada',
                desc: 'Periodização desenhada sob demanda metabólica específica, respeitando estresse diário e recuperação celular.',
            },
            {
                number: '02',
                title: 'Acompanhamento Individual',
                desc: 'Zero distrações ou academias lotadas. Foco 100% na qualidade da execução e segurança articular.',
            },
            {
                number: '03',
                title: 'Evolução Mensurável',
                desc: 'Métricas periódicas de composição corporal, mobilidade, VO2 estimado e força funcional quantificável.',
            },
            {
                number: '04',
                title: 'Ajustes Contínuos',
                desc: 'Adaptações em tempo real de volume e intensidade para acomodar semanas de reuniões críticas ou viagens.',
            },
        ],
    },

    testimonials: {
        enabled: true,
        title: 'Resultados que falam por si.',
        cards: [
            {
                name: 'Dr. Marcelo Arantes',
                desc: 'A flexibilidade e o rigor técnico transformaram minha disposição diária e composição corporal em 6 meses, conciliando com uma rotina de viagens intensas.',
                type: 'Cirurgião & Aluno há 2 anos',
            },
            {
                name: 'Beatriz Sampaio',
                desc: 'Treinar com esse nível de privacidade e precisão biomecânica é um divisor de águas. Cada minuto da sessão é focado em resultado real, sem tempo perdido.',
                type: 'Diretora Executiva & Aluna há 18 meses',
            },
            {
                name: 'Rodrigo Fontes',
                desc: 'O diferencial é a inteligência por trás de cada treino. Menos desgaste desnecessário, muito mais força e estética refinada. Vale cada investimento.',
                type: 'Sócio-fundador & Aluno há 3 anos',
            },
        ],
    },

    contact: {
        title: 'Seu próximo nível começa agora.',
        desc: 'Treinamento personalizado, estratégia e acompanhamento exclusivo para quem busca resultados de alta performance sem abrir mão do conforto e discrição.',
        buttontext: 'COMECE SUA TRANSFORMAÇÃO',
        link: '',
    },

    whatsapp: {
        enabled: true,
        phone: '',
        message: 'Olá! Gostaria de conhecer seu acompanhamento.',
    },
}

const steps = ['Informações', 'Hero', 'Métricas', 'Serviços', 'Sobre', 'Depoimentos', 'Contato', 'WhatsApp']

const inputClassName =
    'h-11 w-full rounded-lg border border-white/10 bg-color-codgray px-4 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-[var(--malachite-700)]'

const boxClassName = 'rounded-xl border border-white/10 bg-color-woodsmoke p-4'

type FieldProps = {
    label: string
    value: string
    onChange: (value: string) => void
    textarea?: boolean
}

function Field({ label, value, onChange, textarea = false }: FieldProps) {
    return (
        <label className="flex flex-col gap-2 text-sm text-white">
            <span>{label}</span>

            {textarea ? (
                <textarea
                    className={`${inputClassName} min-h-24 py-3`}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />
            ) : (
                <input className={inputClassName} value={value} onChange={(event) => onChange(event.target.value)} />
            )}
        </label>
    )
}

type ImageFieldProps = {
    label: string
    preview: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function ImageField({ label, preview, onChange }: ImageFieldProps) {
    return (
        <div className="space-y-3">
            <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="mt-1 text-xs text-color-clay">A imagem padrão do template já está aplicada.</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                <img src={preview} alt={label} className="h-48 w-full object-cover" />
            </div>

            <label className="flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-color-woodsmoke px-4 py-3 text-sm font-medium text-white transition hover:border-color-malachite hover:text-color-malachite">
                Escolher imagem
                <input type="file" accept="image/png,image/jpeg,image/webp" onChange={onChange} className="hidden" />
            </label>

            <p className="text-xs text-color-clay">JPG, PNG ou WEBP • máximo 5 MB</p>
        </div>
    )
}

type SitePreviewProps = {
    data: Data
    heroPreview: string
    aboutPreview: string
}

const SitePreview = React.memo(function SitePreview({ data, heroPreview, aboutPreview }: SitePreviewProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0C0F0F]">
            <HeroSection2
                titlePrimary={data.hero.titlePrimary}
                title={
                    <>
                        {data.hero.title}

                        <span className="font-medium italic text-color-saffron"> {data.hero.titleHighlight}</span>
                    </>
                }
                desc={data.hero.desc}
                button1text={data.hero.button1text}
                button2text={data.hero.button2text}
                img={heroPreview}
                tag={[
                    {
                        icon: <FaUsers color="#F5C842" size={20} />,
                        text: data.hero.tags[0],
                    },
                    {
                        icon: <FaStar color="#F5C842" size={20} />,
                        text: data.hero.tags[1],
                    },
                    {
                        icon: <CiTimer color="#F5C842" size={20} />,
                        text: data.hero.tags[2],
                    },
                ]}
                cardText={data.hero.cardText}
                cardTitle={data.hero.cardTitle}
            />

            <Metrics2 metrics={data.metrics} />

            <Cards6
                title={data.services.title}
                desc={data.services.desc}
                cards={data.services.cards.map((card, index) => ({
                    ...card,
                    iconBgColor: index === 0 ? '#D1FAE5' : index === 1 ? '#CCFBF1' : '#DCFCE7',
                }))}
            />

            <Features3
                img={aboutPreview}
                title={data.about.title}
                desc={data.about.desc}
                features={data.about.features}
            />

            {data.testimonials.enabled && (
                <Testimonials1 title={data.testimonials.title} testimonial={data.testimonials.cards} />
            )}

            <Contact1
                title={data.contact.title}
                desc={data.contact.desc}
                buttontext={data.contact.buttontext}
                link={data.contact.link}
            />
        </div>
    )
})

function mediaUrl(media: Media | undefined, fallback: string) {
    if (typeof media === 'object' && media) {
        return media.url || media.thumbnailURL || fallback
    }

    return fallback
}

function mediaId(media: Media | undefined) {
    if (!media) return null

    return typeof media === 'string' ? media : media.id ? String(media.id) : null
}

function initial(site?: Site | null): Data {
    const template = site?.template2

    if (!template) {
        return structuredClone(defaults)
    }

    return {
        hero: {
            titlePrimary: template.hero?.titlePrimary ?? defaults.hero.titlePrimary,
            title: template.hero?.title ?? defaults.hero.title,
            titleHighlight: template.hero?.titleHighlight ?? defaults.hero.titleHighlight,
            desc: template.hero?.desc ?? defaults.hero.desc,
            button1text: template.hero?.button1text ?? defaults.hero.button1text,
            button2text: template.hero?.button2text ?? defaults.hero.button2text,
            tags: defaults.hero.tags.map((tag, index) => template.hero?.tags?.[index]?.text ?? tag),
            cardTitle: template.hero?.cardTitle ?? defaults.hero.cardTitle,
            cardText: template.hero?.cardText ?? defaults.hero.cardText,
        },

        metrics: defaults.metrics.map((metric, index) => ({
            number: template.metrics?.[index]?.number ?? metric.number,
            text: template.metrics?.[index]?.text ?? metric.text,
        })),

        services: {
            title: template.services?.title ?? defaults.services.title,
            desc: template.services?.desc ?? defaults.services.desc,

            cards: defaults.services.cards.map((card, index) => {
                const savedCard = template.services?.cards?.[index]

                return {
                    desc: savedCard?.desc ?? card.desc,
                    title: savedCard?.title ?? card.title,
                    text: savedCard?.text ?? card.text,
                    price: savedCard?.price ?? card.price,
                    option: savedCard?.option
                        ? savedCard.option.map((option) => option.text ?? '').filter(Boolean)
                        : card.option,
                    link: savedCard?.link ?? card.link,
                    featured: savedCard?.featured ?? card.featured,
                }
            }),
        },

        about: {
            title: template.about?.title ?? defaults.about.title,
            desc: template.about?.desc ?? defaults.about.desc,

            features: defaults.about.features.map((feature, index) => ({
                number: template.about?.features?.[index]?.number ?? feature.number,
                title: template.about?.features?.[index]?.title ?? feature.title,
                desc: template.about?.features?.[index]?.desc ?? feature.desc,
            })),
        },

        testimonials: {
            enabled: template.testimonials?.enabled ?? defaults.testimonials.enabled,
            title: template.testimonials?.title ?? defaults.testimonials.title,

            cards: defaults.testimonials.cards.map((testimonial, index) => ({
                name: template.testimonials?.cards?.[index]?.name ?? testimonial.name,
                desc: template.testimonials?.cards?.[index]?.desc ?? testimonial.desc,
                type: template.testimonials?.cards?.[index]?.type ?? testimonial.type,
            })),
        },

        contact: {
            title: template.contact?.title ?? defaults.contact.title,
            desc: template.contact?.desc ?? defaults.contact.desc,
            buttontext: template.contact?.buttontext ?? defaults.contact.buttontext,
            link: template.contact?.link ?? defaults.contact.link,
        },

        whatsapp: {
            enabled: template.whatsapp?.enabled ?? defaults.whatsapp.enabled,
            phone: template.whatsapp?.phone ?? defaults.whatsapp.phone,
            message: template.whatsapp?.message ?? defaults.whatsapp.message,
        },
    }
}

export default function CustomizeSite2({ templateName, templateImage, userName, site }: CustomizeSite2Props) {
    const initialData = React.useMemo(() => initial(site), [site])

    const [step, setStep] = React.useState(0)
    const previewScrollRef = React.useRef<HTMLDivElement | null>(null)
    const [previewScale, setPreviewScale] = React.useState(1)
    const [mobilePreviewOpen, setMobilePreviewOpen] = React.useState(false)

    const [data, setData] = React.useState<Data>(initialData)

    /*
     * IMPORTANTE:
     *
     * O formulário altera "data".
     * O preview NÃO usa "data".
     *
     * Ele usa previewData, atualizado somente depois
     * que o usuário para de digitar.
     */
    const [previewData, setPreviewData] = React.useState<Data>(initialData)

    const [siteName, setSiteName] = React.useState(site?.name || userName || '')

    const [slug, setSlug] = React.useState(site?.slug || '')

    const [publishing, setPublishing] = React.useState(false)

    const [error, setError] = React.useState('')

    const [heroFile, setHeroFile] = React.useState<File | null>(null)

    const [aboutFile, setAboutFile] = React.useState<File | null>(null)

    const [heroId, setHeroId] = React.useState<string | null>(() => mediaId(site?.template2?.hero?.img))

    const [aboutId, setAboutId] = React.useState<string | null>(() => mediaId(site?.template2?.about?.img))

    const [heroPreview, setHeroPreview] = React.useState(() =>
        mediaUrl(site?.template2?.hero?.img, templateImage || '/images/imag2.png')
    )

    const [aboutPreview, setAboutPreview] = React.useState(() =>
        mediaUrl(site?.template2?.about?.img, '/images/imag3.png')
    )

    /*
     * DEBOUNCE DO PREVIEW
     *
     * Enquanto estiver digitando, somente o formulário
     * atualiza.
     *
     * O site pesado só renderiza 500ms depois.
     */
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search)

        if (params.get('source') !== 'instagram') return

        const storedImport = sessionStorage.getItem('instagram-import')

        if (!storedImport) {
            console.log('SEM INSTAGRAM NO STORAGE')
            return
        }

        try {
            const imported = JSON.parse(storedImport)
            const profile = imported?.profile

            if (!profile) return

            console.log('INSTAGRAM NO CUSTOMIZE PREMIUM:', profile)

            const name = String(profile.name || profile.username || '').trim()
            const username = String(profile.username || '').trim()
            const biography = String(profile.biography || '').trim()
            const followers = Number(profile.followersCount || 0)
            const posts = Number(profile.postsCount || 0)

            if (name) setSiteName(name)
            if (username) setSlug(username)

            const followerLabel = followers > 0 ? followers.toLocaleString('pt-BR') : 'Perfil ativo'
            const postLabel = posts > 0 ? posts.toLocaleString('pt-BR') : 'Conteúdo'

            setData((current) => ({
                ...current,
                hero: {
                    ...current.hero,
                    titlePrimary: name ? `${name.toUpperCase()} • PERSONAL TRAINER` : 'PERSONAL TRAINING',
                    title: name ? `Treinamento personalizado com ${name}` : 'Treinamento personalizado para',
                    titleHighlight: 'evoluir com estratégia.',
                    desc:
                        biography ||
                        'Acompanhamento personalizado para transformar seus objetivos em uma rotina de treino consistente e sustentável.',
                    button1text: 'COMECE SUA EVOLUÇÃO',
                    button2text: 'CONHEÇA O ACOMPANHAMENTO',
                    tags: [
                        username ? `@${username}` : 'Atendimento personalizado',
                        followers > 0 ? `${followerLabel} seguidores` : 'Acompanhamento individual',
                        'Treino com estratégia',
                    ],
                    cardTitle: 'ACOMPANHAMENTO PERSONALIZADO',
                    cardText: 'Treino pensado para seus objetivos e sua rotina.',
                },
                metrics: [
                    {
                        number: followers > 0 ? followerLabel : '1:1',
                        text:
                            followers > 0
                                ? 'pessoas acompanham este trabalho no Instagram.'
                                : 'acompanhamento individual e próximo.',
                    },
                    {
                        number: posts > 0 ? postLabel : '100%',
                        text:
                            posts > 0
                                ? 'publicações compartilhando rotina, treino e conteúdo.'
                                : 'planejamento direcionado aos seus objetivos.',
                    },
                    {
                        number: '1:1',
                        text: 'atenção individual para adaptar o treino à sua realidade.',
                    },
                    {
                        number: '360°',
                        text: 'visão de rotina, constância, evolução e qualidade de movimento.',
                    },
                ],
                services: {
                    ...current.services,
                    title: 'Um acompanhamento feito para você.',
                    desc: biography
                        ? `A proposta de ${name || 'este profissional'} parte do que já comunica no Instagram e transforma isso em um acompanhamento estruturado para sua rotina e objetivos.`
                        : 'Escolha a forma de acompanhamento que melhor combina com sua rotina e seus objetivos.',
                    cards: [
                        {
                            ...current.services.cards[0],
                            desc: 'TREINO PRESENCIAL',
                            title: 'Personal Training',
                            text: 'Sessões presenciais com orientação individual, atenção à execução e progressão de acordo com seus objetivos.',
                            price: '',
                            option: ['Treino individualizado', 'Acompanhamento da execução', 'Progressão planejada'],
                        },
                        {
                            ...current.services.cards[1],
                            desc: 'ACOMPANHAMENTO COMPLETO',
                            title: 'Plano Personalizado',
                            text: 'Planejamento de treino adaptado à sua rotina, com acompanhamento e ajustes para manter consistência na evolução.',
                            price: '',
                            option: [
                                'Planejamento personalizado',
                                'Ajustes conforme evolução',
                                'Contato para acompanhamento',
                            ],
                            featured: true,
                        },
                        {
                            ...current.services.cards[2],
                            desc: 'CONSULTORIA ONLINE',
                            title: 'Treino à Distância',
                            text: 'Uma opção para quem quer orientação profissional e liberdade para treinar onde estiver.',
                            price: '',
                            option: ['Prescrição de treino', 'Orientações de execução', 'Acompanhamento remoto'],
                        },
                    ],
                },
                about: {
                    ...current.about,
                    title: name ? `Conheça ${name}` : 'Conheça seu personal trainer',
                    desc:
                        biography ||
                        'Acompanhamento profissional com atenção individual, estratégia e constância para construir uma evolução sustentável.',
                    features: [
                        {
                            number: '01',
                            title: 'Estratégia Personalizada',
                            desc: 'O treino é organizado de acordo com seus objetivos, rotina e momento atual.',
                        },
                        {
                            number: '02',
                            title: 'Acompanhamento Individual',
                            desc: 'Orientação próxima para melhorar execução, segurança e consistência.',
                        },
                        {
                            number: '03',
                            title: 'Evolução Progressiva',
                            desc: 'O planejamento evolui junto com você, respeitando seu ritmo e seus resultados.',
                        },
                        {
                            number: '04',
                            title: 'Ajustes Contínuos',
                            desc: 'Mudanças no treino podem ser feitas conforme sua evolução e necessidades.',
                        },
                    ],
                },
                // O Instagram não fornece depoimentos reais de clientes.
                // Desativamos esta seção para não publicar testemunhos inventados.
                testimonials: {
                    ...current.testimonials,
                    enabled: false,
                    title: 'Resultados de quem já começou.',
                },
                contact: {
                    ...current.contact,
                    title: name ? `Comece sua evolução com ${name}.` : 'Seu próximo passo começa agora.',
                    desc: 'Entre em contato para conhecer as opções de acompanhamento e encontrar a melhor forma de começar.',
                    buttontext: 'QUERO COMEÇAR',
                },
                whatsapp: {
                    ...current.whatsapp,
                    message: name
                        ? `Olá, ${name}! Conheci seu trabalho e gostaria de saber mais sobre o acompanhamento.`
                        : 'Olá! Gostaria de saber mais sobre o acompanhamento.',
                },
            }))

            const picture = String(profile.profilePicture || '').trim()
            if (picture) {
                setHeroPreview(picture)
                setAboutPreview(picture)
            }

            console.log('DADOS DO INSTAGRAM APLICADOS AO TEMPLATE PREMIUM')
        } catch (error) {
            console.error('ERRO AO LER INSTAGRAM NO TEMPLATE PREMIUM:', error)
        }
    }, [])

    React.useEffect(() => {
        const timeout = window.setTimeout(() => {
            setPreviewData(data)
        }, 500)

        return () => {
            window.clearTimeout(timeout)
        }
    }, [data])

    React.useEffect(() => {
        if (!mobilePreviewOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [mobilePreviewOpen])

    // Mantém a prévia na largura de desktop e a reduz proporcionalmente.
    // Assim, textos do template não são comprimidos ou recortados.
    React.useEffect(() => {
        const preview = previewScrollRef.current

        if (!preview) return

        const updateScale = () => {
            const baseWidth = 1280
            setPreviewScale(Math.min(1, preview.clientWidth / baseWidth))
        }

        updateScale()

        const observer = new ResizeObserver(updateScale)
        observer.observe(preview)

        return () => observer.disconnect()
    }, [])

    const setHero = React.useCallback((key: keyof Data['hero'], value: string | string[]) => {
        setData((current) => ({
            ...current,
            hero: {
                ...current.hero,
                [key]: value,
            },
        }))
    }, [])

    const setMetric = React.useCallback((index: number, key: 'number' | 'text', value: string) => {
        setData((current) => ({
            ...current,
            metrics: current.metrics.map((metric, metricIndex) =>
                metricIndex === index
                    ? {
                          ...metric,
                          [key]: value,
                      }
                    : metric
            ),
        }))
    }, [])

    const setService = React.useCallback((key: 'title' | 'desc', value: string) => {
        setData((current) => ({
            ...current,
            services: {
                ...current.services,
                [key]: value,
            },
        }))
    }, [])

    const setCard = React.useCallback((index: number, key: string, value: string | boolean | string[]) => {
        setData((current) => ({
            ...current,
            services: {
                ...current.services,
                cards: current.services.cards.map((card, cardIndex) =>
                    cardIndex === index
                        ? {
                              ...card,
                              [key]: value,
                          }
                        : card
                ),
            },
        }))
    }, [])

    const setFeature = React.useCallback((index: number, key: 'number' | 'title' | 'desc', value: string) => {
        setData((current) => ({
            ...current,
            about: {
                ...current.about,
                features: current.about.features.map((feature, featureIndex) =>
                    featureIndex === index
                        ? {
                              ...feature,
                              [key]: value,
                          }
                        : feature
                ),
            },
        }))
    }, [])

    const setTestimonial = React.useCallback((index: number, key: 'name' | 'desc' | 'type', value: string) => {
        setData((current) => ({
            ...current,
            testimonials: {
                ...current.testimonials,
                cards: current.testimonials.cards.map((testimonial, testimonialIndex) =>
                    testimonialIndex === index
                        ? {
                              ...testimonial,
                              [key]: value,
                          }
                        : testimonial
                ),
            },
        }))
    }, [])

    async function upload(file: File, alt: string) {
        const formData = new FormData()

        formData.append('file', file, file.name)
        formData.append('alt', alt)

        const response = await fetch('/api/upload-media', {
            method: 'POST',
            credentials: 'include',
            body: formData,
        })

        const json = await response.json()

        if (!response.ok || !json?.doc?.id) {
            throw new Error(json?.message || 'Erro ao enviar imagem.')
        }

        return String(json.doc.id)
    }

    async function defaultFile(url: string, name: string) {
        const response = await fetch(url, {
            cache: 'no-store',
        })

        if (!response.ok) {
            throw new Error('Não foi possível carregar a imagem padrão.')
        }

        const blob = await response.blob()

        return new File([blob], name, {
            type: blob.type || 'image/png',
        })
    }

    function imageChange(event: React.ChangeEvent<HTMLInputElement>, kind: 'hero' | 'about') {
        const file = event.target.files?.[0]

        if (!file) return

        if (file.size > 5 * 1024 * 1024) {
            setError('A imagem deve ter no máximo 5 MB.')
            return
        }

        const preview = URL.createObjectURL(file)

        if (kind === 'hero') {
            setHeroFile(file)
            setHeroId(null)
            setHeroPreview(preview)
            return
        }

        setAboutFile(file)
        setAboutId(null)
        setAboutPreview(preview)
    }

    async function finish() {
        if (publishing) return

        setError('')

        if (!siteName.trim() || !slug.trim()) {
            setError('Preencha o nome e o slug do site.')
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

        setPublishing(true)

        try {
            const meResponse = await fetch('/api/users/me', {
                credentials: 'include',
                cache: 'no-store',
            })

            const meJson = await meResponse.json()

            if (!meJson?.user?.id) {
                throw new Error('Você precisa estar logado.')
            }

            const userId = String(meJson.user.id)

            const params = new URLSearchParams()

            params.set('where[user][equals]', userId)
            params.set('limit', '1')

            const sitesResponse = await fetch(`/api/sites?${params}`, {
                credentials: 'include',
                cache: 'no-store',
            })

            const sitesJson = await sitesResponse.json()

            const existing = sitesJson?.docs?.[0] || site || null

            let heroMediaId = heroId || mediaId(existing?.template2?.hero?.img)

            let aboutMediaId = aboutId || mediaId(existing?.template2?.about?.img)

            if (heroFile) {
                heroMediaId = await upload(heroFile, 'Imagem principal do site')
            }

            if (!heroMediaId) {
                heroMediaId = await upload(
                    await defaultFile(templateImage || '/images/imag2.png', 'template-2-hero.png'),
                    'Imagem principal do site'
                )
            }

            if (aboutFile) {
                aboutMediaId = await upload(aboutFile, 'Foto sobre o profissional')
            }

            if (!aboutMediaId) {
                aboutMediaId = await upload(
                    await defaultFile('/images/imag3.png', 'template-2-about.png'),
                    'Foto sobre o profissional'
                )
            }

            const payloadData = {
                name: siteName.trim(),
                slug: cleanSlug,
                template: 'template-2',
                published: true,
                user: userId,

                template2: {
                    hero: {
                        ...data.hero,
                        tags: data.hero.tags.map((text) => ({
                            text,
                        })),
                        img: heroMediaId,
                    },

                    metrics: data.metrics,

                    services: {
                        ...data.services,

                        cards: data.services.cards.map((card) => ({
                            ...card,

                            option: card.option
                                .filter(Boolean)
                                .slice(0, 4)
                                .map((text) => ({
                                    text,
                                })),
                        })),
                    },

                    about: {
                        ...data.about,
                        img: aboutMediaId,
                    },

                    testimonials: {
                        ...data.testimonials,
                        cards: data.testimonials.cards.slice(0, 3),
                    },

                    contact: data.contact,
                    whatsapp: data.whatsapp,
                },
            }

            const response = await fetch(existing?.id ? `/api/sites/${existing.id}` : '/api/sites', {
                method: existing?.id ? 'PATCH' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(payloadData),
            })

            const json = await response.json().catch(() => null)

            if (!response.ok) {
                throw new Error(json?.errors?.[0]?.message || json?.message || 'Não foi possível publicar o site.')
            }

            window.location.href = `/personal/${encodeURIComponent(json?.doc?.slug ?? json?.slug ?? cleanSlug)}`
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Erro ao publicar o site.')
        } finally {
            setPublishing(false)
        }
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
                        <Button
                            asChild
                            className="bg-color-malachite font-semibold text-black hover:bg-color-malachite hover:text-black hover:brightness-110">
                            <Link href="/dashboard">Voltar para templates</Link>
                        </Button>
                    )}
                </div>

                <div className="mb-8 rounded-2xl border border-white/10 bg-color-codgray p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
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
                            className="h-full rounded-full bg-color-malachite transition-all duration-300"
                            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                        />
                    </div>

                    <div className="mt-4 hidden gap-2 overflow-x-auto lg:flex">
                        {steps.map((item, index) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setStep(index)}
                                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs transition ${
                                    step === index
                                        ? 'bg-color-malachite text-black'
                                        : index < step
                                          ? 'bg-white/10 text-white'
                                          : 'text-color-clay'
                                }`}>
                                {index + 1}. {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[500px_1fr]">
                    <div className="scroll-mt-4 rounded-2xl border border-white/10 bg-color-codgray p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-6">
                        <div className="flex flex-col gap-4">
                            {step === 0 && (
                                <>
                                    <Field label="Nome do site" value={siteName} onChange={setSiteName} />

                                    <Field label="Slug" value={slug} onChange={setSlug} />

                                    <p className="text-sm text-color-clay">
                                        /personal/
                                        {slug || 'seu-endereco'}
                                    </p>
                                </>
                            )}

                            {step === 1 && (
                                <>
                                    <Field
                                        label="Texto superior"
                                        value={data.hero.titlePrimary}
                                        onChange={(value) => setHero('titlePrimary', value)}
                                    />

                                    <Field
                                        label="Título"
                                        value={data.hero.title}
                                        onChange={(value) => setHero('title', value)}
                                        textarea
                                    />

                                    <Field
                                        label="Texto destacado"
                                        value={data.hero.titleHighlight}
                                        onChange={(value) => setHero('titleHighlight', value)}
                                    />

                                    <Field
                                        label="Descrição"
                                        value={data.hero.desc}
                                        onChange={(value) => setHero('desc', value)}
                                        textarea
                                    />

                                    <Field
                                        label="Botão principal"
                                        value={data.hero.button1text}
                                        onChange={(value) => setHero('button1text', value)}
                                    />

                                    <Field
                                        label="Botão secundário"
                                        value={data.hero.button2text}
                                        onChange={(value) => setHero('button2text', value)}
                                    />

                                    {data.hero.tags.map((tag, index) => (
                                        <Field
                                            key={index}
                                            label={`Destaque ${index + 1}`}
                                            value={tag}
                                            onChange={(value) => {
                                                const tags = [...data.hero.tags]

                                                tags[index] = value

                                                setHero('tags', tags)
                                            }}
                                        />
                                    ))}

                                    <Field
                                        label="Título do card"
                                        value={data.hero.cardTitle}
                                        onChange={(value) => setHero('cardTitle', value)}
                                    />

                                    <Field
                                        label="Texto do card"
                                        value={data.hero.cardText}
                                        onChange={(value) => setHero('cardText', value)}
                                    />

                                    <ImageField
                                        label="Imagem do Hero"
                                        preview={heroPreview}
                                        onChange={(event) => imageChange(event, 'hero')}
                                    />
                                </>
                            )}

                            {step === 2 &&
                                data.metrics.map((metric, index) => (
                                    <div key={index} className={boxClassName}>
                                        <div className="flex flex-col gap-3">
                                            <Field
                                                label={`Número ${index + 1}`}
                                                value={metric.number}
                                                onChange={(value) => setMetric(index, 'number', value)}
                                            />

                                            <Field
                                                label="Descrição"
                                                value={metric.text}
                                                onChange={(value) => setMetric(index, 'text', value)}
                                                textarea
                                            />
                                        </div>
                                    </div>
                                ))}

                            {step === 3 && (
                                <>
                                    <Field
                                        label="Título da seção"
                                        value={data.services.title}
                                        onChange={(value) => setService('title', value)}
                                    />

                                    <Field
                                        label="Descrição"
                                        value={data.services.desc}
                                        onChange={(value) => setService('desc', value)}
                                        textarea
                                    />

                                    {data.services.cards.map((card, index) => (
                                        <div key={index} className={boxClassName}>
                                            <div className="flex flex-col gap-3">
                                                <Field
                                                    label="Categoria"
                                                    value={card.desc}
                                                    onChange={(value) => setCard(index, 'desc', value)}
                                                />

                                                <Field
                                                    label="Título"
                                                    value={card.title}
                                                    onChange={(value) => setCard(index, 'title', value)}
                                                />

                                                <Field
                                                    label="Descrição"
                                                    value={card.text}
                                                    onChange={(value) => setCard(index, 'text', value)}
                                                    textarea
                                                />

                                                <Field
                                                    label="Preço"
                                                    value={card.price}
                                                    onChange={(value) => setCard(index, 'price', value)}
                                                />

                                                {card.option.map((option, optionIndex) => (
                                                    <Field
                                                        key={optionIndex}
                                                        label={`Benefício ${optionIndex + 1}`}
                                                        value={option}
                                                        onChange={(value) => {
                                                            const options = [...card.option]

                                                            options[optionIndex] = value

                                                            setCard(index, 'option', options)
                                                        }}
                                                    />
                                                ))}

                                                <Field
                                                    label="Link"
                                                    value={card.link}
                                                    onChange={(value) => setCard(index, 'link', value)}
                                                />

                                                <label className="flex items-center gap-2 text-sm text-white">
                                                    <input
                                                        type="checkbox"
                                                        checked={card.featured}
                                                        onChange={(event) =>
                                                            setCard(index, 'featured', event.target.checked)
                                                        }
                                                    />
                                                    Destacar serviço
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                            {step === 4 && (
                                <>
                                    <Field
                                        label="Título"
                                        value={data.about.title}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                about: {
                                                    ...current.about,
                                                    title: value,
                                                },
                                            }))
                                        }
                                    />

                                    <Field
                                        label="Descrição"
                                        value={data.about.desc}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                about: {
                                                    ...current.about,
                                                    desc: value,
                                                },
                                            }))
                                        }
                                        textarea
                                    />

                                    {data.about.features.map((feature, index) => (
                                        <div key={index} className={boxClassName}>
                                            <div className="flex flex-col gap-3">
                                                <Field
                                                    label="Número"
                                                    value={feature.number}
                                                    onChange={(value) => setFeature(index, 'number', value)}
                                                />

                                                <Field
                                                    label="Título"
                                                    value={feature.title}
                                                    onChange={(value) => setFeature(index, 'title', value)}
                                                />

                                                <Field
                                                    label="Descrição"
                                                    value={feature.desc}
                                                    onChange={(value) => setFeature(index, 'desc', value)}
                                                    textarea
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <ImageField
                                        label="Imagem sobre você"
                                        preview={aboutPreview}
                                        onChange={(event) => imageChange(event, 'about')}
                                    />
                                </>
                            )}

                            {step === 5 && (
                                <>
                                    <label className="flex items-center gap-2 text-sm text-white">
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

                                    {data.testimonials.cards.map((testimonial, index) => (
                                        <div key={index} className={boxClassName}>
                                            <div className="flex flex-col gap-3">
                                                <Field
                                                    label="Nome"
                                                    value={testimonial.name}
                                                    onChange={(value) => setTestimonial(index, 'name', value)}
                                                />

                                                <Field
                                                    label="Depoimento"
                                                    value={testimonial.desc}
                                                    onChange={(value) => setTestimonial(index, 'desc', value)}
                                                    textarea
                                                />

                                                <Field
                                                    label="Cargo / informação"
                                                    value={testimonial.type}
                                                    onChange={(value) => setTestimonial(index, 'type', value)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                            {step === 6 && (
                                <>
                                    <Field
                                        label="Título"
                                        value={data.contact.title}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                contact: {
                                                    ...current.contact,
                                                    title: value,
                                                },
                                            }))
                                        }
                                    />

                                    <Field
                                        label="Descrição"
                                        value={data.contact.desc}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                contact: {
                                                    ...current.contact,
                                                    desc: value,
                                                },
                                            }))
                                        }
                                        textarea
                                    />

                                    <Field
                                        label="Texto do botão"
                                        value={data.contact.buttontext}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                contact: {
                                                    ...current.contact,
                                                    buttontext: value,
                                                },
                                            }))
                                        }
                                    />

                                    <Field
                                        label="Link"
                                        value={data.contact.link}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                contact: {
                                                    ...current.contact,
                                                    link: value,
                                                },
                                            }))
                                        }
                                    />
                                </>
                            )}

                            {step === 7 && (
                                <>
                                    <label className="flex items-center gap-2 text-sm text-white">
                                        <input
                                            type="checkbox"
                                            checked={data.whatsapp.enabled}
                                            onChange={(event) =>
                                                setData((current) => ({
                                                    ...current,
                                                    whatsapp: {
                                                        ...current.whatsapp,
                                                        enabled: event.target.checked,
                                                    },
                                                }))
                                            }
                                        />
                                        Mostrar WhatsApp
                                    </label>

                                    <Field
                                        label="Telefone"
                                        value={data.whatsapp.phone}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                whatsapp: {
                                                    ...current.whatsapp,
                                                    phone: value,
                                                },
                                            }))
                                        }
                                    />

                                    <Field
                                        label="Mensagem"
                                        value={data.whatsapp.message}
                                        onChange={(value) =>
                                            setData((current) => ({
                                                ...current,
                                                whatsapp: {
                                                    ...current.whatsapp,
                                                    message: value,
                                                },
                                            }))
                                        }
                                        textarea
                                    />
                                </>
                            )}

                            {error && <p className="text-sm text-red-400">{error}</p>}

                            <div className="mt-4 flex justify-between gap-3">
                                <Button
                                    type="button"
                                    variant="outline"
                                    disabled={step === 0}
                                    onClick={() => setStep((current) => Math.max(0, current - 1))}>
                                    Voltar
                                </Button>

                                {step < steps.length - 1 ? (
                                    <Button
                                        type="button"
                                        className="bg-color-malachite text-black hover:brightness-110"
                                        onClick={() => setStep((current) => current + 1)}>
                                        Continuar
                                    </Button>
                                ) : (
                                    <Button
                                        type="button"
                                        className="bg-color-malachite text-black hover:brightness-110"
                                        disabled={publishing}
                                        onClick={finish}>
                                        {publishing ? 'Publicando...' : 'Publicar site'}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

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
                                    {/* O preview recebe a cópia com debounce para manter a edição fluida. */}
                                    <SitePreview
                                        data={previewData}
                                        heroPreview={heroPreview}
                                        aboutPreview={aboutPreview}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            {mobilePreviewOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-color-woodsmoke md:hidden">
                    <div className="shrink-0 border-b border-white/10 bg-color-codgray px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] text-center">
                        <p className="truncate text-sm font-semibold text-white">Prévia do site</p>
                        <p className="mt-1 text-xs text-color-clay">
                            Etapa {step + 1}: {steps[step]}
                        </p>
                    </div>

                    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-black">
                        <SitePreview data={previewData} heroPreview={heroPreview} aboutPreview={aboutPreview} />
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
