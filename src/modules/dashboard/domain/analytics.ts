import { Table } from './table';
import { Chart } from './chart';

export interface AnalyticsJson {
  slug: string;
  type: 'chart' | 'table';
  data: Chart | Table;
}

export class Analytics {
  constructor(
    public slug: string,
    public type: 'chart' | 'table',
    public data: Chart | Table,
  ) {}

  static fromJson(json: AnalyticsJson): Analytics {
    return new Analytics(json.slug, json.type, json.data);
  }

  toJson(): AnalyticsJson {
    return {
      slug: this.slug,
      type: this.type,
      data: this.data,
    };
  }
}
