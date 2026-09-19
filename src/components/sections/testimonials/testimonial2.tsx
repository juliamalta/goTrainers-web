'use client'

import * as React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

import { TestimonialProps } from '@/components/sections/testimonials/testimonials.types'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

function Testimonials2({ testimonial, title }: TestimonialProps) {
    return (
        <section id="depoimentos" className="overflow-hidden py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto flex flex-col gap-6 px-4 sm:gap-8 sm:px-6 lg:px-8">
                {/* TÍTULO */}
                <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-color-forest md:text-base">
                        O QUE DIZEM?
                    </span>
                </div>

                <div className="w-full">
                    <h2 className="font-serif text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-color-forest sm:text-4xl md:text-5xl lg:text-6xl">
                        {title}
                    </h2>
                </div>

                {/* CARROSSEL */}
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className="w-full pt-20 sm:pt-16">
                    <CarouselContent className="-ml-4">
                        {testimonial?.map((card, index) => (
                            <CarouselItem key={index} className="basis-full pl-4 md:basis-1/2">
                                <div className="flex h-full min-h-[420px] flex-col rounded-2xl bg-color-softgray p-6 sm:min-h-[450px] sm:p-8 lg:p-10 xl:p-12">
                                    {/* ESTRELAS */}
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                size={16}
                                                strokeWidth={1.5}
                                                className={
                                                    starIndex < (card.rating ?? 5)
                                                        ? 'text-color-saffron'
                                                        : 'text-gray-300'
                                                }
                                                fill={starIndex < (card.rating ?? 5) ? 'currentColor' : 'none'}
                                            />
                                        ))}
                                    </div>

                                    {/* DEPOIMENTO + AVATAR */}
                                    <div className="flex flex-1 flex-col gap-6 py-8 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
                                        <p className="w-full text-lg leading-relaxed text-black sm:text-xl lg:w-2/3 lg:text-2xl">
                                            "{card.desc}"
                                        </p>

                                        {card.avatar && (
                                            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full sm:h-28 sm:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36">
                                                <Image
                                                    src={card.avatar}
                                                    alt={card.name}
                                                    fill
                                                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 144px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* CLIENTE */}
                                    <div className="mt-auto">
                                        <p className="text-sm font-semibold text-black">{card.name}</p>

                                        {card.type && <p className="mt-1 text-sm text-color-forest">{card.type}</p>}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* SETAS */}
                    <div className="absolute right-0 top-2 flex items-center gap-3">
                        <CarouselPrevious className="hover:bg-color-softgray/80 static h-11 w-11 translate-y-0 border-0 bg-color-softgray text-color-forest shadow-none sm:h-12 sm:w-12" />

                        <CarouselNext className="hover:bg-color-softgray/80 static h-11 w-11 translate-y-0 border-0 bg-color-softgray text-color-forest shadow-none sm:h-12 sm:w-12" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonials2
