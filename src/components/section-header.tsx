import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    eyebrow?: string
    centered?: boolean
    className?: string
}

export function SectionHeader({ title, subtitle, eyebrow, centered = true, className }: SectionHeaderProps) {
    return (
        <div className={cn("mb-16", centered && "text-center", className)}>
            {eyebrow && (
                <span className="text-primary font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.1]">
                {title}
            </h2>
            {subtitle && (
                <p className={cn(
                    "mt-6 text-muted-foreground leading-relaxed text-lg",
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
