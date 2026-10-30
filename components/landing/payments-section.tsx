'use client';

import { useEffect, useRef, useState } from 'react';
import { PaymentWheel } from './payment-wheel';
import { PaymentWheelTuner } from './payment-wheel-tuner';
import { defaultWheelSettings, defaultWheelAutoRotate, defaultWheelSelection, readWheelSettings, wheelSettingsStorageKey } from './payment-wheel-settings';
import styles from './payments-section.module.css';

const paymentsWordmark = String.raw` /$$$$$$$                                                         /$$
| $$__  $$                                                       | $$
| $$  \ $$ /$$$$$$  /$$   /$$ /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
| $$$$$$$/|____  $$| $$  | $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
| $$____/  /$$$$$$$| $$  | $$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
| $$      /$$__  $$| $$  | $$| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
| $$     |  $$$$$$$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
|__/      \_______/ \____  $$|__/ |__/ |__/ \_______/|__/  |__/   \___/ |_______/
                    /$$  | $$
                   |  $$$$$$/
                    \______/`;

const gateways = [
  {
    name: 'Stripe', logo: '/img/payments/stripe.png', width: 1970, height: 820,
    description: 'Take online payments with Stripe Checkout.',
    checkout: 'Stripe Checkout collects payment. CtrlPanel verifies the signed confirmation and matches it to the order.',
    credentials: 'Add your secret key and webhook signing secret in Settings → Stripe.',
    href: '/docs/getting-started/payment-gateways/#stripe',
  },
  {
    name: 'PayPal', logo: '/img/payments/paypal.png', width: 1280, height: 340,
    description: 'Let customers pay with their PayPal account.',
    checkout: 'CtrlPanel verifies PayPal’s webhook, captured amount and currency before adding credits.',
    credentials: 'Add your client ID, client secret and webhook ID in Settings → PayPal. Use sandbox credentials to try it first.',
    href: '/docs/getting-started/payment-gateways/#paypal',
  },
  {
    name: 'Mollie', logo: '/img/payments/mollie.png', width: 1600, height: 472,
    description: 'Offer local payment methods for customers in Europe and the UK.',
    checkout: 'CtrlPanel checks the webhook token, then verifies the payment’s amount and currency with Mollie.',
    credentials: 'Add your API key and webhook secret in Settings → Mollie.',
    href: '/docs/getting-started/payment-gateways/#mollie',
  },
  {
    name: 'Mercado Pago', logo: '/img/payments/mercadopago.png', width: 3374, height: 888,
    description: 'Accept local payments across Latin America, including Brazil, Mexico and Argentina.',
    checkout: 'CtrlPanel verifies the webhook signature, payment reference and approval status with Mercado Pago.',
    credentials: 'Add your access token and webhook secret in Settings → Mercado Pago.',
    href: '/docs/getting-started/payment-gateways/#mercadopago',
  },
  {
    name: 'More with extensions', logo: '', width: 160, height: 60,
    description: 'Need another gateway? Add one from the community marketplace.',
    checkout: 'Each extension handles its own checkout and payment verification. Check its documentation.',
    credentials: 'Install a payment extension from the marketplace and follow its setup guide.',
    href: 'https://market.ctrlpanel.gg',
  },
];

export function PaymentsSection() {
  const [selected, setSelected] = useState(() => Math.max(0, gateways.findIndex(gateway => gateway.name === defaultWheelSelection)));
  const [settings, setSettings] = useState(defaultWheelSettings);
  const [settingsReady, setSettingsReady] = useState(false);
  const [autoRotate, setAutoRotate] = useState(defaultWheelAutoRotate);
  const [developerMode, setDeveloperMode] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const gateway = gateways[selected]!;
  const rotationPaused = !autoRotate || reducedMotion || !inView;

  useEffect(() => {
    // URL mode and browser overrides are intentionally client-only.
    const enabled = new URLSearchParams(window.location.search).get('dev') === 'true';
    setDeveloperMode(enabled);
    if (enabled) {
      try { setSettings(readWheelSettings(JSON.parse(localStorage.getItem(wheelSettingsStorageKey) || "null"))); } catch {}
    }
    setSettingsReady(true);
  }, []);
  useEffect(() => {
    if (settingsReady && developerMode) { try { localStorage.setItem(wheelSettingsStorageKey, JSON.stringify(settings)); } catch {} }
  }, [settings, settingsReady, developerMode]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setInView(Boolean(entry?.isIntersecting)), { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { query.removeEventListener('change', update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (rotationPaused) return;
    const timer = setTimeout(() => setSelected(index => (index + 1) % gateways.length), settings.rotationSeconds * 1000);
    return () => clearTimeout(timer);
  }, [selected, rotationPaused, settings.rotationSeconds]);

  return <>
    <div id="payments" className="landing-dollar-divider" aria-hidden="true">{'$'.repeat(512)}</div>
    <section className={styles.payments} aria-labelledby="payments-title" ref={sectionRef}>
      <div className={styles.body}>
        <h2 id="payments-title" className={styles.heading}><span className="sr-only">Payments</span><pre className={styles.ascii} aria-hidden="true">{paymentsWordmark}</pre></h2>
        <div className={styles.wheelColumn}>
          <PaymentWheel gateways={gateways} selected={selected} onChange={setSelected} settings={settings} onToggleAuto={() => setAutoRotate(value => !value)} />

        </div>

        <div className={styles.copy}>
          {developerMode ? <PaymentWheelTuner settings={settings} onChange={setSettings} autoRotate={autoRotate} onAutoRotate={setAutoRotate} selected={gateway.name} /> : <>
            <h3 className={styles.providerTitle}>{gateway.logo ? gateway.name : "More gateways"}</h3>
            <div className={styles.providerPanels}>
              {gateways.map((item, index) => <article key={item.name} className={styles.providerPanel} data-active={selected === index} aria-hidden={selected !== index} inert={selected !== index ? true : undefined}>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.setup}>{item.credentials}</p>
                <p className={styles.checkout}>{item.checkout}</p>
                <div className={styles.links}>
                  <a href={item.href}>{item.logo ? `Set up ${item.name}` : "Browse payment extensions"}</a>
                </div>
              </article>)}
            </div>
          </>}
        </div>
      </div>
    </section>
    <div className={"landing-dollar-divider " + styles.bottomDivider} aria-hidden="true">{'$'.repeat(512)}</div>
  </>;
}
