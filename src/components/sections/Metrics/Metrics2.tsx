import { withAnimation } from '@/common/hocs'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { MetricsProps } from '@/components/sections/Metrics/Metrics.types'

function Metrics2({ metrics }: MetricsProps) {
    return (
        <section id="Metrics" className="border-y border-white/10 bg-[#0C0F0F] py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col px-4 py-6">
                            <div className="flex">
                                <span className="text-3xl font-bold text-color-saffron md:text-4xl lg:text-5xl">+</span>

                                <NumberTicker
                                    value={metric.number as unknown as number}
                                    className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
                                />
                            </div>

                            <p className="mt-2 text-sm font-medium text-color-sisal md:text-base">{metric.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default withAnimation(Metrics2, 'fade-up')
