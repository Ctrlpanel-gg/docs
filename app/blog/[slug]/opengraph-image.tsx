import { generateOGImage } from 'fumadocs-ui/og';
import { ogLogo } from '@/lib/og-logo';
import { blogSource } from '@/lib/source';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export function generateStaticParams() {
	return blogSource.getPages().map(p => ({ slug: p.slugs[0] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const title = blogSource.getPage([(await params).slug])?.data.title;
	return { alt: title, title };
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const title = blogSource.getPage([(await params).slug])?.data.title ?? 'Blog';
	const description = blogSource.getPage([(await params).slug])?.data.description;

	return generateOGImage({
		title,
		description,
		site: 'ctrlpanel.gg · Blog',
		icon: <img src={ogLogo} width={72} height={72} style={{ borderRadius: 20 }} />,
		primaryColor: '#27a9e1',
		primaryTextColor: '#ffffff',
		width: size.width,
		height: size.height,
	});
}
