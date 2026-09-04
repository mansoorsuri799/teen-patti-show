import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BLOGS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const post = BLOGS[5];

export const metadata: Metadata = {
  title: "Best Games to Play in Teen Patti Show",
  description: post.description,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.apk}`, width: 512, height: 512, alt: "Teen Patti Show lobby with Fortune Gems, Dragon vs Tiger, and Mines" }],
  },
};

export default function Page() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which Teen Patti Show game should a beginner open first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start on a cheap Teen Patti table if you want a show you can learn. Fortune Gems, Dragon vs Tiger, and Mines are faster rooms — use guest chips or a small add you can lose in a few rounds.",
        },
      },
      {
        "@type": "Question",
        name: "Are Fortune Gems, Dragon vs Tiger, and Mines skill games?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dragon vs Tiger is a two-side compare with no Teen Patti hand. Mines is a grid you stop before a bomb. Fortune Gems is a gem slot. None of them replace learning when a show is allowed.",
        },
      },
    ],
  };

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.datePublished}
        image={`${SITE_ORIGIN}${IMAGES.apk}`}
        articleBody="Fortune Gems, Dragon vs Tiger, and Mines are the rooms Pakistani players open first in Teen Patti Show after Teen Patti itself. Fast rooms drain a wallet faster than a cheap show."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: post.title, href: `${ROUTES.blog}/${post.slug}` },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Three hot rooms, and the table that still teaches a show</h1>
      <p className="text-gray-400 mb-8">4 September 2026 · {post.readMins} min read</p>
      <Image
        src={IMAGES.apk}
        alt="Teen Patti Show home strip where Fortune Gems, Dragon vs Tiger, and Mines sit"
        width={400}
        height={711}
        className="rounded-xl mb-8 mx-auto"
        style={{ height: "auto" }}
        priority
        sizes="(max-width: 768px) 280px, 400px"
      />
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          After you <Link href={ROUTES.download} className="text-accent hover:underline">install Teen Patti Show</Link>, the home strip is a mix of card rooms, fast compares, and short slots. “Best” here means the rooms Pakistani players actually tap — not a promise those rooms pay. Hands and when a show is allowed stay in the <Link href={`${ROUTES.blog}/${BLOGS[3].slug}`} className="text-accent hover:underline">Teen Patti tips guide</Link>.
        </p>

        <h2 className="text-2xl font-bold text-accent">Fortune Gems</h2>
        <p>
          Fortune Gems is the gem-and-reel room on the slots row. You pick a stake, spin, and watch lines or clusters land. There is no opponent across the table and no Teen Patti trail to read. That is why it feels easy after a long show — and why a first JazzCash add can disappear in a handful of taps.
        </p>
        <p>
          Use it when you want a short session, not when you are trying to learn a chaal. If a welcome match is still on wagering, spinning Fortune Gems may count toward the multiple, but it will not teach you when to pack. Confirm the stake on the tile before you hit spin.
        </p>

        <h2 className="text-2xl font-bold text-accent">Dragon vs Tiger</h2>
        <p>
          Dragon vs Tiger (the lobby also labels it Tiger Dragon) is the hot compare: one card on Dragon, one on Tiger, plus a tie line. You pick a side and a stake. The round is over before a Teen Patti pot would finish a first chaal. No hand rank, no show, no blind-versus-seen decision.
        </p>
        <p>
          People search it because the payout is quick and the rules fit on one screen. The same speed is why “getting even” on the next Dragon vs Tiger round is the usual way a small wallet dies. Sit here with an amount you already decided to spend on a few compares — then leave.
        </p>

        <h2 className="text-2xl font-bold text-accent">Mines</h2>
        <p>
          Mines is the grid: tiles hide gems or a bomb. You tap, the multiplier climbs, and you cash the round before you hit the mine. You choose how many mines sit under the board. More mines, higher multiplier, shorter life if you keep tapping.
        </p>
        <p>
          It looks like a puzzle. It is still a cash room. One extra tap after a good gem streak is how the round goes to zero. If you have not added PKR yet, try it on guest chips so you see the cash-out button before you open Shop. The add path is on the <Link href={ROUTES.deposit} className="text-accent hover:underline">JazzCash deposit guide</Link>.
        </p>

        <h2 className="text-2xl font-bold text-accent">When Teen Patti is still the better first seat</h2>
        <p>
          Fortune Gems, Dragon vs Tiger, and Mines are the rooms the lobby marks hot. They do not replace classic Teen Patti if you want a show you can practise. A cheap Teen Patti table is slower and easier to leave with chips still on the wallet. Mix them if you want — do not treat the hot row as a salary plan.
        </p>
        <p>
          Rummy, poker, Andar Bahar, and the rest of the strip are on the homepage list. Start with the three above only if you already understand they can empty an add in minutes. Then send a small test cash-out on the <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw walkthrough</Link> if you actually booked a win.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton>DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
