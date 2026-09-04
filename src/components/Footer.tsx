import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { FACEBOOK_PROFILE_URL, ROUTES, SITE_HOST, SITE_NAME } from '@/lib/site';
import { BLOGS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">{SITE_NAME}</h2>
            <p className="text-sm text-gray-300 mb-4">
              {SITE_NAME} is an Android card lobby for Pakistani players who want Teen Patti tables, JazzCash or EasyPaisa wallets, and a clear place to install the APK.
            </p>
            <div className="flex space-x-4">
              <a href={FACEBOOK_PROFILE_URL} target="_blank" rel="noopener noreferrer" aria-label="Teen Patti Show on Facebook">
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.home} className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href={ROUTES.download} className="text-gray-300 hover:text-accent transition-colors">Download the APK</Link></li>
              <li><Link href={ROUTES.pc} className="text-gray-300 hover:text-accent transition-colors">Play on Windows</Link></li>
              <li><Link href={ROUTES.blog} className="text-gray-300 hover:text-accent transition-colors">Guides and reviews</Link></li>
              <li><Link href={ROUTES.about} className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.contact} className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.deposit} className="text-gray-300 hover:text-accent transition-colors">JazzCash deposit steps</Link></li>
              <li><Link href={ROUTES.withdraw} className="text-gray-300 hover:text-accent transition-colors">EasyPaisa cash-out steps</Link></li>
              <li>
                <Link href={`${ROUTES.blog}/${BLOGS[1].slug}`} className="text-gray-300 hover:text-accent transition-colors">
                  Account and login help
                </Link>
              </li>
              <li>
                <Link href={`${ROUTES.blog}/${BLOGS[4].slug}`} className="text-gray-300 hover:text-accent transition-colors">
                  Recover a forgotten password
                </Link>
              </li>
              <li>
                <Link href={`${ROUTES.blog}/${BLOGS[3].slug}`} className="text-gray-300 hover:text-accent transition-colors">
                  Table tips before a show
                </Link>
              </li>
              <li><Link href={ROUTES.privacy} className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href={ROUTES.disclaimer} className="text-gray-300 hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Get the {SITE_NAME} APK from this site, then add JazzCash or EasyPaisa only after you confirm the wallet screen matches your own number.
            </p>
            <CtaButton ariaLabel={`Download ${SITE_NAME} for Android`}>DOWNLOAD NOW</CtaButton>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">© 2026 {SITE_NAME}. All rights reserved. | <Link href="/" className="hover:text-accent">{SITE_HOST}</Link></p>
        </div>
      </div>
    </footer>
  );
}
