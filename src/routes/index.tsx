import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiveCounter } from "@/components/LiveCounter";
import { FloatingHearts, CornerAccents } from "@/components/FloatingHearts";
import { RotatingPhrases } from "@/components/RotatingPhrases";
import { ChatSim } from "@/components/ChatSim";
import { Envelope } from "@/components/Envelope";
import { SurpriseButton } from "@/components/SurpriseButton";
import { Gallery, PhotoFrame, type PhotoSlot } from "@/components/Gallery";
const primeiraConversa = "/images/primeiraconversa.jpg";
const primeiroEncontro = "/images/primeiroencontro.jpg";
const primeiraVezCasa = "/images/primeiraveznacasadela.jpg";
const antesPedido = "/images/algumashorasantesdopedidodenamoro.jpg";
const elaDisseSim = "/images/eladissesimnopedidodenamoro.jpg";
const aliancas = "/images/aliancas.jpg";
const fotoFossaNossa = "/images/fotofossanossa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const D = {
  conversa: new Date("2026-01-15T00:00:00"),
  encontro: new Date("2026-04-25T00:00:00"),
  beijo: new Date("2026-05-23T00:00:00"),
  namoro: new Date("2026-06-06T00:00:00"),
};

const LETTER = `Há exatamente um mês, no dia 06/06/2026, a melhor parte da minha vida começou.

Você chegou devagar, sem esforço, e mudou tudo. Meus dias antes eram só dias — depois de você, viraram lembranças que eu quero guardar pra sempre.

Eu lembro de cada detalhe: a primeira mensagem, aquele "Lindaaaaa 😍" que ainda faz a gente rir. O nosso primeiro encontro, a primeira foto, o dia em que conheci seus pais e beijei você pela primeira vez. E o dia em que, oficialmente, você virou minha.

Um mês pode parecer pouco. Mas cada segundo com você já vale uma vida inteira. Obrigado por ser calma quando eu preciso, por rir das minhas bobeiras, por me escolher todo dia.

Eu escolheria você em qualquer linha do tempo. Feliz 1 mês, meu amor.`;

const GALLERY: PhotoSlot[] = [
  {
    id: "g1",
    src: "/images/primeiraconversa.jpg",
    date: "15 · 01 · 2026",
    caption: "Primeira conversa",
    emoji: "💬",
  },
  {
    id: "g2",
    src: "/images/primeiroencontro.jpg",
    date: "25 · 04 · 2026",
    caption: "Primeiro encontro",
    emoji: "🌅",
  },
  {
    id: "g3",
    src: "/images/primeiraveznacasadela.jpg",
    date: "23 · 05 · 2026",
    caption: "Primeira vez na casa dela",
    emoji: "🏡",
  },
  {
    id: "g4",
    src: "/images/algumashorasantesdopedidodenamoro.jpg",
    date: "06 · 06 · 2026",
    caption: "Algumas horas antes do pedido",
    emoji: "🌹",
  },
  {
    id: "g5",
    src: "/images/eladissesimnopedidodenamoro.jpg",
    date: "06 · 06 · 2026",
    caption: "Ela disse sim",
    emoji: "❤️",
  },
  {
    id: "g6",
    src: "/images/aliancas.jpg",
    date: "06 · 06 · 2026",
    caption: "Nossas alianças",
    emoji: "💍",
  },
  {
    id: "g7",
    src: "/images/fotofossanossa.jpg",
    date: "sempre",
    caption: "A nossa foto",
    emoji: "✨",
  },
];

function Index() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflow = entered ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  return (
    <div className="relative min-h-screen bg-[color:var(--blush)] text-lavender">
      <FloatingHearts />
      <CornerAccents />

      <AnimatePresence>
        {!entered && <Intro onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      <main className={`relative z-10 ${entered ? "" : "pointer-events-none"}`}>
        <Hero />
        <Counters />
        <Timeline />
        <PhrasesSection />
        <GallerySection />
        <LetterSection />
        <SurpriseSection />
        <Footer />
      </main>
    </div>
  );
}

/* ---------------- Intro ---------------- */

function Intro({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(24px)" }}
      transition={{ duration: 1.1 }}
      className="fixed inset-0 z-40 bg-[color:var(--blush)] flex items-center justify-center px-6"
    >
      <div className="relative max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="rule-short mx-auto mb-12"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="eyebrow"
        >
          Memórias de Junho
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 font-display text-6xl md:text-8xl text-lavender leading-none"
        >
          Gustavo <span className="text-ampersand">&</span> Sâmia
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className="h-px w-8 bg-rose" />
          <span className="text-lavender text-lg tracking-[0.35em] font-light">06 · 06 · 2026</span>
          <span className="h-px w-8 bg-rose" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-14 max-w-md mx-auto text-lavender/70 leading-relaxed text-sm uppercase tracking-[0.25em]"
        >
          Há exatamente 1 mês, a melhor parte da minha vida começou.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          whileHover={{ y: -2 }}
          onClick={onEnter}
          className="group mt-16 inline-flex flex-col items-center gap-4"
        >
          <span className="eyebrow group-hover:text-lavender transition-colors">
            Começar nossa história
          </span>
          <span className="w-px h-14 bg-gradient-to-b from-lavender to-transparent opacity-50 group-hover:h-20 transition-all" />
        </motion.button>
      </div>
    </motion.section>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1 }} className="rule-short mx-auto mb-10" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="eyebrow"
        >
          Capítulo 01 — Uma carta
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="mt-8 font-display text-4xl md:text-7xl leading-[0.95]"
        >
          Sâmia, você transformou os meus dias comuns nas <span className="text-ampersand">melhores lembranças</span> da minha vida.
        </motion.h2>
        <motion.a
          href="#contadores"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="group mt-16 inline-flex flex-col items-center gap-4"
        >
          <span className="eyebrow">Continuar</span>
          <span className="w-px h-14 bg-gradient-to-b from-lavender to-transparent opacity-50 group-hover:h-20 transition-all" />
        </motion.a>
      </div>
    </section>
  );
}

