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

    /*
     * Busca o site do usuário logado
     */
    const sites = user
        ? await payload.find({
              collection: 'sites',
              where: {
                  user: {
                      equals: user.id,
                  },
              },
              limit: 1,
              depth: 0,
          })
        : null

    const site = sites?.docs?.[0]

    /*
     * Verifica se o site já foi publicado
     */
    const hasPublishedSite = site?.published === true

    /*
     * URL pública do site
     *
     * Seu sistema publica em:
     * /personal/[slug]
     */
    const siteUrl = hasPublishedSite && site?.slug ? `/personal/${encodeURIComponent(site.slug)}` : undefined

    /*
     * Define para onde o Dashboard deve levar:
     *
     * Publicado
     * → /dashboard/info
     *
     * Template escolhido, mas não publicado
     * → /dashboard/customize?template=...
     *
     * Nenhum site/template
     * → /dashboard
     */
    let dashboardHref = '/dashboard'
    let customizeHref = '/dashboard/customize'

    if (site?.template === 'template-1') {
        customizeHref = '/dashboard/customize?template=fitness'
    } else if (site?.template === 'template-2') {
        customizeHref = '/dashboard/customize?template=premium'
    }

    if (hasPublishedSite) {
        dashboardHref = '/dashboard/info'
    } else if (site?.template) {
        dashboardHref = customizeHref
    }

    return (
        <>
            <NavigationHeader2
                user={{
                    name: user?.name || 'Usuário',
                    email: user?.email || '',
                }}
                hasPublishedSite={hasPublishedSite}
                siteUrl={siteUrl}
                dashboardHref={dashboardHref}
                customizeHref={customizeHref}
            />

            {children}

            <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
        </>
    )
}
