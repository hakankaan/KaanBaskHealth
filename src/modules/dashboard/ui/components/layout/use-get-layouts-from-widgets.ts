import { Widget } from '@/modules/dashboard/domain/widget';
import { Layouts } from 'react-grid-layout';

export const useGetLayoutsFromWidgets = (widgets: Widget[]) => {
  const layouts: Layouts = {};
  widgets.forEach((widget) => {
    Object.entries(widget.layoutSettings).forEach(([key, value]) => {
      if (!layouts[key]) {
        layouts[key] = [];
      }
      layouts[key].push({
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
  return layouts;
};
