import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { GitHubStars } from '@/components/landing/github-stars';
import { AdministrationSection } from '@/components/landing/administration-section';
import { PaymentsSection } from '@/components/landing/payments-section';
import { ThemesSection } from '@/components/landing/themes-section';
import { AsciiRails } from '@/components/landing/ascii-rails';
import { AsciiWordmark } from '@/components/landing/ascii-wordmark';
import { DashboardPreview } from '@/components/landing/dashboard-preview';
import { PillButtonContent } from '@/components/react-bits/PillButtonContent';
import './landing.css';

export default function Home() {
  return (
    <HomeLayout {...baseOptions()} className="landing-layout">
      <div className="landing-frame" id="nd-page" tabIndex={-1}>
        <AsciiRails />
        <section className="landing-hero" aria-labelledby="landing-title">
          <h1 id="landing-title"><span className="sr-only">CtrlPanel.gg</span><AsciiWordmark /></h1>
          <h2 className="landing-tagline">Your panel. Your plans.</h2>
          <p>
            CtrlPanel is a free, open-source management panel. Clients buy servers from plans you
            define, pay hourly to annual, and manage them themselves — you run the numbers from
            one console.
          </p>
          <div className="landing-actions">
            <Link href="/docs/getting-started/install/" className="landing-button">
              <PillButtonContent><ArrowRight aria-hidden="true" /><span>Install</span></PillButtonContent>
            </Link>
            <a href="https://demo.ctrlpanel.gg" target="_blank" rel="noopener noreferrer" className="landing-button">
              <PillButtonContent><ArrowUpRight aria-hidden="true" /><span>Live demo</span></PillButtonContent>
            </a>
            <GitHubStars />
          </div>
        </section>
        <section className="landing-product" aria-label="CtrlPanel dashboard preview">
          <DashboardPreview />
        </section>
        <AdministrationSection />
        <PaymentsSection />
        <ThemesSection />
        <footer className="landing-footer">
          <Link href="/docs" className="landing-docs-link">Make it yours. <span>Read the docs <ArrowRight aria-hidden="true" /></span></Link>
          <nav aria-label="Footer navigation">
            <a href="https://github.com/Ctrlpanel-gg/panel">GitHub</a>
            <a href="https://discord.gg/ctrlpanel-gg-787829714483019826">Discord</a>
            <Link href="/docs/api">API reference</Link>
          </nav>
        </footer>
      </div>
    </HomeLayout>
  );
}
