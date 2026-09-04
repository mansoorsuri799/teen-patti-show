import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { APP_AGGREGATE_RATING, APP_SCREENSHOTS, FACEBOOK_PROFILE_URL, softwareApplicationLd } from "@/lib/appFacts";
import CtaButton from "@/components/CtaButton";
import { APP_FACTS, BLOGS, IMAGES, ROUTES, SITE_EMAIL, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const PAGE_TITLE = "Teen Patti Show Pakistan v1.0.8 Free Download Official APK";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Install Teen Patti Show v1.0.8 from this Pakistan site. Open Teen Patti, Dragon vs Tiger, and Rummy, then move PKR through JazzCash or EasyPaisa on your own number.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Teen Patti Show APK for Android in Pakistan. JazzCash and EasyPaisa wallets, on-domain install steps, and a lobby built around Teen Patti.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.logo}`,
        width: 512,
        height: 512,
        alt: "Teen Patti Show – Official Teen Patti APK for Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Teen Patti Show APK for Android in Pakistan. JazzCash and EasyPaisa wallets, on-domain install steps, and a lobby built around Teen Patti.",
    images: [`${SITE_ORIGIN}${IMAGES.twitter}`],
  },
};

const faqs = [
  {
    q: "Do I need a first deposit before I can sit at a table?",
    a: "No. Guest play and daily chips let you open tables before you add JazzCash or EasyPaisa. Real-money seats only appear after you fund the wallet.",
  },
  {
    q: "What are the usual add and cash-out floors?",
    a: "Shop tiles commonly start around PKR 200. Cash-out to JazzCash or EasyPaisa often starts near PKR 500. Bank-card exits can be larger, often near PKR 20,000 per ticket. Read the Shop and Withdraw screens the day you tap — those numbers win over any page.",
  },
  {
    q: "Can one account bind JazzCash and EasyPaisa together?",
    a: "Yes, if both numbers are yours. Bind each rail before you add on it. A cash-out must go back to a number you already attached — not a friend’s wallet you used once.",
  },
  {
    q: "Why is a withdrawal still pending?",
    a: "Unfinished bonus wagering, an unbound number, or a second ticket in the same hour. Wait the 5–30 minute window, then open one live-chat thread with the ticket ID. Do not stack another request.",
  },
  {
    q: "Does Teen Patti Show charge a hidden cash-out fee?",
    a: "This lobby does not add a surprise fee on top of the amount you type. JazzCash or EasyPaisa may still take their own wallet charge. Read the line on the Withdraw screen before you confirm.",
  },
  {
    q: "I forgot the password. What now?",
    a: "On the login screen tap Forgot Password. The OTP goes to the mobile number or email you registered. The full click path is in the password recovery guide. A helper who asks you to forward that OTP is not support.",
  },
  {
    q: "Android says App not installed. What did I miss?",
    a: "Delete any older Teen Patti Show or lookalike file, free a few hundred MB, allow unknown apps for the browser you used, and install the APK from this domain again. A half-downloaded file also throws that error.",
  },
  {
    q: "Where do I write if a deposit ticket stalls?",
    a: "Use the in-app live chat first. If chat is closed, send the ticket number on the WhatsApp line printed inside the app, or read the FAQ block on this site.",
  },
  {
    q: "Why would someone pick this lobby over a Play Store Teen Patti clone?",
    a: "Play Store results named Teen Patti Showy are casual clones with no JazzCash cash-out. This APK lists named Pakistani wallets, a welcome match, and a referral cut — and you install it from teenpattishowgame.com.pk, not a random tracker.",
  },
  {
    q: "Is real-money play licensed in Pakistan?",
    a: "This site does not quote a public gaming licence. Encryption and local wallets reduce some file-level risk. They do not make cash tables legal in every city. Read your local rules before you deposit. 18+ only.",
  },
  {
    q: "Can the wallet go to zero?",
    a: "Yes. Blind raises, Dragon vs Tiger streaks, and unfinished bonus wagering all drain PKR. Only load an amount you can lose in one evening.",
  },
  {
    q: "Can I switch the lobby language?",
    a: "Yes. Open Settings after login and pick the language the build lists. This website stays English.",
  },
  {
    q: "When does a referral credit land?",
    a: "After the friend registers on your link and plays. The cut posts on its own. You do not need a second tap to claim it. Details sit in the welcome bonus and referral article.",
  },
  {
    q: "Is there an iPhone build?",
    a: "No APK for iOS. Android only. Windows players can follow the PC guide to run the same file in an emulator.",
  },
];

const infoRows = [
  ["App Name", APP_FACTS.name],
  ["Developer", "Teen Patti Show dev"],
  ["Category", APP_FACTS.category],
  ["Size", APP_FACTS.size],
  ["Latest Version", `V${APP_FACTS.version}`],
  ["Required OS", APP_FACTS.os],
  ["Update", APP_FACTS.updated],
  ["Downloads", APP_FACTS.downloads],
  ["Rating Count", `${APP_FACTS.ratingCount}+`],
  ["Language", APP_FACTS.language],
  ["Price", "Free (0$)"],
  ["Wallets", "JazzCash, EasyPaisa"],
  ["Age", "18+"],
];

const features = [
  {
    title: "1. Cash leaves the table",
    body: "A winning Teen Patti pot, a Rummy score, or a Dragon vs Tiger hit posts to the same wallet you funded. Cash-out uses JazzCash or EasyPaisa on the number you bound — not a gift-card detour.",
  },
  {
    title: "2. Wallet in a few taps",
    body: "Open Wallet, pick JazzCash or EasyPaisa, type the PKR amount, and finish the prompt in your own wallet app. Same path in reverse when you send money out.",
  },
  {
    title: "3. Lobby you can scan at night",
    body: "Card rooms, slots, and poker sit in separate rows. Wallet and bonus tiles stay on the home strip so you are not hunting through five menus before a hand.",
  },
  {
    title: "4. More than one Teen Patti flavour",
    body: "Classic Teen Patti, Teenpatti 20-20, Rummy, poker, Andar Bahar, and a short slots row share one install. Stake limits change by table, so a small wallet can still sit down.",
  },
  {
    title: "5. Login chips that are not a deposit",
    body: "A daily grant and the occasional weekly drop let you learn a show or a Dragon vs Tiger round before you decide whether JazzCash is worth opening.",
  },
  {
    title: "6. A cut when friends stay",
    body: "Your referral link credits you when someone signs up and actually plays. The commission posts without a second claim screen.",
  },
  {
    title: "7. A 38MB file on older Androids",
    body: "The package is built for Android 5.0 and up. Most mid-range Pakistani phones open the lobby without a long splash, as long as you are not already out of storage.",
  },
  {
    title: "8. Payments on named rails",
    body: "JazzCash and EasyPaisa are the rails this wallet lists. That is not a licence. It does mean you can match the on-screen number to the SIM in your pocket. Install only from this domain.",
  },
  {
    title: "9. No fee to open the APK",
    body: "The file itself is free. Sign-up does not charge. Guest chips exist so you can see a table before you send PKR.",
  },
  {
    title: "10. Chat that stays inside the app",
    body: "Live chat covers stuck deposits, a locked OTP, or a cash-out that sits on pending. WhatsApp is the backup line printed in the help screen.",
  },
];

const multiplayer = ["Tiger Dragon (Hot)", "7 UP Down (Hot)", "Zoo Roulette (Hot)", "Crash", "Car Roulette", "Andar Bahar", "Teenpatti 20-20", "Best of Five"];
const skillGames = ["Domino (Hot)", "Rummy (Hot)", "Teen Patti", "Fishing Rush", "10 Cards", "Poker", "Ludo", "Black Jack"];
const slots = ["Fortune Gems (Hot)", "Mines (Hot)", "Fruit Line", "777 Bingo", "Rattling GEMS", "Video Poker 1, 2", "Wild Energy", "God of Fortune"];

function GameGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((name) => {
        const hot = name.includes("(Hot)");
        const label = name.replace(" (Hot)", "");
        return (
          <div key={name} className="bg-[#16101F] p-4 rounded-lg">
            <p className="text-white font-medium">
              {label} {hot && <span className="text-brand-orange">(Hot)</span>}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description: "Pakistan Teen Patti APK with JazzCash and EasyPaisa wallets, installed from teenpattishowgame.com.pk.",
        inLanguage: "en",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: PAGE_TITLE,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${IMAGES.logo}`,
          width: 512,
          height: 512,
          name: SITE_NAME,
          description: "Teen Patti Show – Official Teen Patti APK for Pakistan",
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: SITE_NAME,
        url: `${SITE_ORIGIN}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${IMAGES.logo}`,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
        },
        sameAs: [FACEBOOK_PROFILE_URL],
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE_EMAIL,
          contactType: "Customer Support",
          areaServed: "PK",
          availableLanguage: "English",
        },
      },
      {
        ...softwareApplicationLd,
        aggregateRating: APP_AGGREGATE_RATING,
        screenshot: [...APP_SCREENSHOTS],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "HowTo",
        name: "Install Teen Patti Show and open a first table",
        totalTime: "PT8M",
        step: [
          { "@type": "HowToStep", name: "Get the APK from this site", text: "Open teenpattishowgame.com.pk and save the Teen Patti Show APK to the phone." },
          { "@type": "HowToStep", name: "Allow that browser to install", text: "Tap the file and permit Install unknown apps for the browser you used." },
          { "@type": "HowToStep", name: "Open the gold-frame icon", text: "Launch Teen Patti Show. Sign in with a Pakistani mobile number or stay on guest chips." },
          { "@type": "HowToStep", name: "Sit at a table", text: "Collect the welcome chips, pick Teen Patti or another listed game, and start a hand." },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{SITE_NAME}</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-accent">Teen Patti tables, JazzCash wallets, one APK for Pakistan</span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href={ROUTES.download} className="text-accent hover:underline">Teen Patti Show</Link> is the Android lobby we host on this domain: Teen Patti, Dragon vs Tiger, Rummy, and a short slots row, with JazzCash and EasyPaisa on the wallet screen. Tap the button, save the file here, then compare the gold-frame icon to the one on this page before you add money.
            </p>

            <p className="text-white text-sm font-medium">
              {APP_FACTS.ratingValue} ★★★★☆ ({APP_FACTS.ratingCountLabel}) · {APP_FACTS.price} · Android · Game
            </p>

            <div className="flex justify-center my-8">
              <CtaButton ariaLabel="Download Teen Patti Show app for Android">DOWNLOAD NOW</CtaButton>
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: "120px" }}>
              <div className="bg-[#16101F] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-accent mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{APP_FACTS.downloads}</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#16101F] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-accent mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">200K+</div>
                <div className="text-gray-400 text-sm">Ratings</div>
              </div>
              <div className="bg-[#16101F] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: "120px" }}>
                <svg className="w-6 h-6 mb-3 text-accent mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <div className="text-white text-2xl font-bold mb-1">{APP_FACTS.size}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Android only — no iPhone build</p>
          </div>

          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={IMAGES.logo}
              alt="Teen Patti Show – Official Teen Patti APK for Pakistan"
              title="Teen Patti Show – Official Teen Patti APK for Pakistan"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
            />
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">App facts at a glance</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {infoRows.map(([label, value], i) => (
                <tr key={label} className={i % 2 ? "bg-primary/50" : "bg-secondary/50"}>
                  <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-left text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="overview" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">How this lobby is laid out</h2>
          <p className="text-gray-300 leading-relaxed">
            The home strip splits card rooms, slots, and poker so you pick a seat instead of scrolling a mixed casino wall. Controls stay large enough for one-thumb play. You can fund a small JazzCash amount and still reach cash tables, or stay on guest chips and the daily grant until you have seen a show. The install path lives on this site — not a Play Store clone with a similar name.
          </p>
        </div>
      </section>

      <section id="what-is-teen-patti-show" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">What Teen Patti Show actually is</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Teen Patti Show is an Android card-and-table APK centred on Teen Patti, with Dragon vs Tiger, Rummy, and a few faster rooms in the same file. You add PKR through JazzCash or EasyPaisa and send a cash-out to the same method on the number you bound. A first-deposit match, a daily chip drop, and a referral cut sit on top of that wallet — they are not a salary.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Menus stay short: games, wallet, bonuses. Skill tables (Teen Patti, Rummy, poker) sit next to quicker rooms. If you only want a three-card show, you never have to open slots. If you want a two-minute Dragon vs Tiger round, that tile is on the same strip.
            </p>
          </div>
        </div>
      </section>

      <section id="why-teen-patti-show-popular" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Why this APK gets passed around in Pakistan</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Players share it because the wallet names JazzCash and EasyPaisa, the rules for a show are the ones they already know, and the lobby is a card room first. Softonic-style pages that call every Teen Patti file “offline fun” are describing a different product.
            </p>
            <p className="text-gray-300 leading-relaxed">
              One install holds Teen Patti, Dragon vs Tiger, Rummy, poker, and the slots row. Daily chips and a referral cut keep people opening the icon. The 38MB package still runs on a lot of Android 5+ phones. Deposits and cash-outs stay on the two wallets most Pakistani numbers already have.
            </p>
          </div>
        </div>
      </section>

      <section id="how-to-start" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Open a first table in six steps</h2>
          <p className="text-gray-300 leading-relaxed mb-4">Do this on the phone that will hold the wallet:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Stay on teenpattishowgame.com.pk and <Link href={ROUTES.download} className="text-accent hover:underline font-semibold">save the APK from the download page</Link>.</li>
            <li>Tap the file. Allow Install unknown apps for that browser only.</li>
            <li>Wait for the gold-frame icon — three aces — then open it.</li>
            <li>Sign in with your Pakistani mobile number, or stay on guest chips for a look.</li>
            <li>Take the welcome chips if they appear. Do not treat them as withdrawable cash.</li>
            <li>Pick a Teen Patti table or another listed game and play a hand you can afford to lose.</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-primary rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-accent text-center">Lobby screens you should recognise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: IMAGES.pakistan, alt: "Teen Patti Show game interface on Android", label: "Table view" },
              { src: IMAGES.apk, alt: "Teen Patti Show APK overview screen", label: "Home strip" },
              { src: IMAGES.bonuses, alt: "Teen Patti Show free bonuses and rewards panel", label: "Bonus panel" },
              { src: IMAGES.addMoney, alt: "Teen Patti Show deposit money screen", label: "Add PKR" },
              { src: IMAGES.withdraw, alt: "Teen Patti Show withdraw money screen", label: "Cash out" },
              { src: IMAGES.refer, alt: "Teen Patti Show referral and win bonus screen", label: "Referral tile" },
            ].map((shot) => (
              <div key={shot.label} className="w-full">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={400}
                    height={711}
                    className="w-full"
                    style={{ height: "auto" }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="text-center text-gray-300 mt-3 font-medium">{shot.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teen-patti-show-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">What this APK actually does well</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="bg-secondary px-8 py-8 rounded-lg card-glow">
                <h3 className="text-xl font-semibold mb-3 text-accent">{item.title}</h3>
                <p className="text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teen-patti-show-games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Rooms you can open after install</h2>
          <p className="text-gray-300 mb-6">
            Fortune Gems, Dragon vs Tiger, and Mines are the rooms people ask for first. A longer pick sits in the <Link href={`${ROUTES.blog}/best-games-teen-patti-show`} className="text-accent hover:underline">best games guide</Link>.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-accent">1. Fast multiplayer rooms</h3>
            <GameGrid items={multiplayer} />
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-accent">2. Skill tables</h3>
            <GameGrid items={skillGames} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-accent">3. Slots and short spins</h3>
            <GameGrid items={slots} />
          </div>
        </div>
      </section>

      <section id="teen-patti-show-bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">First-deposit match, rebate, and VIP extras</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-accent">1. Welcome match on the first add</h3>
            <p className="text-gray-300 mb-4">A new account that has never deposited can get a 100% match on that first add. Wagering still applies — the extra chips are not a cash-out on day one. Read the <Link href={`${ROUTES.blog}/teen-patti-show-welcome-bonus-referral`} className="text-accent hover:underline">bonus and referral note</Link> before you treat a match as income.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#16101F]">
                  <tr>
                    <th className="py-3 px-6 text-left text-white font-semibold">Deposit Amount (PKR)</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Bonus Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  {[
                    ["100", "100"],
                    ["1,000", "1,000"],
                    ["5,000", "5,000"],
                    ["10,000", "10,000"],
                    ["20,000", "20,000"],
                    ["100,000", "100,000"],
                  ].map(([a, b], i) => (
                    <tr key={a} className={i % 2 ? "bg-secondary/50" : "bg-primary/50"}>
                      <td className="py-3 px-6">{a}</td>
                      <td className="py-3 px-6">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-accent">2. Recharge rebate after you add again</h3>
            <p className="text-gray-300 mb-4">Later adds can unlock a rebate band. Higher bands need a larger add and a higher wager multiple. Check the in-app promo tile — the table below is the published scale, not a promise that every account sees every band.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#16101F]">
                  <tr>
                    <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Recharge Required</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Required Wager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  {[
                    ["5%", "3000 PKR", "2x"],
                    ["10%", "5000", "3x"],
                    ["15%", "8000", "4x"],
                    ["20%", "10,000", "5x"],
                    ["25%", "20,000", "6x"],
                    ["30%", "50,000", "7x"],
                  ].map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-secondary/50" : "bg-primary/50"}>
                      {row.map((cell) => (
                        <td key={cell} className="py-3 px-6">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">3. VIP rebate on adds of 3,000 PKR or more</h3>
            <p className="text-gray-300 mb-4">A separate daily rebate can appear once an add hits 3,000 PKR. The percent follows VIP level. Claim it in the promo screen the same day — leftover claims do not always roll over.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#16101F]">
                  <tr>
                    <th className="py-3 px-6 text-left text-white font-semibold">VIP Level</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  {[
                    ["V1-V2", "1% rebate"],
                    ["V3-V4", "2% rebate"],
                    ["V5-V6", "3% rebate"],
                    ["V7-V8", "4% rebate"],
                    ["V9-V10", "5% rebate"],
                    ["V11-V12", "6% rebate"],
                    ["V13-V14", "7% rebate"],
                    ["V15-V16", "8% rebate"],
                    ["V17-V18", "9% rebate"],
                    ["V19-V20", "10% rebate"],
                  ].map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-secondary/50" : "bg-primary/50"}>
                      <td className="py-3 px-6">{row[0]}</td>
                      <td className="py-3 px-6">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Get v1.0.8 onto the phone</h2>
          <p className="text-gray-300 mb-4">Use the phone that will hold JazzCash or EasyPaisa. Do not hunt a third-party APK mirror.</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            <li>Open Chrome or your usual browser on Android.</li>
            <li>Type teenpattishowgame.com.pk — or stay on this tab if you are already here.</li>
            <li>Open the download page and tap DOWNLOAD NOW.</li>
            <li>Let the 38MB file finish. Do not switch to a WhatsApp “old version” while it runs.</li>
            <li>The APK lands in Downloads. Check the filename before you tap it.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Install once the file is on the phone</h2>
          <p className="text-gray-300 mb-4">Unknown-source permission is a one-time Android step, not a virus scan.</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            <li>When Android blocks the install, open the prompt and allow that browser only.</li>
            <li>If there is no prompt, go to Settings → Security → Install unknown apps and enable the same browser.</li>
            <li>Open Files or My Files and open the Downloads folder.</li>
            <li>Tap the Teen Patti Show APK. Confirm install.</li>
            <li>Wait until the progress bar finishes. Do not pull the notification away mid-install.</li>
            <li>The gold-frame icon should appear on the home screen or in the app drawer.</li>
            <li>Open it. If the icon or package name does not match this site, delete the file and start again here.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Phone specs before you tap install</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#16101F]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">System</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Minimum</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                <tr className="bg-primary/50"><td className="py-3 px-6">Operating System</td><td className="py-3 px-6">Android 5.0+</td><td className="py-3 px-6">Android 8.0 or above</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">RAM</td><td className="py-3 px-6">2GB or more</td><td className="py-3 px-6">4GB or more</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">Storage Space</td><td className="py-3 px-6">At least 500 MB free</td><td className="py-3 px-6">1GB free space</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">Processor</td><td className="py-3 px-6">Quad-core 1.5 GHz</td><td className="py-3 px-6">Octa-core 2.0 GHz</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">Internet</td><td className="py-3 px-6">Stable 3G or WiFi</td><td className="py-3 px-6">Fast &amp; stable 4G or WiFi</td></tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <CtaButton>DOWNLOAD NOW</CtaButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What changed in version 1.0.8</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Table lighting and card motion are cleaner on mid-range screens.</li>
            <li>The lobby opens faster after a cold start on Android 8+.</li>
            <li>Home categories are fewer taps from a Teen Patti seat.</li>
            <li>Dragon vs Tiger and Rummy sit on the same strip as classic Teen Patti.</li>
            <li>JazzCash and EasyPaisa prompts return a status without a long spinner as often.</li>
            <li>Login and wallet screens check the bound number more strictly.</li>
            <li>Welcome match, rebate, and referral tiles show the wager line in-app.</li>
            <li>Known crash paths from earlier builds are patched in this file.</li>
            <li>Table audio is quieter by default so a show does not blast the speaker.</li>
            <li>VIP rebate percents are listed on the promo screen instead of a buried help page.</li>
          </ol>
        </div>
      </section>

      <section id="register-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Create a login and get back in</h2>
          <h3 className="text-xl font-semibold mb-4 text-accent">1. Register on a number you still own</h3>
          <p className="text-gray-300 mb-4">The <Link href={`${ROUTES.blog}/teen-patti-show-account-and-login`} className="text-accent hover:underline">account and login article</Link> covers a locked OTP. The short path:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            <li>Open Teen Patti Show from the gold-frame icon.</li>
            <li>Tap Register or Sign Up on the first screen.</li>
            <li>Enter the mobile number (or email) you can still receive an OTP on.</li>
            <li>Set a password you do not reuse on JazzCash.</li>
            <li>Type the OTP. Do not share it in a “support” chat.</li>
            <li>When the lobby loads, bind that same number before you add money.</li>
          </ol>
          <h3 className="text-xl font-semibold mb-4 text-accent">2. Sign in on the same device later</h3>
          <p className="text-gray-300 mb-4">Guest chips do not protect a wallet. Use the registered login before you deposit.</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the app.</li>
            <li>Tap Login, not a second Register.</li>
            <li>Enter the same number or email plus the password.</li>
            <li>If the OTP screen appears, use the SIM that received the first code.</li>
            <li>Tap Sign in.</li>
            <li>Forgot Password only resets to that same number or email — not a helper’s WhatsApp.</li>
            <li>Confirm the wallet still shows your JazzCash or EasyPaisa number before you play cash.</li>
          </ol>
        </div>
      </section>

      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">JazzCash and EasyPaisa on this wallet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#16101F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent">1. JazzCash</h3>
              <p className="text-gray-300">JazzCash is the add and cash-out rail most Jazz numbers already use. You confirm the amount in the JazzCash app on your own SIM. A ticket that sits on pending is usually an unbound number or unfinished bonus play — open one chat, not a second withdrawal. Full click path is on the <Link href={ROUTES.deposit} className="text-accent hover:underline">JazzCash deposit steps</Link>.</p>
            </div>
            <div className="bg-[#16101F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent">2. EasyPaisa</h3>
              <p className="text-gray-300">EasyPaisa is the other named method on the same wallet screen. Bind the EasyPaisa number you control before the first add. Cash-out goes back to that number, not a friend’s wallet. The <Link href={ROUTES.withdraw} className="text-accent hover:underline">EasyPaisa cash-out steps</Link> list the bind rules.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Add PKR from the in-app wallet</h2>
            <p className="text-gray-300 mb-4">
              Short path below. Screenshots and failure notes live on the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Log in on the registered account — not guest.</li>
              <li>Tap Wallet on the home strip.</li>
              <li>Tap Deposit or Add money.</li>
              <li>Choose JazzCash or EasyPaisa. Match the number on screen to your SIM.</li>
              <li>Type an amount you can lose tonight.</li>
              <li>Confirm in your wallet app. Do not hand the PIN to anyone in chat.</li>
              <li>When the lobby balance updates, you can sit at a cash table.</li>
            </ol>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Send a cash-out to your own number</h2>
            <p className="text-gray-300 mb-4">
              Bind first. Then follow this list or the longer <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw guide</Link>.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Log in and open Wallet.</li>
              <li>Tap Withdrawal.</li>
              <li>Pick JazzCash or EasyPaisa — the same rail you bound.</li>
              <li>Enter an amount that clears any bonus wagering line.</li>
              <li>Confirm the account number is yours.</li>
              <li>Read the fee and time line on that screen, then confirm.</li>
              <li>If the ticket stays pending, open one live-chat thread. Do not stack a second request.</li>
              <li>A posted cash-out shows in JazzCash or EasyPaisa on that same number.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="wallet-limits" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Add and cash-out floors that players actually hit</h2>
          <p className="text-gray-300 mb-6">
            Competitor pages often print one “instant / unlimited” row. The Shop tile in Teen Patti Show is the source of truth the day you tap. These are the ranges that match the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit</Link> and <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw</Link> guides on this site.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#16101F]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Move</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Typical floor</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">What usually blocks it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                <tr className="bg-primary/50"><td className="py-3 px-6">JazzCash / EasyPaisa add</td><td className="py-3 px-6">Tiles around PKR 200, 500, 1,000, 2,000</td><td className="py-3 px-6">Guest login, or a number that is not bound</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">JazzCash / EasyPaisa cash-out</td><td className="py-3 px-6">About PKR 500</td><td className="py-3 px-6">Unfinished welcome-match wagering</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">Bank card cash-out</td><td className="py-3 px-6">Larger tickets, often near PKR 20,000</td><td className="py-3 px-6">Title mismatch with the bank print</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">Usual wallet wait</td><td className="py-3 px-6">5–30 minutes when the number matches</td><td className="py-3 px-6">A second ticket in the same hour</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">Bank wait</td><td className="py-3 px-6">Hours, sometimes the next working day</td><td className="py-3 px-6">Bank batching — not a missing button</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="refer-and-earn" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Refer &amp; Earn without treating friends as a salary</h2>
          <p className="text-gray-300 mb-4">
            Open the Refer &amp; Earn tile after login and copy the link from that screen. You earn when the friend registers and plays — not when they only save a WhatsApp APK. Other sites publish weekly PKR ladders and “25% forever” lines. Treat those as their marketing. The cut that matters is the one printed inside this lobby the day you share.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-gray-300 mb-4">
            <li>Send the link, not your password and not a random file.</li>
            <li>Commission posts on its own after they play. No second claim tap.</li>
            <li>A first-deposit match on their account is their bonus, not yours.</li>
          </ul>
          <p className="text-gray-300">
            Wagering and VIP extras sit next to this in the <Link href={`${ROUTES.blog}/teen-patti-show-welcome-bonus-referral`} className="text-accent hover:underline">welcome bonus and referral article</Link>.
          </p>
        </div>
      </section>

      <section id="vs-clones" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">This APK versus Play Store clones and slot-only pages</h2>
          <p className="text-gray-300 mb-6">
            Other Teen Patti Show domains lean on “most trusted / instant / #1” copy. The useful comparison for a Pakistani player is wallets, cash-out, and whether the file even matches the icon.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#16101F]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Check</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Teen Patti Show on this domain</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Play Store clones / generic slot pages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                <tr className="bg-primary/50"><td className="py-3 px-6">Wallets</td><td className="py-3 px-6">JazzCash and EasyPaisa named on Shop</td><td className="py-3 px-6">Often coins only, or no Pakistani rail</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">Where you install</td><td className="py-3 px-6">teenpattishowgame.com.pk, then the download page</td><td className="py-3 px-6">Play Store lookalikes or APK mirrors</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">Cash-out</td><td className="py-3 px-6">Back to the number you bound</td><td className="py-3 px-6">Usually none</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">First add</td><td className="py-3 px-6">Welcome match with a wager line</td><td className="py-3 px-6">Fake coins or a blank shop</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">iPhone</td><td className="py-3 px-6">No — Android APK only</td><td className="py-3 px-6">Some pages advertise an iOS APK that is not this product</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">Licence claim</td><td className="py-3 px-6">None quoted here</td><td className="py-3 px-6">Often “100% legal” with no document</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">This website language</td><td className="py-3 px-6">English only</td><td className="py-3 px-6">Often claims Urdu without shipping it</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="install-errors" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">When Android refuses the APK</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li><strong>App not installed:</strong> an older Teen Patti Show or a “Showy” clone is still on the phone. Uninstall it, then tap the new file.</li>
            <li><strong>Parse error / incomplete download:</strong> the 38MB file did not finish. Delete it and save again from the download page.</li>
            <li><strong>Blocked by Play Protect:</strong> sideloads can trip a warning. Compare the gold-frame icon to this site before you keep going. A file from WhatsApp that fails this check should be deleted.</li>
            <li><strong>Unknown sources greyed out:</strong> enable Install unknown apps for the same browser you used, not for every app on the phone.</li>
            <li><strong>No space:</strong> free at least 500 MB. The package is 38MB; Android needs room to unpack it.</li>
          </ol>
        </div>
      </section>

      <section id="hand-ranks" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Teen Patti hands before you tap Show</h2>
          <p className="text-gray-300 mb-6">
            A short rank list so the first cash table is not a guess. Blind versus seen play and when a show is allowed sit in the <Link href={`${ROUTES.blog}/teen-patti-show-tips-how-to-play`} className="text-accent hover:underline">hand and show guide</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#16101F]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Rank</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Hand</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">What it is</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                <tr className="bg-primary/50"><td className="py-3 px-6">1</td><td className="py-3 px-6">Trail</td><td className="py-3 px-6">Three of the same rank</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">2</td><td className="py-3 px-6">Pure sequence</td><td className="py-3 px-6">Consecutive ranks, same suit</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">3</td><td className="py-3 px-6">Sequence</td><td className="py-3 px-6">Consecutive ranks, mixed suits</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">4</td><td className="py-3 px-6">Colour</td><td className="py-3 px-6">Same suit, not consecutive</td></tr>
                <tr className="bg-primary/50"><td className="py-3 px-6">5</td><td className="py-3 px-6">Pair</td><td className="py-3 px-6">Two of the same rank</td></tr>
                <tr className="bg-secondary/50"><td className="py-3 px-6">6</td><td className="py-3 px-6">High card</td><td className="py-3 px-6">Nothing else — Ace plays high</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="who-this-is-for" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Who this lobby is for — and who should skip it</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#16101F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent">Sit down if</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>You are 18 or older on an Android 5.0+ phone</li>
                <li>You already hold JazzCash or EasyPaisa on your own SIM</li>
                <li>You want Teen Patti first, with Dragon vs Tiger and Rummy in the same file</li>
                <li>You can lose the add without calling it a salary</li>
              </ul>
            </div>
            <div className="bg-[#16101F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent">Skip if</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>You need an iPhone build — there is none</li>
                <li>You need a Pakistani gaming licence letter — this site does not have one</li>
                <li>You only want offline coins with no wallet</li>
                <li>A helper is asking for your PIN, OTP, or CNIC photo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="safety-security" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What safety this file can and cannot promise</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Teen Patti Show encrypts login traffic and lists JazzCash and EasyPaisa by name. That helps you match a wallet to your own SIM. It is not a Play Store listing, and it is not a Pakistani gaming licence. Side-loaded APKs can be swapped. Install from this domain, compare the gold-frame icon, and never send a JazzCash PIN, OTP, or CNIC photo to a “helper.”
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li>Refuse a file that asks for contacts or the microphone before you have opened a table.</li>
            <li>Use mobile data or your own Wi‑Fi for Shop taps — not a café machine you do not control.</li>
            <li>Play Protect may warn on any sideload. The check is the icon and this domain, not a WhatsApp caption.</li>
            <li>18+ only. Stop when the add is no longer money you can lose.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            For a longer check on fake files and first payouts, read <Link href={`${ROUTES.blog}/is-teen-patti-show-real-pakistan`} className="text-accent hover:underline">whether Teen Patti Show is real in Pakistan</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Guides worth reading before a first add</h2>
          <p className="text-gray-300 mb-8">Four pieces on this site, not a doorway cluster of the same page:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOGS.map((post) => (
              <Link key={post.slug} href={`${ROUTES.blog}/${post.slug}`} className="bg-[#16101F] p-6 rounded-lg hover:border-accent border border-transparent transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                <p className="text-gray-400">{post.description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6">
            <Link href={ROUTES.blog} className="text-accent hover:underline font-semibold">Open the full blog list →</Link>
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Reach support without leaving the lobby</h2>
          <p className="text-gray-300 mb-6">Use one channel per ticket so the same deposit ID is not opened three times:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#16101F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent">Live chat</h3>
              <p className="text-gray-300">The in-app chat is the fastest path for a stuck add, a pending cash-out, or a login OTP that never arrives. Paste the ticket ID. Do not send a second withdrawal while you wait.</p>
            </div>
            <div className="bg-[#16101F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent">WhatsApp</h3>
              <p className="text-gray-300">The number printed inside Help is the backup line. Use it when chat is offline. Anyone who DMs you a different number and asks for a PIN is not this desk.</p>
            </div>
            <div className="bg-[#16101F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-accent">On-site FAQ</h3>
              <p className="text-gray-300">The accordion on this page covers guest play, iOS, referrals, and loss risk. Check it before you open chat for a question already answered here.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Habits that keep a first wallet alive</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            <li><strong>Sit at a cheap table first:</strong> Learn when a show is allowed before you raise on a 1,000 PKR seat. The <Link href={`${ROUTES.blog}/teen-patti-show-tips-how-to-play`} className="text-accent hover:underline">hand and show guide</Link> covers blind versus seen play.</li>
            <li><strong>Read the wager line on a bonus:</strong> Daily chips and a first-deposit match still need play-through. Do not cash out mid-wager and then blame the ticket.</li>
            <li><strong>Do not chase Dragon vs Tiger to “get even”:</strong> Fast rooms drain a wallet quicker than a patient Teen Patti table.</li>
            <li><strong>Share the referral link, not your password:</strong> Commission posts when friends play. You never need to log in on their phone.</li>
            <li><strong>Collect the daily grant, then stop:</strong> Opening the app every day is fine. Reloading JazzCash every hour is how a first wallet dies.</li>
            <li><strong>Cash out a small test:</strong> After bonus play-through, send PKR 500 to the bound number. A receipt there is the check that matters.</li>
            <li><strong>Use guest chips before cash:</strong> See one show and one Dragon vs Tiger round with free chips if the build still offers them.</li>
            <li><strong>Leave the table when you are angry:</strong> A frustrated raise is not a strategy.</li>
            <li><strong>Watch the pot, not the chat:</strong> Other players’ timing can teach you. Their boasts will not pay your JazzCash.</li>
            <li><strong>Delete a file that does not match this icon:</strong> WhatsApp “old versions” and Softonic clones are the usual theft path.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What holds up — and what does not</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-accent">What holds up</h3>
              <div className="bg-[#16101F] px-8 py-8 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li>✓ Teen Patti rules most Pakistani players already know</li>
                  <li>✓ JazzCash and EasyPaisa named on the wallet screen</li>
                  <li>✓ Guest chips and a daily grant before the first add</li>
                  <li>✓ Card rooms, Dragon vs Tiger, Rummy, and a short slots row in one file</li>
                  <li>✓ A cash-out path back to the bound number</li>
                  <li>✓ 38MB package on Android 5.0+</li>
                  <li>✓ In-app chat for a stuck ticket</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-accent">What does not</h3>
              <div className="bg-[#16101F] px-8 py-8 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li>✗ You can lose every rupee you add</li>
                  <li>✗ A cash-out can sit on pending after bonus play</li>
                  <li>✗ Fast rooms are easy to binge</li>
                  <li>✗ Weak phones still stutter on busy tables</li>
                  <li>✗ No public Pakistani gaming licence to quote</li>
                  <li>✗ Bonuses are not a salary or “financial freedom”</li>
                  <li>✗ Side-loaded fakes exist — this domain is the check</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Questions people ask before they install</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group bg-[#16101F]/50 rounded-xl border border-gray-700 hover:border-accent/50 transition-all duration-300 shadow-md hover:shadow-lg">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-accent transition-colors">
                  {item.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Bottom line</h2>
          <p className="text-gray-300 mb-4">
            Teen Patti Show, installed from teenpattishowgame.com.pk, is a real Android lobby with named Pakistani wallets and real ways to lose money. It is not a Play Store clone and it is not a guaranteed income app. Compare the icon, bind your own number, and send a small test cash-out after you clear any wagering line.
          </p>
          <p className="text-gray-300">
            If you want the file, take it from this domain, sit at a cheap Teen Patti table first, and leave when the wallet is no longer money you can afford to lose. 18+ only. This is not a job and not a licensed casino.
          </p>
          <div className="flex justify-center mt-8">
            <CtaButton>DOWNLOAD NOW</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
