import { Analytics } from '../../domain/analytics';
import { AnalyticsResponseDto } from '../dtos/analytics';
import { analyticsResponseToAnalytics } from '../utils/utils';

export interface AnalyticsService {
  getAnalytics(): Promise<Analytics[]>;
}

export class AnalyticsServiceImpl implements AnalyticsService {
  constructor(private readonly analyticsAccessToken: string) {}

  async getAnalytics() {
    const response = await fetch(
      'https://dashboard-api-dusky.vercel.app/api/get',
      {
        headers: {
          Authorization: `Bearer ${this.analyticsAccessToken}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      },
    );

    const analyticsResponse = (await response.json()) as AnalyticsResponseDto;

    return analyticsResponseToAnalytics(analyticsResponse);
  }
}
