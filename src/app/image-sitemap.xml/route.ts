import { INDEXABLE_PAGES, absoluteUrl, xmlEscape } from "@/lib/sitemapData";
import { SITE_ORIGIN } from "@/lib/site";

export async function GET() {
  const pages = INDEXABLE_PAGES.filter((page) => page.images?.length);
  const urls = pages
    .map((page) => {
      const images = (page.images ?? [])
        .map(
          (img) => `    <image:image>
      <image:loc>${xmlEscape(`${SITE_ORIGIN}${img.loc}`)}</image:loc>
      <image:title>${xmlEscape(img.title)}</image:title>
      <image:caption>${xmlEscape(img.caption)}</image:caption>
    </image:image>`
        )
        .join("\n");
      return `  <url>
    <loc>${xmlEscape(absoluteUrl(page.path))}</loc>
    <lastmod>${page.lastmod}</lastmod>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
