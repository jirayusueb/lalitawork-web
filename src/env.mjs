import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_HOST: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
