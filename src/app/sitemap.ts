import config from "@/configs";
import fs from "node:fs";
import path from "node:path";

const baseUrl = config.app.host;
const baseDir = "src/app";
const dynamicDirs = ["blog"];
const excludeDirs = ["api"];

function getRoutes() {
  const fullPath = path.join(process.cwd(), baseDir);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  const routes: {
    url: string;
    lastModified: Date;
    changeFrequency: string;
    priority: number;
  }[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
      // Handle 'static' routes at the baseDir
      routes.push({
        url: `/${entry.name}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      });

      // Handle dynamic routes
      if (dynamicDirs.includes(entry.name)) {
        const subDir = path.join(fullPath, entry.name);
        const subEntries = fs.readdirSync(subDir, { withFileTypes: true });

        for (const subEntry of subEntries) {
          if (subEntry.isDirectory()) {
            routes.push({
              url: `/${entry.name}/${subEntry.name}`,
              lastModified: new Date(),
              changeFrequency: "weekly",
              priority: 1.0,
            });
          }
        }
      }
    }
  }

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

function sitemap() {
  return getRoutes();
}

export default sitemap;
