'use client'
import { motion } from 'framer-motion'

import { FadeUpProps } from './FadeUp.types'

export default function FadeUp({ children, y }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: y ?? 140 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            {children}
        </motion.div>
    )
}
