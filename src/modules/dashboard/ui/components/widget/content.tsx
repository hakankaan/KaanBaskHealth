import { BarChartData, Barchart } from '@/components/charts/barchart';
import { Analytics } from '@/modules/dashboard/domain/analytics';
import { Chart } from '@/modules/dashboard/domain/chart';
import React from 'react';

const convertAnalyticsChartData = (data: Chart): BarChartData[] => {
  return data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
  }));
};

type Props = {
  analytics: Analytics;
};

export function Content({ analytics }: Props) {
  const { data, type } = analytics;

  if (type === 'chart') {
    const chartData = convertAnalyticsChartData(data as Chart);
    return <Barchart data={chartData} />;
  }

  return <div>Content</div>;
}
