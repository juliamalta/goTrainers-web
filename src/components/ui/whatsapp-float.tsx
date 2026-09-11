'use client'

import Link from 'next/link'
import { RiWhatsappFill } from 'react-icons/ri'

interface WhatsAppFloatProps {
    phone: string
}

export function WhatsAppFloat({ phone }: WhatsAppFloatProps) {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o treinamento.')

    return (
        <Link
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
            <RiWhatsappFill size={30} />
        </Link>
    )
}
