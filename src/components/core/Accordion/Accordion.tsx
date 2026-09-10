'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'

import { AccordionProps } from '@/components/core/Accordion/Accordion.types'
import { CardProps } from '@/components/core/CardPrimary/Card.types'

function Accordion({ title, children, accordion }: AccordionProps) {
    const [open, setOpen] = useState(accordion)

    return (
        <div onClick={() => setOpen(!open)} className="mb-8 flex cursor-pointer flex-col gap-8">
            <div
                className="flex items-center justify-between rounded-xl border-2 p-4"
                style={{ borderColor: '#585757' }}>
                <h1 className="p-2 text-sm font-bold text-white md:text-xl">{title}</h1>
                {open ? <FaChevronUp color="#F15B29" size={30} /> : <FaChevronDown color="#F15B29" size={30} />}
            </div>
            {open && <div className="text-white">{children}</div>}
        </div>
    )
}

export default Accordion
