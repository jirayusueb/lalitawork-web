import config from "@/configs";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import type { MetadataRoute } from "next";

const getBlogs = async () => {
  const response = directus?.request(
    readItems("blog", {
      fields: ["slug"],
    })
  );

  return response;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = (await getBlogs()) ?? [];
  return [
    {
      url: config.app.host,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${config.app.host}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${config.app.host}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...blogs.map((blog) => ({
      url: `${config.app.host}/blog/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
