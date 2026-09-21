import { FaStar, FaUsers } from 'react-icons/fa6'
import { CiTimer } from 'react-icons/ci'
import { HeroSection2 } from '@/components/sections/hero-section/hero-section2'
import Metrics2 from '@/components/sections/Metrics/Metrics2'
import Cards6 from '@/components/sections/Cards/Card6'
import { Features3 } from '@/components/sections/Features/Features3'
import Testimonials1 from '@/components/sections/testimonials/testimonials1'
import { Contact1 } from '@/components/sections/Contact/Contact1'
import { HeroSection3, MethodTicker } from '@/components/sections/hero-section/hero-section3'
import AboutUs1 from '@/components/sections/AboutUs/AboutUs'
import Card7 from '@/components/sections/Cards/Card7'
import { ChartNoAxesCombined, DraftingCompass, TrendingUp, UserRoundSearch } from 'lucide-react'
import AboutUs2 from '@/components/sections/AboutUs/About2'
import { Forms1 } from '@/components/sections/Form/Forms1'
import { RiVerifiedBadgeLine } from 'react-icons/ri'
import { Features4 } from '@/components/sections/Features/Features4'
import { Accessibility, Dumbbell, RefreshCw, Zap } from 'lucide-react'
import AboutUs3 from '@/components/sections/AboutUs/AboutUs3'
import Testimonials2 from '@/components/sections/testimonials/testimonial2'
import Feelings1 from '@/components/sections/Feelings/Feelings1'
import Contact3 from '@/components/sections/Contact/Contact3'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <div>
                {/* HERO */}
                <HeroSection3
                    titlePrimary="PERSONAL TRAINER • PERFORMANCE • SAÚDE • WELLNESS"
                    title={
                        <>
                            Seu corpo pode mais. Seu treino pode ser{' '}
                            <span className="font-medium italic">diferente.</span>
                        </>
                    }
                    desc="Treinos personalizados para construir força, disposição e uma rotina sustentável que realmente funcione na sua vida. Sem extremismos, com precisão biomecânica."
                    button1text="COMEÇAR MINHA JORNADA"
                    button2text="CONHECER MEU MÉTODO"
                    img="/images/image3.png"
                    tag={[
                        {
                            icon: <FaUsers color="#F5C842" size={20} />,
                            text: '+120 alunos transformados',
                        },
                        {
                            icon: <FaStar color="#F5C842" size={20} />,
                            text: 'Avaliação 4.9',
                        },
                        {
                            icon: <CiTimer color="#F5C842" size={20} />,
                            text: 'Online + Presencial',
                        },
                    ]}
                    cardText="+120 ALUNOS TRANSFORMADOS"
                    cardTitle="100% PERSONALIZADO"
                />

                <MethodTicker />
                <AboutUs1
                    eyebrow="Uma nova forma de treinar"
                    title="Não é sobre treinar mais"
                    highlightedTitle={
                        <>
                            É sobre <em className="rounded-full bg-color-softgray px-2 sm:px-3">entender</em> seu corpo,
                            construir <em className="rounded-full bg-color-softgray px-2 sm:px-3">constância</em> e
                            transformar <em className="rounded-full bg-color-softgray px-2 sm:px-3">movimento</em> em
                            parte natural da sua <em className="rounded-full bg-color-softgray px-2 sm:px-3">vida</em>.
                        </>
                    }
                    description="Sem metas irreais que te esgotam na terceira semana. Construímos autonomia, força real e longevidade através de ciência do movimento e empatia."
                />
                <Card7
                    title="Um método pensado para você."
                    desc="Não existem duas rotinas iguais. Por isso, seu treino também não deveria ser igual ao de todo mundo."
                    cards={[
                        {
                            title: 'Conhecer',
                            text: 'Entender sua rotina real, histórico articular, preferências, dores e o tempo efetivo disponível na sua semana.',
                            icon: <UserRoundSearch size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                        {
                            title: 'Planejar',
                            text: 'Criar uma estratégia biomecânica customizada: séries, cargas, intensidade e mobilidade adequadas ao seu momento.',
                            icon: <DraftingCompass size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                        {
                            title: 'Acompanhar',
                            text: 'Feedback contínuo e ajustes dinâmicos. A vida oscila e o treino precisa se adaptar às suas semanas boas e difíceis.',
                            icon: <ChartNoAxesCombined size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                        {
                            title: 'Evoluir',
                            text: 'Consolidação de força, tônus muscular e postura sustentável. O resultado é consequência da consistência.',
                            icon: <TrendingUp size={18} />,
                            iconBgColor: '#EDE9DF',
                        },
                    ]}
                />
                <AboutUs2
                    eyebrow="PERSONALIZAÇÃO DE VERDADE"
                    title="Seu treino ainda não existe."
                    highlightedTitle="Porque primeiro eu preciso conhecer você."
                    description="Responda algumas perguntas rápidas para eu entender seu momento atual, limitações, histórico e o que realmente faz sentido para sua rotina."
                    button2text="Quero comecar minha avalicao"
                />
                <Forms1 title="Vamos conhecer você." desc="Conte um pouco sobre suas medidas básicas:" contact={[]} />
                <Features4
                    img="/images/img12.png"
                    title={
                        <>
                            Seu corpo em
                            <br />
                            movimento contínuo.
                        </>
                    }
                    features={[
                        {
                            number: '01.',
                            title: 'Força Sustentável',
                            desc: 'A musculatura protege suas articulações, regula o metabolismo e desacelera o envelhecimento ósseo-celular.',
                            icon: <Dumbbell size={18} strokeWidth={1.8} />,
                        },
                        {
                            number: '02.',
                            title: 'Mobilidade Funcional',
                            desc: 'Amplitude e liberdade para sentar, agachar, carregar compras e brincar sem dores articulares nas costas.',
                            icon: <Accessibility size={18} strokeWidth={1.8} />,
                        },
                        {
                            number: '03.',
                            title: 'Energia & Disposição',
                            desc: 'Treinar não é para cansar seu dia; é para encher seu dia de clareza mental e vitalidade renovada.',
                            icon: <Zap size={18} strokeWidth={1.8} />,
                        },
                        {
                            number: '04.',
                            title: 'Constância Real',
                            desc: 'A rotina que se sustenta ao longo dos anos, respeitando períodos de descanso, trabalho e férias.',
                            icon: <RefreshCw size={18} strokeWidth={1.8} />,
                        },
                    ]}
                />
                <AboutUs3
                    title="Você não precisa estar pronto. Só precisa"
                    highlightedTitle="começar."
                    description="A evoluçao acontece a cada sessão executada com consciência e paciência."
                    button2text="DAR O PRIMEIRO PASSO"
                />
                <Testimonials2
                    title="Quem treina com o método"
                    testimonial={[
                        {
                            name: 'Mariana Alves',
                            type: 'Aluna há 2 anos',
                            desc: 'Eu achava que precisava treinar no limite para ter resultado. Hoje treino com mais consciência, tenho mais força e, principalmente, não sinto mais as dores que faziam parte da minha rotina.',
                            rating: 5,
                            avatar: 'https://i.pravatar.cc/300?img=47',
                        },
                        {
                            name: 'Rafael Martins',
                            type: 'Aluno há 1 ano',
                            desc: 'O treino se encaixou na minha rotina de verdade. Ganhei disposição para trabalhar, melhor condicionamento e finalmente consegui manter constância sem transformar a academia em uma obrigação.',
                            rating: 5,
                            avatar: 'https://i.pravatar.cc/300?img=12',
                        },
                        {
                            name: 'Camila Ferreira',
                            type: 'Aluna há 8 meses',
                            desc: 'Comecei buscando mudança estética, mas encontrei muito mais. Hoje me sinto mais forte, tenho mais mobilidade e percebo a diferença da atividade física em praticamente tudo que faço.',
                            rating: 5,
                            avatar: 'https://i.pravatar.cc/300?img=32',
                        },
                        {
                            name: 'Lucas Ribeiro',
                            type: 'Aluno há 1 ano e 6 meses',
                            desc: 'Pela primeira vez consegui construir uma rotina de treino que não abandono depois de algumas semanas. O acompanhamento e os ajustes fizeram toda a diferença na minha evolução.',
                            rating: 5,
                            avatar: 'https://i.pravatar.cc/300?img=11',
                        },
                    ]}
                />
                <Feelings1
                    eyebrow="SINTONIA E PROPÓSITO"
                    title="Como você quer se sentir?"
                    description="Clique nos sentimentos abaixo para descobrir o caminho de treino ideal:"
                    defaultFeeling="LEVE"
                    feelings={[
                        {
                            label: 'FORTE',
                            title: 'SENTIR-SE FORTE',
                            description:
                                'Construir força para realizar as tarefas do dia a dia com mais segurança, autonomia e confiança.',
                        },
                        {
                            label: 'DISPOSTO',
                            title: 'SENTIR-SE DISPOSTO',
                            description:
                                'Recuperar a energia para enfrentar uma rotina intensa sem terminar o dia completamente esgotado.',
                        },
                        {
                            label: 'CONFIANTE',
                            title: 'SENTIR-SE CONFIANTE',
                            description:
                                'Desenvolver consciência corporal e segurança para se movimentar melhor dentro e fora do treino.',
                        },
                        {
                            label: 'LEVE',
                            title: 'SENTIR-SE LEVE',
                            description:
                                'Aliviar tensões acumuladas nos ombros e trapézio através de soltura e mobilidade direcionada.',
                        },
                        {
                            label: 'ATIVO',
                            title: 'SENTIR-SE ATIVO',
                            description:
                                'Manter o corpo em movimento com uma rotina de exercícios possível, prazerosa e consistente.',
                        },
                        {
                            label: 'SAUDÁVEL',
                            title: 'SENTIR-SE SAUDÁVEL',
                            description:
                                'Criar hábitos de movimento que contribuam para sua saúde, bem-estar e qualidade de vida a longo prazo.',
                        },
                        {
                            label: 'CAPAZ',
                            title: 'SENTIR-SE CAPAZ',
                            description:
                                'Conquistar mais mobilidade, resistência e independência para fazer o que você gosta sem medo ou limitações.',
                        },
                    ]}
                />
                <Contact3
                    eyebrow="PRÓXIMO PASSO"
                    title="Vamos construir uma rotina que realmente funcione para você?"
                    description="Preencha a breve anamnese ou mande uma mensagem direta no WhatsApp para alinharmos seu formato ideal."
                    primaryButtonText="PREENCHER ANAMNESE INICIAL"
                    primaryButtonHref="#anamnese"
                    secondaryButtonText="CONVERSAR NO WHATSAPP "
                    secondaryButtonHref="https://wa.me/5531999999999"
                />
                <WhatsAppFloat phone="5531999999999" />
            </div>
        </main>
    )
}
