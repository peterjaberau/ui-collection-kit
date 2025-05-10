'use client'
import { Number } from '.'
import { CSSUnitValue } from '../../types/css'

interface ThemeValueProps {
  onChange: (e: number) => void
  themeValues: (CSSUnitValue & { id: string })[]
  value: number
}

export const ThemeValue = ({
  onChange,
  value,
  themeValues
}: ThemeValueProps) => {
  return (
    <Number
      value={value}
      min={1}
      max={themeValues.length}
      onChange={onChange}
    />
  )
}
