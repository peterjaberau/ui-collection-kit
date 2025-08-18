import { Chart, type UseChartReturn } from '@chakra-ui/charts'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import type { ChartItem } from './data'

export const MoneyChart = (props: { chart: UseChartReturn<ChartItem> }) => {
  const { chart } = props
  return (
    <Chart.Root maxH="48" chart={chart}>
      <AreaChart data={chart.data}>
        <CartesianGrid stroke={chart.color('border')} horizontal={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key('date')}
          tickMargin={16}
          tickFormatter={chart.formatDate({ month: 'short', day: 'numeric' })}
          stroke={chart.color('border')}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          stroke={chart.color('border')}
          tickFormatter={chart.formatNumber({
            style: 'currency',
            currency: 'USD',
            notation: 'compact',
          })}
        />
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color('border') }}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <defs key={item.name}>
            <Chart.Gradient
              id={`${item.name}-gradient`}
              stops={[
                { offset: '0%', color: item.color, opacity: 0.3 },
                { offset: '100%', color: item.color, opacity: 0.05 },
              ]}
            />
          </defs>
        ))}

        {chart.series.map((item) => (
          <Area
            key={item.name}
            type="natural"
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={item.name === 'money_in' ? `url(#${item.name}-gradient)` : 'none'}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
