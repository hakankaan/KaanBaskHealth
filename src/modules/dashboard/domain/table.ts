export interface TableJson {
  data: Record<string, string | number>[];
}

export class Table {
  constructor(public data: Record<string, string | number>[]) {}

  static fromJson(json: TableJson): Table {
    return new Table(json.data);
  }

  toJson(): TableJson {
    return {
      data: this.data,
    };
  }
}
