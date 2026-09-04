import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { APP_FACTS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Add Money in Teen Patti Show with JazzCash",
  description:
    "Deposit PKR in Teen Patti Show using JazzCash or EasyPaisa. Shop path, amount picks, and the checks that stop a failed first recharge.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.deposit}` },
  openGraph: {
    title: "Add Money in Teen Patti Show with JazzCash",
    description: "Step-by-step Teen Patti Show deposit using JazzCash or EasyPaisa.",
    url: `${SITE_ORIGIN}${ROUTES.deposit}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.logo}`, width: 512, height: 512, alt: "Teen Patti Show app icon for JazzCash deposit" }],
  },
};

const steps = [
  {
    title: "Sign in on the phone that holds the SIM",
    body: "Open Teen Patti Show and log in with the number you will bind. A guest profile cannot keep a JazzCash receipt attached to the same wallet later.",
    border: "border-accent",
    heading: "text-accent",
  },
  {
    title: "Open Shop, not a random chat link",
    body: "From the lobby, tap Shop or Wallet. Anyone who sends a payment link on WhatsApp is not this deposit flow. The add-money screen should list JazzCash and EasyPaisa as named methods.",
    border: "border-cta",
    heading: "text-cta",
  },
  {
    title: "Pick the wallet you can unlock",
    body: "Choose JazzCash or EasyPaisa. Use the account whose PIN you control. A friend’s wallet will pass a deposit and fail a later cash-out when names do not match.",
    border: "border-brand-orange",
    heading: "text-brand-orange",
  },
  {
    title: "Choose an amount you can afford to lose",
    body: "The tiles usually start around PKR 200, 500, 1,000, and 2,000. A first-deposit bonus may match the add. That bonus is not extra cash you can withdraw until the wagering finishes.",
    border: "border-accent",
    heading: "text-accent",
  },
  {
    title: "Confirm and wait for the lobby balance",
    body: "Approve the request in the JazzCash or EasyPaisa app. Keep the receipt. If the lobby stays at zero after five minutes, do not send a second payment — open in-app chat with the receipt ID.",
    border: "border-cta",
    heading: "text-cta",
  },
];

export default function DepositPage() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Deposit money in Teen Patti Show",
    totalTime: "PT8M",
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Deposit", href: ROUTES.deposit }]} />
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Add PKR to <span className="text-accent">Teen Patti Show</span> from JazzCash
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            JazzCash and EasyPaisa both sit on the same wallet tile. This page is only the add-money path. Cash-outs live on a separate guide so the two jobs do not mix.
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
            alt="Teen Patti Show app icon for JazzCash deposit"
            width={420}
            height={420}
            className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">Wallet details</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800 text-white">
              <tr className="bg-secondary/50"><td className="py-4 px-6">Methods</td><td className="py-4 px-6">JazzCash, EasyPaisa</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">Typical tiles</td><td className="py-4 px-6">PKR 200, 500, 1,000, 2,000</td></tr>
              <tr className="bg-secondary/50"><td className="py-4 px-6">Bind</td><td className="py-4 px-6">Same number as the login SIM</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">First add</td><td className="py-4 px-6">Welcome match may apply — wagering still locks cash-out</td></tr>
              <tr className="bg-secondary/50"><td className="py-4 px-6">If balance stays zero</td><td className="py-4 px-6">One chat ticket with the receipt — no second payment</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">Next page</td><td className="py-4 px-6">Withdraw guide after you are done at the table</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">Five steps that match the shop screen</h2>
          <p className="text-gray-300 max-w-4xl mx-auto mb-8 text-center">
            After you <Link href={ROUTES.download} className="text-accent hover:underline">install Teen Patti Show</Link>, Shop is the only official add path. When the session is over, use the <Link href={ROUTES.withdraw} className="text-accent hover:underline">cash-out walkthrough</Link> instead of reversing these taps.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.title} className={`bg-primary rounded-lg p-6 border-l-4 ${step.border}`}>
                <h3 className={`text-xl font-bold ${step.heading} mb-3`}>{i + 1}. {step.title}</h3>
                <p className="text-gray-300">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <CtaButton href={ROUTES.home}>DOWNLOAD NOW</CtaButton>
          </div>
        </div>
      </section>
    </article>
  );
}
