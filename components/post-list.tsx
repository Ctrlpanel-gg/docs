import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import data from '@/lib/blog-data.json';

export function PostList({posts=data.posts}:{posts?:typeof data.posts}){return <div className="posts">{posts.map(post=><Link className="post-row" key={post.slug} href={`/blog/${post.slug}`}><div><time>{post.date}</time><span>{post.tags.join(' / ')}</span></div><div className="post-row-head"><div className="blog-author-stack">{post.authors.map(a=><img key={a.name} src={a.image_url} alt={a.name} className="blog-avatar-sm" loading="lazy"/>)}</div><h2>{post.title}</h2></div><p className="post-excerpt">{post.excerpt?post.excerpt:post.authors.map(a=>a.name).join(', ')}</p><ArrowUpRight size={24}/></Link>)}</div>}
