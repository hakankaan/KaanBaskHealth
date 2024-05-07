type LayoutProps = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
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
