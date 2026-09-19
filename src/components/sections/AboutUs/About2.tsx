import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { AboutUsProps } from '@/components/sections/AboutUs/aboutUs.types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AboutUs2({ eyebrow, title, highlightedTitle, description, button2text }: AboutUsProps) {
    return (
        <section id="metodo" className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-sm font-bold text-color-fiord">{eyebrow}</p>
                    <p className="text-2xl text-color-forest">{title}</p>
                </div>

                <p className="mx-auto text-center font-serif text-2xl font-normal text-color-forest">
                    {highlightedTitle}
                </p>
                <p className="max-w-2xl text-center text-base leading-relaxed text-color-forest sm:text-lg">
                    {description}
                </p>
                <InteractiveHoverButton
                    href="#anamnese"
                    className="rounded-2xl border-color-forest bg-color-forest text-center text-sm text-white hover:text-white">
                    {button2text}
                </InteractiveHoverButton>
            </div>
        </section>
    )
}

export default AboutUs2
