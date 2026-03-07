import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Shield, Zap, Sparkles, Globe, Heart, Leaf, HeartHandshake } from "lucide-react"

export default function SobrePage() {
    const valores = [
        { title: "Inovação", desc: "Na nossa essência, a busca por soluções inéditas", icon: Zap },
        { title: "Excelência Científica", desc: "Rigor e qualidade em tudo que fazemos", icon: Sparkles },
        { title: "Sustentabilidade", desc: "Nosso compromisso com a Amazônia", icon: Leaf },
        { title: "Compromisso Amazônico", desc: "Paixão e dedicação à nossa terra", icon: Heart },
        { title: "Governança Ética", desc: "Transparência e integridade", icon: Shield },
        { title: "Colaboração Estratégica", desc: "Acreditamos no poder das parcerias", icon: HeartHandshake },
    ]

    const diretores = [
        { name: "Claudio Alex Jorge da Rocha", role: "Presidente" },
        { name: "Jorge Antonio Moraes de Souza", role: "Diretor Financeiro" },
        { name: "Marcelino Silva da Silva", role: "Diretor Administrativo" },
        { name: "André Moacir Lage Miranda", role: "Instituidor e Diretor de Relações Institucionais" },
        { name: "Aldebaro Barreto da Rocha Klautau Júnior", role: "Instituidor" },
        { name: "Edvar da Luz Oliveira", role: "Integrante" },
        { name: "Hugo Pereira Kuribayashi", role: "Integrante" },
        { name: "Rosinei de Sousa Oliveira", role: "Integrante" },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="O motor da inovação na Amazônia"
                subtitle="Conectando ciência, tecnologia e negócios para um futuro sustentável"
                highlight="Sobre o Instituto"
            />

            {/* História */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Nossa História" centered={false} />
                    <div className="prose prose-lg dark:prose-invert max-w-4xl text-muted-foreground leading-relaxed">
                        <p>
                            Fundado em 2023 por dez pesquisadores visionários de universidades federais do Pará, o Instituto de Soluções Amazônicas em Ciência e Inovação (ISACI) nasceu com um propósito claro: impulsionar o desenvolvimento da Amazônia a partir de sua maior riqueza — a inovação.
                        </p>
                        <p className="mt-4">
                            Nossa estrutura robusta, com um Conselho de Administração que inclui líderes como Sebrae, Governo do Estado e Embrapa, garante governança sólida e alinhamento estratégico com os maiores desafios da região.
                        </p>
                    </div>
                </div>
            </section>

            {/* Missão e Visão */}
            <section className="py-20 bg-card border-y border-border/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-background/50 border-border/50 shadow-sm hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <Target className="h-10 w-10 text-primary mb-2" />
                                <CardTitle className="text-2xl">Missão</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Desenvolver soluções inovadoras, científicas e sustentáveis, gerando progresso socioeconômico e valor para a Amazônia.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background/50 border-border/50 shadow-sm hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <Globe className="h-10 w-10 text-primary mb-2" />
                                <CardTitle className="text-2xl">Visão</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Ser reconhecido como o Instituto de referência em desenvolvimento tecnológico e inovação na Amazônia, através de parcerias estratégicas e excelência em pesquisa.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Nossos Valores" subtitle="Os princípios que guiam nossas ações" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {valores.map((valor, i) => (
                            <div key={i} className="flex gap-4 p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/60 transition-colors">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <valor.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-lg">{valor.title}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{valor.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipe / Fundadores */}
            <section className="py-24 bg-card/30 border-t border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Nossos Fundadores"
                        subtitle="Pesquisadores fundadores com décadas de experiência, garantindo a excelência científica e a visão estratégica necessárias para o desenvolvimento do ISACI."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {diretores.map((diretor, i) => (
                            <Card key={i} className="border-border/50 bg-background/50 shadow-none hover:shadow-md transition-shadow">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto h-16 w-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Users className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg leading-tight">{diretor.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pt-0">
                                    <p className="text-sm text-primary font-medium">{diretor.role}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
