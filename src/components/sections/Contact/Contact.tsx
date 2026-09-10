'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { ContactProps } from '@/components/sections/Contact/Contact.types'

function Contact({ title, text, buttontext }: ContactProps) {
    return (
        <section>
            <div className="flex flex-col py-6 sm:flex-row bg-color-codgray">
                <div className="mx-auto flex flex-col items-center justify-center gap-5 p-5 py-24 sm:p-8 lg:p-16">
                    <div className="flex flex-col items-center justify-center gap-8 lg:w-full">
                        <div>
                            <h1 className="text-center text-2xl font-semibold text-white sm:text-2xl lg:text-4xl">
                                {title}
                            </h1>
                        </div>
                        <div className="items-center">
                            <p className="text-center text-sm font-normal text-color-boulder sm:text-base lg:text-base">
                                {text}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4 sm:justify-normal">
                        <div className="justify-end lg:flex">
                             <InteractiveHoverButton className="border-color-malachite bg-color-malachite rounded-2xl text-center text-sm text-black hover:text-white">
                                        <Link href="https://wa.me/5531996398460"> {buttontext}</Link>
                                    </InteractiveHoverButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
