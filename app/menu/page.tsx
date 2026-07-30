import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { MenuGrid } from '@/components/menu-grid';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Explore the full Shah Ghouse menu — Hyderabadi dum biryani, mutton biryani, chicken 65, haleem, seekh kebabs, curries and traditional desserts like double ka meetha.',
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Menu"
          title={
            <>
              The Full <span className="text-accent">Shah Ghouse</span> Menu
            </>
          }
          description="From the legendary dum biryani to charcoal-grilled kebabs and royal desserts — every dish is prepared with hand-pounded spices and the recipes our family has guarded since 1985."
          image="https://images.pexels.com/photos/28674544/pexels-photo-28674544.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
        <MenuGrid />
      </main>
      <Footer />
    </>
  );
}
