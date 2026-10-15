import { PostList } from '@/components/post-list';

export default function Blog() {
  return (
    <main className="mx-auto my-10 mb-[60px] w-full max-w-[1050px] px-[30px]">
      <h1 className="mb-3 text-[58px] font-semibold leading-[1.1] tracking-[-2px] text-balance max-[640px]:text-[42px]">Behind Ctrl Panel.</h1>
      <p className="m-0 leading-relaxed text-fd-muted-foreground">Releases, project updates, and notes from the CtrlPanel community.</p>
      <PostList />
    </main>
  );
}