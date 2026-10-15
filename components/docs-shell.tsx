'use client';
import { usePathname } from 'next/navigation';
import { type ComponentProps, type CSSProperties, createContext, type ReactNode, useContext, useState } from 'react';
import { ChevronDown, ListTree, SidebarIcon } from 'lucide-react';
import { useDocsLayout } from 'fumadocs-ui/layouts/docs';
import { useSidebar } from 'fumadocs-ui/components/sidebar/base';
import { PageBreadcrumb, useDocsPage, ViewOptionsPopover } from 'fumadocs-ui/layouts/docs/page';
import { TOCScrollArea, useTOCItems } from 'fumadocs-ui/components/toc';
import { TOCEmpty, TOCItem, TOCItems } from 'fumadocs-ui/components/toc/default';
import { cn } from '@/lib/utils';

const GithubUrlContext = createContext<string | undefined>(undefined);

export function useGithubUrl() {
  return useContext(GithubUrlContext);
}

export function GithubUrlProvider({ value, children }: { value: string | undefined; children: ReactNode }) {
  return <GithubUrlContext.Provider value={value}>{children}</GithubUrlContext.Provider>;
}

/**
 * Spacious-style docs shell: transparent sidebar on a card background,
 * page content + TOC floating together in one rounded panel.
 */
export function DocsShellContainer({ children, style, className, ...props }: ComponentProps<'div'>) {
  const { slots } = useDocsLayout();
  const { collapsed } = slots.sidebar.useSidebar();

  return (
    <div
      id="nd-docs-layout"
      data-sidebar-collapsed={collapsed}
      {...props}
      style={
        {
          gridTemplate: `"sidebar header right" auto "sidebar toc-popover right" var(--fd-toc-popover-height, 0px) "sidebar main right" 1fr / var(--fd-sidebar-col) minmax(0, 1fr) auto`,
          '--fd-docs-row-1': 'var(--fd-banner-height, 0px)',
          '--fd-docs-row-2': 'calc(var(--fd-docs-row-1) + var(--fd-header-height))',
          '--fd-docs-row-3': 'calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))',
          '--fd-sidebar-col': collapsed ? '8px' : 'var(--fd-sidebar-width)',
          ...style,
        } as CSSProperties
      }
      className={cn(
        'relative grid bg-fd-card transition-[grid-template-columns] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        'min-h-[calc(100dvh-var(--fd-banner-height,0px))]',
        'md:h-[calc(100dvh-var(--fd-banner-height,0px))] md:overflow-clip',
        '[--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-toc-popover-height:0px] [--fd-sidebar-width:0px] [--fd-toc-width:0px]',
        className,
      )}
    >
      {children}
    </div>
  );
}

function CollapsedControls() {
  const { collapsed, setCollapsed } = useSidebar();
  const { slots } = useDocsLayout();
  if (!collapsed) return null;
  const searchTrigger = slots.searchTrigger as
    | { sm: React.ComponentType<{ hideIfDisabled?: boolean; className?: string }>; full: unknown }
    | undefined;
  const SearchButton = searchTrigger?.sm;

  return (
    <div className="pointer-events-auto flex shrink-0 items-center">
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        aria-label="Expand sidebar"
        className="rounded-md p-2 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
      >
        <SidebarIcon className="size-4" />
      </button>
      {SearchButton && <SearchButton hideIfDisabled className="p-2 [&_svg]:size-4" />}
    </div>
  );
}

function PanelTocDropdown() {
  const items = useTOCItems();
  const [open, setOpen] = useState(false);
  if (items.length === 0) return null;

  return (
    <details
      id="nd-toc-dropdown"
      className="relative min-w-0"
      open={open}
      onToggle={e => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground [&::-webkit-details-marker]:hidden">
        <ListTree className="size-4 shrink-0" />
        <span className="truncate">On this page</span>
        <ChevronDown className={cn('size-3.5 shrink-0 transition-transform', open && 'rotate-180')} />
      </summary>
      <div
        className="absolute inset-x-0 top-full z-20 mt-1 max-h-[50vh] overflow-y-auto rounded-xl border border-fd-border bg-fd-popover p-3 shadow-xl"
        onClick={e => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <TOCItems>
          {items.map(item => (
            <TOCItem key={item.url} item={item} />
          ))}
        </TOCItems>
      </div>
    </details>
  );
}

function PanelToc() {
  const { full } = useDocsPage();
  const items = useTOCItems();
  if (full || items.length === 0) return null;

  return (
    <div
      id="nd-panel-toc"
      className="sticky top-0 hidden w-[19rem] shrink-0 flex-col overflow-clip ps-16 pt-8 pb-4"
    >
      <h3 className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground">
        <ListTree className="size-4" />
        On this page
      </h3>
      <TOCScrollArea>
        <TOCItems>
          {items.length === 0 ? <TOCEmpty /> : items.map(item => <TOCItem key={item.url} item={item} />)}
        </TOCItems>
      </TOCScrollArea>
    </div>
  );
}

function PageActions() {
  const githubUrl = useGithubUrl();
  if (!githubUrl) return null;
  return <ViewOptionsPopover githubUrl={githubUrl} />;
}

export function DocsPagePanel({ children, className, ...props }: ComponentProps<'article'>) {
  const pathname = usePathname();
  const { full } = useDocsPage();

  return (
    <main data-layout-main className="[grid-area:main] min-h-0 min-w-0">
      <div
        id="nd-page-panel"
        key={pathname}
        className="@container relative mx-2 flex min-h-0 flex-col bg-fd-background md:ms-0 md:my-2 md:h-full md:overflow-clip md:rounded-2xl md:border md:shadow-sm print:overflow-visible"
      >
        <header className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-14 items-center gap-1.5 ps-6 pe-4 md:flex">
          <CollapsedControls />
          <div className="pointer-events-auto min-w-0 flex-1">
            <PageBreadcrumb />
          </div>
          <div className="pointer-events-auto flex shrink-0 items-center gap-1">
            <PanelTocDropdown />
            <PageActions />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-fd-background via-fd-background/85 to-transparent"
          />
        </header>
        <div className="flex flex-1 items-start justify-center px-4 pt-6 md:min-h-0 md:overflow-y-auto md:overscroll-y-contain md:px-[max(1.5rem,calc((100%-47.5rem-19rem)/2))] md:pt-14">
          <article
            id="nd-page"
            data-layout-content
            data-full={full}
            tabIndex={-1}
            {...props}
            className={cn(
              'flex w-full min-w-0 max-w-[760px] flex-col gap-4 pb-8',
              full && 'max-w-[1120px]',
              className,
            )}
          >
            {children}
          </article>
          <PanelToc />
        </div>
      </div>
    </main>
  );
}