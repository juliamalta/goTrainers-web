import type React from 'react'
import type { StaticImageData } from 'next/image'
export type tagsData = {
    icon: React.JSX.Element
    text: string
}
export type HeroProps = {
    titlePrimary: string
    title: string | React.ReactNode
    desc: string
    button1text: string
    button2text?: string
    cardTitle?: string
    cardText?: string
    img?: string | StaticImageData
    tag?: tagsData[]
}
