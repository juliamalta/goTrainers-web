import { getPayload } from 'payload'

import config from '@/../payload.config'

export default async function Dashboard() {
    const payload = await getPayload({ config })

    const { user } = await payload.auth({
        headers: await import('next/headers').then((mod) => mod.headers()),
    })

    return (
        <main className="min-h-screen">
            <div>
                <h1 className="container">Olá, {user?.name || 'usuário'}!</h1>
            </div>
        </main>
    )
}
