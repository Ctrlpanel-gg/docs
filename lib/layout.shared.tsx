import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
 return {
  nav: { title: <span className="flex items-center gap-2 text-[19px] font-[750] tracking-[-0.035em]"><img src="/img/controlpanel.webp" width="28" height="28" alt="" />CtrlPanel<span className="-ml-[7px] text-fd-primary">.gg</span></span> },
  githubUrl: 'https://github.com/Ctrlpanel-gg/panel',
  links: [
   { text: 'Documentation', url: '/docs', active: 'nested-url' },
   { text: 'API Reference', url: '/docs/api', active: 'nested-url' },
   { text: 'Blog', url: '/blog', active: 'nested-url' },
   { text: 'Extensions', url: 'https://market.ctrlpanel.gg', external: true },
   { text: 'Discord', url: 'https://discord.gg/ctrlpanel-gg-787829714483019826', external: true },
  ],
 };
}
