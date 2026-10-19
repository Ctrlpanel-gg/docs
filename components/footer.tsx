import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GithubIcon } from '@/components/icons/github-icon';
import { DiscordIcon } from '@/components/icons/discord-icon';
import { buttonVariants } from '@/components/ui/button';

type FooterLink = { title: string; href: string };
type FooterSection = { label: string; links: FooterLink[] };

const footerLinks: FooterSection[] = [
	{
		label: "Resources",
		links: [
			{ title: "Documentation", href: "/docs" },
			{ title: "API Reference", href: "/docs/api" },
			{ title: "Contributing", href: "/docs/contributing" },
			{ title: "Development", href: "/docs/development" },
			{ title: "Blog", href: "/blog" },
			{ title: "Theme / Extension Hub", href: "https://market.ctrlpanel.gg" },
		],
	},
	{
		label: "Project",
		links: [
			{ title: "GitHub", href: "https://github.com/Ctrlpanel-gg/panel" },
			{ title: "Roadmap", href: "https://github.com/orgs/Ctrlpanel-gg/projects/1" },
			{ title: "Discord", href: "https://discord.gg/ctrlpanel-gg-787829714483019826" },
			{ title: "Demo", href: "https://demo.ctrlpanel.gg" },
		],
	},
	{
		label: "Partners",
		links: [
			{ title: "ZAP-Hosting", href: "https://zap-hosting.com/a/29b1c37a4f87bde5463afe8a0f49d129b16ccf9e" },
		],
	},
];

const socials = [
	{ title: "GitHub", href: "https://github.com/Ctrlpanel-gg/panel", icon: <GithubIcon className="size-4" /> },
	{ title: "Discord", href: "https://discord.gg/ctrlpanel-gg-787829714483019826", icon: <DiscordIcon className="size-4" /> },
];

export function Footer({ className }: { className?: string }) {
	return (
		<footer className={cn('relative mx-auto w-full max-w-[1080px] px-6 pt-4 md:px-10', className)}>
			<section className="relative overflow-hidden rounded-2xl bg-fd-card px-6 py-10 text-center shadow-surface md:px-12 md:py-12">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(50%_100%_at_50%_0%,color-mix(in_oklab,var(--color-fd-primary)_16%,transparent),transparent)]"
				/>
				<div aria-hidden className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 rounded-full bg-fd-primary/40 blur" />
				<div className="relative">
					<h2 className="mx-auto max-w-[24ch] text-balance text-2xl font-semibold tracking-[-0.02em] md:text-[28px]">
						Run your own billing panel.
					</h2>
					<p className="mx-auto mt-3 max-w-[48ch] text-sm leading-relaxed text-fd-muted-foreground">
						Install CtrlPanel on your own server, or explore the live demo first &mdash;
						no setup required to look around.
					</p>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
						<Link href="/docs/getting-started/install" className={buttonVariants()}>
							Install CtrlPanel <ArrowRight size={15} />
						</Link>
						<a
							href="https://discord.gg/ctrlpanel-gg-787829714483019826"
							target="_blank"
							rel="noreferrer noopener"
							className={buttonVariants({ variant: 'outline' })}
						>
							Join Discord <ArrowUpRight size={14} />
						</a>
					</div>
				</div>
			</section>

			<div className="grid w-full gap-10 py-10 md:py-12 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr] lg:gap-8">
				<div className="space-y-4">
					<a className="flex w-max items-center gap-2 text-[19px] font-[750] tracking-[-0.035em]" href="/">
						<img src="/img/controlpanel.webp" width="28" height="28" alt="" />
						CtrlPanel<span className="-ml-[7px] text-fd-primary">.gg</span>
					</a>
					<p className="max-w-sm text-balance text-sm text-fd-muted-foreground">
						A free and open-source management panel for Pterodactyl with
						credit based billing and customization to fit your needs.
					</p>
					<div className="flex items-center gap-2">
						{socials.map(s => (
							<a
								key={s.title}
								href={s.href}
								target="_blank"
								rel="noreferrer noopener"
								aria-label={s.title}
								className="relative inline-flex size-10 items-center justify-center rounded-full border border-fd-border text-fd-muted-foreground transition-colors after:absolute after:-inset-0.5 after:content-[''] hover:border-fd-primary/40 hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary-text"
							>
								{s.icon}
							</a>
						))}
					</div>
				</div>

				{footerLinks.map(section => (
					<div key={section.label}>
						<h3 className="text-xs font-semibold">{section.label}</h3>
						<ul className="mt-4 space-y-1 text-sm text-fd-muted-foreground">
							{section.links.map(link => (
								<li key={link.title}>
									<a
										className="inline-flex items-center py-1 transition-colors hover:text-fd-foreground"
										href={link.href}
										target={link.href.startsWith("http") ? "_blank" : undefined}
										rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-1 pb-6">
				<p className="text-sm text-fd-muted-foreground">&copy; {new Date().getFullYear()} CtrlPanel.gg</p>
				<p className="text-xs text-fd-muted-foreground">CtrlPanel.gg is not affiliated with Discord.</p>
			</div>
		</footer>
	);
}