'use client';

import { FadeUp } from '@/components/motion';
import { Divider } from '@/components/ornament';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <FadeUp
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="heading-eyebrow">
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.9rem] lg:text-[3.25rem]',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      <Divider
        className={align === 'left' ? 'ml-0' : ''}
        light={light}
      />
      {description && (
        <p
          className={cn(
            'mt-7 max-w-2xl text-base leading-[1.8] sm:text-lg',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
