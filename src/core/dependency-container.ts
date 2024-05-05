import { StyleRepositoryImpl } from '@/modules/styles/adapters/style-repository-impl';
import { StyleServiceImpl } from '@/modules/styles/application/style-service-impl';
import { StyleRepository } from '@/modules/styles/domain/style-repository';
import { StyleService } from '@/modules/styles/domain/style-service';

export class DependencyContainer {
  private static instance: DependencyContainer | null = null;

  private styleRepository: StyleRepository;
  public styleService: StyleService;

  private constructor() {
    this.styleRepository = new StyleRepositoryImpl();
    this.styleService = new StyleServiceImpl(this.styleRepository);
  }

  public static getInstance(): DependencyContainer {
    if (!this.instance) {
      this.instance = new DependencyContainer();
    }

    return this.instance;
  }
}
