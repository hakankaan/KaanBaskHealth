import { Tooltip } from '@radix-ui/react-tooltip';
import React from 'react';
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export type BarChartData = {
  name: string;
  value: number;
};

type Props = {
  data: BarChartData[];
};

export const Barchart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
