import { CardProps } from '@/components/core/CardPrimary/Card.types'

import { Button } from '@/components/ui/button'

function CardPlan({ text, title, desc, featured, price, option, link }: CardProps) {
    return (
        <div
            className={`relative flex h-fit flex-col rounded-xl bg-black/25 shadow-sm transition-transform hover:scale-105 ${
                featured ? 'border-2 border-color-malachite' : 'border border-transparent'
            }`}>
            {featured && (
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-color-malachite px-4 py-1 text-xs font-bold text-black">
                    PLANO DESTAQUE
                </span>
            )}

            <div className="flex w-full flex-col gap-5 rounded-lg p-5 2xl:p-8">
                {/* DESCRIÇÃO */}
                <div className="flex flex-col gap-2">
                    {desc && <p className="text-sm text-color-malachite">{desc}</p>}

                    {title && <h1 className="text-lg font-semibold text-white 2xl:text-2xl">{title}</h1>}
                </div>

                {/* TEXTO */}
                {text && <p className="text-sm font-normal leading-relaxed text-color-clay">{text}</p>}

                {/* PREÇO */}
                {price && (
                    <div>
                        <p className="text-3xl font-semibold text-white">{price}</p>
                    </div>
                )}

                {/* OPÇÕES */}
                {option && option.length > 0 && (
                    <div className="flex flex-col gap-2">
                        {option.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-xs text-color-malachite">✓</span>

                                <p className="text-sm text-color-clay">{item}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* BOTÃO */}
                {link && (
                    <Button asChild variant="herobuttonsecondary" className="mt-2">
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
