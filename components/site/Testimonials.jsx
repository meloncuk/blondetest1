import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sophie", city: "Amsterdam", text: "Het stucwerk is werkelijk perfect afgewerkt. Strak, egaal en precies zoals afgesproken. Een team dat meedenkt en netjes levert." },
  { name: "Daan", city: "Rotterdam", text: "Onze volledige woning is gerenoveerd. Communicatie was helder, de planning werd nageleefd en het eindresultaat is prachtig." },
  { name: "Lisa", city: "Utrecht", text: "Eindelijk een schilder die met aandacht voor detail werkt. Lijnen zitten strak, geen vlekken en netjes opgeruimd." },
  { name: "Marc", city: "Den Haag", text: "Van gipsplaten plafond tot de laatste verflaag: alles door één team geregeld. Dat gaf rust en een fantastisch resultaat." },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-secondary/20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
            <span className="h-px w-10 bg-accent" /> Ervaringen
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Ervaringen van onze klanten.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-10 bg-background border border-border"
            >
              <Quote size={28} className="text-accent/40 mb-6" />
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between">
                <div>
                  <span className="block font-medium">{r.name}</span>
                  <span className="text-sm text-muted-foreground">{r.city}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={15} className="fill-accent text-accent" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}