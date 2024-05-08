import { DependencyContainer } from '@/lib/dependency-container';
import { LayoutSettings } from '../domain/layout-settings';
import { Widget } from '../domain/widget';
import { getWidgetTitleBySlug } from '../ui/utils/get-widget-title';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../ui/query-keys';
import { useLayout } from '../ui/contexts/use-layout';

const getWidgets = async () => {
  const di = DependencyContainer.getInstance();
  const { layoutSettingsRepository, analyticsService } = di;
  const layoutSettingsStorage = layoutSettingsRepository.getLayoutSettings();
  const analytics = await analyticsService.getAnalytics();

  const widgets = analytics.map((analytic) => {
    let layoutSettings = layoutSettingsStorage[analytic.slug];
    if (!layoutSettings) {
      layoutSettings = LayoutSettings.fromJson(
        LayoutSettings.getDefaultValues(analytic.slug),
      );
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
  const { editModeEnabled } = useLayout();
  return useQuery({
    queryKey: queryKeys.widgets,
    queryFn: getWidgets,
    refetchInterval: 5000,
    enabled: !editModeEnabled,
  });
};
