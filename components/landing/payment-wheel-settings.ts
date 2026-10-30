export const wheelControls = [
  { key: 'curve', label: 'Curve', min: 0, max: 12, step: .1, unit: '' },
  { key: 'lowerCurve', label: 'Lower curve', min: 0, max: 1.5, step: .05, unit: '×' },
  { key: 'tilt', label: 'Tilt', min: 0, max: 30, step: .5, unit: '°' },
  { key: 'lowerTilt', label: 'Lower tilt', min: 0, max: 1.5, step: .05, unit: '×' },
  { key: 'spacing', label: 'Row spacing', min: .5, max: 1.6, step: .02, unit: '×' },
  { key: 'inset', label: 'Right inset', min: -60, max: 150, step: 1, unit: 'px' },
  { key: 'logoSize', label: 'Logo width', min: 100, max: 340, step: 5, unit: 'px' },
  { key: 'logoHeight', label: 'Logo height', min: 40, max: 120, step: 2, unit: 'px' },
  { key: 'blur', label: 'Blur', min: 0, max: 6, step: .1, unit: 'px' },
  { key: 'fade', label: 'Fade per row', min: 0, max: .7, step: .01, unit: '' },
  { key: 'minOpacity', label: 'Minimum opacity', min: 0, max: .6, step: .01, unit: '' },
  { key: 'scaleFalloff', label: 'Shrink per row', min: 0, max: .18, step: .01, unit: '' },
  { key: 'smoothing', label: 'Smoothing', min: 20, max: 500, step: 10, unit: 'ms' },
  { key: 'edgeFade', label: 'Edge fade', min: 0, max: 25, step: 1, unit: '%' },
  { key: 'visibleItems', label: 'Visible items', min: 3, max: 5, step: 1, unit: '' },
  { key: 'rotationSeconds', label: 'Auto interval', min: 2, max: 20, step: 1, unit: 's' },
] as const;
export type WheelSettingKey = typeof wheelControls[number]['key'];
export type WheelSettings = Record<WheelSettingKey, number>;
export const defaultWheelSettings: WheelSettings = {
  curve: 4.2, lowerCurve: .9, tilt: 10, lowerTilt: 1.5, spacing: 1.48, inset: 103,
  logoSize: 215, logoHeight: 76, blur: 2, fade: .25, minOpacity: .12,
  scaleFalloff: .09, smoothing: 320, edgeFade: 0, visibleItems: 5, rotationSeconds: 2,
};
export const defaultWheelAutoRotate = true;
export const defaultWheelSelection = 'Mercado Pago';
export const wheelSettingsStorageKey = 'ctrlpanel.payment-wheel-tuning.v2';
export function readWheelSettings(value: unknown): WheelSettings {
  const settings = { ...defaultWheelSettings };
  if (!value || typeof value !== 'object') return settings;
  for (const control of wheelControls) {
    const candidate = (value as Record<string, unknown>)[control.key];
    if (typeof candidate !== 'number' || !Number.isFinite(candidate)) continue;
    settings[control.key] = Math.min(control.max, Math.max(control.min, candidate));
  }
  settings.visibleItems = Math.round(settings.visibleItems);
  return settings;
}
