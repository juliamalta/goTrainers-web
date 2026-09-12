'use client'

import Link from 'next/link'

import { HyperText } from '@/components/magicui/hyper'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { Button } from '@/components/ui/button'

export function HeroSection({ title, desc, button1text, button2text, titlePrimary, tag }: HeroProps) {
    return (
        <section id="inicio" className="relative mx-auto overflow-hidden px-2 py-24 sm:py-24">
            {/* Background com opacidade */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage: "url('/images/bgof.png')",
                }}
            />

            {/* Conteúdo */}
            <div className="container relative z-10 flex flex-col gap-6">
                <div className="flex">
                    <HyperText
                        style={{
                            backgroundColor: 'color-mix(in srgb, var(--malachite-500) 10%, transparent)',
                        }}
                        className="rounded-2xl px-4 text-base font-semibold text-color-malachite">
                        {titlePrimary}
                    </HyperText>
                </div>

                <h1 className="font-regular w-full text-3xl text-white md:text-6xl lg:w-2/3">{title}</h1>

                <p className="text-md text-color-clay sm:text-base lg:w-2/5">{desc}</p>

                <div className="flex w-full flex-col gap-3 sm:flex-row lg:gap-5">
                    <div className="flex w-full flex-col gap-3 sm:flex-row">
                        <InteractiveHoverButton className="rounded-2xl border-color-malachite bg-color-malachite text-center text-sm text-black hover:text-white">
                            <Link href="/auth">{button1text}</Link>
                        </InteractiveHoverButton>

                        <Button variant="herobuttonsecondary" size="hero" asChild className="rounded-2xl text-sm">
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
        </section>
    )
}
