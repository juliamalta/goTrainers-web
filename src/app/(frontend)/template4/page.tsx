import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'
import { HeroSection2 } from '@/components/sections/hero-section/hero-section2'
import { HeroSection3, MethodTicker } from '@/components/sections/hero-section/hero-section3'
import { ChartNoAxesCombined, DraftingCompass, TrendingUp, UserRoundSearch } from 'lucide-react'

import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import heroImage from '../../../../public/images/pessoa4.png'
import { HeroSection4 } from '@/components/sections/hero-section/hero-section4'
import { Metrics1 } from '@/components/sections/Metrics'
import Metrics3 from '@/components/sections/Metrics/Metrics3'
import Card7 from '@/components/sections/Cards/Card7'
import Card8 from '@/components/sections/Cards/Card8'
import Results4 from '@/components/sections/Results/Results4'
import Cards6 from '@/components/sections/Cards/Card6'
import Cards9 from '@/components/sections/Cards/Card9'
import AboutUs4 from '@/components/sections/AboutUs/AboutUs4'
import about from '../../../../public/images/pessoa4.png'
import Contact4 from '@/components/sections/Contact/Contact4'
const resultsData = [
    {
        beforeLabel: 'Antes (sedentária)',
        beforeTitle: 'Dores nas costas',
        beforeText: 'Baixa disposição',
        afterLabel: 'Depois (4 meses)',
        afterTitle: '−7kg de gordura',
        afterText: 'Postura corrigida',
        name: 'Camila Vasconcelos, 34 anos',
        beforeImage: '/images/results4-before.png',
        afterImage: '/images/results4-after.png',
        quote: 'Tinha medo de me machucar treinando em casa, mas os vídeos deram total segurança. Hoje não sinto mais dores nas costas!',
        objective: 'Tonificação e Saúde',
        plan: 'Plano Trimestral',
    },
    {
        beforeLabel: 'Antes (rotina corrida)',
        beforeTitle: 'Sem tempo',
        beforeText: 'Desistia sempre',
        afterLabel: 'Depois (3 meses)',
        afterTitle: 'Treinos de 35 min',
        afterText: 'Constância de 12 semanas',
        name: 'Mariana Toledo, 29 anos',
        quote: 'Trabalhava o dia inteiro e achava que precisava de 2 horas na academia. A Ju montou treinos objetivos que transformaram meu hábito em energia.',
        objective: 'Definição e Rotina',
        plan: 'Plano Bimestral',
    },
]

