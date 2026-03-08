import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Lightbulb, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GlobeDemo } from "@/components/globe-demo"
import { ShaderBackground } from "@/components/shader-background"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCounter } from "@/components/stats-counter"
import { SectionHeader } from "@/components/section-header"
import { HeroLogo } from "@/components/hero-logo"

export default function Home() {
  const stats = [
    { value: "90+", label: "Colaboradores" },
    { value: "10", label: "Pesquisadores Fundadores" },
    { value: "2023", label: "Ano de Fundação" },
    { value: "5+", label: "Parcerias Estratégicas" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background lg:min-h-[calc(100vh-4rem)] flex items-center">
        {/* Subtle, clean interactive background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
          <ShaderBackground />
        </div>

        {/* Absolute Globe for Desktop: Hero Cropped */}
        <div className="absolute inset-y-0 right-0 w-[800px] lg:w-[1000px] hidden lg:flex items-center justify-end pointer-events-auto z-0 overflow-visible translate-x-[20%] lg:translate-x-[25%]">
          <GlobeDemo />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] lg:min-h-0 pt-16 lg:pt-0 pb-16 gap-12 lg:gap-8 z-10 pointer-events-none">

          {/* Left Column: Text and Logo */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-6/12 z-10 pointer-events-auto">
            <HeroLogo />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              O motor da inovação na <span className="text-primary drop-shadow-sm">Amazônia</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 font-medium max-w-xl">
              Desenvolvemos soluções sustentáveis para os desafios da região, transformando conhecimento científico em progresso socioeconômico e fortalecendo a bioeconomia.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700">
              <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full w-full sm:w-auto mx-auto lg:mx-0" render={<Link href="/projetos" />}>
                Conheça Nossos Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base font-semibold rounded-full border-primary/20 hover:bg-primary/5 w-full sm:w-auto mx-auto lg:mx-0" render={<Link href="/sobre" />}>
                Sobre o Instituto
              </Button>
            </div>
          </div>

          {/* Right Column: Globe Animation (Desktop Only) */}
          <div className="w-full flex lg:hidden justify-center items-center pointer-events-auto mt-[-4rem] sm:mt-0 z-0">
            {/* Globe removed from mobile view per user request */}
          </div>
        </div>
      </section>

      {/* Pitch / Quick Overview Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Como Atuamos */}
            <div className="group relative p-8 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <Lightbulb className="w-10 h-10 text-primary mb-6 transform group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight text-foreground">Inovação Aplicada</h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Transformamos conhecimento científico de ponta em soluções tecnológicas e sustentáveis reais para desafios complexos do setor público e privado na Amazônia.
              </p>
            </div>

            {/* Parcerias */}
            <div className="group relative p-8 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <Users className="w-10 h-10 text-primary mb-6 transform group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight text-foreground">Rede de Impacto</h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-6">
                Atuamos em conjunto com governos, universidades e indústrias, unindo a expertise acadêmica à alta capacidade de execução técnica no mercado.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] lg:text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">UNIFESSPA</span>
                <span className="text-[10px] lg:text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">GOVERNO</span>
                <span className="text-[10px] lg:text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">ALCOA</span>
                <span className="text-[10px] lg:text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">CAPES</span>
              </div>
            </div>

            {/* Contato/CTA */}
            <div className="relative p-8 rounded-3xl bg-primary/5 border border-primary/30 hover:bg-primary/10 transition-all duration-500 overflow-hidden flex flex-col justify-center text-center items-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl lg:text-2xl font-bold mb-3 tracking-tight text-foreground z-10">Pronto para inovar?</h3>
              <p className="text-muted-foreground mb-8 max-w-xs z-10 text-sm lg:text-base">
                Descubra como a inteligência e sustentabilidade podem impulsionar e transformar o seu projeto.
              </p>
              <Button size="lg" className="w-full rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all group-hover:-translate-y-1 z-10" render={<Link href="/contato" />}>
                Falar com especialistas
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/50 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                title="Transformando conhecimento em impacto real"
                centered={false}
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                O iSACI é uma instituição de direito privado sem fins lucrativos, credenciada como Organização Social do Estado do Pará (Decreto nº 4523/2025), dedicada à pesquisa, desenvolvimento e inovação aplicada, com foco na geração de soluções tecnológicas para desafios estratégicos da Amazônia.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { icon: Lightbulb, title: "Tecnologias Habilitadoras", desc: "Inteligência Artificial, Internet das Coisas (IoT), Ciência de Dados e Cibersegurança." },
                  { icon: Leaf, title: "Bioeconomia", desc: "Desenvolvimento sustentável e bioprodutos para a economia amazônica e comunidades." },
                  { icon: Users, title: "Transformação Digital", desc: "Soluções de ponta para modernização do setor público e privado, cidades inteligentes e infraestrutura." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] border border-border shadow-soft bg-muted">
              {/* placeholder for image */}
              <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
                <Leaf className="h-32 w-32 text-primary/20" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm p-6 rounded-xl border border-border">
                <p className="font-semibold text-foreground">iSACI: Instituto Sustentabilidade da Amazônia com Ciência e Inovação</p>
                <p className="text-sm text-muted-foreground mt-2">Foco em geração de soluções tecnológicas por meio de PD&I contínua, unindo academia, setor produtivo e governo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Projetos que transformam o futuro"
            subtitle="Nosso trabalho se materializa em projetos que geram impacto real. Conheça as soluções que desenvolvemos para nossos parceiros."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="flex flex-col bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors shadow-none overflow-hidden group">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
                  <Lightbulb className="w-16 h-16 text-primary/30" />
                </div>
              </div>
              <CardHeader>
                <div className="text-xs font-semibold text-primary mb-2 tracking-wider uppercase">Tecnologia & 5G</div>
                <CardTitle className="text-xl leading-tight">Modernização e Expansão das Infovias Digitais</CardTitle>
                <CardDescription>Parceria: PRODEPA</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Projeto de inovação para modernização de sistemas legados críticos da infraestrutura digital do Estado do Pará, preparando redes para demandas da COP30 usando IoT, IA e Edge Computing.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-sm font-medium text-foreground px-3 py-1 bg-muted rounded-full">
                  2024 - 2026
                </div>
              </CardFooter>
            </Card>

            <Card className="flex flex-col bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors shadow-none overflow-hidden group">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
                  <Leaf className="w-16 h-16 text-primary/30" />
                </div>
              </div>
              <CardHeader>
                <div className="text-xs font-semibold text-primary mb-2 tracking-wider uppercase">Bioeconomia</div>
                <CardTitle className="text-xl leading-tight">Sustentabilidade em Juruti (PBSJUR)</CardTitle>
                <CardDescription>Parceria: ALCOA</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Projeto estruturante de desenvolvimento voltado à produção sustentável de bioprodutos amazônicos (óleos e manteigas), integrando IoT, Analytics e transferência de tecnologia comunitária.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-sm font-medium text-foreground px-3 py-1 bg-muted rounded-full">
                  2024 - 2027
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5" render={<Link href="/projetos" />}>
              Ver todos os projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Parcerias com a Comunidade */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Parcerias com a Comunidade"
            subtitle="Nosso compromisso com o desenvolvimento humano e social se materializa na integração do conhecimento com a realidade local."
            centered={true}
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Impacto social", desc: "Projetos que geram emprego, renda e desenvolvimento social nas comunidades amazônicas.", icon: Users },
              { title: "Conhecimento tradicional", desc: "Valorização e integração do conhecimento tradicional com a ciência moderna.", icon: Leaf },
              { title: "Capacitação", desc: "Programas de formação técnica para comunidades locais.", icon: Lightbulb }
            ].map((item, i) => (
              <Card key={i} className="flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors shadow-sm items-center text-center p-6 pb-2">
                <div className="h-16 w-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl leading-tight mb-4">{item.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Partners Section */}
      <section className="py-24 relative overflow-hidden bg-slate-950 dark:bg-background border-t border-primary/20 text-white">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            O futuro é construído em conjunto
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 dark:text-muted-foreground mb-12">
            A força do iSACI reside em suas parcerias. Trabalhamos lado a lado com empresas, governos e a academia para transformar ideias em resultados e enfrentar os desafios da Amazônia.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80 mb-16 text-slate-400 dark:text-muted-foreground font-medium max-w-5xl mx-auto">
            {/* simple text placeholders for logos */}
            <div className="text-lg md:text-xl font-bold tracking-wider">UNIFESSPA</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">GOVERNO DO PARÁ</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">U.PORTO</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">USP</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">CAPES</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">ERICSSON</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">LUT</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">FIEPA</div>
            <div className="text-lg md:text-xl font-bold tracking-wider">EMBRAPA</div>
          </div>

          <div className="bg-slate-900/50 dark:bg-background/50 backdrop-blur-md border border-slate-800 dark:border-border rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Transforme sua ideia em inovação</h3>
              <p className="text-slate-300 dark:text-muted-foreground">Entre em contato para saber como podemos impulsionar seu projeto com nossa excelência científica.</p>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shrink-0" render={<Link href="/contato" />}>
              Fale com um especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
