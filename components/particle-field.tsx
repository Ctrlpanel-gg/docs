"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type Particle = {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  /** Per-particle spring multiplier — decorrelates arrival/settle times. */
  springJitter: number;
};

type ParticleTarget = { ox: number; oy: number; size: number; alpha: number };

export type ParticleFieldProps = {
  /** image URL sampled into particles */
  src?: string;
  /** text rendered into particles (used when `src` is omitted) */
  text?: string;
  fontFamily?: string;
  fontWeight?: number;
  /** pixel step when sampling the source. Lower = denser */
  sampleStep?: number;
  /** brightness cutoff 0-255 for including a pixel as a particle */
  threshold?: number;
  /** multiplier applied to the canvas rendering versus the sampled source */
  renderScale?: number;
  /** base dot size in device pixels */
  dotSize?: number;
  /** how strongly the cursor repels dots */
  mouseForce?: number;
  /** radius around the cursor that repels, in device pixels */
  mouseRadius?: number;
  /** spring constant pulling dots back to their origin */
  spring?: number;
  /** viscous damping on velocity */
  damping?: number;
  className?: string;
  align?: "center" | "bottom";
  /** color override when `adaptToTheme` is false */
  color?: string;
  /** sample dark pixels instead of bright ones */
  invert?: boolean;
  /** when true, dot fill follows `html.dark` without resampling */
  adaptToTheme?: boolean;
  /** keeps every sampled pixel (skips the sparse luminance thinning) */
  denseParticles?: boolean;
  /** ambient scattered dots blended in around the figure */
  dust?: number;
};

function subscribeDocumentDark(callback: () => void) {
  const el = document.documentElement;
  const mo = new MutationObserver(callback);
  mo.observe(el, { attributes: true, attributeFilter: ["class"] });
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => {
    mo.disconnect();
    mq.removeEventListener("change", callback);
  };
}

function getDocumentDarkSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerDarkSnapshot() {
  return true;
}

function useDocumentDark() {
  return useSyncExternalStore(
    subscribeDocumentDark,
    getDocumentDarkSnapshot,
    getServerDarkSnapshot,
  );
}

