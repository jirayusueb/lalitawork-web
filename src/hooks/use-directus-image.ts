import config from "@/configs";
import directus from "@/lib/directus";
import { readFile } from "@directus/sdk";

function useDirectusImage() {
  const feature = config.features.directus;
  const endpoint = feature.isEnabled ? feature.url : "";

  return {
    getImage: (
      assetId: string,
      options: {
        width: number;
        height: number;
        quality?: number;
        format?: "webp" | "png" | "jpg" | "auto" | "avif" | "tiff";
        fit?: "cover" | "contain" | "fill" | "inside" | "outside";
      }
    ) => {
      const defaultOptions = Object.assign(
        {
          width: 100,
          height: 100,
          quality: 75,
          format: "webp",
          fit: "cover",
        },
        options
      );

      return `${endpoint}/assets/${assetId}/?width=${defaultOptions.width}&height=${defaultOptions.height}&quality=${defaultOptions.quality}&format=${defaultOptions.format}&fit=${defaultOptions.fit}`;
    },
  };
}

export default useDirectusImage;
