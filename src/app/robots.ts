import app from "@/configs/app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${app.host}/sitemap.xml`,
    host: `${app.host}`,
  };
}
