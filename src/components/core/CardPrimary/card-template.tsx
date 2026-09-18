'use client'

import Image from 'next/image'
import Link from 'next/link'

import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'
import { Button } from '@/components/ui/button'

function CardTemplate({ title, description, img, tag, link, buttonText, disabled }: CardWorkProps) {
    return (
        <div
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-color-codgray shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300 ${
                disabled
                    ? 'cursor-not-allowed opacity-75'
                    : 'hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]'
            }`}>
            {/* Preview do template */}
            <div className="relative aspect-[16/10] overflow-hidden bg-color-codgray">
                <Image
                    src={img!}
                    alt={title!}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover object-top transition-transform duration-500 ${
                        !disabled ? 'group-hover:scale-[1.025]' : ''
                    }`}
                />

                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Badge superior */}
                <div className="absolute left-4 top-4">
                    <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md ${
                            disabled ? 'border-white/15 bg-black/70' : 'border-white/15 bg-black/60'
                        }`}>
                        <span
                            className={`size-1.5 rounded-full ${
                                disabled ? 'bg-color-clay' : 'bg-color-malachite shadow-[0_0_8px_var(--malachite-500)]'
                            }`}
                        />

                        {disabled ? 'Em construção' : 'Template disponível'}
                    </span>
                </div>

                {/* Indicador inferior */}
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                    <div>
                        <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">Modelo</span>

                        <p className="mt-1 text-sm font-semibold text-white">{title}</p>
                    </div>

                    <div
                        className={`flex size-9 items-center justify-center rounded-full border bg-black/50 text-white backdrop-blur-md transition-all duration-300 ${
                            disabled
                                ? 'border-white/15'
                                : 'group-hover:border-color-malachite group-hover:bg-color-malachite group-hover:text-black'
                        }`}>
                        {disabled ? (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 6V12L16 14"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        ) : (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-1 flex-col">
                    {/* Título */}
                    <div className="mb-3">
                        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3>
                    </div>

                    {/* Tags */}
                    {tag && tag.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                            {tag.map((t, i) => (
                                <span
                                    key={i}
                                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-color-clay transition-colors group-hover:border-[color-mix(in_srgb,var(--malachite-500)_20%,transparent)]">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Descrição */}
                    <p className="text-sm leading-6 text-color-clay sm:text-[15px]">{description}</p>

                    {/* Separador */}
                    <div className="my-5 h-px w-full bg-white/[0.07]" />

                    {/* Informações */}
                    <div className="mb-5 grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--malachite-500)_10%,transparent)] text-color-malachite">
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 3V21M3 12H21"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/40">Personalizável</p>

                                <p className="text-xs font-medium text-white/80">{disabled ? 'Em breve' : 'Sim'}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--malachite-500)_10%,transparent)] text-color-malachite">
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 6V12L16 14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/40">Configuração</p>

                                <p className="text-xs font-medium text-white/80">{disabled ? 'Em breve' : 'Rápida'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Botão */}
                    <div className="mt-auto">
                        {disabled ? (
                            <Button
                                type="button"
                                disabled
                                className="h-11 w-full cursor-not-allowed rounded-lg border border-white/10 bg-white/[0.05] text-sm font-semibold text-white/60 transition-all duration-300 disabled:opacity-100">
                                <span>{buttonText || 'Em construção'}</span>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 6V12L16 14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </Button>
                        ) : (
                            link && (
                                <Button
                                    asChild
                                    className="group/button h-11 w-full rounded-lg border border-color-malachite bg-color-malachite text-sm font-semibold text-black transition-all duration-300 hover:bg-color-malachite hover:text-black hover:brightness-110 focus-visible:ring-color-malachite focus-visible:ring-offset-color-codgray">
                                    <Link href={link} className="flex items-center justify-center gap-2">
                                        <span>{buttonText || 'Usar este template'}</span>

                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-300 group-hover/button:translate-x-1">
                                            <path
                                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </Button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate
