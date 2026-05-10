import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Heart, KeyRound } from "lucide-react";

export function EntryGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === "meintera") {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1200);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1 }}
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.78 0.13 35 / 0.18), transparent 60%)",
        }}
      />

      <motion.form
        onSubmit={submit}
        initial={{ y: 30, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="glass-rose relative w-full max-w-md rounded-3xl p-10 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full glass"
        >
          <Heart className="h-6 w-6 text-rose" fill="currentColor" />
        </motion.div>

        <h1 className="font-serif-display text-3xl md:text-4xl text-gradient-rose">
          For My Babygirl
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A secret space, woven just for you.
          <br />
          Whisper the magic word to come inside.
        </p>

        <motion.div
          animate={error ? { x: [0, -8, 8, -6, 6, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="mt-8"
        >
          <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
            <KeyRound className="h-4 w-4 text-rose-glow" />
            <input
              type="password"
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="the magic word…"
              className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
            />
          </div>
          {error && (
            <p className="mt-3 text-xs text-rose-glow/90">Not quite. Try again, my love.</p>
          )}
        </motion.div>

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-rose to-violet-soft px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.13_35/0.6)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
        >
          Enter
        </button>

        <p className="mt-6 font-hand text-base text-rose-glow/80">— yours, always</p>
      </motion.form>
    </motion.div>
  );
}
