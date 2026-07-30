import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { Branches } from '@/components/sections/branches';
import { FadeUp } from '@/components/motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Branches',
  description:
    'Six Shah Ghouse branches across Hyderabad — Toli Chowki, Banjara Hills, Gachibowli, Charminar, Kondapur and Secunderabad. Find addresses, phone numbers and directions.',
};

export default function BranchesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Branches"
          title={
            <>
              Six Branches, One <span className="text-accent">Legend</span>
            </>
          }
          description="The same hand-pounded spices, the same sealed dum biryani — now closer to you. Find your nearest Shah Ghouse and come dine with us."
          image="https://images.pexels.com/photos/3822749/pexels-photo-3822749.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
        <Branches />
        <section className="section-padding bg-background">
          <FadeUp className="container-mw text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Planning a Visit?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Reserve your table at any of our branches and skip the wait —
              especially on weekends and during Ramadan.
            </p>
            <Link
              href="/reservation"
              className="btn-sweep mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-shadow hover:shadow-xl hover:shadow-primary/25"
            >
              Reserve a Table
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
