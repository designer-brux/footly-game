import { PLAYERS, Player } from "@/data/players";

// ==============================================================================
// CONFIGURAÇÃO DO DIA ZERO
// Data de lançamento: 9 de Fevereiro de 2026
// ==============================================================================
const EPOCH_YEAR = 2026;
const EPOCH_MONTH = 1; // Fevereiro é 1 (Janeiro é 0 no JS)
const EPOCH_DAY = 9;

/**
 * 1. LÓGICA DO JOGO (LOCAL)
 * Calcula o índice baseado na MEIA-NOITE LOCAL do usuário.
 */
export function getLocalDayIndex(offset = 0): number {
  const now = new Date();

  // Aplica o deslocamento (ontem, amanhã)
  now.setDate(now.getDate() + offset);

  // Zera horas/minutos para comparar apenas datas puras LOCAIS
  now.setHours(0, 0, 0, 0);

  // Cria a data Epoch também no horário local
  const epochLocal = new Date(EPOCH_YEAR, EPOCH_MONTH, EPOCH_DAY, 0, 0, 0, 0);

  const oneDay = 1000 * 60 * 60 * 24;
  const diff = now.getTime() - epochLocal.getTime();

  return Math.floor(diff / oneDay);
}

/**
 * 2. LÓGICA DO BLOG (SAFE GLOBAL)
 * O Blog só atualiza quando for 12:00 PM (Meio-dia) UTC.
 */
export function getSafeBlogGameIndex(): number {
  const now = new Date();

  // Subtrai 12 horas do UTC atual
  now.setUTCHours(now.getUTCHours() - 12);

  const currentDailyUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );

  const epochUTC = Date.UTC(EPOCH_YEAR, EPOCH_MONTH, EPOCH_DAY);

  const oneDay = 1000 * 60 * 60 * 24;
  const diff = currentDailyUTC - epochUTC;

  return Math.floor(diff / oneDay);
}

/**
 * 3. BUSCADOR UNIVERSAL
 * Recebe o NÚMERO DO JOGO (Index) e retorna os jogadores.
 */
export function getPlayersByIndex(gameIndex: number) {
  const safeIndex = Math.abs(gameIndex);

  const p1 = PLAYERS[safeIndex % PLAYERS.length];
  const p2 = PLAYERS[(safeIndex + 13) % PLAYERS.length];
  const p3 = PLAYERS[(safeIndex + 27) % PLAYERS.length];

  // Data para exibição (usada no Blog)
  const displayDate = new Date(Date.UTC(EPOCH_YEAR, EPOCH_MONTH, EPOCH_DAY));
  displayDate.setUTCDate(displayDate.getUTCDate() + gameIndex);

  const formattedDate = displayDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return {
    players: [p1, p2, p3],
    formattedDate,
    gameNumber: safeIndex + 1,
  };
}

/**
 * Wrapper para compatibilidade com o Hook do Jogo.
 * Usa automaticamente o horário LOCAL.
 */
export function getDailyPlayersByOffset(offset = 0) {
  const localIndex = getLocalDayIndex(offset);
  return getPlayersByIndex(localIndex);
}

// --- AUXILIARES EXPORTADOS ---

export function getGameNumber(): number {
  return getLocalDayIndex(0) + 1;
}

// [CORREÇÃO] A função que estava faltando foi readicionada aqui
export function getFormattedDate(): string {
  // Retorna a data local formatada para o usuário (Ex: 18/02/2026)
  return new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function generateSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
