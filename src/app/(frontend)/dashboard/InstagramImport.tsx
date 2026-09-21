'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Instagram, ArrowLeft, Sparkles, Loader2 } from 'lucide-react'

interface InstagramImportProps {
    template: string
}

export default function InstagramImport({ template }: InstagramImportProps) {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    function handleUsername(value: string) {
        const cleanValue = value
            .replace('@', '')
            .replace(/\s/g, '')
            .replace(/[^a-zA-Z0-9._]/g, '')

        setUsername(cleanValue)
        setError('')
    }

    async function handleSubmit() {
        if (!username.trim()) {
            setError('Digite seu @ do Instagram.')
            return
        }

        try {
            setLoading(true)
            setError('')

            const response = await fetch('/api/instagram/import', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.error || 'Não foi possível importar esse Instagram.')
                return
            }

            if (!data.profile) {
                setError('O perfil foi encontrado, mas não retornou dados.')
                return
            }

            console.log('PERFIL IMPORTADO:', data.profile)

            // Salva temporariamente os dados importados.
            // O Customize vai ler essas informações.
            sessionStorage.setItem(
                'instagram-import',
                JSON.stringify({
                    profile: data.profile,
                    template,
                    importedAt: Date.now(),
                })
            )

            console.log('DADOS SALVOS:', JSON.parse(sessionStorage.getItem('instagram-import') || '{}'))

            // Envia para o Customize do template escolhido.
            router.push(`/dashboard/customize?template=${encodeURIComponent(template)}&source=instagram`)
        } catch (error) {
            console.error('ERRO AO IMPORTAR INSTAGRAM:', error)

            setError('Não foi possível conectar ao serviço de importação.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-zinc-950 px-4 py-16 text-white">
            <div className="mx-auto max-w-xl">
                <Link
                    href={`/dashboard/create?template=${template}`}
                    className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
                    <ArrowLeft className="h-4 w-4" />
                    Voltar
                </Link>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                        <Instagram className="h-7 w-7" />
                    </div>

                    <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">PLUS</span>
                    </div>

                    <h1 className="mt-4 text-3xl font-bold">Crie seu site pelo Instagram</h1>

                    <p className="mt-3 text-zinc-400">
                        Digite seu @ e vamos usar informações públicas do seu perfil para preparar uma primeira versão
                        do seu site.
                    </p>

                    <div className="mt-8">
                        <label htmlFor="instagram" className="mb-2 block text-sm font-medium">
                            Seu Instagram
                        </label>

                        <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-950 px-4 focus-within:border-green-500">
                            <span className="text-zinc-500">@</span>

                            <input
                                id="instagram"
                                type="text"
                                value={username}
                                onChange={(e) => handleUsername(e.target.value)}
                                placeholder="seuinstagram"
                                autoComplete="off"
                                disabled={loading}
                                className="w-full bg-transparent px-2 py-4 text-white outline-none placeholder:text-zinc-600 disabled:opacity-60"
                            />
                        </div>

                        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
                    </div>

                    <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                        <p className="text-sm leading-6 text-zinc-400">
                            Usaremos informações públicas deste perfil para preparar uma primeira versão. Você poderá
                            revisar e alterar tudo antes de publicar.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-4 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60">
                        {loading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Importando Instagram...
                            </>
                        ) : (
                            <>
                                <Sparkles className="h-5 w-5" />
                                Criar meu site
                            </>
                        )}
                    </button>

                    <Link
                        href={`/dashboard/customize?template=${template}`}
                        className="mt-4 flex w-full items-center justify-center text-sm text-zinc-400 transition hover:text-white">
                        Prefiro preencher manualmente
                    </Link>
                </div>
            </div>
        </main>
    )
}
