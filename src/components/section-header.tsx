import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    centered?: boolean
    className?: string
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn("mt-4 h-1 w-16 rounded-full bg-primary", centered && "mx-auto")} />
        </div>
    )
}
