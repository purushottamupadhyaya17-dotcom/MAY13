import { motion } from "framer-motion";
import { HiddenTreasures } from "./HiddenTreasures";
import { VirtualHug } from "./VirtualHug";
import { Reflections } from "./Reflections";
import { ReasonsWhy } from "./ReasonsWhy";

export function Experience() {
  return (
    <motion.main
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Hero */}
      <section className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.5em] text-rose-glow"
        >
          A love letter, in pink
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif-display text-5xl leading-[1.05] text-gradient-rose sm:text-7xl md:text-8xl"
        >
          I miss you,
          <br />
          <span className="italic">Pratiksha</span>
          <span className="text-rose"> ♡</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A soft, blushing little world I built just for us —
          somewhere my heart can sit beside yours, even when we're apart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-16 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70"
        >
          ↓ scroll, my love
        </motion.div>
      </section>

      <HiddenTreasures />
      <VirtualHug />
      <Reflections />
      <ReasonsWhy />

      <footer className="border-t border-border/40 py-10 text-center">
        <p className="font-hand text-xl text-rose-glow">
          made with all of me, for all of you.
        </p>
      </footer>
    </motion.main>
  );
}
