import Link from 'next/link'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import { Instagram, PencilLine, Sparkles } from 'lucide-react'
import { CreateForMeCard } from './CreateForMeCard'

import config from '@payload-config'

interface CreatePageProps {
    searchParams: Promise<{
        template?: string
    }>
}

export default async function CreatePage({ searchParams }: CreatePageProps) {
    const params = await searchParams
    const template = params.template || 'fitness'

    const payload = await getPayload({
        config,
    })

    const { user } = await payload.auth({
        headers: await headers(),
    })

    if (!user) {
        redirect('/auth/login')
    }

    if (template === 'template-5' || template === 'linkInbio') {
        redirect('/dashboard/customize?template=template-5')
    }

    const validTemplates = ['fitness', 'premium', 'clean', 'feminino']

    if (!validTemplates.includes(template)) {
        redirect('/dashboard')
    }

    return (
        <main className="min-h-screen bg-color-woodsmoke px-4 py-16 text-white">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                        <Sparkles className="h-4 w-4" />
                        GoTrainers
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Como você quer criar seu site?</h1>

                    <p className="mt-4 text-base text-zinc-400 md:text-lg">
                        Escolha como deseja adicionar suas informações. Você poderá revisar e personalizar tudo antes de
                        publicar.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {/* MANUAL */}
                    <div className="flex h-full min-h-[302px] flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-7">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800">
                            <PencilLine className="h-6 w-6" />
                        </div>

                        <h2 className="text-2xl font-semibold">Preencher manualmente</h2>

                        <p className="mt-3 flex-1 text-zinc-400">
                            Adicione suas informações, serviços, textos e fotos do seu jeito.
                        </p>

                        <Link
                            href={`/dashboard/customize?template=${template}`}
                            className="mt-8 flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200">
                            Preencher meu site
                        </Link>
                    </div>

                    {/* INSTAGRAM PLUS */}
                    <div className="relative flex h-full min-h-[302px] flex-col overflow-hidden rounded-3xl border border-green-500/40 bg-zinc-900 p-7">
                        <div className="absolute right-5 top-5 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
                            PLUS
                        </div>

                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                            <Instagram className="h-6 w-6" />
                        </div>

                        <h2 className="text-2xl font-semibold">Criar pelo Instagram</h2>

                        <p className="mt-3 flex-1 text-zinc-400">
                            Informe seu @ do Instagram publico e deixe a IA preparar uma primeira versão do seu site.
                        </p>

                        <Link
                            href={`/dashboard/create/instagram?template=${template}`}
                            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400">
                            <Sparkles className="h-4 w-4" />
                            Usar meu Instagram
                        </Link>
                    </div>

                    <CreateForMeCard template={template} />
                </div>
            </div>
        </main>
    )
}
