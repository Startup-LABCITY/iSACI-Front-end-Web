import { cn } from "@/lib/utils"
import { ShaderBackground } from "@/components/shader-background"

interface PageHeroProps {
    title: string
    subtitle?: string
    highlight?: string
    className?: string
}

export function PageHero({ title, subtitle, highlight, className }: PageHeroProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 sm:py-28",
                className
            )}
        >
            {/* TODO: Voltar ShaderBackground depois de melhorar a página */}
            {/* <ShaderBackground /> */}

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                {highlight && (
                    <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary bg-accent rounded-full">
                        {highlight}
                    </span>
                )}
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
