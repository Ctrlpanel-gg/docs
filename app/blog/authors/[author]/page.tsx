import data from '@/lib/blog-data.json';
import { PostList } from '@/components/post-list';
import { notFound } from 'next/navigation';

type AuthorKey = keyof typeof data.authors;

export function generateStaticParams() { return Object.keys(data.authors).map(author => ({ author })); }

export default async function Author({ params }: { params: Promise<{ author: string }> }) {
  const id = (await params).author;
  const author = data.authors[id as AuthorKey];
  if (!author) notFound();
  const socials: { github?: string; email?: string; website?: string } = author.socials;

  return (
    <main id="nd-page" tabIndex={-1} className="mx-auto my-10 mb-16 w-full max-w-[1080px] px-6 md:px-10">
      <div className="my-3 mb-8 flex items-center gap-5">
        <img src={author.image_url} alt={author.name} className="size-20 rounded-full border-2 border-fd-border object-cover" />
        <div>
          <h1 className="text-balance text-[58px] font-semibold leading-[1.1] tracking-[-0.035em] max-[640px]:text-[42px]">{author.name}</h1>
          <div className="mt-1 text-xs leading-[1.3] text-fd-muted-foreground">{author.title}</div>
          <div className="mt-2 flex gap-3.5 text-[13px]">
            {socials.github ? <a href={`https://github.com/${socials.github}`} target="_blank" rel="noreferrer noopener" className="text-fd-primary-text no-underline hover:underline">GitHub</a> : null}
            {socials.website ? <a href={socials.website} target="_blank" rel="noreferrer noopener" className="text-fd-primary-text no-underline hover:underline">Website</a> : null}
            {socials.email ? <a href={`mailto:${socials.email}`} className="text-fd-primary-text no-underline hover:underline">Email</a> : null}
          </div>
        </div>
      </div>
      <PostList posts={data.posts.filter(p => p.authors.some(a => a.name === author.name))} />
    </main>
  );
}