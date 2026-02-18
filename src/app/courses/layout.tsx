import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Training & Courses - Classic Baking & Catering Uganda',
    description:
        'Professional culinary training programs — diplomas, certificates, short courses & barista training. Practical, industry-oriented programs for all skill levels.',
};

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
