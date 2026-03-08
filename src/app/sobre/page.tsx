import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Linkedin, Mail, MapPin, Phone, ExternalLink, Target, Globe, BookOpen, Users, Rocket, Lightbulb, ShieldCheck, Cpu, HeartHandshake, Leaf, Zap, Heart, Shield } from "lucide-react"

// Ícone oficial do Lattes (CNPq) - Estilizado 'L' acadêmico
const LattesIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 448 512"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M 97.871854,434.73261 C 51.534463,339.78442 23.965602,282.44369 23.965602,281.02029 c 0,-2.32214 2.831558,-1.99974 30.672084,3.45957 48.965204,9.61389 75.126384,12.32631 118.735104,12.34258 57.69707,0.0159 104.6807,-9.1222 141.18473,-27.4842 19.31194,-9.71476 30.92555,-18.32755 40.43708,-29.99337 11.716,-14.37824 15.47977,-24.28004 15.61512,-40.94646 0.11867,-15.85237 -2.01801,-24.21167 -11.19035,-43.60874 -3.62892,-7.66433 -6.8168,-16.46265 -7.12098,-19.54964 -0.47493,-4.96814 -0.0684,-5.68084 3.59445,-6.10361 8.00292,-0.94846 47.50732,37.40224 62.05491,60.24069 25.07592,39.38574 27.11161,81.99337 5.88408,123.1953 -13.03903,25.31314 -27.44972,42.82712 -51.57723,62.73362 -40.09844,33.06211 -86.70754,56.08608 -151.06833,74.63514 C 186.61557,459.91141 130.71496,472 119.20225,472 c -2.44075,0 -7.02006,-8.00296 -21.295953,-37.28315 l -0.03402,0.0151 z M 110.77601,281.61191 C 65.760136,275.77998 27.985273,270.70947 26.81537,270.33687 24.815625,269.6926 17.660677,245.82107 13.624773,226.39004 12.607902,221.4726 11.11559,208.45131 10.30202,197.43174 6.6716589,148.26132 17.370799,114.26648 46.041165,83.697237 94.583571,31.98518 198.51713,25.694031 315.77765,67.369458 c 20.58274,7.324215 28.75504,12.410983 24.975,15.580668 -2.79708,2.339846 -21.75315,2.305883 -54.50916,-0.102387 -51.20464,-3.763759 -90.18335,3.357226 -110.27491,20.176211 -30.58742,25.60158 -25.92345,81.72365 13.53071,162.68196 4.27316,8.76586 8.57881,17.34466 9.56318,19.09094 2.28966,4.01773 0.62803,7.74899 -3.3572,7.56196 -1.69755,-0.0813 -39.91486,-4.91203 -84.92926,-10.74592 z m 151.01614,-44.04726 c -35.92814,-6.45997 -68.22691,-28.7388 -78.65437,-54.22127 -5.00209,-12.24165 -4.76437,-28.2131 0.57585,-37.77483 4.83279,-8.64723 17.3107,-18.64993 28.48481,-22.83843 18.59924,-6.96791 51.17019,-4.18853 74.90688,6.40975 22.53229,10.05487 42.50672,27.73816 49.93183,44.18457 9.52925,21.10841 1.59321,44.65955 -18.82072,55.90059 -13.5307,7.44285 -39.82676,11.32572 -56.44249,8.34109 h 0.0181 z" />
    </svg>
)
import Image from "next/image"

