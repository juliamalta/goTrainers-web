import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { Button } from '@/components/ui/button'

function CardPlan({ text, number, title, desc, featured }: CardProps) {
    return (
        <div
            className={`h-90 relative rounded-xl bg-black bg-opacity-25 shadow-sm transition-transform hover:scale-105 ${
                featured ? 'border-2 border-color-malachite' : 'border border-transparent'
            }`}>
            {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-color-malachite px-4 py-1 text-xs font-bold text-black">
                    PLANO DESTAQUE
                </span>
            )}

            <div>
                <div className="flex w-full flex-col gap-5 rounded-lg p-5 2xl:p-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-color-malachite">{desc}</p>

                        <h1 className="text-sm font-semibold text-white 2xl:text-2xl">{title}</h1>
                    </div>

                    <div className="w-full">
                        <p className="text-sm font-normal text-color-clay">{text}</p>
                    </div>

                    <Button>Escolher Plano</Button>
                </div>
            </div>
        </div>
    )
}

export default CardPlan