export function ParticleField({
  src,
  text,
  fontFamily = '"Red Hat Display", system-ui, sans-serif',
  fontWeight = 750,
  sampleStep = 3,
  threshold = 50,
  renderScale = 1,
  dotSize = 1.15,
  mouseForce = 90,
  mouseRadius = 110,
  spring = 0.035,
  damping = 0.86,
  className,
  align = "center",
  color = "rgba(255, 255, 255, 0.92)",
  invert = false,
  adaptToTheme = true,
  denseParticles = false,
  dust = 260,
}: ParticleFieldProps) {
  const isDark = useDocumentDark();
  const fillColorRef = useRef(color);
  fillColorRef.current = adaptToTheme
    ? isDark
      ? "rgba(255, 255, 255, 0.92)"
      : "rgba(10, 12, 16, 1)"
    : color;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });
  const srcRef = useRef(src);
  srcRef.current = src;
  const textRef = useRef(text);
  textRef.current = text;

  // Tuning props live in refs so the main effect stays mounted across prop
  // changes. Rebuilding the effect would tear down the particle state.
  const sampleStepRef = useRef(sampleStep);
  sampleStepRef.current = sampleStep;
  const thresholdRef = useRef(threshold);
  thresholdRef.current = threshold;
  const renderScaleRef = useRef(renderScale);
  renderScaleRef.current = renderScale;
  const dotSizeRef = useRef(dotSize);
  dotSizeRef.current = dotSize;
  const mouseForceRef = useRef(mouseForce);
  mouseForceRef.current = mouseForce;
  const mouseRadiusRef = useRef(mouseRadius);
  mouseRadiusRef.current = mouseRadius;
  const springRef = useRef(spring);
  springRef.current = spring;
  const dampingRef = useRef(damping);
  dampingRef.current = damping;
  const alignRef = useRef(align);
  alignRef.current = align;
  const invertRef = useRef(invert);
  invertRef.current = invert;
  const denseParticlesRef = useRef(denseParticles);
  denseParticlesRef.current = denseParticles;
  const dustRef = useRef(dust);
  dustRef.current = dust;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let clusterW = 0;
    let clusterH = 0;
    let offsetX = 0;
    let offsetY = 0;
    let rafId = 0;
    let time = 0;
    let destroyed = false;
    let resizeRaf = 0;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let sourceCanvas: HTMLCanvasElement | null = null;
    let rebuildQueued = false;

    const ensureCanvasSize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    // Sample from a pre-drawn offscreen canvas (an image, or rendered text).
    const sampleTargets = (srcCanv: HTMLCanvasElement): ParticleTarget[] => {
      if (!srcCanv.width || !srcCanv.height) return [];

      const srcRatio = srcCanv.width / srcCanv.height;
      const dstRatio = width / height;

      let drawW = width;
      let drawH = height;
      if (srcRatio > dstRatio) {
        drawH = height;
        drawW = height * srcRatio;
      } else {
        drawW = width;
        drawH = width / srcRatio;
      }

      drawW *= renderScaleRef.current;
      drawH *= renderScaleRef.current;

      const sampleW = Math.max(80, Math.floor(drawW / sampleStepRef.current));
      const sampleH = Math.max(80, Math.floor(drawH / sampleStepRef.current));

      const off = document.createElement("canvas");
      off.width = sampleW;
      off.height = sampleH;
      const offCtx = off.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return [];
      offCtx.drawImage(srcCanv, 0, 0, sampleW, sampleH);
      const data = offCtx.getImageData(0, 0, sampleW, sampleH).data;

      const cellW = drawW / sampleW;
      const cellH = drawH / sampleH;

      clusterW = drawW;
      clusterH = drawH;
      offsetX = (width - clusterW) / 2;
      offsetY =
        alignRef.current === "bottom"
          ? height - clusterH - Math.min(40, height * 0.04)
          : (height - clusterH) / 2;

      const thresholdV = thresholdRef.current;
      const invertV = invertRef.current;
      const denseV = denseParticlesRef.current;
      const dotSizeV = dotSizeRef.current;

      const targets: ParticleTarget[] = [];
      for (let y = 0; y < sampleH; y++) {
        for (let x = 0; x < sampleW; x++) {
          const idx = (y * sampleW + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];
          const rawBrightness = (r + g + b) / 3;
          const brightness = invertV ? 255 - rawBrightness : rawBrightness;
          if (a < 200 || brightness < thresholdV) continue;

          const lum = brightness / 255;
          if (!denseV) {
            // density falloff: keep the figure airy by dropping most mid/low pixels
            const keep =
              lum > 0.85
                ? Math.random() < 0.72
                : lum > 0.5
                  ? Math.random() < 0.4
                  : lum > 0.25
                    ? Math.random() < 0.2
                    : Math.random() < 0.1;
            if (!keep) continue;
          }

          const px = (offsetX + x * cellW + cellW / 2) * dpr;
          const py = (offsetY + y * cellH + cellH / 2) * dpr;

          targets.push({
            ox: px,
            oy: py,
            size: (dotSizeV + lum * 0.9) * dpr,
            alpha: 0.35 + lum * 0.6,
          });
        }
      }
      return targets;
    };

    const buildFromTargets = (targets: ParticleTarget[]) => {
      particles = targets.map((t) => ({
        ox: t.ox,
        oy: t.oy,
        x: t.ox + (Math.random() - 0.5) * 40,
        y: t.oy + (Math.random() - 0.5) * 40,
        vx: 0,
        vy: 0,
        size: t.size,
        alpha: t.alpha,
        phase: Math.random() * Math.PI * 2,
        springJitter: 0.9 + Math.random() * 0.2,
      }));

      // Ambient dust: sparse, denser toward the top, free-floating.
      const n = Math.round(dustRef.current * dpr);
      for (let i = 0; i < n; i++) {
        const dx2 = Math.random() * width * dpr;
        const dy2 = Math.pow(Math.random(), 1.9) * height * dpr;
        particles.push({
          ox: dx2,
          oy: dy2,
          x: dx2,
          y: dy2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: (0.6 + Math.random() * 0.7) * dpr,
          alpha: 0.25 + Math.random() * 0.3,
          phase: Math.random() * Math.PI * 2,
          springJitter: 0.9 + Math.random() * 0.2,
        });
      }
    };

    const rebuild = () => {
      if (!sourceCanvas) return;
      ensureCanvasSize();
      buildFromTargets(sampleTargets(sourceCanvas));
    };

    // Pre-render a soft dot to a small canvas, tinted to the current fill
    // color. Rebuilt only when the color changes; blitting it with drawImage
    // is far cheaper than fillRect + a per-particle fillStyle string.
    let spriteColor = "";
    let dotSprite: HTMLCanvasElement | null = null;
    const makeDotSprite = (color: string) => {
      const s = 8;
      const c = document.createElement("canvas");
      c.width = s;
      c.height = s;
      const cctx = c.getContext("2d");
      if (!cctx) return c;
      cctx.fillStyle = color;
      cctx.beginPath();
      cctx.arc(s / 2, s / 2, s / 2 - 0.5, 0, Math.PI * 2);
      cctx.fill();
      return c;
    };
    const ensureSprite = () => {
      const color = fillColorRef.current;
      if (color !== spriteColor || !dotSprite) {
        spriteColor = color;
        dotSprite = makeDotSprite(color);
      }
      return dotSprite;
    };

    const render = () => {
      if (destroyed) return;
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sprite = ensureSprite();

      const mouseForceV = mouseForceRef.current;
      const mouseRadiusV = mouseRadiusRef.current;
      const springV = springRef.current;
      const dampingV = dampingRef.current;

      const px = pointerRef.current.x * dpr;
      const py = pointerRef.current.y * dpr;
      const mr = mouseRadiusV * dpr;
      const mr2 = mr * mr;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dxo = p.ox - p.x;
        const dyo = p.oy - p.y;
        const s = springV * p.springJitter;
        p.vx += dxo * s;
        p.vy += dyo * s;

        if (pointerRef.current.active) {
          const dx = p.x - px;
          const dy = p.y - py;
          const d2 = dx * dx + dy * dy;
          if (d2 < mr2 && d2 > 0.0001) {
            const d = Math.sqrt(d2);
            const force = (1 - d / mr) * mouseForceV;
            p.vx += (dx / d) * force * 0.04;
            p.vy += (dy / d) * force * 0.04;
          }
        }

        // gentle idle drift + twinkle
        p.vx += Math.sin(time * 0.8 + p.phase) * 0.004;
        p.vy += Math.cos(time * 0.9 + p.phase) * 0.003;

        p.vx *= dampingV;
        p.vy *= dampingV;
        p.x += p.vx;
        p.y += p.vy;

        ctx.globalAlpha =
          p.alpha * (0.85 + Math.sin(time * 1.4 + p.phase) * 0.15);
        ctx.drawImage(sprite, p.x, p.y, p.size, p.size);
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(render);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
      pointerRef.current.active = true;
    };
    const onPointerLeave = () => {
      pointerRef.current.active = false;
      pointerRef.current.x = -9999;
      pointerRef.current.y = -9999;
    };

    const ro = new ResizeObserver(() => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (resizeTimer) clearTimeout(resizeTimer);
        // Drag-resizing can fire continuously; debounce expensive resampling.
        resizeTimer = setTimeout(() => {
          if (rebuildQueued) return;
          rebuildQueued = true;
          requestAnimationFrame(() => {
            rebuildQueued = false;
            rebuild();
          });
        }, 120);
      });
    });

    const buildSource = () => {
      const w = Math.max(2, Math.floor(width * dpr));
      const h = Math.max(2, Math.floor(height * dpr));
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      const nextSrc = srcRef.current;
      const nextText = textRef.current;
      if (nextSrc) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.decoding = "async";
        img.onload = () => {
          if (destroyed) return;
          octx.drawImage(img, 0, 0, w, h);
          sourceCanvas = off;
          rebuild();
        };
        img.src = nextSrc;
        return;
      }

      if (nextText) {
        // render the glyph large, then sample it into particles
        const px = Math.min(h * 0.6, (w * 0.72) / Math.max(1, nextText.length * 0.62));
        octx.fillStyle = "#fff";
        octx.font = `${fontWeight} ${px}px ${fontFamily}`;
        octx.textAlign = "center";
        octx.textBaseline = "middle";
        octx.fillText(nextText, w / 2, h / 2);
        sourceCanvas = off;
        rebuild();
      }
    };

    ro.observe(wrapper);
    rafId = requestAnimationFrame(render);
    ensureCanvasSize();
    buildSource();

    wrapper.addEventListener("pointermove", onPointerMove);
    wrapper.addEventListener("pointerleave", onPointerLeave);

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      if (resizeTimer) clearTimeout(resizeTimer);
      ro.disconnect();
      wrapper.removeEventListener("pointermove", onPointerMove);
      wrapper.removeEventListener("pointerleave", onPointerLeave);
    };
    // Tuning props are read from refs, so we intentionally don't include them
    // here — re-running this effect would tear down the particle state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
