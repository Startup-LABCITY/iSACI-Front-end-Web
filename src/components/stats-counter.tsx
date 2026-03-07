"use client"

import { useEffect, useState, useRef } from "react"

interface StatItemProps {
    value: string
    label: string
}

function StatItem({ value, label }: StatItemProps) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    // Extract numeric part and suffix
    const numericMatch = value.match(/^(\d+)(.*)$/)
    const targetNumber = numericMatch ? parseInt(numericMatch[1]) : 0
    const suffix = numericMatch ? numericMatch[2] : value

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    const duration = 2000
                    const steps = 60
                    const increment = targetNumber / steps
                    let current = 0
                    const timer = setInterval(() => {
                        current += increment
                        if (current >= targetNumber) {
                            setCount(targetNumber)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(current))
                        }
                    }, duration / steps)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [targetNumber, hasAnimated])

    return (
        <div ref={ref} className="text-center p-6">
            <div className="text-4xl sm:text-5xl font-bold text-primary tabular-nums">
                {count}
                {suffix}
            </div>
            <p className="mt-2 text-sm text-muted-foreground font-medium">{label}</p>
        </div>
    )
}

interface StatsCounterProps {
    stats: { value: string; label: string }[]
}

export function StatsCounter({ stats }: StatsCounterProps) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
            ))}
        </div>
    )
}
