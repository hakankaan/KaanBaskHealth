import { PreferencesRepository } from '../application/repositories/preferences-repository';
import { AnalyticsService } from '../application/services/analytics-service';
import { Widget } from '../domain/widget';

export class GetWidgetsUseCase {
  constructor(
    private analyticsService: AnalyticsService,
    private preferencesRepository: PreferencesRepository,
  ) {}

  async execute(): Promise<Widget[]> {
    const preferences = await this.preferencesRepository.getPreferences();
    const analytics = await this.analyticsService.getAnalytics();
    const widgets = analytics.map((analytic) => {
      const preference = preferences.find((p) => p.slug === analytic.slug);
      return new Widget(analytic.slug, analytic.slug, analytic, preference);
    });

    return widgets;
  }
}
