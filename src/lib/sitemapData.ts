import { BLOGS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const LASTMOD = "2026-09-04";

export type SitemapImage = {
  loc: string;
  title: string;
  caption: string;
};

export type SitemapPage = {
  path: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: SitemapImage[];
};

export const INDEXABLE_PAGES: SitemapPage[] = [
  {
    path: ROUTES.home,
    lastmod: LASTMOD,
    changefreq: "daily",
    priority: 1,
    images: [
      {
        loc: IMAGES.logo,
        title: `${SITE_NAME} app icon`,
        caption: `${SITE_NAME} gold-framed Android icon with three aces and the teenpattishowgame.com.pk mark.`,
      },
    ],
  },
  {
    path: ROUTES.download,
    lastmod: LASTMOD,
    changefreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: IMAGES.apk,
        title: `${SITE_NAME} APK screen`,
        caption: `Install screen used in the ${SITE_NAME} Android download guide.`,
      },
    ],
  },
  {
    path: ROUTES.deposit,
    lastmod: LASTMOD,
    changefreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: IMAGES.addMoney,
        title: `${SITE_NAME} add money screen`,
        caption: `JazzCash and EasyPaisa deposit panel inside ${SITE_NAME}.`,
      },
    ],
  },
  {
    path: ROUTES.withdraw,
    lastmod: LASTMOD,
    changefreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: IMAGES.withdraw,
        title: `${SITE_NAME} withdraw screen`,
        caption: `Wallet cash-out screen for ${SITE_NAME} JazzCash and EasyPaisa payouts.`,
      },
    ],
  },
  {
    path: ROUTES.pc,
    lastmod: LASTMOD,
    changefreq: "weekly",
    priority: 0.8,
    images: [
      {
        loc: IMAGES.pakistan,
        title: `${SITE_NAME} on a larger screen`,
        caption: `${SITE_NAME} lobby used when playing through a Windows Android emulator.`,
      },
    ],
  },
  {
    path: ROUTES.about,
    lastmod: LASTMOD,
    changefreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: IMAGES.logo,
        title: `About ${SITE_NAME}`,
        caption: `${SITE_NAME} brand mark used on the about page.`,
      },
    ],
  },
  {
    path: ROUTES.blog,
    lastmod: LASTMOD,
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    path: ROUTES.contact,
    lastmod: LASTMOD,
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: ROUTES.privacy,
    lastmod: LASTMOD,
    changefreq: "yearly",
    priority: 0.5,
  },
  {
    path: ROUTES.disclaimer,
    lastmod: LASTMOD,
    changefreq: "yearly",
    priority: 0.5,
  },
  ...BLOGS.map((post) => ({
    path: `${ROUTES.blog}/${post.slug}`,
    lastmod: post.dateModified,
    changefreq: "monthly" as const,
    priority: 0.8,
  })),
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
