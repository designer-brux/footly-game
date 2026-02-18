import { MetadataRoute } from "next";
import { PLAYERS } from "@/data/players";
import { generateSlug } from "@/lib/gameLogic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.footlygame.com";

  // 1. Páginas Estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily", // O jogo muda todo dia
      priority: 1.0, // A página mais importante
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily", // O blog recebe posts novos todo dia
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // 2. Páginas Dinâmicas dos Jogadores
  const playerPages: MetadataRoute.Sitemap = PLAYERS.map((player) => ({
    url: `${baseUrl}/blog/${generateSlug(player.name)}`,
    lastModified: new Date(), // Idealmente seria a data de atualização do DB, mas hoje serve
    changeFrequency: "weekly",
    priority: 0.7, // Alta relevância para o AdSense (Artigos)
  }));

  return [...staticPages, ...playerPages];
}
