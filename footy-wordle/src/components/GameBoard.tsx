"use client";

import { useState, useEffect, useRef } from "react";
import { PLAYERS, Player } from "@/data/players";
import { Share2, Search, XCircle } from "lucide-react";
import SecureImage from "./SecureImage";
import ShareSection from "./ShareSection";

// --- LÓGICA DE PONTUAÇÃO ---
const calculatePoints = (attempts: number, time: number, isWin: boolean) => {
  if (!isWin) return 0;

  let attemptPoints = 0;
  if (attempts === 1) attemptPoints = 50;
  else if (attempts === 2) attemptPoints = 25;
  else if (attempts === 3) attemptPoints = 10;

  let timePoints = 0;
  if (time < 15) timePoints = 100;
  else if (time <= 30) timePoints = 50;
  else if (time <= 45) timePoints = 25;
  else timePoints = 10;

  return attemptPoints + timePoints;
};

// --- SELEÇÃO DIÁRIA ---
const getDailyPlayers = () => {
  const today = new Date().toISOString().split("T")[0].replace(/-/g, "");
  const seed = parseInt(today);
  const p1 = PLAYERS[seed % PLAYERS.length];
  const p2 = PLAYERS[(seed + 13) % PLAYERS.length];
  const p3 = PLAYERS[(seed + 27) % PLAYERS.length];
  return [p1, p2, p3];
};

interface RoundResult {
  player: Player;
  attempts: number;
  time: number;
  score: number;
  isWin: boolean;
}

