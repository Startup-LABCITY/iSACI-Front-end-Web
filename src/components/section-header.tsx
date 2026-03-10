import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    eyebrow?: string
    centered?: boolean
    className?: string
    variant?: "default" | "on-dark" // Adiciona a variante
}
export function SectionHeader({
    title,
    subtitle,
    eyebrow,
    centered = true,
    className,
    variant = "default" // Valor padrão
}: SectionHeaderProps) {
    const isDark = variant === "on-dark"
    return (
        <div className={cn("mb-16", centered && "text-center", className)}>
            {eyebrow && (
                <span className={cn(
                    "font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block",
                    isDark ? "text-primary/80" : "text-primary"
                )}>
                    {eyebrow}
                </span>
            )}
            <h2 className={cn(
                "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.1]",
                isDark ? "text-white" : "text-foreground"
            )}>
                {title}
            </h2>
            {subtitle && (
                <p className={cn(
                    "mt-6 leading-relaxed text-lg",
                    isDark ? "text-white/70" : "text-muted-foreground",
                    centered ? "max-w-3xl mx-auto" : "max-w-2xl"
                )}>
                    {subtitle}
                </p>
            )}
            <div className={cn(
                "mt-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-primary/40",
                centered && "mx-auto"
            )} />
        </div>
    )
}
