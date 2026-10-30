const dollars = Array.from({ length: 512 }, () => '$'.repeat(32)).join('\n');

const railClass = [
	'absolute bottom-0 top-0 w-[var(--landing-rail-width)] overflow-hidden whitespace-pre text-center',
	'font-mono font-medium not-italic leading-[1.16] tracking-normal',
	'text-[var(--landing-foreground)] text-[length:var(--landing-ascii-size)] opacity-30',
].join(' ');

/** Decorative text uses the same character grid as the ASCII headline. */
export function AsciiRails() {
	return <div className="pointer-events-none absolute inset-0 select-none max-[800px]:hidden" aria-hidden="true"><span className={`${railClass} right-[calc(100%_+_1px)]`}>{dollars}</span><span className={`${railClass} left-[calc(100%_+_1px)]`}>{dollars}</span></div>;
}
