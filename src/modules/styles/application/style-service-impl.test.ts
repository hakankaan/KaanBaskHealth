import { describe, it, expect, vi } from 'vitest';
import { StyleServiceImpl } from './style-service-impl';
import { StyleRepository } from '../domain/style-repository';
import { styles } from '../adapters/styles';
import { Style } from '../domain/style';

const mockStyleRepository: Partial<StyleRepository> = {
  getRandomStyle: vi.fn(() => Style.fromJSON(styles[0])),
};

describe('StyleServiceImpl', () => {
  it('should retrieve a random style', async () => {
    const service = new StyleServiceImpl(
      mockStyleRepository as StyleRepository,
    );
    const style = service.getRandomStyle();
    expect(style).toBeDefined();
    expect(style.gradient).toBeDefined();
    expect(mockStyleRepository.getRandomStyle).toHaveBeenCalled();
  });
});
