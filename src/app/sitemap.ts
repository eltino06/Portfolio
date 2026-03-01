import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://santinobondioni.vercel.app';
    const locales = ['es', 'en', 'pt', 'it'];

    const routes = locales.flatMap((lang) => [
        {
            url: `${baseUrl}/${lang}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
    ]);

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        ...routes,
    ];
}
