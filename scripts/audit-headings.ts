export {};

let pages = 0;
const failures: string[] = [];
for await (const file of new Bun.Glob('**/index.html').scan('out/docs')) {
  const html = await Bun.file('out/docs/' + file).text();
  const article = html.match(/<article\b[^>]*id="nd-page"[^>]*>([\s\S]*?)<\/article>/)?.[1];
  if (!article) continue;
  pages++;
  const ids = [...article.matchAll(/<h[2-6]\b[^>]*\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) failures.push(`${file}: duplicate heading IDs`);
}
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Audited heading IDs on ${pages} exported documentation pages: no duplicates.`);
