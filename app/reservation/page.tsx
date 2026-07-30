import type { Metadata } from 'next';
import { Phone, Clock, Users, CalendarHeart } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { ReservationForm } from '@/components/reservation-form';
import { FadeUp } from '@/components/motion';
import { contactInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Reserve a Table',
  description:
    'Reserve your table at Shah Ghouse. Choose your branch, date, time and party size — our team will confirm your booking by phone.',
};

const perks = [
  {
    icon: CalendarHeart,
    title: 'Instant Request',
    text: 'Submit your details in under a minute — we confirm every booking by phone.',
  },
  {
    icon: Users,
    title: 'Groups & Events',
    text: 'From intimate dinners to weddings of 200+, our family halls host them all.',
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    text: 'Lunch and dinner slots available daily, from 11 AM to 11:30 PM.',
  },
  {
    icon: Phone,
    title: 'Prefer to Call?',
    text: `Reach us directly at ${contactInfo.phone} — we are happy to help.`,
  },
];

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Reservations"
          title={
            <>
              Reserve Your <span className="text-accent">Table</span>
            </>
          }
          description="Secure your seat at Hyderabad’s heritage table. Fill in your details below and our team will call to confirm your reservation."
          image="https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&w=1920"
          align="center"
        />

        <section className="section-padding bg-background">
          <div className="container-mw grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <FadeUp>
              <div className="rounded-3xl bg-card p-6 shadow-2xl shadow-black/10 ring-1 ring-border/40 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Book Your Table
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  All fields marked are required. No payment needed to reserve.
                </p>
                <div className="mt-7">
                  <ReservationForm variant="page" />
                </div>
              </div>
            </FadeUp>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Why Reserve with Us?
              </h2>
              <span className="mt-3 block h-px w-16 bg-accent" />
              <div className="mt-8 space-y-5">
                {perks.map((p, i) => (
                  <FadeUp key={p.title} delay={i * 0.08}>
                    <div className="flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <p.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {p.text}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.2}>
                <div className="mt-9 rounded-2xl bg-primary p-6 text-primary-foreground">
                  <h3 className="font-display text-lg font-bold">
                    Large Party or Event?
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    For bookings above 20 guests, catering, or private hall
                    hire, call us directly — we will tailor a package for you.
                  </p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="btn-sweep mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    {contactInfo.phone}
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
