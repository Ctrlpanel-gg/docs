export type FooterLink = { title: string; href: string };
export type FooterSection = { label: string; links: FooterLink[] };

/** Shared by the landing page and the archived design's blog footer. */
export const footerLinks: FooterSection[] = [
  {
    label: 'Resources',
    links: [
      { title: 'Documentation', href: '/docs' },
      { title: 'API Reference', href: '/docs/api' },
      { title: 'Contributing', href: '/docs/contributing' },
      { title: 'Development', href: '/docs/development' },
      { title: 'Blog', href: '/blog' },
      { title: 'Theme / Extension Hub', href: 'https://market.ctrlpanel.gg' },
    ],
  },
  {
    label: 'Project',
    links: [
      { title: 'GitHub', href: 'https://github.com/Ctrlpanel-gg/panel' },
      { title: 'Roadmap', href: 'https://github.com/orgs/Ctrlpanel-gg/projects/1' },
      { title: 'Discord', href: 'https://discord.gg/ctrlpanel-gg-787829714483019826' },
      { title: 'Demo', href: 'https://demo.ctrlpanel.gg' },
    ],
  },
  {
    label: 'Partners',
    links: [
      { title: 'ZAP-Hosting', href: 'https://zap-hosting.com/a/29b1c37a4f87bde5463afe8a0f49d129b16ccf9e' },
    ],
  },
];
