'use client'

import { useState } from 'react'
import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'

import heroImage from '../../../../public/images/pessoa4.png'
import { HeroSection4 } from '@/components/sections/hero-section/hero-section4'
import { HeroSection5, type HeroSection5Theme } from '@/components/sections/hero-section/hero-section5'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa6'

export default function Home() {
    const [demoMode, setDemoMode] = useState(false)
    const [theme, setTheme] = useState<HeroSection5Theme>('neon')

    const themes: Array<{ value: HeroSection5Theme; label: string; color: string }> = [
        { value: 'neon', label: 'Neon', color: '#c8ff00' },
        { value: 'white', label: 'White', color: '#ffffff' },
        { value: 'feminine', label: 'Feminino', color: '#ee5d96' },
        { value: 'blue', label: 'Azul', color: '#58b8ff' },
        { value: 'sunset', label: 'Sunset', color: '#ff9b54' },
    ]

    return (
        <main className="min-h-screen bg-color-ivory">
            <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-3 rounded-2xl border border-color-template5-border bg-color-template5-surface p-3 text-color-template5-text shadow-xl">
                <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
                    <input
                        type="checkbox"
                        checked={demoMode}
                        onChange={(event) => setDemoMode(event.target.checked)}
                        className="size-4 accent-[var(--template5-lime)]"
                    />
                    Demonstração de temas
                </label>

                {demoMode && (
                    <div className="flex flex-wrap justify-end gap-2">
                        {themes.map((item) => (
                            <button
                                key={item.value}
                                type="button"
                                onClick={() => setTheme(item.value)}
                                aria-label={`Usar tema ${item.label}`}
                                className={`size-7 rounded-full border-2 ${theme === item.value ? 'border-white ring-2 ring-color-template5-lime' : 'border-color-template5-border'}`}
                                style={{ backgroundColor: item.color }}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div>
                {/* HERO */}
                <HeroSection5
                    theme={theme}
                    titlePrimary="Vagas abertas para consultoria"
                    profileName="Alex Andrade"
                    profileUsername="@AlexAndrade"
                    profileDescription="Ajudo você a transformar seu corpo através de treino personalizado, biomecânica inteligente e acompanhamento profissional diário."
                    profileImage={heroImage}
                    socialLinks={[
                        { label: 'Instagram', href: '#instagram', icon: <FaInstagram size={24} /> },
                        { label: 'WhatsApp', href: 'https://wa.me/5500000000000', icon: <FaWhatsapp size={24} /> },
                        { label: 'TikTok', href: '#tiktok', icon: <FaTiktok size={24} /> },
                        { label: 'YouTube', href: '#youtube', icon: <FaYoutube size={24} /> },
                        { label: 'Facebook', href: '#facebook', icon: <FaFacebookF size={24} /> },
                    ]}
                    cards={[
                        {
                            title: 'Falar comigo no Whatsapp',
                            description: 'Atendimento direto e resposta rapida',
                            href: 'https://wa.me/5500000000000',
                            icon: <FaWhatsapp size={23} />,
                            highlighted: true,
                        },
                        {
                            title: 'Comece sua transformação',
                            description: 'Plano completo: treino + dieta + suporte 7 dias/semana',
                            href: '#transformacao',

                            highlighted: false,
                            mostPopular: true,
                        },
                        {
                            title: 'Conheça minha consultoria online',
                            description: 'Treine onde estiver com aplicativo exclusivo GoTrainers',
                            href: '#consultoria',

                            highlighted: false,
                        },
                        {
                            title: 'Agende sua avaliação física',
                            description: 'Bioimpedância, análise postural e metas personalizadas',
                            href: '#avaliacao',

                            highlighted: false,
                        },
                    ]}
                />
            </div>
        </main>
    )
}
