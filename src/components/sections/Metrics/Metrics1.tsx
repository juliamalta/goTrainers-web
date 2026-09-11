import { withAnimation } from '@/common/hocs'

import { NumberTicker } from '@/components/magicui/number-ticker'
import { MetricsProps } from '@/components/sections/Metrics/Metrics.types'

function Metrics1({ metrics }: MetricsProps) {
    return (
        <section id="Metrics" className="border-y border-white/10 bg-[#0C0F0F] py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center px-4 py-6 text-center ${
                                index !== 0 ? 'border-l border-white/10' : ''
                            }`}>
                            <div className="flex items-baseline">
                                <span className="text-3xl font-bold text-color-malachite md:text-4xl lg:text-5xl">
                                    +
                                </span>

                                <NumberTicker
                                    value={metric.number as unknown as number}
                                    className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
                                />
                            </div>

                            <p className="mt-2 max-w-[160px] text-sm font-medium text-color-clay md:text-base">
                                {metric.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default withAnimation(Metrics1, 'fade-up')
