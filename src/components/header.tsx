"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

import { motion } from "framer-motion"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navLinks = [
    { href: "/sobre", label: "Sobre o iSACI" },
    { href: "/projetos", label: "Projetos e Portfólio" },
    { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
    { href: "/parcerias", label: "Parcerias" },
    { href: "/transparencia", label: "Transparência" },
    { href: "/noticias", label: "Notícias" },
]

export function Header() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const isHome = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        // Reset on navigation
        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    const logoOpacity = isHome ? (isScrolled ? 1 : 0) : 1
    const logoY = isHome ? (isScrolled ? 0 : -20) : 0

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <motion.div
                    initial={false}
                    animate={{ opacity: logoOpacity, y: logoY }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                >
                    <Link href="/" className="flex items-center gap-2 group" aria-label="iSACI - Página inicial">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo iSACI"
                            width={140}
                            height={48}
                            className="max-h-12 w-auto object-contain py-1 transition-transform group-hover:scale-105 dark:brightness-200"
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center" aria-label="Menu principal">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <Link href={link.href} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            active={pathname === link.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "bg-transparent font-semibold",
                                                pathname === link.href
                                                    ? "text-primary bg-primary/10 hover:bg-primary/15"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                            )}
                                        >
                                            {link.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-2">
                    <ThemeToggle />
                    <Link href="/contato" className={cn(buttonVariants({ variant: "default" }), "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5")}>
                        Contato
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="flex lg:hidden items-center gap-2">
                    <ThemeToggle />
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger render={<Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Abrir menu" />}>
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-background">
                            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                            <div className="flex flex-col gap-6 pt-6">
                                <Link
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2"
                                >
                                    <Image
                                        src="/assets/logo.png"
                                        alt="Logo iSACI"
                                        width={140}
                                        height={40}
                                        className="h-10 w-auto object-contain dark:brightness-200"
                                    />
                                </Link>

                                <nav className="flex flex-col gap-1" aria-label="Menu mobile">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                                pathname === link.href
                                                    ? "text-primary bg-primary/10"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>

                                <Link
                                    href="/contato"
                                    onClick={() => setOpen(false)}
                                    className={cn(buttonVariants({ variant: "default" }), "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold")}
                                >
                                    Contato
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
