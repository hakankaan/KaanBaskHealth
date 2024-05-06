import { config } from '@/core/config';
import { AnalyticsResponseDto } from '@/modules/dashboard/application/dtos/analytics';

export const GET = async () => {
  const response = await fetch(
    'https://dashboard-api-dusky.vercel.app/api/get',
    {
      headers: {
        Authorization: `Bearer ${config.ANALYTICS_ACCESS_TOKEN}`,
      },
      cache: 'no-cache',
    },
  );

  const analyticsResponse = (await response.json()) as AnalyticsResponseDto;

  return Response.json(analyticsResponse);
};
