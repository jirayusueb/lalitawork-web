type FeatureEnabled<
  Payload extends Record<string, unknown> = Record<string, never>
> = { title: string; isEnabled: true } & Payload;

type FeatureDisabled = { title: string; isEnabled: false };

export type Feature<
  Payload extends Record<string, unknown> = Record<string, never>
> = FeatureEnabled<Payload> | FeatureDisabled;
