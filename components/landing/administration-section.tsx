import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { AdministrationOverview } from './administration-overview';

const adminWordmark = String.raw`  /$$$$$$        /$$               /$$
 /$$__  $$      | $$              |__/
| $$  \ $$  /$$$$$$$ /$$$$$$/$$$$  /$$ /$$$$$$$
| $$$$$$$$ /$$__  $$| $$_  $$_  $$| $$| $$__  $$
| $$__  $$| $$  | $$| $$ \ $$ \ $$| $$| $$  \ $$
| $$  | $$| $$  | $$| $$ | $$ | $$| $$| $$  | $$
| $$  | $$|  $$$$$$$| $$ | $$ | $$| $$| $$  | $$
|__/  |__/ \_______/|__/ |__/ |__/|__/|__/  |__/`;

export { AdministrationOverview as AdministrationGraphic } from './administration-overview';

export function AdministrationSection() {
  return <>
    <div id="administration" className="landing-dollar-divider" aria-hidden="true">{'$'.repeat(512)}</div>
    <section className="landing-administration" aria-labelledby="administration-title">
      <header className="landing-admin-header">
        <h2 id="administration-title"><span className="sr-only">Admin</span><pre className="landing-admin-ascii" aria-hidden="true">{adminWordmark}</pre></h2>
        <div className="landing-admin-copy">
          <p className="landing-admin-lead">Run your hosting from one place.</p>
          <p>Manage customer accounts, hosting plans, payments, and support. Define staff access with granular roles and review activity logs.</p>
          <Link href="/docs/">Explore the docs <ArrowRight aria-hidden="true"/></Link>
        </div>
      </header>
      <AdministrationOverview />
    </section>
  </>;
}
