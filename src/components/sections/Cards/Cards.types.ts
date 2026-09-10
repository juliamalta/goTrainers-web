// CardSection.types.ts
export interface CardData {
    number?: string
    title: string
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
}

export interface CardSectionProps {
    titlePrimary?: string
    title?: string | React.ReactNode
    desc?: string
    buttonText?: string
    img?: string
    cards: CardData[]
}
