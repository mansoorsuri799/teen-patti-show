import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BLOGS, IMAGES, ROUTES, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const post = BLOGS[4];

export const metadata: Metadata = {
  title: "How to Recover a Teen Patti Show Password",
  description: post.description,
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `${SITE_ORIGIN}${ROUTES.blog}/${post.slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_ORIGIN}${IMAGES.bind}`, width: 400, height: 711, alt: "Teen Patti Show bind-account screen used for password recovery" }],
  },
};

export default function Page() {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Recover a Teen Patti Show password",
    totalTime: "PT6M",
    step: [
      { "@type": "HowToStep", name: "Open Login", text: "Open Teen Patti Show and tap Login, not a new Register or guest button." },
      { "@type": "HowToStep", name: "Forgot Password", text: "Tap Forgot Password on the login screen." },
      { "@type": "HowToStep", name: "Enter the bound number or email", text: "Type the Pakistani mobile number or email you registered and bound." },
      { "@type": "HowToStep", name: "Confirm the OTP", text: "Enter the OTP that arrives on that SIM or inbox. Do not forward it." },
      { "@type": "HowToStep", name: "Set a new password", text: "Choose a password you do not reuse on JazzCash, then sign in and check the wallet number." },
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
        articleBody="Reset a forgotten Teen Patti Show password on the bound mobile number or email, wait out a missing OTP, and never open a second guest wallet."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: ROUTES.blog },
          { name: post.title, href: `${ROUTES.blog}/${post.slug}` },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Reset the login on the number you still own</h1>
      <p className="text-gray-400 mb-8">4 September 2026 · {post.readMins} min read</p>
      <Image
        src={IMAGES.bind}
        alt="Teen Patti Show account bind screen used when recovering a forgotten password"
        width={400}
        height={711}
        className="rounded-xl mb-8 mx-auto"
        style={{ height: "auto" }}
        priority
        sizes="(max-width: 768px) 280px, 400px"
      />
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          A forgotten Teen Patti Show password is a login problem, not a new account. The JazzCash balance sits on the number you registered. A second Register or a guest tap opens an empty lobby and looks like “the money vanished.” Creating the first login is on the <Link href={`${ROUTES.blog}/${BLOGS[1].slug}`} className="text-accent hover:underline">account and login article</Link>. This page is only the reset.
        </p>

        <h2 className="text-2xl font-bold text-accent">Use Forgot Password, not a new Sign up</h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Open the gold-frame Teen Patti Show icon from the <Link href={ROUTES.download} className="text-accent hover:underline">APK you installed here</Link>.</li>
          <li>Tap Login. Do not tap Register or Play as guest.</li>
          <li>Tap Forgot Password under the password field.</li>
          <li>Enter the Pakistani mobile number or the email you bound on the security screen — the same layout as the image on this page.</li>
          <li>Wait for the OTP on that SIM or inbox. Type it in the app. Do not send it to a WhatsApp “helper.”</li>
          <li>Set a new password you do not reuse on JazzCash or EasyPaisa.</li>
          <li>Sign in. Open Wallet and confirm the bound number is still yours before you add PKR.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent">When the OTP never arrives</h2>
        <p>
          Spam taps extend the cooldown. Wait the timer on the screen, then request one more code. If you typed a number that never received the first registration SMS, this reset cannot invent a new SIM. Bind an email while you still have access — that inbox is the backup when a Jazz number is recycled.
        </p>
        <p>
          Two devices on the same ID can also block a code. Sign out of the emulator or the second phone, wait ten minutes, and try again on the handset that holds the SIM.
        </p>

        <h2 className="text-2xl font-bold text-accent">Guest play has nothing to recover</h2>
        <p>
          Guest chips are not a passworded wallet. If you only ever tapped Play as guest, there is no Forgot Password path to your old balance. Register on a number you control before the first <Link href={ROUTES.deposit} className="text-accent hover:underline">JazzCash add</Link>.
        </p>

        <h2 className="text-2xl font-bold text-accent">What support can and cannot do</h2>
        <p>
          In-app chat can confirm a ticket if the OTP screen errors after a correct number. Chat cannot hand you someone else’s login. Anyone who asks for your new password, JazzCash PIN, or a CNIC photo is not this desk. Use the WhatsApp line printed inside Help, or the <Link href={ROUTES.contact} className="text-accent hover:underline">site contact page</Link> for website issues.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton>DOWNLOAD NOW</CtaButton>
      </div>
    </article>
  );
}
