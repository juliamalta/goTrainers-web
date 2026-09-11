import { Footer } from '@/components/sections/Footer'
import NavigationHeader from '@/components/sections/Navigations'
import LogoImage from '../../../../public/images/logo.png'

import { configs } from '@/configs'

type SiteLayoutProps = React.PropsWithChildren

export default function Layout({ children }: SiteLayoutProps) {
    return (
        <>
            {children}

            <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
        </>
    )
}
