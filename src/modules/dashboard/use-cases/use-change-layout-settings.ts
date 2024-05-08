import { DependencyContainer } from '@/lib/dependency-container';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { LayoutSettings } from '../domain/layout-settings';
import { Widget } from '../domain/widget';
import { queryKeys } from '../ui/query-keys';
import { Layout } from 'react-grid-layout';

export const useChangeLayoutSettings = () => {
  const queryClient = useQueryClient();
  const { layoutSettingsRepository } = DependencyContainer.getInstance();

  const changeLayoutSettings = useCallback(
    (layout: Layout[], widgets: Widget[], currentBreakpoint: string) => {
      const updatedWidgets = widgets.map((widget) => {
        const newLayout = layout.find((l) => l.i === widget.id);
        if (!newLayout) {
          return widget;
        }

        const slug = widget.id;
        const oldLayoutSettings = widget.layoutSettings;

        const newLayoutSettings = LayoutSettings.fromJson({
          ...oldLayoutSettings,
          [currentBreakpoint]: {
            ...newLayout,
            i: slug,
          },
        });

        const layoutSettings = newLayoutSettings;
        layoutSettingsRepository.saveLayoutSettings(slug, layoutSettings);
        widget.layoutSettings = layoutSettings;

        return widget;
      });

      queryClient.setQueryData<Widget[]>(queryKeys.widgets, updatedWidgets);
    },

    [layoutSettingsRepository, queryClient],
  );

  return { changeLayoutSettings };
};
