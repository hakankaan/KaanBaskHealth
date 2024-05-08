import { DependencyContainer } from '@/lib/dependency-container';

export const useRandomStyle = () => {
  const container = DependencyContainer.getInstance();
  return container.styleService.getRandomStyle();
};
