import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BLOGS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const post = BLOGS[3];

export const metadata: Metadata = {
  title: "Teen Patti Show Tips: Hands, Show, and Table Control",
  description: post.description,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.logo}`, width: 512, height: 512, alt: "Teen Patti Show icon for the how-to-play guide" }],
  },
};

export default function Page() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When can you ask for a show in Teen Patti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A show is only available when two players remain. A blind player usually pays the current stake; seen players often pay twice that. Equal hands after a show are settled by the table rule posted in the room.",
        },
      },
      {
        "@type": "Question",
        name: "What beats what in Teen Patti Show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trail (three of a kind) beats pure sequence, which beats sequence, which beats colour, which beats pair, which beats a high card. Aces sit at the top of each family.",
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
        image={`${SITE_ORIGIN}${IMAGES.logo}`}
        articleBody="Teen Patti hand ranks, when a show is allowed, blind versus seen play, and table habits for Pakistani beginners on Teen Patti Show."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: post.title, href: `${ROUTES.blog}/${post.slug}` },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Learn the show before you raise the chaal</h1>
      <p className="text-gray-400 mb-8">4 September 2026 · {post.readMins} min read</p>
      <Image
        src={IMAGES.logo}
        alt="Teen Patti Show icon introducing hand ranks and the showdown rule"
        width={320}
        height={320}
        className="rounded-xl mb-8 mx-auto"
        priority
        sizes="280px"
      />
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Wikipedia and rule sites already explain Teen Patti. They do not explain this lobby. Teen Patti Show is where Pakistani players place those rules next to a JazzCash wallet. This article covers hands, the show, and table habits. It is not a deposit tutorial — that lives on the <Link href={ROUTES.deposit} className="text-accent hover:underline">add-money page</Link>.
        </p>
        <h2 className="text-2xl font-bold text-accent">Hand ranks you should recite cold</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Trail — three of a kind. Three aces sit at the top.</li>
          <li>Pure sequence — three consecutive cards of one suit.</li>
          <li>Sequence — three consecutive cards, mixed suits.</li>
          <li>Colour — three of a suit that are not in sequence.</li>
          <li>Pair — two matching ranks.</li>
          <li>High card — nothing else connected.</li>
        </ol>
        <p>
          If you cannot list that order without opening a note, stay on the lowest table. Raising on a pair because “it looks strong” is how a first wallet disappears.
        </p>
        <h2 className="text-2xl font-bold text-accent">Blind play, seen play, and the show</h2>
        <p>
          Blind players have not looked at their cards. Their chaal costs half of a seen chaal. A show cannot start until everyone else has packed and two players remain. A blind show usually costs the current stake. A seen show often costs twice that. If the hands tie, the room rule decides — read the tiny line on the table before you tap Show.
        </p>
        <p>
          A sideshow (comparing with the player who acted before you, while more than two people remain) is a different button. Do not mash Show because the label is in English and you are in a hurry.
        </p>
        <h2 className="text-2xl font-bold text-accent">Habits that survive a bad run</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cap the night in PKR before the first hand, then leave when you hit it.</li>
          <li>Skip Dragon vs Tiger until the Teen Patti order is automatic. Short games spend faster.</li>
          <li>Cash out a win the same evening using the <Link href={ROUTES.withdraw} className="text-accent hover:underline">EasyPaisa exit steps</Link>.</li>
          <li>Do not chase a bonus multiple on tables you do not understand. See the <Link href={`${ROUTES.blog}/${BLOGS[2].slug}`} className="text-accent hover:underline">wagering notes</Link>.</li>
        </ul>
        <h2 className="text-2xl font-bold text-accent">Questions this page answers in schema</h2>
        <p>
          <strong className="text-white">When can you ask for a show?</strong> Only with two players left. Blind show ≈ current stake; seen show is often double.
        </p>
        <p>
          <strong className="text-white">What beats what?</strong> Trail, pure sequence, sequence, colour, pair, high card.
        </p>
        <p>
          Install only from the <Link href={ROUTES.download} className="text-accent hover:underline">APK page</Link>. If the file looks wrong, use the <Link href={`${ROUTES.blog}/${BLOGS[0].slug}`} className="text-accent hover:underline">real-or-fake checks</Link> before you sit down. Fortune Gems, Dragon vs Tiger, and Mines are covered in the <Link href={`${ROUTES.blog}/${BLOGS[5].slug}`} className="text-accent hover:underline">best games article</Link>.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton>DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
