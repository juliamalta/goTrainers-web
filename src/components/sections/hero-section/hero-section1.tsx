'use client'

import Image from 'next/image'
import Link from 'next/link'

import { HyperText } from '@/components/magicui/hyper'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { Button } from '@/components/ui/button'

export function HeroSection1({
    title,
    desc,
    button1text,
    button1url = '#contato',
    button2text,
    titlePrimary,
    tag,
    img,
}: HeroProps) {
    return (
        <section id="inicio" className="relative mx-auto overflow-hidden px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="container relative z-10 mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* CONTEÚDO ESQUERDO */}
                    <div className="flex flex-col gap-6">
                        {/* TAG */}
                        <div className="lg:items-left flex items-center justify-center lg:justify-start">
                            <HyperText
                                key={titlePrimary}
                                style={{
                                    backgroundColor: 'color-mix(in srgb, var(--malachite-500) 10%, transparent)',
                                }}
                                className="rounded-2xl px-4 text-base font-semibold text-color-malachite">
                                {titlePrimary}
                            </HyperText>
                        </div>

                        {/* TÍTULO */}
                        <h1 className="font-regular w-full text-4xl leading-[1.05] text-white sm:text-5xl md:text-center md:text-6xl lg:text-left lg:text-5xl 2xl:text-7xl">
                            {title}
                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="text-md max-w-2xl text-color-clay sm:text-base md:text-center lg:text-left lg:text-lg">
                            {desc}
                        </p>

                        {/* BOTÕES */}
                        <Link href={button1url} className="mx-auto w-full md:w-2/3 lg:mx-0 lg:w-fit">
                            <InteractiveHoverButton className="w-full rounded-2xl border-color-malachite bg-color-malachite text-center text-sm text-black hover:text-white">
                                {button1text}
                            </InteractiveHoverButton>
                        </Link>
                    </div>

                    {/* IMAGEM DIREITA */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative h-[420px] w-full max-w-[440px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:h-[500px] lg:h-[560px]">
                            <Image
                                src={img!}
                                alt="Personal trainer em academia"
                                fill
                                priority
                                className="object-cover object-center"
                            />

                            {/* Efeito verde discreto */}
                            <div className="to-color-malachite/5 pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
