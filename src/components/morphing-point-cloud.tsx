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
    const [windowSize, setWindowSize] = useState([0, 0]);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        // Sequentially pick initial shape on mount: 0=Capybara, 1=PCT, 2=Tree
        if (typeof window !== "undefined") {
            const lastShape = parseInt(localStorage.getItem("isaci_last_shape") || "-1");
            const nextShape = (lastShape + 1) % 3;
            localStorage.setItem("isaci_last_shape", nextShape.toString());
            setInitialShape(nextShape);
        } else {
            setInitialShape(0);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            // Mathematical patch map mouse space mathematically regardless of CSS bounds
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            mouseRef.current = {
                x: (e.clientX - rect.left) * scaleX,
                y: (e.clientY - rect.top) * scaleY
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

        const parent = canvas.parentElement;
        const w = parent ? parent.clientWidth : window.innerWidth;
        const h = parent ? parent.clientHeight : window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        // Base sizing and positioning logic within the new explicit Right Column container
        const isDesktop = window.innerWidth >= 1024;
        // MAX-IMPACT: Use full available width now that we've eated the margin
        const drawWidth = isDesktop ? Math.min(1150, w * 0.98) : Math.min(390, w * 0.98);

        // Balance height
        const shapeDrawHeight = isDesktop ? Math.min(drawWidth * 0.75, h * 0.85) : drawWidth * 0.8;
        // FLUSH RIGHT
        const dx = isDesktop ? (w - drawWidth) : (w - drawWidth) / 2;
        // Keep it relatively high
        const dy = isDesktop ? 30 : 40;

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

                if (idx === 0) {
                    // --- CAPYBARA FAMILY COMPOSITION ---
                    // 1. Mother Capybara (Large, looking right)
                    offCtx.drawImage(img, dx + drawWidth * 0.35, currDy + dHeight * 0.1, drawWidth * 0.6, dHeight * 0.8);

                    // 2. First Calf (Medium, walking behind mother)
                    offCtx.drawImage(img, dx + drawWidth * 0.1, currDy + dHeight * 0.45, drawWidth * 0.35, dHeight * 0.45);

                    // 3. Second Calf (Small, flipped, looking back)
                    offCtx.save();
                    offCtx.translate(dx + drawWidth * 0.75, currDy + dHeight * 0.55);
                    offCtx.scale(-1, 1);
                    offCtx.drawImage(img, 0, 0, drawWidth * 0.25, dHeight * 0.35);
                    offCtx.restore();
                } else if (idx === 2) {
                    // LOGO: scale to (0.98x) and flush right
                    const sw = img.width;
                    const sh = img.height;
                    const sx = 0;
                    const sy = 0;

                    const dw = drawWidth * 0.98;
                    const dh = dw * (sh / sw);
                    const destX = isDesktop ? w - dw : (w - dw) / 2;
                    const destY = dy + (shapeDrawHeight - dh) / 2;

                    offCtx.drawImage(img, sx, sy, sw, sh, destX, destY, dw, dh);
                } else {
                    // Building (idx 1): User likes this one, keep logic but flush right
                    const pad = drawWidth * 0.05;
                    offCtx.drawImage(img, dx + pad / 2 + 20, currDy + pad / 2, drawWidth - pad, dHeight - pad);
                }

                const { data } = offCtx.getImageData(0, 0, w, h);

                // High-resolution sampling for complex organic shapes
                const sampleGap = isDesktop ? 2 : 3;
                for (let y = 0; y < h; y += sampleGap) {
                    for (let x = 0; x < w; x += sampleGap) {
                        const index = (y * w + x) * 4;
                        const r = data[index];
                        const g = data[index + 1];
                        const b = data[index + 2];
                        const a = data[index + 3];

                        // Precise background removal tailored per image
                        let isBg = false;
                        if (idx === 0) {
                            // Capybaras: very lenient filter to preserve details
                            isBg = r > 250 && g > 250 && b > 250;
                        } else if (idx === 1) {
                            // PCT Guama: filter out the blue sky mathematically (blue is max channel)
                            // Also filter out pure whites if any exist.
                            const isBlueSky = (b > r && b > g);
                            const isPureWhite = (r > 240 && g > 240 && b > 240);
                            isBg = isBlueSky || isPureWhite;
                        } else {
                            isBg = r > 240 && g > 240 && b > 240;
                        }

                        if (a > 40 && !isBg) {
                            shapePoints[idx].push({ x, y, r, g, b, a });
                        }
                    }
                }
            });

            // --- IMPROVED PROCEDURAL SUMAÚMA GENERATION ---
            const numTreePts = 60000; // Increased density for premium look
            const treePoints: { x: number, y: number, c: string, a: number, isTrunk: boolean }[] = [];

            const treeBottom = dy + shapeDrawHeight - 10;
            const trunkHeight = shapeDrawHeight * 0.58;
            const treeTop = treeBottom - trunkHeight;
            const centerX = dx + drawWidth * 0.5; // PERFECT CENTER to prevent clipping

            const canopyWidth = drawWidth * 0.75; // Slightly narrowed to stay within bounds
            const trunkBaseWidth = drawWidth * 0.6;
            const trunkTopWidth = drawWidth * 0.12;

            // 1. Massive Gaussian Trunk & Sapopemas
            for (let i = 0; i < numTreePts * 0.5; i++) {
                const py = Math.random();
                const flare = Math.pow(py, 6.0) * 4.5;
                const currentHalfWidth = (trunkTopWidth + (trunkBaseWidth - trunkTopWidth) * flare) / 2;
                const gaussian = (Math.random() + Math.random() + Math.random() + Math.random()) / 4 - 0.5;
                const px = centerX + gaussian * currentHalfWidth * 2.2;
                const posY = treeTop + py * trunkHeight;

                let color = "rgba(18, 31, 10, 1)";
                if (Math.abs(px - centerX) > currentHalfWidth * 0.3) {
                    color = "rgba(45, 75, 30, 1)";
                }
                treePoints.push({ x: px, y: posY, c: color, a: 0.9, isTrunk: true });
            }

            // 2. Majestic Branches and Foliage
            const branchAngles = [-Math.PI * 0.15, -Math.PI * 0.3, -Math.PI * 0.45, -Math.PI * 0.55, -Math.PI * 0.7, -Math.PI * 0.85, -Math.PI * 0.95];
            const clusterCenters: { x: number, y: number, r: number }[] = [];

            branchAngles.forEach((angle) => {
                // Shorten branches so they don't clip the top dy boundary
                const maxLen = treeTop - dy;
                const len = Math.min(maxLen * 0.9, trunkHeight * (0.5 + Math.random() * 0.4));
                const branchEndX = centerX + Math.cos(angle) * len;
                const branchEndY = treeTop + Math.sin(angle) * len;

                for (let j = 0; j < 1000; j++) {
                    const t = j / 1000;
                    const b_width = (trunkTopWidth * (1 - t)) + 8;
                    treePoints.push({
                        x: centerX + Math.cos(angle) * len * t + (Math.random() - 0.5) * b_width,
                        y: treeTop + Math.sin(angle) * len * t + (Math.random() - 0.5) * b_width,
                        c: "rgba(45, 75, 30, 1)", a: 0.9, isTrunk: true
                    });

                    if (j % 200 === 0 && j > 0) {
                        clusterCenters.push({
                            x: centerX + Math.cos(angle) * len * t,
                            y: treeTop + Math.sin(angle) * len * t,
                            r: drawWidth * (0.05 + t * 0.15)
                        });
                    }
                }
                clusterCenters.push({ x: branchEndX, y: branchEndY, r: drawWidth * 0.2 });
            });

            for (let i = 0; i < numTreePts * 0.5; i++) {
                const cluster = clusterCenters[i % clusterCenters.length];
                const distRatio = Math.pow(Math.random(), 0.9);
                const angle = Math.random() * Math.PI * 2;
                const px = cluster.x + Math.cos(angle) * cluster.r * distRatio;
                const py = cluster.y + Math.sin(angle) * cluster.r * distRatio;

                const isTip = distRatio > 0.7;
                treePoints.push({
                    x: px, y: py,
                    c: isTip ? "rgba(162, 209, 73, 1)" : "rgba(45, 75, 30, 1)",
                    a: Math.max(0.4, 1.0 - distRatio * 0.6),
                    isTrunk: false
                });
            }

            // Target Logo is shapePoints[2]
            const logoPts = shapePoints[2];

            // TARGETS PAD LOOP
            const maxPoints = Math.max(logoPts.length, shapePoints[0].length, shapePoints[1].length, treePoints.length, 60000);

            // Pad the shape arrays
            ([logoPts, shapePoints[0], shapePoints[1], treePoints] as any[][]).forEach(arr => {
                while (arr.length > 0 && arr.length < maxPoints) {
                    arr.push(...arr.slice(0, maxPoints - arr.length));
                }
            });

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
                if (!sPt) sPt = { x: centerX, y: treeBottom };

                const tPt = logoPts[i] || { x: centerX, y: dy, r: 0, g: 0, b: 0, a: 0 };
                let tR = tPt.r, tG = tPt.g, tB = tPt.b;

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
                        ease = 0.07; // Much faster assembly for snappy feel

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

                    // Fade out particles entirely when final image is appearing
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
                if (assembled && localFinishedCount > particles.length * 0.4) {
                    currentImageAlpha += 0.03; // much faster fade in
                    if (currentImageAlpha > 1) currentImageAlpha = 1;
                }

                // Actually draw the *crisp* image of the logo when assembled
                if (currentImageAlpha > 0 && images[2]) {
                    const img = images[2];
                    const sw = img.width;
                    const sh = img.height;
                    const sx = 0;
                    const sy = 0;

                    const dw = drawWidth * 0.98;
                    const dh = dw * (sh / sw);
                    const destX = isDesktop ? w - dw : (w - dw) / 2;
                    const destY = dy + (shapeDrawHeight - dh) / 2;

                    ctx.globalAlpha = currentImageAlpha;
                    ctx.drawImage(img, sx, sy, sw, sh, destX, destY, dw, dh);
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
    }, [initialShape, assembled, resolvedTheme, windowSize]);

    return (
        <div
            className="w-full h-full relative overflow-hidden cursor-pointer flex items-center justify-center rounded-2xl"
            onClick={() => {
                if (assembled) {
                    setInitialShape((prev) => (prev !== null ? (prev + 1) % 3 : 0));
                    setAssembled(false);
                } else {
                    setAssembled(true);
                }
            }}
            title={assembled ? "Clique para ver a próxima imagem" : "Clique para revelar a Logomarca"}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block touch-none pointer-events-auto"
            />
        </div>
    );
}
