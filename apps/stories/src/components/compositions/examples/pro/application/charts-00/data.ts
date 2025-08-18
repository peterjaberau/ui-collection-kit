import type { SystemStyleObject } from '@chakra-ui/react'

interface ChartItem {
  date: string
  s_and_p: number
  portfolio: number
}

export const data: ChartItem[] = [
  { date: '2024-01-28', s_and_p: 0, portfolio: 0 },
  { date: '2024-01-29', s_and_p: 0.8, portfolio: -0.4 },
  { date: '2024-01-30', s_and_p: 1.2, portfolio: 0.6 },
  { date: '2024-01-31', s_and_p: 0.4, portfolio: 1.8 },
  { date: '2024-02-03', s_and_p: -0.8, portfolio: 2.5 },
  { date: '2024-02-04', s_and_p: -1.2, portfolio: 1.9 },
  { date: '2024-02-05', s_and_p: -0.4, portfolio: -0.5 },
  { date: '2024-02-06', s_and_p: 0.6, portfolio: -1.4 },
  { date: '2024-02-07', s_and_p: 1.4, portfolio: -0.8 },
  { date: '2024-02-08', s_and_p: 0.8, portfolio: 0.2 },
  { date: '2024-02-09', s_and_p: -0.4, portfolio: 1.6 },
  { date: '2024-02-10', s_and_p: -1.6, portfolio: 2.0 },
  { date: '2024-02-11', s_and_p: -2.2, portfolio: 1.4 },
  { date: '2024-02-12', s_and_p: -1.4, portfolio: -0.8 },
  { date: '2024-02-13', s_and_p: -0.4, portfolio: -2.2 },
  { date: '2024-02-14', s_and_p: 0.8, portfolio: -1.6 },
  { date: '2024-02-15', s_and_p: 1.6, portfolio: -0.4 },
  { date: '2024-02-16', s_and_p: 2.2, portfolio: 0.6 },
  { date: '2024-02-17', s_and_p: 1.4, portfolio: 1.8 },
  { date: '2024-02-18', s_and_p: 0.2, portfolio: 2.2 },
  { date: '2024-02-19', s_and_p: -1.2, portfolio: 1.4 },
  { date: '2024-02-20', s_and_p: -2.4, portfolio: 0.2 },
  { date: '2024-02-21', s_and_p: -1.8, portfolio: -1.4 },
  { date: '2024-02-22', s_and_p: -0.6, portfolio: -2.8 },
  { date: '2024-02-23', s_and_p: 0.4, portfolio: -1.2 },
  { date: '2024-02-24', s_and_p: 1.2, portfolio: 0.6 },
  { date: '2024-02-25', s_and_p: 0.6, portfolio: 1.8 },
  { date: '2024-02-26', s_and_p: -0.2, portfolio: 2.4 },
  { date: '2024-02-27', s_and_p: -1.4, portfolio: 1.2 },
]

export const series = [
  { name: 's_and_p' as const, color: 'teal.solid', label: 'S&P 500' },
  { name: 'portfolio' as const, color: 'blue.solid', label: 'Your Portfolio' },
]

export interface StatItem {
  name: 's_and_p' | 'portfolio'
  color: SystemStyleObject['color']
  label: string
}
