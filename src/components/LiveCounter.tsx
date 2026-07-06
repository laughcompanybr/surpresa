import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Diff = { days: number; hours: number; minutes: number; seconds: number };

function calc(target: Date): Diff {
  const ms = Math.max(0, Date.now() - target.getTime());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function useCountUp(target: Date): Diff {
  const [diff, setDiff] = useState<Diff>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setDiff(calc(target));
    const id = setInterval(() => setDiff(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return diff;
}

export function LiveCounter({
  target, eyebrow, title,
}: { target: Date; eyebrow: string; title: string }) {
  const d = useCountUp(target);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-center px-4 py-8"
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h3 className="font-display text-3xl md:text-4xl text-lavender">{title}</h3>
      <div className="mt-6 flex items-baseline justify-center gap-3 md:gap-5 tabular-nums">
        <Unit v={d.days} l="dias" />
        <Sep />
        <Unit v={d.hours} l="hrs" />
        <Sep />
        <Unit v={d.minutes} l="min" />
        <Sep />
        <Unit v={d.seconds} l="seg" />
      </div>
    </motion.div>
  );
}

function Unit({ v, l }: { v: number; l: string }) {
  return (
    <div className="flex flex-col items-center min-w-[56px]">
      <span className="font-display text-4xl md:text-5xl text-lavender">
        {String(v).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-lavender/60">{l}</span>
    </div>
  );
}
function Sep() {
  return <span className="text-lavender/30 font-display text-3xl">·</span>;
}
