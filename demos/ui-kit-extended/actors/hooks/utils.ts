export const transformNumbersToPixels = (records: Record<string, any>) => {
  if (!records) return {}

  const recordProperties = [
    'width', 'height', 'maxWidth', 'maxHeight',
    'minWidth', 'minHeight', 'top', 'left',
    'right', 'bottom'
  ]

  return Object.entries(records).reduce((acc, [key, value]) => {
    // Only transform known size properties that are numbers
    if (recordProperties.includes(key) && typeof value === 'number') {
      acc[key] = `${value}px`
    } else {
      acc[key] = value
    }
    return acc
  }, {} as Record<string, string | number>)
}
