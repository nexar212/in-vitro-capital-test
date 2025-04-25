import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://in-vitro-capital-test.vercel.app/sitemap.xml',
    host: 'https://in-vitro-capital-test.vercel.app',
  }
} 