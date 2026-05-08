import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    GET: async () => {
      const baseUrl = "https://psbusiness.lovable.app";
      const pages = [
        { loc: "/", priority: "1.0", changefreq: "weekly" },
        { loc: "/sobre", priority: "0.8", changefreq: "monthly" },
        { loc: "/empresas", priority: "0.8", changefreq: "monthly" },
        { loc: "/contato", priority: "0.7", changefreq: "monthly" },
      ];

      const urls = pages
        .map(
          (p) =>
            `  <url>\n    <loc>${baseUrl}${p.loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
        )
        .join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

      return new Response(sitemap, {
        headers: { "Content-Type": "application/xml" },
      });
    },
  },
});
