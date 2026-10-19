import type { Metadata } from 'next';
import { PostList } from '@/components/post-list';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Releases, project updates, and notes from the CtrlPanel community.',
};

export default function Blog() {
  return (
    <main id="nd-page" tabIndex={-1} className="mx-auto my-10 mb-16 w-full max-w-[1080px] px-6 md:px-10">
      <h1 className="mb-3 text-[58px] font-semibold leading-[1.1] tracking-[-0.035em] text-balance max-[640px]:text-[42px]">Behind CtrlPanel.</h1>
      <p className="m-0 leading-relaxed text-fd-muted-foreground">Releases, project updates, and notes from the CtrlPanel community.</p>
      <PostList />
    </main>
  );
}
