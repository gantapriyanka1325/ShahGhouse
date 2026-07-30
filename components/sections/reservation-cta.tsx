'use client';

import { CalendarHeart, Phone } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { FadeUp } from '@/components/motion';
import { ArchOrnament } from '@/components/ornament';
import { ReservationForm } from '@/components/reservation-form';
import { contactInfo } from '@/lib/data';

export function ReservationCTA() {
  return (
    <section id="reserve" className="relative section-padding overflow-hidden bg-primary">
      {/* Hyderabadi pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 25%, hsl(var(--accent)) 0, transparent 35%), radial-gradient(circle at 85% 75%, hsl(var(--accent)) 0, transparent 35%)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-hyderabadi-pattern opacity-30" aria-hidden="true" />

      {/* Arch ornaments */}
      <ArchOrnament
        className="pointer-events-none absolute -left-12 top-16 hidden w-20 opacity-30 lg:block"
        light
      />
      <ArchOrnament
        className="pointer-events-none absolute -right-12 bottom-16 hidden w-20 opacity-30 lg:block"
        light
      />

      <div className="container-mw relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <FadeUp className="text-center lg:text-left">
            <span className="heading-eyebrow">
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
              Reserve Your Table
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-[2.9rem] lg:text-[3.25rem]">
              Book a Seat at
              <br />
              <span className="text-gradient-gold">Hyderabad’s Heritage Table</span>
            </h2>
            {/* Ornamental divider */}
            <div className="mt-6 flex items-center gap-3 lg:justify-start justify-center" aria-hidden="true">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/70" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/70" />
            </div>
            <p className="mx-auto mt-7 max-w-md text-base font-light leading-[1.85] text-white/70 lg:mx-0 sm:text-lg">
              Whether it is a quiet family dinner or a grand celebration, let us
              host you the Hyderabadi way. Share your details and our team will
              confirm your table by phone.
            </p>

            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row lg:items-start sm:justify-center lg:justify-start">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="btn-sweep inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <CalendarHeart className="h-4 w-4 text-accent" />
                Open daily, 11 AM to 11:30 PM
              </span>
            </div>
          </FadeUp>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent/[0.08] blur-3xl" />
            <ReservationForm variant="section" />
          </div>
        </div>
      </div>
    </section>
  );
}
