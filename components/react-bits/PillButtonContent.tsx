import type { ReactNode } from 'react';

/** Pill Nav's rising fill and rolling face, adapted for the landing page links. */
export function PillButtonContent({ children }: { children: ReactNode }) {
  return <>
    <span className="landing-button-fill" aria-hidden="true" />
    <span className="landing-button-face">{children}</span>
    <span className="landing-button-face landing-button-face-alt" aria-hidden="true">{children}</span>
  </>;
}
