'use client';

import Link from 'next/link';
import { ArrowRight, Award, Flame } from 'lucide-react';
import { FadeUp, RevealImage } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { ArchOrnament } from '@/components/ornament';
import { aboutImage, stats } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden bg-background">
      {/* Subtle Hyderabadi pattern backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-hyderabadi-pattern opacity-60" aria-hidden="true" />

      {/* Arch ornament accent */}
      <ArchOrnament
        className="pointer-events-none absolute -left-16 top-24 hidden w-24 opacity-40 lg:block"
        aria-hidden="true"
      />

      <div className="container-mw relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image side — arch-framed */}
          <FadeUp className="relative order-2 lg:order-1">
            <div className="relative">
              <RevealImage
                src={aboutImage}
                alt="Warmly lit Shah Ghouse dining table set for a family meal"
                className="arch-frame aspect-[4/5] w-full shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] ring-1 ring-accent/15"
                imgClassName="h-full w-full object-cover"
              />
              {/* Gold frame offset */}
              <div
                className="arch-frame pointer-events-none absolute -right-5 -top-5 -z-10 aspect-[4/5] w-full border border-accent/40"
                aria-hidden="true"
              />
              {/* Heritage stat badge */}
              <div className="absolute -bottom-7 -left-7 hidden rounded-2xl bg-primary px-8 py-6 text-primary-foreground shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] md:block">
                <span className="block font-display text-4xl font-bold text-accent">40+</span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-luxury text-primary-foreground/80">
                  Years of Heritage
                </span>
                <span className="mt-2 flex items-center gap-2" aria-hidden="true">
                  <span className="h-px w-6 bg-accent/50" />
                  <span className="h-1 w-1 rotate-45 bg-accent" />
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  A Hyderabadi Legacy,
                  <br />
                  <span className="text-primary">Plated Since 1985</span>
                </>
              }
            />

            <FadeUp delay={0.1}>
              <p className="mt-8 text-base leading-[1.85] text-muted-foreground sm:text-lg">
                It began with a single handi of biryani and a small eatery in
                Toli Chowki. Our founder, Shah Ghouse, believed that a great
                biryani is not cooked — it is crafted. He sourced basmati aged
                for two years, pounded his own spices each morning, and sealed
                every handi with dough to let the flavours breathe in their own
                steam.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="mt-5 text-base leading-[1.85] text-muted-foreground sm:text-lg">
                Four decades later, those same recipes are still made the same
                way — handed down through three generations, never written down,
                only taught. From our legendary dum biryani and Ramadan haleem
                to charcoal-grilled kebabs, every dish carries the soul of
                old Hyderabad.
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.26}>
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-background p-5 text-center">
                    <dd className="font-display text-2xl font-bold text-primary sm:text-[2rem]">
                      {s.value}
                    </dd>
                    <dt className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </FadeUp>

            <FadeUp delay={0.34}>
              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <Link href="/about" className="btn-primary w-full sm:w-auto">
                  Read Our Full Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Hand-pounded spices
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Flame className="h-5 w-5 text-accent" />
                    Sealed dum cooking
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
