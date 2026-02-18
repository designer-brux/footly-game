// scripts/updatePlayers.js
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = "https://v3.football.api-sports.io";

// --- CONFIGURAÇÕES PARA PLANO FREE ---
const SEASON = 2024; // Voltamos para 2024 (Seguro para conta Grátis)
const MAX_PAGES_PER_TEAM = 2; // Busca as 2 primeiras páginas do elenco
const DELAY_MS = 2500; // Delay entre páginas
const TEAM_DELAY_MS = 6000; // Delay maior entre times (Evita erro 429 Too Many Requests)

// Lista de Times (Brasil e Europa)
const TEAMS = [
  // 🇧🇷 BRASILEIRÃO SÉRIE A (Times de 2024)
  121,
  127,
  126,
  120,
  119,
  130,
  125,
  124,
  133,
  131,
  1062,
  128,
  134,
  135,
  // 🇸🇦 SAUDI PRO LEAGUE
  282,
  286,
  290,
  285,
  // 🇪🇺 EUROPA (Big 5)
  50,
  42,
  40,
  33,
  49,
  47,
  34, // Premier League
  541,
  529,
  530, // La Liga
  496,
  505,
  489,
  492, // Serie A
  157,
  165,
  168, // Bundesliga
  85, // Ligue 1
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --- FUNÇÕES AUXILIARES ---

function calculateRealAge(birthDateString) {
  if (!birthDateString) return "?";
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

function formatProfile(player) {
  const realAge = calculateRealAge(player.birth.date);
  const height = player.height ? ` • ${player.height}` : "";
  return `${realAge} anos${height}`;
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

async function fetchTeamPlayers(teamId) {
  let allRawPlayers = [];
  let page = 1;

  try {
    // Busca paginação
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
      if (!data.response) break;

      allRawPlayers = [...allRawPlayers, ...data.response];

      if (page >= data.paging.total) break;
      page++;
      await delay(DELAY_MS);
    }

    // --- LÓGICA DE SELEÇÃO INTELIGENTE (O PULO DO GATO) ---
    const processedPlayers = allRawPlayers
      .map((item) => {
        // 1. Filtra estatísticas APENAS do time atual (ignora se ele jogou em outro time no mesmo ano)
        const allTeamStats = item.statistics.filter(
          (stat) => stat.team.id === teamId,
        );

        if (allTeamStats.length === 0) return null;

        // 2. ORDENAÇÃO VITAL: Coloca a competição com MAIS MINUTOS JOGADOS no topo.
        // Isso faz o script ignorar o "Campeonato Carioca" com 0 minutos e pegar o "Brasileirão" com 2000 minutos.
        allTeamStats.sort(
          (a, b) => (b.games.minutes || 0) - (a.games.minutes || 0),
        );

        // Pega a melhor estatística (a que tem mais minutos)
        const bestStat = allTeamStats[0];

        // Se a melhor estatística for 0 minutos, ele provavelmente é reserva absoluto ou base.
        const minutes = bestStat.games.minutes || 0;

        return {
          player: item.player,
          stats: bestStat,
          totalMinutes: minutes,
        };
      })
      .filter((item) => item !== null)
      .filter((item) => item.player.photo) // Tem que ter foto
      .filter((item) => item.totalMinutes > 0); // REMOVE JOGADORES COM 0 MINUTOS NA TEMPORADA INTEIRA

    // Ordenamos os jogadores do time: quem jogou mais aparece primeiro (Titulares)
    processedPlayers.sort((a, b) => b.totalMinutes - a.totalMinutes);

    // Limitamos aos Top 15 jogadores com mais minutos (Titulares + Reservas usados)
    const elitePlayers = processedPlayers.slice(0, 15).map((item) => ({
      id: item.player.id,
      name: item.player.name,
      image: item.player.photo,
      hints: [
        mapPosition(item.stats.games.position),
        item.player.nationality,
        formatProfile(item.player),
      ],
      // DADOS RICOS
      clubLogo: item.stats.team.logo,
      leagueName: item.stats.league.name, // Vai pegar "Serie A", "Libertadores", etc.
      stats: {
        rating: item.stats.games.rating
          ? String(parseFloat(item.stats.games.rating).toFixed(2))
          : "6.5", // Fallback para rating
        goals: item.stats.goals.total || 0,
        assists: item.stats.goals.assists || 0,
        matches: item.stats.games.appearences || 0,
        passAccuracy: item.stats.passes.accuracy || 0,
        dribbles: item.stats.dribbles.success || 0,
        tackles: item.stats.tackles.total || 0,
        yellowCards: item.stats.cards.yellow || 0,
      },
      funFact: "",
    }));

    return elitePlayers;
  } catch (error) {
    console.error(`❌ Erro no time ${teamId}:`, error.message);
    return [];
  }
}

async function run() {
  console.log(
    `🚀 Iniciando atualização (Temporada ${SEASON} - Lógica 'Melhor Competição')...`,
  );

  let allPlayers = [];

  for (const teamId of TEAMS) {
    console.log(`\n⚽ Processando time ${teamId}...`);
    const teamPlayers = await fetchTeamPlayers(teamId);

    if (teamPlayers.length === 0) {
      console.warn(
        `⚠️ ALERTA: Time ${teamId} retornou 0 jogadores. Verifique se o ID está correto.`,
      );
    } else {
      console.log(
        `   ✅ ${teamPlayers.length} jogadores selecionados (Top minutes).`,
      );
    }

    allPlayers = [...allPlayers, ...teamPlayers];
    console.log(`   ⏳ Aguardando delay de segurança...`);
    await delay(TEAM_DELAY_MS);
  }

  // Remove duplicados
  const uniquePlayers = Array.from(
    new Map(allPlayers.map((item) => [item.id, item])).values(),
  );

  // Embaralha
  uniquePlayers.sort(() => Math.random() - 0.5);

  const fileContent = `
// ⚠️ ARQUIVO GERADO AUTOMATICAMENTE
// DATA: ${new Date().toLocaleString()}
// TOTAL: ${uniquePlayers.length} JOGADORES

export interface PlayerStats {
  rating: string;
  goals: number;
  assists: number;
  matches: number;
  passAccuracy: number;
  dribbles: number;
  tackles: number;
  yellowCards: number;
  redCards?: number;
}

export interface Player {
  id: number;
  name: string;
  image: string;
  hints: string[]; // [Position, Nationality, Profile]
  clubLogo?: string;
  leagueName?: string;
  stats?: PlayerStats;
  funFact?: string;
}

export const PLAYERS: Player[] = ${JSON.stringify(uniquePlayers, null, 2)};
`;

  fs.writeFileSync("./src/data/players.ts", fileContent);
  console.log(
    `\n✅ SUCESSO! Base atualizada com ${uniquePlayers.length} jogadores.`,
  );
}

run();
