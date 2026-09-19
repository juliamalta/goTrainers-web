export interface TestimonialData {
    name: string
    type?: string
    desc: string
    rating?: number
    avatar?: string
}

export type TestimonialProps = {
    title: string
    testimonial: TestimonialData[]
}
