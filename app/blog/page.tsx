import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import data from '@/lib/blog-data.json';

export default function Blog() {
  return (
    <main className="mx-auto my-10 mb-[60px] w-full max-w-[1050px] px-[30px]">
      <h1 className="mb-3 text-[58px] font-semibold leading-[1.1] tracking-[-2px] max-[640px]:text-[42px]">Behind Ctrl Panel.</h1>
      <p className="m-0 leading-relaxed text-fd-muted-foreground">Releases, project updates, and notes from the CtrlPanel community.</p>
      <div className="mt-8">
        {data.posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative block border-t border-fd-border py-[30px] pr-[45px] pb-[35px] [&>svg]:absolute [&>svg]:top-14 [&>svg]:right-0">
            <div className="flex gap-6 font-mono text-[10px] text-fd-primary">
              <time>{post.date}</time>
              <span>{post.tags.join(' / ')}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="mr-3.5 inline-flex align-middle">
                {post.authors.map(a => (
                  <img key={a.name} src={a.image_url} alt={a.name} loading="lazy" className="size-[26px] rounded-full border-2 border-fd-background object-cover [&:not(:first-child)]:-ml-2" />
                ))}
              </div>
              <h2 className="my-3 text-[28px] font-[650] tracking-[-0.8px] group-hover:text-fd-primary">{post.title}</h2>
            </div>
            <p className="mt-2 text-base leading-relaxed text-fd-muted-foreground line-clamp-3 max-w-[60ch]">{post.excerpt ? post.excerpt : post.authors.map(a => a.name).join(', ')}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}