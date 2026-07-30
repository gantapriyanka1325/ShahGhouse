'use client';

import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { FadeUp } from '@/components/motion';
import { galleryImages } from '@/lib/data';
import { cn } from '@/lib/utils';

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

export function GalleryPreview() {
  return (
    <section id="gallery-preview" className="section-padding bg-muted/30">
      <div className="container-mw">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              A Feast for the <span className="text-primary">Eyes</span>
            </>
          }
          description="From sizzling handis to char-grilled skewers — a glimpse of the craft and care behind every plate at Shah Ghouse."
        />

        <FadeUp delay={0.1} className="mt-16">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[230px] sm:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={cn(
                  'group relative overflow-hidden rounded-2xl-lg shadow-[0_12px_30px_-20px_rgba(0,0,0,0.2)] ring-1 ring-black/5',
                  spanClass(img.span)
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform transition-duration-[1100ms] ease-out group-hover:scale-[1.1]"
                />
                {/* Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Plus icon — center reveal */}
                <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full border border-accent/60 bg-white/10 text-accent opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Plus className="h-5 w-5" />
                </span>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mb-2 flex items-center gap-2" aria-hidden="true">
                    <span className="h-1 w-1 rotate-45 bg-accent" />
                    <span className="h-px w-5 bg-accent/50" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-white/90">
                    {img.alt}
                  </span>
                </div>

                {/* Index number */}
                <span className="absolute left-4 top-4 font-display text-sm font-bold text-white/40 transition-colors duration-500 group-hover:text-accent/70">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-14 text-center">
          <Link href="/gallery" className="btn-outline-gold">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
