import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Flame, Users2, Heart } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { FadeUp, RevealImage } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { stats, aboutImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The story of Shah Ghouse — an iconic Hyderabadi restaurant established in 1985, serving authentic dum biryani, haleem and kebabs with recipes passed down through three generations.',
};

const pillars = [
  {
    icon: Award,
    title: 'Recipes Never Written Down',
    text: 'Every spice blend is measured by hand and memory, taught from father to son — never committed to paper, only to practice.',
  },
  {
    icon: Flame,
    title: 'The Dum Seal',
    text: 'Our biryanis are sealed with dough and slow-cooked on a low flame, letting the rice and meat exchange flavours in their own steam.',
  },
  {
    icon: Users2,
    title: 'Three Generations',
    text: 'From a single handi in Toli Chowki to six branches across Hyderabad, the family has grown — but the kitchen is still ours.',
  },
  {
    icon: Heart,
    title: 'Hyderabad on Every Plate',
    text: 'We do not chase trends. We protect a tradition — the warmth, the generosity and the unmistakable taste of old Hyderabad.',
  },
];

const timeline = [
  { year: '1985', text: 'Shah Ghouse opens a small eatery in Toli Chowki with a single biryani handi.' },
  { year: '1996', text: 'Ramadan haleem becomes a city-wide sensation, with queues stretching down the street.' },
  { year: '2005', text: 'Second branch opens in Banjara Hills, bringing the heritage taste to a new Hyderabad.' },
  { year: '2015', text: 'Pathar Ka Gosht and signature kebabs earn a place on every food lover’s must-try list.' },
  { year: '2024', text: 'Six branches strong, still family-run, still using the original 1985 spice blends.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Story"
          title={
            <>
              Four Decades of <span className="text-accent">Hyderabadi Soul</span>
            </>
          }
          description="What began in 1985 with one handi and one dream is today Hyderabad’s most beloved address for authentic biryani, haleem and kebabs."
          image="https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-mw grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp className="relative">
              <RevealImage
                src={aboutImage}
                alt="Shah Ghouse dining room"
                className="aspect-[4/5] w-full rounded-2xl shadow-2xl"
                imgClassName="h-full w-full object-cover"
              />
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl border-2 border-accent/40" />
            </FadeUp>
            <div>
              <SectionHeading
                align="left"
                eyebrow="The Beginning"
                title={
                  <>
                    From One Handi to a <span className="text-primary">City’s Heritage</span>
                  </>
                }
              />
              <FadeUp delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  In 1985, Shah Ghouse set up a modest eatery on the bustling
                  streets of Toli Chowki. He had one belief — that a biryani
                  worthy of Hyderabad could not be rushed. It had to be sealed,
                  slow-cooked and served with the patience of a craftsman.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Word spread fast. The handi never stayed full for long. Soon,
                  families were travelling across the city for a plate of the
                  mutton biryani that tasted like it came straight out of a
                  Nizam’s kitchen. Over the years, the menu grew — haleem,
                  kebabs, curries, desserts — but the philosophy never changed:
                  honour the recipe, respect the ingredient, serve with warmth.
                </p>
              </FadeUp>
              <FadeUp delay={0.26}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Today, three generations later, Shah Ghouse runs six branches
                  across Hyderabad. The kitchens are still family-run, the
                  spices still hand-pounded each morning, and the biryani still
                  sealed with dough. Some things, we believe, should never
                  change.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-primary py-14">
          <div className="container-mw grid grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 md:px-10">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08} className="text-center">
                <span className="block font-display text-4xl font-bold text-accent sm:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-xs font-medium uppercase tracking-widest text-white/70">
                  {s.label}
                </span>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="section-padding bg-muted/40">
          <div className="container-mw">
            <SectionHeading
              eyebrow="What We Stand For"
              title={
                <>
                  The Values Behind <span className="text-primary">Every Plate</span>
                </>
              }
            />
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border/50 bg-card p-7 shadow-md">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-background">
          <div className="container-mw max-w-3xl">
            <SectionHeading
              eyebrow="Our Journey"
              title={
                <>
                  Milestones in Our <span className="text-primary">Heritage</span>
                </>
              }
            />
            <div className="mt-14 space-y-0">
              {timeline.map((t, i) => (
                <FadeUp key={t.year} delay={i * 0.06}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-accent">
                        {t.year}
                      </span>
                      {i < timeline.length - 1 && (
                        <span className="mt-2 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <p className="pt-3 text-base leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/40">
          <FadeUp className="container-mw text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Taste the Story for Yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Four decades of tradition are waiting on a plate. Reserve your
              table or explore the menu that made us Hyderabad’s favourite.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/reservation"
                className="btn-sweep inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-shadow hover:shadow-xl hover:shadow-primary/25"
              >
                Reserve a Table
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/menu"
                className="btn-sweep inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Explore Menu
              </Link>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
