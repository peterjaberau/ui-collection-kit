import React from 'react';

export interface SalesData {
  category: string;
  percentage: number;
  color: string;
  textColor: string;
}

interface BubbleChartProps {
  width?: number;
  height?: number;
  data: SalesData[];
}

const BubbleChart: React.FC<BubbleChartProps> = ({
  width = 600,
  height = 400,
  data,
}) => {
  const maxRadius = height * 0.45;
  const maxPercentage = Math.max(...data.map((d) => d.percentage));
  const getRadius = (percentage: number) =>
    (percentage / maxPercentage) * maxRadius;

  const getBubblePositions = (data: SalesData[]) => {
    const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);

    return sortedData.map((item, index) => {
      const radius = getRadius(item.percentage);
      let x = width / 2;
      let y = height / 2;

      // Position bubbles based on their size rank
      switch (index) {
        case 0: // Largest bubble - right side
          x = width / 2 + radius * 0.5;
          y = height / 2;
          break;
        case 1: // Medium bubble - bottom left
          x = width / 2 - radius * 1.4;
          y = height / 2 + radius * 0.4;
          break;
        case 2: // Smallest bubble - top left
          x = width / 2 - radius * 1.4;
          y = height / 2 - radius * 1.4;
          break;
        default:
          // For any additional bubbles, position them around the largest one
          const angle = (2 * Math.PI * (index - 2)) / (data.length - 2);
          x += Math.cos(angle) * radius * 2;
          y += Math.sin(angle) * radius * 2;
      }

      return {
        ...item,
        radius,
        x,
        y,
      };
    });
  };

  const bubbles = getBubblePositions(data);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {bubbles.map((item) => (
        <g key={item.category}>
          <circle cx={item.x} cy={item.y} r={item.radius} fill={item.color} />
          <text
            x={item.x}
            y={item.y}
            fill={item.textColor}
            textAnchor='middle'
            fontSize={`${item.radius / 2}px`}
            fontWeight={500}
            dominantBaseline='middle'
            letterSpacing='-1'
            dy='.05em'
          >
            {`${item.percentage}%`}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default BubbleChart;
