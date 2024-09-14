import { env } from '@/env.mjs';
import type { Feature } from '@/types/feature';

const propertyId = env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID;

const title = 'Google analytics';

const config: Feature<{ propertyId: string }> = (() => {
  if (propertyId) {
    return Object.freeze({
      title,
      isEnabled: true,
      propertyId,
    });
  }

  return Object.freeze({
    title,
    isEnabled: false,
  });
})();

export default config;
