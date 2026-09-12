'use client'
import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import CardPlan from '@/components/core/CardPrimary/Card-plan'

function Cards5({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="mx-8 rounded-2xl bg-color-woodsmoke py-24 sm:pb-24">
            <div className="container mx-auto flex flex-col items-center justify-center gap-12">
                <div className="w-full">
                    <p className="text-center text-4xl font-semibold text-white">{title}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-3">
                    {cards!.map((card, index) => (
                        <CardPlan
                            desc={card.desc}
                            key={index}
                            featured={!card.featured}
                            title={card.title}
                            text={card.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards5
