import { env } from "@/env.mjs";

const app = Object.freeze({
  host: env.NEXT_PUBLIC_APP_HOST,
});

export default app;
