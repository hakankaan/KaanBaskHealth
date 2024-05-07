import { LayoutSettings } from '../../domain/layout-settings';

const STORAGE_KEY = 'layoutSettings';

export interface LayoutSettingsRepository {
  getLayoutSettings(): Record<string, LayoutSettings | null>;
  saveLayoutSettings(slug: string, layoutSettings: LayoutSettings): void;
}

export class LayoutSettingsRepositoryImpl implements LayoutSettingsRepository {
  getLayoutSettings: LayoutSettingsRepository['getLayoutSettings'] = () => {
    const layoutSettings = localStorage.getItem(STORAGE_KEY);
    if (!layoutSettings) {
      return {};
    }

    const layoutSettingsJson = JSON.parse(layoutSettings) as Record<
      string,
      LayoutSettings | null
    >;
    const layoutSettingsJsonKeys = Object.keys(layoutSettingsJson);
    const layoutSettingsConverted: Record<string, LayoutSettings | null> = {};

    layoutSettingsJsonKeys.forEach((key) => {
      const layoutSettings = layoutSettingsJson[key];
      layoutSettingsConverted[key] = layoutSettings
        ? LayoutSettings.fromJson(layoutSettings)
        : null;
    });

    return layoutSettingsConverted;
  };

  saveLayoutSettings(slug: string, layoutSettings: LayoutSettings) {
    const currentLayoutSettings = this.getLayoutSettings();
    currentLayoutSettings[slug] = layoutSettings;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentLayoutSettings));
  }
}
