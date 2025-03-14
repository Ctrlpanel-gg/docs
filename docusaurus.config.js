const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "CtrlPanel.gg",
  tagline:
    "CtrlPanel's Dashboard is a free and open-source management panel for Pterodactyl with credit based billing and customization to fit your needs.",
  url: "https://ctrlpanel.gg",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/controlpanel.ico",
  organizationName: "CtrlPanel-gg", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "CtrlPanel",
      logo: {
        alt: "CtrlPanel logo",
        src: "img/controlpanel.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },

        {
          href: "https://market.ctrlpanel.gg",
          label: "Theme / Extension Hub",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
        {
          href: "https://documenter.getpostman.com/view/9044962/TzY69ub2#02b8da43-ab01-487d-b2f5-5f8699b509cd",
          label: "API",
          position: "left",
        },
        {
          href: "https://demo.ctrlpanel.gg",
          label: "Demo",
          position: "right",
        },
        {
          href: "https://discord.gg/ctrlpanel",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/Ctrlpanel-gg/panel",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/ctrlpanel",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Ctrlpanel-gg/panel",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ctrlpanel.gg. Built with Docusaurus. Ctrlpanel.gg is not affiliated with Discord.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          lastVersion: "1.0.1",
          // Please change this to your repo.
          editUrl: "https://github.com/Ctrlpanel-gg/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