export default function SobrePage() {
    const valores = [
        { title: "Colaboração", desc: "Colaborar com parceiros para criar soluções que impactem positivamente a região e o mundo.", icon: HeartHandshake },
        { title: "Conectividade", desc: "Conectar partes da sociedade e criar redes de inovação que atravessam fronteiras.", icon: Globe },
        { title: "Sustentabilidade", desc: "Soluções tecnológicas que promovam a preservação ambiental e impulsionem o desenvolvimento.", icon: Leaf },
        { title: "Inovação", desc: "Promover soluções inovadoras e sustentáveis que protejam nosso patrimônio: a Amazônia.", icon: Zap },
        { title: "Compromisso Amazônico", desc: "Pesquisas avançadas e empreendedorismo local focado no desenvolvimento da Amazônia.", icon: Heart },
        { title: "Ética e Transparência", desc: "Informar a sociedade sobre resultados por meio de relatórios de transparência e prestação de contas.", icon: Shield },
        { title: "Colaboração Estratégica", desc: "Criar alianças táticas com parceiros de inovação e tecnologia para um futuro próspero.", icon: Target },
    ]

    const objetivosEixos = [
        {
            eixo: "Educação",
            items: [
                "Promover e organizar eventos técnicos, científicos e de educação ambiental.",
                "Ofertar cursos de aperfeiçoamento técnico e de pós-graduação."
            ]
        },
        {
            eixo: "Colaboração",
            items: [
                "Interagir com entidades na busca de demandas e ofertas tecnológicas.",
                "Gerenciar projetos e instituições voltados para a promoção do desenvolvimento sustentável.",
                "Assessorar instituições do setor público no planejamento e formulação de políticas governamentais.",
                "Realizar pesquisas de opinião pública para o atendimento a parceiros."
            ]
        },
        {
            eixo: "Desenvolvimento",
            items: [
                "Elaborar estudos, projetos e planos de desenvolvimento e capacitação pessoal.",
                "Fomentar o empreendedorismo local através do desenvolvimento de empresas e empreendimentos."
            ]
        },
        {
            eixo: "Pesquisa",
            items: [
                "Realizar pesquisa básica ou aplicada de caráter científico e tecnológico.",
                "Buscar desenvolver e criar novos produtos, serviços ou processos inovadores."
            ]
        }
    ]

    const diretoria = [
        {
            name: "Cláudio Alex Jorge da Rocha", role: "Presidente",
            lattes: "http://lattes.cnpq.br/5422287933944134", linkedin: "https://www.linkedin.com/in/cl%C3%A1udio-alex-rocha-0b1872349/",
            image: "/assets/gestores/diretoria/Claudio-Alex-Jorge-da-Rocha.png",
            bio: "Doutor em EE pela UFPA. Ex-Reitor do IFPA (2015-2023). Presidente do CONIF. Diretor no MEC (2024-2025)."
        },
        {
            name: "Rosinei de Sousa Oliveira", role: "Diretor de C,T&I",
            lattes: "http://lattes.cnpq.br/3853897074036715", linkedin: "https://www.linkedin.com/in/nei-oliveira-phd-5214a2159/",
            image: "/assets/gestores/diretoria/Rosinei-de-Sousa-Oliveira.png",
            bio: "Doutor em EE pela UFPA. Ex-Presidente da FIAM. Coord. Mestrado Prof. em Propriedade Intelectual. Professor UFOPA."
        },
        {
            name: "André Moacir Lage Miranda", role: "Diretor de Relações Institucionais",
            lattes: "http://lattes.cnpq.br/1220047876408737", linkedin: "https://www.linkedin.com/in/andr%C3%A9-moacir-95a86425/",
            image: "/assets/gestores/diretoria/andre_moacir_lage_miranda_upscaled.png",
            bio: "Doutor em EE pela UFPA (2014). Chefe de TI da SEJUDH (2008-2009). Professor do IFPA desde 2008."
        },
    ]

    const instituidores = [
        {
            name: "Aldebaro Barreto da Rocha Klautau Júnior", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/1596629769697284", linkedin: "https://www.linkedin.com/in/aldebaro-klautau/",
            image: "/assets/gestores/instituidores/Aldebaro-Barreto-da-Rocha-Klautau-Júnior.png",
            bio: "Doutor em Eng. Elétrica pela UCSD (2003). Membro do IEEE (1992). Prof. Titular da UFPA, representante na O-RAN Alliance e ITU (ONU)."
        },
        {
            name: "Armando Lírio de Souza", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/8782066216945002", linkedin: "",
            image: "/assets/gestores/instituidores/armando_lirio_de_souza.jpeg",
            bio: "Doutor em Desenvolvimento Rural pela UFRGS. Diretor do ICSA/UFPA. Professor dos PPGs em Economia (PPGE e PPGEA/UFPA)."
        },
        {
            name: "Carlos Renato Lisboa Francês", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/7458287841862567", linkedin: "https://www.linkedin.com/in/renato-franc%C3%AAs-17054959/",
            image: "/assets/gestores/instituidores/Carlos Renato.jpeg",
            bio: "Doutor em Ciência da Computação (USP). Ex-Reitor Unifesspa. Prof. Titular UFPA e Diretor-Técnico da Fundação Guamá."
        },
        {
            name: "Edvar da Luz Oliveira", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/1840754571733900", linkedin: "https://www.linkedin.com/in/edvaroliveira/",
            image: "/assets/gestores/instituidores/Edvar-da-Luz-Oliveira.png",
            bio: "Doutor em EE pela UFPA. Presidente CPA UFRA. Assessor PRODEPA, parte do projeto NavegaPará. Professor da UFRA."
        },
        {
            name: "Gilvan Soares Borges", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/7696860178450119", linkedin: "https://www.linkedin.com/in/gilvan-borges-68239a20a/",
            image: "/assets/gestores/instituidores/gilvan-transformed.png",
            bio: "Doutor em EE pela UFPA. Professor Efetivo do IFPA (2017) e Presidente de Comissão Permanente."
        },
        {
            name: "Hugo Pereira Kuribayashi", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/6572451959243064", linkedin: "https://www.linkedin.com/in/hugokuribayashi/",
            image: "/assets/gestores/instituidores/Hugo-Kuribayashi.png",
            bio: "Doutor em EE pela UFPA. Ex-Pró-Reitor de Adm. da Unifesspa. Professor, líder do ManivaLab (Transformação Digital)."
        },
        {
            name: "João Crisóstomo Weyl Albuquerque Costa", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/962205186767243", linkedin: "https://www.linkedin.com/in/joao-weyl-9a7a974b/",
            image: "/assets/gestores/instituidores/João Weyl.png",
            bio: "Doutor em EE (UNICAMP). Estruturou o PCT Guamá e a Fapespa. Prof. Titular UFPA e Diretor Presidente da Fundação Guamá."
        },
        {
            name: "Jorge Antônio Moraes de Souza", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/3618714528078710", linkedin: "",
            image: "/assets/gestores/instituidores/Jorge-Antônio-Moraes-de-Souza.png",
            bio: "Doutor em EE pela UFPA. Prof. Adjunto no Instituto Ciberespacial da UFRA. Ex-Diretor de Mercado da PRODEPA."
        },
        {
            name: "Marcelino Silva da Silva", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/7080513172499497", linkedin: "https://www.linkedin.com/in/marcelino-silva-029b709a/",
            image: "/assets/gestores/instituidores/Marcelino-Silva-da-Silva.png",
            bio: "Doutor em EE pela UFPA. Coordenador do Centro Tec. de Computação Científica Aplicada. Prof. Adjunto UFOPA."
        },
    ]

    const associados = [
        {
            name: "Liane Márcia Batista Barbosa", role: "Dir. Administrativa e Secretária",
            lattes: "", linkedin: "https://www.linkedin.com/in/liane-barbosa-07122824/",
            image: "/assets/gestores/associados/Liane-Márcia-Batista-Barbosa.png",
            bio: "Bacharel em Adm. pela UFPA. Ex-Secretária Executiva do LEA/UFPA (2010-2024). Secretária Executiva do iSACI desde 2024."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="O motor da inovação na Amazônia"
                subtitle="Conectando ciência, tecnologia e negócios para um futuro sustentável"
                highlight="Sobre o Instituto"
            />

            {/* Nossa História */}
            <section className="py-20 bg-background overflow-hidden">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Nossa História" centered={false} className="mb-12" />
                    <div className="space-y-8 text-muted-foreground text-lg leading-relaxed text-justify">
                        <p>
                            O Instituto Sustentabilidade da Amazônia com Ciência e Inovação - iSACI - foi fundado em 20 de abril de 2023 por um grupo de professores de
                            cinco Instituições Federais de Ensino Superior do Estado do Pará: Universidade Federal do Pará - UFPA, Universidade Federal Rural do Pará -
                            UFRA, Universidade Federal do Sul e Sudeste do Pará - Unifesspa, Universidade Federal do Oeste do Pará - Ufopa e Instituto Federal do Pará -
                            IFPA.
                        </p>
                        <p>
                            O iSACI institui modelos de ação para promover, coordenar e assessorar projetos e serviços nos âmbitos educacionais, de desenvolvimento de
                            tecnologias, da preservação ambiental, bem como projetos que visem melhoria na eficiência da gestão pública e privada, inclusive por meio da
                            implementação de ações que assegurem a consecução das atividades pertinentes ao desenvolvimento sustentável da sociedade como um todo.
                        </p>
                        <p>
                            O propósito do iSACI é colaborar com o desenvolvimento científico e tecnológico regional para a sustentabilidade da Amazônia, cumprindo a
                            função de instituição científica e tecnológica - ICT - para promover o desenvolvimento da inovação, extensão tecnológica e da pesquisa.
                        </p>
                    </div>
                </div>
            </section>
            {/* Equipe e Governança */}
            <section className="py-24 bg-card/30 border-t border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Governança e Equipe"
                        subtitle="Pesquisadores e profissionais dedicados à excelência científica e gestão estratégica do iSACI."
                    />

                    {/* Sub-bloco: Diretoria Executiva */}
                    <div className="mt-20">
                        <div className="flex items-center gap-4 mb-12">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Diretoria Executiva</h3>
                            <div className="h-px flex-1 bg-primary/20" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {diretoria.map((membro, i) => (
                                <Card key={i} className="group flex flex-col items-center p-8 border-t-4 border-t-primary border-x-border/10 border-b-border/10 bg-background/50 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="relative w-32 h-32 mb-6">
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
                                        <div className="absolute inset-1 rounded-full overflow-hidden bg-muted">
                                            <Image
                                                src={membro.image}
                                                alt={membro.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center flex-1 flex flex-col">
                                        <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{membro.name}</h4>
                                        <p className="text-xs text-muted-foreground font-medium mb-4">{membro.role}</p>
                                        <p className="text-sm text-center text-muted-foreground/80 leading-relaxed flex-1 italic">
                                            "{membro.bio}"
                                        </p>
                                        <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-primary/10">
                                            {membro.linkedin && (
                                                <a href={membro.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors">
                                                    <Linkedin className="h-5 w-5" />
                                                </a>
                                            )}
                                            {membro.lattes && (
                                                <a href={membro.lattes} target="_blank" rel="noreferrer" className="text-teal-600/70 hover:text-teal-600 transition-colors" title="Currículo Lattes">
                                                    <LattesIcon className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sub-bloco: Instituidores */}
                    <div className="mt-28">
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Conselho de Instituidores</h3>
                            <div className="h-px flex-1 bg-primary/20" />
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {instituidores.map((membro, i) => (
                                <Card key={i} className="group flex flex-col items-center p-6 border-t-[3px] border-t-primary/60 border-x-border/5 border-b-border/5 bg-background shadow-xs hover:shadow-md transition-all duration-300">
                                    <div className="relative w-24 h-24 mb-4">
                                        <div className="absolute inset-0 rounded-full border border-primary/10 group-hover:border-primary/30 transition-colors" />
                                        <div className="absolute inset-[3px] rounded-full overflow-hidden bg-muted">
                                            <Image
                                                src={membro.image}
                                                alt={membro.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center flex-1 flex flex-col">
                                        <h4 className="text-[15px] font-bold text-foreground leading-tight mb-2 min-h-[2.5rem] flex items-center justify-center">{membro.name}</h4>
                                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-4">Instituidor</p>
                                        <p className="text-xs text-muted-foreground/70 mb-6 italic line-clamp-3">
                                            {membro.bio}
                                        </p>
                                        <div className="flex justify-center gap-3 mt-auto pt-3 border-t border-border/30">
                                            {membro.linkedin && (
                                                <a href={membro.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground/40 hover:text-primary transition-colors">
                                                    <Linkedin className="h-4 w-4" />
                                                </a>
                                            )}
                                            {membro.lattes && (
                                                <a href={membro.lattes} target="_blank" rel="noreferrer" className="text-teal-600/50 hover:text-teal-600 transition-colors" title="Currículo Lattes">
                                                    <LattesIcon className="h-4 w-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Sub-bloco: Associados */}
                    <div className="mt-24">
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Apoio Institucional</h3>
                            <div className="h-px flex-1 bg-muted/30" />
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {associados.map((assoc, i) => (
                                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-border/30 bg-background/20 hover:bg-background/40 transition-all group">
                                    <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-colors">
                                        <Image
                                            src={assoc.image}
                                            alt={assoc.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">{assoc.name}</h4>
                                            <a href={assoc.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground/40 hover:text-primary transition-colors">
                                                <Linkedin className="h-3 w-3" />
                                            </a>
                                        </div>
                                        <p className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider">{assoc.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                                    O instituto tem como missão o desenvolvimento de programas, projetos e ações de caráter técnico-científico inovadores, gerando progresso socioeconômico para a Amazônia.
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
                                    Ser reconhecido como referência em desenvolvimento tecnológico e inovação na Amazônia, por meio de parcerias estratégicas e de excelência em pesquisa.
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

            {/* Objetivos */}
            <section className="py-24 bg-card/10 border-t border-border/50">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <SectionHeader title="Nossos Objetivos" centered={false} className="mb-6" />
                        <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                            O iSACI tem como principal objetivo conectar o conhecimento acadêmico, a inovação tecnológica e as
                            necessidades do setor produtivo, buscando gerar soluções que beneficiem a Amazônia e o mundo. Acreditamos na
                            capacidade transformadora da inovação para enfrentar desafios regionais e promover um futuro mais sustentável.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <Accordion className="w-full space-y-4">
                            {objetivosEixos.slice(0, 2).map((item, index) => (
                                <AccordionItem key={index} value={`item - ${index} `} className="border bg-background/50 rounded-xl px-4">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">{item.eixo}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                                        <ul className="list-disc pl-5 space-y-2">
                                            {item.items.map((line, i) => <li key={i}>{line}</li>)}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <Accordion className="w-full space-y-4">
                            {objetivosEixos.slice(2, 4).map((item, index) => (
                                <AccordionItem key={index + 2} value={`item - ${index + 2} `} className="border bg-background/50 rounded-xl px-4">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">{item.eixo}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4 space-y-2">
                                        <ul className="list-disc pl-5 space-y-2">
                                            {item.items.map((line, i) => <li key={i}>{line}</li>)}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    )
}
