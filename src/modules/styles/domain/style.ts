export type StyleJSON = {
  gradient: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  popover: string;
  popoverForeground: string;
  card: string;
  cardForeground: string;
  border: string;
  input: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  ring: string;
};

export class Style {
  constructor(
    public readonly gradient: string,
    public readonly background: string,
    public readonly foreground: string,
    public readonly muted: string,
    public readonly mutedForeground: string,
    public readonly popover: string,
    public readonly popoverForeground: string,
    public readonly card: string,
    public readonly cardForeground: string,
    public readonly border: string,
    public readonly input: string,
    public readonly primary: string,
    public readonly primaryForeground: string,
    public readonly secondary: string,
    public readonly secondaryForeground: string,
    public readonly accent: string,
    public readonly accentForeground: string,
    public readonly destructive: string,
    public readonly destructiveForeground: string,
    public readonly ring: string,
  ) {}

  static fromJSON(json: StyleJSON): Style {
    return new Style(
      json.gradient,
      json.background,
      json.foreground,
      json.muted,
      json.mutedForeground,
      json.popover,
      json.popoverForeground,
      json.card,
      json.cardForeground,
      json.border,
      json.input,
      json.primary,
      json.primaryForeground,
      json.secondary,
      json.secondaryForeground,
      json.accent,
      json.accentForeground,
      json.destructive,
      json.destructiveForeground,
      json.ring,
    );
  }

  toJson(): StyleJSON {
    return {
      gradient: this.gradient,
      background: this.background,
      foreground: this.foreground,
      muted: this.muted,
      mutedForeground: this.mutedForeground,
      popover: this.popover,
      popoverForeground: this.popoverForeground,
      card: this.card,
      cardForeground: this.cardForeground,
      border: this.border,
      input: this.input,
      primary: this.primary,
      primaryForeground: this.primaryForeground,
      secondary: this.secondary,
      secondaryForeground: this.secondaryForeground,
      accent: this.accent,
      accentForeground: this.accentForeground,
      destructive: this.destructive,
      destructiveForeground: this.destructiveForeground,
      ring: this.ring,
    };
  }
}
