'use client';

import { useEffect } from 'react';
import { ParticleField } from '@/components/particle-field';

type Props = { error: Error & { digest?: string }; reset: () => void };

export default function Error({ error, reset }: Props) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="relative h-dvh w-full overflow-hidden bg-fd-background text-fd-foreground antialiased">
			<div className="absolute inset-0">
				<ParticleField text="500" sampleStep={2} dotSize={1.6} threshold={40} dust={320} />
			</div>

			<div
				aria-hidden
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						'radial-gradient(1200px 800px at 50% 45%, transparent 38%, color-mix(in srgb, var(--color-fd-background) 88%, transparent) 95%)',
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%]"
				style={{
					background:
						'linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--color-fd-background) 55%, transparent) 38%, color-mix(in srgb, var(--color-fd-background) 90%, transparent) 72%, var(--color-fd-background) 100%)',
				}}
			/>

			<header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
				<a href="/" className="flex items-center gap-2 text-[17px] font-[750] tracking-[-0.5px]">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="/img/controlpanel.webp" width={26} height={26} alt="" />
					CtrlPanel<span className="-ml-[6px] text-fd-primary">.gg</span>
				</a>
				<nav className="flex items-center gap-5 text-[13px] text-fd-muted-foreground">
					<a className="transition-colors hover:text-fd-foreground" href="/docs">Docs</a>
					<a className="transition-colors hover:text-fd-foreground" href="/blog">Blog</a>
					<a className="transition-colors hover:text-fd-foreground" href="https://github.com/Ctrlpanel-gg/panel">GitHub</a>
				</nav>
			</header>

			<main
				id="nd-page"
				tabIndex={-1}
				className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-4 px-6 pb-16 text-center"
			>
				<div
					className="pointer-events-none font-mono text-[11px] uppercase tracking-[0.3em] text-fd-muted-foreground"
					style={{ textShadow: '0 1px 16px rgba(0,0,0,0.7)' }}
				>
					500 — Something broke
				</div>
				<h1
					className="pointer-events-none max-w-xl text-balance text-3xl font-semibold leading-tight tracking-[-1px] md:text-4xl"
					style={{ textShadow: '0 1px 24px rgba(0,0,0,0.65)' }}
				>
					That one&apos;s on us.
				</h1>
				<p
					className="pointer-events-none max-w-md text-sm leading-relaxed text-fd-muted-foreground"
					style={{ textShadow: '0 1px 16px rgba(0,0,0,0.7)' }}
				>
					Something went wrong while loading this page. Try again, and if it keeps
					happening let us know on Discord.
				</p>
				<button
					type="button"
					onClick={reset}
					className="mt-2 inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-fd-primary px-5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary-text"
				>
					Try again
				</button>
			</main>
		</div>
	);
}
