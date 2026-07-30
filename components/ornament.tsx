import { cn } from '@/lib/utils';

/**
 * Elegant gold filigree divider — a thin gradient line with a rotated diamond
 * centred. Used between section content blocks.
 */
export function Divider({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn('relative mx-auto mt-6 h-3 w-32', className)}
      role="presentation"
      aria-hidden="true"
    >
      <span
        className={cn(
          'absolute left-0 top-1/2 h-px w-[38%] -translate-y-1/2',
          light ? 'bg-gradient-to-r from-transparent to-accent/70' : 'bg-gradient-to-r from-transparent to-accent'
        )}
      />
      <span
        className={cn(
          'absolute right-0 top-1/2 h-px w-[38%] -translate-y-1/2',
          light ? 'bg-gradient-to-l from-transparent to-accent/70' : 'bg-gradient-to-l from-transparent to-accent'
        )}
      />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent" />
    </div>
  );
}

/**
 * A small inline diamond ornament — for accenting eyebrows and labels.
 */
export function Diamond({ className }: { className?: string }) {
  return (
    <span
      className={cn('inline-block h-1.5 w-1.5 rotate-45 bg-accent', className)}
      aria-hidden="true"
    />
  );
}

/**
 * Hyderabadi arch SVG — a subtle decorative arch outline in gold, evoking
 * the city's Charminar / Nizam-era architecture. Used as a section accent.
 */
export function ArchOrnament({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const stroke = light ? 'hsl(47 65% 53% / 0.5)' : 'hsl(47 65% 53% / 0.35)';
  return (
    <svg
      viewBox="0 0 120 160"
      className={cn('h-auto w-full', className)}
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M6 158V78 a54 54 0 0 1 108 0V158"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M16 158V80 a44 44 0 0 1 88 0V158"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle cx="60" cy="34" r="3" fill={stroke} />
      <path d="M60 12V6 M48 18L44 14 M72 18L76 14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * A repeating Hyderabadi-inspired diamond/star motif band — used as a
 * subtle divider between dark and light sections.
 */
export function MotifBand({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-3 py-1', className)}
      aria-hidden="true"
      role="presentation"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="flex items-center gap-3">
          <span className="h-1 w-1 rotate-45 bg-accent/60" />
          {i < 4 && <span className="h-px w-8 bg-accent/30" />}
        </span>
      ))}
    </div>
  );
}
