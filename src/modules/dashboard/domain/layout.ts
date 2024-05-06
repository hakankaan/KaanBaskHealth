import { Widget } from './widget';

export interface LayoutJson {
  widgets: Widget[];
  isEditMode: boolean;
}

export class Layout {
  constructor(
    private widgets: Widget[],
    private isEditMode: boolean,
  ) {}

  static fromJson(json: LayoutJson): Layout {
    return new Layout(json.widgets, json.isEditMode);
  }

  toJson(): LayoutJson {
    return {
      widgets: this.widgets,
      isEditMode: this.isEditMode,
    };
  }
}
