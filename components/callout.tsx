import { Callout as FumaCallout } from 'fumadocs-ui/components/callout';
import type { ComponentProps } from 'react';

export function Callout({ type = 'info', className, ...props }: ComponentProps<typeof FumaCallout>) {
  const alert = type === 'error' || type === 'warn' || type === 'warning';
  return <FumaCallout type={type} className={[alert && 'severity-callout', className].filter(Boolean).join(' ')} {...props} />;
}
