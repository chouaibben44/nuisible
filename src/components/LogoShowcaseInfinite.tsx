// src/components/LogoShowcaseSolid.tsx
import React, { useEffect, useRef } from "react";

import foncia from "@/images/foncia.svg";
import ibisBudget from "@/images/Ibis-budget.svg";
import prefetIDF from "@/images/prefet-de-la-region-d'ile-de-france.svg";
import proxiserve from "@/images/proxiserve.svg";
import razelBec from "@/images/razel-bec.jpg";
import vinci from "@/images/vinci-construction.svg";
import ars from "@/images/ars.svg";

const LOGOS = [
  { src: foncia, alt: "Foncia" },
  { src: ibisBudget, alt: "Ibis Budget" },
  { src: prefetIDF, alt: "Préfecture de la région Île-de-France" },
  { src: proxiserve, alt: "Proxiserve" },
  { src: razelBec, alt: "Razel-Bec" },
  { src: vinci, alt: "Vinci Construction" },
  { src: ars, alt: "ARS" },
];

export default function LogoShowcaseSolid() {
  const seqRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!seqRef.current || !trackRef.current) return;

    const setVars = () => {
      const distance = seqRef.current!.offsetWidth;
      // Slower speed (was 90). 70 = slightly slower motion.
      const SPEED = 40; // px per second
      const duration = distance / SPEED;

      trackRef.current!.style.setProperty("--loop-distance", `${distance}px`);
      trackRef.current!.style.setProperty("--duration", `${duration}s`);
    };

    setVars();
    const ro = new ResizeObserver(setVars);
    ro.observe(seqRef.current!);
    window.addEventListener("resize", setVars);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVars);
    };
  }, []);

  return (
    <section aria-label="Ils nous font confiance" className="w-full mb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden">
          <div className="logo-mask">
            <div ref={trackRef} className="ticker">
              {/* Sequence A — measured for loop distance */}
              <div ref={seqRef} className="sequence">
                {LOGOS.map((l, i) => (
                  <LogoBox key={`a-${i}`} src={l.src} alt={l.alt} />
                ))}
              </div>

              {/* Spacer to keep the same gap at the seam */}
              <div className="inter-sequence-spacer" aria-hidden="true" />

              {/* Sequence B — exact duplicate */}
              <div className="sequence" aria-hidden="true">
                {LOGOS.map((l, i) => (
                  <LogoBox key={`b-${i}`} src={l.src} alt={l.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root { --gap: 2.25rem; --logo-h: 3rem; }
        @media (min-width: 768px) { :root { --gap: 2.75rem; --logo-h: 3.5rem; } }
        @media (min-width: 1024px) { :root { --gap: 3rem;   --logo-h: 4rem; } }

        .logo-mask{
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }

        .ticker{
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          animation: scroll var(--duration, 30s) linear infinite;
          transform: translate3d(0,0,0);
        }

        .sequence{
          display: inline-flex;
          align-items: center;
          gap: var(--gap);
        }

        /* This spacer ensures the SAME gap between the end of A and start of B */
        .inter-sequence-spacer{
          width: var(--gap);
          flex: 0 0 var(--gap);
        }

        @keyframes scroll {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(calc(-1 * var(--loop-distance, 0px)), 0, 0); }
        }

        @media (prefers-reduced-motion: reduce){
          .ticker{ animation: none; }
        }
      `}</style>
    </section>
  );
}

function LogoBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "var(--logo-h)",
        width: "140px",   // equal footprint for each logo
        flex: "0 0 auto",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ maxHeight: "100%", width: "100%", objectFit: "contain", display: "block", margin: 0 }}
        className="opacity-85 saturate-0 contrast-125 transition hover:opacity-100 hover:saturate-100"
      />
    </div>
  );
}
