'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FiArrowLeft, FiBell, FiLogOut, FiShield } from 'react-icons/fi'

export default function SettingsPage() {
    const router = useRouter()

    const [notifications, setNotifications] = useState(true)
    const [loading, setLoading] = useState(false)

    async function handleLogout() {
        try {
            setLoading(true)

            await fetch('/api/users/logout', {
                method: 'POST',
                credentials: 'include',
            })

            router.push('/login')
            router.refresh()
        } catch (error) {
            console.error(error)
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

                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Configurações</h1>

                    <p className="mt-2 text-zinc-500">Gerencie as configurações da sua conta.</p>
                </div>

                <div className="space-y-6">
                    {/* NOTIFICATIONS */}
                    <section className="rounded-2xl border border-white/10 bg-color-codgray p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] md:p-8">
                        <div className="flex items-center gap-4">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--malachite-500)_10%,transparent)] text-color-malachite">
                                <FiBell size={20} />
                            </div>

                            <div>
                                <h2 className="font-semibold">Notificações</h2>

                                <p className="mt-1 text-sm text-zinc-500">Controle as notificações da sua conta.</p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-color-woodsmoke p-4">
                            <div>
                                <p className="text-sm font-medium">Receber notificações</p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    Receba atualizações importantes sobre seu site.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setNotifications(!notifications)}
                                className={`relative h-6 w-11 rounded-full transition ${
                                    notifications ? 'bg-color-malachite' : 'bg-zinc-700'
                                }`}>
                                <span
                                    className={`absolute top-1 size-4 rounded-full bg-white transition ${
                                        notifications ? 'left-6' : 'left-1'
                                    }`}
                                />
                            </button>
                        </div>
                    </section>

                    {/* SECURITY */}
                    <section className="rounded-2xl border border-white/10 bg-color-codgray p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] md:p-8">
                        <div className="flex items-center gap-4">
                            <div className="flex size-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--malachite-500)_10%,transparent)] text-color-malachite">
                                <FiShield size={20} />
                            </div>

                            <div>
                                <h2 className="font-semibold">Segurança</h2>

                                <p className="mt-1 text-sm text-zinc-500">Gerencie a segurança da sua conta.</p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-color-woodsmoke p-4">
                            <p className="text-sm font-medium">Senha</p>

                            <p className="mt-1 text-xs text-zinc-500">
                                Para alterar sua senha, utilize a recuperação de senha.
                            </p>

                            <button
                                type="button"
                                onClick={() => router.push('/forgot-password')}
                                className="mt-4 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/5">
                                Alterar senha
                            </button>
                        </div>
                    </section>

                    {/* LOGOUT */}
                    <section className="rounded-2xl border border-red-500/10 bg-color-codgray p-6 md:p-8">
                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="font-semibold text-white">Sair da conta</h2>

                                <p className="mt-1 text-sm text-zinc-500">Encerrar sua sessão neste dispositivo.</p>
                            </div>

                            <button
                                type="button"
                                onClick={handleLogout}
                                disabled={loading}
                                className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 px-5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50">
                                <FiLogOut size={17} />

                                {loading ? 'Saindo...' : 'Sair da conta'}
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
