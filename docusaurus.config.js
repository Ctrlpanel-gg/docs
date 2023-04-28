const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Ctrlpanel.gg",
  tagline:
    "Ctrlpanel's Dashboard is a free and open-source management panel for Pterodactyl with credit based billing and lots of customization",
  url: "https://ctrlpanel.gg",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/controlpanel.ico",
  organizationName: "ControlPanel-gg", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Ctrlpanel (CPGG)",
      logo: {
        alt: "Ctrlpanel logo",
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
          label: "Extention Hub",
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
          href: "https://discord.gg/4Y6HjD2uyU",
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
              href: "https://discord.gg/4Y6HjD2uyU",
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
      copyright: `Copyright © ${new Date().getFullYear()} Controlpanel.gg group. Built with Docusaurus.`,
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
          lastVersion: "0.9.1",
          // Please change this to your repo.
          editUrl: "https://github.com/ControlPanel-gg/docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
