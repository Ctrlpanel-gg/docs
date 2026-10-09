import manifest from '../lib/migration-manifest.json';
import aliases from '../lib/aliases.json';
import path from 'node:path';
const missing:string[]=[];
for(const entry of manifest.pages){if(!await Bun.file(path.join('out',entry.url,'index.html')).exists())missing.push(entry.url);}
for(const alias of Object.keys(aliases)){if(!await Bun.file(path.join('out',alias,'index.html')).exists())missing.push(alias);}
for(const url of ['/','/docs/api','/blog','/blog/authors','/blog/tags','/markdown-page'])if(!await Bun.file(path.join('out',url,'index.html')).exists())missing.push(url);
const index=await Bun.file('out/api/search').text();JSON.parse(index);
if(missing.length)throw new Error(`Missing exported pages: ${missing.join(', ')}`);
let count=0;for await(const file of new Bun.Glob('**/*.html').scan('out'))count++;
console.log(`Verified ${manifest.pages.length} migrated source routes, ${Object.keys(aliases).length} redirects, ${count} static HTML pages, and the static search index (${Math.round(index.length/1024)} KB).`);
