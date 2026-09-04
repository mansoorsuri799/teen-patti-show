import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ROUTES, SITE_EMAIL, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Teen Patti Show Support",
  description: "Email Teen Patti Show support for APK, wallet, or website questions. English-language contact for teenpattishowgame.com.pk.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.contact}` },
  openGraph: {
    title: "Contact Teen Patti Show Support",
    description: "Reach the Teen Patti Show site team by email.",
    url: `${SITE_ORIGIN}${ROUTES.contact}`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact Us", href: ROUTES.contact }]} />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Contact the site team</h1>
        <p className="text-lg text-gray-400 text-center mb-12">English support for the website, the APK page, and broken guides.</p>

        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Use this page for {SITE_NAME} website issues: a broken image, a wrong step on the <Link href={ROUTES.download} className="text-accent hover:underline">download guide</Link>, or a question about the <Link href={ROUTES.privacy} className="text-accent hover:underline">privacy policy</Link>. Pending wallet tickets inside the app are faster through in-app chat.
          </p>
          <div className="bg-primary rounded-xl p-6 border border-accent/30">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">Email</h2>
            <p className="text-center text-gray-400 mb-4">We read {SITE_EMAIL}</p>
            <div className="flex justify-center">
              <CtaButton href={`mailto:${SITE_EMAIL}`} icon="mail" ariaLabel={`Email ${SITE_NAME} support`}>
                {SITE_EMAIL}
              </CtaButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/" className="bg-secondary rounded-xl p-6 text-center hover:border-accent border border-transparent">
            <h3 className="text-xl font-bold mb-2 text-white">App overview</h3>
            <p className="text-gray-400">Back to the Teen Patti Show homepage</p>
          </Link>
          <Link href={ROUTES.privacy} className="bg-secondary rounded-xl p-6 text-center hover:border-accent border border-transparent">
            <h3 className="text-xl font-bold mb-2 text-white">Privacy</h3>
            <p className="text-gray-400">How this site handles messages</p>
          </Link>
          <Link href={ROUTES.about} className="bg-secondary rounded-xl p-6 text-center hover:border-accent border border-transparent">
            <h3 className="text-xl font-bold mb-2 text-white">About</h3>
            <p className="text-gray-400">Who publishes these guides</p>
          </Link>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_ORIGIN,
              contactPoint: {
                "@type": "ContactPoint",
                email: SITE_EMAIL,
                contactType: "Customer Support",
                availableLanguage: "English",
                areaServed: "PK",
              },
            },
          }),
        }}
      />
    </div>
  );
}
