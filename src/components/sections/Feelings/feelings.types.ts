export type Feeling = {
    label: string
    title: string
    description: string
}

export type FeelingsProps = {
    eyebrow: string
    title: string
    description: string
    feelings: Feeling[]
    defaultFeeling?: string
}
