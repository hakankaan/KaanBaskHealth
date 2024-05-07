import {
  AnalyticsService,
  AnalyticsServiceImpl,
  LayoutSettingsRepository,
  LayoutSettingsRepositoryImpl,
} from '@/modules/dashboard';
import {
  StyleRepository,
  StyleRepositoryImpl,
  StyleService,
  StyleServiceImpl,
} from '@/modules/styles';

export class DependencyContainer {
  private static instance: DependencyContainer | null = null;

  private styleRepository: StyleRepository;
  public styleService: StyleService;
  public layoutSettingsRepository: LayoutSettingsRepository;
  public analyticsService: AnalyticsService;

  private constructor() {
    this.styleRepository = new StyleRepositoryImpl();
    this.styleService = new StyleServiceImpl(this.styleRepository);
    this.layoutSettingsRepository = new LayoutSettingsRepositoryImpl();
    this.analyticsService = new AnalyticsServiceImpl();
  }

  public static getInstance(): DependencyContainer {
    if (!this.instance) {
      this.instance = new DependencyContainer();
    }

    return this.instance;
  }
}
