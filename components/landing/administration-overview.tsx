'use client';

import { useId, useState } from 'react';
import { Coins } from '@phosphor-icons/react/dist/csr/Coins';
import { HardDrives } from '@phosphor-icons/react/dist/csr/HardDrives';
import { ShieldCheck } from '@phosphor-icons/react/dist/csr/ShieldCheck';
import { UsersThree } from '@phosphor-icons/react/dist/csr/UsersThree';
import styles from './administration-overview.module.css';

const features = [
  {
    id: 'customers', title: 'Customers & support', Icon: UsersThree,
    description: 'Adjust credits and server limits, manage accounts, and answer support tickets.',
    example: ['CUSTOMER CONTROLS', '', '> Adjust credits', '> Set server limits', '> Suspend / restore', '> Send notifications'],
  },
  {
    id: 'hosting', title: 'Servers & plans', Icon: HardDrives,
    description: 'Set resources and billing cycles, choose nodes and eggs, and suspend or restore servers.',
    example: ['EXAMPLE HOSTING PLAN', '', ' Memory    [ 4096 MB ]', ' CPU       [ 200%    ]', ' Billing   [ monthly ]', ' Nodes     [ selected]'],
  },
  {
    id: 'billing', title: 'Payments & offers', Icon: Coins,
    description: 'Review payments, download invoices, and manage vouchers, coupons, and partners.',
    example: ['STORE & BILLING', '', '> Payment history', '> Invoice downloads', '> Credit vouchers', '> Discount coupons'],
  },
  {
    id: 'staff', title: 'Staff & permissions', Icon: ShieldCheck,
    description: 'Choose what each staff role can read or change, and review activity logs.',
    example: ['EXAMPLE CUSTOM ROLE: SUPPORT', '', '[x] View users', '[x] Read tickets', '[x] Reply to tickets', '[ ] Adjust credits'],
  },
];

function TerminalExample({ lines }: { lines: string[] }) {
  const innerWidth = 29;
  const border = '+' + '-'.repeat(innerWidth) + '+';
  return <pre className={styles.terminal}>
    <span className={styles.asciiBorder}>{border}{'\n'}</span>
    {lines.map((line, index) => <span key={index}>
      <span className={styles.asciiBorder}>|</span>
      <span className={index === 0 ? styles.terminalTitle : line.startsWith('[ ]') ? styles.denied : undefined}>
        {line.startsWith('[x]') ? <><span className={styles.granted}>[x]</span>{line.slice(3).padEnd(innerWidth - 3)}</> : line.padEnd(innerWidth)}
      </span>
      <span className={styles.asciiBorder}>|</span>{'\n'}
    </span>)}
    <span className={styles.asciiBorder}>{border}</span>
  </pre>;
}

function FrameCorners() {
  return <>
    <span className={styles.frameCorner + ' ' + styles.cornerTopLeft} aria-hidden="true">+</span>
    <span className={styles.frameCorner + ' ' + styles.cornerTopRight} aria-hidden="true">+</span>
    <span className={styles.frameCorner + ' ' + styles.cornerBottomLeft} aria-hidden="true">+</span>
    <span className={styles.frameCorner + ' ' + styles.cornerBottomRight} aria-hidden="true">+</span>
  </>;
}

export function AdministrationOverview({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState(0);
  const visualId = useId();
  const feature = features[selected]!;

  return <div className={styles.overview + ' ' + className}>
    <div className={styles.visual} id={visualId} role="img" aria-label={feature.title + ': ' + feature.description}>
      <div aria-hidden="true">
        <div className={styles.screen}>
          <FrameCorners />
          <img className={styles.silhouette} src="/img/panel-permissions.svg" width="28404" height="14638" alt="" loading="lazy" decoding="async" />
        </div>
        <div className={styles.example} key={feature.id}><TerminalExample lines={feature.example} /></div>
      </div>
    </div>

    <div className={styles.features} role="group" aria-label="Explore administration features">
      {features.map(({ id, title, description, Icon }, index) => <button
        className={styles.feature}
        type="button"
        key={id}
        aria-pressed={selected === index}
        aria-controls={visualId}
        onClick={() => setSelected(index)}
      >
        <FrameCorners />
        <Icon className={styles.featureIcon} weight="duotone" aria-hidden="true" />
        <span><span className={styles.featureTitle}>{title}</span><span className={styles.featureDescription}>{description}</span></span>
      </button>)}
    </div>
  </div>;
}
