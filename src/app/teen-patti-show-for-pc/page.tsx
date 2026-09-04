import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import CtaButton from "@/components/CtaButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teen Patti Show on Windows with an Emulator",
  description:
    "Play Teen Patti Show on a Windows PC using BlueStacks or a similar Android emulator. System needs, install order, and why the APK still matters.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.pc}` },
  openGraph: {
    title: "Teen Patti Show on Windows with an Emulator",
    description: "Run the Teen Patti Show Android APK on a PC through an emulator.",
    url: `${SITE_ORIGIN}${ROUTES.pc}`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.pakistan}`, width: 512, height: 512, alt: "Teen Patti Show lobby on a larger screen" }],
  },
};

export default function PcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Teen Patti Show on Windows with an Emulator",
    description: "Install the Teen Patti Show Android APK on a PC using an emulator.",
    image: `${SITE_ORIGIN}${IMAGES.pakistan}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}${IMAGES.logo}`, ...imageObjectLicensing },
    },
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}${ROUTES.pc}` },
  };

  return (
    <article className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "PC Version", href: ROUTES.pc }]} />
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Run Teen Patti Show on a PC without an iOS build
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        There is no separate Windows client. You install an Android emulator, then load the same APK from the <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link>. The bigger screen helps for longer Teen Patti pots. It does not change JazzCash rules.
      </p>
      <div className="flex justify-center mb-10">
        <CtaButton>DOWNLOAD NOW</CtaButton>
      </div>
      <div className="flex justify-center mb-12">
        <Image
          src={IMAGES.pakistan}
          alt="Teen Patti Show lobby prepared for a larger Windows emulator screen"
          width={420}
          height={420}
          className="object-contain rounded-xl max-w-full"
          style={{ width: "auto", height: "auto" }}
          priority
          sizes="(max-width: 768px) 280px, 420px"
        />
      </div>

      <section className="bg-secondary rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-accent mb-4">What you need on the desk</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Windows 10 or 11 with 8 GB RAM if you can spare it; 4 GB is the floor</li>
          <li>Virtualisation enabled in BIOS so BlueStacks or LDPlayer can start</li>
          <li>The Teen Patti Show APK saved from this domain, not a third-party mirror</li>
          <li>A phone nearby for JazzCash or EasyPaisa OTPs — the emulator cannot receive those SMS messages</li>
        </ul>
      </section>

      <section className="bg-secondary rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-accent mb-4">Install order that avoids a black screen</h2>
        <ol className="list-decimal pl-5 space-y-3 text-gray-300">
          <li>Install BlueStacks, LDPlayer, or another current Android emulator.</li>
          <li>Download the APK on the PC from teenpattishowgame.com.pk.</li>
          <li>Drag the file onto the emulator window, or use the emulator’s APK install button.</li>
          <li>Log in with the same number you use on the phone. Two fresh guest profiles will split the wallet.</li>
          <li>Keep one session active. An emulator plus a phone on the same account often trips an IP lock.</li>
        </ol>
      </section>

      <section className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl font-bold text-accent mb-4">When the PC path is the wrong tool</h2>
        <p className="text-gray-300">
          If you only need to add or remove PKR, stay on the phone. Wallet apps authenticate more cleanly there. Use the PC for longer tables once the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit</Link> and <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw</Link> numbers are already bound.
        </p>
      </section>
    </article>
  );
}
