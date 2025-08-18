import { Chart, type UseChartReturn } from '@chakra-ui/charts'
import { Line, LineChart, XAxis, YAxis } from 'recharts'
import type { DataItem } from './data'

export const SimpleChart = (props: { chart: UseChartReturn<DataItem> }) => {
  const { chart } = props
  return (
    <Chart.Root height="120px" chart={chart} pos="relative" insetStart="-2">
      <LineChart data={chart.data}>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key('date')}
          padding={{ left: 20, right: 0 }}
          tickFormatter={chart.formatDate({ month: 'short', day: 'numeric' })}
          stroke={chart.color('border')}
          ticks={[chart.data[0].date, chart.data[chart.data.length - 1].date]}
        />
        <YAxis
          width={0}
          axisLine={false}
          tick={false}
          dataKey={chart.key('value')}
          stroke={chart.color('border')}
          tickMargin={0}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            strokeWidth={2}
            stroke={chart.color(item.color)}
            dot={false}
            activeDot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
