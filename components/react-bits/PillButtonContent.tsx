import type { ReactNode } from 'react';
import {
	landingButtonFaceAltClass,
	landingButtonFaceClass,
	landingButtonFillClass,
} from '@/components/landing/landing-styles';

/** Pill Nav's rising fill and rolling face, adapted for the landing page links. */
export function PillButtonContent({ children }: { children: ReactNode }) {
	return <>
		<span className={landingButtonFillClass} aria-hidden="true" />
		<span className={landingButtonFaceClass}>{children}</span>
		<span className={landingButtonFaceAltClass} aria-hidden="true">{children}</span>
	</>;
}
