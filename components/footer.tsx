'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
import { SocialIcon } from '@/components/icons';
import { MotifBand } from '@/components/ornament';
import { navItems, contactInfo, socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Ornament band */}
      <div className="border-b border-background/10 py-3" aria-hidden="true">
        <MotifBand />
      </div>

      <div className="container-mw px-5 py-16 sm:px-8 md:px-12 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-[1.8] text-background/60">
              Serving the true taste of Hyderabad since 1985. Dum biryani,
              haleem, kebabs and royal desserts — crafted the traditional way,
              across six branches in the city.
            </p>
            <div className="mt-7 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shah Ghouse on ${s.name}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-background/20 text-background/60 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <SocialIcon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Quick Links</h3>
            <span className="mt-4 block h-px w-10 bg-accent" />
            <ul className="mt-6 space-y-3.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-background/55 transition-colors hover:text-accent"
                  >
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Opening Hours</h3>
            <span className="mt-4 block h-px w-10 bg-accent" />
            <ul className="mt-6 space-y-3.5 text-sm text-background/55">
              {contactInfo.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <span className="block text-background/80">{h.day}</span>
                    <span className="text-xs text-background/45">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Get in Touch</h3>
            <span className="mt-4 block h-px w-10 bg-accent" />
            <ul className="mt-6 space-y-4 text-sm text-background/55">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-accent"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-mw flex flex-col items-center justify-between gap-3 px-5 py-6 text-center text-xs text-background/45 sm:flex-row sm:px-8 md:px-12 lg:px-16 sm:text-left">
          <p>© {new Date().getFullYear()} Shah Ghouse. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rotate-45 bg-accent/60" aria-hidden="true" />
            Crafted with devotion to Hyderabadi cuisine · Established 1985
          </p>
        </div>
      </div>
    </footer>
  );
}
