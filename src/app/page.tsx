import { Cards1 } from '@/components/sections/Cards'
import { HeroSection } from '@/components/sections/hero-section'
import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'
import Cards3 from '@/components/sections/Cards/Cards3'
import Contact from '@/components/sections/Contact/Contact'


export default function Home() {
    return (
        <main className="min-h-screen bg-[#0C0F0F]">
            <div>
                <HeroSection
                    titlePrimary="A PLATAFORMA Nº 1 PARA PERSONAL TRAINERS"
                    title={
                        <>
                            Seu site profissional pra conquistar{' '}
                            <span className="font-bold text-color-malachite">mais alunos</span>
                        </>
                    }
                    desc="Crie seu site profissional de personal trainer em poucos minutos. Escolha um template, personalize seu conteúdo e comece a divulgar seu trabalho sem precisar de programação."
                    button1text="Criar meu site agora"
                    button2text="Ver templates"
                    tag={[
                        {
                            icon: <FaUsers color="#00E676" size={20} />,
                            text: '+4800 Personal Trainer',
                        },
                        {
                            icon: <FaStar color="#00E676" size={20} />,
                            text: '4.9/5 estrelas de satisfação',
                        },
                        {
                            icon: <CiTimer color="#00E676" size={20} />,
                            text: 'Pronto em 15 minutos',
                        },
                    ]}
                />

                <Cards1
                    title="Do zero ao seu site no ar em 4 passos simples"
                    desc="Crie seu site profissional de forma rápida, simples e sem complicação."
                    cards={[
                        {
                            number: '01',
                            title: 'Crie sua conta',
                            text: 'Cadastre-se na plataforma em menos de 1 minuto sem burocracia.',
                            iconBgColor: '#00E676',
                        },
                        {
                            number: '02',
                            title: 'Escolha seu template',
                            text: 'Escolha entre os designs exclusivos da plataforma e encontre o estilo ideal para o seu negócio.',
                            iconBgColor: '#00E676',
                        },
                        {
                            number: '03',
                            title: 'Personalize seu site',
                            text: 'Adicione suas fotos, serviços, planos, depoimentos e dados de contato com poucos cliques.',
                            iconBgColor: '#00E676',
                        },
                        {
                            number: '04',
                            title: 'Publique',
                            text: 'Seu site estará pronto para ser publicado com um subdomínio ou domínio personalizado.',
                            iconBgColor: '#00E676',
                        },
                    ]}
                />
            </div>

            <Cards3
                titlePrimary="DESIGN QUE CONVERTE"
                title="Um template para cada estilo profissional"
                desc="Estruturados pedagogicamente para transformar visitantes em novos alunos recorrentes."
                cards={[
                    {
                        title: 'Template 1 — FITNESS',
                        img: '/images/templates.png',
                        tag: ['Alta Energia', 'Neon Green'],
                        desc: 'Moderno, energético e impactante. Fundo escuro, verde neon, grandes imagens, CTAs fortes, visual de academia e foco total em resultados.',
                        link: '/templates/fitness',
                        buttonText: 'Visualizar template',
                    },
                    {
                        title: 'Template 2 — PREMIUM',
                        img: '/images/templates.png',
                        tag: ['Alto Ticket', 'Champagne Gold'],
                        desc: 'Sofisticado, elegante e profissional. Fundo escuro, detalhes dourados e champagne, tipografia refinada, ideal para consultoria VIP de alto valor agregado.',
                        link: '/templates/premium',
                        buttonText: 'Visualizar template',
                    },
                    {
                        title: 'Template 3 — CLEAN',
                        img: '/images/templates.png',
                        tag: ['Saúde e Postura', 'Clean White'],
                        desc: 'Minimalista, leve e direto ao ponto. Fundo claro, muito espaço em branco, tipografia moderna e foco humanizado no profissional e no bem-estar.',
                        link: '/templates/clean',
                        buttonText: 'Visualizar template',
                    },
                ]}
                
            />
            <Contact
                        title={
                            <>
                                Seu próximo aluno pode estar
                                <br />
                                <span className="font-bold text-color-malachite">procurando por você agora. </span>
                            </>
                        }
                        text="Crie seu site profissional hoje mesmo e mostre ao mundo o verdadeiro valor do seu trabalho."
                        buttontext="Criar meu site"
                    />
        </main>
    )
}
