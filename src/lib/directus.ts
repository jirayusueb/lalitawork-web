import config from "@/configs";
import { type RestConfig, createDirectus, rest } from "@directus/sdk";

const feature = config.features.directus;

const isBuild = process.env.NEXT_BUILD === "true";

const restConfig: Partial<RestConfig> = {
  onRequest: (options) => ({
    ...options,
    headers: { ...options.headers, "X-Bun": "true" },
    cache: !isBuild ? "no-store" : undefined,
    next: {
      revalidate: !isBuild ? 60 : undefined, // 1 min
    },
  }),
};

const directus = feature.isEnabled
  ? createDirectus(feature.url).with(rest(restConfig))
  : null;

export default directus;
