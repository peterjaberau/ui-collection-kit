import type { SystemStyleObject } from '@chakra-ui/react'

export interface ChartItem {
  date: string
  money_in: number
  money_out: number
}

export const data: ChartItem[] = [
  { date: '2024-02-21', money_in: 1800, money_out: 0 },
  { date: '2024-02-22', money_in: 2600, money_out: 300 },
  { date: '2024-02-23', money_in: 3400, money_out: 1000 },
  { date: '2024-02-24', money_in: 4200, money_out: 1400 },
  { date: '2024-02-25', money_in: 3600, money_out: 230 },
  { date: '2024-02-26', money_in: 3200, money_out: 340 },
  { date: '2024-02-27', money_in: 4400, money_out: 320 },
]

export const series = [
  { name: 'money_in' as const, color: 'teal.solid', label: 'Money In' },
  { name: 'money_out' as const, color: 'red.solid', label: 'Money Out' },
]

export interface SeriesItem {
  name: 'money_in' | 'money_out'
  color: SystemStyleObject['color']
  label: string
}
