import { Analytics } from '../../domain/analytics';
import { Chart } from '../../domain/chart';
import { Table } from '../../domain/table';
import { AnalyticsResponseDto } from '../dtos/analytics';

export const analyticsResponseToAnalytics = (
  analyticsResponse: AnalyticsResponseDto,
): Analytics[] => {
  const analytics: Analytics[] = [];
  const dashboardData = analyticsResponse.data.dashboardData;
  const charts = dashboardData.charts;
  const tables = dashboardData.tables;

  Object.entries(charts).forEach(([key, value]) => {
    const chart = new Chart(value.labels, value.data);
    analytics.push(new Analytics(key, 'chart', chart));
  });

  Object.entries(tables).forEach(([key, value]) => {
    const table = new Table(value);
    analytics.push(new Analytics(key, 'table', table));
  });

  return analytics;
};
