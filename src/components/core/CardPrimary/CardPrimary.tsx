import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, number, title, icon, iconBgColor }: CardProps) {
    return (
        <div className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-color-codgray p-px shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[color-mix(in_srgb,var(--malachite-500)_30%,transparent)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            {/* Brilho no hover */}
            <div className="absolute -right-16 -top-16 size-32 rounded-full bg-[color-mix(in_srgb,var(--malachite-500)_10%,transparent)] blur-3xl transition-all duration-500 group-hover:bg-[color-mix(in_srgb,var(--malachite-500)_20%,transparent)]" />

            <div className="relative flex h-full min-w-0 flex-col rounded-2xl bg-color-codgray p-5 sm:p-6 2xl:p-8">
                {/* Topo */}
                <div className="flex items-start justify-between gap-4">
                    {/* Número */}
                    <span className="text-4xl font-bold tracking-tight text-color-malachite sm:text-5xl 2xl:text-6xl">
                        {number}
                    </span>

                    {/* Ícone */}
                    {icon && (
                        <div
                            className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-lg transition-all duration-300 group-hover:scale-110 sm:size-11 sm:text-xl 2xl:size-12"
                            style={{
                                backgroundColor: iconBgColor ? `${iconBgColor}18` : 'rgba(0, 230, 118, 0.08)',
                            }}>
                            {icon}
                        </div>
                    )}
                </div>

                {/* Linha */}
                <div className="mt-5 h-px w-full bg-white/[0.07] sm:mt-6">
                    <div className="h-px w-0 bg-color-malachite transition-all duration-500 group-hover:w-1/3" />
                </div>

                {/* Conteúdo */}
                <div className="mt-5 sm:mt-6">
                    <h2 className="text-sm font-semibold leading-5 text-white sm:text-base sm:leading-6 2xl:text-lg">
                        {title}
                    </h2>

                    <p className="mt-2 text-xs leading-5 text-color-clay sm:mt-3 sm:text-sm sm:leading-6 2xl:text-base">
                        {text}
                    </p>
                </div>

                {/* Indicador */}
                <div className="mt-auto flex items-center gap-2 pt-6 sm:pt-8">
                    <span className="size-1.5 shrink-0 rounded-full bg-color-malachite transition-all duration-300 group-hover:w-5" />

                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
                        Etapa {number}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
