import CardPlan2 from '@/components/core/CardPrimary/Card-plan2'
import CardPlan3 from '@/components/core/CardPrimary/CardPlan3'

import { CardSectionProps } from '@/components/sections/Cards/Cards.types'

function Cards9({ cards, title, desc }: CardSectionProps) {
    return (
        <section id="Serviços" className="mx-auto rounded-2xl bg-color-ivory py-24 sm:pb-24 md:mx-8">
            <div className="container mx-auto flex flex-col gap-16 px-6">
                {/* Cabeçalho */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="bg-color-dustyRose/10 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-color-dustyRose">
                        Investimento
                    </span>

                    <h2 className="mt-4 text-4xl font-bold leading-tight text-color-burgundy sm:text-5xl">{title}</h2>

                    <p className="mt-4 text-base leading-7 text-color-neutralGray sm:text-lg">{desc}</p>
                </div>

                {/* Cards */}
                <div
                    className={`grid w-full grid-cols-1 gap-8 ${
                        cards?.length === 2
                            ? 'lg:grid-cols-2'
                            : cards?.length === 3
                              ? 'lg:grid-cols-3'
                              : 'lg:grid-cols-1'
                    }`}>
                    {cards?.map((card, index) => (
                        <CardPlan3
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

export default Cards9
