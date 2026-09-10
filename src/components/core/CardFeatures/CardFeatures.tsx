import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

function CardFeatures({ title }: CardFeaturesProps) {
    return (
        <div className="flex items-center border-b-2 border-color-shady pb-3 2xl:pb-5">
            <RiVerifiedBadgeFill className="h-6 w-6 flex-shrink-0 text-[#F15B29] 2xl:h-8 2xl:w-8" />
            <p className="text-md ml-6 text-color-shady 2xl:text-xl">{title}</p>
        </div>
    )
}

export default CardFeatures
