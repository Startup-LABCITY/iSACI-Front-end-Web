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

    const logoOpacity = 1;
    const logoY = 0;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/40 transition-all duration-300">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <motion.div
                    initial={false}
                    animate={{ opacity: logoOpacity, y: logoY }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0"
                >
                    <Link href="/" className="flex items-center gap-2 group" aria-label="iSACI - Página inicial">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo iSACI"
                            width={160}
                            height={54}
                            className="max-h-14 w-auto object-contain py-1 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 dark:brightness-200"
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center" aria-label="Menu principal">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink
                                        active={pathname === link.href}
                                        render={<Link href={link.href} />}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent font-medium text-[15px] tracking-tight transition-all duration-200 rounded-full px-5 h-10 data-active:text-primary data-active:bg-primary/5 data-active:font-bold text-muted-foreground hover:text-primary hover:bg-primary/5"
                                        )}
                                    >
                                        {link.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="/contato" className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 rounded-full shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5")}>
                        Contato
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="flex lg:hidden items-center gap-3">
                    <ThemeToggle />
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-primary/10" aria-label="Abrir menu" />}>
                            <Menu className="h-6 w-6" />
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] border-l border-border/50 bg-background/95 backdrop-blur-2xl p-0">
                            <div className="flex flex-col h-full bg-gradient-to-b from-primary/5 to-transparent">
                                <div className="p-6 border-b border-border/50 flex items-center justify-between">
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
                                    <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="rounded-full">
                                        <X className="h-6 w-6" />
                                    </Button>
                                    <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                                </div>

                                <nav className="flex flex-col gap-2 p-6 overflow-y-auto" aria-label="Menu mobile">
                                    {navLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    "flex items-center px-6 py-4 text-lg font-semibold rounded-2xl transition-all h-16",
                                                    pathname === link.href
                                                        ? "text-primary bg-shade-100 shadow-sm border border-primary"
                                                        : "text-muted-foreground hover:text-primary hover:bg-primary"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <div className="mt-auto p-6 border-t border-border/50 bg-background/50">
                                    <Link
                                        href="/contato"
                                        onClick={() => setOpen(false)}
                                        className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl h-14 text-lg shadow-xl shadow-primary/20")}
                                    >
                                        Falar com Especialistas
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
