export interface ChartJson {
  labels: string[];
  data: number[];
}

export class Chart {
  constructor(
    public labels: string[],
    public data: number[],
  ) {}

  static fromJson(json: ChartJson): Chart {
    return new Chart(json.labels, json.data);
  }

  toJson(): ChartJson {
    return {
      labels: this.labels,
      data: this.data,
    };
  }
}
