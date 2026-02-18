import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'anthropic-ai', 'Google-Extended', 'CCBot', 'Omgilibot', 'Omgili'],
                allow: '/',
            }
        ],
        sitemap: 'https://classiccateringuganda.com/sitemap.xml',
    };
}
