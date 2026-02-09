import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.footlygame.com"),
  title: "Footly - Guess the Football Player",
  description:
    "Adivinhe o jogador de futebol do dia! Um desafio diário para quem ama futebol.",
  // ... resto das suas configs de metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Mantemos no HTML por garantia
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
      </head>

      {/* ADICIONE AQUI: suppressHydrationWarning na body resolve o erro do ColorZilla */}
      <body suppressHydrationWarning>
        {children}
        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8439660297385825"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-9HF7TQZN5F" />
    </html>
  );
}
