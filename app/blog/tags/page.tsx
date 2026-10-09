import data from '@/lib/blog-data.json';
import Link from 'next/link';
export default function Tags(){return <main className="blog-index"><h1>Topics</h1>{[...new Set(data.posts.flatMap(p=>p.tags))].map(tag=><p key={tag}><Link href={`/blog/tags/${tag}`}>{tag} ↗</Link></p>)}</main>}
