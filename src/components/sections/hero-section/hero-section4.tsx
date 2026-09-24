'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BadgeCheck, Check } from 'lucide-react'

import { HyperText } from '@/components/magicui/hyper'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { Button } from '@/components/ui/button'

export function HeroSection4({
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
    offer,
}: HeroProps) {
    const fallbackImage = '/images/imag2.png'

    const [imageSrc, setImageSrc] = useState(img ?? fallbackImage)

    useEffect(() => {
        setImageSrc(img ?? fallbackImage)
    }, [img])

    return (
        <section
            id="inicio"
            className="relative mx-auto overflow-hidden bg-color-ivory px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-12 lg:py-24">
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
                                        backgroundColor: 'color-mix(in srgb, var(--dusty-rose) 10%, transparent)',
                                    }}
                                    className="max-w-full rounded-2xl px-3 py-1 text-sm font-semibold text-color-burgundy sm:px-4 sm:text-base">
                                    {titlePrimary}
                                </HyperText>
                            </div>
                        )}

                        {/* TÍTULO */}
                        <h1 className="w-full max-w-3xl text-4xl font-normal leading-[1.05] text-color-burgundy sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl">
                            {title}
                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="max-w-2xl text-sm leading-relaxed text-color-neutralGray sm:text-base lg:text-lg">
                            {desc}
                        </p>

                        {/* BOTÕES */}
                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center lg:justify-start lg:gap-4">
                            <InteractiveHoverButton
                                href={button1url}
                                className="w-full rounded-2xl border-color-saffron bg-color-dustyRose text-center text-sm text-black hover:text-white sm:w-auto">
                                {button1text}
                            </InteractiveHoverButton>

                            {button2text && (
                                <Button
                                    variant="herobuttonsecondary4"
                                    size="hero"
                                    asChild
                                    className="w-full rounded-2xl text-sm sm:w-auto">
                                    <Link href={button2url}>{button2text}</Link>
                                </Button>
                            )}
                        </div>
                        {/* OFERTA ESPECIAL */}
                        {offer && (
                            <div className="w-full max-w-3xl rounded-3xl border border-[#ebe5df] bg-color-ivory px-4 py-4 text-left shadow-[0_12px_30px_rgba(74,25,44,0.06)] sm:px-6 sm:py-5">
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm sm:text-base">
                                    <span className="font-semibold uppercase tracking-wide text-color-neutralGray">
                                        {offer.label}
                                    </span>
                                    <span className="text-color-neutralGray line-through">{offer.originalPrice}</span>
                                    <span className="font-medium text-color-burgundy">Por</span>
                                    <span className="text-4xl font-bold leading-none text-color-forestGreen sm:text-5xl">
                                        {offer.price}
                                    </span>
                                    <span className="text-color-neutralGray">{offer.suffix}</span>
                                </div>

                                <div className="mt-3 flex items-start gap-2 text-sm text-color-burgundy sm:text-base">
                                    <Check
                                        className="mt-0.5 size-5 shrink-0 text-color-forestGreen"
                                        strokeWidth={2.5}
                                        aria-hidden="true"
                                    />
                                    <span>{offer.savings}</span>
                                </div>
                            </div>
                        )}

                        {/* TAGS */}
                        {tag && tag.length > 0 && (
                            <div className="flex flex-col gap-8 md:flex-row">
                                {tag.map((tags, index) => (
                                    <div key={index} className="flex shrink-0 items-center gap-2">
                                        {tags.icon}

                                        <p className="text-sm text-color-burgundy sm:text-base">{tags.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* IMAGEM */}
                    <div className="relative flex w-full justify-center lg:justify-end">
                        <div className="relative h-[430px] w-full max-w-[440px] sm:h-[530px] md:h-[570px] lg:h-[610px]">
                            {/* MOLDURA DA FOTO */}
                            <div className="absolute inset-x-2 bottom-5 top-3 rounded-[2.5rem] bg-[#e8e8e3] p-3 shadow-[0_20px_45px_rgba(74,25,44,0.08)] sm:inset-x-3 sm:p-4">
                                <div className="relative h-full overflow-hidden rounded-[2rem] border-[5px] border-white">
                                    <Image
                                        src={imageSrc}
                                        alt="Personal trainer em academia"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 440px, 440px"
                                        className="object-cover object-center"
                                        onError={() => setImageSrc(fallbackImage)}
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* SELO DE EXPERIÊNCIA */}
                            <div className="absolute right-0 top-0 z-20 flex items-center gap-2 rounded-l-2xl rounded-br-2xl bg-color-burgundy px-4 py-3 text-white shadow-lg sm:gap-3 sm:px-5 sm:py-4">
                                <span className="text-2xl font-bold leading-none sm:text-3xl">+9</span>

                                <span className="flex flex-col text-[10px] font-semibold uppercase leading-tight tracking-wide sm:text-xs">
                                    <span className="text-white/70">Anos de</span>
                                    <span className="normal-case tracking-normal text-white">Experiência Real</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
