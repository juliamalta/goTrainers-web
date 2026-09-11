// CardSection.types.ts
import type React from 'react'
export interface CardData {
    number?: string
    icon?: React.JSX.Element
    title?: string
    titleApp?: string
    text?: string
    progress?: string
    progressValue?: string
    progressValueX?: number
    iconBgColor?: string
    desc?: string
    img?: string
    tag?: string[]
    link?: string
    buttonText?: string
    name?: string
    featured?: boolean
}

export interface CardSectionProps {
    titlePrimary?: string
    title?: string | React.ReactNode
    desc?: string
    buttonText?: string
    img?: string
    cards?: CardData[]
}
