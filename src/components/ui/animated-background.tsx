'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden border-r-8">
            <motion.div
                className="absolute inset-0 h-[2048px] opacity-[0.30]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 200,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
        </div>
    )
}
