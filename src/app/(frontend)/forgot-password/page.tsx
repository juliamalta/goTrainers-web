'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiArrowLeft, FiLock } from 'react-icons/fi'

export default function ForgotPasswordPage() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setLoading(true)
        setError('')

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data?.message || 'Não foi possível continuar.')
            }

            router.push(`/reset-password?token=${data.token}`)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Não foi possível continuar.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#151817] px-6 text-white">
            <div className="w-full max-w-md">
                <Link
                    href="/auth"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
                    <FiArrowLeft size={16} />
                    Voltar para login
                </Link>

                <div className="rounded-2xl border border-white/5 bg-[#0d0f0e] p-6 md:p-8">
                    <div className="mb-8">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00e676]/10 text-[#00e676]">
                            <FiLock size={22} />
                        </div>

                        <h1 className="text-2xl font-bold">Recuperar senha</h1>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                            Informe o email da sua conta para continuar.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="seu@email.com"
                                autoComplete="email"
                                required
                                className="w-full rounded-xl border border-white/10 bg-[#151817] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#00e676]/50"
                            />
                        </div>

                        {error && (
                            <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#00e676] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#00d96d] disabled:cursor-not-allowed disabled:opacity-50">
                            {loading ? 'Verificando...' : 'Continuar'}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
