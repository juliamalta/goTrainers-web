import { getPayload } from 'payload'
import config from '@/../payload.config'

import DashboardHeader from '@/components/dashboard/DahboardHeader'

import { headers } from 'next/headers'
import Cards3 from '@/components/sections/Cards/Cards3'
import Cards4 from '@/components/sections/Cards/Card4'

export default async function Dashboard() {
    const payload = await getPayload({ config })

    const { user } = await payload.auth({
        headers: await headers(),
    })

    return (
        <main className="bg-color-codgray">
            <div>
                <Cards4
                    titlePrimary="Vamos Começar?"
                    title="Escolha o visual do seu site"
                    desc="Comece com um modelo e personalize depois. Todos os templates são modernos, responsivos e focados em atrair mais alunos."
                    cards={[
                        {
                            title: 'Template 1 — FITNESS',
                            img: '/images/templates.png',
                            tag: ['Alta Energia', 'Neon Green'],
                            desc: 'Moderno, energético e impactante. Fundo escuro, verde neon, grandes imagens, CTAs fortes, visual de academia e foco total em resultados.',
                            link: '/dashboard/customize?template=fitness',
                            buttonText: 'Escolher esse template',
                        },
                        {
                            title: 'Template 2 — PREMIUM',
                            img: '/images/templates.png',
                            tag: ['Alto Ticket', 'Champagne Gold'],
                            desc: 'Sofisticado, elegante e profissional. Fundo escuro, detalhes dourados e champagne, tipografia refinada, ideal para consultoria VIP de alto valor agregado.',
                            link: '/dashboard/customize?template=premium',
                            buttonText: 'Escolher esse template',
                        },
                        {
                            title: 'Template 3 — CLEAN',
                            img: '/images/templates.png',
                            tag: ['Saúde e Postura', 'Clean White'],
                            desc: 'Minimalista, leve e direto ao ponto. Fundo claro, muito espaço em branco, tipografia moderna e foco humanizado no profissional e no bem-estar.',
                            link: '/dashboard/customize?template=clean',
                            buttonText: 'Escolher esse template',
                        },
                    ]}
                />
            </div>
        </main>
    )
}
