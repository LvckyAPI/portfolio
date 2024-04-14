import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://schlenther.dev',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }, {
            url: 'https://schlenther.dev/contact',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }, {
            url: 'https://schlenther.dev/site-notice',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}