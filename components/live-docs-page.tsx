'use client';
import { DocsPage, type DocsPageProps } from 'fumadocs-ui/layouts/docs/page';
import type { TOCItemType } from 'fumadocs-core/toc';
import { useLayoutEffect, useRef, useState } from 'react';

/** Keep Fumadocs' native scroll observer attached to the currently rendered tab panels. */
export function LiveDocsPage({ toc = [], children, ...props }: DocsPageProps) {
  const article = useRef<HTMLElement>(null);
  const [visibleToc, setVisibleToc] = useState<TOCItemType[]>(toc);

  useLayoutEffect(() => {
    const root = article.current;
    if (!root) return;
    const content = root.querySelector('.docs-content') ?? root;
    let frame = 0;
    const refresh = () => {
      const headings = new Map(Array.from(content.querySelectorAll<HTMLElement>('h2[id], h3[id], h4[id], h5[id], h6[id]')).map(heading => [heading.id, heading]));
      const next = toc.filter(item => {
        const heading = headings.get(decodeURIComponent(item.url.replace(/^#/, '')));
        if (!heading || heading.getClientRects().length === 0 || getComputedStyle(heading).visibility === 'hidden') return false;
        const hiddenParent = heading.closest('[hidden], [aria-hidden="true"], [role="tabpanel"][data-state="inactive"]');
        return !hiddenParent || !content.contains(hiddenParent);
      });
      setVisibleToc(previous => previous.length === next.length && previous.every((item, index) => item === next[index]) ? previous : next);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(refresh);
    };
    const observer = new MutationObserver(schedule);
    observer.observe(content, { subtree: true, childList: true, attributes: true, attributeFilter: ['data-state', 'hidden', 'aria-hidden', 'class', 'style', 'id'] });
    window.addEventListener('resize', schedule);
    refresh();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', schedule);
    };
  }, [toc]);

  return <DocsPage {...props} ref={article} toc={visibleToc}>{children}</DocsPage>;
}
