import { DependencyContainer } from '@/core/dependency-container';
import { styleEntityToResponse } from '@/modules/styles/application/utils';

export const GET = async () => {
  const container = DependencyContainer.getInstance();

  return Response.json(
    styleEntityToResponse(container.styleService.getRandomStyle()),
  );
};