import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-[background-color,color,opacity,border-color,transform] duration-150 motion-safe:active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary-text';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-fd-primary px-4.5 py-2.5 text-fd-primary-foreground hover:opacity-90',
  outline:
    'border border-fd-border bg-fd-card px-4.5 py-2.5 text-fd-foreground hover:border-fd-primary/40 hover:bg-fd-accent',
};

export function buttonVariants({
  variant = 'primary',
  className,
}: {
  variant?: ButtonVariant;
  className?: string;
} = {}) {
  return cn(base, variants[variant], className);
}
