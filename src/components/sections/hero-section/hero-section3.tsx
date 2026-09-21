'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

import { HyperText } from '@/components/magicui/hyper'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { Button } from '@/components/ui/button'

export function HeroSection3({
    title,
    desc,
    button1text,
    button1url = '#anamnese',
    button2text,
    button2url = '#metodo',
    titlePrimary,
    tag,
    img,
    cardText,
    cardTitle,
}: HeroProps) {
    return (
        <section id="inicio" className="relative mx-auto overflow-hidden bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="container relative z-10 mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* CONTEÚDO ESQUERDO */}
                    <div className="flex flex-col gap-6">
                        {/* TAG */}
                        <div className="flex">
                            <HyperText
                                key={titlePrimary}
                                style={{
                                    backgroundColor: 'var(--soft-gray)',
                                }}
                                className="rounded-2xl px-4 text-base font-semibold text-black">
                                {titlePrimary}
                            </HyperText>
                        </div>

                        {/* TÍTULO */}
                        <h1 className="font-regular w-full text-4xl leading-[1.05] text-color-forest sm:text-5xl md:text-6xl lg:text-7xl">
                            {title}
                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="text-md max-w-2xl text-black sm:text-base lg:text-lg">{desc}</p>

                        <div className="flex w-full flex-col gap-3 sm:flex-row lg:gap-5">
                            <div className="flex w-full flex-col gap-3 md:flex-col lg:flex-row">
                                <InteractiveHoverButton
                                    href={button1url}
                                    className="rounded-2xl border-color-forest bg-color-forest text-center text-sm text-white hover:text-white">
                                    {button1text}
                                </InteractiveHoverButton>

                                <Button
                                    variant="herobuttonsecondary3"
                                    size="hero"
                                    asChild
                                    className="rounded-2xl text-sm">
                                    <Link href={button2url}>{button2text}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* IMAGEM DIREITA */}
                    {/* IMAGEM DIREITA */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative h-[420px] w-full max-w-[440px] sm:h-[500px] lg:h-[560px]">
                            {/* IMAGEM */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <Image
                                    src={img!}
                                    alt="Personal trainer em academia"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />

                                {/* Escurecimento inferior */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* CARD INFERIOR */}
                            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between rounded-full bg-color-softgray px-5 py-4 shadow-xl">
                                <div className="flex items-center gap-3">
                                    {/* Quadrado dourado */}
                                    <div className="bg-[var( --forest)] h-2.5 w-2.5 shrink-0" />
                                    <div>
                                        <p className="text-[var( --forest)] text-xs font-bold uppercase tracking-wide">
                                            {cardTitle}
                                        </p>

                                        <p className="mt-0.5 text-xs font-medium text-color-forest">{cardText}</p>
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

const methodPillars = ['Equilíbrio', 'Confiança', 'Biomecânica', 'Longevidade', 'Movimento', 'Força', 'Saúde']

export function MethodTicker() {
    const tickerItems = [...methodPillars, ...methodPillars]

    return (
        <section aria-label="Pilares do método" className="bg-white pt-10">
            <a
                href="#metodo"
                className="mx-auto flex w-fit flex-col items-center gap-1.5 px-6 pb-20 text-xs font-medium uppercase tracking-[0.14em] text-color-forest transition-opacity hover:opacity-70">
                Descubra o método
                <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>

            <div className="method-ticker overflow-hidden bg-color-softgray py-6">
                <div className="method-ticker__track flex w-max items-center gap-9 whitespace-nowrap px-5 text-xs font-semibold uppercase tracking-[0.28em] text-color-forest sm:gap-12 sm:px-8 sm:text-sm">
                    {tickerItems.map((pillar, index) => (
                        <span key={`${pillar}-${index}`} className="flex items-center gap-9 sm:gap-12">
                            <span>•</span>
                            <span>{pillar}</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
