'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Bell, ChevronDown, ExternalLink, LayoutDashboard, LogOut, Settings, User } from 'lucide-react'

interface UserData {
    name: string
    email: string
    avatar?: string
}

interface NavigationHeader2Props {
    user: UserData
    hasPublishedSite: boolean
    siteUrl?: string
    dashboardHref?: string
}

export default function NavigationHeader2({ user, hasPublishedSite, siteUrl, dashboardHref }: NavigationHeader2Props) {
    const [open, setOpen] = useState(false)
    const [loggingOut, setLoggingOut] = useState(false)

    const router = useRouter()

    const initials = user.name
        .split(' ')
        .map((name) => name[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

    /*
     * Se o layout não mandar dashboardHref,
     * usamos o comportamento padrão.
     */
    const finalDashboardHref = dashboardHref || (hasPublishedSite ? '/dashboard/info' : '/dashboard')

    /*
     * LOGOUT
     */
    async function handleLogout() {
        if (loggingOut) return

        setLoggingOut(true)

        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                credentials: 'include',
            })

            if (!response.ok) {
                console.error('Erro ao fazer logout.')
            }
        } catch (error) {
            console.error('Erro ao fazer logout:', error)
        } finally {
            setOpen(false)

            /*
             * Vai para o login e atualiza o estado
             * do servidor.
             */
            router.replace('/auth')
            router.refresh()

            setLoggingOut(false)
        }
    }

    return (
        <section className="sticky top-0 z-30 bg-[#111111]">
            <nav className="container flex h-[97px] items-center justify-between">
                {/* =====================================================
                    LOGO
                ====================================================== */}
                <div className="flex items-start">
                    <Link href="/" className="block max-w-max">
                        <Image width={172} height={73} src="/images/logo.png" alt="GoTrainers" priority />
                    </Link>
                </div>

                {/* =====================================================
                    NAVEGAÇÃO
                ====================================================== */}
                <div className="hidden justify-center lg:flex">
                    <ul className="flex flex-row items-center justify-between gap-12">
                        {/* DASHBOARD */}
                        <li>
                            <Link
                                href={finalDashboardHref}
                                className="flex items-center gap-2 text-base text-white transition hover:text-[#00D084]">
                                <LayoutDashboard size={17} />
                                Dashboard
                            </Link>
                        </li>

                        {/* PERSONALIZAR */}
                        <li>
                            <Link
                                href="/dashboard/customize"
                                className="text-base text-white transition hover:text-[#00D084]">
                                Personalizar
                            </Link>
                        </li>

                        {/* MEU SITE
                            Só aparece depois que publicou.
                        */}
                        {hasPublishedSite && siteUrl && (
                            <li>
                                <Link
                                    href={siteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-base text-white transition hover:text-[#00D084]">
                                    Meu site
                                    <ExternalLink size={15} />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {/* =====================================================
                    ÁREA DO USUÁRIO
                ====================================================== */}
                <div className="relative flex items-center gap-4">
                    {/* NOTIFICAÇÕES */}
                    <button
                        type="button"
                        aria-label="Notificações"
                        className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                        <Bell size={19} />

                        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#00D084]" />
                    </button>

                    {/* =================================================
                        AVATAR / USUÁRIO
                    ================================================== */}
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-[#1a1a1a]">
                        {user.avatar ? (
                            <Image
                                src={user.avatar}
                                alt={user.name}
                                width={42}
                                height={42}
                                className="h-[42px] w-[42px] rounded-full object-cover"
                            />
                        ) : (
                            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#00D084] text-sm font-bold text-black">
                                {initials}
                            </div>
                        )}

                        <div className="hidden text-left sm:block">
                            <p className="text-sm font-medium text-white">{user.name}</p>

                            <p className="text-xs text-[#999999]">Personal Trainer</p>
                        </div>

                        <ChevronDown size={16} className={`text-[#999999] transition ${open ? 'rotate-180' : ''}`} />
                    </button>

                    {/* =================================================
                        DROPDOWN
                    ================================================== */}
                    {open && (
                        <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-2xl">
                            {/* INFORMAÇÕES DO USUÁRIO */}
                            <div className="border-b border-white/10 p-4">
                                <div className="flex items-center gap-3">
                                    {user.avatar ? (
                                        <Image
                                            src={user.avatar}
                                            alt={user.name}
                                            width={42}
                                            height={42}
                                            className="h-[42px] w-[42px] rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#00D084] text-sm font-bold text-black">
                                            {initials}
                                        </div>
                                    )}

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-medium text-white">{user.name}</p>

                                        <p className="truncate text-xs text-[#999999]">{user.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* OPÇÕES */}
                            <div className="p-2">
                                {/* DASHBOARD */}
                                <Link
                                    href={finalDashboardHref}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                    <LayoutDashboard size={17} />
                                    Dashboard
                                </Link>

                                {/* PERSONALIZAR */}
                                <Link
                                    href="/dashboard/customize"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                    <LayoutDashboard size={17} />
                                    Personalizar
                                </Link>

                                {/* MEU PERFIL */}
                                <Link
                                    href="/dashboard/profile"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                    <User size={17} />
                                    Meu perfil
                                </Link>

                                {/* CONFIGURAÇÕES */}
                                <Link
                                    href="/dashboard/settings"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                    <Settings size={17} />
                                    Configurações
                                </Link>

                                {/* VER MEU SITE
                                    Só aparece depois de publicar.
                                */}
                                {hasPublishedSite && siteUrl && (
                                    <Link
                                        href={siteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                        <ExternalLink size={17} />
                                        Ver meu site
                                    </Link>
                                )}
                            </div>

                            {/* =================================================
                                SAIR
                            ================================================== */}
                            <div className="border-t border-white/10 p-2">
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    disabled={loggingOut}
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-red-500/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50">
                                    <LogOut size={17} />

                                    {loggingOut ? 'Saindo...' : 'Sair'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </section>
    )
}
