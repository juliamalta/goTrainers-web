'use client'

import Image, { type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
import { IoIosArrowDropright } from 'react-icons/io'
import { MdVerified } from 'react-icons/md'

import { HyperText } from '@/components/magicui/hyper'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'

export type HeroSection5Card = {
    title: string
    description: string
    href: string
    icon?: ReactNode
    highlighted?: boolean
    mostPopular?: boolean
}

export type HeroSection5SocialLink = {
    href: string
    label: string
    icon: ReactNode
}

export type HeroSection5Theme = 'neon' | 'white' | 'feminine' | 'blue' | 'sunset'

type HeroSection5Props = Pick<HeroProps, 'titlePrimary'> & {
    cards: HeroSection5Card[]
    socialLinks?: HeroSection5SocialLink[]
    profileImage?: string | StaticImageData
    profileName: string
    profileUsername: string
    profileDescription: string
    theme?: HeroSection5Theme
}

export function HeroSection5({
    titlePrimary,
    cards,
    socialLinks = [],
    profileImage,
    profileName,
    profileUsername,
    profileDescription,
    theme = 'neon',
}: HeroSection5Props) {
    return (
        <section
            id="inicio"
            data-template5-theme={theme}
            className="relative mx-auto min-h-screen overflow-hidden bg-color-template5-background px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-12 lg:py-24">
            <div className="container relative z-10 mx-auto flex flex-col items-center justify-center gap-8">
                {titlePrimary && (
                    <div className="flex max-w-full items-center justify-center rounded-full border border-color-template5-border-strong bg-color-template5-lime-wash px-3 py-1 sm:px-4">
                        <span
                            aria-hidden="true"
                            className="mr-2 size-2 shrink-0 animate-pulse rounded-full bg-color-template5-lime shadow-[0_0_8px_var(--template5-lime)]"
                        />
                        <HyperText
                            key={titlePrimary}
                            className="max-w-full px-0 py-0 text-sm font-semibold text-color-template5-text-muted sm:text-base">
                            {titlePrimary}
                        </HyperText>
                    </div>
                )}

                {profileImage && (
                    <div className="relative size-40 rounded-full border-4 border-color-template5-lime p-1 shadow-[0_0_24px_var(--template5-lime)]">
                        <div className="relative size-full overflow-hidden rounded-full">
                            <Image
                                src={profileImage}
                                alt="Foto de perfil"
                                fill
                                sizes="256px"
                                className="object-cover"
                            />
                        </div>
                        <span
                            aria-hidden="true"
                            className="absolute bottom-1 right-0 size-8 animate-pulse rounded-full border-4 border-color-template5-background bg-color-template5-lime shadow-[0_0_14px_var(--template5-lime)]"
                        />
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-4">
                        <h1 className="text-center text-2xl text-color-template5-text">{profileName}</h1>
                        <MdVerified className="text-color-template5-lime" size={24} />
                    </div>
                    <p className="text-center text-color-template5-lime">{profileUsername}</p>
                    <p className="mx-auto w-full text-center text-color-template5-text-subtle 2xl:w-2/3">
                        &quot;{profileDescription}&quot;
                    </p>
                </div>

                {socialLinks.length > 0 && (
                    <div className="flex items-center justify-center gap-4">
                        {socialLinks.map((social: HeroSection5SocialLink) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                                className="flex size-14 items-center justify-center rounded-2xl border border-color-template5-border bg-color-template5-surface text-color-template5-text transition hover:border-color-template5-lime hover:text-color-template5-lime">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                )}

                <div className="flex w-full max-w-md flex-col gap-3">
                    {cards.map((card: HeroSection5Card) => (
                        <a
                            key={card.title}
                            href={card.href}
                            target={card.href.startsWith('http') ? '_blank' : undefined}
                            rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                            className={`${card.highlighted ? 'bg-color-template5-lime' : 'bg-color-template5-surface'} ${card.mostPopular ? 'border-2 border-color-template5-lime' : ''} relative flex items-center justify-between gap-3 rounded-2xl p-4`}>
                            {card.mostPopular && (
                                <span className="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl bg-color-template5-lime px-3 py-1 text-[10px] font-bold uppercase text-[var(--template5-highlight-text)]">
                                    ★ MAIS PROCURADO
                                </span>
                            )}
                            {card.icon && (
                                <div
                                    className={`${card.highlighted ? 'bg-color-template5-background text-color-template5-lime' : 'bg-color-template5-surface text-color-template5-text'} flex h-10 w-10 items-center justify-center rounded-2xl`}>
                                    {card.icon}
                                </div>
                            )}
                            <div className="flex-1 text-left">
                                <h2
                                    className={`${card.highlighted ? 'text-[var(--template5-highlight-text)]' : 'text-color-template5-text'} text-lg font-bold`}>
                                    {card.title}
                                </h2>
                                <p
                                    className={`${card.highlighted ? 'text-[var(--template5-highlight-text)]' : 'text-color-template5-text-muted'} text-left text-xs`}>
                                    {card.description}
                                </p>
                            </div>
                            <div className="flex w-10 justify-end">
                                <IoIosArrowDropright
                                    size={26}
                                    color="currentColor"
                                    className={
                                        card.highlighted
                                            ? 'text-[var(--template5-highlight-text)]'
                                            : 'text-color-template5-text'
                                    }
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
