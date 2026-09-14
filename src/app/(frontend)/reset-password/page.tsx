'use client'

import { FormEvent, Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { FiArrowLeft, FiLock } from 'react-icons/fi'

function ResetPasswordForm() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setError('')

        if (!token) {
            setError('Token de recuperação inválido.')
            return
        }

        if (password.length < 8) {
            setError('A senha precisa ter pelo menos 8 caracteres.')
            return
        }

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.')
            return
        }

        setLoading(true)

        try {
            const response = await fetch('/api/reset-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token,
                    password,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data?.message || 'Não foi possível alterar a senha.')
            }

            router.push('/login?passwordReset=true')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Não foi possível alterar a senha.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#151817] px-6 text-white">
            <div className="w-full max-w-md">
                <Link
                    href="/login"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
                    <FiArrowLeft size={16} />
                    Voltar para login
                </Link>

                <div className="rounded-2xl border border-white/5 bg-[#0d0f0e] p-6 md:p-8">
                    <div className="mb-8">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00e676]/10 text-[#00e676]">
                            <FiLock size={22} />
                        </div>

                        <h1 className="text-2xl font-bold">Nova senha</h1>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">Escolha uma nova senha para sua conta.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-300">
                                Nova senha
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                required
                                className="w-full rounded-xl border border-white/10 bg-[#151817] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#00e676]/50"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-zinc-300">
                                Confirmar senha
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                placeholder="••••••••"
                                autoComplete="new-password"
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
                            disabled={loading || !token}
                            className="w-full rounded-xl bg-[#00e676] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#00d96d] disabled:cursor-not-allowed disabled:opacity-50">
                            {loading ? 'Alterando...' : 'Alterar senha'}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default function ResetPasswordPage() {
    return (
        <Suspense
            fallback={
                <main className="flex min-h-screen items-center justify-center bg-[#151817] text-white">
                    <p className="text-sm text-zinc-500">Carregando...</p>
                </main>
            }>
            <ResetPasswordForm />
        </Suspense>
    )
}
