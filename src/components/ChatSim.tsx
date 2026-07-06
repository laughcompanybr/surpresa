import { motion } from "framer-motion";

type Msg = { from: "me" | "her"; text: string };

const CONVERSA: Msg[] = [
  { from: "me", text: "Lindaaaaa 😍" },
  { from: "her", text: "Obrigadaaa 😍" },
  { from: "me", text: "Como foi seu dia hj?" },
];

export function ChatSim() {
  return (
    <div className="mx-auto max-w-sm">
      <div className="paper rounded-[2rem] overflow-hidden soft-shadow">
        <div className="px-5 py-4 flex items-center gap-3 border-b border-rose/60">
          <div className="w-9 h-9 rounded-full bg-[color:var(--lavender)] grid place-items-center text-ivory text-sm font-medium">
            S
          </div>
          <div>
            <p className="text-sm font-medium text-lavender">Sâmia</p>
            <p className="text-[10px] tracking-widest uppercase text-lavender/60">online agora</p>
          </div>
        </div>
        <div className="p-5 space-y-2 min-h-[220px] bg-[color:var(--ivory)]">
          {CONVERSA.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.7, duration: 0.6 }}
              className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <span
                className={`px-4 py-2 rounded-2xl text-sm max-w-[75%] ${
                  m.from === "me"
                    ? "bg-[color:var(--lavender)] text-ivory rounded-br-md"
                    : "bg-[color:var(--blush)] text-lavender rounded-bl-md"
                }`}
              >
                {m.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
