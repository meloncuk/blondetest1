import React from "react";
import { motion } from "framer-motion";

const stats = [
  { v: "100%", l: "Focus op kwaliteit" },
  { v: "10+", l: "Jaar ervaring" },
  { v: "★★★★★", l: "Klanttevredenheid" },
  { v: "1", l: "Vast aanspreekpunt" },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
            <span className="h-px w-10 bg-accent" /> Waarom MURA
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Waarom kiezen voor ons?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-foreground p-8 md:p-12 flex flex-col justify-between min-h-[220px] md:min-h-[280px]"
            >
              <span className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tightest text-accent">
                {s.v}
              </span>
              <span className="mt-6 text-sm md:text-base text-background/70 tracking-wide">{s.l}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}