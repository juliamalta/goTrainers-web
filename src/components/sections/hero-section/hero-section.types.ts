export type tagsData = {
    icon: JSX.Element
    text: string
}
export type HeroProps = {
    titlePrimary: string
    title: string | React.ReactNode
    desc: string
    button1text: string
    button2text: string
    tag: tagsData[]
}
