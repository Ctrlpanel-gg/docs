import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import data from '@/lib/blog-data.json';
export function PostList({posts=data.posts}:{posts?:typeof data.posts}){return <div className="posts">{posts.map(post=><Link className="post-row" key={post.slug} href={`/blog/${post.slug}`}><div><time>{post.date}</time><span>{post.tags.join(' / ')}</span></div><h2>{post.title}</h2><p>{post.authors.map(a=>a.name).join(', ')}</p><ArrowUpRight size={24}/></Link>)}</div>}
