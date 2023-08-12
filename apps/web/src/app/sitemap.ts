import { baseUrl } from '~/config/shared';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', '/pricing'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: 'daily',
  }));

  return [...routesMap];
}
