export function mapEntries<A, B, K extends string | number | symbol>(
  obj: { [key in K]: A },
  f: (key: K, val: A) => [K, B],
): { [key in K]: B } {
  const result: { [key in K]: B } = {} as any
  for (const key in obj) {
    const kv = f(key, obj[key])
    result[kv[0]] = kv[1]
  }
  return result
}

export function scaleToken(value: string | number) {
  return `calc(${value} * var(--scale-factor))`
}

export function radiusToken(value: string | number) {
  return `calc(${value} * var(--scale-factor) * var(--radius-factor))`
}

const BASE_GRID_SIZE = 4
const BASE_FONT_SIZE = 16

export function fluid<
  P extends string,
  MinPx extends number,
  MaxPx extends number,
>(params: { property: P; from: MinPx; to: MaxPx; divider?: number }) {
  const divider = params.divider ?? BASE_GRID_SIZE
  const breakpointMin = params.from / BASE_FONT_SIZE
  const breakpointMax = params.to / BASE_FONT_SIZE
  const breakpointScope = breakpointMax - breakpointMin
  return `
    clamp(calc(var(---${params.property}-min) * 1rem), calc((var(---${params.property}-scope) * 100vw) + (var(---${params.property}-intercept) * 1rem)), calc(var(---${params.property}-max) * 1rem));
    ---${params.property}-min: var(--${params.property}-min) / ${divider};
    ---${params.property}-max: var(--${params.property}-max) / ${divider};
    ---${params.property}-scope: (var(---${params.property}-max) - var(---${params.property}-min)) / ${breakpointScope};
    ---${params.property}-intercept: calc(var(---${params.property}-min) - (var(---${params.property}-scope) * ${breakpointMin}));
  ` as const
}

// fontSize: `clamp(calc(var(--${params.property}-min) * 1rem), calc((var(--${params.property}-scope) * 100vw) + (var(--${params.property}-intercept) * 1rem)), calc(var(--${params.property}-max) * 1rem))`,
// [`--${params.property}-min`]: `var(--${params.property}-min) / ${divider}`,
// [`--${params.property}-max`]: `var(--${params.property}-max) / ${divider}`,
// [`--${params.property}-scope`]: `(var(--${params.property}-max) - var(---${params.property}-min)) / ${breakpointScope}`,
// [`--${params.property}-intercept`]: `calc(var(--${params.property}-min) - (var(--${params.property}-scope) * ${breakpointMin}))`,




const createFocusRing = (selector: string) => {
  return {
    values: ['outside', 'inside', 'mixed', 'none'],
    transform(value: any, { token }: any) {
      const focusRingColor = token('colors.colorPalette.focusRing')
      const styles: Record<string, any> = {
        inside: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outlineOffset: '0px',
            outlineWidth: 'var(--focus-ring-width, 0)',
            outlineColor: 'var(--focus-ring-color)',
            outlineStyle: 'var(--focus-ring-style, solid)',
            borderColor: 'var(--focus-ring-color)',
          },
        },
        outside: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outlineWidth: 'var(--focus-ring-width, 1px)',
            outlineOffset: 'var(--focus-ring-offset, 2px)',
            outlineStyle: 'var(--focus-ring-style, solid)',
            outlineColor: 'var(--focus-ring-color)',
          },
        },
        mixed: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outlineWidth: 'var(--focus-ring-width, 3px)',
            outlineStyle: 'var(--focus-ring-style, solid)',
            outlineColor:
              'color-mix(in srgb, var(--focus-ring-color), transparent 60%)',
            borderColor: 'var(--focus-ring-color)',
          },
        },
        none: {
          '--focus-ring-color': focusRingColor,
          [selector]: {
            outline: 'none',
          },
        },
      }

      return styles[value] ?? {}
    },
  }
}

export const utilities = {
  focusRing: createFocusRing('&:is(:focus, [data-focus])'),
  focusVisibleRing: createFocusRing(
    '&:is(:focus-visible, [data-focus-visible])',
  ),
}
