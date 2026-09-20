import type { ReactElement, ReactNode } from 'react'

export interface ContactData {
    desc: string
    titleContact: string
    icon?: ReactElement
    href?: string
}

export type FormsProps = {
    title: string | ReactNode
    desc: string
    contact: ContactData[]
    siteId?: string
}
