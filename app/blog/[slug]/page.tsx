import { blogSource } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import Link from 'next/link';
export default async function Post({params}:{params:Promise<{slug:string}>}){const page=blogSource.getPage([(await params).slug]);if(!page)notFound();const Content=page.data.body;return <article className="blog-article"><Link className="back-link" href="/blog">← All posts</Link><h1>{page.data.title}</h1><p className="article-meta">{page.data.description}</p><DocsBody><Content components={getMDXComponents()}/></DocsBody></article>}
export function generateStaticParams(){return blogSource.getPages().map(p=>({slug:p.slugs[0]}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){return {title:blogSource.getPage([(await params).slug])?.data.title};}
