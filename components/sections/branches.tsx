'use client';

import { Phone, Clock, MapPin, Navigation } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem, HoverLift } from '@/components/motion';
import { branches } from '@/lib/data';

export function Branches() {
  return (
    <section id="branches" className="section-padding bg-muted/30">
      <div className="container-mw">
        <SectionHeading
          eyebrow="Our Branches"
          title={
            <>
              Find Us Across <span className="text-primary">Hyderabad</span>
            </>
          }
          description="Six branches, one legendary taste. Visit the one nearest to you — dine in, or order for delivery."
        />

        <StaggerContainer className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <StaggerItem key={branch.id}>
              <HoverLift className="h-full" lift={10}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl-lg border border-border/50 bg-card p-8 shadow-[0_12px_40px_-25px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_24px_55px_-25px_rgba(0,0,0,0.22)] hover:border-accent/30">
                  {/* Top gold accent line */}
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent/30 transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/[0.07] text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-wider text-accent">
                      <span className="h-1 w-1 rotate-45 bg-accent" aria-hidden="true" />
                      {branch.area}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold leading-snug text-foreground">
                    {branch.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
                    {branch.address}
                  </p>

                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-accent" />
                      <dt className="sr-only">Phone</dt>
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                        className="text-foreground/80 transition-colors hover:text-primary"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-accent" />
                      <dt className="sr-only">Opening hours</dt>
                      <dd className="text-foreground/80">{branch.hours}</dd>
                    </div>
                  </dl>

                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sweep mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_hsl(var(--primary)/0.5)]"
                  >
                    <Navigation className="h-4 w-4" />
                    Google Maps
                  </a>
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
