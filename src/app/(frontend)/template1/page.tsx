import { HeroSection1 } from '@/components/sections/hero-section'

import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'

import Cards2 from '@/components/sections/Cards/Card2'
import Metrics1 from '@/components/sections/Metrics/Metrics1'
import { Features2 } from '@/components/sections/Features/Features2'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import Cards5 from '@/components/sections/Cards/Card5'
import Contact from '@/components/sections/Contact/Contact'

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0C0F0F]">
            <div>
                {/* HERO */}
                <HeroSection1
                    titlePrimary="PROFISSIONALISMO QUE GERA RESULTADOS"
                    title={
                        <>
                            Transforme seu objetivo em{' '}
                            <span className="font-bold text-color-malachite">resultados reais.</span>
                        </>
                    }
                    desc="Ofereço um serviço personalizado, pensado para entender suas necessidades e entregar uma experiência de qualidade, com atenção aos detalhes e foco no que realmente importa para você."
                    button1text="Quero começar"
                    button2text="Conheça meu trabalho"
                    img="/images/imag1.png"
                    tag={[
                        {
                            icon: <FaUsers color="#00E676" size={20} />,
                            text: '+480 clientes atendidos',
                        },
                        {
                            icon: <FaStar color="#00E676" size={20} />,
                            text: '4.9/5 de satisfação',
                        },
                        {
                            icon: <CiTimer color="#00E676" size={20} />,
                            text: 'Anos de experiência',
                        },
                    ]}
                />

                {/* MÉTRICAS */}
                <Metrics1
                    metrics={[
                        {
                            number: '+8',
                            text: 'Anos de experiência',
                        },
                        {
                            number: '+480',
                            text: 'Clientes atendidos',
                        },
                        {
                            number: '4.9',
                            text: 'Nota média dos clientes',
                        },
                        {
                            number: '+1mil',
                            text: 'Projetos realizados',
                        },
                    ]}
                />

                {/* SERVIÇOS */}
                <Cards5
                    title="Meus serviços"
                    desc="Conheça as soluções que ofereço e escolha a opção ideal para você"
                    cards={[
                        {
                            desc: 'Atendimento personalizado',
                            title: 'Serviço Personalizado',
                            text: 'Uma solução pensada de acordo com suas necessidades, objetivos e expectativas.',
                            price: 'R$ 299,90',
                            option: ['Atendimento personalizado', 'Solução sob medida', 'Acompanhamento completo'],
                            link: 'https://wa.me/5531999999999?text=Olá!%20Tenho%20interesse%20no%20Serviço%20Personalizado.',
                            iconBgColor: '#D1FAE5',
                            featured: true,
                        },
                        {
                            desc: 'Qualidade e atenção',
                            title: 'Atendimento Completo',
                            text: 'Conte com acompanhamento próximo e atenção em cada etapa do processo.',
                            price: 'R$ 499,90/mês',
                            option: ['Acompanhamento próximo', 'Suporte durante o processo', 'Atendimento completo'],
                            link: 'https://wa.me/5531999999999?text=Olá!%20Tenho%20interesse%20no%20Atendimento%20Completo.',
                            iconBgColor: '#CCFBF1',
                            featured: true,
                        },
                        {
                            desc: 'Foco em resultados',
                            title: 'Soluções Sob Medida',
                            text: 'Estratégias e serviços desenvolvidos para entregar resultados que realmente fazem diferença.',
                            price: 'R$ 799,90',
                            option: ['Estratégia personalizada', 'Foco em resultados', 'Soluções sob medida'],
                            link: 'https://wa.me/5531999999999?text=Olá!%20Tenho%20interesse%20nas%20Soluções%20Sob%20Medida.',
                            iconBgColor: '#DCFCE7',
                        },
                    ]}
                />

                {/* SOBRE O PROFISSIONAL */}
                <Features2
                    img="/images/imag1.png"
                    title="Experiência, dedicação e compromisso com você"
                    desc="Meu objetivo é oferecer um serviço de qualidade, entender o que você precisa e buscar sempre a melhor solução. Trabalho com dedicação, profissionalismo e atenção aos detalhes para proporcionar uma experiência diferenciada."
                    features={[
                        {
                            title: 'Atendimento personalizado para cada cliente',
                        },
                        {
                            title: 'Experiência e conhecimento na área',
                        },
                        {
                            title: 'Acompanhamento próximo durante todo o processo',
                        },
                        {
                            title: 'Compromisso com qualidade e bons resultados',
                        },
                    ]}
                />

                {/* DEPOIMENTOS */}
                <Cards2
                    title="O que meus clientes dizem?"
                    cards={[
                        {
                            name: 'Mariana Costa',
                            text: 'Fiquei muito satisfeita com o atendimento. Desde o primeiro contato fui muito bem atendida e o resultado superou minhas expectativas.',
                        },
                        {
                            name: 'Rafael Mendes',
                            text: 'Profissional extremamente atencioso e comprometido. Entendeu exatamente o que eu precisava e entregou um ótimo resultado.',
                        },
                        {
                            name: 'Camila Oliveira',
                            text: 'O atendimento fez toda a diferença. Tive suporte durante todo o processo e fiquei muito satisfeita com o resultado final.',
                        },
                        {
                            name: 'Bruno Almeida',
                            text: 'Excelente profissional. Trabalho de qualidade, atendimento rápido e muita atenção aos detalhes. Recomendo muito.',
                        },
                    ]}
                />

                {/* CONTATO */}
                <Contact
                    title={
                        <>
                            Pronto para dar o próximo passo?
                            <br />
                            <span className="font-bold text-color-malachite">Entre em contato comigo.</span>
                        </>
                    }
                    text="Conte um pouco sobre o que você precisa e descubra como posso ajudar. Será um prazer conversar com você."
                    buttontext="Entre em contato"
                />

                {/* WHATSAPP */}
                <WhatsAppFloat phone="5531999999999" />
            </div>
        </main>
    )
}
