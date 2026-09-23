'use client'

import { FormEvent, useState } from 'react'
import { BriefcaseBusiness, CheckCircle2, Loader2, Sparkles, X } from 'lucide-react'

export function CreateForMeCard({ template }: { template: string }) {
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [error, setError] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus('sending')
        setError('')

        const data = new FormData(event.currentTarget)
        const response = await fetch('/api/site-creation-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: data.get('fullName'),
                email: data.get('email'),
                phone: data.get('phone'),
                message: data.get('message'),
                template,
            }),
        })

        if (!response.ok) {
            const result = await response.json().catch(() => null)
            setError(result?.message || 'Não foi possível enviar. Tente novamente.')
            setStatus('error')
            return
        }

        setStatus('success')
        event.currentTarget.reset()
    }

    return (
        <>
            <div className="relative flex h-full min-h-[302px] flex-col overflow-hidden rounded-3xl border border-green-500/40 bg-zinc-900 p-7">
                <div className="absolute right-5 top-5 rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold text-green-400">
                    PERSONALIZADO
                </div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                    <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Criamos para você</h2>
                <p className="mt-3 flex-1 text-zinc-400">
                    Escolha um template e nossa equipe cria seu site para você. É só deixar seus contatos.
                </p>
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400">
                    <Sparkles className="h-4 w-4" />
                    Quero ajuda para criar
                </button>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
                    role="dialog"
                    aria-modal="true">
                    <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-zinc-700 bg-zinc-900 p-6 shadow-2xl sm:p-8">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="absolute right-5 top-5 text-zinc-400 hover:text-white"
                            aria-label="Fechar">
                            <X className="h-5 w-5" />
                        </button>
                        {status === 'success' ? (
                            <div className="py-8 text-center">
                                <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
                                <h2 className="mt-5 text-2xl font-semibold">Pedido recebido!</h2>
                                <p className="mt-3 text-zinc-400">
                                    Nossa equipe vai entrar em contato em breve para ajudar com seu site.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="mt-7 rounded-xl bg-white px-5 py-3 font-semibold text-black">
                                    Fechar
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="pr-8 text-2xl font-semibold">Vamos criar seu site</h2>
                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                    Preencha seus dados e entraremos em contato para entender o que você precisa.
                                </p>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <input
                                        name="fullName"
                                        required
                                        placeholder="Nome completo"
                                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-green-500"
                                    />
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            placeholder="Seu melhor e-mail"
                                            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-green-500"
                                        />
                                        <input
                                            name="phone"
                                            required
                                            placeholder="WhatsApp / telefone"
                                            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-green-500"
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Conte um pouco sobre o site que você imagina (opcional)"
                                        className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-green-500"
                                    />
                                    {error && <p className="text-sm text-red-400">{error}</p>}
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60">
                                        {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
                                        {status === 'sending' ? 'Enviando...' : 'Enviar meus dados'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
