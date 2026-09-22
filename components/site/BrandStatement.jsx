import React from "react";
import { motion } from "framer-motion";
import { Mascot } from "@/components/site/Brand";

export default function BrandStatement() {
  return (
    <section className="relative py-32 md:py-56 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Mascot variant="light" size={620} className="opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-accent mb-10"
        >
          BLONDE LEEUW
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tightest text-balance max-w-5xl mx-auto leading-[1.05]"
        >
          Geen snelle afwerking.<br />
          <span className="text-accent">Wel perfect vakmanschap.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-10 text-lg text-background/60 max-w-xl mx-auto leading-relaxed"
        >
          Bij BLONDE LEEUW geloven we dat kwaliteit zichtbaar is in de details die anderen niet zien.
        </motion.p>
      </div>
    </section>
  );
}