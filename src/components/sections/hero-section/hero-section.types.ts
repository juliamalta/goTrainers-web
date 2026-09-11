import type React from 'react'
export type tagsData = {
    icon: React.JSX.Element
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
