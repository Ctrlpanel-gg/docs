import path from 'node:path';
const root=path.resolve('out');
Bun.serve({port:3000,async fetch(req){const url=new URL(req.url);for(const pathname of [url.pathname,decodeURIComponent(url.pathname)]){const filePath=path.resolve(root,'.'+pathname);if(!filePath.startsWith(root+path.sep)&&filePath!==root)return new Response('Forbidden',{status:403});for(const candidate of [filePath,path.join(filePath,'index.html'),filePath+'.json']){const file=Bun.file(candidate);if(await file.exists()&&file.size)return new Response(file);}}return new Response(Bun.file(path.join(root,'404.html')),{status:404,headers:{'Content-Type':'text/html'}});}});
console.log('Static site: http://localhost:3000');
