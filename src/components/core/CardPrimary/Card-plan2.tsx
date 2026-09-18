import { CardProps } from '@/components/core/CardPrimary/Card.types'

import { Button } from '@/components/ui/button'

function CardPlan({ text, title, desc, featured, price, option, link }: CardProps) {
    return (
        <div
            className={`relative flex h-full flex-col rounded-xl bg-black/25 shadow-sm transition-transform hover:scale-105 ${
                featured ? '' : 'border border-transparent'
            }`}>
            {/* DESTAQUE */}
            {featured && (
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-color-saffron px-4 py-1 text-xs font-bold text-black">
                    MAIS EXCLUSIVO
                </span>
            )}

            <div className="flex h-full w-full flex-col gap-8 rounded-lg p-5 2xl:p-8">
                {/* CATEGORIA + TÍTULO */}
                <div className="flex flex-col gap-8">
                    {desc && (
                        <p
                            className={`text-sm font-medium uppercase ${
                                featured ? 'text-color-saffron' : 'text-white'
                            }`}>
                            {desc}
                        </p>
                    )}

                    {title && <h3 className="text-lg font-semibold text-white 2xl:text-2xl">{title}</h3>}
                </div>
                {/* DESCRIÇÃO */}
                {text && <p className="text-sm font-normal leading-relaxed text-color-sisal">{text}</p>}
                {/* PREÇO */}
                {price && (
                    <div className="border-b border-white/10 pb-5">
                        <p className="text-3xl font-semibold text-white">{price}</p>
                    </div>
                )}
                {/* BENEFÍCIOS */}
                {option && option.length > 0 && (
                    <div className="flex flex-col gap-3">
                        {option.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="mt-[2px] text-sm text-color-saffron">✓</span>

                                <p className="text-sm leading-relaxed text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                )}
                {/* BOTÃO SEMPRE ALINHADO EMBAIXO */}
                {link && (
                    <Button asChild variant="herobuttonsecondary2" className="mt-auto">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Escolher Plano
                        </a>
                    </Button>
                )}
            </div>
        </div>
    )
}

export default CardPlan
