"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { useState, useEffect } from "react";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, 3000 - elapsed);

            setTimeout(() => {
                setIsLoading(false);
            }, remaining);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad, { once: true });
            // Fallback for safety
            const fallback = setTimeout(handleLoad, 6000);
            return () => clearTimeout(fallback);
        }
    }, []);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <QueryProvider>
                <LoadingScreen isLoading={isLoading} />
                <div
                    className="flex flex-col min-h-screen transition-opacity duration-1000"
                    style={{
                        opacity: isLoading ? 0 : 1,
                        visibility: isLoading ? "hidden" : "visible",
                        pointerEvents: isLoading ? "none" : "auto"
                    }}
                >
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </QueryProvider>
        </ThemeProvider>
    );
}
