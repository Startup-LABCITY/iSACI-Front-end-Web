import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Leaf, FlaskConical, Briefcase, TrendingUp, Handshake, ShieldCheck } from "lucide-react"

export default function AreasDeAtuacaoPage() {
    const servicos = [
        {
            title: "Soluções Tecnológicas",
            desc: "Desenvolvimento de software, sistemas integrados e soluções digitais para empresas e instituições públicas e privadas.",
            icon: Code,
        },
        {
            title: "Inovação Sustentável",
            desc: "Projetos focados na preservação ambiental e aproveitamento racional da biodiversidade amazônica, impulsionando a bioeconomia.",
            icon: Leaf,
        },
        {
            title: "Pesquisa e Desenvolvimento",
            desc: "P&D avançado integrando academia e mercado para resolver problemas complexos com embasamento científico de ponta.",
            icon: FlaskConical,
        },
        {
            title: "Consultoria e Serviços",
            desc: "Assessoria técnica especializada nas áreas de tecnologia da informação, telecomunicações e processos de inovação.",
            icon: Briefcase,
        },
    ]

    const pilaresNegoio = [
        {
            title: "Projetos Personalizados",
            desc: "Cada solução é moldada sob medida para as necessidades específicas do parceiro e do ecossistema local.",
            icon: TrendingUp
        },
        {
            title: "Resultados Mensuráveis",
            desc: "Foco total na entrega de valor real, monitorado através de métricas precisas de impacto e eficiência.",
            icon: ShieldCheck
        },
        {
            title: "Parcerias Estratégicas",
            desc: "Atuação em rede, conectando diferentes atores para maximizar o alcance e a efetividade das ações.",
            icon: Handshake
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Áreas de Atuação"
                subtitle="Do software à bioeconomia, o ISACI oferece um portfólio completo de soluções científicas e tecnológicas para o desenvolvimento sustentável."
                highlight="Nossas Soluções"
            />

            {/* Serviços */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Nossos Serviços" subtitle="Conheça nossas principais verticais de atuação e especialidades." />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {servicos.map((servico, i) => (
                            <Card key={i} className="bg-card border-border/50 hover:border-primary/50 transition-colors shadow-sm group">
                                <CardHeader>
                                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <servico.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <CardTitle className="text-xl">{servico.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {servico.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modelo de Negócio */}
            <section className="py-24 bg-card/30 border-t border-border/50 relative overflow-hidden">
                <div className="absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nosso Modelo de Negócio</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                            Baseado na execução de projetos personalizados que atendem às necessidades específicas, garantindo resultados de alto valor.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {pilaresNegoio.map((pilar, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="h-20 w-20 rounded-full bg-background border border-border shadow-sm flex items-center justify-center mb-6 relative">
                                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 scale-150 blur-xl transition-all duration-300" />
                                    <pilar.icon className="h-8 w-8 text-primary relative z-10" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{pilar.title}</h3>
                                <p className="text-muted-foreground text-sm">{pilar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
