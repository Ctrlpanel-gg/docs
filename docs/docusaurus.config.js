const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Controlpanel.gg',
  tagline: 'Free management tool designed for pterodactyl',
  url: 'https://controlpanel.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/controlpanel.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Controlpanel', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Controlpanel',
      logo: {
        alt: 'Controlpanel logo',
        src: 'img/controlpanel.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/ControlPanel-gg/dashboard',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/ControlPanel-gg/dashboard',
          label: 'Demo',
          position: 'left',
        },
        {
          href: 'https://github.com/ControlPanel-gg/dashboard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/4Y6HjD2uyU',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ControlPanel-gg/dashboard',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Controlpanel, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ControlPanel-gg/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
