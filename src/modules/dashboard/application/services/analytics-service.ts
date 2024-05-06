import { Analytics } from '../../domain/analytics';
import { AnalyticsResponseDto } from '../dtos/analytics';
import { analyticsResponseToAnalytics } from '../utils/utils';

export interface AnalyticsService {
  getAnalytics(): Promise<Analytics[]>;
}

export class AnalyticsServiceImpl implements AnalyticsService {
  constructor() {}

  async getAnalytics() {
    const response = await fetch('http://localhost:3000/api/analytics', {
      cache: 'no-cache',
    });

    const analyticsResponse = (await response.json()) as AnalyticsResponseDto;

    return analyticsResponseToAnalytics(analyticsResponse);
  }
}
