import { withAnimation } from '@/common/hocs'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { MetricsProps } from '@/components/sections/Metrics/Metrics.types'

function Metrics3({ metrics }: MetricsProps) {
    return (
        <section id="Metrics" className="border-y border-white/10 bg-white py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 2xl:gap-16">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center justify-center px-4 py-6 text-center">
                            <div className="flex">
                                <span className="text-3xl font-bold text-color-burgundy md:text-4xl lg:text-5xl">
                                    +
                                </span>

                                <NumberTicker
                                    value={metric.number as unknown as number}
                                    className="text-4xl font-extrabold tracking-tight text-color-burgundy md:text-5xl lg:text-6xl"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <p className="text-sm font-medium text-color-dustyRose md:text-base">{metric.title}</p>
                                <p className="text-sm font-medium text-color-neutralGray md:text-base">{metric.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default withAnimation(Metrics3, 'fade-up')
