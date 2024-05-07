import { Analytics } from './analytics';

import { LayoutSettings } from './layout-settings';

export interface WidgetJson {
  id: string;
  title: string;
  analytic: Analytics;
  layoutSettings: LayoutSettings;
}

export class Widget {
  constructor(
    public id: string,
    public title: string,
    public analytic: Analytics,
    public layoutSettings: LayoutSettings,
  ) {}

  static fromJson(json: WidgetJson): Widget {
    return new Widget(json.id, json.title, json.analytic, json.layoutSettings);
  }

  toJson(): WidgetJson {
    return {
      id: this.id,
      title: this.title,
      analytic: this.analytic,
      layoutSettings: this.layoutSettings,
    };
  }
}
