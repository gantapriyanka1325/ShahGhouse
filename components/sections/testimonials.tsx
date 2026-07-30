'use client';

import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem, HoverLift } from '@/components/motion';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-mw">
        <SectionHeading
          eyebrow="Guest Words"
          title={
            <>
              Loved Across <span className="text-primary">Generations</span>
            </>
          }
          description="Don’t take our word for it — hear from the guests who have made Shah Ghouse a part of their family traditions."
        />

        <StaggerContainer className="mt-16 grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <HoverLift className="h-full" lift={8}>
                <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl-lg border border-border/50 bg-card p-8 shadow-[0_12px_40px_-25px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_24px_55px_-25px_rgba(0,0,0,0.22)] hover:border-accent/30">
                  {/* Large gold quotation mark */}
                  <span
                    className="pointer-events-none absolute -top-2 right-5 font-display text-7xl font-bold leading-none text-accent/15 transition-colors duration-500 group-hover:text-accent/25"
                    aria-hidden="true"
                  >
                    ”
                  </span>

                  {/* Rating */}
                  <div
                    className="relative flex gap-1"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="relative mt-6 flex-1 text-[0.95rem] font-light leading-[1.8] text-foreground/80">
                    {t.text}
                  </blockquote>

                  {/* Footer */}
                  <figcaption className="mt-7 flex items-center gap-4 border-t border-border/50 pt-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-accent ring-2 ring-accent/20">
                      {t.initials}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-display text-base font-bold text-foreground">
                        {t.name}
                      </span>
                      <span className="mt-0.5 text-xs text-muted-foreground">
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
