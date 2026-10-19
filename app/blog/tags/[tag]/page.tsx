import data from '@/lib/blog-data.json';
import { PostList } from '@/components/post-list';

export function generateStaticParams() { return [...new Set(data.posts.flatMap(p => p.tags))].map(tag => ({ tag })); }

export default async function Tag({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  return (
    <main id="nd-page" tabIndex={-1} className="mx-auto my-10 mb-16 w-full max-w-[1080px] px-6 md:px-10">
      <h1 className="text-balance mb-3 text-[58px] font-semibold leading-[1.1] tracking-[-0.035em] max-[640px]:text-[42px]">{tag}</h1>
      <PostList posts={data.posts.filter(p => p.tags.includes(tag))} />
    </main>
  );
}