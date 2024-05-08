import { config } from '@/lib/config';
import { Analytics } from '../../domain/analytics';
import { AnalyticsResponseDto } from '../dtos/analytics';
import { analyticsResponseToAnalytics } from '../utils/utils';

export interface AnalyticsService {
  getAnalytics(): Promise<Analytics[]>;
}

export class AnalyticsServiceImpl implements AnalyticsService {
  constructor() {}

  async getAnalytics() {
    const response = await fetch(`${config.APP_URL}/api/analytics`, {
      cache: 'no-cache',
    });

    const analyticsResponse = (await response.json()) as AnalyticsResponseDto;

    if (analyticsResponse.success === false) {
      throw new Error(analyticsResponse.secrectMessage);
    }

    return analyticsResponseToAnalytics(analyticsResponse);
  }
}