/* ---------------- Counters ---------------- */

function Counters() {
  return (
    <section id="contadores" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader chapter="02" eyebrow="Em tempo real" title="Cada segundo desde você" />
        <div className="mt-20 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-rose/60 border-y border-rose/60">
          <LiveCounter target={D.namoro} eyebrow="06 · 06 · 2026" title="Nosso namoro" />
          <LiveCounter target={D.conversa} eyebrow="15 · 01 · 2026" title="Primeira conversa" />
          <LiveCounter target={D.encontro} eyebrow="25 · 04 · 2026" title="Primeira foto" />
          <LiveCounter target={D.beijo} eyebrow="23 · 05 · 2026" title="Primeiro beijo" />
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          chapter="03"
          eyebrow="Nossa história"
          title="Do primeiro ‘oi’ ao primeiro mês"
        />

        <div className="mt-24 space-y-32">

          {/* I */}
          <ChapterSpread
            number="I"
            date="15 · 01 · 2026"
            title="O começo"
            image={
              <div className="space-y-8">
                <ChatSim />
              </div>
            }
            text={
              <div className="space-y-6">
                <p className="eyebrow">Primeiro print</p>

                <div className="max-w-[240px] mx-auto md:mx-0">
                  <PhotoFrame
                    slot={{
                      id: "print",
                      src: "/images/primeiraconversa.jpg",
                      date: "15/01/2026",
                      caption: "Primeira conversa",
                      emoji: "💬"
                    }}
                    aspect="aspect-[9/16]"
                  />
                </div>

                <p className="text-lavender/80 leading-relaxed">
                  Foi aqui que tudo começou de verdade.
                </p>
              </div>
            }
          />

          {/* II */}
          <ChapterSpread
            number="II"
            date="25 · 04 · 2026"
            title="Nosso primeiro encontro"
            image={
              <PhotoFrame
                slot={{
                  id: "encontro",
                  src: "/images/primeiroencontro.jpg",
                  date: "25/04/2026",
                  caption: "Primeiro encontro",
                  emoji: "🌅"
                }}
              />
            }
            text={
              <p>Foi o nosso primeiro encontro.</p>
            }
          />

          {/* III */}
          <ChapterSpread
            reverse
            number="III"
            date="23 · 05 · 2026"
            title="Um dos dias mais importantes"
            image={
              <PhotoFrame
                slot={{
                  id: "casa",
                  src: "/images/primeiraveznacasadela.jpg",
                  date: "23/05/2026",
                  caption: "Primeira vez na casa dela",
                  emoji: "🏡"
                }}
              />
            }
            text={
              <p>Conheci os pais dela e mudou tudo.</p>
            }
          />

          {/* IV */}
          <FeatureChapter
            number="IV"
            date="06 · 06 · 2026"
            title="O dia em que tudo mudou"
          />

          {/* V */}
          <ChapterSpread
            number="V"
            date="06 · 07 · 2026"
            title="1 mês de nós"
            image={
              <PhotoFrame
                slot={{
                  id: "ummes",
                  src: "/images/aliancas.jpg",
                  date: "06/07/2026",
                  caption: "As nossas alianças",
                  emoji: "💍"
                }}
              />
            }
            text={
              <p>
                Um mês já significa muito mais do que parece.
              </p>
            }
          />

        </div>
      </div>
    </section>
  );
}

/* ---------------- Rotating phrases ---------------- */

function PhrasesSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rule-short mx-auto mb-8" />
        <p className="eyebrow mb-8">Entre capítulos</p>
        <RotatingPhrases />
        <div className="rule-short mx-auto mt-8" />
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */

function GallerySection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader chapter="04" eyebrow="Álbum de memórias" title="Momentos que eu quero guardar pra sempre" />
        <div className="mt-20">
          <Gallery photos={GALLERY} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Letter ---------------- */

function LetterSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader chapter="05" eyebrow="Só pra você" title="Uma carta" />
        <p className="mt-6 text-lavender/60 uppercase tracking-[0.25em] text-xs">
          Um envelope pra tudo que eu sinto
        </p>
        <div className="mt-16">
          <Envelope letter={LETTER} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Surprise ---------------- */

function SurpriseSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader chapter="06" eyebrow="Antes de terminar" title="Tem mais uma coisa" />
        <p className="mt-6 text-lavender/60 uppercase tracking-[0.25em] text-xs mb-12">
          Clica aqui embaixo, meu amor
        </p>
        <SurpriseButton />
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="pt-24 pb-16 px-6 text-center border-t border-rose/60 mt-16">
      <p className="eyebrow">Colofão</p>
      <p className="mt-6 font-hand text-3xl text-lavender">Feito por mim, com amor</p>
      <p className="mt-4 font-display text-3xl">
        Gustavo <span className="text-ampersand">&</span> Sâmia
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <span className="h-px w-8 bg-rose" />
        <span className="eyebrow">Desde 06 · 06 · 2026</span>
        <span className="h-px w-8 bg-rose" />
      </div>
    </footer>
  );
}

/* ---------------- Section header ---------------- */

function SectionHeader({ chapter, eyebrow, title }: { chapter: string; eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl md:text-6xl text-rose/70"
      >
        № {chapter}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="eyebrow mt-6"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="font-display text-4xl md:text-6xl mt-6 leading-[0.95] max-w-3xl mx-auto"
      >
        {title}
      </motion.h2>
      <div className="rule-short mx-auto mt-8" />
    </div>
  );
}
