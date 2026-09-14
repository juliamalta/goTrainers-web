'use client'

import { FiArrowUpRight, FiBarChart2, FiEdit3, FiExternalLink, FiGlobe, FiSettings, FiUser } from 'react-icons/fi'

import { useRouter } from 'next/navigation'

export default function DashboardInfo() {
    const router = useRouter()

    return (
        <main className="min-h-screen bg-[#151817] text-white">
            {/* CONTENT */}
            <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
                {/* TITLE */}
                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium text-[#00e676]">Painel de controle</p>

                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Olá, Julia 👋</h1>

                    <p className="mt-2 text-zinc-500">Gerencie seu site e acompanhe seus resultados.</p>
                </div>

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

                                    <h2 className="text-lg font-semibold">Meu site Fitness</h2>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#00e676]" />

                                <span className="text-sm text-[#00e676]">Publicado</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={() => router.push('/')}
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                                Ver meu site
                                <FiExternalLink size={16} />
                            </button>

                            <button
                                onClick={() => router.push('/dashboard/customize?template=fitness')}
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#00e676] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                                <FiEdit3 size={16} />
                                Editar site
                            </button>
                        </div>
                    </div>

                    {/* SITE INFO */}
                    <div className="grid border-t border-white/5 sm:grid-cols-3">
                        <div className="border-b border-white/5 p-6 sm:border-b-0 sm:border-r">
                            <p className="text-xs text-zinc-500">TEMPLATE</p>

                            <p className="mt-2 font-medium">Fitness</p>
                        </div>

                        <div className="border-b border-white/5 p-6 sm:border-b-0 sm:border-r">
                            <p className="text-xs text-zinc-500">STATUS</p>

                            <p className="mt-2 font-medium text-[#00e676]">Online</p>
                        </div>

                        <div className="p-6">
                            <p className="text-xs text-zinc-500">ÚLTIMA ATUALIZAÇÃO</p>

                            <p className="mt-2 font-medium">Agora mesmo</p>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        icon={<FiBarChart2 size={20} />}
                        title="Visualizações"
                        value="1.248"
                        description="+12% este mês"
                    />

                    <StatCard icon={<FiUser size={20} />} title="Visitantes" value="846" description="+8% este mês" />

                    <StatCard
                        icon={<FiArrowUpRight size={20} />}
                        title="Cliques WhatsApp"
                        value="126"
                        description="+18% este mês"
                    />

                    <StatCard
                        icon={<FiGlobe size={20} />}
                        title="Status do site"
                        value="Online"
                        description="Tudo funcionando"
                        success
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
                                onClick={() => router.push('/dashboard/customize?template=fitness')}
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

                        <div className="mt-8 flex h-48 items-end gap-3">
                            {[35, 48, 42, 65, 58, 78, 70, 92, 82, 100, 88, 96].map((height, index) => (
                                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                                    <div
                                        className="w-full rounded-t-md bg-[#00e676]/70 transition hover:bg-[#00e676]"
                                        style={{
                                            height: `${height}%`,
                                        }}
                                    />

                                    <span className="text-[10px] text-zinc-600">{index + 1}</span>
                                </div>
                            ))}
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
