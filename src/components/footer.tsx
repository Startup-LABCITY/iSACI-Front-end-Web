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
        <footer className="border-t border-border bg-card">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Logo iSACI"
                                width={160}
                                height={48}
                                className="h-12 w-auto object-contain dark:invert"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Instituto de Soluções Amazônicas em Ciência e Inovação. Transformando conhecimento em progresso para a Amazônia.
                        </p>
                    </div>

                    {/* Institucional */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Institucional</h3>
                        <ul className="space-y-2">
                            {institutionalLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projetos */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Projetos</h3>
                        <ul className="space-y-2">
                            {projectLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                                <span>Av. Perimetral da Ciência, km 1, S/N - Guamá, Belém - PA. Prédio Espaço Inovação, 3° andar.</span>
                            </li>
                            <li>
                                <a
                                    href="mailto:administrativo@isaci.org.br"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                    administrativo@isaci.org.br
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+559191470809"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                    (91) 99147-0809
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-border" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} ISACI - Instituto de Soluções Amazônicas em Ciência e Inovação. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/transparencia" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                            Política de Privacidade
                        </Link>
                        <Link href="/transparencia" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
