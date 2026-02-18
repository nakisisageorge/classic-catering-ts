'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const BreadcrumbSchema = () => {
    const pathname = usePathname();
    const baseUrl = 'https://classiccateringuganda.com';

    // Split pathname into segments
    const segments = pathname.split('/').filter(Boolean);

    // Build breadcrumb items
    const items = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
        },
        ...segments.map((segment, index) => {
            const path = `/${segments.slice(0, index + 1).join('/')}`;
            const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

            return {
                '@type': 'ListItem',
                position: index + 2,
                name: name,
                item: `${baseUrl}${path}`,
            };
        }),
    ];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default BreadcrumbSchema;
