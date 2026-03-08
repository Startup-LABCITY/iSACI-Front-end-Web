"use client"

import { PageHero } from "@/components/page-hero"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react"

export default function ContatoPage() {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock submit behavior
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Transforme sua ideia em inovação"
                subtitle="Entre em contato para saber como podemos impulsionar seu projeto com a excelência científica do iSACI."
                highlight="Fale com um especialista"
            />

            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Informações de Contato */}
                        <div>
                            <SectionHeader title="Informações de Contato" centered={false} className="mb-8" />

                            <div className="space-y-6">
                                <Card className="bg-card border-border/50 shadow-sm border-l-4 border-l-primary">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg mb-1">Nossa Localização</h4>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                Av. Perimetral da Ciência, S/N, KM 1, Parque de Ciência e Tecnologia Guamá.<br />Belém/PA, CEP 66075-750.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border/50 shadow-sm border-l-4 border-l-accent">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                                            <Mail className="h-5 w-5 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg mb-2">E-mails</h4>
                                            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mt-2">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-foreground text-xs uppercase tracking-wider">Administrativo</span>
                                                    <a href="mailto:administrativo@isaci.org.br" className="hover:text-primary transition-colors">
                                                        administrativo@isaci.org.br
                                                    </a>
                                                </div>
                                                <div className="flex flex-col mt-1">
                                                    <span className="font-medium text-foreground text-xs uppercase tracking-wider">Projetos</span>
                                                    <a href="mailto:projetos@isaci.org.br" className="hover:text-primary transition-colors">
                                                        projetos@isaci.org.br
                                                    </a>
                                                </div>
                                                <div className="flex flex-col mt-1">
                                                    <span className="font-medium text-foreground text-xs uppercase tracking-wider">Ouvidoria</span>
                                                    <a href="mailto:transparencia@isaci.org.br" className="hover:text-primary transition-colors">
                                                        transparencia@isaci.org.br
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border/50 shadow-sm border-l-4 border-l-primary">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg mb-1">Telefone</h4>
                                            <a href="tel:+5591991470809" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                                (91) 99147-0809
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border/50 shadow-sm border-l-4 border-l-accent">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                                            <Clock className="h-5 w-5 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg mb-1">Horário de Atendimento</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Segunda a Sexta: 8h às 18h
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Formulário de Contato */}
                        <div className="bg-card/50 border border-border shadow-soft rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full blur-3xl" />
                            <h3 className="text-2xl font-bold mb-8 relative z-10">Envie uma mensagem</h3>

                            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                                            Nome completo *
                                        </label>
                                        <Input id="name" placeholder="Ex: João da Silva" required className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                                            E-mail *
                                        </label>
                                        <Input id="email" type="email" placeholder="Ex: joao@empresa.com" required className="bg-background" />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                            Telefone / WhatsApp
                                        </label>
                                        <Input id="phone" type="tel" placeholder="(00) 00000-0000" className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                            Assunto *
                                        </label>
                                        <Input id="subject" placeholder="Como podemos ajudar?" required className="bg-background" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Mensagem *
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Descreva seu projeto, ideia ou dúvida..."
                                        className="min-h-[150px] resize-y bg-background"
                                        required
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 rounded-xl text-base">
                                    <Send className="mr-2 h-5 w-5" />
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
