"use client"; 


import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

// Ícone oficial do Lattes
const LattesIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 448 512"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M 97.871854,434.73261 C 51.534463,339.78442 23.965602,282.44369 23.965602,281.02029 c 0,-2.32214 2.831558,-1.99974 30.672084,3.45957 48.965204,9.61389 75.126384,12.32631 118.735104,12.34258 57.69707,0.0159 104.6807,-9.1222 141.18473,-27.4842 19.31194,-9.71476 30.92555,-18.32755 40.43708,-29.99337 11.716,-14.37824 15.47977,-24.28004 15.61512,-40.94646 0.11867,-15.85237 -2.01801,-24.21167 -11.19035,-43.60874 -3.62892,-7.66433 -6.8168,-16.46265 -7.12098,-19.54964 -0.47493,-4.96814 -0.0684,-5.68084 3.59445,-6.10361 8.00292,-0.94846 47.50732,37.40224 62.05491,60.24069 25.07592,39.38574 27.11161,81.99337 5.88408,123.1953 -13.03903,25.31314 -27.44972,42.82712 -51.57723,62.73362 -40.09844,33.06211 -86.70754,56.08608 -151.06833,74.63514 C 186.61557,459.91141 130.71496,472 119.20225,472 c -2.44075,0 -7.02006,-8.00296 -21.295953,-37.28315 l -0.03402,0.0151 z M 110.77601,281.61191 C 65.760136,275.77998 27.985273,270.70947 26.81537,270.33687 24.815625,269.6926 17.660677,245.82107 13.624773,226.39004 12.607902,221.4726 11.11559,208.45131 10.30202,197.43174 6.6716589,148.26132 17.370799,114.26648 46.041165,83.697237 94.583571,31.98518 198.51713,25.694031 315.77765,67.369458 c 20.58274,7.324215 28.75504,12.410983 24.975,15.580668 -2.79708,2.339846 -21.75315,2.305883 -54.50916,-0.102387 -51.20464,-3.763759 -90.18335,3.357226 -110.27491,20.176211 -30.58742,25.60158 -25.92345,81.72365 13.53071,162.68196 4.27316,8.76586 8.57881,17.34466 9.56318,19.09094 2.28966,4.01773 0.62803,7.74899 -3.3572,7.56196 -1.69755,-0.0813 -39.91486,-4.91203 -84.92926,-10.74592 z m 151.01614,-44.04726 c -35.92814,-6.45997 -68.22691,-28.7388 -78.65437,-54.22127 -5.00209,-12.24165 -4.76437,-28.2131 0.57585,-37.77483 4.83279,-8.64723 17.3107,-18.64993 28.48481,-22.83843 18.59924,-6.96791 51.17019,-4.18853 74.90688,6.40975 22.53229,10.05487 42.50672,27.73816 49.93183,44.18457 9.52925,21.10841 1.59321,44.65955 -18.82072,55.90059 -13.5307,7.44285 -39.82676,11.32572 -56.44249,8.34109 h 0.0181 z" />
    </svg>
);

interface TeamMember {
    name: string;
    role: string;
    email: string;
    description: string;
    image: string;
    group: string;
    lattes: string;
}

