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
import { landingButtonClass, landingLayoutClass } from '@/components/landing/landing-styles';

const frameClass = [
	'relative mx-auto w-[calc(100%_-_var(--landing-rail-width)*2)] outline-none',
	'border-x border-[color-mix(in_srgb,var(--landing-foreground)_28%,transparent)]',
	'max-[800px]:w-full max-[800px]:border-x-0',
].join(' ');

const heroClass = [
	'relative isolate mx-auto flex w-[calc(100%_-_clamp(32px,7.6vw,120px))] max-w-[1280px] flex-col items-start',
	'pt-[clamp(52px,5.5vw,86px)] text-left',
	'max-[480px]:w-[calc(100%_-_24px)] max-[480px]:pt-12',
].join(' ');

const taglineClass = [
	'mx-0 mt-[calc(8px_-_var(--landing-ascii-size)*2.5)] text-left text-[clamp(27px,3vw,40px)] font-medium',
	'leading-[1.15] tracking-[-.04em] text-balance max-[800px]:mt-0 max-[480px]:text-[27px]',
].join(' ');

const heroBodyClass = [
	'mx-0 mt-2 w-full max-w-[640px] text-left text-base leading-[1.6] text-[var(--landing-muted)]',
	'max-[800px]:text-[15px] max-[480px]:text-sm',
].join(' ');

const actionsClass = 'mt-6 flex w-full flex-wrap justify-start gap-4 max-[800px]:gap-3 max-[480px]:gap-2.5';

const productClass = [
	'mx-auto mt-[clamp(40px,4.2vw,64px)] w-[calc(100%_-_clamp(32px,7.6vw,120px))] max-w-[1280px]',
	'max-[480px]:w-[calc(100%_-_24px)]',
].join(' ');

const footerClass = [
	'mx-auto flex w-[calc(100%_-_clamp(32px,7.6vw,120px))] max-w-[1280px] items-center justify-between gap-6 py-9',
	'max-[800px]:flex-col max-[800px]:items-start max-[800px]:py-7 max-[480px]:w-[calc(100%_-_24px)]',
].join(' ');

const footerLinkClass = 'underline-offset-4 hover:underline focus-visible:outline-[3px] focus-visible:outline-offset-[5px] focus-visible:outline-[#27a9e1]';

export default function Home() {
	return (
		<HomeLayout {...baseOptions()} className={landingLayoutClass}>
			<div className={frameClass} id="nd-page" tabIndex={-1}>
				<AsciiRails />
				<section className={heroClass} aria-labelledby="landing-title">
					<h1 id="landing-title" className="m-0 w-fit max-w-full leading-none tracking-normal"><span className="sr-only">CtrlPanel.gg</span><AsciiWordmark /></h1>
					<h2 className={taglineClass}>Your panel. Your plans.</h2>
					<p className={heroBodyClass}>
						CtrlPanel is a free, open-source management panel. Clients buy servers from plans you
						define, pay hourly to annual, and manage them themselves — you run the numbers from
						one console.
					</p>
					<div className={actionsClass}>
						<Link href="/docs/getting-started/install/" className={landingButtonClass}>
							<PillButtonContent><ArrowRight aria-hidden="true" /><span>Install</span></PillButtonContent>
						</Link>
						<a href="https://demo.ctrlpanel.gg" target="_blank" rel="noopener noreferrer" className={landingButtonClass}>
							<PillButtonContent><ArrowUpRight aria-hidden="true" /><span>Live demo</span></PillButtonContent>
						</a>
						<GitHubStars />
					</div>
				</section>
				<section className={productClass} aria-label="CtrlPanel dashboard preview">
					<DashboardPreview />
				</section>
				<AdministrationSection />
				<PaymentsSection />
				<ThemesSection />
				<footer className={footerClass}>
					<Link href="/docs" className={`flex flex-wrap gap-2 text-sm font-medium no-underline [&_svg]:size-3.5 ${footerLinkClass}`}>Make it yours. <span className="inline-flex items-center gap-1.5 text-[var(--landing-muted)]">Read the docs <ArrowRight aria-hidden="true" /></span></Link>
					<nav aria-label="Footer navigation" className="flex flex-wrap gap-[22px] text-xs text-[var(--landing-muted)]">
						<a href="https://github.com/Ctrlpanel-gg/panel" className={footerLinkClass}>GitHub</a>
						<a href="https://discord.gg/ctrlpanel-gg-787829714483019826" className={footerLinkClass}>Discord</a>
						<Link href="/docs/api" className={footerLinkClass}>API reference</Link>
					</nav>
				</footer>
			</div>
		</HomeLayout>
	);
}
