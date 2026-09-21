'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { HyperText } from '@/components/magicui/hyper'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { Button } from '@/components/ui/button'

export function HeroSection2({
    title,
    desc,
    button1text,
    button1url = '#contato',
    button2text,
    button2url = '#trabalho',
    titlePrimary,
    tag,
    img,
    cardText,
    cardTitle,
}: HeroProps) {
    const fallbackImage = '/images/imag2.png'

    const [imageSrc, setImageSrc] = useState(img ?? fallbackImage)

    useEffect(() => {
        setImageSrc(img ?? fallbackImage)
    }, [img])

    return (
        <section
            id="inicio"
            className="relative mx-auto overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-12 lg:py-24">
            <div className="container relative z-10 mx-auto">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    {/* CONTEÚDO */}
                    <div className="flex min-w-0 flex-col items-center gap-5 text-center sm:gap-6 lg:items-start lg:text-left">
                        {/* TAG SUPERIOR */}
                        {titlePrimary && (
                            <div className="flex max-w-full">
                                <HyperText
                                    key={titlePrimary}
                                    style={{
                                        backgroundColor: 'color-mix(in srgb, var(--saffron-300) 10%, transparent)',
                                    }}
                                    className="max-w-full rounded-2xl px-3 py-1 text-sm font-semibold text-color-saffron sm:px-4 sm:text-base">
                                    {titlePrimary}
                                </HyperText>
                            </div>
                        )}

                        {/* TÍTULO */}
                        <h1 className="w-full max-w-3xl text-4xl font-normal leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                            {title}
                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="max-w-2xl text-sm leading-relaxed text-color-sisal sm:text-base lg:text-lg">
                            {desc}
                        </p>

                        {/* BOTÕES */}
                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center lg:justify-start lg:gap-4">
                            <InteractiveHoverButton
                                href={button1url}
                                className="w-full rounded-2xl border-color-saffron bg-color-saffron text-center text-sm text-black hover:text-white sm:w-auto">
                                {button1text}
                            </InteractiveHoverButton>

                            {button2text && (
                                <Button
                                    variant="herobuttonsecondary2"
                                    size="hero"
                                    asChild
                                    className="w-full rounded-2xl text-sm sm:w-auto">
                                    <Link href={button2url}>{button2text}</Link>
                                </Button>
                            )}
                        </div>

                        {/* TAGS */}
                        {tag && tag.length > 0 && (
                            <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-2 lg:justify-start">
                                {tag.map((tags, index) => (
                                    <div key={index} className="flex shrink-0 items-center gap-2">
                                        {tags.icon}

                                        <p className="text-sm text-white sm:text-base">{tags.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* IMAGEM */}
                    <div className="relative flex w-full justify-center lg:justify-end">
                        <div className="relative h-[380px] w-full max-w-[440px] sm:h-[480px] md:h-[520px] lg:h-[560px]">
                            {/* FOTO */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={imageSrc}
                                    alt="Personal trainer em academia"
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 440px, 440px"
                                    className="object-cover object-center"
                                    onError={() => setImageSrc(fallbackImage)}
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* CARD INFERIOR */}
                            {(cardTitle || cardText) && (
                                <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#1c1c1c] px-4 py-3 shadow-xl sm:bottom-5 sm:left-5 sm:right-5 sm:px-5 sm:py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-2.5 w-2.5 shrink-0 bg-[var(--saffron-300)]" />

                                        <div className="min-w-0">
                                            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--saffron-300)] sm:text-xs">
                                                {cardTitle}
                                            </p>

                                            <p className="mt-0.5 text-[11px] font-medium leading-relaxed text-white/60 sm:text-xs">
                                                {cardText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
