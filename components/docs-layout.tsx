'use client';
import { usePathname } from 'next/navigation';
import { useMemo, type ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { Root, Folder } from 'fumadocs-core/page-tree';
import { baseOptions } from '@/lib/layout.shared';
import { VersionSelect } from '@/components/version-select';
import manifest from '@/lib/migration-manifest.json';

function containsSection(folder: Folder, base: string): boolean {
  const matches = (url: string) => url.replace(/\/$/, '') === base || url.startsWith(base + '/');
  return Boolean(folder.index && matches(folder.index.url)) || folder.children.some(node => node.type === 'page' ? matches(node.url) : node.type === 'folder' && containsSection(node, base));
}

export function ScopedDocsLayout({ tree, children }: { tree: Root; children: ReactNode }) {
  const pathname = usePathname();
  const activeTree = useMemo(() => {
    const segment = pathname.split('/')[2];
    const base = segment === 'api' || manifest.versions.includes(segment) ? `/docs/${segment}` : undefined;
    const section = base ? tree.children.find((node): node is Folder => node.type === 'folder' && Boolean(node.root) && containsSection(node, base)) : undefined;
    if (!section) return { ...tree, $id: "ctrlpanel:latest", children: tree.children.filter(node => node.type !== 'folder' || !node.root) };
    const children = section.index && !section.children.some(node => node.type === 'page' && node.url === section.index?.url) ? [section.index, ...section.children] : section.children;
    return { ...tree, $id: `ctrlpanel:${base}`, name: section.name, children };
  }, [tree, pathname]);
  const options = baseOptions();
  const links = options.links?.map(link => 'text' in link && link.text === 'Documentation' && pathname.startsWith('/docs/api') ? { ...link, active: 'url' as const } : link);
  return <DocsLayout {...options} links={links} tree={activeTree} tabs={false} sidebar={{ banner: <VersionSelect /> }}>{children}</DocsLayout>;
}
