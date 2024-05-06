import { Analytics } from './analytics';

import { Preferences } from './preferences';

export interface WidgetJson {
  id: string;
  title: string;
  analytic: Analytics;
  preferences?: Preferences;
}

export class Widget {
  constructor(
    private id: string,
    private title: string,
    private analytic: Analytics,
    private preferences?: Preferences,
  ) {}

  static fromJson(json: WidgetJson): Widget {
    return new Widget(json.id, json.title, json.analytic, json.preferences);
  }

  toJson(): WidgetJson {
    return {
      id: this.id,
      title: this.title,
      analytic: this.analytic,
      preferences: this.preferences,
    };
  }
}
