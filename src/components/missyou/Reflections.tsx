import { motion } from "framer-motion";

const TEXT = `Love, every moment away from you feels like a quiet whisper of how much you mean to me. Your laughter is the melody I keep on repeat, and your presence is the warmth I carry through the day. I miss the small things — the way you smile, our inside jokes, and the simple comfort of being near you. This space is a tiny reflection of the world we've built together, waiting for the day we can add more memories to it.`;

export function Reflections() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-glow/80">
          Section iii
        </p>
        <h2 className="mt-3 font-serif-display text-4xl sm:text-5xl text-gradient-rose">
          Heartfelt Reflections
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="glass mt-10 max-h-[60vh] overflow-y-auto rounded-3xl p-8 sm:p-12"
      >
        <p className="font-serif-display text-2xl italic leading-relaxed text-foreground/95 sm:text-[1.7rem]">
          {TEXT.split(" — ").map((chunk, i, arr) => (
            <span key={i}>
              {chunk}
              {i < arr.length - 1 && (
                <span className="text-rose-glow"> — </span>
              )}
            </span>
          ))}
        </p>
        <p className="mt-8 text-right font-hand text-2xl text-rose-glow">
          always, your person
        </p>
      </motion.div>
    </section>
  );
}
