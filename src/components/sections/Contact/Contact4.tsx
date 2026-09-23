import Image from 'next/image'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import type { Contact3Props } from '@/components/sections/Contact/Contact.types'
import { Button } from '@/components/ui/button'

function Contact4({
    eyebrow,
    title,
    description,
    image,
    imageAlt,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref,
}: Contact3Props) {
    const isExternalLink = secondaryButtonHref.startsWith('http')

    return (
        <section id="contato" className="bg-color-burgundy px-6 py-24 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="container mx-auto flex max-w-5xl flex-col items-center text-center">
                <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-color-dustyRose">
                    {eyebrow}
                </span>
                <h2 className="mt-6 max-w-4xl font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                    {title}
                </h2>
                <p className="mt-7 max-w-3xl text-base leading-relaxed text-white sm:text-lg">{description}</p>

                <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
                    <InteractiveHoverButton
                        href={primaryButtonHref}
                        className="w-full rounded-2xl border-color-saffron bg-white text-center text-sm text-black hover:text-white sm:w-auto">
                        {primaryButtonText}
                    </InteractiveHoverButton>
                    <Button variant="herobuttonsecondary4" size="hero" asChild className="rounded-2xl text-xs">
                        <a
                            href={secondaryButtonHref}
                            target={isExternalLink ? '_blank' : undefined}
                            rel={isExternalLink ? 'noopener noreferrer' : undefined}>
                            {secondaryButtonText}
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Contact4
