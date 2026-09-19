import { AboutUsProps } from '@/components/sections/AboutUs/aboutUs.types'

function AboutUs1({ eyebrow, title, highlightedTitle, description }: AboutUsProps) {
    return (
        <section id="metodo" className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="container mx-auto flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-sm font-bold text-color-fiord">{eyebrow}</p>
                    <p className="text-2xl text-color-forest">{title}</p>
                </div>

                <h2 className="mx-auto max-w-6xl text-center font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-color-forest sm:text-5xl lg:text-6xl">
                    {highlightedTitle}
                </h2>

                <p className="max-w-2xl text-center text-base leading-relaxed text-color-forest sm:text-lg">
                    {description}
                </p>
            </div>
        </section>
    )
}

export default AboutUs1
