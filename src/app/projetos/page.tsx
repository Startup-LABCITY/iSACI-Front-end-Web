import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Code, BookOpen, Leaf, Cpu, Award } from "lucide-react"

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

    const patentes = [
        {
            title: "Method and arrangement for loop qualification in a digital subscriber line (DSL) system",
            authors: "SALES JR, C. de S. de; LINDQVISK, Fredrik; RIU, Jaume Rius I; COSTA, J. C. W. A.",
            details: "2006, Estados Unidos. Patente: Privilégio de Inovação. Número de registro: EP2074808B1."
        },
        {
            title: "Method and Arrangement for a Digital Subscriber Line",
            authors: "RODRIGUES, R. M; COSTA, J. C. W. A.; KLAUTAU JR, A. B. da R.; ERICSON, K.",
            details: "2008, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: PCT/EP2008061273. Financiadora: Ericsson."
        },
        {
            title: "Adaptive Hybrid Precoding Strategy for Cell-Free Massive Multiple Input Multiple Output",
            authors: "CAVALCANTE, A.; BORGES, G. S.; RODRIGUES, R. M; MATHE, D. M.; ALMEIDA, I.; MARQUEZINI, M. V.; COSTA, J. C. W. A.",
            details: "2021, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: 054537, WIPO. Financiadora: Ericsson."
        },
        {
            title: "Self-healing method for fronthaul communication failures in serial cell-free networks",
            authors: "COSTA, J. C. W. A.; FERNANDES, A. L. P.; CAVALCANTE, A. M.; MARQUEZINI, M. V.; ALMEIDA, I.; BORGES, G. S.; RODRIGUES, R. M",
            details: "2021, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: 059016, WIPO. Financiadora: Ericsson."
        },
        {
            title: "Processing a Connection Request from a User Equipment",
            authors: "RODRIGUES, R. M.; ALMEIDA, I.; CAVALCANTE, A.; MARQUEZINI, M. V.; FREITAS, M. M. M.; BORGES, G. S.; COSTA, J. C.",
            details: "2022, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: 2022/06004, WIPO."
        },
        {
            title: "Method and arrangement for power minimization in a multi-tone transmission-based communication system",
            authors: "DORTSCHY, B.; RIUS, J.; MORAES, Rodrigo; KLAUTAU, Aldebaro; ZAMPOLO, Ronaldo Freitas",
            details: "2006, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US 8,238,545. Financiadora: Ericsson."
        },
        {
            title: "Method central unit, and modem in a digital subscriber line network",
            authors: "DORTSCHY, B.; RIUS, J.; MORAES, Rodrigo; KLAUTAU, Aldebaro; ZAMPOLO, Ronaldo Freitas",
            details: "2007, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US 8,295,151. Financiadora: Ericsson."
        },
        {
            title: "Method and a System for Management of Transmission Resources in Digital Communication Systems",
            authors: "LINDVISQT, F.; DORTSCHY, B.; KLAUTAU, Aldebaro; FONSECA, Maria Neiva da Silva; PELAES, Evaldo",
            details: "2008, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US 8,848,555. Financiadora: Ericsson."
        },
        {
            title: "Operating Points for Spectrum Management in Digital Subscriber Lines",
            authors: "DORTSCHY, B.; BEZERRA, J.; KLAUTAU, Aldebaro; MEDEIROS, E.; CONTE, M. M.",
            details: "2009, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US 8,724,799. Financiadora: Ericsson."
        },
        {
            title: "Dynamic Target Margin Adaption For DSL Transmission Lines",
            authors: "MEDEIROS, E.; DORTSCHY, B.; KLAUTAU, Aldebaro; CONTE, M. M.",
            details: "2011, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US 8,983,060. Financiadora: Ericsson."
        },
        {
            title: "Systems and methods for determining non-linear precoding coefficients",
            authors: "LU, Chenguang; ERIKSSON, P; KLAUTAU, Aldebaro; MULLER, FRANCISCO C. B. F.; ZU, KEKE",
            details: "2014, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US9800720B2. Financiadora: Ericsson."
        },
        {
            title: "Methods, encoder and decoder for handling a data stream for transmission between a remote unit and a base unit of a base station system",
            authors: "KLAUTAU, Aldebaro; LU, C.; RAMALHO, L.; BERG, Miguel; BORJESSON, Per Ola; HOST, Stefan",
            details: "2016, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US11283539B2. Financiadora: Ericsson."
        },
        {
            title: "Method, decoder and encoder for handling a bit stream for transmission over a transmission link between a remote unit and a base unit of a base station system",
            authors: "LU, C.; SJOBERG, Mats; BERG, Miguel; HOST, Stefan; TROJER, Elmar; KLAUTAU, Aldebaro; RAMALHO, L.; FONSECA, M.",
            details: "2016, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: US11329668B2. Financiadora: Ericsson."
        },
        {
            title: "Methods, intermediate radio units and radio heads of base station systems for transmission of antenna carriers",
            authors: "TROJER, Elmar; SJOBERG, Mats; BERG, Miguel; LU, Chenguang; ERIKSSON, Per-Erik; KLAUTAU, A.; TAKEDA, M.; RAMALHO, L.",
            details: "2017, Suécia. Patente: Privilégio de Inovação. Número do registro: US11382173B2. Financiadora: Ericsson."
        },
        {
            title: "Allocating network resources to media flows",
            authors: "BATISTA, Pedro; SANTOS, M.; KLAUTAU, A.; OHLEN, P.",
            details: "2020, Estados Unidos. Patente: Privilégio de Inovação. Número do registro: 20230035177. Financiadora: Ericsson."
        },
        {
            title: "Sistema de aquisição de sinais ópticos para monitoramento remoto e contínuo de grandezas elétricas, mecânicas, físicas e ambientais",
            authors: "KLAUTAU, A.; MONEGO, H.; RAMALHO, L.; SOUSA, I.; PEREIRA, H. A.; ANDRADE, F.; LUCENA, F.",
            details: "2020, Brasil. Patente: Privilégio de Inovação. Número do registro: BR102020025218. Financiadora: Empresa Amazonense de Transmissão de Energia."
        }
    ]

    const outrosProjetos = [
        {
            title: "Consultoria em Propriedade Intelectual e Patentes",
            client: "Rodrigues & Alves Advogados",
            period: "09/2024 - 06/2025",
            tag: "IA / 5G / IoT",
            desc: "Análise técnica de padrões e patentes de telecom e codificação de sinais, elaborando pareceres que fundamentam decisões jurídicas sobre propriedade intelectual."
        },
        {
            title: "Mapeamento de Áreas em Regeneração",
            client: "IPAM",
            period: "09/2024 - 02/2025",
            tag: "Georreferenciamento",
            desc: "Geração de bases vetoriais sobre áreas em regeneração no Pará com base no PRODES, usando sensoriamento remoto e IA."
        },
        {
            title: "Sistema de Segurança para Fazendas Solares (AEON)",
            client: "AEON",
            period: "08/2024 - 01/2025",
            tag: "IA / IoT",
            desc: "Desenvolvimento de protótipo para identificação de riscos e prevenção de ataques em fazendas solares com modelagem preditiva."
        },
        {
            title: "Aquaponia Sustentável na Amazônia",
            client: "ALCOA",
            period: "24 meses",
            tag: "IoT / Analytics",
            desc: "Implantação de sistemas aquapônicos coletivos e produção de mudas de açaí integradas à tecnologia limpa."
        },
        {
            title: "Aquaponia Sustentável no Nordeste Paraense",
            client: "ARTEMYN",
            period: "15 meses",
            tag: "Sustentabilidade",
            desc: "Implantação de sistemas aquapônicos para geração de renda e educação."
        },
        {
            title: "Estudos Avançados em Telecomunicações",
            client: "Rodrigues & Alves (ZTE)",
            period: "2024 - 2025",
            tag: "5G / IA",
            desc: "Estudos técnicos (CSI-RS e modulações superiores) para subsidiar decisões estratégicas sobre patentes de 5G e LTE."
        },
        {
            title: "DeepBI – RADS: Deep Learning Médica",
            client: "CNPq / MCTI",
            period: "Em andamento",
            tag: "Saúde / IA",
            desc: "Sistema automatizado para antecipação diagnóstica do câncer de mama em imagens radiológicas usando Redes Neurais Convolucionais."
        },
        {
            title: "INCT IAmazônia",
            client: "CNPq / MCTI",
            period: "Em andamento",
            tag: "Smart Cities",
            desc: "Rede de pesquisa para desenvolvimento de IA ética focada em soluções urbanas, socioambientais e eficiência pública na Amazônia."
        },
        {
            title: "Soluções em Redes Ópticas, Sensores e 6G",
            client: "CNPq / MCTI",
            period: "Em andamento",
            tag: "Telecom",
            desc: "Pesquisa em infraestrutura de comunicações de altíssimo desempenho (5G/6G) e integração IoT para Governo Digital e Smart Grids."
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
                                <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">IoT / IA / 5G</Badge>
                                <h3 className="text-2xl font-bold mb-4 line-clamp-3 leading-tight">Modernização de Sistemas Legados e Expansão das Infovias Digitais</h3>
                                <p className="text-muted-foreground mb-6 flex-1">
                                    Projeto de inovação tecnológica destinado à modernização de sistemas legados críticos da infraestrutura digital do Estado do Pará e à expansão das infovias digitais, incluindo preparação para demandas de alto volume no contexto da COP30 via Nuvem e Edge Computing.
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
                                    Em Andamento
                                </Badge>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <Badge className="w-fit mb-4 bg-accent/20 text-accent-foreground hover:bg-accent/30 border-0">Bioeconomia</Badge>
                                <h3 className="text-2xl font-bold mb-4 line-clamp-3 leading-tight">Bioeconomia e Sustentabilidade no Município de Juruti (PBSJUR)</h3>
                                <p className="text-muted-foreground mb-6 flex-1">
                                    Projeto estruturante de desenvolvimento sustentável voltado à geração de trabalho e renda por meio da produção de bioprodutos amazônicos (óleos, manteigas e biojoias). Integra pesquisa socioambiental e inovação.
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
                        {outrosProjetos.map((item, index) => (
                            <Card key={index} className="bg-background/50 shadow-sm border-border flex flex-col">
                                <CardHeader>
                                    <Badge variant="outline" className="w-fit mb-3">{item.tag}</Badge>
                                    <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <div className="mt-4 text-xs font-semibold text-foreground bg-primary/5 p-2 rounded border border-primary/10">
                                        Cliente: {item.client}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.period}</span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patentes */}
            <section className="py-24 bg-card/10 border-b border-border/50">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Patentes e Inovações" subtitle="Nosso legado de P&D resulta em Privilégios de Inovação registrados mundialmente" />

                    <div className="mt-12 bg-background/50 border border-border p-6 rounded-3xl shadow-sm">
                        <Accordion className="w-full">
                            {patentes.map((patente, i) => (
                                <AccordionItem key={i} value={`patente-${i}`} className="not-last:border-b-border/30">
                                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors pr-4 py-4 leading-snug">
                                        <div className="flex items-start gap-4">
                                            <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span>{patente.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground ml-9 pb-4 space-y-2">
                                        <p><strong className="text-foreground text-xs font-semibold uppercase tracking-wider">Autores:</strong> {patente.authors}</p>
                                        <p><strong className="text-foreground text-xs font-semibold uppercase tracking-wider">Registro:</strong> {patente.details}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
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
