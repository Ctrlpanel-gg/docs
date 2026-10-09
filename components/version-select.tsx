'use client';
import { usePathname } from 'next/navigation';
import { SidebarTabsDropdown } from 'fumadocs-ui/components/sidebar/tabs/dropdown';
import { Layers, Code2 } from 'lucide-react';
import manifest from '@/lib/migration-manifest.json';

export function VersionSelect() {
  const pathname = usePathname().replace(/\/$/, '');
  const current = manifest.versions.find(version => version !== '1.2.x' && (pathname === `/docs/${version}` || pathname.startsWith(`/docs/${version}/`))) ?? '1.2.x';
  const isApi = pathname.startsWith('/docs/api');
  const currentBase = current === '1.2.x' ? '/docs' : `/docs/${current}`;
  const tail = isApi ? '' : pathname.slice(currentBase.length);
  const orderedVersions = [...manifest.versions].sort((a, b) => {
    const historical = (version: string) => version === 'archive' ? 1 : version === 'beta' ? 2 : 0;
    return historical(a) - historical(b) || b.localeCompare(a, undefined, { numeric: true });
  });
  const options = orderedVersions.map(version => {
    const base = version === '1.2.x' ? '/docs' : `/docs/${version}`;
    const candidate = base + tail;
    const urls = new Set(manifest.pages.filter(page => {
      if (version !== '1.2.x') return page.url === base || page.url.startsWith(base + '/');
      return page.url.startsWith('/docs') && !page.url.startsWith('/docs/api') && !manifest.versions.some(v => v !== '1.2.x' && (page.url === `/docs/${v}` || page.url.startsWith(`/docs/${v}/`)));
    }).map(page => page.url));
    if (current === version && !isApi) urls.add(pathname);
    return {
      title: `CtrlPanel ${version}`,
      description: version === '1.2.x' ? 'Latest documentation' : version === 'beta' ? 'Historical beta' : 'Archived documentation',
      icon: <Layers className="size-4 text-fd-primary" />,
      url: urls.has(candidate) ? candidate : base,
      urls,
    };
  });
  options.push({ title: 'REST API', description: 'API reference', icon: <Code2 className="size-4 text-fd-primary" />, url: '/docs/api', urls: new Set(isApi ? [pathname] : ['/docs/api']) });
  return <SidebarTabsDropdown options={options} aria-label="Documentation version" className="w-full rounded-md px-3 py-2.5" />;
}
