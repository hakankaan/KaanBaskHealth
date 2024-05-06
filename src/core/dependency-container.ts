import {
  AnalyticsService,
  AnalyticsServiceImpl,
  PreferencesRepository,
  PreferencesRepositoryImpl,
} from '@/modules/dashboard';
import {
  StyleRepository,
  StyleRepositoryImpl,
  StyleService,
  StyleServiceImpl,
} from '@/modules/styles';

import { config } from './config';

export class DependencyContainer {
  private static instance: DependencyContainer | null = null;

  private styleRepository: StyleRepository;
  public styleService: StyleService;
  public preferencesRepository: PreferencesRepository;
  public analyticsService: AnalyticsService;

  private constructor() {
    if (!config.ANALYTICS_ACCESS_TOKEN)
      throw new Error('Analytics access token is required');

    this.styleRepository = new StyleRepositoryImpl();
    this.styleService = new StyleServiceImpl(this.styleRepository);
    this.preferencesRepository = new PreferencesRepositoryImpl();
    this.analyticsService = new AnalyticsServiceImpl(
      config.ANALYTICS_ACCESS_TOKEN,
    );
  }

  public static getInstance(): DependencyContainer {
    if (!this.instance) {
      this.instance = new DependencyContainer();
    }

    return this.instance;
  }
}
