export interface faqsData {
    title: string
    answer: string
    accordion?: boolean
}

export interface FaqProps {
    title: string | React.ReactNode
    description: string
    faqs: faqsData[]
}
