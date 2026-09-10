import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export function InteractiveHoverButton({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={cn(
                'group relative w-auto cursor-pointer overflow-hidden rounded-xl border bg-background p-4 px-6 text-center font-semibold',
                className
            )}
            {...props}>
            <div className="flex items-center justify-center gap-2">
                <span className="inline-block text-center transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    {children}
                </span>
            </div>
            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                <span>{children}</span>
                <ArrowRight />
            </div>
        </button>
    )
}
