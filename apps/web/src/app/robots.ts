import {baseUrl} from "~/config/shared";
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*'
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl
    };
}