const teamMembers: TeamMember[] = [
    // Diretoria Executiva
    {
        name: "Cláudio Alex Jorge da Rocha",
        role: "Presidente",
        email: "contato@isaci.org.br",
        description: "Doutor em EE pela UFPA. Ex-Reitor do IFPA (2015-2023). Presidente do CONIF. Diretor no MEC (2024-2025).",
        image: "/assets/gestores/diretoria/Claudio-Alex-Jorge-da-Rocha.png",
        group: "Diretoria Executiva",
        lattes: "http://lattes.cnpq.br/5422287933944134"
    },
    {
        name: "Rosinei de Sousa Oliveira",
        role: "Diretor de C,T&I",
        email: "contato@isaci.org.br",
        description: "Doutor em EE pela UFPA. Ex-Presidente da FIAM. Coord. Mestrado Prof. em Propriedade Intelectual. Professor UFOPA.",
        image: "/assets/gestores/diretoria/Rosinei-de-Sousa-Oliveira.png",
        group: "Diretoria Executiva",
        lattes: "http://lattes.cnpq.br/3853897074036715"
    },
    {
        name: "André Moacir Lage Miranda",
        role: "Diretor de Relações Institucionais",
        email: "contato@isaci.org.br",
        description: "Doutor em EE pela UFPA (2014). Chefe de TI da SEJUDH (2008-2009). Professor do IFPA desde 2008.",
        image: "/assets/gestores/diretoria/andre_moacir_lage_miranda_upscaled.png",
        group: "Diretoria Executiva",
        lattes: "http://lattes.cnpq.br/1220047876408737"
    },
    // Conselho de Instituidores
    {
        name: "Aldebaro Barreto da Rocha Klautau Júnior",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em Eng. Elétrica pela UCSD (2003). Membro do IEEE (1992). Prof. Titular da UFPA, representante na O-RAN Alliance e ITU (ONU).",
        image: "/assets/gestores/instituidores/Aldebaro-Barreto-da-Rocha-Klautau-Júnior.png",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/1596629769697284"
    },
    {
        name: "Armando Lírio de Souza",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em Desenvolvimento Rural pela UFRGS. Diretor do ICSA/UFPA. Professor dos PPGs em Economia (PPGE e PPGEA/UFPA).",
        image: "/assets/gestores/instituidores/armando_lirio_de_souza.jpeg",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/8782066216945002"
    },
    {
        name: "Carlos Renato Lisboa Francês",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em Ciência da Computação (USP). Ex-Reitor Unifesspa. Prof. Titular UFPA e Diretor-Técnico da Fundação Guamá.",
        image: "/assets/gestores/instituidores/Carlos Renato.jpeg",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/7458287841862567"
    },
    {
        name: "Edvar da Luz Oliveira",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em EE pela UFPA. Presidente CPA UFRA. Assessor PRODEPA, parte do projeto NavegaPará. Professor da UFRA.",
        image: "/assets/gestores/instituidores/Edvar-da-Luz-Oliveira.jpg",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/1840754571733900"
    },
    {
        name: "Gilvan Soares Borges",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em EE pela UFPA. Professor Efetivo do IFPA (2017) e Presidente de Comissão Permanente.",
        image: "/assets/gestores/instituidores/gilvan-transformed.png",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/7696860178450119"
    },
    {
        name: "Hugo Pereira Kuribayashi",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em EE pela UFPA. Ex-Pró-Reitor de Adm. da Unifesspa. Professor, líder do ManivaLab (Transformação Digital).",
        image: "/assets/gestores/instituidores/Hugo-Kuribayashi.png",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/6572451959243064"
    },
    {
        name: "João Crisóstomo Weyl Albuquerque Costa",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em EE (UNICAMP). Estruturou o PCT Guamá e a Fapespa. Prof. Titular UFPA e Diretor Presidente da Fundação Guamá.",
        image: "/assets/gestores/instituidores/João Weyl.png",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/962205186767243"
    },
    {
        name: "Jorge Antônio Moraes de Souza",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em EE pela UFPA. Prof. Adjunto no Instituto Ciberespacial da UFRA. Ex-Diretor de Mercado da PRODEPA.",
        image: "/assets/gestores/instituidores/Jorge-Antônio-Moraes-de-Souza.png",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/3618714528078710"
    },
    {
        name: "Marcelino Silva da Silva",
        role: "Instituidor",
        email: "isaci@ufpa.br",
        description: "Doutor em EE pela UFPA. Coordenador do Centro Tec. de Computação Científica Aplicada. Prof. Adjunto UFOPA.",
        image: "/assets/gestores/instituidores/Marcelino-Silva-da-Silva.png",
        group: "Conselho de Instituidores",
        lattes: "http://lattes.cnpq.br/7080513172499497"
    }
];

export function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(nextSlide, 7000);

        return () => clearInterval(timer);
    }, [isHovered]);

    const member = teamMembers[currentIndex];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden aspect-[4/5] lg:h-[700px] border border-border shadow-2xl group w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-[10000ms] ease-linear group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Persistent Grandients for legibility */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-50 pointer-events-none" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5 pointer-events-none z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-background/80 dark:bg-card/80 backdrop-blur-2xl p-2.5 sm:p-3.5 rounded-2xl border border-border/30 shadow-2xl pointer-events-auto w-full"
                    >
                        {/* Ultra-compact Header */}
                        <div className="flex flex-col gap-0">
                            <span className="text-primary text-[7px] font-black uppercase tracking-wider mb-0.5">
                                {member.group}
                            </span>
                            <div className="flex items-baseline justify-between gap-2">
                                <h3 className="text-sm sm:text-base font-black text-foreground leading-tight">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-bold text-[9px] sm:text-[10px] uppercase whitespace-nowrap">
                                    {member.role}
                                </p>
                            </div>
                        </div>

                        {/* Minimal Description: 1 line (expands on hover) */}
                        <p className="mt-1.5 text-muted-foreground text-xs sm:text-sm leading-relaxed italic border-l-2 border-primary/20 pl-2 line-clamp-1 group-hover:line-clamp-3 transition-all duration-500">
                            "{member.description}"
                        </p>

                        {/* Minimal Row Links */}
                        <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-border/10 pt-2">
                            <div className="flex items-center gap-2">
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-1 hover:text-primary transition-colors text-[9px] font-bold"
                                >
                                    <Mail className="h-2.5 w-2.5" />
                                    {member.email}
                                </a>
                                {member.lattes && (
                                    <a 
                                        href={member.lattes} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-1 text-[#88b04b] hover:underline text-[9px] font-bold"
                                    >
                                        <LattesIcon className="h-2.5 w-2.5" />
                                        Lattes
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-20">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        prevSlide();
                    }}
                    className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-primary/40 transition-colors hidden sm:flex"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        nextSlide();
                    }}
                    className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-primary/40 transition-colors hidden sm:flex"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </motion.button>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute top-6 right-6 flex gap-1.5 z-20">
                {teamMembers.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                            ? "bg-primary w-8"
                            : "bg-white/40 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </motion.div>
    );
}

