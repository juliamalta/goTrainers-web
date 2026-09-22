import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { Button } from '@/components/ui/button'

function CardPlan3({ text, title, desc, featured, price, option, link }: CardProps) {
    return (
        <div
            className={`relative flex h-[500px] w-full flex-col rounded-xl bg-white shadow-sm transition-transform hover:scale-105 ${
                featured ? '' : 'border border-transparent'
            }`}>
            {/* DESTAQUE */}
            {featured && (
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-color-dustyRose px-4 py-1 text-xs font-bold text-white">
                    MAIS EXCLUSIVO
                </span>
            )}

            <div className="flex h-full w-full flex-col rounded-lg p-5 2xl:p-8">
                {/* CATEGORIA + TÍTULO */}
                <div className="flex items-center justify-between gap-8">
                    {title && (
                        <h3 className="bg-color-dustyRose/10 text-xxs bg-co py-4 text-lg font-semibold text-color-burgundy">
                            {title}
                        </h3>
                    )}
                    <p className="text-sm font-bold text-black">2 meses de acesso</p>
                </div>

                {/* PREÇO */}
                {price && (
                    <div className="border-b border-white/10 pb-5">
                        <p className="text-3xl font-semibold text-color-burgundy">{price}</p>
                    </div>
                )}
                {/* BENEFÍCIOS */}
                {option && option.length > 0 && (
                    <div className="flex flex-col gap-3">
                        {option.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="mt-[2px] text-sm text-color-burgundy">✓</span>

                                <p className="text-sm leading-relaxed text-black">{item}</p>
                            </div>
                        ))}
                    </div>
                )}
                {/* BOTÃO SEMPRE ALINHADO EMBAIXO */}
                {link && (
                    <Button asChild variant="herobuttonsecondary4" className="mt-auto">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Escolher Plano
                        </a>
                    </Button>
                )}
            </div>
        </div>
    )
}

export default CardPlan3
