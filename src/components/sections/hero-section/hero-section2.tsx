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
    button2text,
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
        <section id="inicio" className="relative mx-auto overflow-hidden px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="container relative z-10 mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* CONTEÚDO ESQUERDO */}
                    <div className="flex flex-col gap-6">
                        {/* TAG */}
                        <div className="flex">
                            <HyperText
                                key={titlePrimary}
                                style={{
                                    backgroundColor: 'color-mix(in srgb, var(--saffron-300) 10%, transparent)',
                                }}
                                className="rounded-2xl px-4 text-base font-semibold text-color-saffron">
                                {titlePrimary}
                            </HyperText>
                        </div>

                        {/* TÍTULO */}
                        <h1 className="font-regular w-full text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            {title}
                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="text-md max-w-2xl text-color-sisal sm:text-base lg:text-lg">{desc}</p>

                        <div className="flex w-full flex-col gap-3 sm:flex-row lg:gap-5">
                            <div className="flex w-full flex-col gap-3 sm:flex-row">
                                <InteractiveHoverButton
                                    href="/auth"
                                    className="rounded-2xl border-color-saffron bg-color-saffron text-center text-sm text-black hover:text-white">
                                    {button1text}
                                </InteractiveHoverButton>

                                <Button
                                    variant="herobuttonsecondary2"
                                    size="hero"
                                    asChild
                                    className="rounded-2xl text-sm">
                                    <Link href="#trabalho">{button2text}</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-8 sm:flex-row">
                            {tag!.map((tags, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    {tags.icon}

                                    <p className="text-md text-white">{tags.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* IMAGEM DIREITA */}
                    {/* IMAGEM DIREITA */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative h-[420px] w-full max-w-[440px] sm:h-[500px] lg:h-[560px]">
                            {/* IMAGEM */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={imageSrc}
                                    alt="Personal trainer em academia"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                    onError={() => setImageSrc(fallbackImage)}
                                />

                                {/* Escurecimento inferior */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* CARD INFERIOR */}
                            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between bg-[#1c1c1c] px-5 py-4 shadow-xl">
                                <div className="flex items-center gap-3">
                                    {/* Quadrado dourado */}
                                    <div className="h-2.5 w-2.5 shrink-0 bg-[var(--saffron-300)]" />

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide text-[var(--saffron-300)]">
                                            {cardTitle}
                                        </p>

                                        <p className="mt-0.5 text-xs font-medium text-white/60">{cardText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
