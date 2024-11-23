import config from '@/configs';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: `${config.app.host}/sitemap`,
    host: `${config.app.host}`,
  };
}
