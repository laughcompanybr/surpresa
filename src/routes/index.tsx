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
import primeiraConversa from "@/images/primeiraconversa.jpg";
import primeiroEncontro from "@/images/primeiroencontro.jpg";
import primeiraVezCasa from "@/images/primeiraveznacasadela.jpg";
import antesPedido from "@/images/algumashorasantesdopedidodenamoro.jpg";
import elaDisseSim from "@/images/eladissesimnopedidodenamoro.jpg";
import aliancas from "@/images/aliancas.jpg";
import fotoFossaNossa from "@/images/fotofossanossa.jpg";

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
  { id: "g1", src: "/images/primeiraconversa.jpg", date: "15 · 01 · 2026", caption: "Primeira conversa", emoji: "💬" },
  { id: "g2", src: "/images/primeiroencontro.jpg", date: "25 · 04 · 2026", caption: "Primeiro encontro", emoji: "🌅" },
  { id: "g3", src: "/images/primeiraveznacasadela.jpg", date: "23 · 05 · 2026", caption: "Primeira vez na casa dela", emoji: "🏡" },
  { id: "g4", src: "/images/algumashorasantesdopedidodenamoro.jpg", date: "06 · 06 · 2026", caption: "Algumas horas antes do pedido", emoji: "🌹" },
  { id: "g5", src: "/images/eladissesimnopedidodenamoro.jpg", date: "06 · 06 · 2026", caption: "Ela disse sim", emoji: "❤️" },
  { id: "g6", src: "/images/aliancas.jpg", date: "06 · 06 · 2026", caption: "Nossas alianças", emoji: "💍" },
  { id: "g7", src: "/images/fotofossanossa.jpg", date: "sempre", caption: "A nossa foto", emoji: "✨" },
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

/* ---------------- Timeline ---------------- */

function Timeline() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader chapter="03" eyebrow="Nossa história" title="Do primeiro ‘oi’ ao primeiro mês" />

        <div className="mt-24 space-y-32">
          <ChapterSpread
            number="I"
            date="15 · 01 · 2026"
            title="O começo"
            image={
              <div className="space-y-8">
                <ChatSim />
                <div className="max-w-xs mx-auto text-center space-y-2 text-lavender/70 text-sm">
                  <p>Até hoje a gente ri disso.</p>
                  <p>Eu não comecei como todo mundo começaria.</p>
                  <p>E, de alguma forma… deu certo.</p>
                  <p className="italic text-lavender/50 pt-2 text-xs">
                    ⚠️ Método sem garantia de repetição.
                  </p>
                </div>
              </div>
            }
            text={
              <div className="space-y-6">
                <p className="eyebrow">Primeiro print</p>
                <div className="max-w-[240px] mx-auto md:mx-0">
                  <PhotoFrame
                    slot={{ id: "print", src: primeiraconversa.jpg, date: "15/01/2026", caption: "Primeira conversa", emoji: "💬" }}
                    aspect="aspect-[9/16]"
                  />
                </div>
                <p className="text-lavender/80 leading-relaxed">
                  Foi aqui que tudo começou de verdade. Um simples print que hoje significa uma das
                  coisas mais importantes da minha vida.
                </p>
              </div>
            }
          />

          <ChapterSpread
            number="II"
            date="25 · 04 · 2026"
            title="Nosso primeiro encontro"
            image={
              <div className="max-w-[280px] mx-auto md:max-w-none">
                <PhotoFrame slot={{ id: "encontro", src: primeiroencontro.jpg, date: "25/04/2026", caption: "Primeiro encontro", emoji: "🌅" }} />
              </div>
            }
            text={
              <div className="space-y-5 text-base md:text-lg text-lavender/85 leading-relaxed">
                <p>Foi o nosso primeiro encontro.</p>
                <p>E também o dia da nossa primeira foto juntos.</p>
                <p className="font-display italic text-2xl md:text-3xl text-lavender pt-2">
                  O dia em que você virou real.
                </p>
              </div>
            }
          />


          <ChapterSpread
            reverse
            number="III"
            date="23 · 05 · 2026"
            title="Um dos dias mais importantes"
            image={
              <div className="max-w-[280px] mx-auto md:max-w-none">
                <PhotoFrame slot={{ id: "casa", src: primeiraveznacasadela.jpg, date: "23/05/2026", caption: "Primeira vez na casa dela", emoji: "🏡" }} />
              </div>
            }
            text={
              <div className="space-y-5 text-base md:text-lg text-lavender/85 leading-relaxed">
                <p>Nesse dia eu conheci os pais dela.</p>
                <p>E também foi o dia do nosso primeiro beijo.</p>
                <p className="font-display italic text-2xl md:text-3xl text-lavender pt-2">
                  Um dos dias mais importantes da minha vida.
                </p>
              </div>
            }
          />

          <FeatureChapter
            number="IV"
            date="06 · 06 · 2026"
            title="O dia em que tudo mudou"
          />

          <ChapterSpread
            number="V"
            date="06 · 07 · 2026"
            title="1 mês de nós"
            image={
              <div className="max-w-[280px] mx-auto md:max-w-none">
                <PhotoFrame slot={{ id: "ummes", src: aliancas.jpg, date: "06/07/2026", caption: "As nossas alianças", emoji: "💍" }} />
              </div>
            }
            text={
              <div className="space-y-5 text-base md:text-lg text-lavender/85 leading-relaxed">
                <p>Um mês pode parecer pouco pra muita gente.</p>
                <p className="font-display italic text-2xl md:text-3xl text-lavender pt-2">
                  Mas pra mim já é uma vida inteira de memórias com ela.
                </p>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
}

