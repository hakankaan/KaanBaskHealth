import { StyleRepository } from '../domain/style-repository';
import { Style, StyleJSON } from '../domain/style';
import { styles } from './styles';

export class StyleRepositoryImpl implements StyleRepository {
  private styles: StyleJSON[] = styles;

  getRandomStyle(): Style {
    const randomIndex = Math.floor(Math.random() * this.styles.length);
    const randomStyle = this.styles[randomIndex];

    return Style.fromJSON(randomStyle);
  }
}
