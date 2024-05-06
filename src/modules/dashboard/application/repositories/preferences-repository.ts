import { Preferences } from '../../domain/preferences';

export interface PreferencesRepository {
  getPreferences(): Promise<Preferences[]>;
  savePreferences(preferences: Preferences[]): Promise<void>;
}

export class PreferencesRepositoryImpl implements PreferencesRepository {
  async getPreferences(): Promise<Preferences[]> {
    const preferences = localStorage.getItem('preferences');

    if (!preferences) {
      return [];
    }

    return JSON.parse(preferences);
  }

  async savePreferences(preferences: Preferences[]): Promise<void> {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }
}
