// scripts/updatePlayers.js
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = "https://v3.football.api-sports.io";

// Configurações
const SEASON = 2024;
const MAX_PAGES_PER_TEAM = 2;
const DELAY_MS = 7000; // Delay para não bloquear a API grátis

// Lista de Times (IDs da API-Football)
const TEAMS = [
  // 🇧🇷 BRASILEIRÃO
  126, 121, 127, 133, 120, 124, 125, 131, 130, 119, 128, 1062,
  // 🇸🇦 SAUDI PRO LEAGUE
  293, 294, 297, 296,
  // 🇪🇺 EUROPA (Premier, La Liga, Serie A, Bundesliga)
  33, 40, 42, 50, 49, 529, 530, 541, 492, 489, 505, 496, 157, 165,
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --- FUNÇÕES AUXILIARES ---

// 1. Calcula a idade exata baseada no dia de hoje (2026+)
function calculateRealAge(birthDateString) {
  if (!birthDateString) return "?";

  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  // Se ainda não fez aniversário este ano, diminui 1
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

// 2. Formata a Dica 3 (Perfil Físico)
function formatProfile(player) {
  const realAge = calculateRealAge(player.birth.date);
  // Se a altura vier nula, coloca um traço
  const height = player.height ? ` • ${player.height}` : "";

  return `${realAge} anos${height}`;
}

// 3. Traduz posições do Inglês para Português (Opcional, se quiser manter EN deixe como está)
function mapPosition(apiPos) {
  const map = {
    Goalkeeper: "Goalkeeper",
    Defender: "Defender",
    Midfielder: "Midfielder",
    Attacker: "Forward",
  };
  return map[apiPos] || apiPos;
}

async function fetchTeamPlayers(teamId) {
  let allRawPlayers = [];
  let page = 1;

  try {
    while (page <= MAX_PAGES_PER_TEAM) {
      console.log(`   ↳ Time ID ${teamId} (Página ${page})...`);

      const response = await axios.get(`${BASE_URL}/players`, {
        params: { team: teamId, season: SEASON, page: page },
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": API_KEY,
        },
      });

      const data = response.data;

      if (data.errors && Object.keys(data.errors).length > 0) {
        console.warn(`      ⚠️ Aviso da API:`, JSON.stringify(data.errors));
        break;
      }

      const list = data.response || [];
      allRawPlayers = [...allRawPlayers, ...list];

      if (page >= data.paging.total) break;
      page++;
      if (page <= MAX_PAGES_PER_TEAM) await delay(2000);
    }

    // PROCESSAMENTO E FILTRAGEM
    const elitePlayers = allRawPlayers
      .map((item) => {
        // Encontra a estatística ESPECÍFICA do time atual do loop
        const teamStats = item.statistics.find(
          (stat) => stat.team.id === teamId,
        );

        if (!teamStats) return null;

        return {
          player: item.player,
          stats: teamStats,
        };
      })
      .filter((item) => item !== null)
      .filter(
        (item) => item.player.photo && item.stats.games.minutes > 0, // Remove quem não jogou
      )
      .sort((a, b) => b.stats.games.minutes - a.stats.games.minutes) // Pega os titulares
      .slice(0, 18) // Limita aos 18 que mais jogaram no time
      .map((item) => ({
        id: item.player.id,
        name: item.player.name,
        image: item.player.photo,
        hints: [
          // Dica 1: Posição
          mapPosition(item.stats.games.position),

          // Dica 2: Nacionalidade
          item.player.nationality,

          // Dica 3: PERFIL (Idade Atualizada + Altura)
          formatProfile(item.player),
        ],
      }));

    return elitePlayers;
  } catch (error) {
    console.error(`❌ Erro no time ${teamId}:`, error.message);
    return [];
  }
}

async function run() {
  console.log(
    `🚀 Iniciando atualização: [Posição, Nacionalidade, Perfil Físico]...`,
  );

  let allPlayers = [];

  for (const teamId of TEAMS) {
    console.log(`\n⚽ Processando time ${teamId}...`);
    const teamPlayers = await fetchTeamPlayers(teamId);
    allPlayers = [...allPlayers, ...teamPlayers];

    console.log(`   ✅ ${teamPlayers.length} jogadores.`);
    console.log(`   ⏳ Aguardando ${DELAY_MS / 1000}s...`);
    await delay(DELAY_MS);
  }

  // Remove duplicados (Jogadores que trocaram de time entre os times da lista)
  const uniquePlayers = Array.from(
    new Map(allPlayers.map((item) => [item.id, item])).values(),
  );

  // Embaralha a lista final
  uniquePlayers.sort(() => Math.random() - 0.5);

  const fileContent = `
// ⚠️ ARQUIVO GERADO AUTOMATICAMENTE
// DATA: ${new Date().toLocaleString()}
// TOTAL: ${uniquePlayers.length} JOGADORES

export interface Player {
  id: number;
  name: string;
  hints: string[]; // [Position, Nationality, Profile]
  image: string;
}

export const PLAYERS: Player[] = ${JSON.stringify(uniquePlayers, null, 2)};
`;

  fs.writeFileSync("./src/data/players.ts", fileContent);
  console.log(
    `\n✅ SUCESSO! Base atualizada com ${uniquePlayers.length} jogadores.`,
  );
}

run();
