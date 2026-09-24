'use client'

import Link from 'next/link'
import * as React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa6'

import { HeroSection5, type HeroSection5Theme } from '@/components/sections/hero-section/hero-section5'
import { Button } from '@/components/ui/button'

import type { Media, Site, User } from '../../../payload-types'

interface Props {
    templateName: string
    templateImage: string
    userName: string
    site?: Site | null
}

type Template5 = NonNullable<Site['template5']>
type Hero = NonNullable<Template5['hero']>
type SocialLink = NonNullable<Template5['socialLinks']>[number]
type Card = NonNullable<Template5['cards']>[number]
type Profile = { [K in keyof Omit<Hero, 'profileImage'>]-?: string }
type Data = {
    theme: HeroSection5Theme
    hero: Profile
    socialLinks: SocialLink[]
    cards: Card[]
}
type ApiError = { message?: string; errors?: { message?: string }[] }
type SiteResponse = ApiError & { doc?: Site; slug?: string }

const DEFAULT_IMAGE = '/images/pessoa4.png'
const MAX_SOCIAL_LINKS = 5
const MAX_CARDS = 6
const steps = ['Informações', 'Perfil', 'Tema', 'Redes sociais', 'Links', 'Publicar']
const themes: { value: HeroSection5Theme; label: string; color: string }[] = [
    { value: 'neon', label: 'Neon', color: '#c8ff00' },
    { value: 'white', label: 'White', color: '#ffffff' },
    { value: 'feminine', label: 'Feminino', color: '#ee5d96' },
    { value: 'blue', label: 'Azul', color: '#58b8ff' },
    { value: 'sunset', label: 'Sunset', color: '#ff9b54' },
]
const socialTypes: { value: NonNullable<SocialLink['type']>; label: string; icon: typeof FaInstagram }[] = [
    { value: 'instagram', label: 'Instagram', icon: FaInstagram },
    { value: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp },
    { value: 'tiktok', label: 'TikTok', icon: FaTiktok },
    { value: 'youtube', label: 'YouTube', icon: FaYoutube },
    { value: 'facebook', label: 'Facebook', icon: FaFacebookF },
]

function initial(site: Site | null | undefined): Data {
    const template = site?.template5
    return {
        theme: template?.theme ?? 'neon',
        hero: {
            titlePrimary: template?.hero?.titlePrimary ?? 'Vagas abertas para consultoria',
            profileName: template?.hero?.profileName ?? 'Alex Andrade',
            profileUsername: template?.hero?.profileUsername ?? '@AlexAndrade',
            profileDescription:
                template?.hero?.profileDescription ??
                'Ajudo você a transformar seu corpo através de treino personalizado, biomecânica inteligente e acompanhamento profissional diário.',
        },
        socialLinks: template?.socialLinks ?? [],
        cards: template?.cards ?? [],
    }
}

function mediaId(media: Hero['profileImage']) {
    if (typeof media === 'object' && media) return media.id
    if (typeof media === 'string' && !/^(?:https?:|blob:|data:|\/)/i.test(media)) return media
    return null
}

