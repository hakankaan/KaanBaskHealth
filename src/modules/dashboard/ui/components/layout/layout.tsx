'use client';
import React, { useCallback, useMemo } from 'react';
import { GetWidgetsUseCase } from '../../../use-cases/get-widgets-use-case';
import { DependencyContainer } from '@/core/dependency-container';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../query-keys';
import {
  Layout as LayoutType,
  Layouts,
  Responsive,
  WidthProvider,
} from 'react-grid-layout';
import { Widget } from '../widget/widget';
import { ArrowDownRight } from 'lucide-react';
import { useLayout } from '../../contexts/use-layout';
import { Widget as WidgetEntity } from '@/modules/dashboard/domain/widget';
import { ChangeLayoutSettingsUseCase } from '@/modules/dashboard/use-cases/change-layout-settings-use-case';
import { LayoutSettings } from '@/modules/dashboard/domain/layout-settings';

type Props = {
  widgets: WidgetEntity[];
};

export function Layout({ widgets }: Props) {
  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    [],
  );
  const { isEditMode, breakPoint, changeBreakPoint } = useLayout();
  const queryClient = useQueryClient();

  const di = DependencyContainer.getInstance();
  const changeLayoutSettingsUseCase = useMemo(
    () =>
      new ChangeLayoutSettingsUseCase(di.layoutSettingsRepository, queryClient),
    [di.layoutSettingsRepository, queryClient],
  );

  const handleChangeLayout = useCallback(
    (layout: LayoutType[], allLayouts: Layouts) => {
      if (!breakPoint) {
        return;
      }

      widgets.forEach((widget) => {
        const newLayout = layout.find((l) => l.i === widget.id);
        if (!newLayout) {
          return;
        }

        const oldLayoutSettings = widget.layoutSettings;

        const newLayoutSettings = LayoutSettings.fromJson({
          ...oldLayoutSettings,
          [breakPoint]: {
            x: newLayout.x,
            y: newLayout.y,
            w: newLayout.w,
            h: newLayout.h,
          },
        });

        changeLayoutSettingsUseCase.execute(widget.id, newLayoutSettings);
      });
    },
    [breakPoint, widgets, changeLayoutSettingsUseCase],
  );

  const layouts = useMemo(() => {
    const tmpLayouts: Layouts = {};

    widgets.forEach((widget) => {
      Object.entries(widget.layoutSettings).forEach(([key, value]) => {
        if (!tmpLayouts[key]) {
          tmpLayouts[key] = [];
        }

        tmpLayouts[key].push({
          i: widget.id,
          x: value.x,
          y: value.y,
          w: value.w,
          h: value.h,
        });
      });
    });

    return tmpLayouts;
  }, [widgets]);

  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      layouts={layouts}
      isDraggable={isEditMode}
      isResizable={isEditMode}
      draggableHandle=".grid-item__title"
      resizeHandle={<ArrowDownRight className="text-gray-400 size-4" />}
      onLayoutChange={handleChangeLayout}
      onBreakpointChange={changeBreakPoint}
    >
      {widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </ResponsiveReactGridLayout>
  );
}
