"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

type Particle = {
    x: number;
    y: number;
    startX: number;
    startY: number;
    tx: number;
    ty: number;
    color: string;
    tColor: string;
    size: number;
    alpha: number;
    tAlpha: number;
    isTrunk?: boolean;
    treeBaseX?: number;
};

export function MorphingPointCloud() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { resolvedTheme } = useTheme();
    // 0: Capybara, 1: PCT Guama, 2: Tree
    const [initialShape, setInitialShape] = useState<number | null>(null);
    const [assembled, setAssembled] = useState(false);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        // Randomly pick initial shape on mount: 0, 1, or 2
        setInitialShape(Math.floor(Math.random() * 3));

        // Timer for shape transition
        const timer = setTimeout(() => setAssembled(true), 5000); // 5 seconds wait before logo
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (initialShape === null) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        let frameId: number | null = null;
        let isDarkMode = resolvedTheme === "dark";

        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        // Base sizing and positioning logic
        const isDesktop = w >= 1024;
        const drawWidth = isDesktop ? Math.min(600, w * 0.35) : Math.min(350, w * 0.8);
        const dx = isDesktop ? w * 0.75 - drawWidth / 2 : w * 0.5 - drawWidth / 2;

        // For mobile, we place it higher so it doesn't overlap text too much
        const dy = isDesktop ? h * 0.5 - (drawWidth * 0.35) : h * 0.25 - (drawWidth * 0.35);
        const shapeDrawHeight = drawWidth * 0.7;

        // Images: 0: Capybara, 1: PCT, 2: Logo
        const imagesSrc = [
            "/assets/capivara.svg",
            "/assets/espaco_inovacao.svg",
            "/assets/logo.png"
        ];

        const images = imagesSrc.map(src => {
            const img = new Image();
            img.src = src;
            return img;
        });

        const initParticles = async () => {
            await Promise.all(images.map(img => new Promise(resolve => {
                if (img.complete) resolve(null);
                else {
                    img.onload = () => resolve(null);
                    img.onerror = () => resolve(null);
                }
            })));

            const offscreen = document.createElement("canvas");
            offscreen.width = w;
            offscreen.height = h;
            const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
            if (!offCtx) return;

            // shapePoints arrays
            const shapePoints: { x: number, y: number, r: number, g: number, b: number, a: number }[][] = [[], [], []];

            images.forEach((img, idx) => {
                const ratio = drawWidth / img.width;
                const dHeight = img.height * ratio;
                const currDy = dy + (shapeDrawHeight - dHeight) / 2;

                offCtx.clearRect(0, 0, w, h);
                offCtx.drawImage(img, dx, currDy, drawWidth, dHeight);
                const { data } = offCtx.getImageData(0, 0, w, h);

                const sampleGap = isDesktop ? 4 : 3;
                for (let y = 0; y < h; y += sampleGap) {
                    for (let x = 0; x < w; x += sampleGap) {
                        const index = (y * w + x) * 4;
                        const a = data[index + 3];
                        if (a > 40) {
                            shapePoints[idx].push({ x, y, r: data[index], g: data[index + 1], b: data[index + 2], a });
                        }
                    }
                }
            });

            // Procedural Tree Generator (Used if initialShape === 2)
            const treePoints: { x: number, y: number, c: string, a: number, isTrunk: boolean }[] = [];
            const numTreePts = 40000;
            const treeBaseY = dy + shapeDrawHeight;
            const treeHeight = shapeDrawHeight * 1.5;
            const treeTop = treeBaseY - treeHeight;
            const centerX = dx + drawWidth / 2;
            const trunkTopW = drawWidth * 0.08;
            const trunkBaseW = drawWidth * 0.35;

            // Generate Tree Trunk
            for (let i = 0; i < numTreePts * 0.45; i++) {
                const py = Math.random();
                const flare = Math.pow(py, 5.0) * 3.5;
                const hw = (trunkTopW + (trunkBaseW - trunkTopW) * flare) / 2;
                const gx = (Math.random() + Math.random() + Math.random() + Math.random() - 2) * 0.5;
                const px = centerX + gx * hw * 2.2;
                const pY = treeTop + py * treeHeight;
                treePoints.push({ x: px, y: pY, c: "rgba(30, 50, 20, 1)", a: 0.9, isTrunk: true });
            }

            // Generate Branches and Foliage Clusters
            const branches = [-0.15, -0.35, -0.5, -0.65, -0.85, -1.05, -1.25];
            branches.forEach(angle => {
                const len = treeHeight * (0.6 + Math.random() * 0.4);
                const cx = centerX + Math.cos(angle) * len;
                const cy = treeTop + Math.sin(angle) * len;

                const ptsPerBranch = Math.floor(numTreePts * 0.55 / branches.length);
                for (let i = 0; i < ptsPerBranch; i++) {
                    const rDist = Math.pow(Math.random(), 0.8) * drawWidth * 0.35;
                    const rAng = Math.random() * Math.PI * 2;
                    const px = cx + Math.cos(rAng) * rDist;
                    const pY = cy + Math.sin(rAng) * rDist;
                    const distN = Math.hypot(px - cx, pY - cy) / (drawWidth * 0.35);
                    const isTip = distN > 0.65;
                    treePoints.push({
                        x: px, y: pY,
                        c: isTip ? "rgba(162, 209, 73, 1)" : "rgba(45, 75, 30, 1)",
                        a: Math.max(0.4, 1 - distN * 0.6),
                        isTrunk: false
                    });
                }
            });

            // Target Logo is shapePoints[2]
            const logoPts = shapePoints[2];

            // Required particles count
            const maxPoints = 40000;

            // Pad the shape arrays if they don't have enough points
            while (logoPts.length > 0 && logoPts.length < maxPoints) {
                logoPts.push(...logoPts.slice(0, maxPoints - logoPts.length));
            }
            while (shapePoints[0].length > 0 && shapePoints[0].length < maxPoints) {
                shapePoints[0].push(...shapePoints[0].slice(0, maxPoints - shapePoints[0].length));
            }
            while (shapePoints[1].length > 0 && shapePoints[1].length < maxPoints) {
                shapePoints[1].push(...shapePoints[1].slice(0, maxPoints - shapePoints[1].length));
            }

            const particles: Particle[] = [];

            for (let i = 0; i < maxPoints; i++) {
                // Determine start properties based on initialShape
                let sPt, sCol = "rgba(100,200,100,1)", sAlpha = 1, isTrunk = false;

                if (initialShape === 0) { // Capybara
                    sPt = shapePoints[0][i];
                    if (sPt) { sCol = `rgba(${sPt.r},${sPt.g},${sPt.b},1)`; sAlpha = sPt.a / 255; }
                } else if (initialShape === 1) { // PCT
                    sPt = shapePoints[1][i];
                    if (sPt) { sCol = `rgba(${sPt.r},${sPt.g},${sPt.b},1)`; sAlpha = sPt.a / 255; }
                } else { // Tree
                    const tPt = treePoints[i];
                    if (tPt) { sPt = tPt; sCol = tPt.c; sAlpha = tPt.a; isTrunk = tPt.isTrunk; }
                }

                // Fallback start point if something weird happens
                if (!sPt) sPt = { x: centerX, y: treeBaseY };

                const tPt = logoPts[i] || { x: centerX, y: dy, r: 0, g: 0, b: 0, a: 0 };
                let tR = tPt.r, tG = tPt.g, tB = tPt.b;
                // Deal with dark mode specifically for the logo
                if (isDarkMode && tR < 50 && tG < 50 && tB < 50) {
                    tR = 255; tG = 255; tB = 255;
                }

                particles.push({
                    x: sPt.x + (Math.random() - 0.5) * 40, // spread initial appearance slightly
                    y: sPt.y + (Math.random() - 0.5) * 40,
                    startX: sPt.x,
                    startY: sPt.y,
                    tx: tPt.x,
                    ty: tPt.y,
                    color: sCol,
                    tColor: `rgba(${tR},${tG},${tB},1)`,
                    size: isTrunk ? 1.0 : (1.5 + Math.random() * 2),
                    alpha: sAlpha,
                    tAlpha: isDarkMode ? (tPt.a / 255) * 0.8 : (tPt.a / 255) * 0.6,
                    isTrunk,
                    treeBaseX: centerX
                });
            }

            let frameCount = 0;
            let currentImageAlpha = 0;

            const animateFrames = () => {
                frameCount++;
                ctx.clearRect(0, 0, w, h);

                let localFinishedCount = 0;

                for (const p of particles) {
                    let targetX = p.startX;
                    let targetY = p.startY;
                    let drawColor = p.color;
                    let drawAlpha = p.alpha;
                    let ease = 0.05;

                    if (assembled) {
                        targetX = p.tx;
                        targetY = p.ty;
                        drawColor = p.tColor;
                        drawAlpha = p.tAlpha;
                        ease = 0.035; // Slowed down assembly slightly 

                        const dx_p = p.x - targetX;
                        const dy_p = p.y - targetY;
                        if (dx_p * dx_p + dy_p * dy_p < 4.0) {
                            localFinishedCount++;
                        }
                    } else {
                        // Apply organic breeze while idling in initial shape
                        const breezeX = !p.isTrunk ? Math.sin(frameCount * 0.02 + p.startX * 0.01) * 3 : 0;
                        const breezeY = !p.isTrunk ? Math.cos(frameCount * 0.03 + p.startY * 0.01) * 2 : 0;
                        targetX += breezeX;
                        targetY += breezeY;

                        // Mouse interaction while idling
                        if (!p.isTrunk) {
                            const mx = mouseRef.current.x;
                            const my = mouseRef.current.y;
                            const dx_m = p.x - mx;
                            const dy_m = p.y - my;
                            const dist = Math.sqrt(dx_m * dx_m + dy_m * dy_m);
                            if (dist < 100) {
                                const force = (100 - dist) / 100;
                                targetX += (dx_m / dist) * force * 50;
                                targetY += (dy_m / dist) * force * 50;
                            }

                            // Gentle twinkle effect for non-trunk components
                            drawAlpha = drawAlpha * (0.8 + Math.sin(frameCount * 0.05 + p.startX) * 0.2);
                        }
                    }

                    p.x += (targetX - p.x) * ease;
                    p.y += (targetY - p.y) * ease;

                    // Fade out particles entirely when image is appearing
                    if (currentImageAlpha > 0) {
                        drawAlpha *= (1 - currentImageAlpha);
                    }

                    if (drawAlpha > 0) {
                        ctx.globalAlpha = drawAlpha;
                        ctx.fillStyle = drawColor;
                        ctx.fillRect(p.x, p.y, p.size, p.size);
                    }
                }

                ctx.globalAlpha = 1;

                // When enough particles have hit the target, fade in the final Logo completely
                if (assembled && localFinishedCount > particles.length * 0.6) {
                    currentImageAlpha += 0.01; // slower fade in
                    if (currentImageAlpha > 1) currentImageAlpha = 1;
                }

                // Actually draw the *crisp* image of the logo when assembled
                if (currentImageAlpha > 0 && images[2]) {
                    const img = images[2];
                    const ratio = drawWidth / img.width;
                    const dHeight = img.height * ratio;
                    const currDy = dy + (shapeDrawHeight - dHeight) / 2;

                    ctx.globalAlpha = currentImageAlpha;
                    if (isDarkMode) ctx.filter = "invert(1)";
                    ctx.drawImage(img, dx, currDy, drawWidth, dHeight);
                    ctx.filter = "none";
                    ctx.globalAlpha = 1;
                }

                frameId = requestAnimationFrame(animateFrames);
            };

            animateFrames();
        };

        initParticles();

        return () => {
            if (frameId !== null) cancelAnimationFrame(frameId);
        };
    }, [initialShape, assembled, resolvedTheme]);

    return (
        <div className="absolute inset-0 w-full h-full -z-10 bg-transparent overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover touch-none pointer-events-auto z-0"
            />
        </div>
    );
}
