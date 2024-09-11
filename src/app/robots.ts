import config from "@/configs";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${config.app.host}/sitemap.xml`,
    host: `${config.app.host}`,
  };
}
