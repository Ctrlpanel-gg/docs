import { generateOGImage } from 'fumadocs-ui/og';
import { ogLogo } from '@/lib/og-logo';

export const alt = 'CtrlPanel.gg — the free, open-source billing panel for Pterodactyl';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function Image() {
	return generateOGImage({
		title: 'CtrlPanel.gg',
		description: 'The free & open-source billing panel for Pterodactyl',
		site: 'ctrlpanel.gg',
		icon: <img src={ogLogo} width={96} height={96} style={{ borderRadius: 24 }} />,
		primaryColor: '#27a9e1',
		primaryTextColor: '#ffffff',
		width: size.width,
		height: size.height,
	});
}
