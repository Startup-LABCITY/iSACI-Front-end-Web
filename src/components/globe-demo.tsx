"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
    ssr: false,
});

export function GlobeDemo() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const [isDesktop, setIsDesktop] = React.useState(true);

    React.useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const globeConfig = {
        pointSize: 0.3,
        // High Contrast: Darker slate in light mode, Deep-black in dark mode
        globeColor: isDark ? "#010302" : "#94a3b8",
        showAtmosphere: true,
        atmosphereColor: isDark ? "#10b981" : "#64748b",
        atmosphereAltitude: 0.1,
        emissive: isDark ? "#064e3b" : "#94a3b8",
        emissiveIntensity: isDark ? 0.3 : 0.2,
        shininess: 0.9,
        // Countries: Bright emerald in dark mode, Deep jewel green in light mode
        polygonColor: isDark ? "rgba(52, 211, 153, 0.8)" : "rgba(6, 78, 59, 0.9)",
        ambientLight: "#ffffff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1200,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        // Default camera distance to fit globe without 3D frustum clipping
        cameraZ: 270,
        // Centered exactly on the geographic center of Brazil (Mato Grosso)
        initialPosition: { lat: -15, lng: -55 },
        autoRotate: false,
        autoRotateSpeed: 0.15, // Keep for potential future use
    };

    // Tech innovation and Amazon nature colors (emerald, cyan, indigo)
    const colors = ["#10b981", "#0ea5e9", "#6366f1"];

    // Pará (Belém) coordinates - The Hub
    const belemLat = -1.45502;
    const belemLng = -48.5024;

    // All other 26 Brazilian State Capitals
    const capitals = [
        { lat: -9.974, lng: -67.807 },   // Rio Branco, AC
        { lat: -9.666, lng: -35.735 },   // Maceió, AL
        { lat: 0.038, lng: -51.066 },    // Macapá, AP
        { lat: -3.119, lng: -60.021 },   // Manaus, AM
        { lat: -12.971, lng: -38.501 },  // Salvador, BA
        { lat: -3.717, lng: -38.543 },   // Fortaleza, CE
        { lat: -15.780, lng: -47.929 },  // Brasília, DF
        { lat: -20.315, lng: -40.312 },  // Vitória, ES
        { lat: -16.686, lng: -49.264 },  // Goiânia, GO
        { lat: -2.530, lng: -44.296 },   // São Luís, MA
        { lat: -15.601, lng: -56.097 },  // Cuiabá, MT
        { lat: -20.442, lng: -54.646 },  // Campo Grande, MS
        { lat: -19.916, lng: -43.934 },  // Belo Horizonte, MG
        { lat: -7.115, lng: -34.863 },   // João Pessoa, PB
        { lat: -25.428, lng: -49.273 },  // Curitiba, PR
        { lat: -8.047, lng: -34.877 },   // Recife, PE
        { lat: -5.089, lng: -42.801 },   // Teresina, PI
        { lat: -22.906, lng: -43.172 },  // Rio de Janeiro, RJ
        { lat: -5.794, lng: -35.211 },   // Natal, RN
        { lat: -30.034, lng: -51.217 },  // Porto Alegre, RS
        { lat: -8.761, lng: -63.903 },   // Porto Velho, RO
        { lat: 2.823, lng: -60.675 },    // Boa Vista, RR
        { lat: -27.595, lng: -48.548 },  // Florianópolis, SC
        { lat: -23.550, lng: -46.633 },  // São Paulo, SP
        { lat: -10.909, lng: -37.073 },  // Aracaju, SE
        { lat: -10.184, lng: -48.333 },  // Palmas, TO
    ];

    const sampleArcs = capitals.map((cap, i) => ({
        order: (i % 5) + 1,
        startLat: cap.lat,
        startLng: cap.lng,
        endLat: belemLat,
        endLng: belemLng,
        arcAlt: 0.1 + (Math.random() * 0.2), // Random height between 0.1 and 0.3
        color: colors[i % colors.length],
    }));

    if (!isDesktop) return null;

    return (
        <div className="flex flex-col items-center justify-center relative w-[800px] h-[800px] lg:w-[1000px] lg:h-[1000px]">
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-plus-lighter dark:mix-blend-normal">
                <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
        </div>
    );
}
