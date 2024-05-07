import { QueryClient } from '@tanstack/react-query';
import { LayoutSettingsRepository } from '../application';
import { LayoutSettings } from '../domain/layout-settings';
import { queryKeys } from '../ui/query-keys';
import { Widget } from '../domain/widget';

export class ChangeLayoutSettingsUseCase {
  constructor(
    private layoutSettingsRepository: LayoutSettingsRepository,
    private queryClient: QueryClient,
  ) {}

  execute(slug: string, layoutSettings: LayoutSettings) {
    this.layoutSettingsRepository.saveLayoutSettings(slug, layoutSettings);
    this.queryClient.setQueryData<Widget[]>(queryKeys.widgets, (data) => {
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
  }
}
