// src/hooks/useDailyGame.ts
import { useState, useEffect } from "react";
// 1. CORREÇÃO: Importamos a nova função que retorna o trio de jogadores
import { getDailyPlayersByOffset } from "@/lib/gameLogic";
import { Player } from "@/data/players";
import { sendGAEvent } from "@next/third-parties/google";
import { saveStats } from "@/lib/stats";

interface GameState {
  // 2. CORREÇÃO: Guesses deve ser Player[] para podermos mostrar a foto/dicas na tela
  guesses: Player[];
  gameOver: boolean;
  won: boolean;
  lastPlayedIndex: number;
}

export function useDailyGame() {
  // 3. LÓGICA NOVA: Pegamos os dados do dia (Offset 0)
  const dailyData = getDailyPlayersByOffset(0);

  // O "Alvo" é sempre o primeiro jogador do trio do dia
  const currentDailyPlayer = dailyData.players[0];
  const todayIndex = dailyData.gameNumber;

  const [targetPlayer, setTargetPlayer] = useState<Player>(currentDailyPlayer);
  const [guesses, setGuesses] = useState<Player[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Estados para controle de métricas (Seu código novo)
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [analyticsSent, setAnalyticsSent] = useState(false);

  // 1. Carregar estado ao abrir o jogo
  useEffect(() => {
    // Garante que o alvo é o do dia atual
    setTargetPlayer(currentDailyPlayer);

    const savedData = localStorage.getItem("footy_daily_state");

    if (savedData) {
      const parsed: GameState = JSON.parse(savedData);

      // Se o save for do MESMO dia de hoje (baseado no gameNumber), recupera
      if (parsed.lastPlayedIndex === todayIndex) {
        setGuesses(parsed.guesses);
        setGameOver(parsed.gameOver);
        setWon(parsed.won);

        if (parsed.gameOver) {
          setAnalyticsSent(true);
        }
      } else {
        // Dia novo: limpa o save antigo
        localStorage.removeItem("footy_daily_state");
        setStartTime(Date.now());
      }
    }
    setIsLoading(false);
  }, [todayIndex, currentDailyPlayer]);

  // 2. Salvar estado no LocalStorage
  useEffect(() => {
    if (isLoading) return;

    const state: GameState = {
      guesses,
      gameOver,
      won,
      lastPlayedIndex: todayIndex,
    };

    localStorage.setItem("footy_daily_state", JSON.stringify(state));
  }, [guesses, gameOver, won, isLoading, todayIndex]);

  // 3. MONITORAMENTO E ANALYTICS
  useEffect(() => {
    if (gameOver && !analyticsSent && !isLoading) {
      // Calcula tempo decorrido em segundos
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);

      // A. Salva nas estatísticas do usuário (LocalStorage)
      // Passamos o 3º argumento (tempo) que estava faltando antes
      saveStats(won, guesses.length, timeTaken);

      // B. Envia para o Google Analytics
      sendGAEvent("event", "game_complete", {
        result: won ? "win" : "lose",
        attempts: won ? guesses.length : "fail",
        player_name: targetPlayer.name,
        day_id: targetPlayer.id,
        time_seconds: timeTaken,
        day_number: todayIndex,
      });

      setAnalyticsSent(true);
    }
  }, [
    gameOver,
    analyticsSent,
    isLoading,
    won,
    guesses,
    startTime,
    targetPlayer,
    todayIndex,
  ]);

  // 4. FUNÇÃO DE PALPITE (ESSENCIAL PARA O JOGO FUNCIONAR)
  const addGuess = (player: Player) => {
    if (gameOver || isLoading) return;

    // Evita duplicatas
    if (guesses.some((g) => g.id === player.id)) return;

    const newGuesses = [player, ...guesses];
    setGuesses(newGuesses);

    // Vitória
    if (player.id === targetPlayer.id) {
      setWon(true);
      setGameOver(true);
    }
    // Derrota (Limite de 10 tentativas)
    else if (newGuesses.length >= 10) {
      setWon(false);
      setGameOver(true);
    }
  };

  return {
    targetPlayer,
    guesses,
    setGuesses,
    gameOver,
    won,
    isLoading,
    addGuess, // Precisamos retornar isso para o GameBoard usar
    gameNumber: todayIndex,
  };
}
