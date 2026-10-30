import { Check, Clock, CreditCard, Server } from 'lucide-react';

const intervals = ['Hourly', 'Daily', 'Weekly', 'Monthly', 'Annual'] as const;

const plans = [
  { name: 'Starter', ram: '2 GB', disk: '10 GB', price: '$0.02', unit: '/hr', featured: false },
  { name: 'Standard', ram: '4 GB', disk: '25 GB', price: '$0.04', unit: '/hr', featured: true },
  { name: 'Premium', ram: '8 GB', disk: '50 GB', price: '$0.08', unit: '/hr', featured: false },
];

const gateways = ['PayPal', 'Stripe', 'Mollie', 'Mercado Pago'];

/**
 * Static product composite: storefront plans + credit balance + auto-suspend row.
 * Illustrates the billing mechanics documented under Getting started — not live metrics.
 */
export function BillingPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-fd-border px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Server size={14} className="text-fd-primary-text" aria-hidden />
          Your store
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-fd-border bg-fd-background px-2.5 py-1 font-mono text-[11px] text-fd-muted-foreground">
          <CreditCard size={11} className="text-fd-primary-text" aria-hidden />
          Balance <span className="tabular-nums text-fd-foreground">250.00</span> credits
        </div>
      </div>

      <div className="border-b border-fd-border px-4 py-3">
        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Billing intervals">
          {intervals.map((interval, i) => (
            <span
              key={interval}
              role="listitem"
              className={
                i === 0
                  ? 'inline-flex items-center rounded-full bg-fd-primary px-2.5 py-0.5 text-[11px] font-semibold text-fd-primary-foreground'
                  : 'inline-flex items-center rounded-full border border-fd-border px-2.5 py-0.5 text-[11px] font-medium text-fd-muted-foreground'
              }
            >
              {interval}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-px bg-fd-border sm:grid-cols-3">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={
              plan.featured
                ? 'relative flex flex-col gap-2 bg-fd-background p-4'
                : 'flex flex-col gap-2 bg-fd-card p-4'
            }
          >
            {plan.featured ? (
              <span className="absolute right-3 top-3 rounded-full bg-fd-primary/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-fd-primary-text">
                Popular
              </span>
            ) : null}
            <div className="text-[13px] font-semibold">{plan.name}</div>
            <dl className="space-y-1 font-mono text-[11px] text-fd-muted-foreground">
              <div className="flex justify-between gap-2">
                <dt>RAM</dt>
                <dd className="tabular-nums text-fd-foreground">{plan.ram}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Disk</dt>
                <dd className="tabular-nums text-fd-foreground">{plan.disk}</dd>
              </div>
            </dl>
            <div className="mt-1 font-mono text-sm font-semibold tabular-nums">
              {plan.price}
              <span className="ml-0.5 text-[11px] font-normal text-fd-muted-foreground">{plan.unit}</span>
            </div>
            <span className="mt-1 inline-flex w-full items-center justify-center rounded-md bg-fd-primary px-2.5 py-1.5 text-[12px] font-semibold text-fd-primary-foreground">
              Deploy
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-fd-border px-4 py-3">
        <div className="flex items-center gap-2 text-[12px]">
          <span className="inline-flex size-2 rounded-full bg-online/90" aria-hidden />
          <span className="font-mono text-fd-foreground">mc-survival</span>
          <span className="text-fd-muted-foreground">· Starter · Running</span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] text-fd-muted-foreground">
          <Clock size={11} aria-hidden />
          <span className="font-mono tabular-nums text-fd-foreground">0.32</span> credits left — auto-suspends at 0
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-fd-border bg-fd-background/60 px-4 py-2.5 text-[11px] text-fd-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Check size={11} className="text-fd-primary-text" aria-hidden />
          Gateways:
        </span>
        {gateways.map(g => (
          <span key={g} className="font-medium text-fd-foreground/80">
            {g}
          </span>
        ))}
      </div>
    </div>
  );
}
