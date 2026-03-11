"use client"

import { useState } from "react"
import { Share2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShareButton() {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy URL: ", err)
        }
    }

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-primary transition-colors"
            onClick={handleCopy}
            title="Copiar link"
        >
            {copied ? (
                <Check className="h-4 w-4 text-green-500" />
            ) : (
                <Share2 className="h-4 w-4" />
            )}
        </Button>
    )
}
