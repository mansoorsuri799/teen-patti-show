import Link from 'next/link';
import { APP_DOWNLOAD_URL } from '@/lib/site';

export const DOWNLOAD_URL = APP_DOWNLOAD_URL;

type IconKind = 'download' | 'arrow' | 'mail';

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  icon?: IconKind;
  onClick?: () => void;
  type?: 'button' | 'submit';
  as?: 'link' | 'button';
  className?: string;
  ariaLabel?: string;
};

const ICONS: Record<IconKind, React.ReactNode> = {
  download: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  mail: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const baseClass =
  'download-btn inline-flex items-center justify-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-cta bg-transparent hover:bg-cta/10 transition-all group';

function ButtonInner({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: IconKind;
}) {
  return (
    <>
      <span className="text-left leading-tight">{children}</span>
      <div className="download-icon ml-3 bg-brand-orange rounded-full p-2 group-hover:scale-110 transition-transform text-white">
        {ICONS[icon]}
      </div>
    </>
  );
}

export default function CtaButton({
  href = DOWNLOAD_URL,
  children,
  icon = 'download',
  onClick,
  type = 'button',
  as = 'link',
  className = '',
  ariaLabel,
}: CtaButtonProps) {
  const classes = `${baseClass} ${className}`.trim();
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  if (as === 'button') {
    return (
      <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </button>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      <ButtonInner icon={icon}>{children}</ButtonInner>
    </Link>
  );
}
