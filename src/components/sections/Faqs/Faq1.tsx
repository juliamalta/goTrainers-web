import { FaWhatsapp } from 'react-icons/fa'

import Accordion from '@/components/core/Accordion/Accordion'
import { BlurFade } from '@/components/magicui/blur-fade'
import { FaqProps } from '@/components/sections/Faqs/Faqs.types'

function Faq1({ faqs, title, description }: FaqProps) {
    return (
        <div className="container flex flex-col justify-between gap-8 py-16 sm:py-24">
            <div className="flex flex-col items-center gap-8">
                <BlurFade delay={0.15} direction="down" inView>
                    <p className="w-full text-4xl font-semibold text-white">{title}</p>
                </BlurFade>
            </div>
            <div className="w-full">
                {faqs.map((item, idx) => (
                    <Accordion key={idx} title={item.title} accordion={!item.accordion}>
                        {item.answer}
                    </Accordion>
                ))}
            </div>
        </div>
    )
}
export default Faq1
