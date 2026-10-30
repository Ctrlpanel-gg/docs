import Link from 'next/link';
import { footerLinks } from '@/components/footer-links';
import { PillButtonContent } from '@/components/react-bits/PillButtonContent';
import { AsciiTechWordmark } from './ascii-tech-wordmark';
import { FooterGradient } from './footer-effects';
import { landingButtonClass, landingStarButtonClass } from './landing-styles';

const footerLinkClass = 'inline-block py-1 text-[var(--landing-muted)] no-underline transition-colors hover:text-[var(--landing-foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#27a9e1] motion-reduce:transition-none';

function FooterCorners() {
  const corner = 'pointer-events-none absolute bg-[var(--landing-background)] font-mono text-sm leading-none text-[var(--landing-muted)]';
  return <>
    <span className={`${corner} -left-1 -top-2`} aria-hidden="true">+</span>
    <span className={`${corner} -right-1 -top-2`} aria-hidden="true">+</span>
    <span className={`${corner} -bottom-1.5 -left-1`} aria-hidden="true">+</span>
    <span className={`${corner} -bottom-1.5 -right-1`} aria-hidden="true">+</span>
  </>;
}

export function LandingFooter() {
  return <footer id="footer" className="relative isolate overflow-hidden bg-[var(--landing-background)] text-[var(--landing-foreground)]">
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] max-md:h-[340px]">
      <FooterGradient />
    </div>

    <div className="relative mx-auto w-[calc(100%_-_clamp(32px,7.6vw,120px))] max-w-[1280px] max-[480px]:w-[calc(100%_-_24px)]">
      <div className="flex flex-col items-center pb-7 pt-[clamp(250px,20vw,280px)] text-center max-md:pb-6 max-md:pt-[210px]">
        <a href="/" aria-label="CtrlPanel.gg home" className="flex max-w-full justify-center outline-offset-8 focus-visible:outline-2 focus-visible:outline-[#27a9e1] [--landing-ascii-size:clamp(4.2px,1vw,12px)]">
          <AsciiTechWordmark />
        </a>
        <h2 className="m-0 mb-3 mt-1 text-2xl font-medium tracking-[-.03em] max-sm:text-xl">Make it yours.</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/docs/getting-started/install" className={landingButtonClass}>
            <PillButtonContent><span>Install CtrlPanel</span></PillButtonContent>
          </Link>
          <a href="https://discord.gg/ctrlpanel-gg-787829714483019826" target="_blank" rel="noopener noreferrer" className={landingStarButtonClass}>
            <PillButtonContent><span>Join Discord</span></PillButtonContent>
          </a>
        </div>
      </div>

      <div className="relative mb-7 border border-dashed border-[color-mix(in_srgb,var(--landing-foreground)_25%,transparent)]">
      <FooterCorners />
      <nav aria-label="Footer navigation" className="grid grid-cols-[1.3fr_1fr_.9fr_.8fr] gap-10 p-7 max-lg:grid-cols-[1.2fr_1fr_1fr] max-sm:grid-cols-2 max-sm:gap-x-6 max-sm:gap-y-8 max-sm:p-5">
        <p className="m-0 max-w-[29ch] text-[13px] leading-[1.7] text-[var(--landing-muted)] max-lg:col-span-full max-lg:max-w-[50ch]">Free and open-source hosting management for Pterodactyl. Built by the community.</p>
        {footerLinks.map(section => <div key={section.label}>
          <h3 className="m-0 mb-3 font-mono text-[11px] font-medium tracking-wide text-[var(--landing-foreground)]">{section.label}</h3>
          <ul className="m-0 grid list-none gap-1 p-0 text-[13px] leading-[1.5]">
            {section.links.map(link => <li key={link.title}>
              <a href={link.href} className={footerLinkClass} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{link.title}</a>
            </li>)}
          </ul>
        </div>)}
      </nav>

      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-dashed border-[color-mix(in_srgb,var(--landing-foreground)_25%,transparent)] px-7 py-4 font-mono text-[10px] leading-relaxed text-[var(--landing-muted)] max-sm:px-5">
          <p className="m-0">© {new Date().getFullYear()} CtrlPanel.gg (Design by <a href="https://nadhi.dev"><u>Nadhi.dev</u></a> and <u>Simba)</u> · Made with love ❤️</p>
        <p className="m-0">CtrlPanel.gg is not affiliated with Discord.</p>
      </div>
      </div>
    </div>
  </footer>;
}
