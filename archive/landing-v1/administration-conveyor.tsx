import Link from 'next/link';
import { ArrowRight, Boxes, CreditCard, Server, ShieldCheck, Ticket, UsersRound } from 'lucide-react';

const capabilities = [
  { icon: UsersRound, title: 'Users & permissions', text: 'Manage accounts and give your staff the access they need.' },
  { icon: Server, title: 'Servers & products', text: 'Set up plans, adjust resources, and suspend or restore servers.' },
  { icon: CreditCard, title: 'Credits & support', text: 'Manage balances and payments, and keep customer tickets in one place.' },
];
const operations = [
  { icon: UsersRound, title: 'Users', detail: 'Account created' },
  { icon: ShieldCheck, title: 'Roles', detail: 'Permissions updated' },
  { icon: Boxes, title: 'Plans', detail: 'Product published' },
  { icon: CreditCard, title: 'Credits', detail: 'Balance adjusted' },
  { icon: Server, title: 'Servers', detail: 'Server suspended' },
  { icon: Ticket, title: 'Tickets', detail: 'Issue resolved' },
];

/** Pass a generated asset to replace the inline illustration without changing the layout. */
export function AdministrationGraphic({ imageSrc }: { imageSrc?: string }) {
  if (imageSrc) return <img className="landing-admin-image" src={imageSrc} alt="Users, roles, plans, credits, servers, and tickets moving through a single administration workflow" width="1600" height="500" loading="lazy" />;
  return (
    <svg className="landing-admin-illustration" viewBox="0 0 1600 500" role="img" aria-label="A conveyor of users, roles, plans, credits, servers, and tickets, representing the controls available in CtrlPanel">
      <path className="admin-ground" d="M35 356 1402 170 1570 242 200 436Z" />
      <path className="admin-belt-edge" d="m45 333 1357-184 153 65v40L198 438 45 373Z" />
      <path className="admin-belt" d="m45 333 1357-184 153 65-1357 184Z" />
      <path className="admin-belt-seam" d="m198 398 1357-184M198 398v40" />
      {[0,1,2,3,4,5].map(i=><g key={i} transform={`translate(${185+i*230} ${371-i*31})`}><path className="admin-direction" d="m0 0 7 3-5 5m3-6 9-1" /><circle className="admin-roller" cx="65" cy="20" r="3"/><circle className="admin-roller" cx="82" cy="18" r="3"/></g>)}
      {operations.map(({icon:Icon,title,detail},i)=><g key={title} transform={`translate(${96+i*230} ${306-i*31}) skewY(-7.7)`}>
        <rect className="admin-card-shadow" x="7" y="-137" width="185" height="140" rx="13" />
        <rect className="admin-card" x="0" y="-145" width="185" height="140" rx="13" />
        <rect className="admin-card-inset" x="7" y="-138" width="171" height="126" rx="9" />
        <Icon className="admin-card-icon" x="20" y="-124" width="29" height="29" strokeWidth="1.6" />
        <circle className="admin-card-dot" cx="163" cy="-124" r="3" />
        <text className="admin-card-title" x="20" y="-65">{title}</text>
        <text className="admin-card-detail" x="20" y="-43">{detail}</text>
        <path className="admin-card-rule" d="M20-27h70" />
      </g>)}
      <g className="admin-registration"><path d="M93 118h24m-12-12v24M1430 392h24m-12-12v24"/><rect x="1420" y="74" width="5" height="5"/><rect x="1430" y="84" width="5" height="5"/></g>
    </svg>
  );
}

export function AdministrationSection() {
  return (
    <>
      <div id="administration" className="landing-dollar-divider" aria-hidden="true">{Array.from({length:3},()=>'$'.repeat(256)).join('\n')}</div>
      <section className="landing-administration" aria-labelledby="administration-title">
        <div className="landing-admin-intro">
          <div>
            <p className="landing-section-label">Administration</p>
            <h2 id="administration-title">Your hosting,<br />under control.</h2>
          </div>
          <div className="landing-admin-summary">
            <p>Manage users, servers, products, and payments from one dashboard. Set staff permissions, adjust client balances, and handle support with the tools right in front of you.</p>
            <Link href="/docs/getting-started/basic-configuration/">Explore the configuration guide <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <figure className="landing-admin-graphic"><AdministrationGraphic /></figure>
        <ul className="landing-admin-capabilities">
          {capabilities.map(({icon:Icon,title,text})=><li key={title}><Icon aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ul>
      </section>
    </>
  );
}
