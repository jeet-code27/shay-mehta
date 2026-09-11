import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "*",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot-Extended",
          "Google-Extended",
          "cohere-ai",
          "OAI-SearchBot",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://shaymehta.com/sitemap.xml",
    host: "https://shaymehta.com",
  }
}
