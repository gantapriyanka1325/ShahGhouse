'use client';

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
};

const baseVariants = (y: number, duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE },
  },
});

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 32,
  once = true,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={baseVariants(y, duration, delay)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  once = true,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 32,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
  lift = 10,
}: {
  children: React.ReactNode;
  className?: string;
  lift?: number;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -lift }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={imgClassName}
        initial={{ scale: 1.18 }}
        animate={inView ? { scale: 1 } : { scale: 1.18 }}
        transition={{ duration: 1.2, ease: EASE }}
      />
    </div>
  );
}

/**
 * Parallax wrapper — translates child on vertical scroll for a cinematic
 * depth effect. Respects reduced motion via framer-motion defaults.
 */
export function Parallax({
  children,
  className,
  speed = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
