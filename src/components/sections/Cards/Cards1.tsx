'use client'

import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Card1({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="bg-color-woodsmoke py-24 sm:py-28">
            <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-4">
                {/* Título */}
                <div className="w-full">
                    <p className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</p>

                    {desc && (
                        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-color-clay sm:text-base">
                            {desc}
                        </p>
                    )}
                </div>

                {/* Cards */}
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {cards?.map((card, index) => (
                        <CardPrimary
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
