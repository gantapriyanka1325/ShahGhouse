'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, UtensilsCrossed, CalendarHeart, Star } from 'lucide-react';
import { heroImage } from '@/lib/data';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Background drifts slower than content for depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Cinematic background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroImage}
          alt="Cinematic Hyderabadi biryani plated with raita, tomato, onion, lime and chilli garnish"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      {/* Layered overlays — cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="container-mw relative z-10 px-5 text-center sm:px-8 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-white/[0.06] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-luxury text-accent backdrop-blur-md"
        >
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          Authentic Hyderabadi Since 1985
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto mt-8 max-w-4xl font-display text-[2.75rem] font-bold leading-[1.02] text-white text-shadow-lux sm:text-6xl md:text-7xl lg:text-[5.75rem]"
        >
          The True Taste
          <br />
          of <span className="text-gradient-gold">Hyderabad</span>
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/70" />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl text-base font-light leading-[1.85] text-white/80 sm:text-lg md:text-xl"
        >
          For four decades, Shah Ghouse has perfected the art of dum biryani,
          haleem and charcoal kebabs — recipes guarded by three generations,
          served on every plate with the warmth of a Hyderabad home.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/menu" className="btn-gold w-full sm:w-auto">
            <UtensilsCrossed className="h-5 w-5" />
            Explore Menu
          </Link>
          <Link href="/reservation" className="btn-outline-light w-full sm:w-auto">
            <CalendarHeart className="h-5 w-5" />
            Reserve Table
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.9 }}
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-luxury text-white/60">
          Scroll
        </span>
        <span className="grid h-11 w-6 place-items-start justify-center rounded-full border border-white/30 pt-2">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <ChevronDown className="h-4 w-4 text-white/40" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
