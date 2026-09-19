'use client'

import { ExternalLink, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import UserMenu, { type UserMenuProps } from './UserMenu'

export default function NavigationHeader2({
    user,
    hasPublishedSite,
    siteUrl,
    dashboardHref,
    customizeHref,
}: UserMenuProps) {
    const finalDashboardHref = dashboardHref || (hasPublishedSite ? '/dashboard/info' : '/dashboard')
    const searchParams = useSearchParams()
    const selectedTemplate = searchParams.get('template')
    const currentCustomizeHref = selectedTemplate
        ? `/dashboard/customize?template=${encodeURIComponent(selectedTemplate)}`
        : customizeHref || '/dashboard/customize'

    return (
        <section className="sticky top-0 z-30 bg-color-codgray">
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
                                className="flex items-center gap-2 text-base text-white transition hover:text-color-malachite">
                                <LayoutDashboard size={17} />
                                Dashboard
                            </Link>
                        </li>

                        {/* PERSONALIZAR */}
                        <li>
                            <Link
                                href={currentCustomizeHref}
                                className="text-base text-white transition hover:text-color-malachite">
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
                                    className="flex items-center gap-2 text-base text-white transition hover:text-color-malachite">
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
                <UserMenu
                    user={user}
                    hasPublishedSite={hasPublishedSite}
                    siteUrl={siteUrl}
                    dashboardHref={dashboardHref}
                    customizeHref={currentCustomizeHref}
                />
            </nav>
        </section>
    )
}
