import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://signalmarketing.site';
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/es/servicios`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es/servicios`,
          en: `${baseUrl}/en/servicios`,
          'x-default': `${baseUrl}/es/servicios`,
        },
      },
    },
    {
      url: `${baseUrl}/en/servicios`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/servicios`,
          en: `${baseUrl}/en/servicios`,
          'x-default': `${baseUrl}/es/servicios`,
        },
      },
    },
  ];
}

