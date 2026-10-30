import { defaultWheelSettings, type WheelSettings } from './payment-wheel-settings';

/** Live-configurable bowed rows around a level, centred selection. */
export function paymentWheelFrame(count: number, position: number, width: number, height: number, itemWidth = Math.min(240, width * .5), settings: WheelSettings = defaultWheelSettings) {
  const horizontal = height < 160;
  const wrap = (value: number) => ((value + count / 2) % count + count) % count - count / 2;
  const rows = Array.from({ length: count }, (_, index) => ({ index, distance: wrap(index - position) }));
  const visible = new Set([...rows].sort((a, b) => Math.abs(a.distance) - Math.abs(b.distance)).slice(0, settings.visibleItems).map(row => row.index));
  const step = settings.tilt * Math.PI / 180;
  const rowHeight = height / 6.2 * settings.spacing;
  const radius = step > .00001 ? rowHeight / step : 0;
  // Fill the section vertically without making its horizontal bow stronger on tall layouts.
  const curveRadius = radius * Math.min(1, 390 / Math.max(1, height));
  return rows.map(({ index, distance }) => {
    const proximity = Math.abs(distance), angle = distance * step;
    const inset = Math.max(20, width - itemWidth - settings.inset);
    const lowerCurve = distance > 0 ? settings.lowerCurve : 1;
    const lowerTilt = distance > 0 ? settings.lowerTilt : 1;
    let x = inset - curveRadius * (1 - Math.cos(angle)) * settings.curve * lowerCurve;
    let y = height / 2 + (radius ? radius * Math.sin(angle) : distance * rowHeight);
    let rotation = distance * settings.tilt * lowerTilt;
    if (horizontal) {
      const halfChord = width * .37, sagitta = height * .28 * settings.curve / 6;
      const offset = wrap(distance - .5);
      if (sagitta > .01) {
        const mobileRadius = (halfChord * halfChord + sagitta * sagitta) / (2 * sagitta);
        const mobileAngle = offset * Math.asin(halfChord / mobileRadius) / 1.5 * settings.spacing;
        x = width / 2 + mobileRadius * Math.sin(mobileAngle);
        y = height * .62 - mobileRadius * (1 - Math.cos(mobileAngle)) * lowerCurve;
      } else { x = width / 2 + offset * width / 4 * settings.spacing; y = height * .62; }
      x += (28 - settings.inset) * .3;
      rotation = -distance * settings.tilt * (7 / 15) * lowerTilt;
    }
    const focus = Math.max(0, 1 - proximity);
    const scale = (horizontal ? 1 : Math.min(1, height / 390)) * Math.max(.3, 1 - proximity * settings.scaleFalloff) * (1 + .12 * focus);
    const opacity = Math.max(settings.minOpacity, 1 - proximity * settings.fade);
    const blur = proximity * settings.blur * (horizontal ? .175 : 1);
    return {
      index, x, y, distance, visible: visible.has(index), opacity,
      filter: `grayscale(${(1 - focus).toFixed(3)}) brightness(${(.78 + .32 * focus).toFixed(3)}) saturate(${(1 + .08 * focus).toFixed(3)}) blur(${blur.toFixed(2)}px)`,
      origin: horizontal ? 'center center' : 'left center',
      transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) ${horizontal ? 'translate(-50%, -50%)' : 'translateY(-50%)'} rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
    };
  });
}
