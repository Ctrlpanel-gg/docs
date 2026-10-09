import aliases from '../lib/aliases.json';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
for(const [from,to] of Object.entries(aliases)){const dir=path.join('out',from);await mkdir(dir,{recursive:true});await Bun.write(path.join(dir,'index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${to}/"><link rel="canonical" href="https://ctrlpanel.gg${to}/"><title>Redirecting | CtrlPanel.gg</title></head><body><a href="${to}/">Continue to documentation</a><script>location.replace(${JSON.stringify(to+'/')}+location.search+location.hash)</script></body></html>`);}
console.log(`Exported ${Object.keys(aliases).length} static legacy redirects.`);
