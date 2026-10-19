import type { Metadata } from 'next';
import { EmptyState } from '@/components/empty-state';

export const metadata: Metadata = {
	title: 'Page not found',
	description: 'The page you were looking for does not exist.',
};

export default function NotFound() {
	return (
		<EmptyState
			particleText="404"
			eyebrow="404 — Page not found"
			title="This page doesn't exist."
			description="The link may be outdated, or the page may have moved. Head back to the docs to find what you need."
			action={{ label: 'Back to documentation', href: '/docs' }}
		/>
	);
}
