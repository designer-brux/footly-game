"use client";

import { useState } from "react";
import Link from "next/link";
import InstructionsModal from "@/components/InstructionsModal";
import AdBanner from "@/components/AdBanner";
import GameBoard from "@/components/GameBoard";
import DailyHeader from "@/components/DailyHeader";
import AboutModal from "@/components/AboutModal";

export default function Home() {
  const [gameState, setGameState] = useState<"home" | "playing">("home");
  const [showInstructions, setShowInstructions] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // MODO JOGO:
  // Mantém travado e sem scroll para foco total
  if (gameState === "playing") {
    return (
      <main className="h-dvh w-full bg-white overflow-hidden">
        <GameBoard onQuit={() => setGameState("home")} />
      </main>
    );
  }

  // MODO HOME (Menu Principal):
  // CORREÇÃO AQUI: Usamos 'h-dvh' (altura fixa da tela) + 'overflow-y-auto' (rolagem interna).
  // Isso força a barra de rolagem aparecer mesmo se o 'body' do site estiver travado.
  return (
    <main className="h-dvh w-full bg-white flex flex-col items-center overflow-y-auto">
      {/* 1. TOPO: Header com margem para não colar no topo */}
      <div className="w-full flex justify-center pt-8 shrink-0">
        <DailyHeader />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="w-full max-w-md px-6 flex flex-col items-center shrink-0">
        {/* Título e Subtítulo */}
        <div className="text-center mt-6 mb-8">
          <h1 className="text-[#008F66] text-6xl md:text-7xl font-black tracking-tighter mb-2">
            Footly
          </h1>
          <p className="text-[#1D1B20] text-2xl md:text-3xl font-bold leading-tight">
            Daily Football Player Guessing Game
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="w-full flex flex-col gap-4 mb-10">
          <button
            onClick={() => setGameState("playing")}
            className="w-full h-14 bg-[#00D44E] text-[#1D1B20] text-xl font-bold rounded-[40px] shadow-sm active:scale-95 transition-transform"
          >
            Play
          </button>

          <button
            onClick={() => setShowInstructions(true)}
            className="w-full h-14 bg-[#FFFBFF] text-[#008C6E] text-lg font-bold rounded-[40px] border border-[#008C6E]/20 shadow-sm active:scale-95 transition-transform"
          >
            How to play?
          </button>

          <button
            onClick={() => setIsAboutOpen(true)}
            className="text-[#008C6E] font-bold text-sm hover:opacity-80 transition-opacity mt-2"
          >
            About
          </button>
        </div>

        {/* --- SEÇÃO SEO & ADSENSE --- */}
        <section className="w-full border-t border-slate-100 pt-8 pb-4 text-slate-500 text-sm leading-relaxed text-center">
          <article className="prose prose-sm prose-slate mx-auto mb-8">
            <h2 className="text-lg font-bold text-[#008F66] mb-2">
              The Ultimate Football Trivia
            </h2>
            <p className="mb-4">
              Welcome to <strong>Footly</strong>. Can you guess the mystery
              football player from a blurred photo? Test your knowledge of the{" "}
              <strong>Premier League, La Liga, and Serie A</strong>.
            </p>
            <p>
              Our database is updated for the <strong>2025/2026 season</strong>,
              featuring accurate stats like Position, Nationality, and Age. Play
              daily to build your streak!
            </p>
          </article>

          {/* Links Legais */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400 mb-6">
            <Link
              href="/privacy"
              className="hover:text-[#008F66] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#008F66] transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#008F66] transition-colors"
            >
              Contact
            </Link>
          </div>

          <p className="text-[10px] text-slate-300">
            Footly is an independent game.
          </p>
        </section>
      </div>

      {/* MODAIS */}
      <InstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        onPlay={() => {
          setShowInstructions(false);
          setGameState("playing");
        }}
      />

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </main>
  );
}
