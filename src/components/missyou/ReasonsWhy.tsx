import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";

const REASONS = [
  "Your kindness — the soft kind that fixes things quietly.",
  "Your chaotic energy at 11pm.",
  "The way you hold my hand like you mean it.",
  "How you laugh at your own jokes first.",
  "The little hum you do when you're concentrating.",
  "How safe the world feels when you're next to me.",
  "Your terrible-on-purpose dance moves.",
  "The way you remember the smallest things I say.",
  "Your eyes when you talk about something you love.",
  "Just — the entire fact of you.",
];

export function ReasonsWhy() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % REASONS.length);

  return (
    <section className="mx-auto w-full max-w-xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="glass-rose rounded-3xl p-8 text-center sm:p-10"
      >
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-rose-glow/90">
          <Sparkles className="h-3.5 w-3.5" />
          A Little Reminder
        </div>
        <h3 className="mt-3 font-serif-display text-2xl text-foreground/90">
          Why I'm missing you right now
        </h3>

        <div className="relative mt-6 min-h-24">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.5 }}
              className="font-serif-display text-xl italic text-gradient-rose sm:text-2xl"
            >
              "{REASONS[i]}"
            </motion.p>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-foreground/90 transition-all hover:bg-white/10 active:scale-95"
        >
          <RefreshCw className="h-4 w-4 text-rose-glow" />
          Remind Me
        </button>
      </motion.div>
    </section>
  );
}
