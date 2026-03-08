"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroLogo() {
    const { scrollY } = useScroll();

    // Transform values based on scroll position (0 to 150px)
    const opacity = useTransform(scrollY, [0, 150], [1, 0]);
    const y = useTransform(scrollY, [0, 150], [0, -50]);
    const scale = useTransform(scrollY, [0, 150], [1, 0.8]);

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="mb-8 origin-center lg:origin-left z-20"
        >
            <Image
                src="/assets/logo.png"
                alt="iSACI Logo"
                width={320}
                height={120}
                className="h-24 sm:h-32 w-auto object-contain drop-shadow-xl dark:brightness-200"
                priority
            />
        </motion.div>
    );
}
