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
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Ecosistema"
                        title="Nossos Parceiros Estratégicos"
                        subtitle="Unindo forças com as principais instituições de tecnologia, governo e academia para transformar o futuro da Amazônia."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                        {parceiros.map((parceiro, i) => (
                            <Card key={i} className="bg-card/30 border-border/50 hover:bg-card/80 transition-all duration-500 flex flex-col items-center justify-center p-10 text-center min-h-[14rem] group rounded-[2.5rem] hover:-translate-y-2">
                                <CardContent className="p-0">
                                    <div className="text-2xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                                        {parceiro.name}
                                    </div>
                                    <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                                        {parceiro.type}
                                    </div>
                                </CardContent>
                                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impacto / Comunidade */}
            <section className="py-32 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader
                        eyebrow="Comunidade"
                        title="Parcerias com Propósito"
                        subtitle="Nossas ações integram o conhecimento científico à realidade local, gerando impacto tangível e progressivo."
                    />

                    <div className="grid md:grid-cols-3 gap-10 mt-20">
                        {[
                            { icon: HeartHandshake, title: "Impacto Social", desc: "Projetos estruturados para gerar melhoria de vida e oportunidades justas para comunidades locais." },
                            { icon: BookOpen, title: "Saberes Tradicionais", desc: "A valorização e integração do conhecimento ancestral com as mais recentes inovações científicas." },
                            { icon: GraduationCap, title: "Educação & Futuro", desc: "Programas de formação técnica para fortalecer a economia regional e o empreendedorismo local." }
                        ].map((item, i) => (
                            <div key={i} className="group bg-background rounded-[3rem] p-10 border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                                <div className="h-16 w-16 mb-8 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-40 bg-slate-950 dark:bg-card/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-30" />
                <div className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full bg-primary/20 blur-[180px] pointer-events-none" />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader
                        variant="on-dark"
                        centered={true}
                        eyebrow="Vamos construir juntos"
                        title="Sua visão, nossa excelência"
                        subtitle="Entre em contato hoje e descubra como o iSACI pode impulsionar seu projeto para o próximo nível."
                        className="mb-12 dark:text-foreground text-white"
                    />

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="h-16 px-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-105" render={<Link href="/contato" />}>
                            Quero ser um parceiro
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
