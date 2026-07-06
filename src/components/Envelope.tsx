import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Envelope({ letter }: { letter: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="env"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.8 }}
            className="group relative block w-full aspect-[3/2] cursor-pointer soft-shadow"
          >
            <div className="absolute inset-0 bg-[color:var(--ivory)] overflow-hidden border border-rose">
              <div
                className="absolute inset-x-0 top-0 h-1/2 bg-[color:var(--blush)] border-b border-rose"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-14 h-14 rounded-full bg-[color:var(--lavender)] grid place-items-center text-ivory text-2xl shadow-md"
                >
                  ♥
                </motion.div>
              </div>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 eyebrow text-lavender/70">
                clique para abrir
              </span>
            </div>
          </motion.button>
        ) : (
          <motion.article
            key="letter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="paper p-8 md:p-16 text-left soft-shadow relative"
          >
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-rose" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-rose" />
            <p className="font-hand text-4xl md:text-5xl text-[color:var(--lavender)] mb-8">
              Sâmia,
            </p>
            <p className="whitespace-pre-line font-body text-base md:text-lg leading-[1.9] text-lavender/85">
              {letter}
            </p>
            <div className="mt-10 flex items-center justify-end gap-3">
              <span className="rule-short" />
              <p className="font-hand text-3xl text-[color:var(--lavender)]">Gustavo ❤️</p>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
