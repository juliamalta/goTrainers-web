'use client'
import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card1({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="bg-color-woodsmoke border-[1px] border-color-malachite rounded-2xl m-8 py-24 sm:pb-24">
            <div className="container mx-auto flex flex-col items-center justify-center gap-12">
                <div className="w-full">
                    <p className="text-center text-4xl font-semibold text-white">{title}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4">
                    {cards.map((card, index) => (
                        <CardPrimary
                            key={index}
                            number={card.number}
                            title={card.title}
                            text={card.text}
                            iconBgColor={card.iconBgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Card1
