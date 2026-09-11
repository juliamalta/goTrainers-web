import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans, Manrope } from 'next/font/google'

import '../globals.css'

import { configs } from '@/configs'
import { cn } from '@/lib/utils'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta',
})

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})

export const metadata: Metadata = configs.metadata

type RootLayoutProps = React.PropsWithChildren

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={cn('min-h-screen bg-background antialiased', plusJakartaSans.className)}>{children}</body>
        </html>
    )
}
