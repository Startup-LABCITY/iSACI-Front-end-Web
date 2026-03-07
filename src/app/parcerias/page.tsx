import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HeartHandshake, ArrowRight, BookOpen, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ParceriasPage() {
    const parceiros = [
        { name: "Sebrae", type: "Apoio ao Empreendedorismo" },
        { name: "UNIFESSPA", type: "Apoio ao Empreendedorismo" },
        { name: "Governo do Estado", type: "Parceria Governamental" },
        { name: "U.PORTO", type: "Apoio ao Empreendedorismo" },
        { name: "CAPES", type: "Pesquisa e Ensino" },
        { name: "ERICSSON", type: "Apoio ao Empreendedorismo" },
        { name: "LUT University", type: "Apoio ao Empreendedorismo" },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="O futuro é construído em conjunto"
                subtitle="A força do iSACI reside em suas parcerias. Trabalhamos lado a lado com empresas, governos e a academia para transformar ideias em resultados."
                highlight="Parcerias"
            />

            {/* Parceiros Estratégicos */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Nossos Parceiros Estratégicos" subtitle="Juntos, somos mais fortes para enfrentar os desafios complexos da Amazônia." />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {parceiros.map((parceiro, i) => (
                            <Card key={i} className="bg-card/30 border-border/50 hover:bg-card/80 transition-colors flex flex-col items-center justify-center p-8 text-center min-h-48 group">
                                <CardContent className="p-0">
                                    <div className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-wide">
                                        {parceiro.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                                        {parceiro.type}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impacto / Comunidade */}
            <section className="py-24 bg-card/30 border-y border-border/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Parcerias com a Comunidade" subtitle="Nossas ações vão além dos laboratórios, impactando diretamente quem vive na Amazônia." />

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-background rounded-3xl p-8 border border-border">
                            <HeartHandshake className="h-12 w-12 text-primary mb-6" />
                            <h3 className="text-xl font-semibold mb-3">Impacto Social</h3>
                            <p className="text-muted-foreground">Projetos estruturados para gerar melhoria de vida, inclusão e oportunidades justas para comunidades locais.</p>
                        </div>

                        <div className="bg-background rounded-3xl p-8 border border-border">
                            <BookOpen className="h-12 w-12 text-primary mb-6" />
                            <h3 className="text-xl font-semibold mb-3">Conhecimento Tradicional</h3>
                            <p className="text-muted-foreground">A união do saber dos povos originários e comunidades tradicionais com a ciência moderna.</p>
                        </div>

                        <div className="bg-background rounded-3xl p-8 border border-border">
                            <GraduationCap className="h-12 w-12 text-primary mb-6" />
                            <h3 className="text-xl font-semibold mb-3">Capacitação</h3>
                            <p className="text-muted-foreground">Programas de formação técnica e profissional para fortalecer a mão de obra e o empreendedorismo regional.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Seja Parceiro */}
            <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent blur-3xl opacity-30 pointer-events-none" />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-6">Seja um Parceiro do ISACI</h2>
                    <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Ao se tornar um parceiro, você investe no futuro sustentável da Amazônia através de projetos focados em bioeconomia, tecnologia e desenvolvimento socioeconômico. Descubra como podemos colaborar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-base h-14 px-8 rounded-full" render={<Link href="/contato" />}>
                            Formulário de Interesse
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground text-base h-14 px-8 rounded-full" render={<Link href="/sobre" />}>
                            Por que ser nosso parceiro?
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