function ChapterSpread({
  number, date, title, image, text, reverse,
}: {
  number: string; date: string; title: string;
  image: React.ReactNode; text: React.ReactNode; reverse?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
    >
      <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>{image}</div>
      <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
        <div className="flex items-baseline gap-6 mb-4">
          <span className="font-display text-6xl md:text-7xl text-rose leading-none">{number}</span>
          <span className="h-px flex-1 bg-rose" />
        </div>
        <p className="eyebrow">{date}</p>
        <h3 className="font-display text-4xl md:text-5xl mt-3 mb-8 leading-[0.95]">{title}</h3>
        {text}
      </div>
    </motion.article>
  );
}

function FeatureChapter({ number, date, title }: { number: string; date: string; title: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative paper py-16 md:py-28 px-6 md:px-16 text-center soft-shadow overflow-hidden"
    >
      <div className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-14 md:h-14 border-t border-l border-rose" />
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-14 md:h-14 border-b border-r border-rose" />
      <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 font-display text-[9rem] md:text-[16rem] leading-none text-rose/25 select-none pointer-events-none">
        {number}
      </div>

      <p className="eyebrow relative">{date}</p>
      <h3 className="mt-6 font-display text-4xl md:text-7xl leading-[0.95] relative">
        {title}
      </h3>

      <div className="rule-short mx-auto my-10 relative" />
      <p className="max-w-2xl mx-auto font-display italic text-2xl md:text-3xl leading-relaxed text-lavender relative">
        Esse foi o dia em que tudo deixou de ser só sentimento.
      </p>
      <p className="mt-4 max-w-xl mx-auto text-lavender/70 relative">
        Ela deixou de ser apenas alguém especial pra mim — e virou oficialmente
        <span className="text-ampersand"> minha namorada.</span>
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto relative">
        <div>
          <PhotoFrame slot={{ id: "antes", src: algumashorasantesdopedidodenamoro.jpg, date: "06/06/2026", caption: "Algumas horas antes", emoji: "🌹" }} />
          <p className="eyebrow mt-4">Antes · o buquê</p>
        </div>
        <div>
          <PhotoFrame slot={{ id: "sim", src: eladissesimnopedidodenamoro.jpg, date: "06/06/2026", caption: "Ela disse sim", emoji: "❤️" }} />
          <p className="eyebrow mt-4">Depois · o sim</p>
        </div>
      </div>
    </motion.article>
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
