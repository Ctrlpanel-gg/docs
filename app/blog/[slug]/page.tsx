import { blogSource } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import data from '@/lib/blog-data.json';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Author = (typeof data.authors)[keyof typeof data.authors];

export default async function Post({params}:{params:Promise<{slug:string}>}){const _params=await params;const page=blogSource.getPage([_params.slug]);if(!page)notFound();const Content=page.data.body;const post=data.posts.find(p=>p.slug===_params.slug);return <article className="blog-article"><Link className="back-link" href="/blog">← All posts</Link><h1>{page.data.title}</h1><p className="article-meta">{page.data.description}</p>{post?.authors?.length?<div className="blog-authors">{post.authors.map(a=><Link key={a.name} href={`/blog/authors/${Object.keys(data.authors).find(k=>data.authors[k as keyof typeof data.authors].name===a.name)??'#'}`} className="blog-author"><img src={a.image_url} alt={a.name} className="blog-avatar" loading="lazy"/><span className="blog-author-text"><span className="blog-author-name">{a.name}</span><small className="blog-author-role">{data.authors[((Object.keys(data.authors).find(k=>data.authors[k as keyof typeof data.authors].name===a.name)??'')) as keyof typeof data.authors]?.title}</small></span></Link>)}</div>:null}<DocsBody><Content components={getMDXComponents()}/></DocsBody></article>}
export function generateStaticParams(){return blogSource.getPages().map(p=>({slug:p.slugs[0]}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){return {title:blogSource.getPage([(await params).slug])?.data.title};}
