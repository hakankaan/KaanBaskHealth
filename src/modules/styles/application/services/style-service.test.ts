import { describe, it, expect, vi } from 'vitest';
import { StyleServiceImpl } from './style-service';

import { styles } from '../repositories/styles';
import { Style } from '../../domain/style';
import { StyleRepository } from '../repositories/style-repository';

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
    expect(style.accentForeground).toBeDefined();
    expect(mockStyleRepository.getRandomStyle).toHaveBeenCalled();
  });
});
