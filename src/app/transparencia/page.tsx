import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart, FileText, Download, ShieldCheck, Scale, FileSignature, CheckCircle2 } from "lucide-react"

export default function TransparenciaPage() {
    const relatorios = [
        { title: "Relatório Anual 2023", desc: "Balanço completo das atividades, projetos e resultados alcançados pelo ISACI em 2023.", date: "Janeiro 2024", status: "Disponível", icon: BarChart },
        { title: "Prestação de Contas - 1º Semestre 2024", desc: "Demonstrativo financeiro e de atividades do primeiro semestre de 2024.", date: "Julho 2024", status: "Disponível", icon: FileText },
        { title: "Relatório de Impacto Social", desc: "Análise do impacto social e ambiental dos projetos desenvolvidos pelo instituto.", date: "Março 2024", status: "Disponível", icon: EarthIcon },
        { title: "Relatório Anual 2024", desc: "Relatório anual com todas as atividades e resultados de 2024.", date: "Janeiro 2025", status: "Em Preparação", icon: BarChart },
    ]

    const documentosGovernanca = [
        { title: "Estatuto Social", desc: "Documento fundador que estabelece os princípios, objetivos e estrutura organizacional do ISACI." },
        { title: "Código de Ética", desc: "Diretrizes éticas que norteiam todas as atividades e relacionamentos do instituto." },
        { title: "Política de Governança", desc: "Conjunto de regras e processos que garantem a gestão transparente e responsável." },
        { title: "Regimento Interno", desc: "Normas internas que regulamentam o funcionamento e as atividades do instituto." },
        { title: "Política de Conflito de Interesses", desc: "Diretrizes para identificação e gestão de potenciais conflitos de interesse." },
        { title: "Manual de Compliance", desc: "Procedimentos para assegurar o cumprimento de todas as normas legais e regulamentares." },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Governança e Credibilidade"
                subtitle="Nosso compromisso com a clareza, ética e responsabilidade na gestão dos recursos e projetos."
                highlight="Transparência"
            />

            {/* Relatórios e Prestação de Contas */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Relatórios e Prestação de Contas" subtitle="Balanços, relatórios anuais e demonstrações financeiras para total transparência" />

                    <div className="grid md:grid-cols-2 gap-6 mt-16">
                        {relatorios.map((relatorio, i) => (
                            <Card key={i} className="flex flex-col border-border/50 bg-card/30 hover:border-primary/50 transition-colors group">
                                <CardHeader className="flex flex-row items-start justify-between pb-2">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <relatorio.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <Badge variant={relatorio.status === "Disponível" ? "default" : "secondary"} className={relatorio.status === "Disponível" ? "bg-primary hover:bg-primary/90" : ""}>
                                        {relatorio.status}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="flex-1 mt-4">
                                    <h3 className="text-xl font-bold mb-2">{relatorio.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{relatorio.desc}</p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{relatorio.date}</span>
                                        <button
                                            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={relatorio.status !== "Disponível"}
                                        >
                                            <Download className="h-4 w-4" />
                                            Baixar PDF
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentos de Governança */}
            <section className="py-24 bg-card/30 border-y border-border/50">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Documentos de Governança" subtitle="Estrutura ética e normativa que rege todas as atividades do ISACI" />

                    <div className="mt-12 bg-background border border-border rounded-2xl p-2">
                        <Accordion className="w-full">
                            {documentosGovernanca.map((doc, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-border px-4 [&:last-child]:border-0">
                                    <AccordionTrigger className="hover:no-underline hover:text-primary text-left font-semibold text-lg py-6">
                                        <div className="flex items-center gap-3">
                                            <Scale className="h-5 w-5 text-muted-foreground" />
                                            {doc.title}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-0 ml-8">
                                        {doc.desc}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Contratos e Indicadores */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contratos */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">Transparência em Contratos</h3>
                                <p className="text-muted-foreground">Consulte os contratos de prestação de serviços, fornecimento e parcerias.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-6 border border-border rounded-xl bg-card">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="outline" className="text-xs">Vigente</Badge>
                                        <FileSignature className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <h4 className="font-semibold text-lg mb-2">Contrato nº 12/2024 - Serviços de Auditoria</h4>
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block mt-4">Janeiro 2024</span>
                                </div>

                                <div className="p-6 border border-border rounded-xl bg-card">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-0">Assinado</Badge>
                                        <FileSignature className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <h4 className="font-semibold text-lg mb-2">Termo de Fomento nº 03/2024 - Projeto Social</h4>
                                    <p className="text-sm text-muted-foreground mt-2">Instrumento jurídico firmado para a execução de atividades voltadas ao desenvolvimento comunitário.</p>
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block mt-4">Março 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Indicadores */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">Indicadores de Transparência</h3>
                                <p className="text-muted-foreground">Métricas que demonstram nosso compromisso com a responsabilidade.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 border border-border rounded-xl bg-primary/5 text-center flex flex-col items-center justify-center">
                                    <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                                    <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                                    <div className="text-sm text-muted-foreground font-medium">Relatórios Publicados no Prazo</div>
                                </div>
                                <div className="p-8 border border-border rounded-xl bg-card text-center flex flex-col items-center justify-center">
                                    <ShieldCheck className="h-8 w-8 text-muted-foreground mb-4" />
                                    <div className="text-4xl font-bold text-foreground mb-2">0</div>
                                    <div className="text-sm text-muted-foreground font-medium">Denúncias de Irregularidades</div>
                                </div>
                                <div className="p-8 border border-border rounded-xl bg-card text-center flex flex-col items-center justify-center">
                                    <Scale className="h-8 w-8 text-muted-foreground mb-4" />
                                    <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                                    <div className="text-sm text-muted-foreground font-medium">Conformidade Legal</div>
                                </div>
                                <div className="p-8 border border-primary/20 bg-primary text-primary-foreground rounded-xl text-center flex flex-col items-center justify-center">
                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay rounded-xl pointer-events-none" />
                                    <div className="text-5xl font-bold mb-2 relative z-10">A+</div>
                                    <div className="text-sm font-medium text-primary-foreground/90 relative z-10">Classificação de Governança</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

function EarthIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}
