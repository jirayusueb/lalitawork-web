import { env } from '@/env.mjs';

const app = Object.freeze({
  host: env.NEXT_PUBLIC_APP_HOST,
  isProduction: process.env.NODE_ENV === 'production',
});

export default app;
