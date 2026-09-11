'use client'

import { Features2Props } from '@/components/sections/Features/Features.types'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeLine } from 'react-icons/ri'

export function Features2({ img, features, title, desc }: Features2Props) {
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
                        <p className="text-md font-bold text-white">Sobre o Treinador</p>
                        <h2 className="text-4xl font-bold text-white">{title}</h2>

                        <p className="mt-4 text-color-clay">{desc}</p>
                        <div className="flex w-full flex-col gap-4">
                            {features!.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex w-full items-center gap-3 rounded-2xl bg-color-woodsmoke p-4">
                                    <RiVerifiedBadgeLine size={36} color="#00e676" className="shrink-0" />

                                    <p className="text-white">{card.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
