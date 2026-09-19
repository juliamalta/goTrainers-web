import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardTemplate1({ text, number, title, icon, iconBgColor }: CardProps) {
    return (
        <div className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-white p-px transition-all duration-300 hover:-translate-y-2">
            {/* Brilho no hover */}
            <div className="absolute -right-16 -top-16 size-32 rounded-full blur-3xl transition-all duration-500 group-hover:bg-[color-mix(in_srgb,var(--malachite-500)_20%,transparent)]" />

            <div className="relative flex h-full min-w-0 flex-col rounded-2xl bg-white p-5 sm:p-6 2xl:p-8">
                {/* Topo */}
                <div className="flex items-start justify-between gap-4">
                    {/* Ícone */}
                    {icon && (
                        <div
                            className="flex size-10 shrink-0 items-center justify-center rounded-full text-lg transition-all duration-300 group-hover:scale-110 sm:size-11 sm:text-xl 2xl:size-12"
                            style={{
                                backgroundColor: iconBgColor || '',
                            }}>
                            {icon}
                        </div>
                    )}
                </div>

                {/* Linha */}
                <div className="mt-5 h-px w-full bg-white sm:mt-6">
                    <div className="h-px w-0 bg-color-forest transition-all duration-500 group-hover:w-1/3" />
                </div>

                {/* Conteúdo */}
                <div className="mt-5 sm:mt-6">
                    <h2 className="text-sm font-semibold leading-5 text-black sm:text-base sm:leading-6 2xl:text-lg">
                        {title}
                    </h2>

                    <p className="mt-2 text-xs leading-5 text-black sm:mt-3 sm:text-sm sm:leading-6 2xl:text-base">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate1
