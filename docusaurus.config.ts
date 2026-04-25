import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "CtrlPanel.gg",
  tagline:
    "CtrlPanel's Dashboard is a free and open-source management panel for Pterodactyl with credit based billing and customization to fit your needs.",
  url: "https://ctrlpanel.gg",
  baseUrl: "/",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    }
  },
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
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/docs/api',
          label: 'API',
          position: 'left'
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
          href: "https://demo.ctrlpanel.gg",
          label: "Demo",
          position: "right",
        },
        {
          href: "https://discord.gg/ctrlpanel-gg-787829714483019826",
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
              to: "/docs",
            },
            {
              label: "API",
              to: "/docs/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/ctrlpanel-gg-787829714483019826",
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'nginx',
        'sql',
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "dart",
        "objectivec",
        "r",
      ],
    },
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
      {
        highlight: "dart",
        language: "dart",
        logoClass: "dart",
      },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
      {
        highlight: "c",
        language: "c",
        logoClass: "c",
      },
      {
        highlight: "objective-c",
        language: "objective-c",
        logoClass: "objective-c",
      },
      {
        highlight: "ocaml",
        language: "ocaml",
        logoClass: "ocaml",
      },
      {
        highlight: "r",
        language: "r",
        logoClass: "r",
      },
      {
        highlight: "swift",
        language: "swift",
        logoClass: "swift",
      },
      {
        highlight: "kotlin",
        language: "kotlin",
        logoClass: "kotlin",
      },
      {
        highlight: "rust",
        language: "rust",
        logoClass: "rust",
      },
    ],
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          includeCurrentVersion: false,
          lastVersion: "1.2.x",
          versions: {
            // 'beta': {
            //   label: '1.2.x (Public Beta)',
            //   path: 'beta',
            //   banner: 'none',
            // },
            '1.2.x': {
              label: '1.2.x (Latest)',
            },
            'archive': {
              label: 'Archive',
            },
          },
          editUrl: "https://github.com/Ctrlpanel-gg/docs/tree/main",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-docs',
        path: 'api-docs',
        routeBasePath: 'docs/api',
        sidebarPath: 'api-sidebars.ts',
        docItemComponent: "@theme/ApiItem",
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/intro',
            to: '/docs',
          },
          {
            from: '/docs/Installation/updating',
            to: '/docs/category/updating',
          },
          {
            from: '/docs/Contributing/donating',
            to: '/docs/contributing/donating',
          },
          {
            from: '/docs/Installation/getting-started',
            to: '/docs/getting-started/install',
          },
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "openapi",
        docsPluginId: "api-docs",
        config: {
          cpgg: {
            specPath: "static/api/openapi.yaml",
            outputDir: "api-docs",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ],
    'docusaurus-plugin-sass',
  ],
  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
