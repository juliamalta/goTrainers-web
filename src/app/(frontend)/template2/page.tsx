import { HeroSection1 } from '@/components/sections/hero-section'

import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'

import Cards2 from '@/components/sections/Cards/Card2'
import Metrics1 from '@/components/sections/Metrics/Metrics1'
import { Features2 } from '@/components/sections/Features/Features2'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import Cards5 from '@/components/sections/Cards/Card5'
import Contact from '@/components/sections/Contact/Contact'
import { HeroSection2 } from '@/components/sections/hero-section/hero-section2'
import Metrics2 from '@/components/sections/Metrics/Metrics2'
import Cards6 from '@/components/sections/Cards/Card6'
import { Features3 } from '@/components/sections/Features/Features3'
import Testimonials1 from '@/components/sections/testimonials/testimonials1'
import { Contact1 } from '@/components/sections/Contact/Contact1'

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0C0F0F]">
            <div>
                {/* HERO */}
                <HeroSection2
                    titlePrimary="PERSONAL TRAINING EXCLUSIVO"
                    title={
                        <>
                            Transformação
                            <br />
                            Física &amp;
                            <br />
                            Performance
                            <br />
                            para{' '}
                            <span className="font-medium italic text-color-saffron">
                                Líderes de
                                <br />
                                Alto Padrão.
                            </span>
                        </>
                    }
                    desc="Metodologia científica individualizada, privacidade absoluta e acompanhamento sob medida para quem valoriza tempo, estética e saúde no mais alto nível."
                    button1text="COMECE SUA TRANSFORMAÇÃO"
                    button2text="CONHEÇA O MÉTODO"
                    img="/images/imag2.png"
                    tag={[
                        {
                            icon: <FaUsers color="#F5C842" size={20} />,
                            text: 'Vagas exclusivas',
                        },
                        {
                            icon: <FaStar color="#F5C842" size={20} />,
                            text: 'Apenas 8 clientes ativos',
                        },
                        {
                            icon: <CiTimer color="#F5C842" size={20} />,
                            text: 'Acompanhamento individual',
                        },
                    ]}
                    cardText="Apenas 8 Clientes Ativos"
                    cardTitle="VAGAS EXCLUSIVAS"
                />
                <Metrics2
                    metrics={[
                        {
                            number: '+8 anos',
                            text: 'de experiência prática em alta performance e biomecânica avançada.',
                        },
                        {
                            number: '+300',
                            text: 'alunos e executivos C-level transformados com longevidade.',
                        },
                        {
                            number: '95%',
                            text: 'de retenção e consistência ininterrupta a longo prazo.',
                        },
                        {
                            number: '1:1',
                            text: 'atendimento 100% individualizado, privativo e sem dispersão.',
                        },
                    ]}
                />
                <Cards6
                    title="Treinamento pensado para você."
                    desc="Cada acompanhamento é minuciosamente calibrado para a sua rotina, objetivos biomecânicos e ritmo de vida executivo."
                    cards={[
                        {
                            desc: 'MÓDULO PRESENCIAL',
                            title: 'Performance Privativa',
                            text: 'Sessões 100% presenciais em estúdio privativo selecionado ou no conforto do seu condomínio com privacidade irrepreensível.',
                            price: 'R$ 1.490/mês',
                            option: [
                                'Avaliação postural tridimensional completa',
                                'Periodização sob medida com foco estético e postural',
                                'Suporte contínuo para recuperação e sono',
                            ],
                            link: 'https://wa.me/5531999999999?text=Olá!%20Tenho%20interesse%20na%20Performance%20Privativa',
                            iconBgColor: '#D1FAE5',
                            featured: false,
                        },
                        {
                            desc: 'CONCIERGE TOTAL',
                            title: 'Concierge Executivo Full',
                            text: 'Atendimento híbrido de máxima conveniência. Gestão atlética completa para quem viaja frequentemente e busca precisão cirúrgica.',
                            price: 'R$ 2.990/mês',
                            option: [
                                'Alinhamento direto com seu médico e nutricionista',
                                'Planejamento de treinos em viagens internacionais',
                                'Monitoramento de biomarcadores e recuperação diária',
                                'Atendimento presencial prioritário flexível',
                            ],
                            link: 'https://wa.me/5531999999999?text=Olá!%20Tenho%20interesse%20no%20Concierge%20Executivo%20Full',
                            iconBgColor: '#CCFBF1',
                            featured: true,
                        },
                        {
                            desc: 'MÓDULO REMOTO',
                            title: 'Consultoria Remota Elite',
                            text: 'Prescrição estratégica remota para líderes que treinam com autonomia ao redor do mundo, sem prescindir do mais alto padrão técnico.',
                            price: 'R$ 890/mês',
                            option: [
                                'Análise postural e biomecânica em vídeo semanal',
                                'Ajustes biomecânicos e progressão milimétrica de carga',
                                'Canal privativo prioritário via WhatsApp',
                            ],
                            link: 'https://wa.me/5531999999999?text=Olá!%20Tenho%20interesse%20na%20Consultoria%20Remota%20Elite',
                            iconBgColor: '#DCFCE7',
                            featured: false,
                        },
                    ]}
                />
                <Features3
                    img="/images/imag3.png"
                    title="Experiência, dedicação e compromisso com você"
                    desc="Meu objetivo é oferecer um acompanhamento de alto nível, com estratégia, atenção individual e ajustes constantes para alcançar resultados consistentes."
                    features={[
                        {
                            number: '01',
                            title: 'Estratégia Personalizada',
                            desc: 'Periodização desenhada sob demanda metabólica específica, respeitando estresse diário e recuperação celular.',
                        },
                        {
                            number: '02',
                            title: 'Acompanhamento Individual',
                            desc: 'Zero distrações ou academias lotadas. Foco 100% na qualidade da execução e segurança articular.',
                        },
                        {
                            number: '03',
                            title: 'Evolução Mensurável',
                            desc: 'Métricas periódicas de composição corporal, mobilidade, VO2 estimado e força funcional quantificável.',
                        },
                        {
                            number: '04',
                            title: 'Ajustes Contínuos',
                            desc: 'Adaptações em tempo real de volume e intensidade para acomodar semanas de reuniões críticas ou viagens.',
                        },
                    ]}
                />
                <Testimonials1
                    title="Resultados que falam por si."
                    testimonial={[
                        {
                            name: 'Dr. Marcelo Arantes',
                            desc: 'A flexibilidade e o rigor técnico transformaram minha disposição diária e composição corporal em 6 meses, conciliando com uma rotina de viagens intensas.',
                            type: 'Cirurgião & Aluno há 2 anos',
                        },
                        {
                            name: 'Beatriz Sampaio',
                            desc: 'Treinar com esse nível de privacidade e precisão biomecânica é um divisor de águas. Cada minuto da sessão é focado em resultado real, sem tempo perdido.',
                            type: 'Diretora Executiva & Aluna há 18 meses',
                        },
                        {
                            name: 'Rodrigo Fontes',
                            desc: 'O diferencial é a inteligência por trás de cada treino. Menos desgaste desnecessário, muito mais força e estética refinada. Vale cada investimento.',
                            type: 'Sócio-fundador & Aluno há 3 anos',
                        },
                    ]}
                />
                <Contact1
                    title="Seu próximo nível começa agora."
                    desc="Treinamento personalizado, estratégia e acompanhamento exclusivo para quem busca resultados de alta performance sem abrir mão do conforto e discrição."
                    link="https://wa.me/5531999999999?text=Olá!%20Gostaria%20de%20conhecer%20seu%20acompanhamento."
                />
            </div>
        </main>
    )
}
