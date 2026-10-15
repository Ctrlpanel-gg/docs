'use client';
import { usePathname } from 'next/navigation';
import type * as PageTree from 'fumadocs-core/page-tree';
import { SidebarItem, useFolderDepth } from 'fumadocs-ui/components/sidebar/base';
import { cn } from '@/lib/utils';
import methods from '@/lib/api-methods.json';

type MethodEntry = { method: string; webhook: boolean };
const methodByUrl = methods as Record<string, MethodEntry>;

const methodText: Record<string, string> = {
  GET: 'text-green-600 dark:text-green-400',
  POST: 'text-blue-600 dark:text-blue-400',
  PUT: 'text-amber-600 dark:text-amber-400',
  PATCH: 'text-orange-600 dark:text-orange-400',
  DELETE: 'text-red-600 dark:text-red-400',
  HEAD: 'text-gray-500 dark:text-gray-400',
  OPTIONS: 'text-gray-500 dark:text-gray-400',
};

const norm = (s: string) => (s.length > 1 ? s.replace(/\/$/, '') : s);

function MethodBadge({ method, webhook }: MethodEntry) {
  if (webhook)
    return (
      <span className="ms-auto shrink-0 rounded-full border border-fd-border px-1.5 py-px font-mono text-[10px] font-medium text-fd-muted-foreground">
        Webhook
      </span>
    );
  return (
    <span
      className={cn(
        'ms-auto shrink-0 font-mono text-[11px] font-semibold',
        methodText[method] ?? 'text-fd-muted-foreground',
      )}
    >
      {method}
    </span>
  );
}

/**
 * Sidebar row that appends a color-coded HTTP method badge for API endpoints.
 * Non-API rows render exactly like the default item.
 */
export function ApiSidebarItem({ item }: { item: PageTree.Item }) {
  const pathname = usePathname();
  const depth = useFolderDepth();
  const active = norm(item.url) === norm(pathname);
  const entry = methodByUrl[norm(item.url)] ?? methodByUrl[item.url];

  return (
    <SidebarItem
      href={item.url}
      external={item.external}
      active={active}
      icon={item.icon}
      className={cn(
        'relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0',
        'transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors',
        depth >= 1 &&
          "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:inset-s-2.5",
      )}
      style={{ paddingInlineStart: `calc(${2 + 3 * depth} * var(--spacing))` }}
    >
      <span className="min-w-0 flex-1 truncate">{item.name}</span>
      {entry && <MethodBadge method={entry.method} webhook={entry.webhook} />}
    </SidebarItem>
  );
}