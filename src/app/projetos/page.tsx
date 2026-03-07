import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BookOpen, Leaf, Cpu } from "lucide-react"

export default function ProjetosPage() {
    const portfolioCientifico = [
        {
            title: "Matched-Decision AP Selection for User-Centric Cell-Free Massive MIMO Networks",
            authors: "FREITAS, M.; SOUZA, D.; COSTA, D. B.; BORGES, G.; CAVALCANTE, A. M.; MARQUEZINI, M.; ALMEIDA, I.; RODRIGUES, R.; COSTA, J. C. W. A.",
            journal: "IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, v. 1, p. 1-16, 2023.",
            year: "2023"
        },
        {
            title: "Classification of satellite images for deforestation regions in northeastern Pará using deep learning technique",
            authors: "CANAVIEIRA, L. O.; COSTA, J. C. W. A.; SANTOS FILHO, R. C.",
            journal: "Journal of Engineering Research, v. 3, p. 1-5, 2023.",
            year: "2023"
        },
        {
            title: "Adaptive Hybrid Precoding Strategy for Cell-Free Massive MIMO",
            authors: "MATHE, D. M.; ACATAUASSU, D.; BORGES, G. S.; Rodrigues, R. M.; CAVALCANTE, A. M.; MARQUEZINI, M. V.; ALMEIDA, I.; Costa, J. C. W. A.",
            journal: "JOURNAL OF MICROWAVES, OPTOELECTRONICS AND ELECTROMAGNETIC APPLICATIONS, v. 22, p. 257-267, 2023",
            year: "2023"
        },
        {
            title: "Method and arrangement for loop qualification in a digital subscriber line (DSL) system",
            authors: "SALES JR, C. de S. de; LINDQVISK, F.; RIU, J. R. I.; COSTA, J. C. W. A.",
            journal: "Registro: EP2074808B1",
            year: "2006"
        },
        {
            title: "Method and Arrangement for a Digital Subscriber Line",
            authors: "RODRIGUES, R. M.; COSTA, J. C. W. A.; KLAUTAU JR, A. B. da R.; ERICSON, K.",
            journal: "Registro: PCT/EP2008061273",
            year: "2008"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Projetos e Portfólio"
                subtitle="Nosso trabalho se materializa em projetos que geram impacto real. Conheça as soluções que desenvolvemos para nossos parceiros e a diferença que fazemos na região."
                highlight="Impacto Real"
            />

            {/* Projetos em Destaque */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Projetos em Destaque" subtitle="Cases de sucesso com impacto real na região amazônica" />

                    <div className="grid lg:grid-cols-2 gap-12 mt-16">
                        <div className="flex flex-col rounded-3xl overflow-hidden border border-border bg-card/50">
                            <div className="h-64 bg-muted relative flex items-center justify-center p-8 text-center text-primary/30">
                                <Cpu className="w-24 h-24" />
                                <Badge variant="secondary" className="absolute top-4 right-4 bg-background border-border font-medium">
                                    Em Andamento
                                </Badge>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">Tecnologia</Badge>
                                <h3 className="text-2xl font-bold mb-4 line-clamp-3 leading-tight">Serviços Especializados de Manutenção e Expansão de Software e Infraestrutura da PRODEPA</h3>
                                <p className="text-muted-foreground mb-6 flex-1">
                                    Projeto de inovação tecnológica para modernização dos sistemas legados e expansão das infovias digitais da PRODEPA, aumentando a capacidade de atendimento às demandas emergentes de TIC no Estado do Pará, especialmente no contexto da COP30 em Belém.
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm bg-background p-4 rounded-xl border border-border">
                                    <div>
                                        <span className="text-muted-foreground block text-xs uppercase tracking-wider font-semibold mb-1">Cliente</span>
                                        <span className="font-medium">PRODEPA</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block text-xs uppercase tracking-wider font-semibold mb-1">Período</span>
                                        <span className="font-medium">06/2024 - 06/2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-3xl overflow-hidden border border-border bg-card/50">
                            <div className="h-64 bg-muted relative flex items-center justify-center p-8 text-center text-primary/30">
                                <Leaf className="w-24 h-24 text-accent" />
                                <Badge variant="secondary" className="absolute top-4 right-4 bg-background border-border font-medium">
                                    Em Desenvolvimento
                                </Badge>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <Badge className="w-fit mb-4 bg-accent/20 text-accent-foreground hover:bg-accent/30 border-0">Bioeconomia</Badge>
                                <h3 className="text-2xl font-bold mb-4 line-clamp-3 leading-tight">Bioeconomia e Sustentabilidade no Município de Juruti-Pará (PBSJUR)</h3>
                                <p className="text-muted-foreground mb-6 flex-1">
                                    Projeto voltado à geração de trabalho e renda em Juruti, a partir do aproveitamento sustentável de matérias-primas locais. Envolve capacitação e produção para extração de óleos, manteigas e biojoias.
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm bg-background p-4 rounded-xl border border-border">
                                    <div>
                                        <span className="text-muted-foreground block text-xs uppercase tracking-wider font-semibold mb-1">Cliente</span>
                                        <span className="font-medium">ALCOA Brasil</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block text-xs uppercase tracking-wider font-semibold mb-1">Período</span>
                                        <span className="font-medium">08/2024 - 08/2027</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galeria de Projetos */}
            <section className="py-24 bg-card/30 border-y border-border/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Outros Projetos" subtitle="Conheça mais iniciativas desenvolvidas pelo iSACI" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[1, 2, 3, 4].map((item) => (
                            <Card key={item} className="bg-background/50 shadow-sm border-border">
                                <CardHeader>
                                    <Badge variant="outline" className="w-fit mb-3">IoT / Meio Ambiente</Badge>
                                    <CardTitle className="text-xl">Sistema de Monitoramento Ambiental IoT</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Desenvolvimento de rede de sensores inteligentes para monitoramento em tempo real da qualidade ambiental na região amazônica.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Em andamento</span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfólio Científico */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Portfólio Científico" subtitle="Nossa produção científica em publicações e patentes" />

                    <div className="mt-12 space-y-6">
                        {portfolioCientifico.map((pub, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors">
                                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-foreground mb-2 leading-snug">{pub.title}</h4>
                                    <p className="text-sm text-muted-foreground mb-2 font-medium">{pub.authors}</p>
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                        <span className="italic">{pub.journal}</span>
                                        <span className="px-2 py-0.5 rounded-md bg-accent/20 text-accent-foreground font-semibold">{pub.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
