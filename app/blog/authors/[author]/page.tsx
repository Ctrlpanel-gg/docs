import data from '@/lib/blog-data.json';
import { PostList } from '@/components/post-list';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Globe, Mail, AtSign } from 'lucide-react';
export function generateStaticParams(){return Object.keys(data.authors).map(author=>({author}));}
export default async function Author({params}:{params:Promise<{author:string}>}){const id=(await params).author;const author=data.authors[id as keyof typeof data.authors];if(!author)notFound();const socials: { github?: string; email?: string; website?: string } = author.socials;return <main className="blog-index"><div className="blog-author-hero"><img src={author.image_url} alt={author.name} className="blog-avatar-lg"/><div><h1>{author.name}</h1><div className="blog-author-title">{author.title}</div><div className="blog-socials">{socials.github?<a href={`https://github.com/${socials.github}`} target="_blank" rel="noreferrer noopener">GitHub</a>:null}{socials.website?<a href={socials.website} target="_blank" rel="noreferrer noopener">Website</a>:null}{socials.email?<a href={`mailto:${socials.email}`}>Email</a>:null}</div></div></div><PostList posts={data.posts.filter(p=>p.authors.some(a=>a.name===author.name))}/></main>}
