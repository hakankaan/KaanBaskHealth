type LayoutProps = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW: number;
  minH: number;
};

export interface LayoutSettingsJson {
  lg: LayoutProps;
  md: LayoutProps;
  sm: LayoutProps;
  xs: LayoutProps;
  xxs: LayoutProps;
}

export class LayoutSettings {
  constructor(
    public lg: LayoutProps,
    public md: LayoutProps,
    public sm: LayoutProps,
    public xs: LayoutProps,
    public xxs: LayoutProps,
  ) {}

  static fromJson(json: LayoutSettingsJson): LayoutSettings {
    return new LayoutSettings(json.lg, json.md, json.sm, json.xs, json.xxs);
  }

  static getDefaultValues(id: string): LayoutSettingsJson {
    return {
      lg: { x: 0, y: 0, w: 6, h: 12, i: id, minH: 5, minW: 2 },
      md: { x: 0, y: 0, w: 5, h: 10, i: id, minH: 4, minW: 2 },
      sm: { x: 0, y: 0, w: 3, h: 6, i: id, minH: 3, minW: 2 },
      xs: { x: 0, y: 0, w: 4, h: 6, i: id, minH: 3, minW: 2 },
      xxs: { x: 0, y: 0, w: 2, h: 8, i: id, minH: 3, minW: 2 },
    };
  }

  toJson(): LayoutSettingsJson {
    return {
      lg: this.lg,
      md: this.md,
      sm: this.sm,
      xs: this.xs,
      xxs: this.xxs,
    };
  }
}
