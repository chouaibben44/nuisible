import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bird,
  Bug,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Clock3,
  Worm,
  Droplets,
  Zap,
} from "lucide-react";
import * as React from "react";
import moleRaw from "@/assets/mole.svg?raw";
import waspRaw from "@/assets/wasp.svg?raw";

/** Parse <svg …viewBox="…">…</svg> into {viewBox, inner} and strip inline fill/stroke/colors */
function parseSvg(raw: string) {
  const viewBox = (raw.match(/viewBox="([^"]+)"/i) || [])[1] || "0 0 24 24";
  // strip outer <svg> wrapper
  let inner = raw.replace(/^[\s\S]*?<svg[^>]*>/i, "").replace(/<\/svg>\s*$/i, "");

  // Remove any inline color/style so root props control appearance
  inner = inner
    .replace(/\sfill\s*=\s*("[^"]*"|'[^']*')/gi, "")
    .replace(/\sstroke\s*=\s*("[^"]*"|'[^']*')/gi, "")
    .replace(/\sstyle\s*=\s*("[^"]*"|'[^']*')/gi, "");

  return { viewBox, inner };
}

/** Inline fill icon: 24x24 box, fill = currentColor (so `text-*` controls color) */
const makeLucideFillIcon =
  (raw: string) =>
  ({ className = "" }: { className?: string }) => {
    const { viewBox, inner } = React.useMemo(() => parseSvg(raw), [raw]);
    return (
      <svg
        aria-hidden
        viewBox={viewBox}
        width="24"
        height="24"
        className={`inline-block align-middle ${className}`}
        fill="currentColor"
        stroke="none"
        focusable="false"
        dangerouslySetInnerHTML={{ __html: inner }}
      />
    );
  };

// Only these two are custom-filled (white via text-primary-foreground)
const MoleFilledIcon = makeLucideFillIcon(moleRaw);
const WaspFilledIcon = makeLucideFillIcon(waspRaw);

// Existing images
import pigeonImage from "@/assets/service-pigeons.jpg";
import mosquitoImage from "@/assets/service-mosquitoes.jpg";
import termiteImage from "@/assets/service-termites.jpg";

// New images
import serviceTaupe from "@/assets/service-taupe.webp";
import servicePoudrage from "@/assets/poudrage-express.webp";
import serviceXylophage from "@/assets/xylophage.webp";
import serviceDemoussage from "@/assets/demoussage.webp";
import serviceChenille from "@/assets/chenilles processionnaires.webp";

type Service = {
  icon: React.ElementType<{ className?: string }>;
  /** Extra classes just for the icon (kept for compatibility) */
  iconClass?: string;
  title: string;
  description: string;
  image: string;
  link: string;
  highlights?: string[];
};

const services: Service[] = [
  {
    icon: Bird,
    title: "Lutte contre les pigeons",
    description:
      "Filets, pics et répulsifs de qualité pro. Dispositifs discrets et durables, posés par des techniciens certifiés.",
    image: pigeonImage,
    link: "/services/depigeonnage",
    highlights: ["Intervention rapide", "Rapport détaillé", "Garantie de résultat durable"],
  },
  {
    icon: Bug,
    title: "Éradication des moustiques",
    description:
      "Plan préventif et curatif à faible impact. Traitements ciblés et suivi saisonnier pour protéger vos extérieurs.",
    image: mosquitoImage,
    link: "/services/desinsectisation-moustiques",
    highlights: ["Intervention rapide", "Procédé certifié", "Suivi post-traitement"],
  },
  {
    icon: ShieldCheck,
    title: "Traitement des termites",
    description:
      "Détection, barrières et curatif certifiés. Traçabilité complète pour préserver la valeur de vos structures.",
    image: termiteImage,
    link: "/services/desinsectisation-termites",
    highlights: ["Intervention rapide", "Procédé certifié", "Suivi post-traitement"],
  },

  // ---- NEW ----
  {
    icon: Worm,
    title: "Chenille processionnaire",
    description:
      "Échenillage, piégeage et prévention anti-urtication sécurisée pour les zones sensibles (écoles, jardins).",
    image: serviceChenille,
    link: "/services/chenille-processionnaire",
    highlights: ["Sécurisation du site", "Intervention rapide", "Anti-réinfestation"],
  },
  {
    icon: MoleFilledIcon, // will fill with currentColor (white via text-primary-foreground)
    title: "Taupe",
    description:
      "Repérage des galeries et piégeage professionnel avec suivi, pour pelouses et espaces verts préservés.",
    image: serviceTaupe,
    link: "/services/taupe",
    highlights: ["Méthodes ciblées", "Suivi inclus", "Résultat durable"],
  },
  {
    icon: Droplets,
    title: "Démoussage",
    description:
      "Nettoyage toitures/façades et traitement préventif. Méthodes adaptées pour respecter vos matériaux.",
    image: serviceDemoussage,
    link: "/services/demoussage",
    highlights: ["Protection durable", "Respect des matériaux", "Chantier propre"],
  },
  {
    icon: Bug,
    title: "Xylophages",
    description:
      "Traitements contre vrillettes, lyctus, capricornes et larves du bois. Diagnostic et protocole complet.",
    image: serviceXylophage,
    link: "/services/xylophage",
    highlights: ["Diagnostic précis", "Traitement certifié", "Suivi et conseils"],
  },
  {
    icon: WaspFilledIcon, // will fill with currentColor (white via text-primary-foreground)
    title: "Poudrage toiture express (guêpes)",
    description:
      "Neutralisation rapide des nids en hauteur par poudrage, sans démontage de toiture.",
    image: servicePoudrage,
    link: "/services/poudrage-toiture-express",
    highlights: ["Haute portée", "Sécurisé", "Efficacité rapide"],
  },
];

// Utility to chunk array into pages of N items
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const AUTO_PLAY_MS = 4500;

const ServicesSection = () => {
  // responsive slides: 1 on mobile, 3 on md+
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Compute slides whenever itemsPerSlide changes
  const slides = useMemo(() => chunk(services, itemsPerSlide), [itemsPerSlide]);
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Listen to breakpoint (md: 768px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setItemsPerSlide(mq.matches ? 3 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Keep index valid if total changes
  useEffect(() => {
    setIndex((i) => (total ? i % total : 0));
  }, [total]);

  // Autoplay (pause on hover/touch)
  useEffect(() => {
    if (paused || total <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_PLAY_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [paused, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex bg-[#F7F7F7] items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            Expertise certifiée • Intervention partout
          </div>

          <h2 className="mt-4 text-[28px] md:text-[36px] leading-tight font-heading font-bold tracking-tight">
            Nos services d&apos;expertise
          </h2>

          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Des interventions professionnelles adaptées à chaque nuisible avec un niveau d’exigence constant
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Controls */}
          <button
            type="button"
            onClick={prev}
            aria-label="Précédent"
            className="absolute -left-4 md:-left-12 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/90 p-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Suivant"
            className="absolute -right-3 md:-right-12 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/90 p-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${total * 100}%`,
                transform: `translateX(-${(index * 100) / total}%)`,
              }}
              aria-live="polite"
            >
              {slides.map((page, pageIdx) => (
                <div
                  key={`slide-${pageIdx}`}
                  className="w-full shrink-0"
                  style={{ flex: `0 0 ${100 / total}%` }}
                >
                  {/* Slide grid: 1 col on mobile, 3 cols on md+ */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {page.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.title}
                          className="group relative rounded-2xl transition-transform duration-300 hover:-translate-y-[1px]"
                        >
                          {/* subtle primary rim on hover */}
                          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-primary/15 pointer-events-none" />

                          <Card className="relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                            {/* IMAGE with overlay */}
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                              {/* icon + title over image */}
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-lg border border-white/30 bg-white/10 backdrop-blur p-2">
                                    {/* Icons use text-* color; custom ones fill with currentColor */}
                                    <Icon
                                      className={`h-5 w-5 text-primary-foreground ${service.iconClass ?? ""}`}
                                      aria-hidden
                                    />
                                  </div>
                                  <h3 className="text-lg md:text-xl font-semibold leading-none text-primary-foreground">
                                    {service.title}
                                  </h3>
                                </div>
                              </div>
                            </div>

                            {/* CONTENT */}
                            <div className="px-5 pt-4 pb-5">
                              <p className="text-[14.5px] leading-relaxed text-zinc-600">
                                {service.description}
                              </p>

                              {/* highlights */}
                              {service.highlights?.length ? (
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {service.highlights.map((h) => (
                                    <span
                                      key={h}
                                      className="whitespace-nowrap rounded-full bg-accent text-white px-2.5 py-1 text-[10px] tracking-wide border border-transparent shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                                    >
                                      {h}
                                    </span>
                                  ))}
                                </div>
                              ) : null}

                              {/* divider */}
                              <div className="mt-5 h-px w-full bg-zinc-100" />

                              {/* CTA row */}
                              <div className="mt-4 flex items-center justify-between">
                                <Button
                                  variant="link"
                                  asChild
                                  className="px-0 text-[14.5px] font-medium decoration-transparent hover:decoration-current underline-offset-[6px] hover:underline"
                                >
                                  <Link to={service.link} aria-label={`En savoir plus sur ${service.title}`}>
                                    En savoir plus
                                    <ArrowRight className="ml-2 h-4 w-4 inline-block translate-x-0 transition-transform group-hover:translate-x-[3px]" />
                                  </Link>
                                </Button>

                                <div className="flex items-center gap-2 text-[11.5px] text-zinc-500">
                                  <Clock3 className="h-3.5 w-3.5" />
                                  Devis en 24 h
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Aller au slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === i ? "bg-primary w-6" : "bg-zinc-300 w-2.5 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild className="shadow-sm hover:shadow-md transition-shadow">
            <Link to="/devis">Demander un devis gratuitement</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
