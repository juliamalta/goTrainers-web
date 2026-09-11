'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bell, ChevronDown, ExternalLink, LayoutDashboard, LogOut, Settings, User } from 'lucide-react'

interface UserData {
    name: string
    email: string
    avatar?: string
}

interface NavigationHeader2Props {
    user: UserData
}

export default function NavigationHeader2({ user }: NavigationHeader2Props) {
    const [open, setOpen] = useState(false)

    const initials = user.name
        .split(' ')
        .map((name) => name[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

    return (
        <section className="sticky top-0 z-30 bg-[#111111]">
            <nav className="container flex h-[97px] items-center justify-between">
                {/* Logo */}
                <div className="flex items-start">
                    <Link href="/dashboard" className="block max-w-max">
                        <Image width={172} height={73} src="/images/logo.png" alt="GoTrainers" priority />
                    </Link>
                </div>

                {/* Navegação */}
                <div className="hidden justify-center lg:flex">
                    <ul className="flex flex-row items-center justify-between gap-12">
                        <li>
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2 text-base text-white transition hover:text-[#00D084]">
                                <LayoutDashboard size={17} />
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/dashboard/customize"
                                className="text-base text-white transition hover:text-[#00D084]">
                                Personalizar
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/"
                                target="_blank"
                                className="flex items-center gap-2 text-base text-white transition hover:text-[#00D084]">
                                Meu site
                                <ExternalLink size={15} />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Área do usuário */}
                <div className="relative flex items-center gap-4">
                    {/* Notificações */}
                    <button
                        type="button"
                        aria-label="Notificações"
                        className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                        <Bell size={19} />

                        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#00D084]" />
                    </button>

                    {/* Avatar e nome */}
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
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

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-2xl">
                            {/* Informações do usuário */}
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

                            {/* Opções */}
                            <div className="p-2">
                                <Link
                                    href="/dashboard/profile"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                    <User size={17} />
                                    Meu perfil
                                </Link>

                                <Link
                                    href="/dashboard/settings"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                    <Settings size={17} />
                                    Configurações
                                </Link>

                                <Link
                                    href="/"
                                    target="_blank"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-[#1a1a1a] hover:text-[#00D084]">
                                    <ExternalLink size={17} />
                                    Ver meu site
                                </Link>
                            </div>

                            {/* Sair */}
                            <div className="border-t border-white/10 p-2">
                                <button
                                    type="button"
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white transition hover:bg-red-500/10 hover:text-red-400">
                                    <LogOut size={17} />
                                    Sair
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </section>
    )
}
