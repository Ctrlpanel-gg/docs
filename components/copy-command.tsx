'use client';
import { useEffect, useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div className="group flex items-center gap-3 px-4 py-3.5">
      <span className="select-none font-mono text-[13px] text-fd-primary">$</span>
      <code className="flex-1 overflow-x-auto whitespace-pre font-mono text-[13px] text-fd-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy command'}
        className="relative shrink-0 rounded-md border border-fd-border bg-fd-card p-1.5 text-fd-muted-foreground opacity-0 transition-[opacity,color] duration-150 before:absolute before:-inset-2 before:content-[''] hover:text-fd-foreground focus-visible:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
      >
        {copied ? <Check size={14} className="text-fd-primary" /> : <Copy size={14} />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Command copied to clipboard' : ''}
      </span>
    </div>
  );
}