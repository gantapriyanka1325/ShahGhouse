'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Flame, Star } from 'lucide-react';
import { menuCategories } from '@/lib/data';
import { FadeUp } from '@/components/motion';
import { cn } from '@/lib/utils';

export function MenuGrid() {
  const [active, setActive] = useState(menuCategories[0].name);
  const category = menuCategories.find((c) => c.name === active) ?? menuCategories[0];

  return (
    <section className="section-padding bg-background">
      <div className="container-mw">
        {/* Category tabs */}
        <FadeUp>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {menuCategories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActive(cat.name)}
                className={cn(
                  'shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
                  active === cat.name
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'border border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary'
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2"
          >
            {category.items.map((item) => (
              <div
                key={item.name}
                className="group flex items-start justify-between gap-5 border-b border-border/50 pb-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {item.veg ? (
                      <Leaf className="h-4 w-4 text-green-600" aria-label="Vegetarian" />
                    ) : (
                      <Flame className="h-4 w-4 text-primary" aria-label="Non-vegetarian" />
                    )}
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-accent">
                        <Star className="h-3 w-3 fill-accent" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-bold text-primary">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <FadeUp delay={0.1} className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            Prices are inclusive of taxes. Half and full portions available for
            most biryanis and curries.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
