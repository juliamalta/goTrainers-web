export interface MetricsData {
    number: string
    text: string
    title?: string
}

export type MetricsProps = {
    metrics: MetricsData[]
}
