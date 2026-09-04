import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BLOGS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const post = BLOGS[2];

export const metadata: Metadata = {
  title: "Teen Patti Show Welcome Bonus and Referral Rewards",
  description: post.description,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.bonuses}`, width: 400, height: 711, alt: "Teen Patti Show bonus panel" }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.datePublished}
        image={`${SITE_ORIGIN}${IMAGES.bonuses}`}
        articleBody="Teen Patti Show first-deposit match, recharge rebate, VIP extras, and referral commission — including the wagering that delays a cash-out."
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: post.title, href: `${ROUTES.blog}/${post.slug}` },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Bonuses that look like cash until wagering starts</h1>
      <p className="text-gray-400 mb-8">4 September 2026 · {post.readMins} min read</p>
      <Image
        src={IMAGES.bonuses}
        alt="Teen Patti Show bonus and event panel on Android"
        width={400}
        height={711}
        className="rounded-xl mb-8 mx-auto"
        priority
        sizes="(max-width: 768px) 280px, 400px"
      />
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Search results for “Teen Patti Show bonus” mostly show other apps handing out free chips. This lobby is different: a first deposit can be matched, later deposits can pay a rebate, and a referral code pays when a friend plays. None of that is a wage. This post explains the offers. The actual shop taps stay on the <Link href={ROUTES.deposit} className="text-accent hover:underline">add-money guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-accent">First-deposit match</h2>
        <p>
          New accounts often see a 1:1 match up to a posted cap. If you add PKR 1,000, the bonus panel may show another 1,000 in bonus funds. Those funds usually need a playthrough — 2x, 3x, or more — before the <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw screen</Link> will release the full balance. Treat the match as extra table time, not extra salary.
        </p>
        <h2 className="text-2xl font-bold text-accent">Recharge rebate and VIP extras</h2>
        <p>
          After the first add, a rebate percent can appear when you deposit again. A higher percent almost always carries a heavier wager. VIP tiers add a small daily rebate once you have already been depositing. Skipping days does not “stack” a week of VIP drops into one cash-out.
        </p>
        <h2 className="text-2xl font-bold text-accent">Referral commission</h2>
        <p>
          Open Refer & Earn and copy the code from that screen — the screenshot style is on the homepage. You earn when the friend registers and plays, not when they only install a file. Sending a random APK from a chat is how people install a lookalike. Point them at the <Link href={ROUTES.download} className="text-accent hover:underline">official APK page</Link>.
        </p>
        <h2 className="text-2xl font-bold text-accent">What we will not claim</h2>
        <p>
          We will not invent a monthly income from referrals. We will not tell you a rebate cancels a losing table. If a bonus locks a cash-out, finish the multiple or ask in-app chat how much remains. Table decisions belong in the <Link href={`${ROUTES.blog}/${BLOGS[3].slug}`} className="text-accent hover:underline">hands and show article</Link>. File authenticity belongs in the <Link href={`${ROUTES.blog}/${BLOGS[0].slug}`} className="text-accent hover:underline">Pakistan reality check</Link>.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton>DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
