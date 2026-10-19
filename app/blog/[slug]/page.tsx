import { blogSource } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import data from '@/lib/blog-data.json';
import Link from 'next/link';

type AuthorKey = keyof typeof data.authors;
const authorKeyFor = (name: string) => (Object.keys(data.authors) as AuthorKey[]).find(k => data.authors[k].name === name);

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);
  if (!page) notFound();
  const Content = page.data.body;
  const post = data.posts.find(p => p.slug === slug);

  return (
    <article id="nd-page" tabIndex={-1} className="mx-auto my-[60px] w-full max-w-[790px] px-[30px]">
      <Link className="text-xs text-fd-primary" href="/blog">← All posts</Link>
      <h1 className="text-balance mt-[30px] text-[42px] font-[650] leading-[1.2] tracking-[-1.5px] max-[640px]:text-[34px]">{page.data.title}</h1>
      <p className="mt-5 mb-[45px] text-xs text-fd-muted-foreground">{page.data.description}</p>
      {post?.authors?.length ? (
        <div className="my-3 mb-6 flex flex-wrap gap-2.5">
          {post.authors.map(a => {
            const key = authorKeyFor(a.name);
            return (
              <Link key={a.name} href={`/blog/authors/${key ?? '#'}`} className="inline-flex items-center gap-2 text-[13px] text-fd-muted-foreground no-underline transition-colors hover:text-fd-primary">
                <img src={a.image_url} alt={a.name} loading="lazy" className="size-8 rounded-full border border-fd-border object-cover" />
                <span className="flex flex-col leading-[1.2]">
                  <span className="text-[15px] font-bold text-fd-foreground">{a.name}</span>
                  <small className="mt-0.5 text-xs font-normal text-fd-muted-foreground">{key ? data.authors[key as AuthorKey].title : undefined}</small>
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
      <DocsBody><Content components={getMDXComponents()} /></DocsBody>
    </article>
  );
}

export function generateStaticParams() { return blogSource.getPages().map(p => ({ slug: p.slugs[0] })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { return { title: blogSource.getPage([(await params).slug])?.data.title }; }