export default function Home() {
    return (
        <main className="min-h-screen bg-color-ivory">
            <div>
                {/* HERO */}
                <HeroSection4
                    titlePrimary="TREINAMENTO FEMININO"
                    title={
                        <>
                            Treinamento feminino para você se sentir mais{' '}
                            <span className="font-medium italic text-color-dustyRose">forte, saudável</span> e
                            confiante.
                        </>
                    }
                    desc="Metodologia baseada na fisiologia feminina, planejada para a sua rotina real — seja em casa ou na academia. Conquiste definição, postura e vitalidade com acompanhamento próximo e profissional."
                    button1text="Quero começar agora"
                    button2text="Conhecer o programa"
                    offer={{
                        label: 'Apenas nesta turma',
                        originalPrice: 'De R$ 270',
                        price: 'R$ 100',
                        suffix: '/mês no plano inicial',
                        savings: 'Economize R$ 170 e garanta suporte individual diretamente com a Juliana.',
                    }}
                    img={heroImage}
                    tag={[
                        {
                            icon: <FaUsers color="#4a192c" size={20} />,
                            text: 'Treino 100% personalizado',
                        },
                        {
                            icon: <CiTimer color="#4a192c" size={20} />,
                            text: 'Acompanhamento online',
                        },
                        {
                            icon: <FaStar color="#4a192c" size={20} />,
                            text: 'Vídeos explicativos em HD',
                        },
                    ]}
                />
                <Metrics3
                    metrics={[
                        {
                            number: '+9 Anos',
                            title: 'DE EXPERIÊNCIA',
                            text: 'Presencial e Consultoria Online',
                        },
                        {
                            number: '100%',
                            title: 'TREINOS PERSONALIZADOS',
                            text: 'Fisiologia e rotina individual',
                        },
                        {
                            number: 'Direto',
                            title: 'ACOMPANHAMENTO ONLINE',
                            text: 'Feedback e ajustes semanais',
                        },
                        {
                            number: 'Para Você',
                            title: 'TODOS OS NÍVEIS',
                            text: 'Iniciante, intermediária e avançada',
                        },
                    ]}
                />
                <Card8
                    title="Como funciona"
                    desc="Um acompanhamento personalizado, pensado para seus objetivos, sua rotina e seu nível de condicionamento."
                    cards={[
                        {
                            number: '01',
                            title: 'Conte seus objetivos',
                            text: 'Você preenche uma anamnese detalhada sobre seu histórico, dores, nível de condicionamento, rotina diária e tempo disponível para treinar.',
                            iconBgColor: '#F5E7EA',
                        },
                        {
                            number: '02',
                            title: 'Receba seu treino personalizado',
                            text: 'Desenvolvo seu plano exclusivo de treino, em casa ou na academia, com vídeos demonstrativos de cada movimento e orientações posturais claras.',
                            iconBgColor: '#F5E7EA',
                        },
                        {
                            number: '03',
                            title: 'Evolua com acompanhamento',
                            text: 'Tiramos dúvidas, você pode enviar vídeos executando os exercícios para correção de postura e fazemos ajustes contínuos para manter sua motivação em alta.',
                            iconBgColor: '#F5E7EA',
                        },
                    ]}
                    button1text="Garantir minha vaga bonus"
                    button1url="319311331"
                    cardText="“Assinando qualquer plano, você participa de uma aula online em grupo por mês para tirar dúvidas, melhorar a execução e manter a motivação.”"
                    cardTitle="Encontro Mensal em Grupo ao Vivo"
                />
                <Results4 results={resultsData} />
                {/*
                        {
                            beforeLabel: 'Antes (sedentária)',
                            beforeTitle: 'Dores nas costas',
                            beforeText: 'Baixa disposição',
                            afterLabel: 'Depois (4 meses)',
                            afterTitle: '−7kg de gordura',
                            afterText: 'Postura corrigida',
                            name: 'Camila Vasconcelos, 34 anos',
                            quote: 'Tinha medo de me machucar treinando em casa, mas os vídeos deram total segurança. Hoje não sinto mais dores nas costas!',
                            objective: 'Tonificação e Saúde',
                            plan: 'Plano Trimestral',
                        },
                        {
                            beforeLabel: 'Antes (rotina corrida)',
                            beforeTitle: 'Sem tempo',
                            beforeText: 'Desistia sempre',
                            afterLabel: 'Depois (3 meses)',
                            afterTitle: 'Treinos de 35 min',
                            afterText: 'Constância de 12 semanas',
                            name: 'Mariana Toledo, 29 anos',
                            quote: 'Trabalhava o dia inteiro e achava que precisava de 2 horas na academia. A Ju montou treinos objetivos que transformaram meu hábito em energia.',
                            objective: 'Definição e Rotina',
                            plan: 'Plano Bimestral',
                        },
                        {
                            beforeLabel: 'Antes (pós-parto)',
                            beforeTitle: 'Diástase leve',
                            beforeText: 'Autoestima abalada',
                            afterLabel: 'Depois (6 meses)',
                            afterTitle: 'Core recuperado',
                            afterText: 'Autoestima renovada',
                            name: 'Beatriz Silveira, 38 anos',
                            quote: 'Após minha segunda gestação, sentia meu corpo fraco. O olhar técnico da Ju sobre respiração e fortalecimento profundo fez toda a diferença no meu retorno.',
                            objective: 'Fortalecimento pós-parto',
                            plan: 'Plano Trimestral',
                        },
                    ]}
                */}
                <Cards9
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
                <AboutUs4
                    title="Conheça Camila Ribeiro"
                    description="Treinadora pessoal que ajuda você a conquistar mais força, disposição e confiança."
                    imgTitle="REGISTRO PROFISSIONAL ATIVO"
                    imgDesc="CREF 032253G/MG"
                    img={about}
                    paragraphs={[
                        'Há mais de 9 anos, ajudo mulheres a conquistar saúde, força e disposição por meio do exercício físico.',
                        'Cada treino é pensado para respeitar sua rotina e acompanhar sua evolução.',
                    ]}
                    cards={[
                        {
                            title: 'Pós-graduação',
                            description: 'Bases fisiológicas do treinamento físico.',
                        },
                        {
                            title: 'Especialização',
                            description: 'Treinamento de força para mulheres.',
                        },
                        {
                            title: 'Certificação',
                            description: 'Avaliação física e prescrição de exercícios.',
                        },
                    ]}
                />
                <Contact4
                    eyebrow="VAGAS LIMITADAS PARA ACOMPANHAMENTO"
                    title="Pronta para começar sua transformação?"
                    description="Você não precisa de horas na academia nem de métodos radicais. Precisa apenas de um plano feito para o seu corpo e do suporte certo para não desistir."
                    primaryButtonText="Quero iniciar meu treinamento"
                    primaryButtonHref="#anamnese"
                    secondaryButtonText="Falar no WhatsApp"
                    secondaryButtonHref="https://wa.me/5531999999999"
                />
            </div>
        </main>
    )
}
