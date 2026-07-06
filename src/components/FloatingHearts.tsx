import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Heart = { id: number; left: number; delay: number; size: number; duration: number };

export function FloatingHearts({ count = 10 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);
  useEffect(() => {
    setHearts(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 18,
        size: 8 + Math.random() * 12,
        duration: 22 + Math.random() * 14,
      }))
    );
  }, [count]);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-[color:var(--lavender-soft)]/35"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: h.size,
            animation: `float-heart ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

export function CornerAccents() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="fixed top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 border-t border-l border-rose pointer-events-none z-20"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 md:w-24 md:h-24 border-b border-r border-rose pointer-events-none z-20"
        aria-hidden
      />
    </>
  );
}
