import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SurpriseButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-4 px-8 py-4 border border-lavender text-lavender uppercase tracking-[0.3em] text-xs font-medium hover:bg-lavender hover:text-ivory transition-colors"
      >
        Uma surpresa pra você
        <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="fixed inset-0 z-50 bg-[color:var(--lavender)] flex items-center justify-center overflow-hidden"
            onClick={() => setOpen(false)}
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  x: (Math.random() - 0.5) * 900,
                  y: (Math.random() - 0.5) * 900,
                  scale: [0, 1, 0.5],
                }}
                transition={{ duration: 4 + Math.random() * 2, delay: Math.random() * 0.8, repeat: Infinity }}
                className="absolute text-[color:var(--rose)] text-2xl md:text-3xl"
                style={{ left: "50%", top: "50%" }}
              >
                ♥
              </motion.span>
            ))}

            <div className="relative text-center px-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="eyebrow text-ivory/70"
              >
                Um segredo pequeno
              </motion.p>
              <motion.h2
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.4 }}
                className="mt-8 font-display text-6xl md:text-8xl text-ivory leading-none"
              >
                Eu te amo,
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="mt-4 font-hand text-6xl md:text-8xl text-[color:var(--rose)]"
              >
                Sâmia ❤️
              </motion.p>
            </div>

            <p className="absolute bottom-8 inset-x-0 text-center eyebrow text-ivory/50">
              toque para fechar
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
