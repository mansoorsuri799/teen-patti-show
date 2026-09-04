import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ROUTES, SITE_HOST, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Teen Patti Show website disclaimer: informational guides, real-money risk, and no income guarantee.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.disclaimer}` },
  openGraph: {
    title: "Disclaimer | Teen Patti Show",
    description: "Legal notice for teenpattishowgame.com.pk.",
    url: `${SITE_ORIGIN}${ROUTES.disclaimer}`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Disclaimer", href: ROUTES.disclaimer }]} />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Disclaimer</h1>
        <div className="bg-secondary rounded-2xl p-8 md:p-12 space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            {SITE_HOST} publishes how-to and review copy about {SITE_NAME}. The pages are for information. They are not a licence, a broker, or a promise that you will leave a table with more PKR than you added.
          </p>
          <section className="bg-primary rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Real-money play</h2>
            <p>
              Teen Patti Show tables can use real money. You can lose the amount you deposit. Online card play sits in a legal grey area in Pakistan. Check the rules that apply to you before you install the APK or add a wallet.
            </p>
          </section>
          <section className="bg-primary rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">No earnings guarantee</h2>
            <p>
              Welcome bonuses, rebates, and referral cuts are described as they appear in the lobby. They are not a wage. Wagering can delay a cash-out. We will not invent “daily income” figures.
            </p>
          </section>
          <section className="bg-primary rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Third-party marks</h2>
            <p>
              JazzCash, EasyPaisa, Android, BlueStacks, and other product names belong to their owners. Mention on this site is for identification, not a partnership claim.
            </p>
          </section>
          <section className="bg-primary rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Your risk</h2>
            <p>
              If you follow a step and a payment fails, or a table goes against you, that outcome is yours. For site errors, use the <Link href={ROUTES.contact} className="text-accent hover:underline">contact page</Link>. Read the <Link href={ROUTES.privacy} className="text-accent hover:underline">privacy policy</Link> for how we handle mail.
            </p>
          </section>
          <CtaButton href={ROUTES.contact} icon="arrow">Contact Us</CtaButton>
        </div>
      </div>
    </div>
  );
}
