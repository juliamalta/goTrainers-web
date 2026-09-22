import type { LucideIcon } from 'lucide-react'
import { CheckCircle2, Clock3, Heart, ThumbsUp, UserRound, Zap } from 'lucide-react'
import Image from 'next/image'

type ResultComparison = {
    beforeLabel: string
    beforeTitle: string
    beforeText: string
    afterLabel: string
    afterTitle: string
    afterText: string
    name: string
    beforeImage?: string
    afterImage?: string
    quote: string
    objective: string
    plan: string
}

type Results4Props = {
    results: ResultComparison[]
}

const beforeIcons: LucideIcon[] = [UserRound, Clock3, Heart]
const afterIcons: LucideIcon[] = [CheckCircle2, Zap, ThumbsUp]

function ComparisonPanel({
    label,
    title,
    text,
    Icon,
    image,
    after,
}: {
    label: string
    title: string
    text: string
    Icon: LucideIcon
    image?: string
    after?: boolean
}) {
    return (
        <div
            className={`relative flex min-h-[200px] flex-1 overflow-hidden rounded-xl border ${
                image ? 'p-0' : 'p-3'
            } ${after ? 'border-color-dustyRose/30 bg-[#fff1f3]' : 'border-transparent bg-[#e8e6e5]'}`}>
            {image ? (
                <>
                    <Image src={image} alt="" fill className="object-cover" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
                    <p className="absolute inset-x-2 top-3 z-10 text-center text-[10px] font-semibold uppercase tracking-wide text-white">
                        {label}
                    </p>
                    <div className="absolute inset-x-3 bottom-3 z-10 text-center text-white">
                        <p className="text-xs font-semibold">{title}</p>
                        <p className="mt-1 text-[10px] leading-4 text-white/85">{text}</p>
                    </div>
                </>
            ) : (
                <>
                    <p
                        className={`text-center text-[10px] font-semibold uppercase tracking-wide ${after ? 'text-color-dustyRose' : 'text-color-neutralGray'}`}>
                        {label}
                    </p>
                    <div
                        className={`mt-2 flex w-full flex-1 flex-col items-center justify-center rounded-lg px-3 py-4 text-center ${after ? 'bg-[#ffd9df]' : 'bg-[#d8d6d5]'}`}>
                        <Icon
                            className={`mb-2 size-7 ${after ? 'text-color-dustyRose' : 'text-color-neutralGray'}`}
                            strokeWidth={1.8}
                        />
                        <p
                            className={`text-xs font-semibold ${after ? 'text-color-burgundy' : 'text-color-neutralGray'}`}>
                            {title}
                        </p>
                        <p
                            className={`mt-1 text-[10px] leading-4 ${after ? 'text-color-burgundy/80' : 'text-color-neutralGray/80'}`}>
                            {text}
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default function Results4({ results }: Results4Props) {
    return (
        <section id="resultados" className="bg-color-ivory px-4 py-20 sm:px-6 sm:py-24 lg:px-12">
            <div className="container mx-auto">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="bg-color-dustyRose/10 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-color-dustyRose">
                        Histórias reais
                    </span>

                    <h2 className="mt-4 text-4xl font-bold leading-tight text-color-burgundy sm:text-5xl">
                        Resultados que vão além da balança
                    </h2>

                    <p className="mt-4 text-base leading-7 text-color-neutralGray sm:text-lg">
                        Veja as transformações físicas, posturais e de autoconfiança alcançadas pelas alunas da
                        consultoria.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {results.map((result, index) => {
                        const BeforeIcon = beforeIcons[index % beforeIcons.length]
                        const AfterIcon = afterIcons[index % afterIcons.length]

                        return (
                            <article
                                key={result.name}
                                className="group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white p-px transition-all duration-300 hover:-translate-y-2">
                                <div className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-5">
                                    <ComparisonPanel
                                        label={result.beforeLabel}
                                        title={result.beforeTitle}
                                        text={result.beforeText}
                                        Icon={BeforeIcon}
                                        image={result.beforeImage}
                                    />
                                    <ComparisonPanel
                                        label={result.afterLabel}
                                        title={result.afterTitle}
                                        text={result.afterText}
                                        Icon={AfterIcon}
                                        image={result.afterImage}
                                        after
                                    />
                                </div>

                                <div className="flex flex-1 flex-col px-5 pb-5">
                                    <h3 className="text-base font-bold text-color-burgundy">{result.name}</h3>
                                    <p className="mt-1 text-xs italic leading-5 text-color-neutralGray">
                                        “{result.quote}”
                                    </p>
                                </div>

                                <footer className="flex items-center justify-between gap-3 border-t border-[#ebe5df] bg-[#faf8f5] px-5 py-3 text-[10px] text-color-burgundy">
                                    <span>Objetivo: {result.objective}</span>
                                    <span>{result.plan}</span>
                                </footer>
                            </article>
                        )
                    })}
                </div>

                <p className="mt-6 text-center text-xs text-color-neutralGray">
                    * Os resultados podem variar de acordo com cada pessoa, ponto de partida e dedicação aos treinos.
                </p>
            </div>
        </section>
    )
}
