import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'

import config from '@payload-config'

import { Footer } from '@/components/sections/Footer'
import NavigationHeader2 from '@/components/sections/Navigations/NavigationHeader2'

type DashboardLayoutProps = React.PropsWithChildren

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
    const headers = await getHeaders()

    const payload = await getPayload({
        config,
    })

    const { user } = await payload.auth({
        headers,
    })

    return (
        <>
            <NavigationHeader2
                user={{
                    name: user?.name || 'Usuário',
                    email: user?.email || '',
                    avatar: typeof user?.avatar === 'string' ? user.avatar : undefined,
                }}
            />

            {children}

            <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
        </>
    )
}
