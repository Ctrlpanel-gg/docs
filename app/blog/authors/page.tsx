import data from '@/lib/blog-data.json';
import Link from 'next/link';
export default function Authors(){return <main className="blog-index"><h1>The maintainers</h1>{Object.entries(data.authors).map(([id,author])=><p key={id}><Link href={`/blog/authors/${id}`}>{author.name} · {author.title} ↗</Link></p>)}</main>}
