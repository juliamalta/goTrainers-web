export interface FeaturesProps {
    titlePrimary?: string
    title: string | React.ReactNode
    text1: string
    text2?: string
    features: featuresData[]
}

// CardSection.types.ts
export interface featuresData {
    title: string
}
