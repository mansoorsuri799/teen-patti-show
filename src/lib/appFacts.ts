import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import {
  APP_FACTS,
  APP_DOWNLOAD_URL,
  FACEBOOK_PROFILE_URL,
  IMAGES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

export { APP_DOWNLOAD_URL, FACEBOOK_PROFILE_URL };

export const APP_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: APP_FACTS.ratingValue,
  ratingCount: APP_FACTS.ratingCount,
  bestRating: "5",
  worstRating: "1",
} as const;

export const ORGANIZATION_SAME_AS = [FACEBOOK_PROFILE_URL] as const;

export const APP_SCREENSHOTS = [
  `${SITE_ORIGIN}${IMAGES.logo}`,
  `${SITE_ORIGIN}${IMAGES.apk}`,
  `${SITE_ORIGIN}${IMAGES.bonuses}`,
  `${SITE_ORIGIN}${IMAGES.addMoney}`,
] as const;

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}${IMAGES.logo}`,
  description:
    "Teen Patti Show is a Pakistani Android card lobby for Teen Patti, Rummy, Dragon vs Tiger, and JazzCash or EasyPaisa cash-outs.",
  sameAs: [...ORGANIZATION_SAME_AS],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE_EMAIL,
    contactType: "Customer Support",
    areaServed: "PK",
    availableLanguage: "English",
  },
};

export const softwareApplicationLd = {
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  operatingSystem: APP_FACTS.os,
  applicationCategory: "GameApplication",
  image: `${SITE_ORIGIN}${IMAGES.logo}`,
  logo: `${SITE_ORIGIN}${IMAGES.logo}`,
  aggregateRating: APP_AGGREGATE_RATING,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
  },
  downloadUrl: APP_DOWNLOAD_URL,
  softwareVersion: APP_FACTS.version,
  fileSize: APP_FACTS.size,
  description:
    "Teen Patti Show is an Android card-game APK for Pakistan with Teen Patti tables, other lobby games, and JazzCash or EasyPaisa wallet flows.",
  screenshot: [...APP_SCREENSHOTS],
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
};

export const logoImageObject = {
  "@type": "ImageObject",
  url: `${SITE_ORIGIN}${IMAGES.logo}`,
  contentUrl: `${SITE_ORIGIN}${IMAGES.logo}`,
  width: 512,
  height: 512,
  ...imageObjectLicensing,
} as const;
