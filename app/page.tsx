import Image from 'next/image';
import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from '@/components/footer';
import { ArrowRight, ArrowUpRight, Terminal } from 'lucide-react';
import { CopyCommand } from '@/components/copy-command';

type Capability = { title: string; text: string; href: string; external?: boolean };
type FooterLink = { title: string; href: string; external?: boolean };

const capabilities: Capability[] = [
  { title: 'Server plans', text: 'Clients buy servers from pre-configured plans you define.', href: '/docs/getting-started/basic-configuration' },
  { title: 'Flexible billing', text: 'Plans from hourly to annual, with automatic suspension on low credit.', href: '/docs/getting-started/basic-configuration' },
  { title: 'Payment gateways', text: 'PayPal, Stripe, Mollie, and MercadoPago, or write your own addon.', href: '/docs/getting-started/payment-gateways' },
  { title: 'Discord linking', text: 'Email verification and Discord linking with auto-join and role sync.', href: '/docs/getting-started/basic-configuration' },
  { title: 'Vouchers & coupons', text: 'Credit rewards and product discounts, plus an in-panel ticket system.', href: '/docs/getting-started/basic-configuration' },
  { title: 'REST API', text: 'Endpoints for users, servers, products, and notifications.', href: '/docs/api' },
];

const links: FooterLink[] = [
  { title: 'Documentation', href: '/docs' },
  { title: 'Contributing', href: '/docs/contributing' },
  { title: 'Development', href: '/docs/development' },
  { title: 'Discord', href: 'https://discord.gg/ctrlpanel-gg-787829714483019826', external: true },
];

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="relative isolate">
        <main className="mx-auto w-full max-w-[1080px] px-6 md:px-10">
          <section className="pt-24 pb-14 md:pt-32">
            <h1 className="max-w-[20ch] text-[clamp(38px,6vw,68px)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance">
              A simple way to control Pterodactyl.
            </h1>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.7] text-fd-muted-foreground md:text-base">
              CtrlPanel is a free, open-source management panel with flexible billing.
              Clients buy servers from your plans and manage them themselves &mdash; you
              watch the numbers in one console.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/docs/getting-started/install"
                className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4.5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-colors hover:opacity-90"
              >
                Install CtrlPanel <ArrowRight size={15} />
              </Link>
              <a
                href="https://demo.ctrlpanel.gg"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-fd-muted-foreground transition-colors hover:text-fd-foreground"
              >
                Live demo <ArrowUpRight size={14} />
              </a>
            </div>
          </section>

          <section className="pb-20">
            <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-[0_32px_64px_-40px_rgba(0,0,0,0.7)]">
              <Image
                src="/img/demo.png"
                alt="CtrlPanel dashboard showing servers, users, and revenue"
                width={2938}
                height={1594}
                priority
                sizes="(max-width: 768px) 100vw, 1080px"
                className="block h-auto w-full"
              />
            </div>
          </section>

          <section className="pb-20">
            <dl className="grid gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(cap => (
                <Link
                  key={cap.title}
                  href={cap.href}
                  target={cap.external ? '_blank' : undefined}
                  rel={cap.external ? 'noreferrer noopener' : undefined}
                  className="group flex flex-col gap-1.5 bg-fd-card p-5 transition-colors hover:bg-fd-accent"
                >
                  <dt className="flex items-center justify-between text-sm font-semibold">
                    {cap.title}
                    <ArrowUpRight size={14} className="text-fd-muted-foreground transition-[color,translate] duration-150 group-hover:text-fd-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </dt>
                  <dd className="text-[13px] leading-[1.6] text-fd-muted-foreground">{cap.text}</dd>
                </Link>
              ))}
            </dl>
          </section>

          <section className="pb-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.02em]">Self-host it.</h2>
                <p className="mt-2.5 max-w-[42ch] text-sm leading-[1.7] text-fd-muted-foreground">
                  Clone the panel, install dependencies, and link storage. Database, queue,
                  and web server setup live in the install guide.
                </p>
                <Link href="/docs/getting-started/install" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fd-primary">
                  Read the install guide <ArrowRight size={14} />
                </Link>
              </div>
              <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-background">
                <div className="flex items-center gap-2 border-b border-fd-border px-4 py-2.5">
                  <Terminal size={14} className="text-fd-muted-foreground" />
                  <span className="font-mono text-[11px] text-fd-muted-foreground">bash</span>
                </div>
                <div className="divide-y divide-fd-border">
                  <CopyCommand command="git clone https://github.com/Ctrlpanel-gg/panel.git ./" />
                  <CopyCommand command="COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader" />
                  <CopyCommand command="php artisan storage:link" />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-wrap gap-x-6 gap-y-2 border-t border-fd-border py-6 text-sm">
            {links.map(l => (
              <a
                key={l.title}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer noopener' : undefined}
                className="inline-flex items-center gap-1 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
              >
                {l.title}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </section>
        </main>
      </div>
      <Footer className="max-w-[1080px]" />
    </HomeLayout>
  );
}