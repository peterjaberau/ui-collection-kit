export interface TimeSeriesItem {
  date: string
  value: number
}

export const uniqueVisitorsData: TimeSeriesItem[] = [
  { date: '2024-01-01', value: 8200 },
  { date: '2024-01-02', value: 7500 },
  { date: '2024-01-03', value: 9100 },
  { date: '2024-01-04', value: 8900 },
  { date: '2024-01-05', value: 10500 },
  { date: '2024-01-06', value: 9800 },
  { date: '2024-01-07', value: 11200 },
]

export const totalVisitsData: TimeSeriesItem[] = [
  { date: '2024-01-01', value: 25100 },
  { date: '2024-01-02', value: 23800 },
  { date: '2024-01-03', value: 27300 },
  { date: '2024-01-04', value: 26900 },
  { date: '2024-01-05', value: 31500 },
  { date: '2024-01-06', value: 29400 },
  { date: '2024-01-07', value: 33600 },
]

export const totalPageViewsData: TimeSeriesItem[] = [
  { date: '2024-01-01', value: 45000 },
  { date: '2024-01-02', value: 47520 },
  { date: '2024-01-03', value: 50760 },
  { date: '2024-01-04', value: 49680 },
  { date: '2024-01-05', value: 54720 },
  { date: '2024-01-06', value: 53280 },
  { date: '2024-01-07', value: 57600 },
]

export const bounceRateData: TimeSeriesItem[] = [
  { date: '2024-01-01', value: 45 },
  { date: '2024-01-02', value: 42 },
  { date: '2024-01-03', value: 38 },
  { date: '2024-01-04', value: 40 },
  { date: '2024-01-05', value: 35 },
  { date: '2024-01-06', value: 36 },
  { date: '2024-01-07', value: 33 },
]

const sum = (data: TimeSeriesItem[]) => {
  return data.reduce((acc, curr) => acc + curr.value, 0)
}

const diff = (data: TimeSeriesItem[]) => {
  const first = data[0].value
  const last = data[data.length - 1].value
  return (last - first) / first
}

export const summaries = [
  {
    id: 'unique-visitors',
    title: 'Unique Visitors',
    total: sum(uniqueVisitorsData),
    diff: diff(uniqueVisitorsData),
    data: uniqueVisitorsData,
  },
  {
    id: 'total-visits',
    title: 'Total Visits',
    total: sum(totalVisitsData),
    diff: diff(totalVisitsData),
    data: totalVisitsData,
  },
  {
    id: 'total-page-views',
    title: 'Total Page Views',
    total: sum(totalPageViewsData),
    diff: diff(totalPageViewsData),
    data: totalPageViewsData,
  },
  {
    id: 'bounce-rate',
    title: 'Bounce Rate',
    total: sum(bounceRateData),
    diff: diff(bounceRateData),
    data: bounceRateData,
  },
]
