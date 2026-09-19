import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { AboutUsProps } from '@/components/sections/AboutUs/aboutUs.types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AboutUs3({ eyebrow, title, highlightedTitle, description, button2text }: AboutUsProps) {
    return (
        <section id="metodo" className="bg-color-forest px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-3 text-center">
                    <h2 className="mx-auto w-full max-w-6xl text-center font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl 2xl:w-2/3">
                        {title}
                    </h2>
                </div>

                <h2 className="mx-auto max-w-6xl text-center font-serif text-4xl font-normal italic leading-[1.08] tracking-[-0.025em] text-[#c87a5b] sm:text-5xl lg:text-6xl">
                    {highlightedTitle}
                </h2>
                <p className="w-full text-center text-base leading-relaxed text-white sm:text-lg">{description}</p>
                <InteractiveHoverButton
                    href="#anamnese"
                    className="rounded-2xl border-color-forest bg-white text-center text-sm text-black hover:text-white">
                    {button2text}
                </InteractiveHoverButton>
            </div>
        </section>
    )
}

export default AboutUs3
