import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/eed18b81c_generated_image.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="Premium Nederlands interieur met naadloos stucwerk en strak schilderwerk"
          fittingType="fill"
          className="w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/35 to-foreground/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 min-h-screen flex flex-col justify-end pb-20 md:pb-28 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-sm tracking-[0.5em] text-background/60 mb-8 font-medium">
            BLONDE&nbsp;&nbsp;LEEUW
          </p>
          <h1 className="font-display text-background text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-extrabold tracking-tightest text-balance">
            Kracht in<br />vakmanschap.<br />
            <span className="text-accent">Perfectie</span> in elk detail.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-background/75 max-w-xl font-light leading-relaxed">
            Professioneel stucwerk, schilderwerk en renovatie voor hoogwaardige interieurs.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent hover:text-background"
            >
              Offerte aanvragen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projecten"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-background/40 text-background text-sm font-medium tracking-wide transition-all duration-300 hover:bg-background/10"
            >
              Ons werk bekijken
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-background/50">
            Stucwerk • Schilderwerk • Renovatie
          </p>
        </motion.div>
      </div>
    </section>
  );
}