'use client';

import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem, HoverLift } from '@/components/motion';
import { FeatureIcon } from '@/components/icons';
import { features } from '@/lib/data';

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-mw">
        <SectionHeading
          eyebrow="Why Shah Ghouse"
          title={
            <>
              Four Reasons We Are{' '}
              <span className="text-primary">Hyderabad’s Favourite</span>
            </>
          }
          description="It is not just the food. It is the heritage, the ingredients, the space and the reach — together, an experience worth travelling for."
        />

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <StaggerItem key={feature.title}>
              <HoverLift className="h-full" lift={10}>
                <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-2xl-lg border border-border/50 bg-card p-8 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_24px_50px_-25px_rgba(0,0,0,0.25)]">
                  {/* Large faded number in corner */}
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-[6rem] font-bold leading-none text-primary/[0.04] transition-colors duration-500 group-hover:text-accent/[0.08]"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary/[0.07] text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_12px_28px_-10px_hsl(var(--primary)/0.5)]">
                    <FeatureIcon name={feature.icon} className="h-7 w-7" />
                    {/* Gold dot accent */}
                    <span
                      className="absolute -right-1 -top-1 h-2.5 w-2.5 rotate-45 bg-accent transition-transform duration-500 group-hover:scale-125"
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="relative mt-6 font-display text-xl font-bold leading-snug text-foreground">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
                    {feature.description}
                  </p>

                  {feature.stat && (
                    <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
                      <span className="h-px w-5 bg-accent/50" aria-hidden="true" />
                      {feature.stat}
                    </span>
                  )}
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
