import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                herobutton:
                    'bg-color-malachite text-black hover:bg-color-malachite hover:brightness-110 focus-visible:ring-color-malachite',

                herobuttonsecondary:
                    'rounded-xl border border-white/10 bg-color-woodsmoke text-white hover:border-color-malachite hover:bg-color-codgray hover:text-color-malachite focus-visible:ring-color-malachite',
                herobuttonsecondary2:
                    'rounded-xl border border-white/10 bg-color-woodsmoke text-white hover:border-color-saffron hover:bg-color-codgray hover:text-color-saffron focus-visible:ring-color-malachite',
                herobuttonsecondary3:
                    'rounded-xl border border-white/10 bg-color-softgray text-black hover:border-color-saffron hover:bg-color-codgray hover:text-color-saffron focus-visible:ring-color-malachite',
                buttoncard:
                    'rounded-xl border border-white/10 bg-color-codgray text-white hover:border-color-malachite hover:bg-color-woodsmoke hover:text-color-malachite focus-visible:ring-color-malachite',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                hero: 'h-14 p-3 sm:px-8 sm:py-5',
                icon: 'size-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
