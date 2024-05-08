import { AnalyticsResponseDto } from '@/modules/dashboard/application/dtos/analytics';

export const mockAnalyticsResponse: AnalyticsResponseDto = {
  success: true,
  data: {
    dashboardData: {
      charts: {
        salesOverTime: {
          labels: [
            '2024-05-08',
            '2024-05-07',
            '2024-05-06',
            '2024-05-05',
            '2024-05-04',
            '2024-05-03',
            '2024-05-02',
            '2024-05-01',
            '2024-04-30',
            '2024-04-29',
            '2024-04-28',
            '2024-04-27',
            '2024-04-26',
            '2024-04-25',
            '2024-04-24',
            '2024-04-23',
            '2024-04-22',
            '2024-04-21',
            '2024-04-20',
            '2024-04-19',
            '2024-04-18',
            '2024-04-17',
            '2024-04-16',
            '2024-04-15',
            '2024-04-14',
            '2024-04-13',
            '2024-04-12',
            '2024-04-11',
            '2024-04-10',
            '2024-04-09',
          ],
          data: [
            173, 139, 196, 130, 88, 200, 132, 124, 148, 147, 196, 198, 132, 142,
            58, 183, 82, 185, 183, 84, 118, 140, 173, 200, 137, 129, 133, 163,
            192, 71,
          ],
        },
        userEngagement: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          data: [585, 454, 528, 425],
        },
      },
      tables: {
        recentTransactions: [
          {
            id: 1,
            user: 'John Doe',
            amount: '$178',
            date: '2023-09-28',
          },
          {
            id: 2,
            user: 'Jane Smith',
            amount: '$132',
            date: '2023-09-27',
          },
          {
            id: 3,
            user: 'Alice Johnson',
            amount: '$178',
            date: '2023-09-26',
          },
          {
            id: 4,
            user: 'Bob Williams',
            amount: '$178',
            date: '2023-09-25',
          },
          {
            id: 5,
            user: 'Charlie Brown',
            amount: '$62',
            date: '2023-09-24',
          },
          {
            id: 6,
            user: 'David Jones',
            amount: '$83',
            date: '2023-09-23',
          },
          {
            id: 7,
            user: 'Eva Green',
            amount: '$85',
            date: '2023-09-26',
          },
          {
            id: 8,
            user: 'Dwitik Ghosh',
            amount: '$189',
            date: '2023-09-26',
          },
          {
            id: 9,
            user: 'Michael Jackson',
            amount: '$195',
            date: '2023-09-26',
          },
          {
            id: 10,
            user: 'Lucy Liu',
            amount: '$183',
            date: '2023-09-26',
          },
        ],
        topProducts: [
          {
            id: 'A1',
            name: 'Product A',
            sales: 829,
          },
          {
            id: 'B2',
            name: 'Product B',
            sales: 878,
          },
          {
            id: 'C3',
            name: 'Product C',
            sales: 984,
          },
          {
            id: 'D4',
            name: 'Product D',
            sales: 917,
          },
          {
            id: 'E5',
            name: 'Product E',
            sales: 886,
          },
          {
            id: 'F6',
            name: 'Product F',
            sales: 838,
          },
          {
            id: 'G7',
            name: 'Product G',
            sales: 1114,
          },
          {
            id: 'R2',
            name: 'Product R',
            sales: 1136,
          },
          {
            id: 'M2',
            name: 'Product M2',
            sales: 1169,
          },
          {
            id: 'Q32',
            name: 'Product Q32',
            sales: 985,
          },
        ],
      },
    },
  },
};
