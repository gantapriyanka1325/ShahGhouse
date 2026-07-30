import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  variant?: 'full' | 'mark';
  light?: boolean;
};

export function Logo({ className, variant = 'full', light = false }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      {/* Arch-inspired mark */}
      <span
        className="relative grid h-11 w-11 place-items-center bg-primary"
        style={{ borderRadius: '50% 50% 0.4rem 0.4rem / 45% 45% 0.4rem 0.4rem' }}
        aria-hidden="true"
      >
        <span className="absolute inset-[3px] border border-accent/40" style={{ borderRadius: '50% 50% 0.3rem 0.3rem / 45% 45% 0.3rem 0.3rem' }} />
        <span className="font-display text-base font-bold text-accent">SG</span>
      </span>
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-lg font-bold tracking-wide',
              light ? 'text-white' : 'text-foreground'
            )}
          >
            Shah Ghouse
          </span>
          <span className="mt-1 inline-flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-luxury text-accent">
            <span className="h-1 w-1 rotate-45 bg-accent" />
            Since 1985
          </span>
        </span>
      )}
    </span>
  );
}
