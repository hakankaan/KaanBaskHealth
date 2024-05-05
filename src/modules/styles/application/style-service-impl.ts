import { StyleRepository } from '../domain/style-repository';
import { StyleService } from '../domain/style-service';

export class StyleServiceImpl implements StyleService {
  constructor(private styleRepository: StyleRepository) {}

  getRandomStyle() {
    return this.styleRepository.getRandomStyle();
  }
}
