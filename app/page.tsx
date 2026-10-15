import Image from 'next/image';
import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { ArrowUpRight, ArrowRight, Terminal, Layers, Wallet, Code2, BookOpen, Heart } from 'lucide-react';

const resources = [
  { icon: Terminal, title: 'Installation', text: 'Install CtrlPanel on Debian or Ubuntu.', url: '/docs/getting-started/install', label: 'Start installing' },
  { icon: Wallet, title: 'Configuration', text: 'Set up billing, payments, and Discord integration.', url: '/docs/getting-started/basic-configuration', label: 'Explore configuration' },
  { icon: Code2, title: 'API reference', text: 'API documentation for users, servers, and products.', url: '/docs/api', label: 'Open API reference' },
];

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="mx-auto w-full max-w-[1192px] px-10 max-[900px]:px-[25px]">
        <section className="grid grid-cols-[1fr_1.2fr] items-center gap-10 pt-[100px] pb-[90px] max-[900px]:gap-[35px] max-[900px]:py-[65px] max-[640px]:grid-cols-1 max-[640px]:gap-[42px] max-[640px]:pt-[45px] max-[640px]:pb-[60px]">
          <div>
            <h1 className="my-6 text-[clamp(44px,5.3vw,72px)] font-[650] leading-[1.055] tracking-[-3.7px] max-[900px]:tracking-[-2.5px] max-[640px]:text-[clamp(40px,10vw,54px)]">
              A dashboard for<br /><span className="text-fd-primary">Pterodactyl.</span>
            </h1>
            <p className="max-w-[425px] text-base leading-[1.8] text-fd-muted-foreground max-[640px]:text-sm">
              Let your clients manage their servers, add credits, and handle billing in one place.
            </p>
            <div className="mt-[30px] flex flex-wrap items-center gap-[23px] max-[900px]:gap-4">
              <Link href="/docs" className="inline-flex items-center gap-3 rounded-md bg-fd-primary px-[18px] py-[14px] text-xs font-[650] text-fd-primary-foreground transition-transform duration-200 hover:-translate-y-0.5">
                Read the documentation <ArrowRight size={17} />
              </Link>
              <a href="https://demo.ctrlpanel.gg" className="inline-flex items-center gap-3 text-xs font-[650] hover:text-fd-primary">
                Try the demo <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="min-w-0 max-[640px]:mx-auto max-[640px]:w-full max-[640px]:max-w-[560px]">
            <Image src="/img/macbook-demo.png" alt="CtrlPanel dashboard displayed on a MacBook" width={1920} height={1080} sizes="(max-width: 640px) 100vw, 55vw" priority className="block h-auto w-full" />
          </div>
        </section>

        <section>
          <div className="grid grid-cols-3 divide-x divide-fd-border overflow-hidden rounded-lg border border-fd-border max-[640px]:grid-cols-1 max-[640px]:divide-x-0 max-[640px]:divide-y">
            {resources.map(r => (
              <Link key={r.url} href={r.url} className="bg-fd-card p-[30px] transition-colors hover:bg-fd-muted max-[900px]:p-[23px]">
                <div className="flex items-center justify-between text-fd-primary"><r.icon size={23} /></div>
                <h2 className="mt-6 text-xl font-[650] tracking-[-0.5px] max-[640px]:mt-5">{r.title}</h2>
                <p className="mt-2.5 min-h-12 text-[13px] leading-[1.8] text-fd-muted-foreground max-[640px]:min-h-0">{r.text}</p>
                <span className="mt-[25px] flex items-center justify-between text-[11px] font-[650] text-fd-primary">{r.label}<ArrowUpRight size={17} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-[1.3fr_1fr] gap-[100px] border-b border-fd-border py-[65px] max-[900px]:gap-10 max-[640px]:grid-cols-1 max-[640px]:gap-5 max-[640px]:py-[45px]">
          <div>
            <h2 className="mb-3 text-[29px] font-semibold leading-[1.3] tracking-[-0.9px]">Community</h2>
            <p className="max-w-[475px] text-[13px] leading-[1.9] text-fd-muted-foreground">Find themes and extensions, follow development, or get help on Discord.</p>
          </div>
          <div className="flex flex-col justify-center">
            <Link href="/docs/guides/themes" className="flex items-center gap-[15px] border-b border-fd-border py-[18px] text-xs hover:text-fd-primary [&>svg:last-child]:ml-auto"><Layers size={18} />Themes &amp; extensions<ArrowUpRight size={16} /></Link>
            <a href="https://github.com/orgs/Ctrlpanel-gg/projects/1" className="flex items-center gap-[15px] border-b border-fd-border py-[18px] text-xs hover:text-fd-primary [&>svg:last-child]:ml-auto"><BookOpen size={18} />Roadmap<ArrowUpRight size={16} /></a>
            <a href="https://discord.gg/ctrlpanel-gg-787829714483019826" className="flex items-center gap-[15px] border-b border-fd-border py-[18px] text-xs hover:text-fd-primary [&>svg:last-child]:ml-auto"><Heart size={18} />Discord<ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="flex items-center gap-10 border-b border-fd-border py-[30px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[15px]">
          <a href="https://zap-hosting.com/a/29b1c37a4f87bde5463afe8a0f49d129b16ccf9e" className="flex items-center gap-6 text-xs max-[640px]:flex-wrap max-[640px]:gap-3">
            <strong>ZAP-Hosting</strong><span className="text-[11px] text-fd-muted-foreground">Use code CtrlPanel for 20% off</span><ArrowUpRight size={18} />
          </a>
        </section>

        <footer className="flex justify-between gap-5 py-[27px] text-[9px] text-fd-muted-foreground max-[900px]:flex-wrap max-[640px]:flex-col max-[640px]:gap-2.5">
          <span>© {new Date().getFullYear()} CtrlPanel.gg</span>
          <a href="https://github.com/Ctrlpanel-gg/panel">View on GitHub ↗</a>
        </footer>
      </main>
    </HomeLayout>
  );
}