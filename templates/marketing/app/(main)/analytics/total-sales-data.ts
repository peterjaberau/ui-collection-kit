import {
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
} from 'date-fns';

// Helper function to get a random value within a range
const getRandomValue = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min));

// Helper function to get a random percentage change
const getRandomPercentageChange = (min: number, max: number) => {
  const change = Number.parseFloat(
    (Math.random() * (max - min) + min).toFixed(1),
  );
  return `${change > 0 ? '+' : ''}${change}%`;
};

// Daily data (last 7 days)
export const dailySalesData = Array.from({ length: 7 }, (_, index) => {
  const date = startOfDay(subDays(new Date(), 6 - index)); // 6 days ago to today
  return {
    date: date.toISOString().split('T')[0],
    value: getRandomValue(1200, 2000),
    prev: getRandomPercentageChange(-10, 10),
  };
});

// Weekly data (last 40 weeks)
export const weeklySalesData = Array.from({ length: 40 }, (_, index) => {
  const date = startOfWeek(subWeeks(new Date(), 39 - index)); // 39 weeks ago to current week
  return {
    date: date.toISOString().split('T')[0],
    value: getRandomValue(8000, 12000),
    prev: getRandomPercentageChange(-7.5, 7.5),
  };
});

// Monthly data (last 7 months)
export const monthlySalesData = Array.from({ length: 7 }, (_, index) => {
  const date = startOfMonth(subMonths(new Date(), 6 - index)); // 6 months ago to current month
  return {
    date: date.toISOString().split('T')[0],
    value: getRandomValue(35000, 50000),
    prev: getRandomPercentageChange(-6, 6),
  };
});
