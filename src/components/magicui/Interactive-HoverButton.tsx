import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

type InteractiveHoverButtonProps =
    | (ComponentPropsWithoutRef<'button'> & { href?: never })
    | ComponentPropsWithoutRef<typeof Link>

export function InteractiveHoverButton({ children, className, ...props }: InteractiveHoverButtonProps) {
    const classes = cn(
        'group relative inline-block w-auto cursor-pointer overflow-hidden rounded-xl border bg-background p-4 px-6 text-center font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-color-malachite',
        className
    )
    const content = (
        <>
            <span className="pointer-events-none flex items-center justify-center gap-2">
                <span className="inline-block text-center transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    {children}
                </span>
            </span>
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <span>{children}</span>
                <ArrowRight />
            </span>
        </>
    )

    if (props.href !== undefined) {
        return (
            <Link className={classes} {...props}>
                {content}
            </Link>
        )
    }
    return (
        <button className={classes} {...props}>
            {content}
        </button>
    )
}
