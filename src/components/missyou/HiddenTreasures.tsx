import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Key, Heart, Mail, Sparkles, BookHeart, Flower } from "lucide-react";

type Treasure = {
  id: string;
  Icon: typeof Key;
  label: string;
  photo: string;
  caption: string;
};

const TREASURES: Treasure[] = [
  {
    id: "key",
    Icon: Key,
    label: "Brass Key",
    photo:
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&w=900&q=80",
    caption: "the key to my quiet hours",
  },
  {
    id: "locket",
    Icon: Heart,
    label: "Glowing Locket",
    photo:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=900&q=80",
    caption: "you, kept close to my chest",
  },
  {
    id: "letter",
    Icon: Mail,
    label: "Sealed Letter",
    photo:
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=900&q=80",
    caption: "all the words I haven't sent",
  },
  {
    id: "vial",
    Icon: Sparkles,
    label: "Vial of Stars",
    photo:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80",
    caption: "a sky we once shared",
  },
  {
    id: "book",
    Icon: BookHeart,
    label: "Vintage Book",
    photo:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80",
    caption: "our story, still being written",
  },
  {
    id: "rose",
    Icon: Flower,
    label: "A Single Rose",
    photo:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80",
    caption: "for the way you bloom",
  },
];

export function HiddenTreasures() {
  const [opened, setOpened] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpened((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-glow/80">
          Section i
        </p>
        <h2 className="mt-3 font-serif-display text-4xl sm:text-5xl text-gradient-rose">
          Hidden Treasures
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Six little things I keep just for you. Tap each one to open.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {TREASURES.map((t, i) => {
          const isOpen = opened.has(t.id);
          return (
            <motion.button
              key={t.id}
              onClick={() => toggle(t.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl text-left"
            >
              <div className="glass-rose absolute inset-0 rounded-3xl" />

              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="icon"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.6, rotateY: 90 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className="relative flex h-20 w-20 items-center justify-center rounded-full glass"
                      style={{ boxShadow: "0 10px 40px -10px oklch(0.78 0.13 35 / 0.6)" }}
                    >
                      <t.Icon className="h-9 w-9 text-rose-glow" strokeWidth={1.5} />
                      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-rose/30 ring-offset-0" />
                    </motion.div>
                    <span className="font-serif-display text-base italic text-foreground/80">
                      {t.label}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 opacity-0 transition-opacity group-hover:opacity-100">
                      tap to reveal
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.7, rotate: 6 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-3 flex flex-col rounded-xl bg-[oklch(0.96_0.01_80)] p-2 pb-4 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.7)]"
                  >
                    <div
                      className="flex-1 rounded-md bg-cover bg-center"
                      style={{ backgroundImage: `url(${t.photo})` }}
                    />
                    <p className="mt-3 px-1 text-center font-hand text-base text-charcoal">
                      {t.caption}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
