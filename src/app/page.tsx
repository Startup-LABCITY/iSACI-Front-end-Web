"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Lightbulb, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MorphingPointCloud } from "@/components/morphing-point-cloud"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCounter } from "@/components/stats-counter"
import { SectionHeader } from "@/components/section-header"

import HeroImage from "@/assets/Instituto/gestores2.jpeg"

export default function Home() {
  const stats = [
    { value: "90+", label: "Colaboradores" },
    { value: "10", label: "Pesquisadores Fundadores" },
    { value: "2023", label: "Ano de Fundação", animate: false },
    { value: "5+", label: "Parcerias Estratégicas" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-background min-h-[65vh] lg:min-h-[65vh] [@media(min-width:3000px)]:h-[30vh] pt-16 sm:pt-20 lg:pt-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 min-h-[70vh]">

            {/* Left Column */}
            <div className=" flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-full max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
                >
                  O motor da inovação na{" "}
                  <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Amazônia
            </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 text-lg sm:text-2xl text-muted-foreground leading-relaxed font-medium"
                >
                  Transformamos conhecimento científico de ponta em progresso socioeconômico, fortalecendo a bioeconomia e a sustentabilidade regional.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
                >
                  <Button
                      size="lg"
                      className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-2xl shadow-primary/30 transition-all hover:scale-105"
                      render={
                        <Link href="/projetos">
                          Conheça Nossos Projetos
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      }
                  />
                  <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-10 text-lg font-bold rounded-full border-primary/20 hover:bg-primary/5 transition-all"
                      render={<Link href="/sobre">Sobre o Instituto</Link>}
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column */}
            <div className="order-first lg:order-last flex items-center justify-center lg:justify-end h-auto lg:h-[560px]">
              <MorphingPointCloud />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Polished */}
      <section className="relative pt-16 z-20 px-4">
        <div className="mx-auto max-w-7xl bg-card/60 backdrop-blur-2xl rounded-[32px] border border-border/50 shadow-2xl p-4 sm:p-8 lg:p-12">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Pitch / Features Section */}
      <section className="relative py-16 sm:py-32 overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Lightbulb,
                title: "Inovação Aplicada",
                desc: "Transformamos ciência em soluções tecnológicas reais para o setor público e privado."
              },
              {
                icon: Users,
                title: "Rede de Impacto",
                desc: "Unindo academia, governo e indústria em um ecossistema de alta capacidade técnica."
              },
              {
                icon: Leaf,
                title: "Bioeconomia",
                desc: "Desenvolvimento de bioprodutos e tecnologias sustentáveis para a Amazônia."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2rem] bg-card/30 border border-border/50 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-16 w-16 mb-8 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-16 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionHeader
                centered={false}
                eyebrow="Quem Somos"
                title="Sustentabilidade com Ciência e Inovação"
                subtitle="O iSACI é uma Organização Social (Decreto nº 4523/2025) dedicada à PD&I estratégica, gerando soluções reais para o futuro da Amazônia."
                className="mb-0"
              />

              <div className="space-y-6 pt-4">
                {[
                  { icon: Lightbulb, title: "Tecnologias Habilitadoras", desc: "IA, IoT, Ciência de Dados e Cibersegurança aplicadas à região." },
                  { icon: Users, title: "Transformação Digital", desc: "Modernização de infraestrutura para cidades inteligentes e governo." },
                  { icon: Leaf, title: "Biodiversidade", desc: "Inovação para bioprodutos e cadeias de valor sustentáveis." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/5] lg:h-[700px] border border-border shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0">
                <Image
                  src={HeroImage}
                  alt="Equipe iSACI"
                  fill
                  placeholder="blur"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950 mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              </div>
              <div className="absolute bottom-10 left-10 right-10 bg-background/95 backdrop-blur-xl p-10 rounded-[2rem] border border-border/50 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-xl font-extrabold text-foreground leading-tight italic">
                  &#34;Unindo academia, setor produtivo e governo para transformar a Amazônia através da excelência científica.&#34;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Destaques"
            title="Projetos de Impacto"
            subtitle="Nosso portfólio reflete o compromisso com resultados tangíveis e progresso sustentável."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {[
              {
                tag: "Inovação Digital",
                title: "Modernização das Infovias Digitais",
                partner: "PRODEPA",
                desc: "Infraestrutura crítica preparada para a COP30 com IA e Edge Computing.",
                year: "2024 - 2026",
                icon: Lightbulb
              },
              {
                tag: "Bioeconomia",
                title: "Sustentabilidade em Juruti (PBSJUR)",
                partner: "ALCOA",
                desc: "Cadeias produtivas sustentáveis integrando IoT e analytics comunitário.",
                year: "2024 - 2027",
                icon: Leaf
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="flex flex-col gap-8 h-full bg-background border-border/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl rounded-[2.5rem] overflow-hidden group">
                  <div className="h-64 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="w-24 h-24 text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                  <CardHeader className="px-10">
                    <div className="text-xs font-bold text-primary mb-4 tracking-[0.2em] uppercase">{project.tag}</div>
                    <CardTitle className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base font-bold text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Parceria: {project.partner}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-10">
                    <p className="text-muted-foreground text-lg leading-relaxed">{project.desc}</p>
                  </CardContent>
                  <CardFooter className="px-10">
                    <div className="text-sm font-bold text-primary px-6 py-2 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700">
                      {project.year}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" size="lg" className="h-14 px-12 rounded-full border-primary/20 hover:bg-primary/5 font-bold text-lg" render={<Link href="/projetos">
              Ver todos os projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 bg-slate-950 dark:bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 mix-blend-overlay opacity-30" />
        <div className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full bg-primary/20 blur-[180px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            centered={true}
            eyebrow="Vamos construir juntos"
            title="Sua visão, nossa excelência científica"
            subtitle="Entre em contato hoje e descubra como o iSACI pode impulsionar seu projeto para o próximo nível."
            className="mb-12 [&_h2]:text-white [&_p]:text-white/80"
          />

          <Button size="lg" className="h-16 px-14 text-xl bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold rounded-full shadow-2xl shadow-primary/40 transition-all hover:scale-105" render={<Link href="/contato">
            Falar com Especialistas
          </Link>} />
        </div>
      </section>
    </div>
  )
}
