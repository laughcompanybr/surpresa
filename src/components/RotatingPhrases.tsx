import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PHRASES = [
  "Ela mudou a minha vida.",
  "Tudo começou com um ‘Lindaaaaa 😍’.",
  "Eu escolheria ela em qualquer linha do tempo.",
  "Ela é minha parte favorita de qualquer dia.",
];

export function RotatingPhrases() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % PHRASES.length), 4200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-28 md:h-36 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-3xl md:text-5xl text-center text-lavender px-6 leading-tight"
        >
          {PHRASES[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
