import Image from 'next/image'
import Link from 'next/link'

import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'
import { Button } from '@/components/ui/button'

function CardWork({ title, description, img, tag, link, buttonText }: CardWorkProps) {
    return (
        <div className="flex h-full flex-col">
            <div className="overflow-hidden rounded-2xl">
                <Image src={img!} alt="img" width={501} height={323} className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 py-7">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold text-white">{title}</p>
                    <div className="flex gap-2">
                        {tag!.map((t, i) => (
                            <div
                                className="flex h-5 items-center justify-center whitespace-nowrap rounded-sm border border-color-clay p-3"
                                key={i}>
                                <p className="text-center text-color-clay">{t}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-color-clay">{description}</p>

                    {link && (
                        <div>
                            <Button variant="buttoncard" asChild className="rounded-lg">
                                <Link href={link!}>{buttonText!}</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardWork
