'use client';

import { useId, useState, useSyncExternalStore, type MouseEvent, type ReactNode } from 'react';
import './ctrlpanel-dashboard.css';

type IconName = 'home' | 'server' | 'coins' | 'ticket' | 'user-x' | 'user-check' | 'tools' | 'gamepad' | 'users' | 'sliders' | 'store' | 'link' | 'history' | 'handshake' | 'menu' | 'database' | 'power';

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const shapes: Record<IconName, ReactNode> = {
    home: <><path d="m1 11 11-9 11 9-2 2-9-7-9 7z"/><path d="M5 12v10h5v-7h4v7h5V12l-7-5z"/><path d="M17 3h3v6l-3-2z"/></>,
    server: <>{[2, 9, 16].map(y => <g key={y}><rect x="1" y={y} width="22" height="6" rx="1.3"/><circle cx="17" cy={y+3} r=".9" fill="var(--cp-icon-cutout, #252c30)"/><circle cx="20" cy={y+3} r=".9" fill="var(--cp-icon-cutout, #252c30)"/></g>)}</>,
    coins: <><ellipse cx="16" cy="5" rx="8" ry="3"/><path d="M8 7v3c4 3 12 3 16 0V7c-4 3-12 3-16 0M17 13v3c4-.2 6-1.4 7-2.4v-3c-1.6 1.2-4 2-7 2.4"/><ellipse cx="8" cy="13" rx="8" ry="3"/><path d="M0 15v3c4 3 12 3 16 0v-3c-4 3-12 3-16 0m0 5v2c4 3 12 3 16 0v-2c-4 3-12 3-16 0"/></>,
    database: <><ellipse cx="12" cy="4" rx="10" ry="4"/><path d="M2 7v5c5 4 15 4 20 0V7c-5 4-15 4-20 0m0 8v5c5 5 15 5 20 0v-5c-5 4-15 4-20 0"/></>,
    ticket: <><path d="M2 5h20v5a2 2 0 0 0 0 4v5H2v-5a2 2 0 0 0 0-4z" fill="none" stroke="currentColor" strokeWidth="2.5"/><rect x="5" y="8" width="14" height="8" rx="1"/></>,
    'user-x': <><circle cx="9" cy="6" r="5"/><path d="M1 23v-5a8 8 0 0 1 16 0v5zM18 9l2-2 2 2 2-2 2 2-2 2 2 2-2 2-2-2-2 2-2-2 2-2z"/></>,
    'user-check': <><circle cx="8" cy="6" r="5"/><path d="M0 23v-5a8 8 0 0 1 16 0v5zM15 10l3 3 6-7 2 2-8 9-5-5z"/></>,
    users: <><circle cx="12" cy="6" r="4"/><circle cx="3.5" cy="8" r="3"/><circle cx="20.5" cy="8" r="3"/><path d="M5 22v-4a7 7 0 0 1 14 0v4zM0 13a5 5 0 0 1 6 0 9 9 0 0 0-3 7H0zm24 0a5 5 0 0 0-6 0 9 9 0 0 1 3 7h3z"/></>,
    tools: <><path d="M3 1 1 3l5 7 3-3zm7 11L2 20a2.8 2.8 0 0 0 4 4l8-8zm5 1 8 8a2.2 2.2 0 0 1-3 3l-8-8zM23 1l-5 5 1 3 3 1 5-5c2 8-6 13-11 7l-3-3C8 4 15-2 20 0l-4 4 2 2z"/></>,
    gamepad: <><path d="M7 6h10c8 0 11 15 5 15-2 0-4-4-6-4H8c-2 0-4 4-6 4C-4 21-1 6 7 6"/><path d="M6 9v8m-4-4h8" fill="none" stroke="var(--cp-surface)" strokeWidth="2"/><circle cx="18" cy="10" r="1.2" fill="var(--cp-surface)"/><circle cx="21" cy="14" r="1.2" fill="var(--cp-surface)"/></>,
    sliders: <><path d="M1 5h22M1 12h22M1 19h22" fill="none" stroke="currentColor" strokeWidth="2"/><rect x="6" y="2" width="3" height="6"/><rect x="15" y="9" width="3" height="6"/><rect x="8" y="16" width="3" height="6"/></>,
    store: <><path d="m3 10 5-8 2 1-4 7h12l-4-7 2-1 5 8h3v3H0v-3zM3 14h18l-2 10H5z"/><path d="M9 15v7m6-7v7" stroke="var(--cp-surface)" strokeWidth="2"/></>,
    link: <><path d="m10 8 4-4a5 5 0 0 1 7 7l-5 5a5 5 0 0 1-7-1m5 1-4 4a5 5 0 0 1-7-7l5-5a5 5 0 0 1 7 1m-7 7 8-8" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/></>,
    history: <><path d="M4 8a9 9 0 1 1-1 8M4 2v7h7m1-3v7l-4 2" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></>,
    handshake: <><path d="m1 7 4-2 3 2-4 11-3-1zm22 0-4-2-3 2 4 11 3-1zM8 8l4-3 5 3 3 9-5 5-7-4-3-2z"/><path d="m9 10 4-3 6 6m-6 1 4 4m-7-2 4 4" fill="none" stroke="var(--cp-surface)" strokeWidth="1.6" strokeLinecap="round"/></>,
    menu: <path d="M3 5h18M3 12h18M3 19h18" fill="none" stroke="currentColor" strokeWidth="3"/>,
    power: <><path d="M12 2v11m-6-9a9 9 0 1 0 12 0" fill="none" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round"/></>,
  };
  return <svg className={`cp-icon ${className}`} viewBox="0 0 26 26" aria-hidden="true" focusable="false" fill="currentColor">{shapes[name]}</svg>;
}

/** Inline artwork keeps the component portable: no image URLs or icon libraries. */
function PanelLogo({ className = '' }: { className?: string }) {
  const clip = useId();
  return <svg className={`cp-logo ${className}`} viewBox="0 0 280 280" role="img" aria-label="Ctrlpanel.gg server logo">
    <circle cx="140" cy="140" r="140" fill="#239bd3"/>
    <defs><clipPath id={clip}><rect x="64" y="68" width="152" height="46" rx="7"/><rect x="64" y="116" width="152" height="46" rx="7"/><rect x="64" y="164" width="152" height="46" rx="7"/></clipPath></defs>
    <g clipPath={`url(#${clip})`}><path fill="#313a40" d="M64 68h152v142H64z"/><path fill="#293239" d="M140 68h76v46h-76zM64 116h76v46H64zm76 48h76v46h-76z"/></g>
    {[78,174].map(y=><g key={y}><rect x="76" y={y} width="45" height="10" rx="2" fill="#649da4"/><rect x="76" y={y+17} width="45" height="10" rx="2" fill="#649da4"/>{[0,9,18].map(d=><rect key={d} x="200" y={y+d} width="6" height="7" rx="1" fill="#e55d54"/>)}</g>)}
    <rect x="158" y="126" width="45" height="10" rx="2" fill="#649da4"/><rect x="158" y="143" width="45" height="10" rx="2" fill="#649da4"/>{[0,9,18].map(d=><rect key={d} x="76" y={126+d} width="6" height="7" rx="1" fill="#e55d54"/>)}
  </svg>;
}

const groups: { label?: string; items: { id: string; label: string; icon: IconName }[] }[] = [
  { items: [{id:'dashboard',label:'Dashboard',icon:'home'},{id:'servers',label:'Servers',icon:'server'},{id:'store',label:'Store',icon:'coins'},{id:'support',label:'Support Ticket',icon:'ticket'}] },
  { label:'Administration', items:[{id:'overview',label:'Overview',icon:'home'},{id:'tickets',label:'Ticket List',icon:'ticket'},{id:'ticket-blacklist',label:'Ticket Blacklist',icon:'user-x'},{id:'roles',label:'Role Management',icon:'user-check'},{id:'settings',label:'Settings',icon:'tools'},{id:'api',label:'Application API',icon:'gamepad'}] },
  { label:'Management', items:[{id:'users',label:'Users',icon:'users'},{id:'manage-servers',label:'Servers',icon:'server'},{id:'products',label:'Products',icon:'sliders'},{id:'manage-store',label:'Store',icon:'store'}] },
];

export interface CtrlPanelDashboardProps {
  className?: string;
  /** Keep the full desktop arrangement inside a scaled product preview. */
  embedded?: boolean;
  username?: string;
  credits?: number;
  serverCount?: number;
  serverLimit?: number;
  referralCount?: number;
  commission?: number;
  referralUrl?: string;
  activeItem?: string;
  /** Supply your application's actual destinations; otherwise links use local anchors. */
  links?: Partial<Record<string, string>>;
  onNavigate?: (destination: string) => void;
  onLogout?: () => void;
  activityLogs?: { id: string; message: string; time?: string }[];
  usefulLinks?: { label: string; href: string }[];
  motd?: ReactNode;
}

const mobileQuery = "(max-width: 700px)";
const subscribeMobile = (notify: () => void) => {
  const query = window.matchMedia(mobileQuery);
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
};

