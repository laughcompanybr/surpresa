import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type PhotoSlot = {
  id: string;
  src?: string;
  date: string;
  caption: string;
  context?: string;
  emoji?: string;
};

export function PhotoFrame({
  slot,
  aspect = "aspect-[4/5]",
}: {
  slot: PhotoSlot;
  aspect?: string;
}) {
  return (
    <figure className={`relative w-full ${aspect} overflow-hidden group paper soft-shadow`}>
      {/* inner mat */}
      <div className="absolute inset-3 border border-rose/50 pointer-events-none z-10" />
      {slot.src ? (
        <img
          src={slot.src}
          alt={slot.caption}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-[color:var(--blush)]">
          <span className="text-4xl mb-4 opacity-70">{slot.emoji ?? "📷"}</span>
          <p className="font-display text-2xl text-lavender/70">Sua foto aqui</p>
          <p className="mt-3 eyebrow text-lavender/50">a adicionar</p>
        </div>
      )}
    </figure>
  );
}

export function Gallery({ photos }: { photos: PhotoSlot[] }) {
  const [active, setActive] = useState<PhotoSlot | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {photos.map((p, i) => (
          <motion.button
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: (i % 6) * 0.08 }}
            onClick={() => p.src && setActive(p)}
            className="text-left group"
          >
            <PhotoFrame slot={p} />
            <div className="mt-4 flex items-center gap-3">
              <span className="w-6 h-px bg-rose" />
              <p className="eyebrow">{p.date}</p>
            </div>
            <p className="font-display text-2xl text-lavender mt-1">{p.caption}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[color:var(--lavender)]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={active.src}
              alt={active.caption}
              className="max-w-full max-h-[85vh] soft-shadow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
