import { Widget } from '@/modules/dashboard/domain/widget';
import { useMemo } from 'react';
import { Layouts } from 'react-grid-layout';

export const useGetLayoutsFromWidgets = (widgets: Widget[]) => {
  const layout = useMemo(() => {
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
          minH: value.minH,
          minW: value.minW,
        });
      });
    });
    return tmpLayouts;
  }, [widgets]);

  return layout;
};
