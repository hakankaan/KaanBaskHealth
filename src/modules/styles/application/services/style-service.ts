import { Style } from '../../domain/style';
import { StyleRepository } from '../repositories/style-repository';

export interface StyleService {
  getRandomStyle(): Style;
}

export class StyleServiceImpl implements StyleService {
  constructor(private styleRepository: StyleRepository) {}

  getRandomStyle() {
    return this.styleRepository.getRandomStyle();
  }
}
