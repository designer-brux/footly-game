import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Permite todos os robôs
      allow: "/", // Permite ler tudo
      disallow: "/private/", // (Opcional) Bloqueia pastas privadas se tiver
    },
    sitemap: "https://www.footlygame.com/sitemap.xml", // Aponta o caminho do mapa
  };
}