export function CtrlPanelDashboard({className='',embedded=false,username='demo',credits=250,serverCount=0,serverLimit=1,referralCount=0,commission=100,referralUrl,activeItem='dashboard',links={},onNavigate,onLogout,activityLogs=[],usefulLinks=[],motd}: CtrlPanelDashboardProps) {
  const [collapsed,setCollapsed]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  const smallViewport=useSyncExternalStore(subscribeMobile,()=>window.matchMedia(mobileQuery).matches,()=>false);
  const mobile=smallViewport&&!embedded;
  const sidebarExpanded=mobile?mobileOpen:!collapsed;
  const [copyStatus,setCopyStatus]=useState<'idle'|'copied'|'error'>('idle');
  const sidebarId=useId();
  const amount=credits.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const navigate=(id:string)=>(event:MouseEvent<HTMLAnchorElement>)=>{if(onNavigate && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey){event.preventDefault();onNavigate(id);}};
  const destination=(id:string)=>links[id]??`#${id}`;
  async function copyReferral(){
    try { await navigator.clipboard.writeText(referralUrl??`${window.location.origin}/register?ref=${encodeURIComponent(username)}`);setCopyStatus('copied'); }
    catch { setCopyStatus('error'); }
  }
  return <div className={`cp-dashboard ${embedded?'cp-dashboard-embedded':''} ${collapsed?'cp-sidebar-collapsed':''} ${mobileOpen?'cp-mobile-open':''} ${className}`}>
    <header className="cp-topbar">
      <a className="cp-brand" href={destination('dashboard')} onClick={navigate('dashboard')}><PanelLogo/><span>Ctrlpanel.gg</span></a>
      <nav className="cp-topnav" aria-label="Top navigation">
        <button className="cp-menu-button" type="button" aria-label={sidebarExpanded?'Collapse sidebar':'Expand sidebar'} aria-controls={sidebarId} aria-expanded={sidebarExpanded} onClick={()=>mobile?setMobileOpen(!mobileOpen):setCollapsed(!collapsed)}><Icon name="menu"/></button>
        <a href={destination('dashboard')} onClick={navigate('dashboard')}><Icon name="home"/><span>Home</span></a>
        <a href={destination('phpmyadmin')} onClick={navigate('phpmyadmin')}><Icon name="database"/><span>phpMyAdmin</span></a>
      </nav>
      <div className="cp-account"><span className="cp-account-balance"><Icon name="coins"/>{amount}</span><span className="cp-username">{username}</span><button type="button" className="cp-logout" aria-label="Log out" onClick={onLogout}><Icon name="power"/></button></div>
    </header>
    <aside className="cp-sidebar" id={sidebarId} aria-label="Panel navigation" inert={!sidebarExpanded}>
      {groups.map((group,index)=><nav key={group.label??'main'} className={`cp-nav-group cp-nav-group-${index}`} aria-label={group.label??'Main'}>
        {group.label&&<h2>{group.label}</h2>}
        {group.items.map(item=><a key={item.id} className={`cp-nav-item ${activeItem===item.id?'cp-nav-active':''}`} href={destination(item.id)} onClick={navigate(item.id)} aria-current={activeItem===item.id?'page':undefined}><Icon name={item.icon}/><span>{item.label}</span>{item.id==='servers'&&<span className="cp-server-badge">{serverCount} / {serverLimit}</span>}</a>)}
      </nav>)}
    </aside>
    <main className="cp-main" aria-label="Dashboard" id="dashboard">
      <div className="cp-stats">
        <section className="cp-stat" aria-label="Servers"><span className="cp-stat-icon cp-stat-server"><Icon name="server"/></span><div><h2>Servers</h2><strong>{serverCount}</strong></div></section>
        <section className="cp-stat" aria-label="Credits"><span className="cp-stat-icon cp-stat-credits"><Icon name="coins"/></span><div><h2>Credits</h2><strong>{amount}</strong></div></section>
      </div>
      <div className="cp-columns">
        <div className="cp-column">
          <section className="cp-card cp-motd"><h2 className="cp-card-heading"><Icon name="home"/>Ctrlpanel.gg - MOTD</h2><div className="cp-motd-body">{motd??<><PanelLogo className="cp-motd-logo"/><h1>Ctrlpanel.gg</h1><p>Thank you for using our Software</p><p>If you have any questions, make sure to join our<br className="cp-wide-break"/> <a href={links.discord??'https://discord.gg/ctrlpanel-gg-787829714483019826'}>Discord</a></p><small>(you can change this message in the <a href={destination('settings')} onClick={navigate('settings')}>Settings</a> )</small></>}</div></section>
          <section className="cp-card cp-useful"><h2 className="cp-card-heading"><Icon name="link"/>Useful Links</h2><div className="cp-useful-body">{usefulLinks.length>0&&<ul>{usefulLinks.map(link=><li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>}</div></section>
        </div>
        <div className="cp-column">
          <section className="cp-card cp-partner"><h2 className="cp-card-heading"><Icon name="handshake"/>Partner program</h2><div className="cp-partner-body"><div className="cp-referral-row"><button className="cp-referral-copy" type="button" onClick={copyReferral}><Icon name="user-check"/>{copyStatus==='copied'?'Referral URL copied!':copyStatus==='error'?'Could not copy. Try again':'Your referral URL: Click to copy'}</button><span className="cp-referral-count">Number of referred users: {referralCount}</span></div><span className="cp-sr-only" role="status">{copyStatus==='copied'?'Referral URL copied to clipboard.':copyStatus==='error'?'Clipboard unavailable. Check your browser permissions.':''}</span><table className="cp-commission"><thead><tr><th scope="col">New user payment commision</th></tr></thead><tbody><tr><td>{commission}%</td></tr></tbody></table></div></section>
          <section className="cp-card cp-activity"><h2 className="cp-card-heading"><Icon name="history"/>Activity Logs</h2><div className="cp-activity-body">{activityLogs.length===0?<p>No activity logs available</p>:<ul>{activityLogs.map(log=><li key={log.id}><span>{log.message}</span>{log.time&&<time>{log.time}</time>}</li>)}</ul>}</div></section>
        </div>
      </div>
    </main>
  </div>;
}

export default CtrlPanelDashboard;
