import Link from 'next/link';
import { ThemeEditor } from './theme-editor';
import styles from './themes-section.module.css';

const themesWordmark = String.raw` /$$$$$$$$ /$$
|__  $$__/| $$
   | $$   | $$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$$
   | $$   | $$__  $$ /$$__  $$| $$_  $$_  $$ /$$__  $$ /$$_____/
   | $$   | $$  \ $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$|  $$$$$$
   | $$   | $$  | $$| $$_____/| $$ | $$ | $$| $$_____/ \____  $$
   | $$   | $$  | $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$ /$$$$$$$/
   |__/   |__/  |__/ \_______/|__/ |__/ |__/ \_______/|_______/`;

export function ThemesSection() {
  return <>
    <section id="themes" className={styles.themes} aria-labelledby="themes-title">
      <h2 id="themes-title" className={styles.heading}>
        <span className="sr-only">Themes</span>
        <pre className={styles.ascii} aria-hidden="true">{themesWordmark}</pre>
      </h2>

      <div className={styles.example}><ThemeEditor /></div>

      <div className={styles.copy}>
        <h3>Built with Laravel Themer.</h3>
        <p className={styles.lead}>Change the layouts, typography and colours with Blade templates and your own CSS.</p>
        <p>Start with <a href="https://github.com/qirolab/laravel-themer">Laravel Themer’s generator</a>, then edit the theme’s Blade layouts and assets. The example adds a stylesheet to the dashboard layout.</p>
        <Link className={styles.guideLink} href="/docs/guides/themes/">Create a theme</Link>

        <div className={styles.market}>
          <h4>Rather start with a finished theme?</h4>
          <p>Buy community themes on CtrlPanel Market. Check the supported panel version, then follow the creator’s installation steps.</p>
          <a href="https://market.ctrlpanel.gg/">Shop themes on the market</a>
        </div>
      </div>
    </section>
    <div className={'landing-dollar-divider ' + styles.divider} aria-hidden="true">{'$'.repeat(512)}</div>
  </>;
}
