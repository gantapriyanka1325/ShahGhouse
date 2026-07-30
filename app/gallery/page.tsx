import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { FadeUp } from '@/components/motion';
import { galleryImages } from '@/lib/data';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A visual journey through Shah Ghouse — Hyderabadi biryani, haleem, charcoal kebabs, our warm dining spaces and the craft behind every dish.',
};

const spanClass = (span?: string) => {
  switch (span) {
    case 'tall':
      return 'sm:row-span-2';
    case 'wide':
      return 'sm:col-span-2';
    default:
      return '';
  }
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Gallery"
          title={
            <>
              Moments from the <span className="text-accent">Shah Ghouse Kitchen</span>
            </>
          }
          description="Sizzling handis, char-grilled skewers, fragrant spices and warm dining spaces — a glimpse of the craft and care behind every plate we serve."
          image="https://images.pexels.com/photos/12889677/pexels-photo-12889677.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        <section className="section-padding bg-background">
          <div className="container-mw">
            <FadeUp>
              <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[260px] sm:grid-cols-3 lg:grid-cols-4">
                {galleryImages.concat(galleryImages).map((img, i) => (
                  <div
                    key={`${img.src}-${i}`}
                    className={cn(
                      'group relative overflow-hidden rounded-xl shadow-md',
                      spanClass(img.span)
                    )}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-sm font-medium text-white/90">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
