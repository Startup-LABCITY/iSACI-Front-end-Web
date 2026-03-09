"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
    isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => setShow(false), 500); // Wait for fade out animation
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!show) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                >
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Animated Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: 1
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-64 h-24 sm:w-80 sm:h-32"
                        >
                            <Image
                                src="/assets/logo.png"
                                alt="iSACI Logo"
                                fill
                                className="object-contain drop-shadow-2xl dark:brightness-200"
                                priority
                            />
                        </motion.div>

                        {/* Premium Progress Bar */}
                        <div className="w-48 sm:w-64 h-1 bg-primary/10 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "100%" }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute top-0 bottom-0 w-1/2 bg-primary blur-[1px]"
                            />
                        </div>

                        {/* Subtle Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-primary font-medium tracking-[0.2em] text-xs uppercase"
                        >
                            Carregando...
                        </motion.p>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, -5, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
