// src/lib/stats.ts

export interface GameStats {
  totalGames: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  winPercentage: number;
  averageTime: number; // em segundos
  guessDistribution: {
    1: number;
    2: number;
    3: number;
    fail: number;
  };
}

const STATS_KEY = "footly_user_stats";

const createDefaultStats = (): GameStats => ({
  totalGames: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  winPercentage: 0,
  averageTime: 0,
  guessDistribution: { 1: 0, 2: 0, 3: 0, fail: 0 },
});

export const getStats = (): GameStats => {
  if (typeof window === "undefined") return createDefaultStats();

  const stats = localStorage.getItem(STATS_KEY);
  return stats ? JSON.parse(stats) : createDefaultStats();
};

export const saveStats = (
  won: boolean,
  guessesCount: number,
  timeTaken: number,
) => {
  const stats = getStats();

  // 1. Atualiza totais
  stats.totalGames += 1;

  // 2. Lógica de Vitória/Derrota
  if (won) {
    stats.gamesWon += 1;
    stats.currentStreak += 1;

    // Atualiza recorde de sequência
    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak = stats.currentStreak;
    }

    // Distribuição de palpites (Gráfico de barras)
    if (guessesCount >= 1 && guessesCount <= 3) {
      stats.guessDistribution[guessesCount as 1 | 2 | 3] += 1;
    }

    // Atualiza média de tempo
    // Fórmula: ((Média Antiga * (JogosVencidos - 1)) + NovoTempo) / JogosVencidos
    // Nota: Usamos (gamesWon - 1) porque acabamos de somar 1 lá em cima
    const previousTotalTime = stats.averageTime * (stats.gamesWon - 1);
    const newTotalTime = previousTotalTime + timeTaken;
    stats.averageTime = Math.round(newTotalTime / stats.gamesWon);
  } else {
    // Se perdeu, zera a sequência atual
    stats.currentStreak = 0;
    stats.guessDistribution.fail += 1;
  }

  // 3. Atualiza Porcentagem de Vitória
  stats.winPercentage = Math.round((stats.gamesWon / stats.totalGames) * 100);

  // 4. Salva no navegador
  if (typeof window !== "undefined") {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }

  return stats;
};
