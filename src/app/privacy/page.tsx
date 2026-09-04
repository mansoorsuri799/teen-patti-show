import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ROUTES, SITE_EMAIL, SITE_HOST, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How teenpattishowgame.com.pk collects messages, logs, and analytics when you read Teen Patti Show guides.",
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.privacy}` },
  openGraph: {
    title: "Privacy Policy | Teen Patti Show",
    description: "Privacy practices for the Teen Patti Show website.",
    url: `${SITE_ORIGIN}${ROUTES.privacy}`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: ROUTES.privacy }]} />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-lg text-gray-400 mb-10">Last updated: 4 September 2026</p>
        <div className="bg-secondary rounded-2xl p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Who this covers</h2>
            <p>
              This policy is for the website at {SITE_HOST}, published by {SITE_NAME}. It explains what this site collects when you read guides, open pages, or email support. The Android app has its own in-app notices for login and wallet data. Those notices are not replaced by this page.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">What we collect on the website</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email address and message text if you write to {SITE_EMAIL}</li>
              <li>Standard server logs: IP address, browser type, pages requested, and time</li>
              <li>Optional analytics events (page views) if analytics is enabled on the site</li>
            </ul>
            <p className="mt-4">
              We do not ask this website for your JazzCash PIN, CNIC scan, or APK login password. Do not send those in email.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Why we use it</h2>
            <p>
              We use contact mail to answer site questions. We use logs to keep the site up and to see which guides break. We do not sell mailing lists. We may share a log excerpt with a host or security vendor if a request looks like abuse.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Cookies</h2>
            <p>
              The site may set a small cookie for basic analytics or to remember a dismissed banner. You can block cookies in the browser. Pages will still load.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">How long we keep mail</h2>
            <p>
              Support threads are kept long enough to finish the request, then deleted on a routine clean-up unless a legal hold applies in Pakistan.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Age</h2>
            <p>
              The guides describe a real-money card lobby. They are written for adults 18 and over. If a child contacts us, we delete the message and do not create an account on their behalf.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Your requests</h2>
            <p>
              Email {SITE_EMAIL} to ask what we hold from your messages, or to ask us to delete a thread. We will need enough detail to find the mail. See also the <Link href={ROUTES.contact} className="text-accent hover:underline">contact page</Link>.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Changes</h2>
            <p>
              When this policy changes, we update the date at the top. Continued use of {SITE_HOST} after that date means you have read the new version.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
