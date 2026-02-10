"use client";

import { useRef, useState } from "react";
import { X, Download, Copy, MessageCircle } from "lucide-react";
import { domToPng } from "modern-screenshot";
import { getGameNumber } from "@/lib/gameLogic";

// Interface atualizada para receber os dados dos 3 jogadores
interface ShareSectionProps {
  isOpen: boolean;
  onClose: () => void;
  totalScore: number;
  results: any[]; // Array com os resultados das rodadas
}

export default function ShareSection({
  isOpen,
  onClose,
  totalScore,
  results,
}: ShareSectionProps) {
  const posterRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Se der erro no getGameNumber, usa um fallback ou remova essa linha se não tiver a lib
  const gameNumber = getGameNumber ? getGameNumber() : "Daily";

  if (!isOpen) return null;

  const WIN_BG =
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop";
  const LOSE_BG =
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1000&auto=format&fit=crop";

  // Lógica de vitória: Se fez mais que 0 pontos, consideramos vitória/conclusão
  const won = totalScore > 0;

  const handleDownloadImage = async () => {
    if (!posterRef.current) return;
    setIsGenerating(true);

    try {
      const dataUrl = await domToPng(posterRef.current, {
        scale: 2,
        quality: 1,
      });

      const link = document.createElement("a");
      link.download = `footly-result-${gameNumber}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Erro ao gerar imagem:", err);
      alert("Erro ao salvar imagem. Tente tirar um print!");
    } finally {
      setIsGenerating(false);
    }
  };

  // Gera o texto formatado com os emojis de medalha
  const getShareText = () => {
    const lines = results
      .map(
        (r, i) =>
          `Player ${i + 1}: ${r.isWin ? (r.attempts === 1 ? "🥇" : r.attempts === 2 ? "🥈" : "🥉") : "❌"} (${r.time}s)`,
      )
      .join("\n");

    return `Footly #${gameNumber}\n🏆 Score: ${totalScore} pts\n\n${lines}\n\nIt's your turn: www.footlygame.com`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getShareText());
    alert("Texto copiado!");
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(getShareText())}`;
    window.open(url, "_blank");
  };

  const overlayColor = won
    ? "rgba(6, 78, 59, 0.85)"
    : "rgba(127, 29, 29, 0.85)";
  const accentColor = "#00D656";

  // O componente visual que será transformado em imagem
  const PosterVisual = ({ isPrint = false }: { isPrint?: boolean }) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isPrint ? "40px" : "24px",
        overflow: "hidden",
        backgroundColor: won ? "#064e3b" : "#7f1d1d",
      }}
    >
      <img
        src={won ? WIN_BG : LOSE_BG}
        alt="Fundo"
        crossOrigin="anonymous"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: overlayColor,
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          width: "100%",
        }}
      >
        <span
          className="font-bold tracking-widest uppercase"
          style={{
            color: "white",
            opacity: 0.8,
            fontSize: isPrint ? "18px" : "12px",
          }}
        >
          FOOTLY #{gameNumber}
        </span>

        <h2
          className="font-black italic tracking-tighter"
          style={{
            color: "white",
            fontSize: isPrint ? "56px" : "32px",
            margin: "10px 0",
            lineHeight: 1,
          }}
        >
          {won ? "COMPLETED!" : "GAME OVER"}
        </h2>

        {/* CAIXA DE PONTUAÇÃO (Alterado para mostrar SCORE) */}
        <div
          className="rounded-3xl border border-white/20 mx-auto w-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: isPrint ? "30px" : "20px",
            margin: "20px auto",
            maxWidth: isPrint ? "300px" : "200px",
          }}
        >
          <div>
            <p
              className="font-bold uppercase"
              style={{
                color: accentColor,
                fontSize: isPrint ? "16px" : "12px",
                letterSpacing: "2px",
                marginBottom: "4px",
              }}
            >
              Total Score
            </p>
            <p
              className="font-black text-white"
              style={{
                fontSize: isPrint ? "72px" : "48px",
                lineHeight: 1,
              }}
            >
              {totalScore}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: isPrint ? "14px" : "10px",
                marginTop: "4px",
              }}
            >
              Points
            </p>
          </div>
        </div>

        <div style={{ marginTop: isPrint ? "40px" : "20px" }}>
          <p
            className="font-bold text-white"
            style={{
              fontSize: isPrint ? "24px" : "16px",
            }}
          >
            Can you beat my score?
          </p>
          <p
            className="font-bold"
            style={{
              color: accentColor,
              fontSize: isPrint ? "20px" : "14px",
            }}
          >
            www.footlygame.com
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
        >
          <X size={20} className="text-slate-800" />
        </button>

        <div className="pt-8 pb-6 px-6 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight italic">
            Share Result
          </h2>

          <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-lg mb-6 border-4 border-white bg-slate-100">
            <PosterVisual isPrint={false} />
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleCopyText}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-active:scale-95 transition-transform">
                <Copy size={20} />
              </div>
              <span className="text-xs font-bold text-slate-500">Copy</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#25D366] group-active:scale-95 transition-transform">
                <MessageCircle size={20} />
              </div>
              <span className="text-xs font-bold text-slate-500">WhatsApp</span>
            </button>
            <button
              onClick={handleDownloadImage}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#00D656] text-white flex items-center justify-center shadow-lg group-active:scale-95 transition-transform">
                {isGenerating ? (
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <Download size={20} />
                )}
              </div>
              <span className="text-xs font-bold text-[#00D656]">
                Save image
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Versão Invisível para Gerar o Print (Alta Resolução) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "-9999px",
          width: "600px",
          height: "800px",
          zIndex: -1,
        }}
      >
        <div ref={posterRef} style={{ width: "100%", height: "100%" }}>
          <PosterVisual isPrint={true} />
        </div>
      </div>
    </div>
  );
}
