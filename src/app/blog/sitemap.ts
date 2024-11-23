import config from '@/configs';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await directus?.request(
    readItems('post', {
      fields: ['slug', 'date_updated'],
      filter: {
        status: 'published',
      },
      sort: ['-date_created'],
    }),
  );

  if (!posts) return [];

  return posts?.map((post) => ({
    url: `${config.app.host}/blog/${post.slug}`,
    lastModified: new Date(post.date_updated),
  }));
}
