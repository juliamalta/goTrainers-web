import CardPlan2 from '@/components/core/CardPrimary/Card-plan2'

import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Cards6({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="mx-auto rounded-2xl bg-color-woodsmoke py-24 sm:pb-24 md:mx-8">
            <div className="container mx-auto flex flex-col gap-16 px-6">
                {/* Cabeçalho */}
                <div className="w-full">
                    {/* Linha + texto superior */}
                    <div className="mb-10 flex items-center gap-4">
                        <span className="h-[2px] w-12 bg-[#D6A83D]" />

                        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D6A83D] md:text-base">
                            Arquitetura de serviços
                        </span>
                    </div>

                    {/* Título */}
                    <p className="text-4xl font-semibold text-white">{title}</p>

                    {desc && <p className="mx-auto mt-4 text-base text-color-sisal">{desc}</p>}
                </div>

                {/* Cards */}
                <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
                    {cards?.map((card, index) => (
                        <CardPlan2
                            key={index}
                            title={card.title}
                            desc={card.desc}
                            text={card.text}
                            price={card.price}
                            option={card.option}
                            link={card.link}
                            featured={card.featured}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards6
