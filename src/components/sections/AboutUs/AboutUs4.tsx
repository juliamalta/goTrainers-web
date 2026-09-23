import Image from 'next/image'

import { AboutUsProps } from '@/components/sections/AboutUs/aboutUs.types'

function AboutUs4({ title, description, paragraphs = [], cards, img, imgTitle, imgDesc }: AboutUsProps) {
    return (
        <section id="metodo" className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="container flex flex-col items-center gap-10 lg:flex-row">
                <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-color-ivory shadow-sm">
                    <Image src={img!} alt="personal" className="w-full object-cover object-top" />
                    <div className="absolute inset-x-3 bottom-3 rounded-xl bg-color-burgundy px-4 py-4 text-center text-white shadow-lg sm:inset-x-4 sm:bottom-4">
                        <p className="text-xs font-bold tracking-wide sm:text-sm">{imgTitle}</p>
                        <p className="mt-1 text-xs font-semibold sm:text-sm">{imgDesc}</p>
                    </div>
                </div>

                <div>
                    <span className="bg-color-dustyRose/10 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-color-dustyRose">
                        Sobre o Treinador
                    </span>

                    <h2 className="mt-4 text-4xl font-bold leading-tight text-color-burgundy sm:text-5xl">{title}</h2>
                    <p className="mt-4 text-base leading-7 text-color-neutralGray sm:text-lg">{description}</p>

                    <div className="mt-6 space-y-4">
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={`${paragraph.slice(0, 20)}-${index}`}
                                className="leading-7 text-color-neutralGray sm:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 2xl:grid-cols-3">
                        {cards.map((card, index) => (
                            <div
                                key={`${card.title}-${index}`}
                                className="flex flex-col items-start rounded-2xl border border-color-ivory bg-color-ivory p-5 sm:p-6">
                                <h3 className="font-bold text-color-burgundy">{card.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-color-neutralGray">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs4
