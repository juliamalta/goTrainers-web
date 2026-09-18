export interface testimonialData {
    desc: string
    name: string
    type: string
}

export type TestimonialProps = {
    title: string
    testimonial: testimonialData[]
}
