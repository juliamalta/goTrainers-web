import React from 'react'

export type CardProps = {
    titleApp?: string
    icon?: React.JSX.Element
    text?: string
    title?: string | React.ReactNode
    desc?: string
    number?: string
    img?: string
    iconBgColor?: string
    progress?: string
    progressvalue?: string
    progressvalueX?: number
    tag?: string[]
    name?: string
    featured?: boolean
}

export type CardWorkProps = {
    title?: string
    disabled?: boolean
    img?: string
    description?: string
    tag?: string[]
    link?: string
    buttonText?: string
}
