import { DependencyContainer } from '@/core/dependency-container';
import { LayoutSettings } from '../domain/layout-settings';
import { Widget } from '../domain/widget';
import { getWidgetTitleBySlug } from '../ui/utils/get-widget-title';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../ui/query-keys';

const getWidgets = async () => {
  const di = DependencyContainer.getInstance();
  const { layoutSettingsRepository, analyticsService } = di;
  const layoutSettingsStorage = layoutSettingsRepository.getLayoutSettings();
  const analytics = await analyticsService.getAnalytics();

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
      layoutSettingsRepository.saveLayoutSettings(
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
};

export const useWidgets = () => {
  return useQuery({
    queryKey: queryKeys.widgets,
    queryFn: getWidgets,
    refetchInterval: 5000,
  });
};
