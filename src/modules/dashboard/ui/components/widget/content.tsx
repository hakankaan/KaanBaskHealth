import { Barchart } from '@/components/barchart';
import { Analytics } from '@/modules/dashboard/domain/analytics';
import { Chart } from '@/modules/dashboard/domain/chart';
import React from 'react';
import { convertAnalyticsChartData } from './utils';
import { Table } from '../table/table';
import { Table as TableEntity } from '@/modules/dashboard/domain/table';

type Props = {
  analytics: Analytics;
};

export function Content({ analytics }: Props) {
  const { data, type } = analytics;

  if (type === 'chart') {
    const chartData = convertAnalyticsChartData(data as Chart);
    return <Barchart data={chartData} />;
  }

  return <Table table={analytics.data as TableEntity} />;
}
