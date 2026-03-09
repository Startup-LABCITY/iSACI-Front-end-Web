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
        // Increased opacity significantly for light mode as requested
        const strokeBase = isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(6, 78, 59, 0.25)"
        const nodeBase = isDark ? "rgba(16, 185, 129, 0.20)" : "rgba(6, 78, 59, 0.35)"

        // Amazon Nature + Tech Connection colors (richer in light mode)
        const pulseColors = isDark
            ? ["#10b981", "#059669", "#0ea5e9", "#0284c7"] // neon for dark bg
            : ["#059669", "#047857", "#0369a1", "#0284c7"] // more saturated green and blue for light bg

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
        let logoPoints: { x: number, y: number }[] = []

        let logoWidth = 1
        let logoHeight = 1

        const loadLogo = () => {
            const img = new Image()
            img.src = "/assets/logo.png"
            img.onload = () => {
                const offCanvas = document.createElement("canvas")
                const offCtx = offCanvas.getContext("2d", { willReadFrequently: true })
                if (!offCtx) return

                // Update the effective aspect ratio for the scale calculations
                logoWidth = img.width / img.height
                logoHeight = 1

                // Scale down slightly to improve loop performance
                const sampleWidth = Math.min(img.width, 1000)
                const sampleHeight = sampleWidth / logoWidth
                offCanvas.width = sampleWidth
                offCanvas.height = sampleHeight

                // Draw the FULL image (icon + text)
                offCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, sampleWidth, sampleHeight)
                const data = offCtx.getImageData(0, 0, sampleWidth, sampleHeight).data

                logoPoints = []

                let logoBounds = { minY: 9999, maxY: 0 }
                let subtitleBounds = { minY: 9999, maxY: 0 }
                let gapStarts = 0, gapEnds = 0
                let inLogo = false, inSubtitle = false

                // Basic row scanning to find the gap between logo and subtitle
                for (let y = 0; y < sampleHeight; y++) {
                    let hasPixels = false
                    for (let x = 0; x < sampleWidth; x++) {
                        if (data[(y * sampleWidth + x) * 4 + 3] > 128) {
                            hasPixels = true; break;
                        }
                    }
                    if (hasPixels) {
                        if (!inSubtitle) {
                            if (!inLogo) { inLogo = true; logoBounds.minY = y; }
                            logoBounds.maxY = y;
                        } else {
                            subtitleBounds.maxY = y;
                        }
                    } else {
                        if (inLogo && !inSubtitle && y > logoBounds.maxY + 5) { // 5px gap threshold
                            inSubtitle = true;
                            gapStarts = logoBounds.maxY;
                            gapEnds = y;
                            subtitleBounds.minY = y;
                        }
                    }
                }
                // Calculate the true vertical center of the strictly cropped logo section
                const cropCenterY = (logoBounds.minY + logoBounds.maxY) / 2 / sampleHeight;

                for (let y = 0; y < sampleHeight; y += 4) {
                    for (let x = 0; x < sampleWidth; x += 4) {
                        const alpha = data[(y * sampleWidth + x) * 4 + 3]
                        if (alpha > 128) {
                            // Perfect crop dynamically identified by the gap
                            if (y > logoBounds.maxY + 2) {
                                continue
                            }

                            logoPoints.push({
                                // Normalize between 0 and 1 relative to the full image dimensions
                                x: x / sampleWidth,
                                // Offset Y so the cropped logo acts as if it is perfectly vertically centered at 0
                                y: (y / sampleHeight) - cropCenterY
                            })
                        }
                    }
                }

                initNetwork()
            }
        }

        const initNetwork = () => {
            // Density: Even higher density as requested by user, optimized for performance
            const N = 3000
            nodes = []
            edges = []
            pulses = []

            // 1. Generate nodes (strictly from icon points)
            for (let i = 0; i < N; i++) {
                let x = 0, y = 0, valid = false

                const isLogoNode = logoPoints.length > 0

                for (let attempts = 0; attempts < 50; attempts++) {
                    if (isLogoNode) {
                        const lp = logoPoints[Math.floor(Math.random() * logoPoints.length)]
                        const targetWidth = width * 0.75
                        const renderScale = targetWidth / logoWidth

                        y = (height / 2) + lp.y * renderScale
                        x = (width * 0.05) + lp.x * targetWidth

                        x += (Math.random() - 0.5) * 6
                        y += (Math.random() - 0.5) * 6
                    } else {
                        x = Math.random() * width
                        y = Math.random() * height
                    }

                    valid = true
                    // Optimization: Only check collision with last 200 nodes instead of all
                    const checkStart = Math.max(0, nodes.length - 200)
                    for (let j = checkStart; j < nodes.length; j++) {
                        if (Math.hypot(nodes[j].x - x, nodes[j].y - y) < 3.5) { valid = false; break; }
                    }
                    if (valid) break
                }

                nodes.push({
                    x, y,
                    baseX: x, baseY: y,
                    vx: (Math.random() - 0.5) * 0.2, // Increased initial velocity
                    vy: (Math.random() - 0.5) * 0.2,
                    edges: []
                })
            }

            // 2. Connect nodes organically (Optimized search)
            // Use a grid or a simpler subset to avoid O(N^2)
            const gridSize = 100
            const grid: { [key: string]: Node[] } = {}

            nodes.forEach(n => {
                const gx = Math.floor(n.x / gridSize)
                const gy = Math.floor(n.y / gridSize)
                const key = `${gx},${gy}`
                if (!grid[key]) grid[key] = []
                grid[key].push(n)
            })

            nodes.forEach(node => {
                const gx = Math.floor(node.x / gridSize)
                const gy = Math.floor(node.y / gridSize)

                let neighbors: Node[] = []
                for (let ox = -1; ox <= 1; ox++) {
                    for (let oy = -1; oy <= 1; oy++) {
                        const key = `${gx + ox},${gy + oy}`
                        if (grid[key]) neighbors = neighbors.concat(grid[key])
                    }
                }

                const sorted = neighbors
                    .filter(n => n !== node)
                    .sort((a, b) => Math.hypot(a.x - node.x, a.y - node.y) - Math.hypot(b.x - node.x, b.y - node.y))

                const connections = 1 + Math.floor(Math.random() * 2)
                for (let j = 0; j < Math.min(connections, sorted.length); j++) {
                    const neighbor = sorted[j]
                    const exists = edges.find(e => (e.n1 === node && e.n2 === neighbor) || (e.n1 === neighbor && e.n2 === node))
                    const dist = Math.hypot(node.x - neighbor.x, node.y - neighbor.y)

                    if (!exists && dist < 80) { // Tighter connections for higher density
                        const curveOffset = (Math.random() - 0.5) * 0.15
                        const edge = { n1: node, n2: neighbor, curveOffset }
                        edges.push(edge)
                        node.edges.push(edge)
                        neighbor.edges.push(edge)
                    }
                }
            })
        }

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

            if (logoPoints.length === 0) {
                loadLogo()
            } else {
                initNetwork()
            }
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

        // Spawn pulses more frequently as requested
        const pulseInterval = setInterval(() => {
            if (edges.length > 0 && pulses.length < 12) { // Increased to 12 pulses
                const edge = edges[Math.floor(Math.random() * edges.length)]
                spawnPulse(edge, Math.random() > 0.5)
            }
        }, 300) // Much faster interval (300ms)

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Update Nodes
            nodes.forEach(n => {
                // Organic drift - keep them "alive"
                n.vx += (Math.random() - 0.5) * 0.008
                n.vy += (Math.random() - 0.5) * 0.008

                n.x += n.vx
                n.y += n.vy

                // Spring back to base position - slightly looser for more movement
                const dx = n.baseX - n.x
                const dy = n.baseY - n.y
                n.vx += dx * 0.0004
                n.vy += dy * 0.0004

                // Friction - keeps movement under control
                n.vx *= 0.96
                n.vy *= 0.96
            })

            // Draw Edges (Organic Synapses)
            ctx.lineWidth = 1.0 // Thinner lines for higher density
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
                ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2) // Smaller nodes
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
