import config from '@/configs';
import directus from '@/lib/directus';
import { readFile } from '@directus/sdk';

function useDirectusImage() {
  const feature = config.features.directus;
  const endpoint = feature.isEnabled ? feature.url : '';

  return {
    getImage: (
      assetId: string,
      options: {
        width: number;
        height: number;
        quality?: number;
        format?: 'webp' | 'png' | 'jpg' | 'auto' | 'avif' | 'tiff';
        fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
      },
    ) => {
      const defaultOptions = Object.assign(
        {
          width: 100,
          height: 100,
          quality: 80,
          format: 'webp',
        },
        options,
      );

      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(defaultOptions)) {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      }
      return `${endpoint}/assets/${assetId}/?${params.toString()}`;
    },
  };
}

export default useDirectusImage;
