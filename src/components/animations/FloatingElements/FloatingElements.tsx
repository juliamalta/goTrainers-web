'use client'

import { motion } from 'framer-motion'
import { BookOpen, Pencil, Calculator, Globe2, Palette, Music2, Trophy, Atom, DivideIcon } from 'lucide-react'
import React from 'react'

interface FloatingElement {
    icon: any
    size: number
    top?: string
    left?: string
    right?: string
    bottom?: string
    delay?: number
    duration?: number
}

interface FloatingElementsProps {
    className?: string
    elements?: FloatingElement[]
}

const defaultElements: FloatingElement[] = [
    { icon: BookOpen, size: 48, top: '10%', left: '5%', duration: 6, delay: 0 },
    { icon: Pencil, size: 32, top: '25%', right: '8%', duration: 8, delay: 1 },
    { icon: Calculator, size: 40, bottom: '15%', left: '12%', duration: 7, delay: 2 },
    { icon: Globe2, size: 36, top: '40%', left: '15%', duration: 9, delay: 3 },
    { icon: Palette, size: 44, bottom: '30%', right: '10%', duration: 8, delay: 4 },
    { icon: Music2, size: 38, top: '15%', right: '20%', duration: 7, delay: 5 },
    { icon: Trophy, size: 42, bottom: '20%', left: '25%', duration: 6, delay: 6 },
    { icon: Atom, size: 46, top: '35%', right: '15%', duration: 9, delay: 7 },
]

const floatingAnimation = {
    initial: { y: 0, rotate: 0 },
    animate: (custom: { duration: number; delay: number }) => ({
        y: [-20, 0, -20],
        rotate: [-5, 0, 5],
        transition: {
            y: {
                repeat: Infinity,
                duration: custom.duration,
                ease: 'easeInOut',
                delay: custom.delay,
            },
            rotate: {
                repeat: Infinity,
                duration: custom.duration,
                ease: 'easeInOut',
                delay: custom.delay,
            },
        },
    }),
}

export default function FloatingElements({ className = '', elements = defaultElements }: FloatingElementsProps) {
    return (
        <div className={className}>
            {elements.map((el, index) => (
                <motion.div
                    key={index}
                    custom={{ duration: el.duration || 6, delay: el.delay || 0 }}
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    style={{
                        position: 'absolute',
                        top: el.top,
                        left: el.left,
                        right: el.right,
                        bottom: el.bottom,
                        opacity: 0.1,
                        pointerEvents: 'none',
                    }}>
                    <el.icon size={el.size} className="text-blue-700" />
                </motion.div>
            ))}
        </div>
    )
}
