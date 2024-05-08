import { BarChartData } from '@/components/barchart';
import { Chart } from '@/modules/dashboard/domain/chart';

export const convertAnalyticsChartData = (data: Chart): BarChartData[] => {
  return data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
  }));
};
