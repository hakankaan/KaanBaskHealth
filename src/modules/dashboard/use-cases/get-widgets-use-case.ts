import { LayoutSettingsRepository } from '../application';
import { AnalyticsService } from '../application/services/analytics-service';
import { LayoutSettings } from '../domain/layout-settings';
import { Widget } from '../domain/widget';
import { getWidgetTitleBySlug } from '../ui/utils/get-widget-title';

export class GetWidgetsUseCase {
  constructor(
    private analyticsService: AnalyticsService,
    private layoutSettingsRepository: LayoutSettingsRepository,
  ) {}

  async execute(): Promise<Widget[]> {
    const layoutSettingsStorage =
      this.layoutSettingsRepository.getLayoutSettings();
    const analytics = await this.analyticsService.getAnalytics();

    const widgets = analytics.map((analytic) => {
      let layoutSettings = layoutSettingsStorage[analytic.slug];
      if (!layoutSettings) {
        layoutSettings = LayoutSettings.fromJson({
          lg: { x: 0, y: 0, w: 6, h: 12, i: analytic.slug },
          md: { x: 0, y: 0, w: 5, h: 10, i: analytic.slug },
          sm: { x: 0, y: 0, w: 3, h: 6, i: analytic.slug },
          xs: { x: 0, y: 0, w: 4, h: 6, i: analytic.slug },
          xxs: { x: 0, y: 0, w: 2, h: 8, i: analytic.slug },
        });
        this.layoutSettingsRepository.saveLayoutSettings(
          analytic.slug,
          layoutSettings,
        );
      }

      return new Widget(
        analytic.slug,
        getWidgetTitleBySlug(analytic.slug),
        analytic,
        layoutSettings,
      );
    });

    return widgets;
  }
}
