import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./GalleryCarousel.css";

/**
 * Robust asset resolution for Vite/Netlify:
 * - import.meta.glob eagerly imports and returns URLs that survive production bundling
 * - Keys must match your actual file names under /src/images (case-sensitive)
 */
const imageModules = import.meta.glob("/src/images/*", { eager: true, as: "url" });

const fileNames = [
  "Injection de traitement anti-termites dans la charpente.webp",
  "Inspection de charpente pour détection de termites.webp",
  "Traitement anti-termites en extérieur.webp",
  "Traitement anti-termites sur bois extérieur.webp",
  "Traitement anti-termites sur façade et charpente extérieure.webp",
  "Traitement anti-termites sur poutre de charpente.webp",
  "Traitement des charpentes contre les termites.webp",
  "Traitement préventif anti-termites sur façade bois.webp",
];

const alts = [
  "Injection de traitement anti-termites dans la charpente",
  "Inspection de charpente pour détection de termites",
  "Traitement anti-termites en extérieur",
  "Traitement anti-termites sur bois extérieur",
  "Traitement anti-termites sur façade et charpente extérieure",
  "Traitement anti-termites sur poutre de charpente",
  "Traitement des charpentes contre les termites",
  "Traitement préventif anti-termites sur façade bois",
];

type Slide = { src: string; alt: string; caption: string };

export default function GalleryCarousel() {
  // Resolve each filename to a bundled URL via the glob map
  const slides: Slide[] = useMemo(() => {
    return fileNames
      .map((name, i) => {
        // Find the module key in the glob result that ends with our file name
        const entry = Object.entries(imageModules).find(([key]) => key.endsWith(name));
        const src = entry?.[1] as string | undefined;
        if (!src) return null;
        const alt = alts[i] ?? name.replace(/\.webp$/i, "");
        return { src, alt, caption: alt };
      })
      .filter((x): x is Slide => Boolean(x));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const open = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Robust pagination binding: use a ref + onBeforeInit
  const pagRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="gc-root">
      <div className="container mx-auto px-4">
        <div className="gc-wrap">
          <div className="gc-track">
            {/* External arrows (half in / half out, all breakpoints) */}
            <button className="gc-arrow gc-prev" aria-label="Précédent">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={12}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={{ prevEl: ".gc-prev", nextEl: ".gc-next" }}
              pagination={{
                el: pagRef.current,
                clickable: true,
                renderBullet: (_i, className) =>
                  `<span class="gc-bullet ${className}"></span>`,
              }}
              onBeforeInit={(swiper) => {
                // Ensure Swiper attaches to the real element in both dev and prod
                if (pagRef.current) {
                  // @ts-expect-error - Swiper's typing is permissive at runtime
                  swiper.params.pagination.el = pagRef.current;
                }
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              aria-label="Galerie d’images"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <button
                    className="gc-tile"
                    onClick={() => open(i)}
                    aria-label={`Ouvrir l’image : ${s.alt}`}
                  >
                    <img className="gc-image" src={s.src} alt={s.alt} loading="lazy" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="gc-arrow gc-next" aria-label="Suivant">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M9 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Pagination BELOW — ref used for reliable binding */}
          <div className="gc-pagination" ref={pagRef} />
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="gc-lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Agrandissement d’image"
        >
          <div className="gc-lb-topbar" onClick={(e) => e.stopPropagation()}>
            <span className="gc-lb-count">
              {index + 1} / {slides.length}
            </span>
            <button className="gc-lb-close" onClick={close} aria-label="Fermer">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="gc-lb-stage" onClick={(e) => e.stopPropagation()}>
            <button className="gc-lb-nav gc-lb-prev" onClick={prev} aria-label="Image précédente">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>

            <img
              className="gc-lb-image"
              src={slides[index].src}
              alt={slides[index].alt}
            />

            <button className="gc-lb-nav gc-lb-next" onClick={next} aria-label="Image suivante">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>

          <figcaption className="gc-lb-caption">{slides[index].caption}</figcaption>
        </div>
      )}
    </section>
  );
}
