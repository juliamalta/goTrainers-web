'use client'
import * as React from 'react'

import { CardPrimary, CardSecondary } from '@/components/core/CardPrimary'
import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card2({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="py-16 sm:pb-24">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8">
                <div className="w-full">
                    <p className="text-center text-4xl font-semibold text-white">{title}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card, index) => (
                        <CardSecondary
                            key={index}
                            icon={card.icon}
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

export default Card2
