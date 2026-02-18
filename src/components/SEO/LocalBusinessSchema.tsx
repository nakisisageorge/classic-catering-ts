import React from 'react';

const LocalBusinessSchema = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Classic Baking & Catering Uganda',
        image: 'https://classiccateringuganda.com/og-image.jpg',
        '@id': 'https://classiccateringuganda.com',
        url: 'https://classiccateringuganda.com',
        telephone: '+256701123456', // Replace with actual telephone if found
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kampala Road', // Replace with actual address if found
            addressLocality: 'Kampala',
            addressRegion: 'Central',
            postalCode: '00000',
            addressCountry: 'UG',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 0.3476,
            longitude: 32.5825,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '16:00',
            },
        ],
        sameAs: [
            'https://www.facebook.com/classiccateringuganda',
            'https://www.instagram.com/classiccateringuganda',
            'https://twitter.com/classiccatering',
            'https://www.linkedin.com/company/classic-catering-uganda',
            'https://www.youtube.com/@classiccateringuganda',
        ],
        priceRange: '$$',
        servesCuisine: 'Ugandan, Continental, Baking',
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Classic Baking & Catering Uganda',
        url: 'https://classiccateringuganda.com',
        logo: 'https://classiccateringuganda.com/logo.png',
        sameAs: [
            'https://www.facebook.com/classiccateringuganda',
            'https://www.instagram.com/classiccateringuganda',
            'https://twitter.com/classiccatering',
            'https://www.linkedin.com/company/classic-catering-uganda',
            'https://www.youtube.com/@classiccateringuganda',
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
        </>
    );
};

export default LocalBusinessSchema;
