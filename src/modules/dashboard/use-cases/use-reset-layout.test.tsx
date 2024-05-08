import { describe, expect, it, vi } from 'vitest';
import { useResetLayout } from './use-reset-layout';

import { renderHook } from '@testing-library/react';

import { QueryClientProviderWrapper } from '@/providers/query-client-provider';
import { queryKeys } from '../ui/query-keys';
import { Widget } from '../domain/widget';
import { Analytics } from '../domain/analytics';
import { Chart } from '../domain/chart';
import { LayoutSettings } from '../domain/layout-settings';
import { queryClient } from '@/lib/react-query';
import { notDeepEqual } from 'assert';

const defaultLayoutSettings = LayoutSettings.getDefaultValues('1');
const initialHeight = Number(defaultLayoutSettings.lg.h);

const mockWidget = Widget.fromJson({
  id: '1',
  title: 'Widget 1',
  analytic: Analytics.fromJson({
    type: 'chart',
    data: Chart.fromJson({
      data: [],
      labels: [],
    }),
    slug: '1',
  }),
  layoutSettings: LayoutSettings.fromJson(defaultLayoutSettings),
});

describe('useResetLayout', () => {
  it('should reset the layout settings of a widget to their default values', async () => {
    queryClient.setQueryData(queryKeys.widgets, [mockWidget]);

    mockWidget.layoutSettings.lg.h = 10;

    const { result } = renderHook(() => useResetLayout(), {
      wrapper: QueryClientProviderWrapper,
    });

    notDeepEqual(
      mockWidget.layoutSettings.toJson(),
      LayoutSettings.getDefaultValues('1'),
    );

    await result.current.resetLayout();

    const updatedWidgets = queryClient.getQueryData<Widget[]>(
      queryKeys.widgets,
    );
    if (!updatedWidgets || updatedWidgets.length === 0) {
      throw new Error('Widgets are not defined');
    }

    const updatedWidget = updatedWidgets[0];
    expect(updatedWidget.layoutSettings.lg.h).toEqual(initialHeight);
  });
});
