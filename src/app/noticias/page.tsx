import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NoticiasPage() {
    const noticias = [
        {
            title: "iSACI participa de abertura do I Workshop INCT IAmazônia",
            excerpt: "Confira as informações mais recentes sobre participação em eventos, parcerias e projetos apoiados pelo iSACI durante o workshop focado em inteligência artificial na Amazônia.",
            date: "05 Mar 2024",
            category: "Institucional",
            imagePlaceholder: "IA"
        },
        {
            title: "Nova parceria com ALCOA fortalece bioeconomia em Juruti",
            excerpt: "Instituto iSACI assina acordo que prevê a construção de biofábrica voltada para a produção de óleos, manteigas e biojoias com base na flora local.",
            date: "28 Fev 2024",
            category: "Projetos",
            imagePlaceholder: "PB"
        },
        {
            title: "Artigo sobre redes Cell-Free Massive MIMO é publicado na IEEE",
            excerpt: "Pesquisadores vinculados ao iSACI publicam estudo pioneiro sobre seleção de pontos de acesso em redes de comunicação imersivas centradas no usuário.",
            date: "15 Fev 2024",
            category: "Pesquisa",
            imagePlaceholder: "MIMO"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Notícias e Atualizações"
                subtitle="Confira as informações mais recentes sobre participação em eventos, parcerias e projetos apoiados pelo iSACI."
                highlight="Fique por dentro"
            />

            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Últimas Publicações" centered={false} />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {noticias.map((noticia, i) => (
                            <Card key={i} className="flex flex-col border-border bg-card overflow-hidden hover:border-primary/50 transition-colors group shadow-sm">
                                <div className="h-48 bg-muted relative flex items-center justify-center text-primary/20 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 transition-transform duration-500 group-hover:scale-105" />
                                    <span className="text-6xl font-black italic relative z-10 opacity-50">{noticia.imagePlaceholder}</span>
                                </div>
                                <CardHeader className="pt-6 relative">
                                    <Badge variant="secondary" className="absolute -top-3 left-6 right-auto bg-background border border-border text-xs px-3 py-1 shadow-sm">
                                        {noticia.category}
                                    </Badge>
                                    <CardTitle className="text-xl line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                        {noticia.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                        {noticia.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between border-t border-border/50 pt-4 pb-4 bg-muted/20 mt-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{noticia.date}</span>
                                    </div>
                                    <Link href="#" className="flex items-center gap-1 font-semibold text-primary hover:text-primary/80 transition-colors">
                                        Ler mais
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}
