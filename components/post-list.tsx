import Link from 'next/link';
import data from '@/lib/blog-data.json';

const date = (iso: string) =>
  new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));

export function PostList({ posts = data.posts }: { posts?: typeof data.posts }) {
  return (
    <div className="mt-8">
      {posts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative block border-t border-fd-border py-7 pr-11 pb-8">
          <div className="flex gap-6 font-mono text-[10px] text-fd-primary-text">
            <time dateTime={post.date}>{date(post.date)}</time>
            <span>{post.tags.join(' / ')}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="mr-3.5 inline-flex align-middle">
              {post.authors.map(a => (
                <img key={a.name} src={a.image_url} alt={a.name} loading="lazy" className="size-[26px] rounded-full border-2 border-fd-background object-cover [&:not(:first-child)]:-ml-2" />
              ))}
            </div>
            <h2 className="my-3 text-[28px] font-semibold tracking-[-0.03em] group-hover:text-fd-primary-text">{post.title}</h2>
          </div>
          <p className="mt-2 text-base leading-relaxed text-fd-muted-foreground line-clamp-3 max-w-[60ch]">{post.excerpt ? post.excerpt : post.authors.map(a => a.name).join(', ')}</p>
        </Link>
      ))}
    </div>
  );
}