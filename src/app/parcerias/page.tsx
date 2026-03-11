import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Import logos
import LogoCanaa from "@/assets/Logos_Parcerias/canaa_prefeitura_logo.png"
import LogoCapes from "@/assets/Logos_Parcerias/capes_logo-768x711.png"
import LogoChalmers from "@/assets/Logos_Parcerias/chalmers_logo.jpg"
import LogoCnpq from "@/assets/Logos_Parcerias/cnpq_logo.png"
import LogoEricsson from "@/assets/Logos_Parcerias/ericsson_logo.png"
import LogoKth from "@/assets/Logos_Parcerias/kth_logo.png"
import LogoProdepa from "@/assets/Logos_Parcerias/logo prodepa-DqpkvB2J.png"
import LogoUsp from "@/assets/Logos_Parcerias/logo usp-C8mgxpz5.png"
import LogoLut from "@/assets/Logos_Parcerias/lut_logo.png"
import LogoSantanna from "@/assets/Logos_Parcerias/santanna_pisa_logo-768x543.png"
import LogoUnifesspa from "@/assets/Logos_Parcerias/unifesspa_logopng-768x406.png"
import LogoUfpa from "@/assets/Logos_Parcerias/ufpa-DHq1xI9J.png"
import LogoAveiro from "@/assets/Logos_Parcerias/university_of_aveiro_logo-768x512.png"
import LogoPorto from "@/assets/Logos_Parcerias/university_of_porto_logo.jpg"

