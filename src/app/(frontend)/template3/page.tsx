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

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <div>
                {/* HERO */}
                <HeroSection3
                    titlePrimary="PERSONAL TRAINER • PERFORMANCE • SAÚDE • WELLNESS"
                    title={
                        <>
                            Seu corpo pode mais.
                            <br />
                            Seu treino pode ser <span className="font-medium italic">diferente.</span>
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
            </div>
        </main>
    )
}
