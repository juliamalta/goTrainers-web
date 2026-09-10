import type { Metadata } from 'next'

// eslint-disable-next-line camelcase
import { Space_Grotesk, Plus_Jakarta_Sans, Manrope } from 'next/font/google'

import './globals.css'

import { Footer } from '@/components/sections/Footer'
import { configs } from '@/configs'
import { cn } from '@/lib/utils'
import Contact from '@/components/sections/Contact/Contact'
import NavigationHeader from '@/components/sections/Navigations'
import LogoImage from '../../public/images/logo.png'

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
        <html lang="en" className="scroll-smooth">
            <body className={cn('min-h-screen bg-background antialiased', plusJakartaSans.className)}>
                
                
                {children}

                <div className="bg-cover bg-center" >
                   <Contact
    title={
        <>
            Seu próximo aluno pode estar
            <br />
            procurando por você agora.
        </>
    }
    text="Crie seu site profissional hoje mesmo e mostre ao mundo o verdadeiro valor do seu trabalho."
    buttontext="Criar meu site"
/>
                    <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
                </div>
            </body>
        </html>
    )
}
