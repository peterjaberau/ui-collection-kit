/**
 * Clamp a value between a min and max
 *
 * @param value The value to clamp
 * @param min The minimum value
 * @param max The maximum value
 * @returns The clamped value
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
