import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import GalleryGrid from '@/components/GalleryGrid';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Gallery | Culinary Creations & Event Highlights',
  description:
    'Browse our gallery of stunning wedding cakes, gourmet catering events, and hands-on culinary training sessions at Classic Catering Uganda.',
};

const galleryCategories = [
  {
    id: 'catering',
    title: 'Catering Events',
    description: 'Memorable events we have catered',
  },
  {
    id: 'training',
    title: 'Training Sessions',
    description: 'Our students in action',
  },
  {
    id: 'creations',
    title: 'Culinary Creations',
    description: 'Delicious dishes and baked goods',
  },
  {
    id: 'facility',
    title: 'Our Facility',
    description: 'Modern training kitchens and equipment',
  },
];

const galleryImages = [
  // Catering Events
  {
    id: '1',
    src: '/images/gallery-1.jpeg',
    alt: 'Catering event setup',
    category: 'catering',
    title: 'Event Catering',
  },
  {
    id: '2',
    src: '/images/gallery-2.jpeg',
    alt: 'Wedding catering service',
    category: 'catering',
    title: 'Wedding Reception',
  },
  {
    id: '3',
    src: '/images/gallery-3.jpeg',
    alt: 'Corporate event dinner',
    category: 'catering',
    title: 'Corporate Dinner',
  },
  {
    id: '4',
    src: '/images/gallery-4.jpeg',
    alt: 'Private party catering',
    category: 'catering',
    title: 'Private Party',
  },
  {
    id: '5',
    src: '/images/gallery-5.jpeg',
    alt: 'Buffet setup',
    category: 'catering',
    title: 'Buffet Service',
  },
  {
    id: '6',
    src: '/images/gallery-6.jpeg',
    alt: 'Table setting for event',
    category: 'catering',
    title: 'Elegant Setup',
  },
  // Training Sessions
  {
    id: '7',
    src: '/images/gallery-7.jpeg',
    alt: 'Culinary training class',
    category: 'training',
    title: 'Hands-on Training',
  },
  {
    id: '8',
    src: '/images/gallery-8.jpeg',
    alt: 'Students learning to cook',
    category: 'training',
    title: 'Cooking Class',
  },
  {
    id: '9',
    src: '/images/gallery-9.jpeg',
    alt: 'Baking workshop',
    category: 'training',
    title: 'Baking Workshop',
  },
  {
    id: '10',
    src: '/images/gallery-10.jpeg',
    alt: 'Chef demonstration',
    category: 'training',
    title: 'Chef Demo',
  },
  {
    id: '11',
    src: '/images/gallery-11.jpeg',
    alt: 'Pastry training session',
    category: 'training',
    title: 'Pastry Class',
  },
  // Culinary Creations
  {
    id: '12',
    src: '/images/gallery-12.jpeg',
    alt: 'Beautiful wedding cake',
    category: 'creations',
    title: 'Wedding Cake',
  },
  {
    id: '13',
    src: '/images/gallery-13.jpeg',
    alt: 'Decorated birthday cake',
    category: 'creations',
    title: 'Birthday Cake',
  },
  {
    id: '14',
    src: '/images/gallery-14.jpeg',
    alt: 'Gourmet pastries',
    category: 'creations',
    title: 'Pastry Selection',
  },
  {
    id: '15',
    src: '/images/gallery-15.jpeg',
    alt: 'Custom designed cake',
    category: 'creations',
    title: 'Custom Cake',
  },
  {
    id: '16',
    src: '/images/gallery-16.jpeg',
    alt: 'Cupcake display',
    category: 'creations',
    title: 'Cupcakes',
  },
  {
    id: '17',
    src: '/images/gallery-17.jpeg',
    alt: 'Chocolate desserts',
    category: 'creations',
    title: 'Chocolate Treats',
  },
  {
    id: '18',
    src: '/images/gallery-18.jpeg',
    alt: 'Fresh baked goods',
    category: 'creations',
    title: 'Fresh Baked',
  },
  {
    id: '19',
    src: '/images/gallery-19.jpeg',
    alt: 'Artisan bread',
    category: 'creations',
    title: 'Artisan Bread',
  },
  // Facility
  {
    id: '20',
    src: '/images/gallery-20.jpeg',
    alt: 'Professional kitchen',
    category: 'facility',
    title: 'Training Kitchen',
  },
  {
    id: '21',
    src: '/images/gallery-21.jpeg',
    alt: 'Modern equipment',
    category: 'facility',
    title: 'Modern Equipment',
  },
  {
    id: '22',
    src: '/images/gallery-22.jpeg',
    alt: 'Classroom setup',
    category: 'facility',
    title: 'Learning Space',
  },
  {
    id: '23',
    src: '/images/PHOTO-2025-09-25-02-50-18.jpg',
    alt: 'Kitchen workspace',
    category: 'facility',
    title: 'Kitchen Space',
  },
  {
    id: '24',
    src: '/images/PHOTO-2025-09-25-02-40-28.jpg',
    alt: 'Students at work',
    category: 'training',
    title: 'Practical Session',
  },
  // New gallery images
  {
    id: '25',
    src: '/images/56co.jpg',
    alt: 'Gold chafing dishes with local cuisine at outdoor event',
    category: 'catering',
    title: 'Premium Buffet Display',
  },
  {
    id: '26',
    src: '/images/cake5c.jpg',
    alt: 'Beautifully decorated cake and pastry display',
    category: 'creations',
    title: 'Cake & Pastry Spread',
  },
  {
    id: '27',
    src: '/images/cla34C.jpg',
    alt: 'Professional buffet station with chafing dishes and plates',
    category: 'catering',
    title: 'Buffet Station Setup',
  },
  {
    id: '28',
    src: '/images/cla47jpgc.jpg',
    alt: 'Elegant indoor catering setup with premium equipment',
    category: 'catering',
    title: 'Elegant Indoor Setup',
  },
  {
    id: '29',
    src: '/images/cla49c.jpg',
    alt: 'Professional staff serving at a catering event',
    category: 'catering',
    title: 'Professional Service',
  },
  {
    id: '30',
    src: '/images/cla53c.jpg',
    alt: 'Premium black chafing dishes with reflective surface',
    category: 'catering',
    title: 'Premium Chafing Dishes',
  },
  {
    id: '31',
    src: '/images/cla93c.jpg',
    alt: 'Assorted cake platter display',
    category: 'creations',
    title: 'Cake Platter',
  },
  {
    id: '32',
    src: '/images/cla189.jpg',
    alt: 'Catering event food presentation',
    category: 'catering',
    title: 'Food Presentation',
  },
  {
    id: '33',
    src: '/images/gallery-wa-24.jpeg',
    alt: 'Graduation ceremony catering with buffet service',
    category: 'catering',
    title: 'Graduation Catering',
  },
  {
    id: '34',
    src: '/images/gallery-wa-25.jpeg',
    alt: 'Staff serving guests at graduation event',
    category: 'catering',
    title: 'Event Food Service',
  },
  {
    id: '35',
    src: '/images/gallery-wa-26.jpeg',
    alt: 'Large-scale outdoor event food service',
    category: 'catering',
    title: 'Large Event Service',
  },
  {
    id: '36',
    src: '/images/gallery-wa-28.jpeg',
    alt: 'White and gold chafing pots with floral decorations',
    category: 'catering',
    title: 'Decorated Serving Pots',
  },
  {
    id: '37',
    src: '/images/gallery-wa-29.jpeg',
    alt: 'Hotel event buffet with premium chafing dishes',
    category: 'catering',
    title: 'Hotel Event Buffet',
  },
  {
    id: '38',
    src: '/images/events-outdoor.jpeg',
    alt: 'Outdoor lakeside catering setup',
    category: 'catering',
    title: 'Lakeside Event Setup',
  },
  {
    id: '39',
    src: '/images/juices-display.jpeg',
    alt: 'Fresh juice dispensers with floral arrangement',
    category: 'creations',
    title: 'Fresh Juice Station',
  },
  {
    id: '40',
    src: '/images/gallery-wa-32.jpeg',
    alt: 'Silver chafing dishes at lakeside venue',
    category: 'catering',
    title: 'Lakeside Buffet',
  },
  {
    id: '41',
    src: '/images/gallery-wa-33.jpeg',
    alt: 'Ornate copper chafing dishes at outdoor venue',
    category: 'creations',
    title: 'Artisan Serving Ware',
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Gallery"
        description="A visual journey through our culinary excellence"
        backgroundImage="/images/gallery-1.jpeg"
      />

      {/* Gallery Stats */}
      <section className="py-12 trust-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '500+', label: 'Events Catered' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '50+', label: 'Cake Designs' },
              { number: '8+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 bg-cream pattern-overlay corner-rings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="premium-card p-4 md:p-6 text-center group hover:bg-red-50 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mx-auto mb-3 group-hover:from-red-200 group-hover:to-red-100 transition-colors ring-4 ring-red-50">
                  <CategoryIcon category={category.id} />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-1">{category.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm hidden sm:block">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Events Gallery */}
      <section id="catering" className="py-16 md:py-20 bg-white rings-top-right scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Events"
            title="Catering Events"
            description="From intimate gatherings to grand celebrations, see how we bring culinary excellence to every event."
          />
          <GalleryGrid images={galleryImages.filter(img => img.category === 'catering')} columns={3} />
        </div>
      </section>

      {/* Training Sessions Gallery */}
      <section id="training" className="py-16 md:py-20 bg-cream-dark pattern-overlay rings-bottom-left scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Education"
            title="Training Sessions"
            description="Watch our students transform from beginners to skilled culinary professionals."
          />
          <GalleryGrid images={galleryImages.filter(img => img.category === 'training')} columns={3} />
        </div>
      </section>

      {/* Culinary Creations Gallery */}
      <section id="creations" className="py-16 md:py-20 bg-white corner-rings scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Divider */}
          <div className="section-divider mb-12">
            <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <SectionHeader
            subtitle="Our Work"
            title="Culinary Creations"
            description="Feast your eyes on our delicious cakes, pastries, and gourmet dishes."
          />
          <GalleryGrid images={galleryImages.filter(img => img.category === 'creations')} columns={4} />
        </div>
      </section>

      {/* Facility Gallery */}
      <section id="facility" className="py-16 md:py-20 bg-cream pattern-overlay rings-top-right scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Where Magic Happens"
            title="Our Facility"
            description="Modern, well-equipped training kitchens where culinary dreams come to life."
          />
          <GalleryGrid images={galleryImages.filter(img => img.category === 'facility')} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Want Us to Create Magic for You?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-10">
            Whether it&apos;s catering your event or training you in culinary arts, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryIcon({ category }: { category: string }) {
  const icons: Record<string, React.ReactNode> = {
    catering: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 01-1.5.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
      </svg>
    ),
    training: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    creations: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    facility: (
      <svg className="w-6 h-6 md:w-7 md:h-7 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  };
  return icons[category] || icons['catering'];
}
