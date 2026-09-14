import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, number, title, icon, iconBgColor }: CardProps) {
    return (
        <div className="hover:border-color-malachite/30 group relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111313] p-[1px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            {/* Brilho no hover */}
            <div className="bg-color-malachite/10 group-hover:bg-color-malachite/20 absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl transition-all duration-500" />

            <div className="relative flex h-full min-w-0 flex-col rounded-2xl bg-[#111313] p-5 sm:p-6 2xl:p-8">
                {/* Topo */}
                <div className="flex items-start justify-between gap-4">
                    {/* Número */}
                    <span className="text-4xl font-bold tracking-tight text-color-malachite sm:text-5xl 2xl:text-6xl">
                        {number}
                    </span>

                    {/* Ícone */}
                    {icon && (
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-lg transition-all duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:text-xl 2xl:h-12 2xl:w-12"
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
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-color-malachite transition-all duration-300 group-hover:w-5" />

                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
                        Etapa {number}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
