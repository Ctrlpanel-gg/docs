'use client';

import { useId, useState } from 'react';
import { defaultWheelSettings, defaultWheelAutoRotate, wheelControls, type WheelSettings } from './payment-wheel-settings';
import styles from './payments-section.module.css';

export function PaymentWheelTuner({ settings, onChange, autoRotate, onAutoRotate, selected }: { settings: WheelSettings; onChange: (value: WheelSettings) => void; autoRotate: boolean; onAutoRotate: (value: boolean) => void; selected: string }) {
  const prefix = useId();
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'manual'>('idle');
  const json = JSON.stringify({ paymentWheel: settings, autoRotate, selectedGateway: selected }, null, 2);
  async function copy() {
    try { await navigator.clipboard.writeText(json); setCopyStatus('copied'); }
    catch { setCopyStatus('manual'); }
  }
  return <section className={styles.tuner} aria-label="Wheel settings">
    <div className={styles.tunerToolbar}>
      <label className={styles.autoRotate}><input type="checkbox" checked={autoRotate} onChange={event => { onAutoRotate(event.target.checked); setCopyStatus('idle'); }} /> Auto rotate</label>
      <div className={styles.tunerActions}><button type="button" onClick={() => { onChange({ ...defaultWheelSettings }); onAutoRotate(defaultWheelAutoRotate); setCopyStatus('idle'); }}>Reset</button><button type="button" onClick={copy}>{copyStatus === 'copied' ? 'Copied' : 'Copy settings'}</button></div>
    </div>
    <div className={styles.tunerGrid}>
      {wheelControls.map(control => {
        const value = settings[control.key], id = `${prefix}-${control.key}`;
        return <label key={control.key} htmlFor={id} className={styles.tunerControl}>
          <span><span>{control.label}</span><output htmlFor={id} aria-hidden="true">{Number(value.toFixed(2))}{control.unit}</output></span>
          <input id={id} aria-label={control.label} aria-valuetext={`${Number(value.toFixed(2))}${control.unit}`} type="range" min={control.min} max={control.max} step={control.step} value={value} onChange={event => { onChange({ ...settings, [control.key]: Number(event.target.value) }); setCopyStatus('idle'); }} />
        </label>;
      })}
    </div>
    <details className={styles.tunerExport} open={copyStatus === 'manual' || undefined}><summary>Settings JSON</summary><textarea aria-label="Wheel settings JSON" readOnly value={json} rows={8} onFocus={event => event.currentTarget.select()} /></details>
    <span className="sr-only" role="status">{copyStatus === 'copied' ? 'Wheel settings copied.' : copyStatus === 'manual' ? 'Copy the settings from the JSON field below.' : ''}</span>
  </section>;
}
