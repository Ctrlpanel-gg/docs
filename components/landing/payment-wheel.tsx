'use client';

import { useEffect, useId, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { PuzzlePiece } from '@phosphor-icons/react/dist/csr/PuzzlePiece';
import { paymentWheelFrame } from './payment-wheel-motion';
import { defaultWheelSettings, type WheelSettings } from './payment-wheel-settings';
import styles from './payments-section.module.css';

type Gateway = { name: string; logo: string; width: number; height: number };
export function PaymentWheel({ gateways, selected, onChange, onToggleAuto, settings = defaultWheelSettings }: { gateways: Gateway[]; selected: number; onChange: (index: number) => void; onToggleAuto?: () => void; settings?: WheelSettings }) {
  const root = useRef<HTMLDivElement>(null);
  const configuration = useRef(settings);
  configuration.current = settings;
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const position = useRef(selected), target = useRef(selected);
  const size = useRef({ width: 400, height: 350, itemWidth: 240 });
  const frame = useRef<number | null>(null), lastFrame = useRef(0), lastScroll = useRef(0);
  const reduced = useRef(false), dragged = useRef(false);
  const pointer = useRef<{ x: number; y: number; position: number } | null>(null);
  const handlers = useRef({ onChange, count: gateways.length });
  handlers.current = { onChange, count: gateways.length };
  const id = useId();
  const wrap = (value: number) => ((value % gateways.length) + gateways.length) % gateways.length;

  function paint() {
    for (const row of paymentWheelFrame(handlers.current.count, position.current, size.current.width, size.current.height, size.current.itemWidth, configuration.current)) {
      const element = options.current[row.index];
      if (!element) continue;
      element.style.transformOrigin = row.origin;
      element.style.transform = row.transform;
      element.style.filter = row.filter;
      element.style.opacity = row.visible ? String(row.opacity) : '0';
      element.style.visibility = row.visible ? 'visible' : 'hidden';
      element.setAttribute('aria-hidden', String(!row.visible));
    }
  }
  function animate(now: number) {
    const elapsed = Math.min(now - lastFrame.current, 50);
    lastFrame.current = now;
    position.current = reduced.current ? target.current : position.current + (target.current - position.current) * (1 - Math.exp(-elapsed / configuration.current.smoothing));
    const settled = Math.abs(target.current - position.current) < .001;
    if (settled) position.current = target.current;
    paint();
    frame.current = settled ? null : requestAnimationFrame(animate);
  }
  function move(value: number, notify = true) {
    target.current = value;
    if (notify) handlers.current.onChange(((Math.round(value) % handlers.current.count) + handlers.current.count) % handlers.current.count);
    if (frame.current === null) { lastFrame.current = performance.now(); frame.current = requestAnimationFrame(animate); }
  }
  function select(index: number) {
    let distance = index - wrap(target.current);
    if (distance > gateways.length / 2) distance -= gateways.length;
    if (distance < -gateways.length / 2) distance += gateways.length;
    move(target.current + distance);
  }

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const measure = () => { const bounds = element.getBoundingClientRect(); size.current = { width: bounds.width, height: bounds.height, itemWidth: options.current[0]?.offsetWidth || 240 }; paint(); };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { reduced.current = query.matches; };
    update(); query.addEventListener('change', update);
    return () => { observer.disconnect(); query.removeEventListener('change', update); if (frame.current !== null) cancelAnimationFrame(frame.current); frame.current = null; };
  }, [gateways.length]);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    size.current = { width: bounds.width, height: bounds.height, itemWidth: options.current[0]?.offsetWidth || settings.logoSize };
    paint();
  }, [settings]);

  useEffect(() => {
    if (selected !== wrap(Math.round(target.current))) select(selected);
  }, [selected]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const scroll = (event: WheelEvent) => {
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!element.contains(document.activeElement) || Math.abs(delta) < 4) return;
      event.preventDefault();
      if (performance.now() - lastScroll.current < 180) return;
      lastScroll.current = performance.now();
      move(Math.round(target.current) + Math.sign(delta));
    };
    element.addEventListener('wheel', scroll, { passive: false });
    return () => element.removeEventListener('wheel', scroll);
  }, [gateways.length]);

  const initial = useRef(paymentWheelFrame(gateways.length, selected, 400, 350, 240, settings)).current;
  return <div ref={root} className={styles.wheelStage} style={{ "--wheel-logo-size": `${settings.logoSize}px`, "--wheel-logo-height": `${settings.logoHeight}px`, "--wheel-mobile-logo-size": `${settings.logoSize * .3}px`, "--wheel-mobile-logo-height": `${settings.logoHeight * .512}px`, "--wheel-edge-fade": `${settings.edgeFade}%` } as CSSProperties} role="listbox" tabIndex={0} aria-label="Payment gateways. Drag, swipe or use arrow keys. Space pauses automatic rotation." aria-activedescendant={`${id}-${selected}`}
    onKeyDown={event => {
      const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 0;
      if (direction) { event.preventDefault(); move(Math.round(target.current) + direction); }
      else if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); select(event.key === 'Home' ? 0 : gateways.length - 1); }
      else if (event.key === ' ') { event.preventDefault(); onToggleAuto?.(); }
    }}
    onPointerDown={event => {
      if (event.button !== 0) return;
      pointer.current = { x: event.clientX, y: event.clientY, position: position.current }; dragged.current = false;
    }}
    onPointerMove={event => {
      const start = pointer.current;
      if (!start) return;
      const horizontal = size.current.height < 160;
      const dx = event.clientX - start.x, dy = event.clientY - start.y;
      if (event.pointerType === 'touch' && Math.abs(dy) > Math.abs(dx)) return;
      const distance = horizontal || event.pointerType === 'touch' ? dx : dy;
      if (Math.abs(distance) < 6 && !dragged.current) return;
      dragged.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      if (frame.current !== null) { cancelAnimationFrame(frame.current); frame.current = null; }
      position.current = start.position - distance / (horizontal ? size.current.width / 4 * configuration.current.spacing : size.current.height / 6.2 * configuration.current.spacing);
      target.current = position.current;
      paint();
    }}
    onPointerUp={() => { if (pointer.current && dragged.current) move(Math.round(target.current)); pointer.current = null; }}
    onPointerCancel={() => { if (pointer.current) move(Math.round(target.current)); pointer.current = null; }}>
    {gateways.map((gateway, index) => <button key={gateway.name} ref={element => { options.current[index] = element; }} type="button" role="option" id={`${id}-${index}`} aria-selected={selected === index} aria-label={gateway.name} aria-hidden={!initial[index]!.visible} tabIndex={-1}
      className={styles.wheelSlot} style={{ transformOrigin: initial[index]!.origin, filter: initial[index]!.filter, transform: initial[index]!.transform, opacity: initial[index]!.visible ? initial[index]!.opacity : 0, visibility: initial[index]!.visible ? 'visible' : 'hidden' }}
      onClick={event => { if (!dragged.current || event.detail === 0) select(index); }}>
      <span className={styles.logoPlate + (gateway.name === 'Mollie' ? ' ' + styles.molliePlate : '')}>
        {gateway.logo ? <img className={styles.logo} data-provider={gateway.name} src={gateway.logo} width={gateway.width} height={gateway.height} alt="" decoding="async" draggable={false} /> : <span className={styles.extensionOption}><PuzzlePiece weight="duotone" aria-hidden="true" /><span>More<small>with extensions</small></span></span>}
      </span>
    </button>)}
  </div>;
}
