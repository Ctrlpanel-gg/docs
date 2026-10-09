import { source } from '@/lib/source';
import { ScopedDocsLayout } from '@/components/docs-layout';
export default function Layout({ children }: { children: React.ReactNode }) {
  return <ScopedDocsLayout tree={source.pageTree}>{children}</ScopedDocsLayout>;
}
