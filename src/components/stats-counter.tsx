"use client"

import { useEffect, useState, useRef } from "react"

import { Card, CardContent } from "@/components/ui/card"

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
        <Card ref={ref} className="text-center p-6 bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm">
            <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary tabular-nums tracking-tight">
                    {count}
                    {suffix}
                </div>
                <p className="mt-3 text-sm text-foreground/80 font-semibold uppercase tracking-wider">{label}</p>
            </CardContent>
        </Card>
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
