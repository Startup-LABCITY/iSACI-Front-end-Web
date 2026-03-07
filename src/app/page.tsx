import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Lightbulb, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ShaderBackground } from "@/components/shader-background"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCounter } from "@/components/stats-counter"
import { SectionHeader } from "@/components/section-header"

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
      <section className="relative overflow-hidden">
        <ShaderBackground />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-36 flex flex-col items-center text-center">
          <div className="mb-10 animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-1000">
            <Image
              src="/logo.png"
              alt="iSACI Logo"
              width={300}
              height={120}
              className="h-20 sm:h-28 w-auto object-contain drop-shadow-xl dark:brightness-200 hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="inline-flex items-center rounded-full border border-primary/30 bg-background/50 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both shadow-sm">
            <Leaf className="mr-2 h-4 w-4" />
            <span>Ciência para o Futuro da Amazônia</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
            O motor da inovação na <span className="text-primary drop-shadow-sm">Amazônia</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both font-medium">
            Desenvolvemos soluções sustentáveis para os desafios da região, transformando conhecimento científico em progresso socioeconômico e fortalecendo a bioeconomia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700 fill-mode-both">
            <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full" render={<Link href="/projetos" />}>
              Conheça Nossos Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base font-semibold rounded-full border-primary/20 hover:bg-primary/5" render={<Link href="/sobre" />}>
              Sobre o Instituto
            </Button>
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
                Fundado por pesquisadores visionários de universidades federais do Pará, o ISACI nasceu com um propósito claro: impulsionar o desenvolvimento da Amazônia a partir de sua maior riqueza — a inovação.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { icon: Leaf, title: "Sustentabilidade", desc: "Soluções que respeitam e valorizam a biodiversidade." },
                  { icon: Lightbulb, title: "Inovação Técnica", desc: "Sistemas inteligentes e eficientes para o setor público e privado." },
                  { icon: Users, title: "Ação Comunitária", desc: "Geração de renda e desenvolvimento para as comunidades locais." }
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
                <p className="text-sm text-muted-foreground mt-2">O iSACI é o motor da inovação na Amazônia. Com uma equipe de ponta, construímos um futuro mais próspero e equitativo.</p>
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
                <div className="absolute inset-0 bg-primary/10 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
                  <Leaf className="w-16 h-16 text-primary/30" />
                </div>
              </div>
              <CardHeader>
                <div className="text-xs font-semibold text-primary mb-2 tracking-wider uppercase">Bioeconomia</div>
                <CardTitle className="text-xl leading-tight">Biofábrica de Óleos e Manteigas: Inovação Sustentável em Juruti</CardTitle>
                <CardDescription>Parceria: Alcoa</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Desenvolvimento de uma biofábrica de alta tecnologia, criando uma nova cadeia de valor para a bioeconomia local e fortalecendo comunidades com geração de renda a partir da biodiversidade.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-sm font-medium text-foreground px-3 py-1 bg-muted rounded-full">
                  Status: Em andamento
                </div>
              </CardFooter>
            </Card>

            <Card className="flex flex-col bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors shadow-none overflow-hidden group">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
                  <Lightbulb className="w-16 h-16 text-primary/30" />
                </div>
              </div>
              <CardHeader>
                <div className="text-xs font-semibold text-primary mb-2 tracking-wider uppercase">Tecnologia</div>
                <CardTitle className="text-xl leading-tight">Projeto Prodepa: Software para Secretarias</CardTitle>
                <CardDescription>Parceria: Governo do Estado</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Desenvolvimento de soluções tecnológicas integradas para modernização e digitalização de processos em secretarias governamentais, aumentando a eficiência e transparência.
                </p>
              </CardContent>
              <CardFooter>
                <div className="text-sm font-medium text-foreground px-3 py-1 bg-muted rounded-full">
                  Status: Em andamento
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

      {/* CTA / Partners Section */}
      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-accent blur-3xl opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            O futuro é construído em conjunto
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 mb-12">
            A força do iSACI reside em suas parcerias. Trabalhamos lado a lado com empresas, governos e a academia para transformar ideias em resultados e enfrentar os desafios da Amazônia.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 mix-blend-plus-lighter grayscale contrast-200 mb-16">
            {/* simple text placeholders for logos */}
            <div className="text-2xl font-bold tracking-widest">UNIFESSPA</div>
            <div className="text-2xl font-bold tracking-widest">GOVERNO DO ESTADO</div>
            <div className="text-2xl font-bold tracking-widest">U.PORTO</div>
            <div className="text-2xl font-bold tracking-widest">CAPES</div>
            <div className="text-2xl font-bold tracking-widest">ERICSSON</div>
            <div className="text-2xl font-bold tracking-widest">LUT</div>
          </div>

          <div className="bg-background/10 backdrop-blur-md border border-primary-foreground/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">Transforme sua ideia em inovação</h3>
              <p className="text-primary-foreground/80">Entre em contato para saber como podemos impulsionar seu projeto com nossa excelência científica.</p>
            </div>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full shrink-0" render={<Link href="/contato" />}>
              Fale com um especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
