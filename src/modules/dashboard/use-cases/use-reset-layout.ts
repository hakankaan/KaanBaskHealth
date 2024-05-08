import { DependencyContainer } from '@/lib/dependency-container';
import { useQueryClient } from '@tanstack/react-query';
import { LayoutSettings } from '../domain/layout-settings';
import { Widget } from '../domain/widget';
import { queryKeys } from '../ui/query-keys';

export const useResetLayout = () => {
  const di = DependencyContainer.getInstance();
  const { layoutSettingsRepository } = di;
  const queryClient = useQueryClient();

  const resetLayout = async () => {
    queryClient.setQueryData<Widget[]>(queryKeys.widgets, (data) => {
      if (!data) {
        return [];
      }
      return data.map((widget) => {
        const layoutSettings = LayoutSettings.fromJson(
          LayoutSettings.getDefaultValues(widget.id),
        );
        layoutSettingsRepository.saveLayoutSettings(widget.id, layoutSettings);

        return Widget.fromJson({
          ...widget,
          layoutSettings,
        });
      });
    });
  };

  return { resetLayout };
};
