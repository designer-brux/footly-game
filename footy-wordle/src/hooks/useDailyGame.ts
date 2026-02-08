// src/hooks/useDailyGame.ts
import { useState, useEffect } from "react";
import { getDayIndex, getDailyPlayer } from "@/lib/gameLogic";
import { Player } from "@/data/players";
import { sendGAEvent } from "@next/third-parties/google"; // <--- Import do Analytics
import { saveStats } from "@/lib/stats"; // <--- Import das Estatísticas Locais

interface GameState {
  guesses: string[];
  gameOver: boolean;
  won: boolean;
  lastPlayedIndex: number;
}

export function useDailyGame() {
  const [targetPlayer, setTargetPlayer] = useState<Player | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Estados para controle de métricas
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [analyticsSent, setAnalyticsSent] = useState(false); // Trava para não enviar 2x

  // 1. Carregar estado ao abrir o jogo
  useEffect(() => {
    const todayIndex = getDayIndex();
    const playerOfTheDay = getDailyPlayer();
    setTargetPlayer(playerOfTheDay);

    const savedData = localStorage.getItem("footy_daily_state");

    if (savedData) {
      const parsed: GameState = JSON.parse(savedData);

      // Se o save for do MESMO dia de hoje, recupera tudo
      if (parsed.lastPlayedIndex === todayIndex) {
        setGuesses(parsed.guesses);
        setGameOver(parsed.gameOver);
        setWon(parsed.won);

        // SE O JOGO JÁ ESTAVA ACABADO NO LOAD, NÃO ENVIA ANALYTICS DE NOVO
        if (parsed.gameOver) {
          setAnalyticsSent(true);
        }
      } else {
        // Se for um dia novo, limpa o localStorage antigo
        localStorage.removeItem("footy_daily_state");
        // Reinicia o tempo
        setStartTime(Date.now());
      }
    }
    setIsLoading(false);
  }, []);

  // 2. Salvar estado no LocalStorage toda vez que algo mudar
  useEffect(() => {
    if (isLoading || !targetPlayer) return;

    const todayIndex = getDayIndex();
    const state: GameState = {
      guesses,
      gameOver,
      won,
      lastPlayedIndex: todayIndex,
    };

    localStorage.setItem("footy_daily_state", JSON.stringify(state));
  }, [guesses, gameOver, won, isLoading, targetPlayer]);

  // 3. MONITORAMENTO E ANALYTICS (Novo)
  useEffect(() => {
    // Só dispara se:
    // a) O jogo acabou
    // b) Ainda não enviamos os dados (analyticsSent = false)
    // c) Temos o jogador alvo carregado
    // d) Não estamos carregando o estado inicial
    if (gameOver && !analyticsSent && targetPlayer && !isLoading) {
      // Calcula tempo decorrido em segundos
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);

      // A. Salva nas estatísticas do usuário (LocalStorage)
      saveStats(won, guesses.length, timeTaken);

      // B. Envia para o Google Analytics (GA4)
      sendGAEvent("event", "game_complete", {
        result: won ? "win" : "lose",
        attempts: won ? guesses.length : "fail",
        player_name: targetPlayer.name,
        day_id: targetPlayer.id,
        time_seconds: timeTaken,
      });

      // Trava para não enviar novamente até recarregar a página/dia
      setAnalyticsSent(true);
    }
  }, [
    gameOver,
    analyticsSent,
    targetPlayer,
    isLoading,
    won,
    guesses,
    startTime,
  ]);

  return {
    targetPlayer,
    guesses,
    setGuesses,
    gameOver,
    setGameOver,
    won,
    setWon,
    isLoading,
  };
}
