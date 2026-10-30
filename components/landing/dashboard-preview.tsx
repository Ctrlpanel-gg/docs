'use client';

import { useEffect, useRef, useState } from 'react';
import { CtrlPanelDashboard } from '@/components/ctrlpanel-dashboard/CtrlPanelDashboard';

/** Render the real React dashboard at its original desktop proportions. */
export function DashboardPreview() {
	const frame = useRef<HTMLDivElement>(null);
	const [scale, setScale] = useState<number>();

	useEffect(() => {
		const element = frame.current;
		if (!element) return;
		const measure = () => setScale(element.getBoundingClientRect().width / 2000);
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="relative aspect-[2000/1086] w-full overflow-hidden rounded-[clamp(12px,1.6vw,24px)] bg-[#343d42] [container-type:inline-size] [&_noscript_img]:absolute [&_noscript_img]:inset-0 [&_noscript_img]:h-auto [&_noscript_img]:w-full" ref={frame}>
			<div
				className="pointer-events-none h-[1086px] w-[2000px] origin-top-left select-none [&_.cp-dashboard]:min-h-[1086px] [&_.cp-dashboard]:font-sans [&_.cp-motd-body_p]:text-[32px]"
				style={{ transform: `scale(${scale ?? 1})`, opacity: scale === undefined ? 0 : 1 }}
				aria-hidden="true"
				inert
			>
				<CtrlPanelDashboard embedded />
			</div>
			<a
				className="group absolute inset-0 flex items-end justify-center p-5 outline-none focus-visible:rounded-[inherit] focus-visible:shadow-[inset_0_0_0_4px_#27a9e1]"
				href="https://demo.ctrlpanel.gg"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Explore the live CtrlPanel demo (opens in a new tab)"
			>
				<span className="inline-flex translate-y-[5px] items-center gap-4 rounded-full border border-[#ffffff38] bg-[#18181bea] px-[17px] py-2.5 text-[13px] font-medium text-white opacity-0 transition-[opacity,transform] duration-[160ms] ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-[480px]:px-3 max-[480px]:py-[7px] max-[480px]:text-[11px]">Explore the live demo <span aria-hidden="true">↗</span></span>
			</a>
			<noscript><img src="/img/demo.webp" alt="CtrlPanel dashboard with server management, credit balance, and a referral program" width="2000" height="1086" /></noscript>
		</div>
	);
}
