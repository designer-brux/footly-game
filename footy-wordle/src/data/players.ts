
// ⚠️ ARQUIVO GERADO AUTOMATICAMENTE
// DATA: 2/18/2026, 1:54:04 AM
// TOTAL: 129 JOGADORES

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

export const PLAYERS: Player[] = [
  {
    "id": 353034,
    "name": "Cuiabano",
    "image": "https://media.api-sports.io/football/players/353034.png",
    "hints": [
      "Defender",
      "Brazil",
      "23 anos • 181"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.14",
      "goals": 4,
      "assists": 1,
      "matches": 28,
      "passAccuracy": 0,
      "dribbles": 10,
      "tackles": 49,
      "yellowCards": 5
    },
    "funFact": ""
  },
  {
    "id": 474269,
    "name": "Thauan Willians",
    "image": "https://media.api-sports.io/football/players/474269.png",
    "hints": [
      "Defender",
      "Brazil",
      "21 anos • 182"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.70",
      "goals": 0,
      "assists": 1,
      "matches": 10,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 2,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 199324,
    "name": "Gabriel Barros",
    "image": "https://media.api-sports.io/football/players/199324.png",
    "hints": [
      "Forward",
      "Brazil",
      "24 anos • 182"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/119.png",
    "leagueName": "Gaúcho - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 362886,
    "name": "Zé Welinton",
    "image": "https://media.api-sports.io/football/players/362886.png",
    "hints": [
      "Defender",
      "Brazil",
      "22 anos • 170"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 30763,
    "name": "Jandrei",
    "image": "https://media.api-sports.io/football/players/30763.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "32 anos • 187"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/126.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.09",
      "goals": 0,
      "assists": 0,
      "matches": 37,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 279800,
    "name": "Vanderlan",
    "image": "https://media.api-sports.io/football/players/279800.png",
    "hints": [
      "Defender",
      "Brazil",
      "23 anos • 183"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.67",
      "goals": 0,
      "assists": 3,
      "matches": 37,
      "passAccuracy": 0,
      "dribbles": 7,
      "tackles": 25,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 403299,
    "name": "Daniel Sales",
    "image": "https://media.api-sports.io/football/players/403299.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "19 anos • 178"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 5,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 51701,
    "name": "M. Araújo",
    "image": "https://media.api-sports.io/football/players/51701.png",
    "hints": [
      "Midfielder",
      "Uruguay",
      "29 anos • 178"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/126.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.74",
      "goals": 0,
      "assists": 1,
      "matches": 20,
      "passAccuracy": 0,
      "dribbles": 21,
      "tackles": 27,
      "yellowCards": 4
    },
    "funFact": ""
  },
  {
    "id": 9849,
    "name": "Matheusinho",
    "image": "https://media.api-sports.io/football/players/9849.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "28 anos • 165 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Mineiro - 1",
    "stats": {
      "rating": "6.5",
      "goals": 1,
      "assists": 0,
      "matches": 4,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 51466,
    "name": "J. Piquerez",
    "image": "https://media.api-sports.io/football/players/51466.png",
    "hints": [
      "Defender",
      "Uruguay",
      "27 anos • 184"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.17",
      "goals": 2,
      "assists": 0,
      "matches": 17,
      "passAccuracy": 0,
      "dribbles": 8,
      "tackles": 27,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 309634,
    "name": "Gabriel Grando",
    "image": "https://media.api-sports.io/football/players/309634.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "25 anos • 181"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Gaúcho - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 80484,
    "name": "Mayk",
    "image": "https://media.api-sports.io/football/players/80484.png",
    "hints": [
      "Defender",
      "Brazil",
      "26 anos • 172"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.77",
      "goals": 0,
      "assists": 0,
      "matches": 22,
      "passAccuracy": 0,
      "dribbles": 5,
      "tackles": 8,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10387,
    "name": "Edenílson",
    "image": "https://media.api-sports.io/football/players/10387.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "36 anos • 176"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.67",
      "goals": 1,
      "assists": 1,
      "matches": 33,
      "passAccuracy": 0,
      "dribbles": 12,
      "tackles": 17,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 306706,
    "name": "A. Giay",
    "image": "https://media.api-sports.io/football/players/306706.png",
    "hints": [
      "Defender",
      "Argentina",
      "22 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.90",
      "goals": 0,
      "assists": 0,
      "matches": 10,
      "passAccuracy": 0,
      "dribbles": 4,
      "tackles": 30,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 1793,
    "name": "Luiz Adriano",
    "image": "https://media.api-sports.io/football/players/1793.png",
    "hints": [
      "Forward",
      "Brazil",
      "38 anos • 184 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/119.png",
    "leagueName": "Gaúcho - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 4,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 452,
    "name": "Fernando",
    "image": "https://media.api-sports.io/football/players/452.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "38 anos • 183"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/119.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.92",
      "goals": 1,
      "assists": 0,
      "matches": 25,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 30,
      "yellowCards": 6
    },
    "funFact": ""
  },
  {
    "id": 363323,
    "name": "Alexsander",
    "image": "https://media.api-sports.io/football/players/363323.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "22 anos • 178"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.73",
      "goals": 0,
      "assists": 1,
      "matches": 18,
      "passAccuracy": 0,
      "dribbles": 18,
      "tackles": 24,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 6260,
    "name": "M. Capasso",
    "image": "https://media.api-sports.io/football/players/6260.png",
    "hints": [
      "Defender",
      "Argentina",
      "29 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 1,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 160226,
    "name": "Gustavo Apis Pascoal de Farias",
    "image": "https://media.api-sports.io/football/players/160226.png",
    "hints": [
      "Forward",
      "Brazil",
      "26 anos • 176 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 4,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 41274,
    "name": "Aloísio Souza",
    "image": "https://media.api-sports.io/football/players/41274.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "29 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "7.10",
      "goals": 0,
      "assists": 0,
      "matches": 15,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 13,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 133910,
    "name": "Paulo Henrique",
    "image": "https://media.api-sports.io/football/players/133910.png",
    "hints": [
      "Defender",
      "Brazil",
      "29 anos • 175"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.86",
      "goals": 1,
      "assists": 0,
      "matches": 35,
      "passAccuracy": 0,
      "dribbles": 47,
      "tackles": 96,
      "yellowCards": 6
    },
    "funFact": ""
  },
  {
    "id": 9939,
    "name": "Dudu",
    "image": "https://media.api-sports.io/football/players/9939.png",
    "hints": [
      "Forward",
      "Brazil",
      "34 anos • 167"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.78",
      "goals": 0,
      "assists": 0,
      "matches": 27,
      "passAccuracy": 0,
      "dribbles": 13,
      "tackles": 5,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 9946,
    "name": "Reinaldo",
    "image": "https://media.api-sports.io/football/players/9946.png",
    "hints": [
      "Defender",
      "Brazil",
      "36 anos • 178"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.98",
      "goals": 3,
      "assists": 2,
      "matches": 30,
      "passAccuracy": 0,
      "dribbles": 27,
      "tackles": 55,
      "yellowCards": 6
    },
    "funFact": ""
  },
  {
    "id": 10163,
    "name": "Renê",
    "image": "https://media.api-sports.io/football/players/10163.png",
    "hints": [
      "Defender",
      "Brazil",
      "33 anos • 174"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Copa Do Brasil",
    "stats": {
      "rating": "7.04",
      "goals": 1,
      "assists": 1,
      "matches": 29,
      "passAccuracy": 48,
      "dribbles": 18,
      "tackles": 50,
      "yellowCards": 5
    },
    "funFact": ""
  },
  {
    "id": 6725,
    "name": "F. Vera",
    "image": "https://media.api-sports.io/football/players/6725.png",
    "hints": [
      "Midfielder",
      "Argentina",
      "25 anos • 179"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.96",
      "goals": 2,
      "assists": 0,
      "matches": 20,
      "passAccuracy": 0,
      "dribbles": 13,
      "tackles": 31,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 10067,
    "name": "Alex Santana",
    "image": "https://media.api-sports.io/football/players/10067.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "30 anos • 182"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.38",
      "goals": 0,
      "assists": 0,
      "matches": 12,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 2,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 1771,
    "name": "Ayrton Lucas",
    "image": "https://media.api-sports.io/football/players/1771.png",
    "hints": [
      "Defender",
      "Brazil",
      "28 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.98",
      "goals": 3,
      "assists": 3,
      "matches": 32,
      "passAccuracy": 0,
      "dribbles": 31,
      "tackles": 45,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 306210,
    "name": "Matheus Cunha",
    "image": "https://media.api-sports.io/football/players/306210.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "24 anos • 181"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Copa Do Brasil",
    "stats": {
      "rating": "7.07",
      "goals": 0,
      "assists": 0,
      "matches": 9,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 191872,
    "name": "Carlos Alberto",
    "image": "https://media.api-sports.io/football/players/191872.png",
    "hints": [
      "Forward",
      "Brazil",
      "23 anos • 179"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.66",
      "goals": 1,
      "assists": 0,
      "matches": 7,
      "passAccuracy": 0,
      "dribbles": 4,
      "tackles": 3,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 237160,
    "name": "S. Ocampos",
    "image": "https://media.api-sports.io/football/players/237160.png",
    "hints": [
      "Defender",
      "Paraguay",
      "24 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 415115,
    "name": "Caio Maia",
    "image": "https://media.api-sports.io/football/players/415115.png",
    "hints": [
      "Forward",
      "Brazil",
      "20 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.60",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 411433,
    "name": "Zé Guilherme",
    "image": "https://media.api-sports.io/football/players/411433.png",
    "hints": [
      "Defender",
      "Brazil",
      "20 anos • 181"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.85",
      "goals": 0,
      "assists": 0,
      "matches": 7,
      "passAccuracy": 0,
      "dribbles": 6,
      "tackles": 11,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10237,
    "name": "Manoel",
    "image": "https://media.api-sports.io/football/players/10237.png",
    "hints": [
      "Defender",
      "Brazil",
      "35 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.71",
      "goals": 0,
      "assists": 0,
      "matches": 25,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 13,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 415089,
    "name": "Gabriel Moscardo",
    "image": "https://media.api-sports.io/football/players/415089.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "20 anos • 185"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.60",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 4,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10203,
    "name": "Gustavo Campanharo",
    "image": "https://media.api-sports.io/football/players/10203.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "33 anos • 178 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/119.png",
    "leagueName": "Gaúcho - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 422763,
    "name": "Wesley",
    "image": "https://media.api-sports.io/football/players/422763.png",
    "hints": [
      "Defender",
      "Brazil",
      "22 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "CONMEBOL Libertadores",
    "stats": {
      "rating": "6.20",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 1,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 419936,
    "name": "Nathan Fernandes",
    "image": "https://media.api-sports.io/football/players/419936.png",
    "hints": [
      "Forward",
      "Brazil",
      "21 anos • 193"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.61",
      "goals": 0,
      "assists": 0,
      "matches": 25,
      "passAccuracy": 0,
      "dribbles": 18,
      "tackles": 8,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 10229,
    "name": "Cássio",
    "image": "https://media.api-sports.io/football/players/10229.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "38 anos • 195"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.71",
      "goals": 0,
      "assists": 0,
      "matches": 10,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 860,
    "name": "Alex Sandro",
    "image": "https://media.api-sports.io/football/players/860.png",
    "hints": [
      "Defender",
      "Brazil",
      "35 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.30",
      "goals": 0,
      "assists": 1,
      "matches": 8,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 12,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 299148,
    "name": "Felipe Amaral",
    "image": "https://media.api-sports.io/football/players/299148.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "22 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.72",
      "goals": 0,
      "assists": 0,
      "matches": 35,
      "passAccuracy": 0,
      "dribbles": 6,
      "tackles": 17,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 9911,
    "name": "Lucas Esteves",
    "image": "https://media.api-sports.io/football/players/9911.png",
    "hints": [
      "Defender",
      "Brazil",
      "25 anos • 170"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.07",
      "goals": 1,
      "assists": 4,
      "matches": 35,
      "passAccuracy": 0,
      "dribbles": 21,
      "tackles": 60,
      "yellowCards": 10
    },
    "funFact": ""
  },
  {
    "id": 415160,
    "name": "Paulinho",
    "image": "https://media.api-sports.io/football/players/415160.png",
    "hints": [
      "Defender",
      "Brazil",
      "21 anos • 183"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.70",
      "goals": 0,
      "assists": 0,
      "matches": 9,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 1,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 36784,
    "name": "D. Palacios",
    "image": "https://media.api-sports.io/football/players/36784.png",
    "hints": [
      "Defender",
      "Ecuador",
      "26 anos • 169"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.90",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 9916,
    "name": "Marcos Rocha",
    "image": "https://media.api-sports.io/football/players/9916.png",
    "hints": [
      "Defender",
      "Brazil",
      "37 anos • 176"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.06",
      "goals": 0,
      "assists": 2,
      "matches": 28,
      "passAccuracy": 0,
      "dribbles": 8,
      "tackles": 55,
      "yellowCards": 5
    },
    "funFact": ""
  },
  {
    "id": 9954,
    "name": "Rodrigo Nestor",
    "image": "https://media.api-sports.io/football/players/9954.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "25 anos • 175"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/126.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.78",
      "goals": 0,
      "assists": 2,
      "matches": 34,
      "passAccuracy": 0,
      "dribbles": 7,
      "tackles": 16,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 157615,
    "name": "Dalberson",
    "image": "https://media.api-sports.io/football/players/157615.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "29 anos • 191"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.91",
      "goals": 0,
      "assists": 0,
      "matches": 15,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 352387,
    "name": "Zé Vitor",
    "image": "https://media.api-sports.io/football/players/352387.png",
    "hints": [
      "Defender",
      "Brazil",
      "23 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10388,
    "name": "Patrick",
    "image": "https://media.api-sports.io/football/players/10388.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "33 anos • 176"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Mineiro - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 3,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 415631,
    "name": "Fabiano",
    "image": "https://media.api-sports.io/football/players/415631.png",
    "hints": [
      "Forward",
      "Brazil",
      "19 anos • 183"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "CONMEBOL Libertadores",
    "stats": {
      "rating": "6.20",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 449253,
    "name": "João Victor Cunha",
    "image": "https://media.api-sports.io/football/players/449253.png",
    "hints": [
      "Defender",
      "Brazil",
      "19 anos • 187"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.70",
      "goals": 0,
      "assists": 0,
      "matches": 3,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10081,
    "name": "Rafael",
    "image": "https://media.api-sports.io/football/players/10081.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "36 anos • 192"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/126.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.07",
      "goals": 0,
      "assists": 0,
      "matches": 30,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 9880,
    "name": "J. Cazares",
    "image": "https://media.api-sports.io/football/players/9880.png",
    "hints": [
      "Midfielder",
      "Ecuador",
      "33 anos • 170"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/128.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.86",
      "goals": 1,
      "assists": 0,
      "matches": 11,
      "passAccuracy": 0,
      "dribbles": 2,
      "tackles": 3,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 2513,
    "name": "M. Rojas",
    "image": "https://media.api-sports.io/football/players/2513.png",
    "hints": [
      "Midfielder",
      "Paraguay",
      "30 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.96",
      "goals": 0,
      "assists": 1,
      "matches": 9,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 6,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 10080,
    "name": "Fábio",
    "image": "https://media.api-sports.io/football/players/10080.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "45 anos • 189"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.15",
      "goals": 0,
      "assists": 0,
      "matches": 37,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 2,
      "yellowCards": 4
    },
    "funFact": ""
  },
  {
    "id": 454614,
    "name": "Yago Kauã",
    "image": "https://media.api-sports.io/football/players/454614.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "20 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.70",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10083,
    "name": "Murilo",
    "image": "https://media.api-sports.io/football/players/10083.png",
    "hints": [
      "Defender",
      "Brazil",
      "28 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.06",
      "goals": 1,
      "assists": 0,
      "matches": 27,
      "passAccuracy": 0,
      "dribbles": 7,
      "tackles": 37,
      "yellowCards": 7
    },
    "funFact": ""
  },
  {
    "id": 9989,
    "name": "Felipe Jonatan",
    "image": "https://media.api-sports.io/football/players/9989.png",
    "hints": [
      "Defender",
      "Brazil",
      "28 anos • 176"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/128.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.89",
      "goals": 0,
      "assists": 2,
      "matches": 13,
      "passAccuracy": 0,
      "dribbles": 6,
      "tackles": 13,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 280245,
    "name": "Martinelli",
    "image": "https://media.api-sports.io/football/players/280245.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "24 anos • 177"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.78",
      "goals": 1,
      "assists": 1,
      "matches": 35,
      "passAccuracy": 43,
      "dribbles": 23,
      "tackles": 42,
      "yellowCards": 9
    },
    "funFact": ""
  },
  {
    "id": 311446,
    "name": "Thauan Lara",
    "image": "https://media.api-sports.io/football/players/311446.png",
    "hints": [
      "Defender",
      "Brazil",
      "22 anos • 176"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/119.png",
    "leagueName": "Gaúcho - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10085,
    "name": "Cacá",
    "image": "https://media.api-sports.io/football/players/10085.png",
    "hints": [
      "Defender",
      "Brazil",
      "26 anos • 187"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.02",
      "goals": 4,
      "assists": 1,
      "matches": 34,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 29,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 10017,
    "name": "Ignacio",
    "image": "https://media.api-sports.io/football/players/10017.png",
    "hints": [
      "Defender",
      "Brazil",
      "29 anos • 184"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.92",
      "goals": 0,
      "assists": 0,
      "matches": 8,
      "passAccuracy": 42,
      "dribbles": 1,
      "tackles": 11,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10234,
    "name": "Lucas Piton",
    "image": "https://media.api-sports.io/football/players/10234.png",
    "hints": [
      "Defender",
      "Brazil",
      "25 anos • 175"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.94",
      "goals": 1,
      "assists": 5,
      "matches": 34,
      "passAccuracy": 0,
      "dribbles": 28,
      "tackles": 64,
      "yellowCards": 4
    },
    "funFact": ""
  },
  {
    "id": 123759,
    "name": "Hugo Souza",
    "image": "https://media.api-sports.io/football/players/123759.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "27 anos • 199"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.19",
      "goals": 0,
      "assists": 0,
      "matches": 22,
      "passAccuracy": 0,
      "dribbles": 2,
      "tackles": 0,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 9905,
    "name": "Diogo Barbosa",
    "image": "https://media.api-sports.io/football/players/9905.png",
    "hints": [
      "Defender",
      "Brazil",
      "33 anos • 179"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.83",
      "goals": 0,
      "assists": 0,
      "matches": 29,
      "passAccuracy": 0,
      "dribbles": 15,
      "tackles": 37,
      "yellowCards": 6
    },
    "funFact": ""
  },
  {
    "id": 408347,
    "name": "Rubens",
    "image": "https://media.api-sports.io/football/players/408347.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "22 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Gaúcho - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 3,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 266019,
    "name": "Diegão",
    "image": "https://media.api-sports.io/football/players/266019.png",
    "hints": [
      "Defender",
      "Brazil",
      "22 anos • 182 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 197533,
    "name": "Praxedes",
    "image": "https://media.api-sports.io/football/players/197533.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "24 anos • 185"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 1,
      "assists": 0,
      "matches": 7,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 2466,
    "name": "W. Kannemann",
    "image": "https://media.api-sports.io/football/players/2466.png",
    "hints": [
      "Defender",
      "Argentina",
      "34 anos • 185"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.78",
      "goals": 0,
      "assists": 2,
      "matches": 15,
      "passAccuracy": 0,
      "dribbles": 6,
      "tackles": 18,
      "yellowCards": 6
    },
    "funFact": ""
  },
  {
    "id": 195499,
    "name": "Matheus Donelli",
    "image": "https://media.api-sports.io/football/players/195499.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "23 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.04",
      "goals": 0,
      "assists": 0,
      "matches": 32,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 51426,
    "name": "J. Rodríguez",
    "image": "https://media.api-sports.io/football/players/51426.png",
    "hints": [
      "Defender",
      "Uruguay",
      "28 anos • 183"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.86",
      "goals": 1,
      "assists": 2,
      "matches": 22,
      "passAccuracy": 0,
      "dribbles": 5,
      "tackles": 20,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 30524,
    "name": "M. Lemos",
    "image": "https://media.api-sports.io/football/players/30524.png",
    "hints": [
      "Defender",
      "Uruguay",
      "30 anos • 187"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.81",
      "goals": 0,
      "assists": 0,
      "matches": 19,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 3,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 305829,
    "name": "Rodrigo",
    "image": "https://media.api-sports.io/football/players/305829.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "23 anos • 176 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 180386,
    "name": "M. Segovia",
    "image": "https://media.api-sports.io/football/players/180386.png",
    "hints": [
      "Forward",
      "Paraguay",
      "23 anos • 167"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 3,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 340067,
    "name": "Cleiton",
    "image": "https://media.api-sports.io/football/players/340067.png",
    "hints": [
      "Defender",
      "Brazil",
      "22 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.20",
      "goals": 0,
      "assists": 0,
      "matches": 27,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 2,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 415049,
    "name": "Gabriel Carvalho",
    "image": "https://media.api-sports.io/football/players/415049.png",
    "hints": [
      "Forward",
      "Brazil",
      "18 anos • 168"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/119.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.93",
      "goals": 1,
      "assists": 3,
      "matches": 35,
      "passAccuracy": 0,
      "dribbles": 30,
      "tackles": 27,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 63964,
    "name": "F. Torres",
    "image": "https://media.api-sports.io/football/players/63964.png",
    "hints": [
      "Defender",
      "Ecuador",
      "29 anos • 187"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.73",
      "goals": 0,
      "assists": 0,
      "matches": 24,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 22,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 9936,
    "name": "Willian",
    "image": "https://media.api-sports.io/football/players/9936.png",
    "hints": [
      "Forward",
      "Brazil",
      "39 anos • 171"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/128.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.68",
      "goals": 5,
      "assists": 1,
      "matches": 29,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 10,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 349001,
    "name": "Wesley",
    "image": "https://media.api-sports.io/football/players/349001.png",
    "hints": [
      "Defender",
      "Brazil",
      "22 anos • 173"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.06",
      "goals": 0,
      "assists": 2,
      "matches": 31,
      "passAccuracy": 0,
      "dribbles": 28,
      "tackles": 69,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 51587,
    "name": "F. Labandeira",
    "image": "https://media.api-sports.io/football/players/51587.png",
    "hints": [
      "Forward",
      "Uruguay",
      "29 anos • 173"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.79",
      "goals": 4,
      "assists": 2,
      "matches": 25,
      "passAccuracy": 0,
      "dribbles": 5,
      "tackles": 16,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 2502,
    "name": "G. Gómez",
    "image": "https://media.api-sports.io/football/players/2502.png",
    "hints": [
      "Defender",
      "Paraguay",
      "32 anos • 185"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.13",
      "goals": 1,
      "assists": 2,
      "matches": 27,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 40,
      "yellowCards": 9
    },
    "funFact": ""
  },
  {
    "id": 345756,
    "name": "M. Terceros",
    "image": "https://media.api-sports.io/football/players/345756.png",
    "hints": [
      "Midfielder",
      "Bolivia",
      "21 anos • 177"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/128.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.42",
      "goals": 0,
      "assists": 0,
      "matches": 5,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 987,
    "name": "Paulinho",
    "image": "https://media.api-sports.io/football/players/987.png",
    "hints": [
      "Forward",
      "Brazil",
      "25 anos • 177"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Mineiro - 1",
    "stats": {
      "rating": "6.5",
      "goals": 2,
      "assists": 0,
      "matches": 11,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 9874,
    "name": "Guga",
    "image": "https://media.api-sports.io/football/players/9874.png",
    "hints": [
      "Defender",
      "Brazil",
      "27 anos • 173"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.78",
      "goals": 0,
      "assists": 1,
      "matches": 34,
      "passAccuracy": 0,
      "dribbles": 2,
      "tackles": 10,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 195109,
    "name": "Patrick de Paula",
    "image": "https://media.api-sports.io/football/players/195109.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "26 anos • 178"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "Copa Do Brasil",
    "stats": {
      "rating": "7.00",
      "goals": 0,
      "assists": 0,
      "matches": 3,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 1,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 9458,
    "name": "Léo Ortiz",
    "image": "https://media.api-sports.io/football/players/9458.png",
    "hints": [
      "Defender",
      "Brazil",
      "30 anos • 185"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.03",
      "goals": 1,
      "assists": 2,
      "matches": 34,
      "passAccuracy": 0,
      "dribbles": 7,
      "tackles": 32,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 392104,
    "name": "Arthur Sousa",
    "image": "https://media.api-sports.io/football/players/392104.png",
    "hints": [
      "Forward",
      "Brazil",
      "22 anos • 184"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.44",
      "goals": 0,
      "assists": 0,
      "matches": 11,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 142576,
    "name": "Pedro Barcelos",
    "image": "https://media.api-sports.io/football/players/142576.png",
    "hints": [
      "Defender",
      "Brazil",
      "30 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.90",
      "goals": 0,
      "assists": 0,
      "matches": 13,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 1,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 311275,
    "name": "Gabriel Delfim",
    "image": "https://media.api-sports.io/football/players/311275.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "23 anos • 189"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.90",
      "goals": 0,
      "assists": 0,
      "matches": 17,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 9891,
    "name": "D. Terans",
    "image": "https://media.api-sports.io/football/players/9891.png",
    "hints": [
      "Midfielder",
      "Uruguay",
      "31 anos • 172"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.66",
      "goals": 0,
      "assists": 0,
      "matches": 21,
      "passAccuracy": 0,
      "dribbles": 4,
      "tackles": 6,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 2410,
    "name": "Weverton",
    "image": "https://media.api-sports.io/football/players/2410.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "38 anos • 189"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.27",
      "goals": 0,
      "assists": 1,
      "matches": 38,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 1,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 238357,
    "name": "Kayque",
    "image": "https://media.api-sports.io/football/players/238357.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "25 anos • 175 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 352376,
    "name": "Rodriguinho",
    "image": "https://media.api-sports.io/football/players/352376.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "22 anos • 171"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "7.25",
      "goals": 4,
      "assists": 2,
      "matches": 25,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 20,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 353394,
    "name": "Janderson",
    "image": "https://media.api-sports.io/football/players/353394.png",
    "hints": [
      "Forward",
      "Brazil",
      "26 anos • 186"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "CONMEBOL Libertadores",
    "stats": {
      "rating": "6.47",
      "goals": 0,
      "assists": 0,
      "matches": 3,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 1262,
    "name": "Otávio",
    "image": "https://media.api-sports.io/football/players/1262.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "31 anos • 176"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.88",
      "goals": 0,
      "assists": 0,
      "matches": 27,
      "passAccuracy": 42,
      "dribbles": 10,
      "tackles": 54,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 286962,
    "name": "Lucas Freitas",
    "image": "https://media.api-sports.io/football/players/286962.png",
    "hints": [
      "Defender",
      "Brazil",
      "25 anos • 184"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.78",
      "goals": 0,
      "assists": 0,
      "matches": 30,
      "passAccuracy": 0,
      "dribbles": 2,
      "tackles": 9,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 415163,
    "name": "Kauã",
    "image": "https://media.api-sports.io/football/players/415163.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "21 anos • 184"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.30",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 304867,
    "name": "Gustavo Martins",
    "image": "https://media.api-sports.io/football/players/304867.png",
    "hints": [
      "Defender",
      "Brazil",
      "23 anos • 191"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.69",
      "goals": 2,
      "assists": 0,
      "matches": 19,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 23,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 36171,
    "name": "F. Elizari",
    "image": "https://media.api-sports.io/football/players/36171.png",
    "hints": [
      "Midfielder",
      "Argentina",
      "34 anos • 173"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/125.png",
    "leagueName": "Serie B",
    "stats": {
      "rating": "6.96",
      "goals": 2,
      "assists": 2,
      "matches": 19,
      "passAccuracy": 0,
      "dribbles": 9,
      "tackles": 6,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 109559,
    "name": "Serginho",
    "image": "https://media.api-sports.io/football/players/109559.png",
    "hints": [
      "Forward",
      "Brazil",
      "30 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 3,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 197017,
    "name": "Matheus Mendes",
    "image": "https://media.api-sports.io/football/players/197017.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "26 anos • 190"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.14",
      "goals": 0,
      "assists": 0,
      "matches": 13,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 152858,
    "name": "Jhonata Robert",
    "image": "https://media.api-sports.io/football/players/152858.png",
    "hints": [
      "Forward",
      "Brazil",
      "26 anos • 179"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Gaúcho - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 13572,
    "name": "G. Fuentes",
    "image": "https://media.api-sports.io/football/players/13572.png",
    "hints": [
      "Defender",
      "Colombia",
      "29 anos • 181"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.62",
      "goals": 0,
      "assists": 0,
      "matches": 6,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 4,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 403307,
    "name": "Julião",
    "image": "https://media.api-sports.io/football/players/403307.png",
    "hints": [
      "Defender",
      "Brazil",
      "22 anos • 178 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 2,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 50532,
    "name": "Lima",
    "image": "https://media.api-sports.io/football/players/50532.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "29 anos • 181"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.83",
      "goals": 4,
      "assists": 1,
      "matches": 31,
      "passAccuracy": 0,
      "dribbles": 24,
      "tackles": 39,
      "yellowCards": 6
    },
    "funFact": ""
  },
  {
    "id": 30443,
    "name": "Rafael Cabral",
    "image": "https://media.api-sports.io/football/players/30443.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "35 anos • 186"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/130.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.70",
      "goals": 0,
      "assists": 0,
      "matches": 21,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 41180,
    "name": "Messias",
    "image": "https://media.api-sports.io/football/players/41180.png",
    "hints": [
      "Defender",
      "Brazil",
      "31 anos • 190"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/128.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.70",
      "goals": 0,
      "assists": 0,
      "matches": 15,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 96,
    "name": "Jemerson",
    "image": "https://media.api-sports.io/football/players/96.png",
    "hints": [
      "Defender",
      "Brazil",
      "33 anos • 184"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Mineiro - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 11,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 5
    },
    "funFact": ""
  },
  {
    "id": 22231,
    "name": "Thiago Maia",
    "image": "https://media.api-sports.io/football/players/22231.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "28 anos • 179"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 50081,
    "name": "David Braz",
    "image": "https://media.api-sports.io/football/players/50081.png",
    "hints": [
      "Defender",
      "Brazil",
      "38 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.86",
      "goals": 0,
      "assists": 0,
      "matches": 22,
      "passAccuracy": 0,
      "dribbles": 4,
      "tackles": 13,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 12797,
    "name": "Alex Teixeira",
    "image": "https://media.api-sports.io/football/players/12797.png",
    "hints": [
      "Forward",
      "Brazil",
      "36 anos • 173"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.01",
      "goals": 1,
      "assists": 1,
      "matches": 7,
      "passAccuracy": 0,
      "dribbles": 4,
      "tackles": 2,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 9958,
    "name": "Tchê Tchê",
    "image": "https://media.api-sports.io/football/players/9958.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "33 anos • 176"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "Carioca - 1",
    "stats": {
      "rating": "6.80",
      "goals": 0,
      "assists": 0,
      "matches": 34,
      "passAccuracy": 0,
      "dribbles": 10,
      "tackles": 16,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 10124,
    "name": "Léo Pereira",
    "image": "https://media.api-sports.io/football/players/10124.png",
    "hints": [
      "Defender",
      "Brazil",
      "30 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.94",
      "goals": 0,
      "assists": 0,
      "matches": 32,
      "passAccuracy": 40,
      "dribbles": 6,
      "tackles": 31,
      "yellowCards": 5
    },
    "funFact": ""
  },
  {
    "id": 10432,
    "name": "Júnior Santos",
    "image": "https://media.api-sports.io/football/players/10432.png",
    "hints": [
      "Forward",
      "Brazil",
      "31 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.90",
      "goals": 4,
      "assists": 1,
      "matches": 25,
      "passAccuracy": 0,
      "dribbles": 26,
      "tackles": 12,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 41169,
    "name": "Léo Jardim",
    "image": "https://media.api-sports.io/football/players/41169.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "30 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.17",
      "goals": 0,
      "assists": 0,
      "matches": 38,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10225,
    "name": "João Victor",
    "image": "https://media.api-sports.io/football/players/10225.png",
    "hints": [
      "Defender",
      "Brazil",
      "27 anos • 187"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.87",
      "goals": 1,
      "assists": 1,
      "matches": 28,
      "passAccuracy": 0,
      "dribbles": 4,
      "tackles": 33,
      "yellowCards": 5
    },
    "funFact": ""
  },
  {
    "id": 10379,
    "name": "Bruno Fuchs",
    "image": "https://media.api-sports.io/football/players/10379.png",
    "hints": [
      "Defender",
      "Brazil",
      "26 anos • 190"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.02",
      "goals": 0,
      "assists": 1,
      "matches": 31,
      "passAccuracy": 52,
      "dribbles": 8,
      "tackles": 43,
      "yellowCards": 7
    },
    "funFact": ""
  },
  {
    "id": 10267,
    "name": "Samuel Xavier",
    "image": "https://media.api-sports.io/football/players/10267.png",
    "hints": [
      "Defender",
      "Brazil",
      "35 anos • 167"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.99",
      "goals": 0,
      "assists": 2,
      "matches": 32,
      "passAccuracy": 40,
      "dribbles": 9,
      "tackles": 52,
      "yellowCards": 4
    },
    "funFact": ""
  },
  {
    "id": 10372,
    "name": "Marcelo Lomba",
    "image": "https://media.api-sports.io/football/players/10372.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "39 anos • 189"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "7.10",
      "goals": 0,
      "assists": 0,
      "matches": 13,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 80534,
    "name": "Caetano",
    "image": "https://media.api-sports.io/football/players/80534.png",
    "hints": [
      "Defender",
      "Brazil",
      "26 anos • 182"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/131.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.71",
      "goals": 0,
      "assists": 0,
      "matches": 9,
      "passAccuracy": 0,
      "dribbles": 2,
      "tackles": 7,
      "yellowCards": 2
    },
    "funFact": ""
  },
  {
    "id": 9907,
    "name": "Victor Luís",
    "image": "https://media.api-sports.io/football/players/9907.png",
    "hints": [
      "Defender",
      "Brazil",
      "32 anos • 180"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/133.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.13",
      "goals": 1,
      "assists": 1,
      "matches": 29,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 14,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 9566,
    "name": "Adryelson",
    "image": "https://media.api-sports.io/football/players/9566.png",
    "hints": [
      "Defender",
      "Brazil",
      "27 anos • 183 cm"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.21",
      "goals": 1,
      "assists": 0,
      "matches": 7,
      "passAccuracy": 52,
      "dribbles": 0,
      "tackles": 4,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 11756,
    "name": "A. Rossi",
    "image": "https://media.api-sports.io/football/players/11756.png",
    "hints": [
      "Goalkeeper",
      "Argentina",
      "30 anos • 193"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/127.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.01",
      "goals": 0,
      "assists": 0,
      "matches": 35,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 1,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 195111,
    "name": "Gabriel Menino",
    "image": "https://media.api-sports.io/football/players/195111.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "25 anos • 177"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/121.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.91",
      "goals": 1,
      "assists": 0,
      "matches": 27,
      "passAccuracy": 0,
      "dribbles": 11,
      "tackles": 28,
      "yellowCards": 7
    },
    "funFact": ""
  },
  {
    "id": 9340,
    "name": "Sabino",
    "image": "https://media.api-sports.io/football/players/9340.png",
    "hints": [
      "Defender",
      "Brazil",
      "29 anos • 184"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/126.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "7.02",
      "goals": 0,
      "assists": 0,
      "matches": 35,
      "passAccuracy": 45,
      "dribbles": 3,
      "tackles": 19,
      "yellowCards": 3
    },
    "funFact": ""
  },
  {
    "id": 5981,
    "name": "C. Pavón",
    "image": "https://media.api-sports.io/football/players/5981.png",
    "hints": [
      "Forward",
      "Argentina",
      "30 anos • 167"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Mineiro - 1",
    "stats": {
      "rating": "6.5",
      "goals": 0,
      "assists": 0,
      "matches": 4,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 0,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 278337,
    "name": "Marcelinho",
    "image": "https://media.api-sports.io/football/players/278337.png",
    "hints": [
      "Forward",
      "Brazil",
      "23 anos"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/128.png",
    "leagueName": "Paulista - A1",
    "stats": {
      "rating": "6.56",
      "goals": 0,
      "assists": 0,
      "matches": 12,
      "passAccuracy": 0,
      "dribbles": 3,
      "tackles": 3,
      "yellowCards": 1
    },
    "funFact": ""
  },
  {
    "id": 9978,
    "name": "Everson",
    "image": "https://media.api-sports.io/football/players/9978.png",
    "hints": [
      "Goalkeeper",
      "Brazil",
      "35 anos • 192"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/1062.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.89",
      "goals": 0,
      "assists": 0,
      "matches": 24,
      "passAccuracy": 0,
      "dribbles": 0,
      "tackles": 1,
      "yellowCards": 6
    },
    "funFact": ""
  },
  {
    "id": 1260,
    "name": "Pablo",
    "image": "https://media.api-sports.io/football/players/1260.png",
    "hints": [
      "Defender",
      "Brazil",
      "34 anos • 188"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/120.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.70",
      "goals": 0,
      "assists": 0,
      "matches": 1,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 1,
      "yellowCards": 0
    },
    "funFact": ""
  },
  {
    "id": 10396,
    "name": "Nonato",
    "image": "https://media.api-sports.io/football/players/10396.png",
    "hints": [
      "Midfielder",
      "Brazil",
      "27 anos • 174"
    ],
    "clubLogo": "https://media.api-sports.io/football/teams/124.png",
    "leagueName": "Serie A",
    "stats": {
      "rating": "6.66",
      "goals": 0,
      "assists": 1,
      "matches": 10,
      "passAccuracy": 0,
      "dribbles": 1,
      "tackles": 15,
      "yellowCards": 1
    },
    "funFact": ""
  }
];
