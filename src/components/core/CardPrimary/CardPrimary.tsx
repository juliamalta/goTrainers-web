import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, number, title }: CardProps) {
    return (
        <div className="h-90 rounded-xl bg-black bg-opacity-25 shadow-sm transition-transform hover:scale-105 hover:border-color-flamingo">
            <div>
                <div className="flex w-full flex-col gap-5 rounded-lg p-5 2xl:p-8">
                    <div className="flex text-5xl font-bold text-color-malachite">{number}</div>
                    <div>
                        <h1 className="text-sm font-semibold text-white 2xl:text-base">{title}</h1>
                    </div>
                    <div className="w-full">
                        <p className="text-sm font-normal text-color-clay">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
