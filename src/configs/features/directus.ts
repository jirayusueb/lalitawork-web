import { env } from '@/env.mjs';
import type { Feature } from '@/types/feature';

const url = env.NEXT_PUBLIC_DIRECTUS_URL;

const title = 'Directus';

const config: Feature<{ url: string }> = (() => {
  if (url) {
    return Object.freeze({
      title,
      isEnabled: true,
      url,
    });
  }

  return Object.freeze({
    title,
    isEnabled: false,
  });
})();

export default config;
