import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { APP_FACTS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Withdraw from Teen Patti Show to EasyPaisa",
  description:
    "Cash out Teen Patti Show winnings to EasyPaisa, JazzCash, or a bank card. Binding rules, pending tickets, and the PKR limits players actually hit.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.withdraw}` },
  openGraph: {
    title: "Withdraw from Teen Patti Show to EasyPaisa",
    description: "Step-by-step Teen Patti Show withdrawal for EasyPaisa, JazzCash, and bank card.",
    url: `${SITE_ORIGIN}${ROUTES.withdraw}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.logo}`, width: 512, height: 512, alt: "Teen Patti Show app icon for EasyPaisa cash-out" }],
  },
};

const steps = [
  {
    title: "Confirm the wallet is already bound",
    body: "Open Wallet → Withdraw. If JazzCash or EasyPaisa is empty, bind your own number first. A deposit that used someone else’s wallet will not cash out cleanly.",
    border: "border-accent",
    heading: "text-accent",
  },
  {
    title: "Clear bonus wagering before you tap Withdraw",
    body: "A first-deposit match usually locks part of the balance until the multiple is played. The withdraw button may accept the request and then sit on pending. Check the bonus panel first.",
    border: "border-cta",
    heading: "text-cta",
  },
  {
    title: "Choose EasyPaisa, JazzCash, or bank card",
    body: "Mobile wallets handle everyday amounts. Bank card is the larger-ticket option, commonly capped near PKR 20,000 per request. Type the account title the way the bank prints it.",
    border: "border-brand-orange",
    heading: "text-brand-orange",
  },
  {
    title: "Enter one amount and one ticket",
    body: "JazzCash and EasyPaisa often start near PKR 500. Submit once. A second ticket in the same hour is the usual reason both stay pending.",
    border: "border-accent",
    heading: "text-accent",
  },
  {
    title: "Wait, then chat with the receipt — do not resend",
    body: "Many requests finish inside 5–30 minutes. If the timer passes that window, send the ticket ID in in-app chat. Do not create a new withdrawal while the first is open.",
    border: "border-cta",
    heading: "text-cta",
  },
];

export default function WithdrawPage() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Withdraw money from Teen Patti Show",
    totalTime: "PT8M",
    step: steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.body })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Withdraw", href: ROUTES.withdraw }]} />
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Cash out <span className="text-accent">Teen Patti Show</span> to a wallet you own
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            EasyPaisa, JazzCash, and bank card are the three exits. Most delays are a bind mismatch or an unfinished bonus, not a missing button.
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
            alt="Teen Patti Show app icon for EasyPaisa cash-out"
            width={420}
            height={420}
            className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">Cash-out details</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800 text-white">
              <tr className="bg-secondary/50"><td className="py-4 px-6">Methods</td><td className="py-4 px-6">EasyPaisa, JazzCash, bank card</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">Typical wallet minimum</td><td className="py-4 px-6">About PKR 500</td></tr>
              <tr className="bg-secondary/50"><td className="py-4 px-6">Bank card</td><td className="py-4 px-6">Larger tickets, often near PKR 20,000 per request</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">Usual wait</td><td className="py-4 px-6">5–30 minutes if the number is bound</td></tr>
              <tr className="bg-secondary/50"><td className="py-4 px-6">Pending loop</td><td className="py-4 px-6">Unfinished bonus play or a second ticket in the same hour</td></tr>
              <tr className="bg-primary/50"><td className="py-4 px-6">Before this page</td><td className="py-4 px-6">Deposit guide if you have not added PKR yet</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">Five steps that avoid a pending loop</h2>
          <p className="text-gray-300 max-w-4xl mx-auto mb-8 text-center">
            <Link href="/" className="text-accent hover:underline">{SITE_NAME}</Link> sends a winning balance out through the same wallets used to add funds. If you have not added PKR yet, start with the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>. This page only covers the exit.
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
