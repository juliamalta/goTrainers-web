import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

function CardTemplate({ title, description, img, tag, link, buttonText }: CardWorkProps) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl">
            {/* Imagem */}
            <div className="h-72 overflow-hidden sm:h-80">
                <Image src={img!} alt={title} width={501} height={323} className="size-full object-cover" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-1 flex-col gap-4 px-6 py-7 sm:px-8">
                <div className="flex flex-1 flex-col gap-4">
                    <p className="text-2xl font-semibold text-white">{title}</p>
                    <div className="flex flex-wrap gap-2">
                        {tag.map((t, i) => (
                            <div
                                className="flex min-h-5 items-center justify-center whitespace-nowrap rounded-sm border border-color-clay px-3 py-1"
                                key={i}>
                                <p className="text-center text-sm text-color-clay">{t}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-color-clay">{description}</p>

                    {/* Tags */}

                    {/* Botão */}
                    {link && (
                        <div className="mt-auto pt-2">
                            <Button variant="buttoncard" asChild className="w-full rounded-lg">
                                <Link href={link}>{buttonText}</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardTemplate
