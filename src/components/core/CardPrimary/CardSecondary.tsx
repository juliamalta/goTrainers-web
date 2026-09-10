import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

function CardSecondary({ text }: CardProps) {
    return (
        <div className="h-90 rounded-xl bg-black bg-opacity-25 shadow-sm transition-transform hover:scale-105 hover:border-color-flamingo">
            <div>
                <div className="flex w-full flex-col gap-5 rounded-lg p-8 2xl:p-12">
                    <div className="w-full">
                        <p className="text-sm font-normal text-color-shady">{text}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="text-white">
                            <p>Caio R</p>

                            <div className="mt-1 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-color-flamingo text-color-flamingo" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSecondary
