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
      widgets.forEach((widget) => {
        const newLayout = layout.find((l) => l.i === widget.id);
        if (!newLayout) {
          return;
        }

        const oldLayoutSettings = widget.layoutSettings;

        const newLayoutSettings = LayoutSettings.fromJson({
          ...oldLayoutSettings,
          [currentBreakpoint]: {
            i: widget.id,
            x: newLayout.x,
            y: newLayout.y,
            w: newLayout.w,
            h: newLayout.h,
            minH: newLayout.minH,
            minW: newLayout.minW,
          },
        });

        const slug = widget.id;
        const layoutSettings = newLayoutSettings;
        layoutSettingsRepository.saveLayoutSettings(slug, layoutSettings);
        queryClient.setQueryData<Widget[]>(queryKeys.widgets, (data) => {
          if (!data) {
            return [];
          }
          return data.map((widget) => {
            if (widget.id !== slug) {
              return widget;
            }

            return Widget.fromJson({
              ...widget,
              layoutSettings: layoutSettings,
            });
          });
        });
      });
    },

    [layoutSettingsRepository, queryClient],
  );

  return { changeLayoutSettings };
};
