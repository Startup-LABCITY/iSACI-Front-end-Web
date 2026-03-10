import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const institutionalLinks = [
    { href: "/sobre", label: "Sobre o iSACI" },
    { href: "/projetos", label: "Projetos e Portfólio" },
    { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
    { href: "/parcerias", label: "Parcerias" },
    { href: "/transparencia", label: "Transparência" },
    { href: "/noticias", label: "Notícias" },
]

const projectLinks = [
    { href: "/projetos", label: "Pesquisa & Desenvolvimento" },
    { href: "/areas-de-atuacao", label: "Inovação Tecnológica" },
    { href: "/projetos", label: "Sustentabilidade" },
    { href: "/noticias", label: "Publicações" },
]

export function Footer() {
    return (
        <footer className="relative border-t border-border bg-background pt-16 pb-8 overflow-hidden">
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 pointer-events-none opacity-50" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 duration-200 w-fit">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo iSACI"
                                width={180}
                                height={60}
                                className="h-14 w-auto object-contain dark:brightness-200"
                            />
                        </Link>
                        <div className="space-y-4">
                            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                                Instituto Sustentabilidade da Amazônia com Ciência e Inovação – iSACI.
                                <span className="block mt-2 text-xs text-muted-foreground">CNPJ: 51.798.925/0001-60</span>
                            </p>
                            <div className="flex gap-4">
                                {/* Social media placeholders */}
                                <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Institucional */}
                    <div className="space-y-6">
                        <h3 className="text-[13px] font-bold text-foreground uppercase tracking-widest bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1 rounded-md">Institucional</h3>
                        <ul className="space-y-3">
                            {institutionalLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[15px] text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projetos */}
                    <div className="space-y-6">
                        <h3 className="text-[13px] font-bold text-foreground uppercase tracking-widest bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1 rounded-md">Nossa Atuação</h3>
                        <ul className="space-y-3">
                            {projectLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-[15px] text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="space-y-6">
                        <h3 className="text-[13px] font-bold text-foreground uppercase tracking-widest bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1 rounded-md">Contato Direto</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 group">
                                <div className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 group-hover:bg-primary transition-colors">
                                    <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                                </div>
                                <span className="text-sm text-muted-foreground leading-relaxed pt-1">
                                    Av. Perimetral da Ciência, S/N, KM 1, PCT Guamá – Belém/PA, 66075-750.
                                </span>
                            </li>
                            <li>
                                <a
                                    href="mailto:administrativo@isaci.org.br"
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 group-hover:bg-primary transition-colors">
                                        <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium">administrativo@isaci.org.br</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+559191470809"
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 group-hover:bg-primary transition-colors">
                                        <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium">(91) 99147-0809</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/50 flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <p className="text-xs text-muted-foreground text-center sm:text-left leading-relaxed">
                        © {new Date().getFullYear()} iSACI - Instituto Sustentabilidade da Amazônia com Ciência e Inovação.<br className="hidden sm:block" />
                        <span className="font-medium">Excelência em PD&I Aplicada para o Futuro da Amazônia.</span>
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/transparencia" className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
                            Privacidade
                        </Link>
                        <Link href="/transparencia" className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
                            Termos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
