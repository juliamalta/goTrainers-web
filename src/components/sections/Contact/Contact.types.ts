export interface ContactProps {
    title: string | React.ReactNode
    text: string
    buttontext: string
    buttonurl?: string
    img?: string
}

export interface Contact3Props {
    eyebrow: string
    title: string
    description: string
    image?: string
    imageAlt?: string
    primaryButtonText: string
    primaryButtonHref: string
    secondaryButtonText: string
    secondaryButtonHref: string
}
