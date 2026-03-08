"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ShaderBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        let animationFrameId: number

        const isDark = resolvedTheme === "dark"
        // High contrast for light mode (deep greens), subtle for dark mode
        const strokeBase = isDark ? "rgba(16, 185, 129, 0.08)" : "rgba(6, 78, 59, 0.25)" // dark emerald
        const nodeBase = isDark ? "rgba(16, 185, 129, 0.25)" : "rgba(6, 78, 59, 0.45)"

        // Amazon Nature + Tech Connection colors (richer in light mode)
        const pulseColors = isDark
            ? ["#10b981", "#059669", "#0ea5e9", "#0284c7"] // neon for dark bg
            : ["#065f46", "#047857", "#0369a1", "#1d4ed8"] // deep jewel tones for light bg

        let width = 0
        let height = 0

        interface Node {
            x: number
            y: number
            baseX: number
            baseY: number
            vx: number
            vy: number
            edges: Edge[]
        }

        interface Edge {
            n1: Node
            n2: Node
            curveOffset: number
        }

        interface Pulse {
            edge: Edge
            reverse: boolean
            progress: number
            speed: number
            color: string
            length: number
            trail: { x: number, y: number }[]
        }

        let nodes: Node[] = []
        let edges: Edge[] = []
        let pulses: Pulse[] = []

        const resizeCanvas = () => {
            const parent = canvas.parentElement
            if (parent) {
                width = parent.clientWidth
                height = parent.clientHeight
            } else {
                width = window.innerWidth
                height = window.innerHeight
            }
            canvas.width = width
            canvas.height = height

            initNetwork()
        }

        const initNetwork = () => {
            // Density: Drastically reduced for a clean, sparse, premium feel. 1 node per 60,000 pixels
            const N = Math.max(15, Math.floor((width * height) / 60000))
            nodes = []
            edges = []
            pulses = []

            // 1. Generate nodes with a minimum spacing
            for (let i = 0; i < N; i++) {
                let x = 0, y = 0, valid = false
                for (let attempts = 0; attempts < 15; attempts++) {
                    x = Math.random() * width
                    y = Math.random() * height
                    valid = true
                    for (const n of nodes) {
                        if (Math.hypot(n.x - x, n.y - y) < 80) { valid = false; break; }
                    }
                    if (valid) break
                }

                nodes.push({
                    x, y,
                    baseX: x, baseY: y,
                    vx: (Math.random() - 0.5) * 0.1, // Slower drift
                    vy: (Math.random() - 0.5) * 0.1, // Slower drift
                    edges: []
                })
            }

            // 2. Connect nodes organically
            nodes.forEach(node => {
                // Find ~2 closest neighbors for sparse elegant lines
                const sorted = [...nodes]
                    .filter(n => n !== node)
                    .sort((a, b) => Math.hypot(a.x - node.x, a.y - node.y) - Math.hypot(b.x - node.x, b.y - node.y))

                for (let j = 0; j < 2; j++) {
                    const neighbor = sorted[j]
                    if (neighbor) {
                        const exists = edges.find(e => (e.n1 === node && e.n2 === neighbor) || (e.n1 === neighbor && e.n2 === node))
                        const dist = Math.hypot(node.x - neighbor.x, node.y - neighbor.y)

                        // Extended reach but fewer lines overall
                        if (!exists && dist < 450) {
                            const curveOffset = (Math.random() - 0.5) * 0.3 // Milder curves
                            const edge = { n1: node, n2: neighbor, curveOffset }
                            edges.push(edge)
                            node.edges.push(edge)
                            neighbor.edges.push(edge)
                        }
                    }
                }
            })
        }

        window.addEventListener("resize", resizeCanvas)
        resizeCanvas() // Initial setup

        // Helper to get point on quadratic bezier curve
        const getBezierPoint = (t: number, p0: Node, cp: { x: number, y: number }, p2: Node) => {
            const u = 1 - t
            const tt = t * t
            const uu = u * u
            return {
                x: uu * p0.x + 2 * u * t * cp.x + tt * p2.x,
                y: uu * p0.y + 2 * u * t * cp.y + tt * p2.y
            }
        }

        const getControlPoint = (edge: Edge) => {
            const dx = edge.n2.x - edge.n1.x
            const dy = edge.n2.y - edge.n1.y
            const mx = edge.n1.x + dx / 2
            const my = edge.n1.y + dy / 2
            return {
                x: mx - dy * edge.curveOffset,
                y: my + dx * edge.curveOffset
            }
        }

        const spawnPulse = (edge: Edge, reverse: boolean = false) => {
            pulses.push({
                edge,
                reverse,
                progress: 0,
                speed: 0.001 + Math.random() * 0.002, // Slower, elegant pulses
                color: pulseColors[Math.floor(Math.random() * pulseColors.length)],
                length: 0.1 + Math.random() * 0.15,
                trail: []
            })
        }

        // Spawn a pulse extremely rarely to keep it clean
        const pulseInterval = setInterval(() => {
            if (edges.length > 0 && pulses.length < 3) { // Max 3 pulses at a time globally
                const edge = edges[Math.floor(Math.random() * edges.length)]
                spawnPulse(edge, Math.random() > 0.5)
            }
        }, 1500) // Much longer interval

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Update Nodes
            nodes.forEach(n => {
                // Organic drift
                n.x += n.vx
                n.y += n.vy

                // Spring back to base position
                const dx = n.baseX - n.x
                const dy = n.baseY - n.y
                n.vx += dx * 0.0005
                n.vy += dy * 0.0005

                // Friction
                n.vx *= 0.95
                n.vy *= 0.95
            })

            // Draw Edges (Organic Synapses)
            ctx.lineWidth = 1.5
            edges.forEach(edge => {
                const cp = getControlPoint(edge)
                ctx.beginPath()
                ctx.moveTo(edge.n1.x, edge.n1.y)
                ctx.quadraticCurveTo(cp.x, cp.y, edge.n2.x, edge.n2.y)
                ctx.strokeStyle = strokeBase
                ctx.stroke()
            })

            // Draw Nodes
            nodes.forEach(n => {
                ctx.beginPath()
                ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2)
                ctx.fillStyle = nodeBase
                ctx.fill()
            })

            // Update and Draw Traveling Pulses
            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i]
                p.progress += p.speed

                const p0 = p.reverse ? p.edge.n2 : p.edge.n1
                const p2 = p.reverse ? p.edge.n1 : p.edge.n2
                const cp = getControlPoint(p.edge)

                if (p.progress > 1) {
                    // Propagate to next node maybe? (Simulating continuous network flow/knowledge cascade)
                    if (Math.random() < 0.6) {
                        const nextNode = p2
                        if (nextNode.edges.length > 1) {
                            // Pick an edge that isn't the one we just arrived on
                            const validEdges = nextNode.edges.filter(e => e !== p.edge)
                            if (validEdges.length > 0) {
                                const nextEdge = validEdges[Math.floor(Math.random() * validEdges.length)]
                                spawnPulse(nextEdge, nextEdge.n2 === nextNode)
                            }
                        }
                    }
                    pulses.splice(i, 1)
                    continue
                }

                // Calculate current head pos
                const head = getBezierPoint(p.progress, p0, cp, p2)
                p.trail.push(head)
                if (p.trail.length > 20) p.trail.shift()

                // Draw trail
                if (p.trail.length > 1) {
                    ctx.beginPath()
                    ctx.moveTo(p.trail[0].x, p.trail[0].y)
                    for (let j = 1; j < p.trail.length; j++) {
                        ctx.lineTo(p.trail[j].x, p.trail[j].y)
                    }
                    ctx.strokeStyle = p.color
                    ctx.lineWidth = 2.5

                    // Simple glowing effect
                    ctx.globalAlpha = 0.7
                    ctx.stroke()
                    ctx.globalAlpha = 1.0
                }

                // Draw head extremely bright (Data packet)
                ctx.beginPath()
                ctx.arc(head.x, head.y, 3, 0, Math.PI * 2)
                ctx.fillStyle = isDark ? "#ffffff" : p.color
                ctx.fill()
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            clearInterval(pulseInterval)
            cancelAnimationFrame(animationFrameId)
        }
    }, [resolvedTheme])

    return (
        <div className="absolute inset-0 w-full h-full -z-10 bg-background overflow-hidden">
            {/* Deep gradient overlay to blend edges and give depth */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--tw-gradient-from)_100%)] from-background/0 via-background/60 to-background pointer-events-none mix-blend-normal" />
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover touch-none pointer-events-none z-0"
            />
        </div>
    )
}
