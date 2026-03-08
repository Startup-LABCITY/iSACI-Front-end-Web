import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, Linkedin, Users, Target, Shield, Zap, Globe, Heart, Leaf, HeartHandshake } from "lucide-react"

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

    const diretores = [
        {
            name: "Aldebaro Barreto da Rocha Klautau Júnior", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/1596629769697284", linkedin: "https://www.linkedin.com/in/aldebaro-klautau/",
            bio: "Doutor em Eng. Elétrica pela UCSD (2003). Membro do IEEE (1992). Prof. Titular da UFPA, representante na O-RAN Alliance e ITU (ONU)."
        },
        {
            name: "André Moacir Lage Miranda", role: "Instituidor e Diretor de Relações Institucionais",
            lattes: "http://lattes.cnpq.br/1220047876408737", linkedin: "https://www.linkedin.com/in/andr%C3%A9-moacir-95a86425/",
            bio: "Doutor em EE pela UFPA (2014). Chefe de TI da SEJUDH (2008-2009). Professor do IFPA desde 2008."
        },
        {
            name: "Armando Lírio de Souza", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/8782066216945002", linkedin: "",
            bio: "Doutor em Desenvolvimento Rural pela UFRGS. Diretor do ICSA/UFPA. Professor dos PPGs em Economia (PPGE e PPGEA/UFPA)."
        },
        {
            name: "Carlos Renato Lisboa Francês", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/7458287841862567", linkedin: "https://www.linkedin.com/in/renato-franc%C3%AAs-17054959/",
            bio: "Doutor em Ciência da Computação (USP). Ex-Reitor Unifesspa. Prof. Titular UFPA e Diretor-Técnico da Fundação Guamá."
        },
        {
            name: "Cláudio Alex Jorge da Rocha", role: "Instituidor e Presidente",
            lattes: "http://lattes.cnpq.br/5422287933944134", linkedin: "https://www.linkedin.com/in/cl%C3%A1udio-alex-rocha-0b1872349/",
            bio: "Doutor em EE pela UFPA. Ex-Reitor do IFPA (2015-2023). Presidente do CONIF. Diretor no MEC (2024-2025)."
        },
        {
            name: "Edvar da Luz Oliveira", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/1840754571733900", linkedin: "https://www.linkedin.com/in/edvaroliveira/",
            bio: "Doutor em EE pela UFPA. Presidente CPA UFRA. Assessor PRODEPA, parte do projeto NavegaPará. Professor da UFRA."
        },
        {
            name: "Gilvan Soares Borges", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/7696860178450119", linkedin: "https://www.linkedin.com/in/gilvan-borges-68239a20a/",
            bio: "Doutor em EE pela UFPA. Professor Efetivo do IFPA (2017) e Presidente de Comissão Permanente."
        },
        {
            name: "Hugo Pereira Kuribayashi", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/6572451959243064", linkedin: "https://www.linkedin.com/in/hugokuribayashi/",
            bio: "Doutor em EE pela UFPA. Ex-Pró-Reitor de Adm. da Unifesspa. Professor, líder do ManivaLab (Transformação Digital)."
        },
        {
            name: "João Crisóstomo Weyl Albuquerque Costa", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/962205186767243", linkedin: "https://www.linkedin.com/in/joao-weyl-9a7a974b/",
            bio: "Doutor em EE (UNICAMP). Estruturou o PCT Guamá e a Fapespa. Prof. Titular UFPA e Diretor Presidente da Fundação Guamá."
        },
        {
            name: "Jorge Antônio Moraes de Souza", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/3618714528078710", linkedin: "",
            bio: "Doutor em EE pela UFPA. Prof. Adjunto no Instituto Ciberespacial da UFRA. Ex-Diretor de Mercado da PRODEPA."
        },
        {
            name: "Marcelino Silva da Silva", role: "Instituidor",
            lattes: "http://lattes.cnpq.br/7080513172499497", linkedin: "https://www.linkedin.com/in/marcelino-silva-029b709a/",
            bio: "Doutor em EE pela UFPA. Coordenador do Centro Tec. de Computação Científica Aplicada. Prof. Adjunto UFOPA."
        },
        {
            name: "Rosinei de Sousa Oliveira", role: "Instituidor e Dir. de C,T&I",
            lattes: "http://lattes.cnpq.br/3853897074036715", linkedin: "https://www.linkedin.com/in/nei-oliveira-phd-5214a2159/",
            bio: "Doutor em EE pela UFPA. Ex-Presidente da FIAM. Coord. Mestrado Prof. em Propriedade Intelectual. Professor UFOPA."
        }
    ]

    const associados = [
        {
            name: "Liane Márcia Batista Barbosa", role: "Dir. Administrativa e Secretária",
            lattes: "", linkedin: "https://www.linkedin.com/in/liane-barbosa-07122824/",
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

            {/* História */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Nossa História" centered={false} />
                    <div className="prose prose-lg dark:prose-invert max-w-4xl text-muted-foreground leading-relaxed">
                        <p>
                            O Instituto Sustentabilidade da Amazônia com Ciência e Inovação - iSACI - foi fundado em 20 de abril de 2023 por um grupo de professores de cinco Instituições Federais de Ensino Superior do Estado do Pará: Universidade Federal do Pará - UFPA, Universidade Federal Rural do Pará - UFRA, Universidade Federal do Sul e Sudeste do Pará - Unifesspa, Universidade Federal do Oeste do Pará - Ufopa e Instituto Federal do Pará - IFPA.
                        </p>
                        <p className="mt-4">
                            O iSACI institui modelos de ação para promover, coordenar e assessorar projetos e serviços nos âmbitos educacionais, de desenvolvimento de tecnologias, da preservação ambiental, bem como projetos que visem melhoria na eficiência da gestão pública e privada, inclusive por meio da implementação de ações que assegurem a consecução das atividades pertinentes ao desenvolvimento sustentável da sociedade como um todo.
                        </p>
                        <p className="mt-4">
                            O propósito do iSACI é colaborar com o desenvolvimento científico e tecnológico regional para a sustentabilidade da Amazônia, cumprindo a função de instituição científica e tecnológica - ICT - para promover o desenvolvimento da inovação, extensão tecnológica e da pesquisa.
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
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <SectionHeader title="Nossos Objetivos" centered={false} className="mb-6" />
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            O iSACI tem como principal objetivo conectar o conhecimento acadêmico, a inovação tecnológica e as
                            necessidades do setor produtivo, buscando gerar soluções que beneficiem a Amazônia e o mundo. Acreditamos na
                            capacidade transformadora da inovação para enfrentar desafios regionais e promover um futuro mais sustentável.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <Accordion className="w-full space-y-4">
                            {objetivosEixos.slice(0, 2).map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border bg-background/50 rounded-xl px-4">
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
                                <AccordionItem key={index + 2} value={`item-${index + 2}`} className="border bg-background/50 rounded-xl px-4">
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

            {/* Equipe / Fundadores */}
            <section className="py-24 bg-card/30 border-t border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Instituidores e Diretoria"
                        subtitle="Pesquisadores com décadas de experiência, garantindo a excelência científica e a visão estratégica necessárias para o desenvolvimento do ISACI."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
                        {diretores.map((diretor, i) => (
                            <Card key={i} className="flex flex-col border-border/50 bg-background/50 shadow-none hover:shadow-md transition-shadow">
                                <CardHeader className="pb-4">
                                    <div className="h-12 w-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg leading-tight">{diretor.name}</CardTitle>
                                    <p className="text-xs text-primary font-bold uppercase tracking-wider">{diretor.role}</p>
                                </CardHeader>
                                <CardContent className="pt-0 flex flex-col flex-1">
                                    <p className="text-sm text-muted-foreground flex-1 mb-4">
                                        {diretor.bio}
                                    </p>
                                    <div className="flex gap-3 text-muted-foreground mt-auto">
                                        {diretor.linkedin && (
                                            <a href={diretor.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                                <Linkedin className="h-4 w-4" />
                                            </a>
                                        )}
                                        {diretor.lattes && (
                                            <a href={diretor.lattes} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Associados */}
            <section className="py-24 bg-background border-t border-border/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Associados" />
                    <div className="max-w-md mx-auto mt-12">
                        {associados.map((assoc, i) => (
                            <Card key={i} className="flex flex-col border-border/50 bg-card/50 shadow-sm text-center">
                                <CardHeader className="items-center pb-4">
                                    <div className="h-16 w-16 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Users className="h-8 w-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-xl leading-tight">{assoc.name}</CardTitle>
                                    <p className="text-xs text-accent font-bold uppercase tracking-wider">{assoc.role}</p>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-muted-foreground mb-6">
                                        {assoc.bio}
                                    </p>
                                    <div className="flex justify-center gap-3 text-muted-foreground">
                                        <a href={assoc.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
