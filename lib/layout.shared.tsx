import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
 return {
  nav: { title: <span className="brand"><img src="/img/controlpanel.png" width="28" height="28" alt="" />CtrlPanel<span className="brand-dot">.gg</span></span> },
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
