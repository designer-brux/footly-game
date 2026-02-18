import { PLAYERS, Player } from "@/data/players";

// ==============================================================================
// CONFIGURAÇÃO DO DIA ZERO (GLOBAL UTC)
// A data de lançamento é fixa. Não altere o 'Z' (UTC).
// ==============================================================================
const GAME_EPOCH = new Date("2026-02-09T00:00:00Z");

/**
 * Calcula o índice do dia baseado no Tempo Universal (UTC).
 * Isso garante que o jogo mude ao mesmo tempo no mundo todo (00:00 UTC).
 * No Brasil (UTC-3), o jogo muda às 21:00 do dia anterior.
 */
export function getDayIndex(offset = 0): number {
  const now = new Date();

  // Ajusta a data baseada no UTC para garantir sincronia global
  now.setUTCDate(now.getUTCDate() + offset);

  // Zera as horas usando UTC para comparar apenas as datas puras
  const currentDailyUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );

  const epochUTC = Date.UTC(
    GAME_EPOCH.getUTCFullYear(),
    GAME_EPOCH.getUTCMonth(),
    GAME_EPOCH.getUTCDate(),
  );

  const oneDay = 1000 * 60 * 60 * 24;
  const diff = currentDailyUTC - epochUTC;

  return Math.floor(diff / oneDay);
}

/**
 * Retorna o trio de jogadores de um dia específico.
 */
export function getDailyPlayersByOffset(offset = 0) {
  const dayIndex = getDayIndex(offset);
  // Math.abs previne erros se alguém testar datas anteriores ao lançamento
  const safeIndex = Math.abs(dayIndex);

  // Seleção baseada em deslocamentos fixos para garantir unicidade no trio
  const p1 = PLAYERS[safeIndex % PLAYERS.length];
  const p2 = PLAYERS[(safeIndex + 13) % PLAYERS.length];
  const p3 = PLAYERS[(safeIndex + 27) % PLAYERS.length];

  // Gera a data para exibição forçando o fuso UTC
  const targetDate = new Date();
  targetDate.setUTCDate(targetDate.getUTCDate() + offset);

  const formattedDate = targetDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC", // Importante: Garante que o texto bata com a lógica do jogo
  });

  return {
    players: [p1, p2, p3],
    formattedDate,
    gameNumber: safeIndex + 1,
  };
}

export function getGameNumber(): number {
  return getDayIndex(0) + 1;
}

export function getFormattedDate(): string {
  // Retorna a data atual (UTC) formatada para o usuário brasileiro
  // Pode mostrar a data de "amanhã" se já passar das 21h, o que é correto para o jogo
  return new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Auxiliar para gerar Slugs de URL blindado contra 404 e caracteres especiais.
 */
export function generateSlug(name: string): string {
  return name
    .normalize("NFD") // Decompõe caracteres (Ex: é -> e + ´)
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Troca espaços por hífens
    .replace(/[^\w\-]+/g, "") // Remove tudo que não for letra, número ou hífen
    .replace(/\-\-+/g, "-") // Remove hífens duplicados
    .replace(/^-+/, "") // Remove hífen do começo
    .replace(/-+$/, ""); // Remove hífen do fim
}

/**
 * LÓGICA DE SEGURANÇA DO BLOG (Baker Island Rule)
 * Retorna um índice "atrasado" em 12 horas.
 * O blog só deve revelar o jogo do dia quando ele tiver acabado em todos os fusos horários do mundo.
 */
export function getSafeBlogGameIndex(): number {
  const now = new Date();

  // Subtrai 12 horas do horário atual UTC
  now.setUTCHours(now.getUTCHours() - 12);

  const currentDailyUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );

  const epochUTC = Date.UTC(
    GAME_EPOCH.getUTCFullYear(),
    GAME_EPOCH.getUTCMonth(),
    GAME_EPOCH.getUTCDate(),
  );

  const oneDay = 1000 * 60 * 60 * 24;
  const diff = currentDailyUTC - epochUTC;

  return Math.floor(diff / oneDay);
}
