'use client'

import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import CardTemplate from '@/components/core/CardPrimary/card-template'
import CardTemplate1 from '@/components/core/CardPrimary/CardTemplate'

function Card1({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="como-funciona" className="scroll-mt-28 bg-color-warmwhite py-24 sm:py-28">
            <div className="container mx-auto flex flex-col gap-12 px-4">
                {/* Título */}
                <div className="w-full">
                    <div className="mb-10 flex items-center gap-4">
                        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-color-forest md:text-base">
                            Processo Estruturado
                        </span>
                    </div>
                    <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-color-forest sm:text-5xl lg:text-6xl">
                        {title}
                    </h2>

                    {desc && <p className="mt-4 text-sm leading-6 text-black sm:text-base">{desc}</p>}
                </div>

                {/* Cards */}
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {cards?.map((card, index) => (
                        <CardTemplate1
                            key={index}
                            icon={card.icon}
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
