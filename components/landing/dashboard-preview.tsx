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
    <div className="landing-dashboard-preview" ref={frame}>
      <div
        className="landing-dashboard-canvas"
        style={{ transform: `scale(${scale ?? 1})`, opacity: scale === undefined ? 0 : 1 }}
        aria-hidden="true"
        inert
      >
        <CtrlPanelDashboard embedded />
      </div>
      <a
        className="landing-preview-link"
        href="https://demo.ctrlpanel.gg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore the live CtrlPanel demo (opens in a new tab)"
      >
        <span className="landing-preview-caption">Explore the live demo <span aria-hidden="true">↗</span></span>
      </a>
      <noscript><img src="/img/demo.webp" alt="CtrlPanel dashboard with server management, credit balance, and a referral program" width="2000" height="1086" /></noscript>
    </div>
  );
}
