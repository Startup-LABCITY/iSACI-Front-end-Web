import { noticias } from "@/lib/noticias"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Link2, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShareButton } from "@/components/share-button"

interface Props {
    params: Promise<{ slug: string }>
}

export default async function NoticiaDetailPage({ params }: Props) {
    const { slug } = await params
    const noticia = noticias.find((n) => n.slug === slug)

    if (!noticia) {
        notFound()
    }

    return (
        <article className="min-h-screen pb-24 bg-background">
            {/* Simple Navigation Header */}
            <div className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/noticias" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <span className="text-lg">←</span> Voltar para Notícias
                    </Link>
                    <div className="flex items-center gap-4">
                        <ShareButton />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pt-12">
                {/* Category Badge */}
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        {noticia.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-foreground">
                    {noticia.title}
                </h1>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-6 mb-12 text-sm text-muted-foreground border-y border-border/50 py-6">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            {noticia.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">{noticia.author}</p>
                            <p className="text-xs uppercase tracking-tighter">Escritor iSACI</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{noticia.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{noticia.readTime}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-10">
                    {noticia.content.map((block, index) => {
                        if (block.type === "paragraph") {
                            return (
                                <p key={index} className="text-lg md:text-xl leading-relaxed text-muted-foreground whitespace-pre-line">
                                    {block.text}
                                </p>
                            )
                        }
                        if (block.type === "image") {
                            return (
                                <figure key={index} className="group space-y-4">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted">
                                        <Image
                                            src={block.src}
                                            alt={block.caption}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <figcaption className="text-sm text-muted-foreground text-center italic px-4 border-l-2 border-primary/30 py-1">
                                        {block.caption}
                                    </figcaption>
                                </figure>
                            )
                        }
                        if (block.type === "heading") {
                            return (
                                <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                                    {block.text}
                                </h2>
                            )
                        }
                        return null
                    })}
                </div>

                {/* Credits */}
                {noticia.credits && (
                    <div className="mt-12 text-right">
                        <p className="text-sm font-medium italic text-muted-foreground">
                            {noticia.credits}
                        </p>
                    </div>
                )}
            </div>
        </article>
    )
}
