'use client'

import * as React from 'react'

import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import CardPlan from '@/components/core/CardPrimary/Card-plan'

function Cards5({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="mx-8 rounded-2xl bg-color-woodsmoke py-24 sm:pb-24">
            <div className="container mx-auto flex flex-col items-center justify-center gap-12">
                <div className="w-full">
                    <p className="text-center text-4xl font-semibold text-white">{title}</p>

                    {desc && <p className="mx-auto mt-4 max-w-2xl text-center text-base text-color-clay">{desc}</p>}
                </div>

                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                    {cards?.map((card, index) => (
                        <CardPlan
                            key={index}
                            title={card.title}
                            desc={card.desc}
                            text={card.text}
                            price={card.price}
                            option={card.option}
                            link={card.link}
                            featured={card.featured}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards5
