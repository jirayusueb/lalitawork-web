import config from "@/configs";
import {
  authentication,
  createDirectus,
  rest,
  type RestConfig,
} from "@directus/sdk";

const feature = config.features.directus;

const restConfig: Partial<RestConfig> = {
  onRequest: (options) => ({ ...options, cache: "no-store" }),
};

const directus = feature.isEnabled
  ? createDirectus(feature.url).with(rest(restConfig))
  : null;

export default directus;
