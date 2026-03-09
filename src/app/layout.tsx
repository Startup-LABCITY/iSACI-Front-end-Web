import type { Metadata } from "next";
import { Montserrat, Merriweather, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "iSACI | Instituto Sustentabilidade da Amazônia com Ciência e Inovação",
  description: "O iSACI é o motor da inovação na Amazônia. Somos um instituto de ciência e tecnologia que desenvolve soluções sustentáveis para os desafios da região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} min-h-screen bg-background font-sans antialiased flex flex-col`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
