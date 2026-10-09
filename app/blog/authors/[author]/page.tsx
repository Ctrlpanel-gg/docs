import data from '@/lib/blog-data.json';
import { PostList } from '@/components/post-list';
import { notFound } from 'next/navigation';
export function generateStaticParams(){return Object.keys(data.authors).map(author=>({author}));}
export default async function Author({params}:{params:Promise<{author:string}>}){const id=(await params).author;const author=data.authors[id as keyof typeof data.authors];if(!author)notFound();return <main className="blog-index"><div className="eyebrow">{author.title}</div><h1>{author.name}</h1><a href={`https://github.com/${author.socials.github}`}>GitHub ↗</a><PostList posts={data.posts.filter(p=>p.authors.some(a=>a.name===author.name))}/></main>}
