"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroLogo() {
    const { scrollY } = useScroll();

    // Transform values based on scroll position (0 to 150px)
    const opacity = useTransform(scrollY, [0, 150], [1, 0]);
    const y = useTransform(scrollY, [0, 150], [0, -50]);
    const scale = useTransform(scrollY, [0, 150], [1, 0.8]);

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="mb-8 origin-center lg:origin-left z-20"
        >
            <Image
                src={resolvedTheme === "dark" ? "/assets/logo_isaci/Logos iSACI-03.png" : "/assets/logo.png"}
                alt="iSACI Logo"
                width={320}
                height={120}
                className="h-24 sm:h-32 w-auto object-contain drop-shadow-xl"
                priority
            />
        </motion.div>
    );
}
