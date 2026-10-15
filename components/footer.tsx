import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons/github-icon";

type FooterLink = { title: string; href: string; icon?: React.ReactNode };
type FooterSection = { label: string; links: FooterLink[] };

const footerLinks: FooterSection[] = [
	{
		label: "Resources",
		links: [
			{ title: "Documentation", href: "/docs" },
			{ title: "API Reference", href: "/docs/api" },
			{ title: "Contributing", href: "/docs/contributing" },
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
	{
		label: "Social Links",
		links: [
			{ title: "GitHub", href: "https://github.com/Ctrlpanel-gg/panel", icon: <GithubIcon /> },
		],
	},
];

export function Footer({ className }: { className?: string }) {
	return (
		<footer
			className={cn(
				'relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center rounded-t-4xl border-t px-6 md:rounded-t-6xl md:px-8',
				'bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-primary/.12),transparent)]',
				className,
			)}
		>
			<div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fd-primary/40 blur" />

			<div className="grid w-full gap-8 py-6 md:py-8 lg:grid-cols-3 lg:gap-8">
				<div className="space-y-4">
					<a className="flex w-max items-center gap-2 text-[19px] font-[750] tracking-[-0.7px]" href="/">
						<img src="/img/controlpanel.png" width="28" height="28" alt="" />
						CtrlPanel<span className="-ml-[7px] text-fd-primary">.gg</span>
					</a>
					<p className="mt-8 max-w-sm text-balance text-muted-foreground text-sm md:mt-0">
						A free and open-source management panel for Pterodactyl with
						credit based billing and customization to fit your needs.
					</p>
				</div>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0">
					{footerLinks.map(section => (
						<div className="mb-10 md:mb-0" key={section.label}>
							<h3 className="text-xs font-semibold">{section.label}</h3>
							<ul className="mt-4 space-y-2 text-muted-foreground text-sm">
								{section.links.map(link => (
									<li key={link.title}>
										<a
											className="inline-flex items-center duration-200 hover:text-foreground [&_svg]:me-1.5 [&_svg]:size-3.5"
											href={link.href}
											target={link.href.startsWith("http") ? "_blank" : undefined}
											rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
										>
											{link.icon}
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-1 py-4">
				<p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} CtrlPanel.gg</p>
				<p className="text-muted-foreground text-xs">CtrlPanel.gg is not affiliated with Discord.</p>
			</div>
		</footer>
	);
}