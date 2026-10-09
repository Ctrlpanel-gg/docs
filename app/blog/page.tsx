import Link from 'next/link';
import data from '@/lib/blog-data.json';
import { ArrowUpRight } from 'lucide-react';
export default function Blog(){return <main className="blog-index"><h1>Behind Ctrl Panel.</h1><p className="blog-lead">Releases, project updates, and notes from the CtrlPanel community.</p><div className="posts">{data.posts.map(post=><Link className="post-row" key={post.slug} href={`/blog/${post.slug}`}><div><time>{post.date}</time><span>{post.tags.join(' / ')}</span></div><h2>{post.title}</h2><p>{post.authors.map(a=>a.name).join(', ')}</p><ArrowUpRight size={24}/></Link>)}</div></main>}
