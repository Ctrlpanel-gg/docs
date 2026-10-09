import { Card, type CardProps } from 'fumadocs-ui/components/card';
import { BookOpen, Terminal, Settings2, Palette, Blocks, RefreshCw, ShieldCheck, Code2, LifeBuoy, GitBranch, Database, Heart } from 'lucide-react';
const icons = { book: BookOpen, terminal: Terminal, settings: Settings2, palette: Palette, blocks: Blocks, update: RefreshCw, shield: ShieldCheck, code: Code2, help: LifeBuoy, branch: GitBranch, database: Database, heart: Heart };
const tones = { blue: 'text-sky-500', amber: 'text-amber-500', violet: 'text-violet-500', green: 'text-emerald-500', rose: 'text-rose-500' };
export function DocsCard({ icon = 'book', tone = 'blue', ...props }: Omit<CardProps, 'icon'> & { icon?: keyof typeof icons; tone?: keyof typeof tones }) {
  const Icon = icons[icon];
  return <Card {...props} className={`docs-card ${props.className ?? ''}`} icon={<Icon className={tones[tone]} />} />;
}
