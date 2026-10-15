import data from '@/lib/blog-data.json';
import Link from 'next/link';
export default function Authors(){return <main className="blog-index"><h1>The maintainers</h1><div className="blog-author-grid">{Object.entries(data.authors).map(([id,author])=><Link key={id} href={`/blog/authors/${id}`} className="blog-author-card"><img src={author.image_url} alt={author.name} className="blog-avatar-lg" loading="lazy"/><div><div className="blog-author-name">{author.name}</div><div className="blog-author-title">{author.title}</div></div></Link>)}</div></main>}
