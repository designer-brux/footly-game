import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.footlygame.com"),
  title: "Footly - Daily Football Player Guessing Game",
  description:
    "Can you guess the football player? Test your knowledge of Premier League, La Liga, Serie A and Brasileirão stars in this daily trivia challenge.",
  keywords: ["football", "soccer", "trivia", "game", "quiz", "premier league"],
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
