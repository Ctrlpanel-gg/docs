'use client';

import { useEffect, useRef } from 'react';
import { asciiWordmark } from './ascii-wordmark';

const lines = asciiWordmark.split('\n');
const stops = [0, 9, 19, 29, 33, 43, 52, 62, 72, 76, 80, 90, 100];
const glyphs = [...'CtrlPanel.gg'].map((letter, index) => {
  const width = stops[index + 1] - stops[index];
  const rows = lines.map(line => line.slice(stops[index], stops[index + 1]).padEnd(width));
  let left = width, top = rows.length, right = 0, bottom = 0;
  rows.forEach((row, y) => [...row].forEach((char, x) => {
    if (!char.trim()) return;
    left = Math.min(left, x); top = Math.min(top, y);
    right = Math.max(right, x + 1); bottom = Math.max(bottom, y + 1);
  }));
  return { letter, width, rows, left, top, right, bottom };
});

type GlyphView = { pre: HTMLElement; outline: HTMLCanvasElement; x: number; y: number };

/** Font-contour reveals and Tech Text's spring-following selection frame. */
export function AsciiTechWordmark() {
  const rootRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!root || !canvas || !ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const current = [0, 0, 0, 0], target = [0, 0, 0, 0], velocity = [0, 0, 0, 0];
    let width = 1, height = 1, dpr = 1, alpha = 0, wantedAlpha = 0;
    let raf = 0, last = 0, time = 0, selected = -1, alive = true;
    let views: GlyphView[] = [];
    const amounts = glyphs.map(() => 0);

    const buildOutlines = () => {
      const parent = root.getBoundingClientRect();
      views = [...root.querySelectorAll<HTMLElement>('[data-ascii-index]')].map((element, index) => {
        const pre = element.querySelector<HTMLElement>('pre')!;
        const box = element.getBoundingClientRect();
        const glyph = glyphs[index];
        const style = getComputedStyle(pre);
        const size = parseFloat(style.fontSize);
        const cellWidth = box.width / glyph.width;
        const rowHeight = box.height / lines.length;
        const outline = document.createElement('canvas');
        outline.width = Math.ceil((box.width + 8) * dpr);
        outline.height = Math.ceil((box.height + 8) * dpr);
        const pen = outline.getContext('2d')!;
        pen.setTransform(dpr, 0, 0, dpr, 4 * dpr, 4 * dpr);
        pen.font = `${style.fontWeight} ${size}px ${style.fontFamily}`;
        pen.textBaseline = 'alphabetic';
        pen.textAlign = 'left';
        const metrics = pen.measureText('Mg');
        const ascent = metrics.fontBoundingBoxAscent ?? size * .8;
        const descent = metrics.fontBoundingBoxDescent ?? size * .2;
        const baseline = (rowHeight - ascent - descent) / 2 + ascent;
        const dark = document.documentElement.classList.contains('dark');
        const accent = getComputedStyle(root).getPropertyValue('--footer-tech-accent').trim() || '#159dd7';
        pen.strokeStyle = index >= 9 ? dark ? '#d9f4ff' : '#0e7490' : accent;
        pen.lineWidth = Math.max(.8, size * .075);
        pen.lineJoin = 'round';
        pen.lineCap = 'round';
        pen.setLineDash([1.6, 1.2]);
        glyph.rows.forEach((row, y) => [...row].forEach((char, x) => {
          if (char.trim()) pen.strokeText(char, x * cellWidth, y * rowHeight + baseline);
        }));
        pen.setLineDash([]);
        pen.globalCompositeOperation = 'destination-out';
        glyph.rows.forEach((row, y) => [...row].forEach((char, x) => {
          if (char.trim()) pen.fillText(char, x * cellWidth, y * rowHeight + baseline);
        }));
        return { pre, outline, x: box.left - parent.left + 20, y: box.top - parent.top + 20 };
      });
    };

    const tick = (now: number) => {
      raf = 0;
      if (!alive) return;
      const dt = last ? Math.min(.032, (now - last) / 1000) : 1 / 60;
      last = now;
      time += dt;
      let settling = false;
      for (let i = 0; i < 4; i++) {
        velocity[i] += ((target[i] - current[i]) * 320 - velocity[i] * 30) * dt;
        current[i] = reduced ? target[i] : current[i] + velocity[i] * dt;
        if (Math.abs(target[i] - current[i]) > .05 || Math.abs(velocity[i]) > .05) settling = true;
      }
      alpha = reduced ? wantedAlpha : alpha + (wantedAlpha - alpha) * (1 - Math.exp(-dt / .11));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      views.forEach((view, index) => {
        const wanted = wantedAlpha && selected === index ? 1 : 0;
        amounts[index] = reduced ? wanted : amounts[index] + (wanted - amounts[index]) * (1 - Math.exp(-dt / .10));
        if (Math.abs(wanted - amounts[index]) > .002) settling = true;
        else amounts[index] = wanted;
        if (amounts[index] > .001) {
          ctx.globalAlpha = amounts[index] * .8;
          ctx.drawImage(view.outline, view.x, view.y, view.outline.width / dpr, view.outline.height / dpr);
        }
      });
      ctx.globalAlpha = 1;
      if (alpha > .005) {
        const color = getComputedStyle(root).getPropertyValue('--footer-tech-accent').trim() || '#159dd7';
        const [x, y, w, h] = current;
        ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 1;
        ctx.globalAlpha = alpha * .6;
        ctx.strokeRect(Math.round(x) + .5, Math.round(y) + .5, Math.max(0, w), Math.max(0, h));
        const corners = [[x, y], [x + w, y], [x, y + h], [x + w, y + h]];
        ctx.globalAlpha = alpha;
        for (const [cx, cy] of corners) ctx.fillRect(Math.round(cx) - 2, Math.round(cy) - 2, 4, 4);
        if (!reduced && wantedAlpha) {
          for (let i = 0; i < 8; i++) {
            const life = (time * .7 + i * .137) % 1;
            const corner = i % 4;
            const [cx, cy] = corners[corner];
            const dx = (corner % 2 ? 1 : -1) * (5 + life * 15);
            const dy = (corner < 2 ? -1 : 1) * (4 + life * 11);
            const size = i % 3 === 0 ? 4 : 2;
            ctx.globalAlpha = alpha * Math.sin(life * Math.PI) * .65;
            if (i % 2) ctx.strokeRect(Math.round(cx + dx), Math.round(cy + dy), size, size);
            else ctx.fillRect(Math.round(cx + dx), Math.round(cy + dy), size, size);
          }
        }
        ctx.globalAlpha = 1;
      }
      if (settling || Math.abs(alpha - wantedAlpha) > .005 || (!reduced && wantedAlpha)) raf = requestAnimationFrame(tick);
      else last = 0;
    };
    const wake = () => { if (!raf && alive) raf = requestAnimationFrame(tick); };
    const resize = () => {
      width = root.clientWidth; height = root.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round((width + 48) * dpr));
      canvas.height = Math.max(1, Math.round((height + 48) * dpr));
      width += 48; height += 48;
      buildOutlines();
      selected = -1; wantedAlpha = 0; wake();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const element = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-ascii-index]') : null;
      const index = Number(element?.dataset.asciiIndex ?? -1);
      const glyph = glyphs[index];
      if (!element || !glyph) return;
      const box = element.getBoundingClientRect(), parent = root.getBoundingClientRect();
      const cellWidth = box.width / glyph.width, rowHeight = box.height / lines.length;
      const row = (event.clientY - box.top) / rowHeight;
      if (row < glyph.top || row > glyph.bottom) { wantedAlpha = 0; selected = -1; delete root.dataset.activeLetter; wake(); return; }
      if (selected === index) return;
      selected = index;
      root.dataset.activeLetter = glyph.letter;
      target[0] = box.left - parent.left + glyph.left * cellWidth + 21;
      target[1] = box.top - parent.top + glyph.top * rowHeight + 21;
      target[2] = (glyph.right - glyph.left) * cellWidth + 6;
      target[3] = (glyph.bottom - glyph.top) * rowHeight + 6;
      if (alpha < .01) {
        current[0] = target[0] + target[2] / 2; current[1] = target[1] + target[3] / 2;
        current[2] = 0; current[3] = 0; velocity.fill(0);
      }
      wantedAlpha = 1; wake();
    };
    const leave = () => { wantedAlpha = 0; selected = -1; delete root.dataset.activeLetter; wake(); };
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    const themeObserver = new MutationObserver(resize);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    root.addEventListener('pointermove', move, { passive: true });
    root.addEventListener('pointerleave', leave, { passive: true });
    resize();
    document.fonts.ready.then(() => { if (alive) resize(); });
    return () => {
      alive = false; cancelAnimationFrame(raf); observer.disconnect(); themeObserver.disconnect();
      views.forEach(view => { view.pre.style.opacity = ''; });
      root.removeEventListener('pointermove', move); root.removeEventListener('pointerleave', leave);
    };
  }, []);

  return <span ref={rootRef} className="relative flex font-mono text-[length:var(--landing-ascii-size)] font-medium leading-[1.16] [--footer-tech-accent:#159dd7] dark:[--footer-tech-accent:#27a9e1]" aria-hidden="true">
    {glyphs.map((glyph, index) => <span key={index} data-ascii-index={index} data-ascii-letter={glyph.letter} className={`block ${index >= 9 ? 'text-[#159dd7] dark:text-[#27a9e1]' : 'text-[var(--landing-foreground)]'}`}>
      <pre className="m-0 h-[12.76em] border-0 bg-transparent p-0 font-[inherit] text-[inherit] leading-[inherit] tracking-normal whitespace-pre">{glyph.rows.join('\n')}</pre>
    </span>)}
    <canvas ref={canvasRef} className="pointer-events-none absolute -left-6 -top-6 h-[calc(100%_+_48px)] w-[calc(100%_+_48px)]" />
  </span>;
}
