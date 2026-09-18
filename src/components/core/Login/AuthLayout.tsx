import { ArrowLeft, LayoutTemplate, SlidersHorizontal, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

export default function AuthLayout({ children, mode }: { children: ReactNode; mode: 'login' | 'register' }) {
    return (
        <div className="min-h-screen bg-color-woodsmoke text-white">
            <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
                <Link
                    href="/"
                    aria-label="GoTrainer — página inicial"
                    className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-color-malachite">
                    <Image
                        src="/images/logo.png"
                        alt="GoTrainer"
                        width={172}
                        height={73}
                        priority
                        className="h-auto w-36"
                    />
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-2 rounded-lg py-2 text-sm text-color-clay transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-color-malachite">
                    <ArrowLeft size={16} aria-hidden="true" /> Voltar ao início
                </Link>
            </header>
            <main className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pb-12 pt-4 sm:px-8 sm:pt-8 lg:min-h-[calc(100svh-125px)] lg:grid-cols-2 lg:p-12">
                <aside className="hidden max-w-lg lg:block">
                    <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-color-malachite">
                        <span className="h-px w-8 bg-color-malachite" /> Seu próximo passo começa aqui
                    </p>
                    <h2 className="text-5xl font-semibold leading-[1.12] tracking-tight">
                        Seu próximo aluno
                        <br />
                        <span className="text-color-malachite">precisa conhecer você.</span>
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-color-clay">
                        Apresente seu método, destaque seus resultados e facilite o primeiro contato. Crie um site à
                        altura do seu trabalho, sem complicação.
                    </p>
                    <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
                        {[
                            {
                                icon: LayoutTemplate,
                                title: 'Um design que combina com você',
                                text: 'Templates pensados para personal trainers.',
                            },
                            {
                                icon: SlidersHorizontal,
                                title: 'Sua marca em cada detalhe',
                                text: 'Personalize fotos, serviços e planos.',
                            },
                            {
                                icon: Globe,
                                title: 'Seu trabalho ao alcance de novos alunos',
                                text: 'Publique seu site e compartilhe seu endereço.',
                            },
                        ].map(({ icon: Icon, title, text }) => (
                            <div key={title} className="flex gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-color-woodsmoke text-color-malachite">
                                    <Icon size={20} aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-zinc-100">{title}</p>
                                    <p className="mt-1 text-sm leading-relaxed text-color-clay">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
                <section aria-labelledby="auth-title" className="mx-auto w-full max-w-lg">
                    <div className="rounded-2xl border border-white/10 bg-color-codgray p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-10">
                        <div className="mb-8">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-color-malachite">
                                {mode === 'login' ? 'Seu espaço GoTrainer' : 'Comece com o GoTrainer'}
                            </p>
                            <h1 id="auth-title" className="text-3xl font-semibold tracking-tight">
                                {mode === 'login' ? 'Bom ter você de volta.' : 'Seu site começa aqui.'}
                            </h1>
                            <p className="mt-3 text-sm leading-relaxed text-color-clay">
                                {mode === 'login'
                                    ? 'Entre na sua conta para continuar cuidando da sua presença online.'
                                    : 'Crie sua conta e dê o primeiro passo para apresentar seu trabalho ao mundo.'}
                            </p>
                        </div>
                        {children}
                    </div>
                    <p className="mt-6 text-center text-xs leading-relaxed text-zinc-500">
                        Feito para quem transforma movimento em resultado.
                    </p>
                </section>
            </main>
        </div>
    )
}
