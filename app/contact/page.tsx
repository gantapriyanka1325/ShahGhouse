import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { ContactContent } from '@/components/contact-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Shah Ghouse. Call us, email us, or visit any of our six Hyderabad branches. We are open daily from 11 AM to 11:30 PM.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title={
            <>
              We’d Love to <span className="text-accent">Hear From You</span>
            </>
          }
          description="Questions, catering enquiries, feedback or just a craving — reach out and our team will be happy to help."
          image="https://images.pexels.com/photos/9316203/pexels-photo-9316203.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
