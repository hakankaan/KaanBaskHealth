export interface PreferencesJson {
  slug: string;
  isHidden: boolean;
}

export class Preferences {
  constructor(
    public isHidden: boolean,
    public slug: string,
  ) {}

  static fromJson(json: PreferencesJson): Preferences {
    return new Preferences(json.isHidden, json.slug);
  }

  toJson(): PreferencesJson {
    return {
      isHidden: this.isHidden,
      slug: this.slug,
    };
  }
}
