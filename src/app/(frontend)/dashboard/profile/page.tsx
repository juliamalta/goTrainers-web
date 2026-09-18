import config from '@payload-config'
import { headers } from 'next/headers'
import { getPayload } from 'payload'

import ProfileForm from '@/components/dashboard/ProfileForm'

export default async function ProfilePage() {
    const payload = await getPayload({
        config,
    })

    const { user } = await payload.auth({
        headers: await headers(),
    })

    if (!user) {
        return (
            <main className="min-h-screen bg-color-woodsmoke px-6 py-10 text-white">
                <div className="mx-auto max-w-[900px]">
                    <div className="rounded-2xl border border-white/10 bg-color-codgray p-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                        <h1 className="text-2xl font-bold">Usuário não encontrado</h1>

                        <p className="mt-2 text-sm text-zinc-500">Faça login para acessar seu perfil.</p>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <ProfileForm
            user={{
                id: user.id,
                name: user.name || '',
                email: user.email || '',
            }}
        />
    )
}
