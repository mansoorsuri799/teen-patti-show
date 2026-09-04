import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BLOGS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const post = BLOGS[1];

export const metadata: Metadata = {
  title: "Teen Patti Show Account and Login",
  description: post.description,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.bind}`, width: 400, height: 711, alt: "Teen Patti Show bind account screen" }],
  },
};

export default function Page() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Create a Teen Patti Show account",
    step: [
      { "@type": "HowToStep", name: "Install the APK", text: "Install Teen Patti Show from teenpattishowgame.com.pk." },
      { "@type": "HowToStep", name: "Sign up", text: "Enter a mobile number you can receive SMS on." },
      { "@type": "HowToStep", name: "Confirm OTP", text: "Type the code and set a unique password." },
      { "@type": "HowToStep", name: "Bind security", text: "Add email from Account Security before you add PKR." },
    ],
  };

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.datePublished}
        image={`${SITE_ORIGIN}${IMAGES.bind}`}
        articleBody="Register Teen Patti Show with a number you control, bind email, and recover a locked login without opening a second guest wallet."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: post.title, href: `${ROUTES.blog}/${post.slug}` },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">One number, one wallet, one login</h1>
      <p className="text-gray-400 mb-8">4 September 2026 · {post.readMins} min read</p>
      <Image
        src={IMAGES.bind}
        alt="Teen Patti Show account security screen for binding a login"
        width={400}
        height={711}
        className="rounded-xl mb-8 mx-auto"
        priority
        sizes="(max-width: 768px) 280px, 400px"
      />
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Login problems on Teen Patti Show almost always start at registration. A guest profile, a borrowed SIM, or a second phone on the same account will look fine until the first cash-out. This article is the account path only. Adding PKR is on the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>.
        </p>
        <h2 className="text-2xl font-bold text-accent">Create the account on the phone you will keep</h2>
        <p>
          After you <Link href={ROUTES.download} className="text-accent hover:underline">sideload the APK</Link>, tap Sign up. Enter a Pakistani mobile number that still receives SMS. Set a password you do not reuse on JazzCash. Confirm the OTP. If the code never arrives, wait for the cooldown — spam taps extend the lock.
        </p>
        <p>
          Then open Account Security and bind an email you can open today. That email is how you recover the lobby when the SIM is swapped. The bind screen is the image on this page, not a form a stranger sends you.
        </p>
        <h2 className="text-2xl font-bold text-accent">Sign back in without a second profile</h2>
        <p>
          Use Login, not a fresh guest button. The wallet sits on the registered number. A new guest looks empty because it is a different account. If you forgot the password, follow the <Link href={`${ROUTES.blog}/${BLOGS[4].slug}`} className="text-accent hover:underline">password recovery steps</Link> on the bound phone or email. Anyone offering a “master login” is not support.
        </p>
        <h2 className="text-2xl font-bold text-accent">When the lobby says IP exceed</h2>
        <p>
          Two devices, a PC emulator, and a phone on the same ID often trip this. Sign out of the extra session, wait ten minutes, and try a stable Wi-Fi network. VPN hops look like a farm to the server.
        </p>
        <h2 className="text-2xl font-bold text-accent">Before you add money</h2>
        <p>
          Bind JazzCash or EasyPaisa to the same person who owns the login. Then follow the shop steps. If a friend created the account “for you,” you do not own the cash-out. Read the <Link href={`${ROUTES.blog}/${BLOGS[0].slug}`} className="text-accent hover:underline">real-file checklist</Link> if the icon does not match, and the <Link href={`${ROUTES.blog}/${BLOGS[2].slug}`} className="text-accent hover:underline">bonus wagering notes</Link> before you treat a match as cash.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton>DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
