import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Training & Courses',
    description: 'Professional culinary training programs and short courses at Classic Catering Uganda.',
};

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
