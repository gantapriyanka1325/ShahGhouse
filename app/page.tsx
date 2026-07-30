import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { SignatureDishes } from '@/components/sections/signature-dishes';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { GalleryPreview } from '@/components/sections/gallery-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { Branches } from '@/components/sections/branches';
import { ReservationCTA } from '@/components/sections/reservation-cta';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <WhyChooseUs />
        <GalleryPreview />
        <Testimonials />
        <Branches />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
