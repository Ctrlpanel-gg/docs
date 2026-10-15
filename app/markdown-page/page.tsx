import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
export default function Page() {
  return (
    <HomeLayout {...baseOptions()}>
      <article className="mx-auto my-[60px] w-full max-w-[790px] px-[30px]">
        <h1 className="text-balance text-[42px] font-[650] leading-[1.2] tracking-[-1.5px] max-[640px]:text-[34px]">Markdown page example</h1>
        <p>You don’t need React to write simple standalone pages.</p>
      </article>
    </HomeLayout>
  );
}