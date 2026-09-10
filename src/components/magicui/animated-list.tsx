'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { ComponentPropsWithoutRef, useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

// Item animado individual
export function AnimatedListItem({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }} // Entrada da esquerda
            animate={{ x: 0, opacity: 1 }} // Chega à posição final
            exit={{ x: -50, opacity: 0 }} // Sai para a esquerda (pode mudar para x: 50 se quiser sair à direita)
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            layout
            className="mx-auto w-full">
            {children}
        </motion.div>
    )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode
    delay?: number
}

// Lista animada
export const AnimatedList = React.memo(({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(() => React.Children.toArray(children), [children])

    useEffect(() => {
        if (index < childrenArray.length - 1) {
            const timeout = setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
            }, delay)

            return () => clearTimeout(timeout)
        }
    }, [index, delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
        return childrenArray.slice(0, index + 1) // Mostra do primeiro até o índice atual
    }, [index, childrenArray])

    return (
        <div
            className={cn(
                'mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2',
                className
            )}
            {...props}>
            <AnimatePresence>
                {itemsToShow.map((item) => (
                    <AnimatedListItem key={(item as React.ReactElement).key}>{item}</AnimatedListItem>
                ))}
            </AnimatePresence>
        </div>
    )
})

AnimatedList.displayName = 'AnimatedList'
