import data from '@/lib/blog-data.json';
import { PostList } from '@/components/post-list';
export function generateStaticParams(){return [...new Set(data.posts.flatMap(p=>p.tags))].map(tag=>({tag}));}
export default async function Tag({params}:{params:Promise<{tag:string}>}){const {tag}=await params;return <main className="blog-index"><div className="eyebrow">TOPIC</div><h1>{tag}</h1><PostList posts={data.posts.filter(p=>p.tags.includes(tag))}/></main>}
