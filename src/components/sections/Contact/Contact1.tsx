'use client'

import { MessageSquareText } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface Contact3Props {
    title?: string
    desc?: string
    link?: string
}

export function Contact1({ title, desc, link }: Contact3Props) {
    return (
        <section id="contato" className="bg-[#0C0D0D] px-4 py-16 md:px-6 md:py-24">
            <div className="container mx-auto">
                <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,#2b2822_0%,#201f1c_35%,#181919_70%,#141515_100%)] px-6 py-16 text-center shadow-2xl md:px-12 md:py-20">
                    {/* LUZ DOURADA */}
                    <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(246,197,66,0.08),transparent_70%)]" />

                    {/* CONTEÚDO */}
                    <div className="relative z-10 flex w-full flex-col items-center">
                        {/* TAG */}
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-color-saffron">
                            Inicie sua jornada
                        </p>

                        {/* TÍTULO */}
                        {title && (
                            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                                {title}
                            </h2>
                        )}

                        {/* DESCRIÇÃO */}
                        {desc && (
                            <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-color-clay md:text-lg">
                                {desc}
                            </p>
                        )}

                        {/* BOTÃO */}
                        {link && (
                            <Button
                                asChild
                                className="hover:bg-color-saffron/90 mt-9 h-14 rounded-2xl bg-color-saffron px-8 text-xs font-semibold uppercase tracking-[0.1em] text-black md:px-10">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3">
                                    <MessageSquareText size={17} />
                                    Falar com o personal
                                </a>
                            </Button>
                        )}

                        {/* TEXTO INFERIOR */}
                        <p className="mt-6 text-xs text-white md:text-sm">
                            Atendimento direto • Resposta em até 2 horas úteis
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact1
