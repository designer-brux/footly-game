// scripts/updatePlayers.js
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = "https://v3.football.api-sports.io";

const SEASON = 2024;
const MAX_PAGES_PER_TEAM = 2;
const DELAY_MS = 7000;

// Lista de Times
const TEAMS = [
  // 🇧🇷 BRASILEIRÃO
  126, 121, 127, 133, 120, 124, 125, 131, 130, 119, 128, 1062,
  // 🇸🇦 SAUDI PRO LEAGUE
  293, 294, 297, 296,
  // 🇪🇺 EUROPA (Premier, La Liga, Serie A, Bundesliga)
  33, 40, 42, 50, 49, 529, 530, 541, 492, 489, 505, 496, 157, 165,
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

    // --- CORREÇÃO PRINCIPAL AQUI ---
    const elitePlayers = allRawPlayers
      .map((item) => {
        // 1. Encontra a estatística ESPECÍFICA do time que estamos buscando agora
        // Isso evita pegar dados de times anteriores (ex: Japão)
        const teamStats = item.statistics.find(
          (stat) => stat.team.id === teamId,
        );

        // Se por algum motivo não achar, ignora
        if (!teamStats) return null;

        return {
          player: item.player,
          stats: teamStats, // Usaremos essa stat específica daqui pra frente
        };
      })
      .filter((item) => item !== null) // Remove os nulos
      .filter(
        (item) => item.player.photo && item.stats.games.minutes > 0, // Filtra minutos baseado no time correto
      )
      .sort((a, b) => b.stats.games.minutes - a.stats.games.minutes)
      .slice(0, 18)
      .map((item) => ({
        id: item.player.id,
        name: item.player.name,
        image: item.player.photo,
        hints: [
          // Dica 1: Posição (Do time correto)
          mapPosition(item.stats.games.position),

          // Dica 2: Nacionalidade
          item.player.nationality,

          // Dica 3: Time Atual (Do time correto que buscamos)
          item.stats.team.name,
        ],
      }));

    return elitePlayers;
  } catch (error) {
    console.error(`❌ Erro no time ${teamId}:`, error.message);
    return [];
  }
}

function mapPosition(apiPos) {
  const map = {
    Goalkeeper: "Goalkeeper",
    Defender: "Defender",
    Midfielder: "Midfielder",
    Attacker: "Forward",
  };
  return map[apiPos] || apiPos;
}

async function run() {
  console.log(
    `🚀 Iniciando atualização: [Posição, Nacionalidade, Time Atual]...`,
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

  // Remove duplicados
  const uniquePlayers = Array.from(
    new Map(allPlayers.map((item) => [item.id, item])).values(),
  );
  uniquePlayers.sort(() => Math.random() - 0.5);

  const fileContent = `
// ⚠️ ARQUIVO GERADO AUTOMATICAMENTE
// DATA: ${new Date().toLocaleString()}
// TOTAL: ${uniquePlayers.length} JOGADORES

export interface Player {
  id: number;
  name: string;
  hints: string[]; // [Position, Nationality, Current Club]
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
