import { StyleJSON, Style } from '../../domain/style';

export const styleResponseToEntity = (styles: StyleJSON) => {
  return Style.fromJSON(styles);
};

export const styleEntityToResponse = (style: Style) => {
  return style.toJson();
};
