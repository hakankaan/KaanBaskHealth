import { Style } from './style';

export interface StyleRepository {
  getRandomStyle(): Style;
}
