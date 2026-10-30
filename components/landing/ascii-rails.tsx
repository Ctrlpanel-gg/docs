const dollars = Array.from({ length: 512 }, () => '$'.repeat(32)).join('\n');

/** Decorative text uses the same character grid as the ASCII headline. */
export function AsciiRails() {
  return <div className="landing-dollar-rails" aria-hidden="true"><span className="landing-dollar-rail landing-dollar-rail-left">{dollars}</span><span className="landing-dollar-rail landing-dollar-rail-right">{dollars}</span></div>;
}
