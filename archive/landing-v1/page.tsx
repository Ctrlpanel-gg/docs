import Image from 'next/image';
import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from '@/components/footer';
import { BillingPreview } from './billing-preview';
import {
  ArrowRight,
  ArrowUpRight,
  Container,
  CreditCard,
  GitBranch,
  Globe,
  MessageSquare,
  Server,
  ShoppingBag,
  Ticket,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

type Mechanic = {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
  meta?: string;
};

const mechanics: Mechanic[] = [
  {
    icon: <ShoppingBag size={16} aria-hidden />,
    title: 'Server plans',
    text: 'Define products with RAM, disk, slots, and price. Clients buy them from your storefront.',
    href: '/docs/getting-started/basic-configuration',
    meta: 'Products → Store',
  },
  {
    icon: <CreditCard size={16} aria-hidden />,
    title: 'Billing intervals',
    text: 'Hourly, daily, weekly, monthly, or annual. Credit balances deplete; servers suspend at zero.',
    href: '/docs/getting-started/basic-configuration',
    meta: 'Credits → Auto-suspend',
  },
  {
    icon: <Ticket size={16} aria-hidden />,
    title: 'Support tickets',
    text: 'In-panel ticket system so client issues stay attached to accounts and servers.',
    href: '/docs/getting-started/basic-configuration',
  },
  {
    icon: <MessageSquare size={16} aria-hidden />,
    title: 'Discord linking',
    text: 'Email verification, Discord account linking, auto-join, and role sync.',
    href: '/docs/getting-started/basic-configuration',
  },
];

const steps = [
  {
    n: '01',
    title: 'Install the panel',
    text: 'Laravel app on Debian or Ubuntu with MariaDB and Redis — same shape as a Pterodactyl install.',
    href: '/docs/getting-started/install',
    cta: 'Install guide',
  },
  {
    n: '02',
    title: 'Define products',
    text: 'Create plans and set payment gateways: PayPal, Stripe, Mollie, or Mercado Pago.',
    href: '/docs/getting-started/payment-gateways',
    cta: 'Payment gateways',
  },
  {
    n: '03',
    title: 'Point it at Pterodactyl',
    text: 'Clients buy servers; CtrlPanel provisions them through your Pterodactyl node.',
    href: '/docs/getting-started/basic-configuration',
    cta: 'Basic configuration',
  },
];

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <main id="nd-page" tabIndex={-1} className="mx-auto w-full max-w-[1080px] px-6 md:px-10">
        <section className="landing-enter pt-14 pb-16 md:pt-16 md:pb-20">
            <a
              href="https://github.com/Ctrlpanel-gg/panel"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card py-1 ps-2.5 pe-3 text-xs font-semibold text-fd-muted-foreground transition-colors hover:border-fd-primary/40 hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary-text"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-fd-primary" />
              Free and open source
              <ArrowUpRight size={13} className="transition-[color,translate] duration-150 group-hover:-translate-y-px group-hover:text-fd-primary-text group-hover:translate-x-px" />
            </a>

            <h1 className="mt-5 max-w-[17ch] text-[clamp(40px,7vw,72px)] font-semibold leading-[0.98] tracking-[-0.04em] text-balance">
              Billing on top of
              <br className="hidden sm:block" /> Pterodactyl.
            </h1>
            <p className="mt-5 max-w-[54ch] text-[15px] leading-[1.7] text-fd-muted-foreground md:text-base">
              CtrlPanel is a free, open-source management panel. Clients buy servers from
              plans you define, pay hourly to annual, and manage them themselves — you
              run the numbers from one console.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/docs/getting-started/install" className={buttonVariants()}>
                Install CtrlPanel <ArrowRight size={15} />
              </Link>
              <a href="https://demo.ctrlpanel.gg" className={buttonVariants({ variant: 'outline' })}>
                Live demo <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/Ctrlpanel-gg/panel"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-2 py-2.5 text-[13px] font-semibold text-fd-muted-foreground transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary-text"
              >
                <GitBranch size={14} aria-hidden />
                Source
              </a>
            </div>
          </section>

          <section className="pb-16 md:pb-20">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <div className="max-w-[40ch]">
                <h2 className="text-[clamp(26px,3.5vw,34px)] font-semibold leading-[1.12] tracking-[-0.03em] text-balance">
                  Your plans. Your prices. Your store.
                </h2>
                <p className="mt-4 text-sm leading-[1.7] text-fd-muted-foreground">
                  Products map to Pterodactyl servers. Choose the billing interval, take
                  payment through a gateway, and credit lands on the client account —
                  servers provision and suspend on balance.
                </p>
                <ul className="mt-6 space-y-2.5 text-[13px] leading-[1.6] text-fd-muted-foreground">
                  <li className="flex gap-2.5">
                    <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-fd-primary" />
                    Interval pricing from hourly to annual
                  </li>
                  <li className="flex gap-2.5">
                    <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-fd-primary" />
                    Automatic suspension when credit hits zero
                  </li>
                  <li className="flex gap-2.5">
                    <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-fd-primary" />
                    PayPal, Stripe, Mollie, Mercado Pago — or your own addon
                  </li>
                </ul>
                <Link
                  href="/docs/getting-started/payment-gateways"
                  className="mt-4 inline-flex items-center gap-1.5 py-2 text-[13px] font-semibold text-fd-primary-text"
                >
                  How payments work <ArrowRight size={13} />
                </Link>
              </div>
              <BillingPreview />
            </div>
          </section>

          <section className="pb-16 md:pb-20">
            <div className="relative overflow-hidden rounded-xl bg-fd-card shadow-surface">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-[linear-gradient(to_bottom,var(--color-fd-card),transparent)]"
              />
              <Image
                src="/img/demo.webp"
                alt="CtrlPanel dashboard with navigation for servers, store, tickets, users, and products"
                width={2000}
                height={1086}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 1080px"
                className="block h-auto w-full"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[12px] text-fd-muted-foreground">
              <span>
                Admin and client views share one panel —{' '}
                <a
                  href="https://demo.ctrlpanel.gg"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-fd-primary-text underline-offset-4 hover:underline"
                >
                  walk the live demo
                </a>
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                <Globe size={11} aria-hidden />
                demo.ctrlpanel.gg
              </span>
            </div>
          </section>

          <section className="pb-16 md:pb-20">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">What it adds to Pterodactyl</h2>
            <p className="mt-2.5 max-w-[56ch] text-sm leading-[1.7] text-fd-muted-foreground">
              The parts a hosting business needs that a stock game panel does not ship.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {mechanics.map(m => (
                <li key={m.title}>
                  <Link
                    href={m.href}
                    className="group flex gap-4 border-t border-fd-border py-5 transition-colors hover:bg-fd-accent/50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-fd-primary-text -mx-3 rounded-lg px-3"
                  >
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-fd-border bg-fd-card text-fd-primary-text">
                      {m.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-baseline gap-x-2 text-[15px] font-semibold">
                        {m.title}
                        {m.meta ? (
                          <span className="font-mono text-[11px] font-normal text-fd-muted-foreground">
                            {m.meta}
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1 block text-[13px] leading-[1.6] text-fd-muted-foreground">
                        {m.text}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-fd-primary-text opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                        Open docs <ArrowRight size={11} />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="pb-16 md:pb-20">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">Zero to billing</h2>
            <p className="mt-2.5 max-w-[52ch] text-sm leading-[1.7] text-fd-muted-foreground">
              Three steps. Everything below is documented end to end.
            </p>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border md:grid-cols-3">
              {steps.map(step => (
                <li key={step.n} className="flex flex-col bg-fd-card p-6">
                  <span className="font-mono text-[12px] font-semibold text-fd-primary-text">{step.n}</span>
                  <h3 className="mt-3 text-[15px] font-semibold">{step.title}</h3>
                  <p className="mt-1.5 flex-1 text-[13px] leading-[1.65] text-fd-muted-foreground">
                    {step.text}
                  </p>
                  <Link
                    href={step.href}
                    className="group mt-2 inline-flex w-max items-center gap-1.5 py-2 text-[13px] font-semibold text-fd-primary-text"
                  >
                    {step.cta} <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section className="pb-16 md:pb-24">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">Run it yourself</h2>
            <p className="mt-2.5 max-w-[52ch] text-sm leading-[1.7] text-fd-muted-foreground">
              Two ways to run CtrlPanel on your own infrastructure.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/docs/getting-started/install"
                className="group rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/40"
              >
                <Server size={18} className="text-fd-primary-text" />
                <h3 className="mt-4 text-[15px] font-semibold">Server install</h3>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-fd-muted-foreground">
                  Debian and Ubuntu: dependencies, database, web server with SSL, and the
                  queue worker.
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 py-2 text-[13px] font-semibold text-fd-primary-text">
                  Open the install guide{' '}
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <a
                href="https://github.com/Ctrlpanel-gg/panel/tree/main/docker"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/40"
              >
                <Container size={18} className="text-fd-primary-text" />
                <h3 className="mt-4 flex items-center gap-2 text-[15px] font-semibold">
                  Docker
                  <span className="rounded-full bg-fd-primary/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-fd-primary-text">
                    Beta
                  </span>
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-fd-muted-foreground">
                  Compose files for standalone and development setups ship in the panel
                  repository.
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 py-2 text-[13px] font-semibold text-fd-primary-text">
                  View on GitHub{' '}
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>
          </section>
      </main>
      <Footer className="max-w-[1080px]" />
    </HomeLayout>
  );
}
