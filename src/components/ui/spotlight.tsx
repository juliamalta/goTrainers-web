'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export interface SpotlightBackgroundProps {
    className?: string
    children?: React.ReactNode
    /** Spotlight color(s) - can be a single color or array for multiple spotlights */
    colors?: string | string[]
    /** Size of the spotlight gradient in pixels */
    size?: number
    /** Blur amount for softer edges */
    blur?: number
    /** Smoothing factor for cursor tracking (0-1, lower = smoother) */
    smoothing?: number
    /** Enable ambient drift when no mouse activity */
    ambient?: boolean
    /** Opacity of the spotlight */
    opacity?: number
}

interface SpotlightPosition {
    x: number
    y: number
    targetX: number
    targetY: number
}

export function SpotlightBackground({
    className,
    children,
    colors = ['rgba(120, 119, 198, 0.3)'],
    size = 400,
    blur = 80,
    smoothing = 0.1,
    ambient = true,
    opacity = 1,
}: SpotlightBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const spotlightsRef = useRef<SpotlightPosition[]>([])
    const animationRef = useRef<number>()
    const lastMouseMoveRef = useRef<number>(0)
    const [positions, setPositions] = useState<{ x: number; y: number }[]>([])

    const colorArray = Array.isArray(colors) ? colors : [colors]

    // Initialize spotlight positions
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const { width, height } = container.getBoundingClientRect()
        const centerX = width / 2
        const centerY = height / 2

        spotlightsRef.current = colorArray.map((_, i) => ({
            x: centerX + (i - (colorArray.length - 1) / 2) * 50,
            y: centerY,
            targetX: centerX + (i - (colorArray.length - 1) / 2) * 50,
            targetY: centerY,
        }))

        setPositions(spotlightsRef.current.map((s) => ({ x: s.x, y: s.y })))
    }, [colorArray.length])

    // Lerp helper
    const lerp = useCallback((start: number, end: number, factor: number) => {
        return start + (end - start) * factor
    }, [])

    // Animation loop
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const { width, height } = container.getBoundingClientRect()
        let tick = 0

        const animate = () => {
            tick++
            const now = Date.now()
            const timeSinceMouseMove = now - lastMouseMoveRef.current
            const isAmbient = ambient && timeSinceMouseMove > 2000

            spotlightsRef.current = spotlightsRef.current.map((spotlight, i) => {
                let { x, y, targetX, targetY } = spotlight

                // Ambient drift when no mouse activity
                if (isAmbient) {
                    const offset = i * 0.5
                    targetX = width / 2 + Math.sin(tick * 0.005 + offset) * (width * 0.2)
                    targetY = height / 2 + Math.cos(tick * 0.003 + offset) * (height * 0.15)
                }

                // Smooth interpolation
                x = lerp(x, targetX, smoothing)
                y = lerp(y, targetY, smoothing)

                return { x, y, targetX, targetY }
            })

            setPositions(spotlightsRef.current.map((s) => ({ x: s.x, y: s.y })))
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [ambient, smoothing, lerp])

    // Mouse tracking
    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            const container = containerRef.current
            if (!container) return

            const rect = container.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            lastMouseMoveRef.current = Date.now()

            // Update target positions with slight offset for each spotlight
            spotlightsRef.current = spotlightsRef.current.map((spotlight, i) => ({
                ...spotlight,
                targetX: x + (i - (colorArray.length - 1) / 2) * 30,
                targetY: y + (i - (colorArray.length - 1) / 2) * 20,
            }))
        },
        [colorArray.length]
    )

    // Touch support
    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            const container = containerRef.current
            if (!container || !e.touches[0]) return

            const rect = container.getBoundingClientRect()
            const x = e.touches[0].clientX - rect.left
            const y = e.touches[0].clientY - rect.top

            lastMouseMoveRef.current = Date.now()

            spotlightsRef.current = spotlightsRef.current.map((spotlight, i) => ({
                ...spotlight,
                targetX: x + (i - (colorArray.length - 1) / 2) * 30,
                targetY: y + (i - (colorArray.length - 1) / 2) * 20,
            }))
        },
        [colorArray.length]
    )

    return (
        <div
            ref={containerRef}
            className={cn('w-full overflow-hidden bg-color-wood', className)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}>
            {/* Spotlight layers */}
            {colorArray.map((color, i) => (
                <div
                    key={i}
                    className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                    style={{
                        opacity,
                        background: positions[i]
                            ? `radial-gradient(${size}px circle at ${positions[i].x}px ${positions[i].y}px, ${color}, transparent 70%)`
                            : 'transparent',
                        filter: `blur(${blur}px)`,
                    }}
                />
            ))}

            {/* Subtle base gradient */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(30, 30, 50, 0.3) 0%, transparent 70%)',
                }}
            />

            {/* Vignette */}

            {/* Content layer */}
            {children && <div className="relative z-10 size-full">{children}</div>}
        </div>
    )
}

export default function SpotlightBackgroundDemo() {
    return <SpotlightBackground colors={['rgba(120, 119, 198, 0.4)', 'rgba(59, 130, 246, 0.3)']} />
}
