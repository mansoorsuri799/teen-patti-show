'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import { IMAGES, ROUTES, SITE_NAME } from '@/lib/site';

const navLinks = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.download, label: 'Download' },
  { href: ROUTES.deposit, label: 'Deposit' },
  { href: ROUTES.withdraw, label: 'Withdraw' },
  { href: ROUTES.pc, label: 'PC Version' },
  { href: ROUTES.about, label: 'About Us' },
  { href: ROUTES.blog, label: 'Blog' },
  { href: ROUTES.contact, label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src={IMAGES.logo}
              alt={`${SITE_NAME} logo with gold frame and three aces`}
              width={40}
              height={40}
              className="object-contain"
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium transition-colors pb-1 group ${
                isActive(href)
                  ? 'text-accent'
                  : 'text-white hover:text-accent'
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                  isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
