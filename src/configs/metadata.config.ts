export const metadataConfig = {
    title: 'GoTrainers',
    description:
        'A plataforma que ajuda personal trainers a criar e gerenciar seu próprio site profissional de forma simples e rápida.',
    openGraph: {
        siteName: 'GoTrainers',
        images: [
            {
                url: '/img/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'GoTrainers',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@GoTrainers',
    },
    icons: {
        icon: [
            {
                url: '/favicon/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/favicon/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        shortcut: '/favicon/favicon.ico',
        apple: '/favicon/apple-touch-icon.png',
    },
    manifest: '/favicon/site.webmanifest',
    robots: {
        index: true,
        follow: true,
    },
    sitemap: 'sitemap.xml',
    appleWebApp: {
        title: 'GoTrainers',
    },
}
