'use client'

import { Bell, ChevronDown, ExternalLink, LayoutDashboard, LogOut, Settings, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export interface UserData {
    name: string
    email: string
    avatar?: string
}

export interface UserMenuProps {
    user: UserData
    hasPublishedSite: boolean
    siteUrl?: string
    dashboardHref?: string
}

export default function UserMenu({ user, hasPublishedSite, siteUrl, dashboardHref }: UserMenuProps) {
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
        <div className="relative flex items-center gap-4">
            {/* NOTIFICAÇÕES */}
            <button
                type="button"
                aria-label="Notificações"
                className="relative hidden size-10 items-center justify-center rounded-full text-white transition hover:bg-color-woodsmoke hover:text-color-malachite sm:flex">
                <Bell size={19} />

                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-color-malachite" />
            </button>

            {/* =================================================
                        AVATAR / USUÁRIO
                    ================================================== */}
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-label={`Menu da conta de ${user.name}`}
                className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-color-woodsmoke">
                {user.avatar ? (
                    <Image
                        src={user.avatar}
                        alt={user.name}
                        width={42}
                        height={42}
                        className="size-[42px] rounded-full object-cover"
                    />
                ) : (
                    <div className="flex size-[42px] items-center justify-center rounded-full bg-color-malachite text-sm font-bold text-black">
                        {initials}
                    </div>
                )}

                <div className="hidden text-left sm:block">
                    <p className="text-sm font-medium text-white">{user.name}</p>

                    <p className="text-xs text-color-clay">Personal Trainer</p>
                </div>

                <ChevronDown size={16} className={`text-color-clay transition ${open ? 'rotate-180' : ''}`} />
            </button>

            {/* =================================================
                        DROPDOWN
                    ================================================== */}
            {open && (
                <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-xl border border-white/10 bg-color-codgray shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                    {/* INFORMAÇÕES DO USUÁRIO */}
                    <div className="border-b border-white/10 p-4">
                        <div className="flex items-center gap-3">
                            {user.avatar ? (
                                <Image
                                    src={user.avatar}
                                    alt={user.name}
                                    width={42}
                                    height={42}
                                    className="size-[42px] rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-color-malachite text-sm font-bold text-black">
                                    {initials}
                                </div>
                            )}

                            <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-white">{user.name}</p>

                                <p className="truncate text-xs text-color-clay">{user.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* OPÇÕES */}
                    <div className="p-2">
                        {/* DASHBOARD */}
                        <Link
                            href={finalDashboardHref}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-color-woodsmoke hover:text-color-malachite">
                            <LayoutDashboard size={17} />
                            Dashboard
                        </Link>

                        {/* PERSONALIZAR */}
                        <Link
                            href="/dashboard/customize"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-color-woodsmoke hover:text-color-malachite">
                            <LayoutDashboard size={17} />
                            Personalizar
                        </Link>

                        {/* MEU PERFIL */}
                        <Link
                            href="/dashboard/profile"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-color-woodsmoke hover:text-color-malachite">
                            <User size={17} />
                            Meu perfil
                        </Link>

                        {/* CONFIGURAÇÕES */}
                        <Link
                            href="/dashboard/settings"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-color-woodsmoke hover:text-color-malachite">
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
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-color-woodsmoke hover:text-color-malachite">
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
    )
}
