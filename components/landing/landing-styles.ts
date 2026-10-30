/**
 * Tailwind class strings for the landing page, replacing the former `app/landing.css`.
 *
 * The theme tokens are declared as arbitrary custom properties on the layout root
 * (`landingLayoutClass`) so the remaining CSS-module components can keep reading
 * `--landing-*` / `--admin-*` through normal inheritance.
 */

/** Root element (`HomeLayout`): palette, ASCII sizing and shared admin grid tokens. */
export const landingLayoutClass = [
	'bg-[color:var(--landing-background)] font-sans text-[var(--landing-foreground)]',
	'[--landing-background:#f8f9fa] [--landing-foreground:#101113] [--landing-muted:#434951]',
	'[--landing-ascii-size:clamp(3.3px,1.16vw,15px)] [--landing-rail-width:clamp(8px,1.2vw,20px)]',
	'dark:[--landing-background:#18181b] dark:[--landing-foreground:#f5f5f6] dark:[--landing-muted:#b4b4bc]',
	'max-[480px]:[--landing-ascii-size:clamp(3.2px,1.12vw,5.4px)]',
].join(' ');

/** Shared button shell: layout, focus ring and icon sizing. */
const landingButtonShell = [
	'group relative isolate inline-flex min-h-[46px] min-w-0 items-center justify-center overflow-hidden',
	'rounded-[14px] border px-3.5 py-[11px] text-[15px] font-semibold leading-[1.3] no-underline',
	'transition-transform duration-150 active:translate-y-px',
	'[&_svg]:size-[18px] [&_svg]:shrink-0 motion-reduce:transition-none',
	'focus-visible:outline-[3px] focus-visible:outline-offset-[5px] focus-visible:outline-[#27a9e1]',
	'max-[480px]:text-[13px]',
].join(' ');

/** Solid hero action. */
export const landingButtonClass = [
	landingButtonShell,
	'gap-2.5 border-[color:var(--landing-foreground)] bg-[color:var(--landing-foreground)] text-[var(--landing-background)]',
	'max-[480px]:min-h-11 max-[480px]:gap-2',
	'[--button-fill:var(--landing-background)] [--button-fill-ink:var(--landing-foreground)]',
].join(' ');

/** Outlined GitHub star action. */
export const landingStarButtonClass = [
	landingButtonShell,
	'gap-[9px] border-[color-mix(in_srgb,var(--landing-foreground)_22%,transparent)] bg-transparent text-[var(--landing-foreground)]',
	'max-[480px]:min-h-10 max-[480px]:gap-2',
	'[--button-fill:var(--landing-foreground)] [--button-fill-ink:var(--landing-background)]',
].join(' ');

/** Rising circular fill behind the rolling label. */
export const landingButtonFillClass = [
	'pointer-events-none absolute left-1/2 top-full z-0 aspect-square w-[210%]',
	'-translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[color:var(--button-fill)]',
	'transition-transform duration-[360ms] ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none',
	'group-hover:scale-100 group-focus-visible:scale-100',
	'group-hover:duration-[550ms] group-focus-visible:duration-[550ms]',
	'group-hover:ease-[cubic-bezier(.22,1,.36,1)] group-focus-visible:ease-[cubic-bezier(.22,1,.36,1)]',
].join(' ');

/** Rolling label; the primary face lifts out as the alternate face drops in. */
export const landingButtonFaceClass = [
	'relative z-[1] inline-flex items-center justify-center gap-[inherit] whitespace-nowrap',
	'transition-transform duration-[360ms] ease-[cubic-bezier(.22,1,.36,1)]',
	'group-hover:-translate-y-[calc(1em_+_20px)] group-focus-visible:-translate-y-[calc(1em_+_20px)]',
	'group-hover:duration-500 group-focus-visible:duration-500',
	'motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:text-[var(--button-fill-ink)]',
].join(' ');

export const landingButtonFaceAltClass = [
	'absolute inset-0 z-[1] inline-flex items-center justify-center gap-[inherit] whitespace-nowrap',
	'translate-y-[calc(1em_+_20px)] text-[var(--button-fill-ink)]',
	'transition-transform duration-[360ms] ease-[cubic-bezier(.22,1,.36,1)]',
	'pointer-events-none motion-reduce:hidden',
	'group-hover:translate-y-0 group-focus-visible:translate-y-0',
	'group-hover:duration-500 group-focus-visible:duration-500',
].join(' ');

/** Full-width repeating `$` band. */
export const dollarDividerClass = [
	'pointer-events-none w-full select-none overflow-hidden whitespace-pre',
	'font-mono font-medium text-[var(--landing-foreground)] text-[length:var(--landing-ascii-size)] leading-[1.16] tracking-normal',
	'opacity-25 [scroll-margin-top:calc(var(--fd-nav-height,56px)_+_16px)]',
].join(' ');
