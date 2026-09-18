export interface FeaturesProps {
    titlePrimary?: string
    title: string | React.ReactNode
    text1: string
    text2?: string
    features: featuresData[]
}
export interface Features2Props {
    titlePrimary?: string
    title?: string | React.ReactNode
    desc?: string
    text1?: string
    text2?: string
    img?: string
    features?: featuresData[]
}

// CardSection.types.ts
export interface featuresData {
    title: string
}

export interface Features3Props {
    titlePrimary?: string
    title?: string | React.ReactNode
    desc?: string
    text1?: string
    text2?: string
    img?: string
    features?: features3Data[]
}
export interface features3Data {
    number?: string
    title: string
    desc: string
}
