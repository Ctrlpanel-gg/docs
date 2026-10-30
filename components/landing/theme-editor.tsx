import styles from './theme-editor.module.css';

function EditorTabs() {
  return <div className={styles.tabs} aria-hidden="true"><span /><span /></div>;
}

export function ThemeEditor() {
  return <figure className={styles.visual + ' ' + styles.editor} aria-label="Code editor showing a Laravel Themer stylesheet example and the theme creation command">
    <figcaption className="sr-only">Create a studio theme, then add a CSS file to its dashboard layout.</figcaption>

    <div className={styles.titlebar} aria-hidden="true">
      <span className={styles.windowMarks}><i /><i /><i /></span>
      <span className={styles.searchShape} />
      <span className={styles.layoutShape} />
    </div>

    <div className={styles.workspace}>
      <div className={styles.activity} aria-hidden="true">
        <span /><span /><span /><span />
        <span className={styles.activityBottom} />
      </div>
      <div className={styles.explorer} aria-hidden="true">
        <div className={styles.explorerHeading} />
        <div className={styles.tree}>
          {Array.from({ length: 12 }, (_, index) => <span key={index}><i /></span>)}
        </div>
      </div>

      <div className={styles.source}>
        <div className={styles.editors} role="region" aria-label="Theme files, scroll sideways on smaller screens" tabIndex={0}>
          <div className={styles.pane}>
            <EditorTabs />
            <div className={styles.file}>
              <p className={styles.filename}>themes/studio/views/layouts/main.blade.php</p>
              <div className={styles.codeArea}>
                <span className={styles.lineNumbers} aria-hidden="true">{'1\n2\n3\n4'}</span>
                <pre><code><span className={styles.comment}>{'{{-- After the existing styles in <head> --}}'}</span>{'\n'}
                  <span className={styles.accent}>{'<link'}</span>{' rel="stylesheet"\n  href="'}<span className={styles.string}>{"{{ asset('themes/studio/app.css') }}"}</span>{'">\n'}
                </code></pre>
              </div>
            </div>
          </div>

          <div className={styles.pane}>
            <EditorTabs />
            <div className={styles.file}>
              <p className={styles.filename}>public/themes/studio/app.css</p>
              <div className={styles.codeArea}>
                <span className={styles.lineNumbers} aria-hidden="true">{'1\n2\n3\n4\n5\n6'}</span>
                <pre><code><span className={styles.accent}>.main-sidebar</span>{' {\n  background: #101820;\n}\n'}
                  <span className={styles.accent}>.brand-link</span>{' {\n  letter-spacing: .04em;\n}'}
                </code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.panelTabs}>
            <span className={styles.terminalTab}>Terminal</span>
            <span className={styles.panelPlaceholder} aria-hidden="true" />
            <span className={styles.shell}>zsh</span>
            <span className={styles.terminalTools} aria-hidden="true">+<i /></span>
          </div>
          <pre><code><span className={styles.cwd}>~/ctrlpanel</span>{'\n'}<span className={styles.accent} aria-hidden="true">$ </span>php artisan make:theme{'\n\n'}<span className={styles.comment}>Theme name:</span> studio<span className={styles.cursor} aria-hidden="true" /></code></pre>
        </div>
      </div>
    </div>
    <div className={styles.statusbar} aria-hidden="true"><span /><span /><span /></div>
  </figure>;
}
