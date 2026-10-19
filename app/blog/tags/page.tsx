import data from '@/lib/blog-data.json';
import Link from 'next/link';

export default function Tags() {
  return (
    <main id="nd-page" tabIndex={-1} className="mx-auto my-10 mb-16 w-full max-w-[1080px] px-6 md:px-10">
      <h1 className="text-balance mb-3 text-[58px] font-semibold leading-[1.1] tracking-[-0.035em] max-[640px]:text-[42px]">Topics</h1>
      {[...new Set(data.posts.flatMap(p => p.tags))].map(tag => (
        <p key={tag}><Link href={`/blog/tags/${tag}`}>{tag} ↗</Link></p>
      ))}
    </main>
  );
}