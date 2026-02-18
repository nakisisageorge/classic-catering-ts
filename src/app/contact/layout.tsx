import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Book Your Catering or Culinary Course',
    description:
        'Have questions? Reach out to Classic Baking & Catering Uganda for bookings, course inquiries, and business consultations in Kampala. We are here to help.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
