'use client';

import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem, HoverLift } from '@/components/motion';
import { signatureDishes } from '@/lib/data';

export function SignatureDishes() {
  return (
    <section id="menu-preview" className="section-padding bg-ivory-deep/40 bg-muted/30">
      <div className="container-mw">
        <SectionHeading
          eyebrow="Signature Dishes"
          title={
            <>
              The Legends on <span className="text-primary">Our Menu</span>
            </>
          }
          description="Six dishes that define the Shah Ghouse experience — each one a tribute to the flavours that made Hyderabad famous."
        />

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish) => (
            <StaggerItem key={dish.id}>
              <HoverLift className="h-full" lift={12}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl-lg bg-card shadow-[0_12px_40px_-20px_rgba(0,0,0,0.18)] ring-1 ring-border/40 transition-all duration-500 hover:shadow-[0_28px_60px_-25px_rgba(0,0,0,0.28)] hover:ring-accent/30">
                  {/* Image */}
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform transition-duration-[900ms] ease-out group-hover:scale-[1.08]"
                    />
                    {/* gradient veil that intensifies on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                    {/* Tag */}
                    {dish.tag && (
                      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent/95 px-3.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-wider text-accent-foreground shadow-lg backdrop-blur-sm">
                        <span className="h-1 w-1 rotate-45 bg-accent-foreground/70" aria-hidden="true" />
                        {dish.tag}
                      </span>
                    )}
                    {/* Price chip */}
                    <span className="absolute bottom-5 right-5 rounded-full bg-primary px-4 py-2 font-display text-base font-bold text-primary-foreground shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]">
                      {dish.price}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-luxury text-accent">
                      {dish.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground">
                      {dish.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
                      {dish.description}
                    </p>
                    <Link
                      href="/menu"
                      className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      <span className="btn-sweep inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 transition-colors group-hover/btn:bg-primary group-hover/btn:text-primary-foreground">
                        <ShoppingBag className="h-4 w-4" />
                        Order Now
                      </span>
                    </Link>
                  </div>
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-16 text-center">
          <Link href="/menu" className="btn-primary">
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
