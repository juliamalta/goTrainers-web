'use client'

import * as React from 'react'

import type { FeelingsProps } from '@/components/sections/Feelings/feelings.types'
import { cn } from '@/lib/utils'

function Feelings1({ eyebrow, title, description, feelings, defaultFeeling }: FeelingsProps) {
    const [selectedFeeling, setSelectedFeeling] = React.useState(() => defaultFeeling ?? feelings[0]?.label)
    const selectedContent = feelings.find((feeling) => feeling.label === selectedFeeling) ?? feelings[0]

    if (!selectedContent) return null

    return (
        <section className="bg-color-warmwhite px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="container mx-auto flex max-w-6xl flex-col items-center">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#6d706c] sm:text-sm">
                    {eyebrow}
                </p>
                <h2 className="mt-6 text-center font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-color-forest sm:text-5xl lg:text-6xl">
                    {title}
                </h2>
                <p className="mt-5 max-w-2xl text-center text-base text-[#6d706c] sm:text-lg">{description}</p>

                <div className="mt-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label={title}>
                    {feelings.map((feeling) => {
                        const isSelected = feeling.label === selectedFeeling

                        return (
                            <button
                                key={feeling.label}
                                type="button"
                                role="tab"
                                aria-selected={isSelected}
                                onClick={() => setSelectedFeeling(feeling.label)}
                                className={cn(
                                    'rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-forest focus-visible:ring-offset-2',
                                    isSelected
                                        ? 'bg-color-forest text-white'
                                        : 'bg-color-softgray text-color-forest hover:bg-[#e3e5e1]'
                                )}>
                                {feeling.label}
                            </button>
                        )
                    })}
                </div>

                <div
                    role="tabpanel"
                    className="mt-12 flex min-h-48 w-full max-w-3xl flex-col items-center justify-center rounded-[2.75rem] bg-color-softgray px-8 py-10 text-center sm:px-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9d5d46]">
                        {selectedContent.title}
                    </p>
                    <p className="mt-4 max-w-2xl font-serif text-2xl leading-snug text-color-forest sm:text-3xl">
                        {selectedContent.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Feelings1