function mediaUrl(media: Hero['profileImage']) {
    if (typeof media === 'object' && media?.url) return media.url
    if (typeof media === 'string' && (media.startsWith('/') || /^https?:\/\//.test(media))) return media
    return DEFAULT_IMAGE
}

// Mesma normalização da página pública do Template 5: URLs completas são preservadas.
function linkHref(type: SocialLink['type'] | Card['type'], href: string | null | undefined) {
    if (type === 'whatsapp' && href && /^\+?\d[\d\s()-]*$/.test(href)) {
        return `https://wa.me/${href.replace(/\D/g, '')}`
    }
    return href ?? '#'
}

// Mesmo tratamento de slug usado no CustomizeSite4.
function normalizeSlug(value: string) {
    return value
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
}

export default function CustomizeSite5({ templateName, userName, site }: Props) {
    const [step, setStep] = React.useState(0)
    const [data, setData] = React.useState<Data>(() => initial(site))
    const [siteName, setSiteName] = React.useState(site?.name ?? userName)
    const [slug, setSlug] = React.useState(site?.slug ?? '')
    const [publishing, setPublishing] = React.useState(false)
    const [error, setError] = React.useState('')
    const [success, setSuccess] = React.useState('')
    const [mobilePreview, setMobilePreview] = React.useState(false)
    const [profileFile, setProfileFile] = React.useState<File | null>(null)
    const [profilePreview, setProfilePreview] = React.useState(() => mediaUrl(site?.template5?.hero?.profileImage))
    const [profileAlt, setProfileAlt] = React.useState(() => {
        const media = site?.template5?.hero?.profileImage
        return typeof media === 'object' && media?.alt ? media.alt : 'Foto de perfil'
    })
    const uploadedFileRef = React.useRef<{ file: File; id: string } | null>(null)
    const publishingRef = React.useRef(false)
    const previewScrollRef = React.useRef<HTMLDivElement | null>(null)
    const mobilePreviewScrollRef = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
        if (!profileFile) return
        const url = URL.createObjectURL(profileFile)
        setProfilePreview(url)
        return () => URL.revokeObjectURL(url)
    }, [profileFile])

    React.useEffect(() => {
        if (!mobilePreview) return
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [mobilePreview])

    React.useEffect(() => {
        const timer = window.setTimeout(() => {
            for (const scroll of [previewScrollRef.current, mobilePreviewScrollRef.current]) {
                if (!scroll) continue
                // O Hero é uma única seção. Localiza as redes/cards reais, sem criar seções fictícias.
                const target =
                    step === 3
                        ? scroll.querySelector('a[aria-label]')?.parentElement
                        : step === 4
                          ? scroll.querySelector('h2')?.closest('a')
                          : null
                const top = target
                    ? scroll.scrollTop + target.getBoundingClientRect().top - scroll.getBoundingClientRect().top - 16
                    : 0
                scroll.scrollTo({ top: Math.max(0, top), behavior: mobilePreview ? 'auto' : 'smooth' })
            }
        }, 80)
        return () => window.clearTimeout(timer)
    }, [step, mobilePreview, data.socialLinks.length, data.cards.length])

    const patch = <K extends keyof Data>(key: K, value: Data[K]) => setData((current) => ({ ...current, [key]: value }))
    const setHero = (key: keyof Profile, value: string) => patch('hero', { ...data.hero, [key]: value })
    const setSocial = (index: number, value: Partial<SocialLink>) =>
        patch(
            'socialLinks',
            data.socialLinks.map((social, i) => (i === index ? { ...social, ...value } : social))
        )
    const setCard = (index: number, value: Partial<Card>) =>
        patch(
            'cards',
            data.cards.map((card, i) => (i === index ? { ...card, ...value } : card))
        )

    function imageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        if (!file) return
        if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
            setError('Use uma imagem JPG, PNG ou WEBP de até 5 MB.')
            event.target.value = ''
            return
        }
        setError('')
        setProfileFile(file)
    }

    async function upload(file: File) {
        // Uma falha ao salvar o site não deve reenviar a mesma imagem na próxima tentativa.
        if (uploadedFileRef.current?.file === file) return uploadedFileRef.current.id
        const body = new FormData()
        body.append('file', file, file.name)
        body.append('alt', profileAlt.trim() || 'Foto de perfil')
        const response = await fetch('/api/upload-media', { method: 'POST', credentials: 'include', body })
        const json: (ApiError & { doc?: Media }) | null = await response.json().catch(() => null)
        if (!response.ok || !json?.doc?.id) throw new Error(json?.message || 'Erro ao enviar imagem.')
        uploadedFileRef.current = { file, id: json.doc.id }
        return json.doc.id
    }

    async function publish() {
        if (publishingRef.current || success) return
        setError('')
        const cleanSlug = normalizeSlug(slug)
        if (!siteName.trim() || !cleanSlug) {
            setStep(0)
            setError(!siteName.trim() ? 'Digite o nome do site.' : 'Digite um slug válido.')
            return
        }
        if (data.socialLinks.length > MAX_SOCIAL_LINKS) return setError('Use no máximo 5 redes sociais.')
        if (data.cards.length > MAX_CARDS) return setError('Use no máximo 6 links.')

        publishingRef.current = true
        setPublishing(true)
        try {
            const meResponse = await fetch('/api/users/me', { credentials: 'include', cache: 'no-store' })
            const me: { user?: User | null } = await meResponse.json()
            if (!meResponse.ok || !me.user?.id) throw new Error('Você precisa estar logado.')
            const userId = me.user.id

            const query = new URLSearchParams({ 'where[user][equals]': userId, limit: '1' })
            const ownedResponse = await fetch(`/api/sites?${query}`, { credentials: 'include', cache: 'no-store' })
            if (!ownedResponse.ok) throw new Error('Não foi possível verificar seu site.')
            const owned: { docs?: Site[] } = await ownedResponse.json()
            const existing = owned.docs?.[0] ?? site ?? null

            const slugQuery = new URLSearchParams({ 'where[slug][equals]': cleanSlug, limit: '1' })
            const slugResponse = await fetch(`/api/sites?${slugQuery}`, { credentials: 'include', cache: 'no-store' })
            if (!slugResponse.ok) throw new Error('Não foi possível verificar o endereço do site.')
            const slugResult: { docs?: Site[] } = await slugResponse.json()
            const conflict = slugResult.docs?.[0]
            if (conflict && conflict.id !== existing?.id) throw new Error('Esse endereço já está em uso.')

            // A URL de preview fica separada do ID persistido. Sem arquivo novo, reutiliza a mídia.
            const profileImage = profileFile
                ? await upload(profileFile)
                : (mediaId(site?.template5?.hero?.profileImage) ?? mediaId(existing?.template5?.hero?.profileImage))

            const body = {
                name: siteName.trim(),
                slug: cleanSlug,
                template: 'template-5',
                published: true,
                user: userId,
                template5: {
                    theme: data.theme,
                    hero: { ...data.hero, profileImage },
                    socialLinks: data.socialLinks.map((social) => ({
                        ...social,
                        href: linkHref(social.type, social.href),
                    })),
                    cards: data.cards.map((card) => ({ ...card, href: linkHref(card.type, card.href) })),
                },
            } satisfies Pick<Site, 'name' | 'slug' | 'template' | 'published' | 'user' | 'template5'>

            const response = await fetch(existing?.id ? `/api/sites/${existing.id}` : '/api/sites', {
                method: existing?.id ? 'PATCH' : 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            const json: SiteResponse | null = await response.json().catch(() => null)
            if (!response.ok) {
                throw new Error(json?.errors?.[0]?.message || json?.message || 'Não foi possível publicar.')
            }
            setSuccess(existing ? 'Seu site foi atualizado com sucesso!' : 'Seu site foi publicado com sucesso!')
            const savedSlug = json?.doc?.slug ?? json?.slug ?? cleanSlug
            window.setTimeout(() => {
                window.location.href = `/personal/${encodeURIComponent(savedSlug)}`
            }, 1000)
        } catch (publishError) {
            setError(publishError instanceof Error ? publishError.message : 'Erro ao publicar.')
        } finally {
            publishingRef.current = false
            setPublishing(false)
        }
    }

    const preview = (
        <HeroSection5
            theme={data.theme}
            {...data.hero}
            profileImage={profilePreview}
            socialLinks={data.socialLinks.map((social) => {
                const Icon = socialTypes.find((item) => item.value === social.type)?.icon
                return {
                    label: social.label ?? '',
                    href: linkHref(social.type, social.href),
                    icon: Icon ? <Icon size={24} /> : null,
                }
            })}
            cards={data.cards.map((card) => ({
                title: card.title ?? '',
                description: card.description ?? '',
                href: linkHref(card.type, card.href),
                icon: card.type === 'whatsapp' ? <FaWhatsapp size={23} /> : undefined,
                highlighted: card.highlighted ?? false,
                mostPopular: card.mostPopular ?? false,
            }))}
        />
    )

    return (
        <section className="min-h-screen bg-color-woodsmoke py-8 pb-28 xl:pb-8">
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
                        {steps.map((label, index) => (
                            <button
                                key={label}
                                type="button"
                                disabled={publishing || Boolean(success)}
                                aria-current={index === step ? 'step' : undefined}
                                onClick={() => setStep(index)}
                                className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs ${index === step ? 'bg-color-malachite text-black' : 'text-color-clay'}`}>
                                {index + 1}. {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[500px_1fr]">
                    <div className="min-w-0 rounded-2xl border border-white/10 bg-color-codgray p-5 sm:p-6">
                        <fieldset disabled={publishing || Boolean(success)} className="min-w-0">
                            {step === 0 && (
                                <Step title="Informações" desc="Defina o nome e o endereço do seu site.">
                                    <Field label="Nome do site" value={siteName} onChange={setSiteName} />
                                    <Field label="Slug" value={slug} onChange={setSlug} />
                                    <p className="break-all text-sm text-color-clay">
                                        /personal/{normalizeSlug(slug) || 'seu-endereco'}
                                    </p>
                                </Step>
                            )}
                            {step === 1 && (
                                <Step title="Perfil" desc="Apresente seu trabalho e escolha sua foto.">
                                    <Field
                                        label="Texto superior"
                                        value={data.hero.titlePrimary}
                                        onChange={(value) => setHero('titlePrimary', value)}
                                    />
                                    <Field
                                        label="Nome do perfil"
                                        value={data.hero.profileName}
                                        onChange={(value) => setHero('profileName', value)}
                                    />
                                    <Field
                                        label="Usuário"
                                        value={data.hero.profileUsername}
                                        onChange={(value) => setHero('profileUsername', value)}
                                    />
                                    <Field
                                        label="Descrição do perfil"
                                        textarea
                                        value={data.hero.profileDescription}
                                        onChange={(value) => setHero('profileDescription', value)}
                                    />
                                    <div className="rounded-xl border border-white/10 bg-color-woodsmoke p-4">
                                        <label className="flex flex-col gap-3 text-sm font-medium text-white">
                                            Foto de perfil
                                            <img
                                                src={profilePreview}
                                                alt={profileAlt || 'Foto de perfil'}
                                                className="size-40 rounded-full object-cover"
                                            />
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/webp"
                                                onChange={imageChange}
                                                className="block w-full text-xs text-color-clay"
                                            />
                                        </label>
                                        <p className="my-3 text-xs text-color-clay">
                                            JPG, PNG ou WEBP de até 5 MB. A foto atual é mantida se você não escolher
                                            outra.
                                        </p>
                                        <Field
                                            label="Texto alternativo da nova foto"
                                            value={profileAlt}
                                            onChange={setProfileAlt}
                                        />
                                    </div>
                                </Step>
                            )}
                            {step === 2 && (
                                <Step title="Tema" desc="Escolha as cores do seu site. A prévia muda imediatamente.">
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                        {themes.map((theme) => (
                                            <button
                                                key={theme.value}
                                                type="button"
                                                aria-pressed={data.theme === theme.value}
                                                onClick={() => patch('theme', theme.value)}
                                                className={`flex flex-col items-center gap-3 rounded-xl border p-4 text-sm text-white ${data.theme === theme.value ? 'border-color-malachite bg-color-woodsmoke' : 'border-white/10'}`}>
                                                <span
                                                    className="size-10 rounded-full border border-white/20"
                                                    style={{ backgroundColor: theme.color }}
                                                />
                                                {theme.label}
                                            </button>
                                        ))}
                                    </div>
                                </Step>
                            )}
                            {step === 3 && (
                                <Step
                                    title="Redes sociais"
                                    desc="Adicione até 5 redes sociais para seus visitantes encontrarem você.">
                                    {data.socialLinks.map((social, index) => (
                                        <Box key={social.id ?? index} title={`Rede social ${index + 1}`}>
                                            <label className="flex flex-col gap-2 text-sm font-medium text-white">
                                                Rede social
                                                <select
                                                    value={social.type ?? ''}
                                                    onChange={(event) => {
                                                        const selected = socialTypes.find(
                                                            (item) => item.value === event.target.value
                                                        )
                                                        setSocial(index, { type: selected?.value ?? null })
                                                    }}
                                                    className="h-11 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white">
                                                    <option value="">Selecione</option>
                                                    {socialTypes.map((item) => (
                                                        <option key={item.value} value={item.value}>
                                                            {item.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            <Field
                                                label="Nome da rede"
                                                value={social.label ?? ''}
                                                onChange={(label) => setSocial(index, { label })}
                                            />
                                            <Field
                                                label={
                                                    social.type === 'whatsapp'
                                                        ? 'Link ou número com DDI e DDD'
                                                        : 'Link da rede'
                                                }
                                                value={social.href ?? ''}
                                                onChange={(href) => setSocial(index, { href })}
                                            />
                                            <RemoveButton
                                                onClick={() =>
                                                    patch(
                                                        'socialLinks',
                                                        data.socialLinks.filter((_, i) => i !== index)
                                                    )
                                                }>
                                                Remover rede social
                                            </RemoveButton>
                                        </Box>
                                    ))}
                                    <Button
                                        type="button"
                                        disabled={data.socialLinks.length >= MAX_SOCIAL_LINKS}
                                        onClick={() =>
                                            setData((current) =>
                                                current.socialLinks.length >= MAX_SOCIAL_LINKS
                                                    ? current
                                                    : {
                                                          ...current,
                                                          socialLinks: [
                                                              ...current.socialLinks,
                                                              { type: 'instagram', label: 'Instagram', href: '' },
                                                          ],
                                                      }
                                            )
                                        }
                                        className="bg-color-malachite font-semibold text-black">
                                        Adicionar rede social ({data.socialLinks.length}/{MAX_SOCIAL_LINKS})
                                    </Button>
                                </Step>
                            )}
                            {step === 4 && (
                                <Step
                                    title="Links"
                                    desc="Adicione de 0 a 6 cards com seus serviços e formas de contato.">
                                    {data.cards.map((card, index) => (
                                        <Box key={card.id ?? index} title={`Link ${index + 1}`}>
                                            <Field
                                                label="Título do link"
                                                value={card.title ?? ''}
                                                onChange={(title) => setCard(index, { title })}
                                            />
                                            <Field
                                                label="Descrição do link"
                                                textarea
                                                value={card.description ?? ''}
                                                onChange={(description) => setCard(index, { description })}
                                            />
                                            <label className="flex flex-col gap-2 text-sm font-medium text-white">
                                                Tipo de link
                                                <select
                                                    value={card.type ?? 'link'}
                                                    onChange={(event) =>
                                                        setCard(index, {
                                                            type:
                                                                event.target.value === 'whatsapp' ? 'whatsapp' : 'link',
                                                        })
                                                    }
                                                    className="h-11 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white">
                                                    <option value="link">Link normal</option>
                                                    <option value="whatsapp">WhatsApp</option>
                                                </select>
                                            </label>
                                            <Field
                                                label={
                                                    card.type === 'whatsapp'
                                                        ? 'Link ou número com DDI e DDD'
                                                        : 'Endereço do link'
                                                }
                                                value={card.href ?? ''}
                                                onChange={(href) => setCard(index, { href })}
                                            />
                                            <label className="flex items-center gap-2 text-sm text-white">
                                                <input
                                                    type="checkbox"
                                                    checked={card.highlighted ?? false}
                                                    onChange={(event) =>
                                                        setCard(index, { highlighted: event.target.checked })
                                                    }
                                                />
                                                Destacar card
                                            </label>
                                            <label className="flex items-center gap-2 text-sm text-white">
                                                <input
                                                    type="checkbox"
                                                    checked={card.mostPopular ?? false}
                                                    onChange={(event) =>
                                                        setCard(index, { mostPopular: event.target.checked })
                                                    }
                                                />
                                                Mostrar como mais popular
                                            </label>
                                            <RemoveButton
                                                onClick={() =>
                                                    patch(
                                                        'cards',
                                                        data.cards.filter((_, i) => i !== index)
                                                    )
                                                }>
                                                Remover link
                                            </RemoveButton>
                                        </Box>
                                    ))}
                                    <Button
                                        type="button"
                                        disabled={data.cards.length >= MAX_CARDS}
                                        onClick={() =>
                                            setData((current) =>
                                                current.cards.length >= MAX_CARDS
                                                    ? current
                                                    : {
                                                          ...current,
                                                          cards: [
                                                              ...current.cards,
                                                              {
                                                                  title: '',
                                                                  description: '',
                                                                  href: '',
                                                                  type: 'link',
                                                                  highlighted: false,
                                                                  mostPopular: false,
                                                              },
                                                          ],
                                                      }
                                            )
                                        }
                                        className="bg-color-malachite font-semibold text-black">
                                        Adicionar link ({data.cards.length}/{MAX_CARDS})
                                    </Button>
                                </Step>
                            )}
                            {step === 5 && (
                                <Step title="Publicar" desc="Confira a prévia e publique suas alterações.">
                                    <Box title={siteName || 'Seu site'}>
                                        <p className="break-all text-sm text-color-clay">
                                            /personal/{normalizeSlug(slug) || 'seu-endereco'}
                                        </p>
                                        <p className="text-sm text-color-clay">
                                            Tema: {themes.find((theme) => theme.value === data.theme)?.label}
                                        </p>
                                        <p className="text-sm text-color-clay">
                                            {data.socialLinks.length} redes sociais · {data.cards.length} links
                                        </p>
                                    </Box>
                                </Step>
                            )}
                        </fieldset>
                        {error && (
                            <p role="alert" className="mt-5 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p role="status" className="mt-5 rounded-lg bg-green-500/10 p-3 text-sm text-green-400">
                                {success}
                            </p>
                        )}
                        <div className="mt-8 flex gap-3">
                            {step > 0 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    disabled={publishing || Boolean(success)}
                                    onClick={() => setStep((current) => current - 1)}
                                    className="flex-1">
                                    Anterior
                                </Button>
                            )}
                            {step < steps.length - 1 ? (
                                <Button
                                    type="button"
                                    onClick={() => setStep((current) => current + 1)}
                                    className="flex-1 bg-color-malachite font-semibold text-black">
                                    Próximo
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    disabled={publishing || Boolean(success)}
                                    onClick={publish}
                                    className="flex-1 bg-color-malachite font-semibold text-black">
                                    {publishing ? 'Salvando...' : site ? 'Salvar alterações' : 'Publicar site'}
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="hidden min-w-0 xl:block">
                        <div
                            ref={previewScrollRef}
                            className="sticky top-28 h-[78vh] overflow-y-auto rounded-2xl border border-white/10 bg-black">
                            {preview}
                        </div>
                    </div>
                </div>
                <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-color-codgray p-3 xl:hidden">
                    <Button
                        type="button"
                        onClick={() => setMobilePreview(true)}
                        className="w-full bg-color-malachite font-semibold text-black">
                        Ver prévia do site
                    </Button>
                </div>
            </div>
            {mobilePreview && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Prévia do site"
                    className="fixed inset-0 z-50 flex flex-col bg-black xl:hidden">
                    <div ref={mobilePreviewScrollRef} className="flex-1 overflow-y-auto">
                        {preview}
                    </div>
                    <div className="bg-color-codgray p-3">
                        <Button
                            autoFocus
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
    onChange: (value: string) => void
    textarea?: boolean
}) {
    return (
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
            {label}
            {textarea ? (
                <textarea
                    rows={4}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="rounded-lg border border-white/10 bg-color-woodsmoke px-4 py-3 text-sm text-white outline-none"
                />
            ) : (
                <input
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="h-11 rounded-lg border border-white/10 bg-color-woodsmoke px-4 text-sm text-white outline-none"
                />
            )}
        </label>
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

function RemoveButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-400">
            {children}
        </button>
    )
}
