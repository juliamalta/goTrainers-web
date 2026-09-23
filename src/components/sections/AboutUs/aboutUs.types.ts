import { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export type AboutUsCard = {
    title: string
    description: string
}

export interface AboutUsProps {
    eyebrow?: string
    title: string
    highlightedTitle?: ReactNode
    description: string
    paragraphs?: string[]
    button2text?: string
    img?: string | StaticImageData
    imgTitle?: string
    imgDesc?: string
    cards: AboutUsCard[]
}
