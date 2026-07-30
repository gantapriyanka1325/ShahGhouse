'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart, Loader2, CheckCircle2, CalendarDays, Clock, Users, Phone, User } from 'lucide-react';
import { branches, reservationTimes } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { FadeUp } from '@/components/motion';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ReservationForm({ variant = 'section' }: { variant?: 'section' | 'page' }) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    branch: branches[0].name,
    notes: '',
  });
  const { toast } = useToast();

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!form.name || !form.phone || !form.date || !form.time) {
      setStatus('error');
      toast({
        title: 'Please complete the form',
        description: 'Name, phone, date and time are required.',
        variant: 'destructive',
      });
      return;
    }

    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 900));

    setStatus('success');
    toast({
      title: 'Reservation requested!',
      description: `Thank you, ${form.name}. We’ll call you on ${form.phone} to confirm your table.`,
    });
    setForm({
      name: '',
      phone: '',
      guests: '2',
      date: '',
      time: '',
      branch: branches[0].name,
      notes: '',
    });
  };

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'rounded-3xl bg-card p-6 shadow-2xl shadow-black/20 ring-1 ring-border/40 sm:p-8 md:p-10',
        variant === 'section' && 'mx-auto max-w-3xl'
      )}
    >
      {status === 'success' ? (
        <div className="flex flex-col items-center py-10 text-center">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="grid h-20 w-20 place-items-center rounded-full bg-accent/15 text-accent"
          >
            <CheckCircle2 className="h-10 w-10" />
          </motion.span>
          <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
            Table Requested!
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Thank you for choosing Shah Ghouse. Our team will call you shortly to
            confirm your reservation. We can’t wait to host you.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Make Another Reservation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" icon={<User className="h-4 w-4" />}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="e.g. Imran Khan"
                required
                autoComplete="name"
                className={inputClass}
              />
            </Field>
            <Field label="Phone Number" icon={<Phone className="h-4 w-4" />}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="+91 98XXX XXXXX"
                required
                autoComplete="tel"
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Guests" icon={<Users className="h-4 w-4" />}>
              <select
                value={form.guests}
                onChange={(e) => update('guests', e.target.value)}
                className={inputClass}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
                <option value="20+">20+ (Event)</option>
              </select>
            </Field>
            <Field label="Date" icon={<CalendarDays className="h-4 w-4" />}>
              <input
                type="date"
                value={form.date}
                min={today}
                onChange={(e) => update('date', e.target.value)}
                required
                className={inputClass}
              />
            </Field>
            <Field label="Time" icon={<Clock className="h-4 w-4" />}>
              <select
                value={form.time}
                onChange={(e) => update('time', e.target.value)}
                required
                className={inputClass}
              >
                <option value="">Select time</option>
                {reservationTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Preferred Branch">
            <select
              value={form.branch}
              onChange={(e) => update('branch', e.target.value)}
              className={inputClass}
            >
              {branches.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Special Requests (optional)">
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              placeholder="Birthday cake, high chair, window seating…"
              rows={3}
              className={cn(inputClass, 'resize-none')}
            />
          </Field>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary mt-3 w-full disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Reserving…
              </>
            ) : (
              <>
                <CalendarHeart className="h-5 w-5" />
                Reserve My Table
              </>
            )}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            We’ll confirm your booking by phone. No payment needed to reserve.
          </p>
        </form>
      )}
    </motion.div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {icon && <span className="text-accent">{icon}</span>}
        {label}
      </span>
      {children}
    </label>
  );
}
