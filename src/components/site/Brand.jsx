import React from "react";
import { Image } from "@/components/ui/image";

const LOGO_TRANSPARENT = "https://base44.app/api/apps/6a8d9748d1d93b5e005f9c2f/files/mp/public/6a8d9748d1d93b5e005f9c2f/9e512509c_blonde-leeuw-logo-transparent.png";

/** Blonde Leeuw logo: gold lion head + architectural paint-roller emblem,
 *  a true transparent PNG that works on light and dark surfaces alike. */
export function Mascot({ size = 34, className = "" }) {
  return (
    <Image
      src={LOGO_TRANSPARENT}
      alt="BLONDE LEEUW"
      fittingType="fit"
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function Logo({ variant = "dark", stacked = true, mark = true, className = "" }) {
  const ink = variant === "light" ? "text-background" : "text-foreground";
  return (
    <span className={`inline-flex items-center gap-3 ${ink} ${className}`}>
      {mark && <Mascot size={stacked ? 46 : 40} />}
      <span className="leading-[0.9] tracking-[0.18em] font-display font-extrabold">
        {stacked ? (
          <span className="flex flex-col text-[15px] sm:text-base">
            <span>BLONDE</span>
            <span>LEEUW</span>
          </span>
        ) : (
          <span className="text-base sm:text-lg">BLONDE LEEUW</span>
        )}
      </span>
    </span>
  );
}