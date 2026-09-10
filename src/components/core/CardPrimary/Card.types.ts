export type CardProps = {
    titleApp?: string
    text?: string
    title: string | React.ReactNode
    desc?: string
    number?: string
    img?: string
    iconBgColor?: string
    progress?: string
    progressvalue?: string
    progressvalueX?: number
    tag?: string[]
}

export type CardWorkProps = {
    title: string
    img?: string
    description?: string
    tag: string[]
    link?: string
    buttonText?: string
}
