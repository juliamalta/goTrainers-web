'use client'

import {
    FiArrowUpRight,
    FiBarChart2,
    FiEdit3,
    FiExternalLink,
    FiGlobe,
    FiSettings,
    FiTrash2,
    FiUser,
} from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Site = {
    id: string
    name: string
    slug: string
    template: string
    published: boolean
    updatedAt?: string
}

export default function DashboardInfo() {
    const router = useRouter()

    const [site, setSite] = useState<Site | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function loadSite() {
            try {
                setLoading(true)
                setError('')

                const response = await fetch('/api/sites?limit=1', {
                    method: 'GET',
                    credentials: 'include',
                    cache: 'no-store',
                })

                if (!response.ok) {
                    throw new Error('Não foi possível carregar o site.')
                }

                const data = await response.json()

                const userSite = data?.docs?.[0] ?? null

                setSite(userSite)
            } catch (err) {
                console.error(err)
                setError('Não foi possível carregar os dados do seu site.')
            } finally {
                setLoading(false)
            }
        }

        loadSite()
    }, [])

    const siteUrl = site ? `/personal/${site.slug}` : '/'

    const templateName = site?.template === 'template-1' ? 'Template 1' : site?.template || '—'

    const status = site?.published ? 'Online' : 'Rascunho'

    const formattedDate = site?.updatedAt
        ? new Intl.DateTimeFormat('pt-BR', {
              dateStyle: 'medium',
              timeStyle: 'short',
          }).format(new Date(site.updatedAt))
        : '—'

    function handleViewSite() {
        if (!site) return

        window.open(siteUrl, '_blank')
    }

    function handleEditSite() {
        if (!site) return

        router.push(`/dashboard/customize?template=${site.template}`)
    }

    async function handleDeleteSite() {
        if (!site) return

        const confirmed = window.confirm(
            `Tem certeza que deseja excluir o site "${site.name}"? Esta ação não pode ser desfeita.`
        )

        if (!confirmed) return

        try {
            setLoading(true)
            setError('')

            const response = await fetch(`/api/sites/${site.id}`, {
                method: 'DELETE',
                credentials: 'include',
            })

            const result = await response.json().catch(() => null)

            if (!response.ok) {
                throw new Error(result?.errors?.[0]?.message || result?.message || 'Não foi possível excluir o site.')
            }

            setSite(null)
        } catch (err) {
            console.error(err)

            setError(err instanceof Error ? err.message : 'Não foi possível excluir o site.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-[#151817] text-white">
            <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
                {/* TITLE */}
                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium text-[#00e676]">Painel de controle</p>

                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Olá, Julia 👋</h1>

                    <p className="mt-2 text-zinc-500">Gerencie seu site e acompanhe seus resultados.</p>
                </div>

                {/* ERROR */}
                {error && (
                    <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">
                        {error}
                    </div>
                )}

                {/* SITE CARD */}
                <section className="mb-8 overflow-hidden rounded-2xl border border-white/5 bg-[#0d0f0e]">
                    <div className="flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00e676]/10">
                                    <FiGlobe size={21} className="text-[#00e676]" />
                                </div>

                                <div>
                                    <p className="text-xs text-zinc-500">MEU SITE</p>

                                    <h2 className="text-lg font-semibold">
                                        {loading ? 'Carregando...' : site?.name || 'Nenhum site'}
                                    </h2>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span
                                    className={`h-2 w-2 rounded-full ${
                                        site?.published ? 'bg-[#00e676]' : 'bg-yellow-500'
                                    }`}
                                />

                                <span className={`text-sm ${site?.published ? 'text-[#00e676]' : 'text-yellow-500'}`}>
                                    {loading ? 'Carregando...' : status}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={handleViewSite}
                                disabled={!site || !site.published || loading}
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40">
                                Ver meu site
                                <FiExternalLink size={16} />
                            </button>

                            <button
                                onClick={handleEditSite}
                                disabled={!site || loading}
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#00e676] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">
                                <FiEdit3 size={16} />
                                Editar site
                            </button>

                            <button
                                onClick={handleDeleteSite}
                                disabled={!site || loading}
                                className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 px-5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-40">
                                <FiTrash2 size={16} />
                                Excluir site
                            </button>
                        </div>
                    </div>

                    {/* SITE INFO */}
                    <div className="grid border-t border-white/5 sm:grid-cols-3">
                        <div className="border-b border-white/5 p-6 sm:border-b-0 sm:border-r">
                            <p className="text-xs text-zinc-500">TEMPLATE</p>

                            <p className="mt-2 font-medium">{loading ? '—' : templateName}</p>
                        </div>

                        <div className="border-b border-white/5 p-6 sm:border-b-0 sm:border-r">
                            <p className="text-xs text-zinc-500">STATUS</p>

                            <p className={`mt-2 font-medium ${site?.published ? 'text-[#00e676]' : 'text-yellow-500'}`}>
                                {loading ? '—' : status}
                            </p>
                        </div>

                        <div className="p-6">
                            <p className="text-xs text-zinc-500">ÚLTIMA ATUALIZAÇÃO</p>

                            <p className="mt-2 font-medium">{loading ? '—' : formattedDate}</p>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        icon={<FiBarChart2 size={20} />}
                        title="Visualizações"
                        value="—"
                        description="Analytics ainda não configurado"
                    />

                    <StatCard
                        icon={<FiUser size={20} />}
                        title="Visitantes"
                        value="—"
                        description="Analytics ainda não configurado"
                    />

                    <StatCard
                        icon={<FiArrowUpRight size={20} />}
                        title="Cliques WhatsApp"
                        value="—"
                        description="Analytics ainda não configurado"
                    />

                    <StatCard
                        icon={<FiGlobe size={20} />}
                        title="Status do site"
                        value={loading ? '—' : status}
                        description={site?.published ? 'Seu site está publicado' : 'Seu site ainda não está publicado'}
                        success={Boolean(site?.published)}
                    />
                </section>

                {/* BOTTOM */}
                <section className="grid gap-6 lg:grid-cols-3">
                    {/* QUICK ACTIONS */}
                    <div className="rounded-2xl border border-white/5 bg-[#0d0f0e] p-6">
                        <h2 className="text-lg font-semibold">Ações rápidas</h2>

                        <p className="mt-1 text-sm text-zinc-500">Acesse rapidamente as principais funções.</p>

                        <div className="mt-6 space-y-3">
                            <ActionButton
                                icon={<FiEdit3 size={18} />}
                                title="Editar meu site"
                                description="Alterar conteúdo e aparência"
                                onClick={handleEditSite}
                            />

                            <ActionButton
                                icon={<FiUser size={18} />}
                                title="Meu perfil"
                                description="Editar seus dados"
                                onClick={() => router.push('/dashboard/profile')}
                            />

                            <ActionButton
                                icon={<FiSettings size={18} />}
                                title="Configurações"
                                description="Gerenciar sua conta"
                                onClick={() => router.push('/dashboard/settings')}
                            />
                        </div>
                    </div>

                    {/* PERFORMANCE */}
                    <div className="rounded-2xl border border-white/5 bg-[#0d0f0e] p-6 lg:col-span-2">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">Desempenho do site</h2>

                                <p className="mt-1 text-sm text-zinc-500">Acompanhe o crescimento do seu site.</p>
                            </div>

                            <FiBarChart2 size={22} className="text-[#00e676]" />
                        </div>

                        <div className="mt-8 flex h-48 items-center justify-center rounded-xl border border-dashed border-white/5">
                            <div className="text-center">
                                <FiBarChart2 size={28} className="mx-auto mb-3 text-zinc-700" />

                                <p className="text-sm text-zinc-500">Nenhum dado de analytics ainda</p>

                                <p className="mt-1 text-xs text-zinc-700">
                                    Os dados aparecerão aqui quando o analytics estiver configurado.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

function StatCard({
    icon,
    title,
    value,
    description,
    success = false,
}: {
    icon: React.ReactNode
    title: string
    value: string
    description: string
    success?: boolean
}) {
    return (
        <div className="rounded-2xl border border-white/5 bg-[#0d0f0e] p-6">
            <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00e676]/10 text-[#00e676]">
                    {icon}
                </div>
            </div>

            <p className="text-sm text-zinc-500">{title}</p>

            <p className={`mt-2 text-2xl font-bold ${success ? 'text-[#00e676]' : 'text-white'}`}>{value}</p>

            <p className="mt-2 text-xs text-zinc-600">{description}</p>
        </div>
    )
}

function ActionButton({
    icon,
    title,
    description,
    onClick,
}: {
    icon: React.ReactNode
    title: string
    description: string
    onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            className="flex w-full items-center gap-4 rounded-xl border border-white/5 bg-[#151817] p-4 text-left transition hover:border-[#00e676]/20 hover:bg-[#00e676]/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00e676]/10 text-[#00e676]">
                {icon}
            </div>

            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{title}</p>

                <p className="mt-1 text-xs text-zinc-500">{description}</p>
            </div>

            <FiArrowUpRight size={17} className="text-zinc-600" />
        </button>
    )
}
