import Link from 'next/link';
import data from '@/lib/blog-data.json';

export default function Authors() {
  return (
    <main className="mx-auto my-10 mb-[60px] w-full max-w-[1050px] px-[30px]">
      <h1 className="mb-3 text-[58px] font-semibold leading-[1.1] tracking-[-2px] max-[640px]:text-[42px]">The maintainers</h1>
      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3.5">
        {Object.entries(data.authors).map(([id, author]) => (
          <Link key={id} href={`/blog/authors/${id}`} className="flex items-center gap-3 rounded-lg border border-fd-border p-3.5 no-underline transition-colors hover:border-fd-primary hover:bg-fd-muted">
            <img src={author.image_url} alt={author.name} loading="lazy" className="size-12 rounded-full border border-fd-border object-cover" />
            <div>
              <div className="text-[17px] font-bold leading-[1.2] text-fd-foreground">{author.name}</div>
              <div className="mt-1 text-xs leading-[1.3] text-fd-muted-foreground">{author.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}