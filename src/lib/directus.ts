import config from "@/configs";
import { type RestConfig, createDirectus, rest } from "@directus/sdk";

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

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!).with(rest(restConfig))

export default directus;
