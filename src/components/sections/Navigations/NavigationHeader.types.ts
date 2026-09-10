export interface NavItem {
    text: string
    link: string
    submenus?: { title: string; href: string }[] // Submenus dentro de cada item de navegação
}

export type NavigationHeaderProps = {
    logo: string
    buttonLink: string
    navs: NavItem[]
}
