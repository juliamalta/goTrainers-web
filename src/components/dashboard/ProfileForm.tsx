'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FiArrowLeft, FiCheck, FiMail, FiUser } from 'react-icons/fi'

interface ProfileFormProps {
    user: {
        id: string
        name: string
        email: string
    }
}

export default function ProfileForm({ user }: ProfileFormProps) {
    const router = useRouter()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setLoading(true)
        setMessage('')
        setError('')

        try {
            const response = await fetch(`/api/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    name,
                    email,
                }),
            })

            const data = await response.json().catch(() => null)

            if (!response.ok) {
                throw new Error(data?.errors?.[0]?.message || data?.message || 'Não foi possível atualizar o perfil.')
            }

            setMessage('Perfil atualizado com sucesso.')

            router.refresh()
        } catch (err) {
            console.error(err)

            setError(err instanceof Error ? err.message : 'Não foi possível atualizar o perfil.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-color-woodsmoke text-white">
            <div className="mx-auto max-w-[900px] px-6 py-10 lg:px-10">
                {/* HEADER */}
                <div className="mb-8">
                    <button
                        type="button"
                        onClick={() => router.push('/dashboard')}
                        className="mb-6 flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
                        <FiArrowLeft size={16} />
                        Voltar para Dashboard
                    </button>

                    <p className="mb-2 text-sm font-medium text-color-malachite">Minha conta</p>

                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Meu perfil</h1>

                    <p className="mt-2 text-zinc-500">Gerencie suas informações pessoais.</p>
                </div>

                {/* PROFILE CARD */}
                <section className="overflow-hidden rounded-2xl border border-white/10 bg-color-codgray shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                    {/* PROFILE HEADER */}
                    <div className="border-b border-white/10 p-6 md:p-8">
                        <div className="flex items-center gap-4">
                            <div className="flex size-16 items-center justify-center rounded-full bg-color-malachite text-xl font-bold text-black">
                                {name ? name.charAt(0).toUpperCase() : 'U'}
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold">{name || 'Usuário'}</h2>

                                <p className="text-sm text-zinc-500">{email}</p>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">
                        <div className="space-y-6">
                            {/* NAME */}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                                    Nome
                                </label>

                                <div className="relative">
                                    <FiUser
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                                    />

                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-color-woodsmoke py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-[var(--malachite-700)]"
                                        placeholder="Seu nome"
                                    />
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                                    E-mail
                                </label>

                                <div className="relative">
                                    <FiMail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-color-woodsmoke py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-color-clay focus:border-[var(--malachite-700)]"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            {/* MESSAGES */}
                            {message && (
                                <div className="flex items-center gap-2 rounded-xl border border-[color-mix(in_srgb,var(--malachite-500)_20%,transparent)] bg-[color-mix(in_srgb,var(--malachite-500)_5%,transparent)] p-4 text-sm text-color-malachite">
                                    <FiCheck size={17} />
                                    {message}
                                </div>
                            )}

                            {error && (
                                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">
                                    {error}
                                </div>
                            )}

                            {/* ACTIONS */}
                            <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
                                <button
                                    type="button"
                                    onClick={() => router.push('/dashboard')}
                                    className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-xl bg-color-malachite px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
                                    {loading ? 'Salvando...' : 'Salvar alterações'}
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}
