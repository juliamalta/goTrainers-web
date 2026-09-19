'use client'

import { Features3Props } from '@/components/sections/Features/Features.types'

import Image from 'next/image'

import { RiVerifiedBadgeLine } from 'react-icons/ri'

export function Features4({ img, features, title, desc }: Features3Props) {
    return (
        <section id="features">
            <div className="container flex flex-col justify-between gap-12 py-24 lg:flex-row">
                {/* CONTEÚDO */}
                <div className="flex w-full flex-col justify-center gap-8 2xl:w-2/4">
                    <div className="mb-2 flex items-center gap-4">
                        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-color-forest md:text-base">
                            Fundamentos Cinéticos
                        </span>
                    </div>

                    <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-color-forest sm:text-5xl lg:text-6xl">
                        {title}
                    </h2>

                    <div className="flex flex-col gap-3">
                        {features?.map((card, index) => (
                            <div
                                key={index}
                                className="flex w-full flex-col gap-3 rounded-2xl bg-color-softgray p-4 transition-transform hover:scale-105 hover:border-color-flamingo">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <p className="font-bold text-color-forest">{card.number}</p>

                                        <h3 className="text-base font-bold text-black">{card.title}</h3>
                                    </div>

                                    <div>{card.icon}</div>
                                </div>

                                <p className="text-sm text-color-forest">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* IMAGEM */}
                {/* IMAGEM */}
                <div className="relative min-h-[550px] w-full overflow-hidden rounded-[3rem] lg:w-1/2">
                    <Image
                        src={img!}
                        alt="Personal trainer em academia"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    {/* CARD SOBRE A IMAGEM */}
                    <div className="absolute bottom-7 left-6 right-6 rounded-[2rem] bg-[#f2f1ef] px-7 py-7 shadow-lg md:px-9 md:py-8">
                        <p className="font-serif text-2xl italic leading-snug text-[#26342d] md:text-3xl">
                            “A força não reside na agressividade do movimento, mas na sua clareza e controle.”
                        </p>

                        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#777] md:text-sm">
                            — Filosofia de treino Vilaça
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
