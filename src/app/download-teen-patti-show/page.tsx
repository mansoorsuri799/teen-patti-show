import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { APP_AGGREGATE_RATING, APP_SCREENSHOTS, softwareApplicationLd } from "@/lib/appFacts";
import CtaButton from "@/components/CtaButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { APP_FACTS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Teen Patti Show APK for Android",
  description:
    "Get the Teen Patti Show APK on Android in Pakistan. Version 1.0.8, 38MB, with install steps, unknown-source settings, and a safe-file checklist.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.download}` },
  openGraph: {
    title: "Download Teen Patti Show APK for Android",
    description: "Install Teen Patti Show from teenpattishowgame.com.pk. 38MB Android APK with JazzCash-ready wallet screens.",
    url: `${SITE_ORIGIN}${ROUTES.download}`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.logo}`, width: 512, height: 512, alt: "Teen Patti Show official APK icon" }],
  },
};

export default function DownloadPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...softwareApplicationLd,
        aggregateRating: APP_AGGREGATE_RATING,
        screenshot: [...APP_SCREENSHOTS],
        downloadUrl: `${SITE_ORIGIN}${ROUTES.download}`,
      },
      {
        "@type": "HowTo",
        name: "Download and install Teen Patti Show",
        totalTime: "PT8M",
        step: [
          { "@type": "HowToStep", name: "Save the APK", text: "Tap DOWNLOAD NOW on this page and wait for the file to finish." },
          { "@type": "HowToStep", name: "Allow the browser", text: "Enable Install unknown apps for the browser you used." },
          { "@type": "HowToStep", name: "Install", text: "Open the APK from Downloads and confirm." },
          { "@type": "HowToStep", name: "Register", text: "Create an account with a number you control before adding PKR." },
        ],
      },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Download", href: ROUTES.download },
          ]}
        />
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Get the <span className="text-accent">Teen Patti Show</span> APK on your phone
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            This page is the install path for {SITE_NAME}. Softonic and APKPure copies of similar names are not this file. Save the package from teenpattishowgame.com.pk, then register before you open the shop.
          </p>
        </div>
        <div className="flex justify-center my-10">
          <CtaButton href={ROUTES.home}>DOWNLOAD NOW</CtaButton>
        </div>
        <p className="text-center text-sm text-gray-400 mb-8">
          {APP_FACTS.ratingValue} ★★★★☆ ({APP_FACTS.ratingCountLabel}) · {APP_FACTS.price} · Android · Game · v{APP_FACTS.version} · {APP_FACTS.size}
        </p>
        <div className="flex justify-center mb-12">
          <Image
            src={IMAGES.logo}
            alt="Teen Patti Show official APK icon"
            width={420}
            height={420}
            className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">File details</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800 text-white">
              <tr className="bg-secondary/50"><td className="py-4 px-6">App</td><td className="py-4 px-6">{APP_FACTS.name}</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">Version</td><td className="py-4 px-6">{APP_FACTS.version}</td></tr>
              <tr className="bg-secondary/50"><td className="py-4 px-6">Size</td><td className="py-4 px-6">{APP_FACTS.size}</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">OS</td><td className="py-4 px-6">{APP_FACTS.os}</td></tr>
              <tr className="bg-secondary/50"><td className="py-4 px-6">Updated</td><td className="py-4 px-6">{APP_FACTS.updated}</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">Price</td><td className="py-4 px-6">{APP_FACTS.price}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">Four steps that actually finish the install</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-primary rounded-lg p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold text-accent mb-3">1. Save the package from this domain</h3>
              <p className="text-gray-300">Tap DOWNLOAD NOW and stay on teenpattishowgame.com.pk until the browser shows a completed APK. A redirect to an unrelated tracker is not this site’s install path.</p>
            </div>
            <div className="bg-primary rounded-lg p-6 border-l-4 border-cta">
              <h3 className="text-xl font-bold text-cta mb-3">2. Allow only that browser</h3>
              <p className="text-gray-300">Settings → Apps → Special access → Install unknown apps. Enable the browser you used, not every app on the phone.</p>
            </div>
            <div className="bg-primary rounded-lg p-6 border-l-4 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-orange mb-3">3. Open Downloads and confirm</h3>
              <p className="text-gray-300">Tap the Teen Patti Show file, then Install. If Android warns about an unknown source, that is expected for a sideload. The icon should match the gold frame and three aces.</p>
            </div>
            <div className="bg-primary rounded-lg p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold text-accent mb-3">4. Register, then add money later</h3>
              <p className="text-gray-300">
                Create a login with your own number. When you are ready for PKR, use the <Link href={ROUTES.deposit} className="text-accent hover:underline">JazzCash deposit guide</Link>. Windows users can follow the <Link href={ROUTES.pc} className="text-accent hover:underline">emulator walkthrough</Link> after this APK downloads.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <CtaButton href={ROUTES.home}>DOWNLOAD NOW</CtaButton>
          </div>
        </div>
      </section>
    </article>
  );
}