export default function ParceriasPage() {
    const categories = [
        {
            title: "Governo e Fomento",
            category: "Instituições Públicas",
            description: "Instituições governamentais e agências de fomento que garantem a sustentabilidade da pesquisa na região.",
            partners: [
                { name: "Prefeitura de Canaã dos Carajás", logo: LogoCanaa, url: "https://www.canaadoscarajas.pa.gov.br/" },
                { name: "CAPES", logo: LogoCapes, url: "https://www.gov.br/capes/" },
                { name: "CNPq", logo: LogoCnpq, url: "https://www.gov.br/cnpq/" },
                { name: "PRODEPA", logo: LogoProdepa, url: "https://www.prodepa.pa.gov.br/" },
            ]
        },
        {
            title: "Setor Privado",
            category: "Parcerias Corporativas",
            description: "Empresas líderes globais que colaboram ativamente no desenvolvimento de novas tecnologias para a Amazônia.",
            partners: [
                { name: "Ericsson", logo: LogoEricsson, url: "https://www.ericsson.com/" },
                { name: "DataLife", logo: "/assets/images/Empresas/datalife-logo.png", url: "#" },
                { name: "Directto", logo: "/assets/images/Empresas/directto_logo.png", url: "#" },
                { name: "OCALEV", logo: "/assets/images/Empresas/ocalev_logo.png", url: "#" },
            ]
        },
        {
            title: "Laboratórios e Centros",
            category: "Ecossistema de Inovação",
            description: "Laboratórios de ponta integrados ao iSACI, desenvolvendo pesquisas em inteligência artificial, sensores e infraestrutura digital.",
            partners: [
                { 
                    name: "LabCity", 
                    logo: "/assets/images/Laboratórios/LABCITY-logo preta.png", 
                    logoDark: "/assets/images/Laboratórios/LABCITY-SQUARE-DARK.png",
                    url: "#" 
                },
                { 
                    name: "CCAD", 
                    logo: "/assets/images/Laboratórios/Logo em português - colorida.png", 
                    logoDark: "/assets/images/Laboratórios/logo ccad branca.png",
                    url: "#" 
                },
                { name: "GPSA", logo: "/assets/images/Laboratórios/gpsa_logo.png", url: "#" },
                { name: "LabNano", logo: "/assets/images/Laboratórios/labnano_logo.png", url: "#" },
                { name: "LACIS", logo: "/assets/images/Laboratórios/lacis_logo.png", url: "#" },
                { name: "LASSE", logo: "/assets/images/Laboratórios/lasse_logo-843x1024.png", url: "#" },
                { name: "LEA", logo: "/assets/images/Laboratórios/lea_logo.png", url: "#" },
                { name: "LIARIS", logo: "/assets/images/Laboratórios/liaris_logo.png", url: "#" },
                { name: "LPO", logo: "/assets/images/Laboratórios/logo_lpo.png", url: "#" },
            ]
        },
        {
            title: "Academia e Pesquisa",
            category: "Ecossistema Científico",
            description: "Universidades e centros de excelência no Brasil e no mundo integrados à nossa rede de cooperação.",
            partners: [
                { name: "UFPA", logo: LogoUfpa, url: "https://portal.ufpa.br/" },
                { name: "USP", logo: LogoUsp, url: "https://www.usp.br/" },
                { name: "Unifesspa", logo: LogoUnifesspa, url: "https://www.unifesspa.edu.br/" },
                { name: "Chalmers University of Technology", logo: LogoChalmers, url: "https://www.chalmers.se/" },
                { name: "KTH Royal Institute of Technology", logo: LogoKth, url: "https://www.kth.se/" },
                { name: "LUT University", logo: LogoLut, url: "https://www.lut.fi/" },
                { name: "Scuola Superiore Sant'Anna", logo: LogoSantanna, url: "https://www.santannapisa.it/" },
                { name: "University of Aveiro", logo: LogoAveiro, url: "https://www.ua.pt/" },
                { name: "University of Porto", logo: LogoPorto, url: "https://www.up.pt/" },
            ]
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Nossos Parceiros Estratégicos"
                subtitle="Unindo forças com as principais instituições de tecnologia, governo e academia para transformar o futuro da Amazônia."
                highlight="Parcerias"
            />

            {/* Content Sections */}
            {categories.map((cat, idx) => (
                <section 
                    key={idx} 
                    className={`py-28 relative overflow-hidden ${idx % 2 === 0 ? 'bg-background' : 'bg-slate-50/40 dark:bg-slate-950/20'}`}
                >
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    
                    {/* Background Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                        <SectionHeader
                            eyebrow={cat.category}
                            title={cat.title}
                            subtitle={cat.description}
                        />

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">
                            {cat.partners.map((partner, i) => (
                                <Link 
                                    href={partner.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    key={i}
                                    className="group block"
                                >
                                    <div className="relative h-full">
                                        {/* Outer Glow (Hover) */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-transparent rounded-[1.8rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        
                                        <Card className="relative h-full bg-card/40 backdrop-blur-2xl border-border/50 group-hover:border-primary/40 transition-all duration-500 rounded-[1.7rem] overflow-hidden flex flex-col shadow-sm group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
                                            <CardContent className="p-0 flex flex-col h-full">
                                                {/* Visual Accent Line */}
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                <div className="p-6 pb-6 flex flex-col items-center flex-1">
                                                    {/* Expanded Logo Container with Shine Effect */}
                                                    <div className="relative w-full aspect-[4/3] mb-6 bg-white/70 dark:bg-white/5 rounded-2xl p-8 overflow-hidden border border-border/20 transition-all duration-500 group-hover:bg-white dark:group-hover:bg-white/10 group-hover:border-primary/20">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
                                                        {typeof partner.logo === 'string' && (partner as any).logoDark ? (
                                                            <>
                                                                <Image
                                                                    src={partner.logo}
                                                                    alt={partner.name}
                                                                    fill
                                                                    className="object-contain transition-transform duration-700 group-hover:scale-110 dark:hidden"
                                                                />
                                                                <Image
                                                                    src={(partner as any).logoDark}
                                                                    alt={partner.name}
                                                                    fill
                                                                    className="object-contain transition-transform duration-700 group-hover:scale-110 hidden dark:block"
                                                                />
                                                            </>
                                                        ) : (
                                                            <Image
                                                                src={partner.logo}
                                                                alt={partner.name}
                                                                fill
                                                                className="object-contain transition-transform duration-700 group-hover:scale-110"
                                                            />
                                                        )}
                                                    </div>

                                                    <div className="text-center pt-2">
                                                        <h3 className="text-base font-extrabold text-foreground leading-tight px-1 group-hover:text-primary transition-colors line-clamp-2">
                                                            {partner.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                                
                                                {/* Enhanced Footer */}
                                                <div className="px-6 py-4 border-t border-border/10 flex items-center justify-between bg-primary/[0.01] group-hover:bg-primary/[0.04] transition-colors">
                                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em] group-hover:text-primary transition-colors flex items-center gap-2">
                                                        Acessar Portal
                                                        <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                    </span>
                                                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                                        <ExternalLink className="h-3.5 w-3.5 transform group-hover:rotate-12" />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Final */}
            <section className="py-40 bg-slate-950 dark:bg-card/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-30" />
                <div className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full bg-primary/20 blur-[180px] pointer-events-none" />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader
                        variant="on-dark"
                        centered={true}
                        eyebrow="Rede de Cooperação"
                        title="Vamos construir juntos"
                        subtitle="Sua instituição pode fazer parte do maior ecossistema de inovação da Amazônia."
                        className="mb-12 dark:text-foreground text-white"
                    />

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contato">
                            <Button size="lg" className="h-16 px-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-105">
                                Quero ser um parceiro
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
