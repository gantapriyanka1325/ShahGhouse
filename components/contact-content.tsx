'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, Navigation } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/motion';
import { contactInfo, branches } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export function ContactContent() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
    toast({
      title: 'Message sent!',
      description: 'Thank you for reaching out. We’ll respond within 24 hours.',
    });
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 1200);
  };

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-mw grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Info */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reach Us"
              title={
                <>
                  Let’s <span className="text-primary">Talk</span>
                </>
              }
              description="Whether it is a reservation, a catering order for a wedding, or feedback on your last visit — we are always glad to connect."
            />

            <StaggerContainer className="mt-10 space-y-5">
              <StaggerItem>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Call Us
                    </span>
                    <span className="font-display text-lg font-bold text-foreground">
                      {contactInfo.phone}
                    </span>
                  </span>
                </a>
              </StaggerItem>
              <StaggerItem>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email Us
                    </span>
                    <span className="font-display text-lg font-bold text-foreground">
                      {contactInfo.email}
                    </span>
                  </span>
                </a>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Head Office
                    </span>
                    <span className="text-sm text-foreground/80">
                      {contactInfo.address}
                    </span>
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeUp delay={0.2}>
              <div className="mt-7 rounded-2xl bg-muted/60 p-6">
                <h3 className="inline-flex items-center gap-2 font-display text-base font-bold text-foreground">
                  <Clock className="h-5 w-5 text-accent" />
                  Opening Hours
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {contactInfo.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0"
                    >
                      <span className="text-foreground/80">{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <FadeUp delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-card p-6 shadow-xl ring-1 ring-border/40 sm:p-8"
            >
              <h2 className="font-display text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form and we’ll get back to you shortly.
              </p>

              <div className="mt-6 grid gap-5">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Name
                  </span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Imran Khan"
                    required
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help…"
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-sweep inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* Quick branch list */}
      <section className="section-padding bg-muted/40">
        <div className="container-mw">
          <SectionHeading
            eyebrow="Quick Directions"
            title={
              <>
                Find Your Nearest <span className="text-primary">Branch</span>
              </>
            }
          />
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <StaggerItem key={b.id}>
                <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {b.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.address}</p>
                  <a
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
