import data from '@/lib/blog-data.json';
export const dynamic='force-static';
const xml=(s:string)=>s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]!));
export function GET(){return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>CtrlPanel.gg</title><link>https://ctrlpanel.gg/blog/</link><description>Project updates and releases</description>${data.posts.map(p=>`<item><title>${xml(p.title)}</title><link>https://ctrlpanel.gg/blog/${p.slug}/</link><guid>https://ctrlpanel.gg/blog/${p.slug}/</guid><pubDate>${new Date(p.date+'T00:00:00Z').toUTCString()}</pubDate></item>`).join('')}</channel></rss>`,{headers:{'Content-Type':'application/rss+xml'}});}
