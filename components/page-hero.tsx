'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  align?: 'center' | 'left';
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  align = 'center',
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'container-mw relative z-10 px-4 sm:px-6 md:px-10',
          align === 'center' ? 'text-center' : 'text-left'
        )}
      >
        <span className="heading-eyebrow">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white text-shadow-lux sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <span className="gold-divider mx-auto" />
        {description && (
          <p
            className={cn(
              'mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg',
              align === 'center' ? 'mx-auto' : 'mx-0'
            )}
          >
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
}
