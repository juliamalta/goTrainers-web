'use client'

import * as React from 'react'
import { Quote } from 'lucide-react'

import { TestimonialProps } from '@/components/sections/testimonials/testimonials.types'

function Testimonials1({ testimonial, title }: TestimonialProps) {
    return (
        <section id="depoimentos" className="py-16 sm:pb-24">
            <div className="container mx-auto flex flex-col gap-8">
                {/* TÍTULO */}
                <div className="mb-2 flex items-center gap-4">
                    <span className="h-[2px] w-12 bg-[#D6A83D]" />

                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D6A83D] md:text-base">
                        Arquitetura de serviços
                    </span>
                </div>
                <div className="w-full">
                    <p className="text-4xl font-semibold text-white">{title}</p>
                </div>

                {/* DEPOIMENTOS */}
                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {testimonial?.map((card, index) => (
                        <div key={index} className="flex min-h-[420px] w-full flex-col bg-color-woodsmoke p-10 xl:p-12">
                            {/* ASPAS */}
                            <Quote size={30} fill="currentColor" strokeWidth={0} className="mb-10 text-color-saffron" />

                            {/* DEPOIMENTO */}
                            <p className="text-lg leading-relaxed text-white">{card.desc}</p>

                            {/* CLIENTE */}
                            <div className="mt-auto pt-10">
                                <p className="text-sm font-semibold text-white">{card.name}</p>

                                <p className="mt-1 text-sm text-color-saffron">{card.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials1
