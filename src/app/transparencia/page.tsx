import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart, FileText, Download, ShieldCheck, Scale, FileSignature, CheckCircle2 } from "lucide-react"
import { DOCUMENTS } from "@/lib/documents"

export default function TransparenciaPage() {
    const relatorios = [
        { title: "Relatório Anual 2023", desc: "Balanço completo das atividades, projetos e resultados alcançados pelo ISACI em 2023.", date: "Janeiro 2024", status: "Disponível", icon: BarChart, file: DOCUMENTS.TRANSPARENCIA.RELATORIO_2023 },
        { title: "Prestação de Contas - 1º Semestre 2024", desc: "Demonstrativo financeiro e de atividades do primeiro semestre de 2024.", date: "Julho 2024", status: "Disponível", icon: FileText, file: DOCUMENTS.TRANSPARENCIA.PRESTACAO_2024_1S },
        { title: "Relatório de Impacto Social", desc: "Análise do impacto social e ambiental dos projetos desenvolvidos pelo instituto.", date: "Março 2024", status: "Disponível", icon: EarthIcon, file: DOCUMENTS.TRANSPARENCIA.IMPACTO_SOCIAL },
        { title: "Relatório Anual 2024", desc: "Relatório anual com todas as atividades e resultados de 2024.", date: "Janeiro 2025", status: "Em Preparação", icon: BarChart, file: "#" },
    ]

    const documentosGovernanca = [
        { title: "Estatuto Social", desc: "Documento fundador que estabelece os princípios, objetivos e estrutura organizacional do ISACI." },
        { title: "Política de Inovação", desc: "Diretrizes para identificação e gestão de potenciais conflitos de interesse." },
     ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Governança e Credibilidade"
                subtitle="Nosso compromisso com a clareza, ética e responsabilidade na gestão dos recursos e projetos."
                highlight="Transparência"
            />

            {/* Relatórios e Prestação de Contas */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Responsabilidade"
                        title="Relatórios e Prestação de Contas"
                        subtitle="Acompanhe nossa gestão com total transparência através de balanços, relatórios anuais e demonstrações financeiras."
                    />

                    <div className="grid md:grid-cols-2 gap-8 mt-20">
                        {relatorios.map((relatorio, i) => (
                            <Card key={i} className="flex flex-col border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-[2.5rem] group overflow-hidden">
                                <CardHeader className="flex flex-row items-start justify-between p-10 pb-4">
                                    <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <relatorio.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <Badge variant={relatorio.status === "Disponível" ? "default" : "secondary"} className={cn(
                                        "px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider",
                                        relatorio.status === "Disponível" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                    )}>
                                        {relatorio.status}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="flex-1 px-10 pt-4">
                                    <h3 className="text-2xl font-extrabold mb-3 tracking-tight">{relatorio.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-10">{relatorio.desc}</p>

                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-border/50">
                                        <span className="text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">{relatorio.date}</span>
                                        <a
                                            href={relatorio.file}
                                            download
                                            className={cn(
                                                "flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary/80 transition-all group/btn",
                                                relatorio.status !== "Disponível" && "opacity-30 cursor-not-allowed pointer-events-none"
                                            )}
                                        >
                                            <Download className="h-5 w-5 transition-transform group-hover/btn:-translate-y-1" />
                                            Baixar PDF
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentos de Governança */}
            <section className="py-32 bg-secondary/20 border-y border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-foreground pointer-events-none" />
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader
                        eyebrow="Conformidade"
                        title="Governança Sustentável"
                        subtitle="Estrutura ética e normativa que garante a integridade de todas as operações e decisões do iSACI."
                    />

                    <div className="mt-20 bg-background border border-border/50 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
                        <Accordion className="w-full">
                            {documentosGovernanca.map((doc, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-border/30 px-8 [&:last-child]:border-0 overflow-hidden">
                                    <AccordionTrigger className="hover:no-underline hover:text-primary text-left font-bold text-xl py-8 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-primary-foreground flex items-center justify-center text-primary group-hover:bg-primaryTransition">
                                                <Scale className="h-5 w-5" />
                                            </div>
                                            {doc.title}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 pt-2 ml-14 max-w-3xl">
                                        {doc.desc}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Contratos e Indicadores */}
            <section className="py-32 bg-background relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24">

                        {/* Contratos */}
                        <div className="space-y-12">
                            <div>
                                <span className="text-primary font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">Transparência Ativa</span>
                                <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Transparência em Contratos</h3>
                                <p className="text-xl text-muted-foreground leading-relaxed">Consulte os contratos de prestação de serviços, fornecimento e parcerias estratégicas.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="p-10 border border-border/50 rounded-[2.5rem] bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300 shadow-sm relative group">
                                    <div className="flex justify-between items-start mb-6">
                                        <Badge variant="outline" className="px-3 py-1 bg-accent text-primary border-primary/20 text-[10px] font-bold uppercase tracking-widest">Vigente</Badge>
                                        <FileSignature className="h-6 w-6 text-primary group-hover:text-primary transition-colors" />
                                    </div>
                                    <h4 className="font-extrabold text-2xl mb-2 tracking-tight">Contrato nº 12/2024 - Auditoria</h4>
                                    <p className="text-muted-foreground text-lg mb-6">Serviços especializados de auditoria independente para verificação de contas.</p>
                                    <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] block">Janeiro 2024</span>
                                </div>

                                <div className="p-10 border border-border/50 rounded-[2.5rem] bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300 shadow-sm relative group">
                                    <div className="flex justify-between items-start mb-6">
                                        <Badge variant="outline" className="px-3 py-1 bg-primary text-primary-foreground border-0 text-[10px] font-bold uppercase tracking-widest">Assinado</Badge>
                                        <FileSignature className="h-6 w-6 text-primary group-hover:text-primary transition-colors" />
                                    </div>
                                    <h4 className="font-extrabold text-2xl mb-2 tracking-tight">Termo de Fomento nº 03/2024</h4>
                                    <p className="text-muted-foreground text-lg mb-6">Instrumento jurídico firmado para a execução de atividades de desenvolvimento comunitário.</p>
                                    <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] block">Março 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Indicadores */}
                        <div className="space-y-12">
                            <div>
                                <span className="text-primary font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">Métricas</span>
                                <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Indicadores de Transparência</h3>
                                <p className="text-xl text-muted-foreground leading-relaxed">Dados que demonstram matematicamente nosso compromisso com a excelência ética.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-10 border border-border/50 rounded-[2.5rem] bg-accent text-center flex flex-col items-center justify-center group hover:bg-primary/10 transition-colors">
                                    <CheckCircle2 className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
                                    <div className="text-5xl font-extrabold text-foreground mb-2 tracking-tighter">100%</div>
                                    <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Publicação Mensal</div>
                                </div>
                                <div className="p-10 border border-border/50 rounded-[2.5rem] bg-card text-center flex flex-col items-center justify-center group hover:border-primary/20 transition-all">
                                    <ShieldCheck className="h-10 w-10 text-primary/40 mb-6 group-hover:text-primary transition-colors" />
                                    <div className="text-5xl font-extrabold text-foreground mb-2 tracking-tighter">0</div>
                                    <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Irregularidades</div>
                                </div>
                                <div className="p-10 border border-border/50 rounded-[2.5rem] bg-card text-center flex flex-col items-center justify-center group hover:border-primary/20 transition-all">
                                    <Scale className="h-10 w-10 text-primary/40 mb-6 group-hover:text-primary transition-colors" />
                                    <div className="text-5xl font-extrabold text-foreground mb-2 tracking-tighter">100%</div>
                                    <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Conformidade</div>
                                </div>
                                <div className="p-10 border border-primary/20 bg-primary text-white rounded-[2.5rem] text-center flex flex-col items-center justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-2xl shadow-primary/20">
                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                                    <div className="text-6xl font-black mb-3 relative z-10 transition-transform group-hover:scale-110">A+</div>
                                    <div className="text-xs font-black uppercase tracking-[0.2em] relative z-10 opacity-90">Governança</div>
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
