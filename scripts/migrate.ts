import { readdir, mkdir, cp, rm } from 'node:fs/promises';
import path from 'node:path';
import { parse, stringify } from 'yaml';
const root = process.cwd();
const staging = 'migration/generated';
await rm(staging + '/content/docs',{recursive:true,force:true});
await rm(staging + '/content/blog',{recursive:true,force:true});
const aliases: Record<string,string> = {};
const manifest: {source:string; url:string}[] = [];
const versions = (await readdir('migration/docusaurus/versioned_docs')).filter(v=>v.startsWith('version-')).map(v=>v.slice(8)).sort((a,b)=>a==='1.2.x'?-1:b==='1.2.x'?1:b.localeCompare(a));
const slugify = (s:string) => s.toLowerCase().replace(/[^a-z0-9.]+/g,'-').replace(/^-|-$/g,'');
async function files(dir:string):Promise<string[]> { const all = await readdir(dir,{withFileTypes:true}); return (await Promise.all(all.map(f=>f.isDirectory()?files(path.join(dir,f.name)):[path.join(dir,f.name)]))).flat(); }
function front(text:string) { const match=text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/); return {data:match?parse(match[1])||{}:{},body:match?text.slice(match[0].length):text}; }
async function expand(file:string, seen=new Set<string>()):Promise<string> {
 if(seen.has(file)) throw new Error(`Circular MDX include: ${file}`);
 const next=new Set(seen).add(file); let {body}=front(await Bun.file(file).text());
 const imports=[...body.matchAll(/^import (\w+) from ['"]([^'"]+)['"];?\s*$/gm)];
 for(const m of imports) { body=body.replace(m[0],''); if(m[2].startsWith('.')) { const part=await expand(path.resolve(path.dirname(file),m[2]),next); body=body.replace(new RegExp(`<${m[1]}\\s*/>`,'g'),`\n${part}\n`); } }
 return body.replace(/^export const toc = \[\];?\s*$/gm,'').replace(/<TOCInline[^>]*\/>/g,'').replace(/^import .*$/gm,'');
}
function transform(body:string) {
 body=body.replace(/<img[^>]*installer-error\.png[^>]*\/>/g, '*The installer-error screenshot referenced in the original documentation is unavailable.*').replace(/<!--[\s\S]*?-->/g,'').replace(/src=\{useBaseUrl\('([^']+)'\)\}/g, (full, url) => `src="${url}"`);
 // Match nested Docusaurus tab groups and convert labels into Fumadocs tab values.
 const stack:{start:number; labels:string[]; values:string[]}[]=[]; const replacements:{start:number;end:number;text:string}[]=[];
 for(const m of body.matchAll(/<Tabs\b[^>]*>|<\/Tabs>|<TabItem\b[^>]*>|<\/TabItem>/g)) {
  const start=m.index!; const tag=m[0];
  if(tag.startsWith('<Tabs')) stack.push({start,labels:[],values:[]});
  else if(tag==='<\/Tabs>') { const group=stack.pop()!; const opening=body.slice(group.start,body.indexOf('>',group.start)+1); const id=opening.match(/groupId="([^"]+)"/)?.[1]; replacements.push({start:group.start,end:group.start+opening.length,text:`<Tabs items={${JSON.stringify(group.labels)}}${id?` groupId="${id}" originalValues={${JSON.stringify(group.values)}}${opening.includes("queryString")?" queryString":""}`:''}>`},{start,end:start+tag.length,text:'</Tabs>'}); }
  else if(tag.startsWith('<TabItem')) { const label=tag.match(/label=["']([^"']+)["']/)?.[1]||tag.match(/value=["']([^"']+)["']/)?.[1]||'Option'; stack.at(-1)?.labels.push(label); stack.at(-1)?.values.push(tag.match(/value=["']([^"']+)["']/)?.[1]||label); replacements.push({start,end:start+tag.length,text:`<Tab value=${JSON.stringify(label)}>`}); }
  else replacements.push({start,end:start+tag.length,text:'</Tab>'});
 }
 for(const r of replacements.sort((a,b)=>b.start-a.start)) body=body.slice(0,r.start)+r.text+body.slice(r.end);
 let fence=false,callout=false;
 body=body.split('\n').map(line=>{ if(/^\s*(```|~~~)/.test(line)){fence=!fence;return line.replace(/^(\s*)(```|~~~)conf\b/, '$1$2ini').replace(/^(\s*)(```|~~~)blade\b/, '$1$2html');} if(fence)return line;
 const directive=line.match(/^\s*:::(\w+)?\s*(.*)$/); if(directive){ if(!directive[1]){callout=false;return '</Callout>\n';} callout=true; const type=directive[1]==='danger'?'error':directive[1]==='warning'?'warn':'info';return `\n<Callout type="${type}" title=${JSON.stringify(directive[2]||directive[1][0].toUpperCase()+directive[1].slice(1))}>\n`; }
 return line.replace(/:de:/g, '🇩🇪').replace(/:it:/g, '🇮🇹').replace(/<br\s*>/g, "<br />").replace(/\{#([\w-]+)\}/g,'').replace(/(:white_check_mark:|:bangbang:|:heart:|:question:|:o:)/g,t=>({':white_check_mark:':'✓',':bangbang:':'‼',':heart:':'♥',':question:':'?',':o:':'○'}[t]!));
 }).join('\n');
 return body;
}
async function write(file:string,text:string){file=path.join(staging,file);await mkdir(path.dirname(file),{recursive:true});await Bun.write(file,text);}
for(const version of versions){
 const dir=`migration/docusaurus/versioned_docs/version-${version}`,prefix=version==='1.2.x'?'':`${version}/`,base=`/docs${version==='1.2.x'?'':`/${version}`}`;
 const list=await files(dir); const routes=new Map<string,string>();
 for(const file of list.filter(f=>/\.(md|mdx)$/.test(f)&&!f.includes('/_parts/'))){ const {data}=front(await Bun.file(file).text());const relative=path.relative(dir,file).replace(/\.(md|mdx)$/,'');const slug=data.slug==='/'?'':data.slug?String(data.slug).replace(/^\//,''):relative.replace(/(^|\/)index$/, '');routes.set(file,`${base}${slug?`/${slug}`:''}`); }
 for(const [file,url] of routes){
 const {data,body:original}=front(await Bun.file(file).text()); const title=data.title||original.match(/^#\s+(.+)$/m)?.[1]||data.sidebar_label||path.basename(file).replace(/\.(md|mdx)$/,'').replace(/-/g,' ');
 let body=transform(await expand(path.resolve(file))).replace(/^#\s+.+\n/m,'');
 body=body.replace(/\]\(([^)]+)\)/g,(full,target)=>{if(/^(https?:|mailto:|#|\/img|\/openapi)/.test(target))return full;const [link,anchor]=target.split('#');if(link.startsWith('/docs/')){const local=link.replace(/^\/docs\//,'');const explicit=versions.some(v=>local===v||local.startsWith(v+'/'));const candidate=`${base}/${local}`;const targetURL=explicit||(![...routes.values()].includes(candidate.split('?')[0])&&!local.startsWith('category/'))?link:candidate;return `](${targetURL}${anchor?`#${anchor}`:''})`; } const resolved=path.resolve(path.dirname(file),link.split('?')[0]);const route=routes.get(path.relative(root,resolved))||routes.get(path.relative(root,resolved+'.md'))||routes.get(path.relative(root,resolved+'.mdx'));return route?`](${route}${anchor?`#${anchor}`:''})`:full;});
 const slug=path.basename(file).match(/^index\.(md|mdx)$/)?path.relative(dir,file).replace(/\.(md|mdx)$/,''):url.slice(base.length).replace(/^\//,'')||'index';await write(`content/docs/${prefix}${slug}.mdx`,`---\n${stringify({title:String(title),description:data.description||'',...data.sidebar_label?{sidebarTitle:data.sidebar_label}:{}})}---\n\n${body}\n`);manifest.push({source:file,url:url.split('/').map(encodeURIComponent).join('/')});
 if(slug==='index')aliases[`${base}/intro`]=base;
 }
 const categories=list.filter(f=>f.endsWith('_category_.json'));
 for(const file of categories){const category=await Bun.file(file).json();const folder=path.relative(dir,path.dirname(file)); const children=[...routes].filter(([f])=>path.dirname(f)===path.dirname(file)).sort((a,b)=>{return a[0].localeCompare(b[0]);});children.sort((a,b)=>{const aData=front(require('node:fs').readFileSync(a[0],'utf8')).data;const bData=front(require('node:fs').readFileSync(b[0],'utf8')).data;return (aData.sidebar_position||100)-(bData.sidebar_position||100);});const pages=children.map(([,u])=>path.basename(u));await write(`content/docs/${prefix}${folder}/meta.json`,JSON.stringify({title:category.label,pages:['index',...pages,'...']},null,2)); const desc=category.link?.description||`Browse ${category.label.toLowerCase()} documentation.`;const categoryURL=`${base}/${folder}`;if(![...routes.values()].includes(categoryURL)){await write(`content/docs/${prefix}${folder}/index.mdx`,`---\ntitle: ${JSON.stringify(category.link?.title||category.label)}\ndescription: ${JSON.stringify(desc)}\n---\n\n${children.map(([,url])=>`- [${path.basename(url).replace(/-/g,' ')}](${url})`).join('\n')}\n`);aliases[`${base}/category/${slugify(category.label)}`]=categoryURL;}}
 const top=categories.filter(f=>path.dirname(path.relative(dir,f)).split('/').length===1).map(f=>({folder:path.dirname(path.relative(dir,f)),data:JSON.parse(require('node:fs').readFileSync(f,'utf8'))})).sort((a,b)=>a.data.position-b.data.position).map(x=>x.folder);
 await write(`content/docs/${prefix}meta.json`,JSON.stringify({title:version==='1.2.x'?'Documentation':`Version ${version}`,root:version==='1.2.x'?undefined:true,pages:['index',...top,'...']},null,2));
}
// Rebuild every API operation directly from the original OpenAPI specification.
const spec=parse(await Bun.file('migration/docusaurus/static/openapi/openapi.yaml').text());let apiCount=0;const groups=new Map<string,string[]>();
const json=(value:unknown)=>'```json\n'+JSON.stringify(value,null,2)+'\n```';
function schema(s:any):string {if(!s)return '';let text='';if(s.properties){text+='| Property | Type | Required | Description |\n| --- | --- | --- | --- |\n';for(const [name,p] of Object.entries<any>(s.properties))text+=`| \`${name}\` | ${p.type||'object'} | ${s.required?.includes(name)?'Yes':'No'} | ${(p.description||'').replace(/\n/g,' ')} |\n`;text+='\n';}if(s.example)text+='### Example\n\n'+json(s.example)+'\n\n';if(!s.properties&&!s.example)text+=json(s)+'\n\n';text+='\n<details>\n<summary>Complete schema</summary>\n\n'+json(s)+'\n\n</details>\n\n';return text;}
for(const [endpoint,methods] of Object.entries<any>(spec.paths))for(const [method,operation] of Object.entries<any>(methods)){if(!['get','post','put','patch','delete','head','options'].includes(method))continue;apiCount++;const slug=slugify(operation.summary||operation.operationId);const tag=operation.tags?.[0]||'Endpoints';groups.set(tag,[...(groups.get(tag)||[]),slug]);let body=`<div className="api-endpoint"><strong>${method.toUpperCase()}</strong><code>${endpoint.replace(/\{/g,"&#123;").replace(/\}/g,"&#125;")}</code></div>\n\n${operation.description||''}\n\n## Authentication\n\nSend your API token in the \`Authorization: Bearer YOUR_TOKEN\` header.\n\n## Request\n\n\`\`\`bash\ncurl -X ${method.toUpperCase()} 'https://panel.example.com${endpoint}' \\\n  -H 'Authorization: Bearer YOUR_TOKEN' \\\n  -H 'Accept: application/json'${operation.requestBody?" \\\n  -H 'Content-Type: application/json' \\\n  -d '@request.json'":''}\n\`\`\`\n\n`;
 const params=[...(methods.parameters||[]),...(operation.parameters||[])];if(params.length)body+='### Parameters\n\n| Name | Location | Required | Description |\n| --- | --- | --- | --- |\n'+params.map((p:any)=>`| \`${p.name}\` | ${p.in} | ${p.required?'Yes':'No'} | ${(p.description||'').replace(/\n/g,' ')} |`).join('\n')+'\n\n';
 for(const [type,c] of Object.entries<any>(operation.requestBody?.content||{}))body+=`### Request body (${type})\n\n`+schema(c.schema);
 body+='## Responses\n\n';for(const [status,r] of Object.entries<any>(operation.responses||{})){body+=`### ${status}${r.description?` — ${r.description}`:''}\n\n`;for(const [,c] of Object.entries<any>(r.content||{}))body+=schema(c.schema);}
 await write(`content/docs/api/${slug}.mdx`,`---\ntitle: ${JSON.stringify(operation.summary||operation.operationId)}\ndescription: ${JSON.stringify(`${method.toUpperCase()} ${endpoint}`)}\n---\n\n${transform(body)}`);manifest.push({source:`openapi:${operation.operationId}`,url:`/docs/api/${slug}`});
}
for(const [tag,slugs] of groups){const slug=slugify(tag);await write(`content/docs/api/${slug}.mdx`,`---\ntitle: ${JSON.stringify(tag)}\n---\n\n${slugs.map(s=>`- [${s.replace(/-/g,' ')}](/docs/api/${s})`).join('\n')}\n`);}
aliases['/docs/api/ctrlpanel-gg-api-documentation']='/docs/api';
await write('content/docs/api/meta.json',JSON.stringify({title:'API Reference',root:true,pages:['index',...([...groups].flatMap(([tag,slugs])=>[`---${tag}---`,...slugs]))]},null,2));
await write('content/docs/api/index.mdx',`---\ntitle: API Reference\ndescription: Integrate your applications with CtrlPanel.\n---\n\n## Getting started\n\nThe CtrlPanel REST API gives you access to users, servers, products, roles, vouchers, and notifications. All ${apiCount} endpoints are documented here.\n\n## Authentication\n\nUse a bearer token created in your panel. Include \`Authorization: Bearer YOUR_TOKEN\` and \`Accept: application/json\` in your requests. The base URL is your own panel installation.\n\n[Download the complete OpenAPI specification](/openapi/openapi.yaml).\n\n${[...groups].map(([tag,slugs])=>`## ${tag}\n\n${slugs.map(s=>`- [${s.replace(/-/g,' ')}](/docs/api/${s})`).join('\n')}`).join('\n\n')}\n`);
const authors=parse(await Bun.file('migration/docusaurus/blog/authors.yml').text());const posts=[];
for(const file of (await files('migration/docusaurus/blog')).filter(f=>/\.mdx?$/.test(f))){const {data,body}=front(await Bun.file(file).text());const title=body.match(/^#\s+(.+)$/m)?.[1]||data.title;const slug=data.slug||path.basename(file).replace(/\.mdx?$/,'');const date=path.basename(path.dirname(file))+'-'+path.basename(file).slice(0,5);const post={title,slug,date,authors:(data.authors||[]).map((a:string)=>authors[a]),tags:data.tags||[]};posts.push(post);await write(`content/blog/${slug}.mdx`,`---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(`${date} · ${post.authors.map((a:any)=>a.name).join(', ')}`)}\n---\n\n${transform(body.replace(/^#\s+.+\n/m,'').replace('<!-- truncate -->',''))}`);manifest.push({source:file,url:`/blog/${slug}`});aliases[`/blog/${date.replace(/-/g,'/')}/${slug}`]=`/blog/${slug}`;}
await write('lib/blog-data.json',JSON.stringify({posts:posts.sort((a,b)=>b.date.localeCompare(a.date)),authors},null,2));
Object.assign(aliases,{'/docs/Installation/updating':'/docs/updating','/docs/Contributing/donating':'/docs/contributing/donating','/docs/Installation/getting-started':'/docs/getting-started/install'});
await write('lib/aliases.json',JSON.stringify(aliases,null,2));await write('lib/migration-manifest.json',JSON.stringify({versions,apiCount,pages:manifest},null,2));await cp('migration/docusaurus/static',staging+'/public',{recursive:true});await Bun.write(staging+'/public/.nojekyll','');
console.log(`Staged legacy import in migration/generated: ${manifest.length} pages across ${versions.length} versions, ${apiCount} API endpoints, ${posts.length} posts.`);