export default function GameBoard({ onQuit }: { onQuit: () => void }) {
  // ESTADOS
  const [dailyQueue, setDailyQueue] = useState<Player[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // ESTADOS DA RODADA
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Player[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [time, setTime] = useState(0);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  // ESTADO DO MODAL DE SHARE
  const [showShareModal, setShowShareModal] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. INICIALIZAÇÃO E VERIFICAÇÃO DE JOGO JÁ JOGADO
  useEffect(() => {
    // Carrega os jogadores do dia
    setDailyQueue(getDailyPlayers());

    // Verifica se já jogou hoje
    const today = new Date().toISOString().split("T")[0];
    const savedData = localStorage.getItem("footly_daily_status");

    if (savedData) {
      const parsed = JSON.parse(savedData);
      // Se a data salva for igual a hoje E o jogo estiver finalizado
      if (parsed.date === today && parsed.finished) {
        setResults(parsed.results);
        setIsFinished(true); // Pula direto para a tela de resultados
      }
    }
  }, []);

  // 2. SALVAR QUANDO TERMINAR
  useEffect(() => {
    if (isFinished && results.length > 0) {
      const today = new Date().toISOString().split("T")[0];
      localStorage.setItem(
        "footly_daily_status",
        JSON.stringify({
          date: today,
          finished: true,
          results: results,
        }),
      );
    }
  }, [isFinished, results]);

  // Timer
  useEffect(() => {
    if (!isRoundOver && !isFinished) {
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRoundOver, isFinished]);

  // Autocomplete
  useEffect(() => {
    if (query.length > 1 && !isRoundOver) {
      const filtered = PLAYERS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, isRoundOver]);

  const currentPlayer = dailyQueue[currentIndex];

  const handleGuess = (selectedName: string) => {
    if (isRoundOver) return;
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setQuery("");
    setSuggestions([]);

    if (selectedName.toLowerCase() === currentPlayer.name.toLowerCase()) {
      finishRound(true, newAttempts);
    } else {
      setWrongGuesses((prev) => [...prev, selectedName]);
      if (newAttempts >= 3) finishRound(false, newAttempts);
    }
  };

  const finishRound = (win: boolean, finalAttempts: number) => {
    setIsWin(win);
    setIsRoundOver(true);
    const roundScore = calculatePoints(finalAttempts, time, win);

    setResults((prev) => [
      ...prev,
      {
        player: currentPlayer,
        attempts: finalAttempts,
        time: time,
        score: roundScore,
        isWin: win,
      },
    ]);
  };

  const nextPlayer = () => {
    if (currentIndex < 2) {
      setCurrentIndex((prev) => prev + 1);
      setAttempts(0);
      setWrongGuesses([]);
      setTime(0);
      setQuery("");
      setIsRoundOver(false);
      setIsWin(false);
    } else {
      setIsFinished(true);
      // O useEffect lá em cima vai capturar essa mudança e salvar no localStorage
    }
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const getBorderColor = () => {
    if (isRoundOver) return isWin ? "border-[#00D44E]" : "border-red-500";
    if (attempts === 0) return "border-slate-100";
    return "border-yellow-400";
  };

  // --- TELA DE RESULTADOS (Mostrada se acabou ou se já jogou hoje) ---
  if (isFinished) {
    const totalScore = results.reduce((acc, curr) => acc + curr.score, 0);

    return (
      <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 pb-20 animate-in fade-in">
        <h2 className="text-3xl font-black text-[#006B52] mb-2 mt-4">
          GAME OVER
        </h2>
        <p className="text-slate-500 font-bold mb-8">
          Daily Challenge Complete
        </p>

        <div className="bg-[#006B52] text-white p-6 rounded-2xl w-full text-center mb-8 shadow-lg">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
            Total Score
          </p>
          <p className="text-7xl font-black tracking-tighter">{totalScore}</p>
        </div>

        <div className="w-full space-y-3 mb-8">
          {results.map((res, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <img
                  src={res.player.image}
                  className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
                />
                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    {res.player.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {res.isWin ? `${res.attempts}/3 attempts` : "Failed"} •{" "}
                    {res.time}s
                  </p>
                </div>
              </div>
              <span
                className={`font-black text-lg ${res.isWin ? "text-[#006B52]" : "text-red-400"}`}
              >
                +{res.score}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 w-full">
          <button
            onClick={handleShare}
            className="flex-2 h-14 bg-[#00D44E] text-[#1D1B20] rounded-full font-black flex items-center justify-center gap-2 shadow-lg active:scale-95 transition"
          >
            <Share2 size={20} /> SHARE RESULTS
          </button>
        </div>

        {/* MODAL DE SHARE */}
        <ShareSection
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          totalScore={totalScore}
          results={results}
        />
      </div>
    );
  }

  if (!currentPlayer) return null;

  // --- TELA DE JOGO ---
  return (
    <div className="w-full max-w-md mx-auto p-4 pb-20 flex flex-col items-center">
      {/* 1. Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <span className="bg-[#006B52]/10 text-[#006B52] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Player {currentIndex + 1}/3
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${attempts > i ? "bg-red-400" : "bg-slate-200"}`}
              />
            ))}
          </div>
          <span className="text-slate-400 font-mono font-bold w-12 text-right">
            {time}s
          </span>
        </div>
      </div>

      {/* 2. Imagem */}
      <div
        className={`relative w-full aspect-square bg-slate-100 rounded-3xl overflow-hidden mb-4 shadow-sm border-4 transition-colors duration-300 ${getBorderColor()}`}
      >
        <SecureImage
          src={currentPlayer.image}
          alt="Player"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Máscara de Blur */}
        {!isRoundOver && (
          <div
            className="absolute inset-0 backdrop-blur-xl bg-white/10"
            style={{
              maskImage:
                "radial-gradient(circle at center, transparent 20%, black 20%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, transparent 20%, black 20%)",
            }}
          />
        )}

        {/* Overlay Resultado */}
        {isRoundOver && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 animate-in fade-in">
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
              The player was
            </p>
            <h2 className="text-white text-3xl font-black italic uppercase text-center leading-tight drop-shadow-md pr-2">
              {currentPlayer.name}
            </h2>
          </div>
        )}
      </div>

      {/* 3. Input & Botões */}
      {!isRoundOver ? (
        <div className="w-full relative z-50 mb-4">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Who is this player?"
              className="w-full h-14 pl-12 pr-4 rounded-xl bg-white border-2 border-slate-200 focus:border-[#006B52] outline-none font-bold text-slate-800 shadow-sm"
            />
            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={24}
            />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white rounded-xl mt-2 border border-slate-200 shadow-xl max-h-48 overflow-y-auto divide-y divide-slate-100">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  onClick={() => handleGuess(s.name)}
                  className="px-4 py-3 hover:bg-slate-50 cursor-pointer flex justify-between"
                >
                  <span className="font-bold text-slate-700">{s.name}</span>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    {s.hints[1]}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <button
          onClick={nextPlayer}
          className="w-full h-14 mb-4 bg-[#006B52] text-white font-black rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          {currentIndex < 2 ? "NEXT PLAYER →" : "SEE FINAL RESULTS"}
        </button>
      )}

      {/* 4. Dicas */}
      <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4">
        <div className="space-y-3">
          {["Position", "Nationality", "Profile"].map((label, i) => (
            <div
              key={label}
              className="flex justify-between items-center border-b border-slate-200 pb-2 last:border-0 last:pb-0"
            >
              <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">
                {label}
              </span>
              <span
                className={`font-bold text-slate-800 text-right transition-all ${attempts >= i || isRoundOver ? "" : "blur-sm opacity-50 select-none"}`}
              >
                {currentPlayer.hints[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Erros */}
      {wrongGuesses.length > 0 && (
        <div className="w-full flex flex-wrap gap-2 justify-center animate-in fade-in">
          {wrongGuesses.map((name, i) => (
            <span
              key={i}
              className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-500 border border-red-100 rounded-full text-xs font-bold"
            >
              <XCircle size={12} /> {name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
