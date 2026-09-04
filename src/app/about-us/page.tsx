import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FACEBOOK_PROFILE_URL } from "@/lib/appFacts";
import { IMAGES, ROUTES, SITE_HOST, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Teen Patti Show",
  description:
    "Who publishes teenpattishowgame.com.pk, what this Teen Patti Show guide covers, and how to reach the team in Pakistan.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.about}` },
  openGraph: {
    title: "About Teen Patti Show",
    description: "The team behind teenpattishowgame.com.pk and the Teen Patti Show APK guides.",
    url: `${SITE_ORIGIN}${ROUTES.about}`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.logo}`, width: 512, height: 512, alt: "Teen Patti Show logo" }],
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}${IMAGES.logo}`,
      foundingLocation: { "@type": "Country", name: "Pakistan" },
      sameAs: [FACEBOOK_PROFILE_URL],
    },
  };

  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Us", href: ROUTES.about }]} />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About this Teen Patti Show site</h1>
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={IMAGES.logo}
              alt="Teen Patti Show gold-framed logo used by teenpattishowgame.com.pk"
              width={280}
              height={280}
              className="object-contain"
              priority
            />
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                {SITE_HOST} publishes English guides for the {SITE_NAME} Android APK. We write the install path, the JazzCash deposit path, the EasyPaisa cash-out path, and a short set of blogs that people actually search — not a cluster of lookalike comparison posts.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This is a review and how-to site for Pakistani players. We do not promise income. We do not claim the app is licensed by a Pakistani regulator. We do not claim an Urdu edition of these pages.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-accent mb-4">What we publish</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>An on-domain <Link href={ROUTES.download} className="text-accent hover:underline">APK download walkthrough</Link></li>
            <li>Separate <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit</Link> and <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw</Link> articles</li>
            <li>A <Link href={ROUTES.pc} className="text-accent hover:underline">Windows emulator note</Link> for players who want a larger table</li>
            <li>Four blogs on safety, login, bonuses, and how a show works</li>
          </ul>
        </div>

        <div className="bg-secondary rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Need a page fixed?</h2>
          <p className="text-gray-300 mb-6">Site and content questions go through the contact form and support email.</p>
          <CtaButton href={ROUTES.contact} icon="arrow">Contact Us</CtaButton>
        </div>
      </div>
    </article>
  );
}
