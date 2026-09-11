'use client'

import * as React from 'react'

import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'
import { BlurFade } from '@/components/magicui/blur-fade'

import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

import CardTemplate from '@/components/core/CardPrimary/card-template'

function Cards4({ cards, title, desc, titlePrimary }: CardSectionProps) {
    return (
        <section id="trabalho" className="bg-color-woodsmoke py-16 sm:py-24">
            <AnimatedTechBackground />

            <div className="container mx-auto">
                <div className="flex gap-2">
                    <div className="flex w-full flex-col items-center gap-4">
                        <p className="text-base font-semibold text-color-malachite">{titlePrimary}</p>

                        <BlurFade delay={0.15} direction="down" inView>
                            <p className="text-3xl font-semibold text-white">{title}</p>
                        </BlurFade>
                        <BlurFade delay={0.15 * 1.5} direction="down" inView>
                            <p className="mx-auto text-base font-normal text-color-clay">{desc}</p>
                        </BlurFade>
                    </div>
                </div>

                <div className="mx-auto mt-10">
                    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {cards?.map((card, index) => (
                            <div key={index} className="h-full">
                                <CardTemplate
                                    tag={card.tag ?? []}
                                    title={card.title}
                                    description={card.desc}
                                    img={card.img}
                                    link={card.link}
                                    buttonText={card.buttonText!}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards4
