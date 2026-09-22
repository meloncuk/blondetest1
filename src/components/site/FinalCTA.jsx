import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Image } from "@/components/ui/image";

const CTA_IMG = "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/4b19a2317_generated_image.png";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <Image
          src={CTA_IMG}
          alt="Luxe interieur met pas afgewerkte wanden"
          fittingType="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/65" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 py-28 md:py-48 text-center">
        <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-background text-balance">
            Klaar om uw ruimte naar een hoger niveau te tillen?
          </h2>
          <p className="mt-8 text-lg md:text-xl text-background/75 max-w-xl mx-auto leading-relaxed">
            Vertel ons over uw project. Wij denken graag met u mee.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:text-background">
              Vraag een offerte aan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="tel:+31687942926" className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-background/40 text-background text-sm font-medium tracking-wide transition-all duration-300 hover:bg-background/10">
              <Phone size={15} />
              Neem contact op
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}