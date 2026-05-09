import { useEffect, useState } from "react";

// Set to a recent past date — adjust as needed
const SINCE = new Date();
SINCE.setDate(SINCE.getDate() - 12);
SINCE.setHours(SINCE.getHours() - 5);

function diff(now: Date) {
  let s = Math.max(0, Math.floor((now.getTime() - SINCE.getTime()) / 1000));
  const days = Math.floor(s / 86400); s -= days * 86400;
  const hours = Math.floor(s / 3600); s -= hours * 3600;
  const mins = Math.floor(s / 60); s -= mins * 60;
  return { days, hours, mins, secs: s };
}

export function MissingCounter() {
  const [t, setT] = useState(() => diff(new Date()));
  useEffect(() => {
    const id = setInterval(() => setT(diff(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  const Cell = ({ v, label }: { v: number; label: string }) => (
    <div className="glass flex min-w-20 flex-col items-center rounded-2xl px-4 py-3 sm:min-w-24">
      <span className="font-serif-display text-3xl text-gradient-rose tabular-nums sm:text-4xl">
        {String(v).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <Cell v={t.days} label="Days" />
      <Cell v={t.hours} label="Hours" />
      <Cell v={t.mins} label="Mins" />
      <Cell v={t.secs} label="Secs" />
    </div>
  );
}
