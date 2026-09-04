import { SITE_ORIGIN } from "@/lib/site";
import { LASTMOD } from "@/lib/sitemapData";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_ORIGIN}/index.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_ORIGIN}/image-sitemap.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
