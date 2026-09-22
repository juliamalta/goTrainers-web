'use client'

import * as React from 'react'

import { CardPrimary } from '@/components/core/CardPrimary'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import CardTemplate from '@/components/core/CardPrimary/card-template'
import CardTemplate1 from '@/components/core/CardPrimary/CardTemplate'
import CardTemplate4 from '@/components/core/CardPrimary/Card-tem4'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'

function Card8({ cards, title, desc, buttonText, button1url, button1text, cardText, cardTitle }: CardSectionProps) {
    return (
        <section id="como-funciona" className="scroll-mt-28 bg-color-warmwhite py-24 sm:py-28">
            <div className="container mx-auto flex flex-col gap-12 px-4">
                {/* Título */}
                <div className="w-full">
                    <div className="mb-10 flex items-center justify-center gap-4">
                        <span className="text-color- items-center justify-center text-center text-sm font-semibold uppercase tracking-[0.12em] md:text-base">
                            Passo a passo simples
                        </span>
                    </div>
                    <h2 className="text-center font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-color-burgundy sm:text-5xl lg:text-6xl">
                        {title}
                    </h2>

                    {desc && (
                        <p className="mt-4 text-center text-sm leading-6 text-color-neutralGray sm:text-base">{desc}</p>
                    )}
                </div>

                {/* Cards */}
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {cards?.map((card, index) => (
                        <CardTemplate4
                            key={index}
                            icon={card.icon}
                            number={card.number}
                            title={card.title}
                            text={card.text}
                            iconBgColor={card.iconBgColor}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-8 rounded-3xl bg-color-burgundy p-16 md:gap-8 lg:flex-row 2xl:justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-xxs w-fit rounded-full bg-color-forest px-3 py-2 text-center font-bold text-white">
                            Super Bônus Incluso
                        </p>
                        <h1 className="text-2xl font-bold text-white">{cardTitle}</h1>
                        <p className="w-full text-white lg:w-2/3">{cardText}</p>
                    </div>
                    <div className="flex lg:items-center lg:justify-center">
                        <InteractiveHoverButton
                            href={button1url}
                            className="w-full rounded-2xl border-color-saffron bg-white text-center text-sm text-black hover:text-white sm:w-auto">
                            {button1text}
                        </InteractiveHoverButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card8
