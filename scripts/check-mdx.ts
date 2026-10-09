import { compile } from '@mdx-js/mdx';
let count=0;
for(const dir of ['content/docs','content/blog'])for await(const file of new Bun.Glob('**/*.mdx').scan(dir)){const full=dir+'/'+file;const text=(await Bun.file(full).text()).replace(/^---\n[\s\S]*?\n---\n/,'');try{await compile(text);count++;}catch(e){console.log(full, String(e));}}
console.log(`Compiled ${count} MDX files.`);
