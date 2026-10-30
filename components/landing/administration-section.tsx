import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { AdministrationOverview } from './administration-overview';
import { dollarDividerClass } from './landing-styles';

const adminWordmark = String.raw`  /$$$$$$        /$$               /$$
 /$$__  $$      | $$              |__/
| $$  \ $$  /$$$$$$$ /$$$$$$/$$$$  /$$ /$$$$$$$
| $$$$$$$$ /$$__  $$| $$_  $$_  $$| $$| $$__  $$
| $$__  $$| $$  | $$| $$ \ $$ \ $$| $$| $$  \ $$
| $$  | $$| $$  | $$| $$ | $$ | $$| $$| $$  | $$
| $$  | $$|  $$$$$$$| $$ | $$ | $$| $$| $$  | $$
|__/  |__/ \_______/|__/ |__/ |__/|__/|__/  |__/`;

export { AdministrationOverview as AdministrationGraphic } from './administration-overview';

export function AdministrationSection() {
	return <>
		<div id="administration" className={`${dollarDividerClass} mt-[clamp(32px,3vw,48px)]`} aria-hidden="true">{'$'.repeat(512)}</div>
		<section className="mx-auto w-[calc(100%_-_clamp(32px,7.6vw,120px))] max-w-[1280px] py-8 [--admin-columns:minmax(0,1fr)_minmax(0,1.15fr)] [--admin-gap:clamp(28px,4vw,56px)] max-[980px]:w-[calc(100%_-_32px)] max-[980px]:py-6 max-[980px]:[--admin-columns:minmax(0,1fr)_minmax(0,1.1fr)] max-[980px]:[--admin-gap:24px]" aria-labelledby="administration-title">
			<header className="grid grid-cols-[var(--admin-columns)] items-start gap-[var(--admin-gap)] max-[980px]:grid-cols-1 max-[980px]:gap-[18px]">
				<h2 id="administration-title" className="col-start-1 row-start-1 m-0 leading-none max-[980px]:col-auto max-[980px]:row-auto"><span className="sr-only">Admin</span><pre className="m-0 block border-0 bg-transparent p-0 whitespace-pre font-mono font-medium leading-[1.12] tracking-normal text-[var(--landing-foreground)] text-[clamp(7px,.7vw,10px)] max-[980px]:text-[clamp(7px,2.05vw,10px)]" aria-hidden="true">{adminWordmark}</pre></h2>
				<div className="col-start-2 row-start-1 min-w-0 w-full max-w-[58ch] justify-self-start max-[980px]:col-auto max-[980px]:row-auto max-[980px]:max-w-[520px]">
					<p className="m-0 mb-2 text-xl font-medium leading-[1.4] tracking-[-.02em] text-[var(--landing-foreground)]">Run your hosting from one place.</p>
					<p className="m-0 text-sm leading-[1.65] text-[var(--landing-muted)]">Manage customer accounts, hosting plans, payments, and support. Define staff access with granular roles and review activity logs.</p>
					<Link href="/docs/" className="mt-3 inline-flex items-center gap-2 py-1 text-xs font-semibold no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#27a9e1] [&_svg]:size-3.5">Explore the docs <ArrowRight aria-hidden="true"/></Link>
				</div>
			</header>
			<AdministrationOverview />
		</section>
	</>;
}
