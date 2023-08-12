import { baseUrl } from '~/config/shared';
import type { MetadataRoute } from 'next';

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  return ['', '/pricing'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: 'daily',
  }));
}