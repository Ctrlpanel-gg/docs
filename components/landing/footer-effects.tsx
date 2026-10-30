'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const GradientASCII = dynamic(() => import('@/components/react-bits/GradientASCII'), { ssr: false });
const darkColors = ['#1e3fd8', '#38bdf8', '#a5d8ff', '#f6f8ff'];
const lightColors = ['#eff8fc', '#e1f2fb', '#bee3f4', '#8ac7e3'];

function useNearViewport() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNear(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return { ref, near };
}

export function FooterGradient() {
  const { ref, near } = useNearViewport();
  const [dark, setDark] = useState<boolean>();
  useEffect(() => {
    const update = () => setDark(document.documentElement.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="h-full w-full" aria-hidden="true">
    {near && dark !== undefined && <GradientASCII
      colors={dark ? darkColors : lightColors}
      lightMode={!dark}
      shape="horizon"
      characters=" .:+xX0$#@"
      cellSize={18}
      density={dark ? 0.86 : 0.58}
      glyphOpacity={dark ? 0.95 : 0.5}
      gradientOpacity={dark ? 0.95 : 0.55}
      glow={dark ? 0.16 : 0}
      flicker={0.08}
      softness={0.56}
      scale={1}
      flow={0.16}
      speed={0.35}
      grain={0.025}
      scrambleRadius={0.1}
      clickEffect="none"
      dpr={1.25}
    />}
  </div>;
}
