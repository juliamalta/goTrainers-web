'use client'

import { Features2Props, Features3Props } from '@/components/sections/Features/Features.types'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeLine } from 'react-icons/ri'

export function Features3({ img, features, title, desc }: Features3Props) {
    return (
        <section id="features">
            <div>
                <div className="container flex flex-col justify-between gap-12 py-24 lg:flex-row">
                    {/* IMAGEM */}
                    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 lg:w-1/2">
                        <Image
                            src={img!}
                            alt="Personal trainer em academia"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                    {/* TEXTO */}
                    <div className="flex w-full flex-col justify-center gap-6 lg:w-2/3">
                        <div className="mb-2 flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-[#D6A83D]" />

                            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D6A83D] md:text-base">
                                Sobre o MÉTODO
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-white">{title}</h2>

                        <p className="mt-4 text-color-sisal">{desc}</p>
                        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
                            {features!.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex w-full flex-col gap-3 rounded-2xl bg-color-woodsmoke p-4 transition-transform hover:scale-105 hover:border-color-flamingo">
                                    <p className="text-color-saffron">{card.number}</p>
                                    <h1 className="text-base text-white">{card.title}</h1>
                                    <p className="text-sm text-color-sisal">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
