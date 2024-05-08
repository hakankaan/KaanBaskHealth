'use client';
import React, { useCallback, useMemo } from 'react';
import {
  Layout as LayoutType,
  Responsive,
  WidthProvider,
} from 'react-grid-layout';
import { Widget } from '../widget/widget';
import { ArrowDownRight } from 'lucide-react';
import { useLayout } from '../../contexts/use-layout';
import { Widget as WidgetEntity } from '@/modules/dashboard/domain/widget';
import { useCurrentBreakpoint } from './use-current-breakpoint';
import { useChangeLayoutSettings } from '@/modules/dashboard/use-cases/use-change-layout-settings';
import { useGetLayoutsFromWidgets } from './use-get-layouts-from-widgets';

const BREAKPOINTS = {
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
  xxs: 0,
};

type Props = {
  widgets: WidgetEntity[];
};

export function Layout({ widgets }: Props) {
  const currentBreakpoint = useCurrentBreakpoint({ breakpoints: BREAKPOINTS });

  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    [],
  );
  const { editModeEnabled } = useLayout();
  const { changeLayoutSettings } = useChangeLayoutSettings();
  const layouts = useGetLayoutsFromWidgets(widgets);

  const handleChangeLayout = useCallback(
    (layout: LayoutType[]) => {
      if (!currentBreakpoint) {
        return;
      }

      changeLayoutSettings(layout, widgets, currentBreakpoint);
    },
    [currentBreakpoint, changeLayoutSettings, widgets],
  );

  if (!currentBreakpoint) {
    return null;
  }

  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      breakpoint={currentBreakpoint}
      breakpoints={BREAKPOINTS}
      rowHeight={30}
      layouts={layouts}
      isDraggable={editModeEnabled}
      isResizable={editModeEnabled}
      draggableHandle=".grid-item__title"
      resizeHandle={<ArrowDownRight className="text-gray-400 size-4" />}
      onLayoutChange={handleChangeLayout}
    >
      {widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </ResponsiveReactGridLayout>
  );
}
