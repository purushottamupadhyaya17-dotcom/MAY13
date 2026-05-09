import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { MissingCounter } from "./MissingCounter";

const PARTICLES = Array.from({ length: 60 });

export function VirtualHug() {
  const [burst, setBurst] = useState(0);

  return (
    <section className="relative mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
      <div className="glass-rose relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-glow/80">
          Section ii
        </p>
        <h2 className="mt-3 font-serif-display text-4xl sm:text-5xl text-gradient-rose">
          A Virtual Hug
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Press it whenever the world feels a little too far. I'll be there.
        </p>

        <div className="mt-10 flex justify-center">
          <motion.button
            onClick={() => setBurst((b) => b + 1)}
            whileTap={{ scale: 0.94 }}
            className="relative"
          >
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              style={{ background: "var(--gradient-rose)" }}
            />
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.9], opacity: [0.35, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
              style={{ background: "var(--gradient-rose)" }}
            />
            <span
              className="relative flex h-32 w-32 items-center justify-center rounded-full text-primary-foreground sm:h-40 sm:w-40"
              style={{
                background: "var(--gradient-rose)",
                boxShadow:
                  "0 20px 60px -15px oklch(0.78 0.13 35 / 0.7), inset 0 1px 0 oklch(1 0 0 / 0.3)",
              }}
            >
              <Heart className="h-12 w-12 sm:h-14 sm:w-14" fill="currentColor" />
            </span>
          </motion.button>
        </div>

        <p className="mt-6 font-hand text-lg text-rose-glow/90">
          send me a hug →
        </p>

        <div className="mt-14">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            since I last held you
          </p>
          <MissingCounter />
        </div>
      </div>

      {/* particle burst overlay */}
      <AnimatePresence>
        {burst > 0 && (
          <ParticleBurst key={burst} onDone={() => { /* allow re-trigger naturally */ }} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ParticleBurst({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onDone}
    >
      {PARTICLES.map((_, i) => {
        const angle = (i / PARTICLES.length) * Math.PI * 2;
        const dist = 200 + Math.random() * 400;
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist - 50;
        const isHeart = i % 3 === 0;
        const delay = Math.random() * 0.2;
        const duration = 1.6 + Math.random() * 1.2;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.4, rotate: 0 }}
            animate={{
              x,
              y,
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1, 0.9, 0.6],
              rotate: Math.random() * 540 - 270,
            }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
          >
            {isHeart ? (
              <Heart
                className="h-4 w-4 text-rose-glow"
                fill="currentColor"
                style={{ filter: "drop-shadow(0 0 8px oklch(0.85 0.16 30 / 0.8))" }}
              />
            ) : (
              <span
                className="block h-3 w-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.85 0.16 30), oklch(0.65 0.18 15))",
                  filter: "drop-shadow(0 0 6px oklch(0.78 0.13 35 / 0.7))",
                  borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
                }}
              />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
