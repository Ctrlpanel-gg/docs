import { source, blogSource } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';
export const dynamic = 'force-static';
const search = createSearchAPI('advanced', {
 indexes: [...source.getPages(), ...blogSource.getPages()].map(page=>({id:page.url,url:page.url,title:page.data.title,description:page.data.description,structuredData:page.data.structuredData})),
});
export const GET = search.staticGET;
