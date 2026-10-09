import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({ dir: 'content/docs' });
export const blog = defineDocs({ dir: 'content/blog' });

const syntaxRules = [
  { scope: ['keyword', 'storage', 'support.function', 'entity.name.function', 'entity.name.command', 'entity.name.tag', 'constant', 'variable.language', 'variable.other', 'support.type'], settings: { foreground: '#27a9e1', fontStyle: 'bold' } },
  { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#7d8995', fontStyle: 'italic' } },
];

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: {
          name: 'ctrlpanel-light', type: 'light',
          colors: { 'editor.background': '#f0f1f2', 'editor.foreground': '#323a41' },
          settings: [{ settings: { foreground: '#323a41', background: '#f0f1f2' } }, ...syntaxRules],
        },
        dark: {
          name: 'ctrlpanel-dark', type: 'dark',
          colors: { 'editor.background': '#232326', 'editor.foreground': '#f4f5f6' },
          settings: [{ settings: { foreground: '#f4f5f6', background: '#232326' } }, ...syntaxRules],
        },
      },
    },
  },
});
