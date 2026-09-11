import { Footer } from '@/components/sections/Footer'
import NavigationHeader from '@/components/sections/Navigations'
import LogoImage from '../../../../public/images/logo.png'

import { configs } from '@/configs'

type SiteLayoutProps = React.PropsWithChildren

export default function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <>
            <NavigationHeader
                logo={LogoImage.src}
                navs={configs.menu}
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSf7UDEd4o_ll21lRKERe2rf83vGASGW0e1vJukTut4rD1OuPg/viewform"
            />

            {children}

            <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
        </>
    )
}
