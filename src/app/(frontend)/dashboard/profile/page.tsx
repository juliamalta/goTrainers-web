import { headers } from 'next/headers'
import { getPayload } from 'payload'

import config from '@payload-config'

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
            <main className="min-h-screen bg-[#151817] px-6 py-10 text-white">
                <div className="mx-auto max-w-[900px]">
                    <div className="rounded-2xl border border-white/5 bg-[#0d0f0e] p-8">
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
