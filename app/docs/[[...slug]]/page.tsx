import { LiveDocsPage } from '@/components/live-docs-page';
import { source } from '@/lib/source';
import { DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/layouts/docs/page';
import { getMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const Content = page.data.body;
  return (
    <LiveDocsPage key={page.url} toc={page.data.toc} full={page.data.full} className="gap-6 pt-6 md:pt-8 xl:pt-8">
      <header className="flex flex-col gap-3">
        <DocsTitle className="leading-tight tracking-tight">{page.data.title}</DocsTitle>
        {page.data.description?.trim() && <DocsDescription className="mb-0 text-base leading-relaxed">{page.data.description}</DocsDescription>}
      </header>
      <DocsBody className="docs-content"><Content components={getMDXComponents()} /></DocsBody>
    </LiveDocsPage>
  );
}
export function generateStaticParams() { return source.generateParams(); }
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const page = source.getPage((await params).slug);
  return { title: page?.data.title, description: page?.data.description };
}
