import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function CardWork({ title, description, img, tag, link, buttonText }: CardWorkProps) {
    return (
        <div className="flex flex-col rounded-2xl">
            <div className="h-90 overflow-hidden">
                <Image src={img!} alt="img" width={501} height={323} className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-10 py-7">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold text-white">{title}</p>
                    <p className="text-color-clay">{description}</p>
                    <div className="flex gap-2">
                        {tag.map((t, i) => (
                            <div
                                className="flex h-5 items-center justify-center whitespace-nowrap rounded-sm border border-color-clay px-3 py-3"
                                key={i}>
                                <p className="text-center text-color-clay">{t}</p>
                            </div>
                        ))}
                    </div>
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
