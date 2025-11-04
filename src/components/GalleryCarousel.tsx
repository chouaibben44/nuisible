import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./GalleryCarousel.css";

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

export default function GalleryCarousel() {
  const slides = useMemo(
    () =>
      fileNames.map((name, i) => ({
        src: new URL(`/src/images/${name}`, import.meta.url).toString(),
        alt: alts[i],
        caption: alts[i],
      })),
    []
  );

  // Lightbox
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

  // Swiper element refs (fixes missing pagination)
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const pagRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="gc-root">
      <div className="container mx-auto px-4">
        <div className="gc-wrap">
          <div className="gc-track">
            {/* external arrows (half outside) */}
            <button
              ref={prevRef}
              className="gc-arrow gc-prev"
              aria-label="Précédent"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
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
              breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              aria-label="Galerie d’images"
              onBeforeInit={(swiper) => {
                // wire refs before init
                // @ts-expect-error: Swiper types are permissive here
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-expect-error
                swiper.params.navigation.nextEl = nextRef.current;
                // @ts-expect-error
                swiper.params.pagination.el = pagRef.current;
              }}
              onSwiper={(swiper) => {
                // ensure they’re picked up in React strict/double render
                setTimeout(() => {
                  swiper.navigation.init();
                  swiper.navigation.update();
                  swiper.pagination.init();
                  swiper.pagination.update();
                }, 0);
              }}
              navigation // enabled via refs above
              pagination={{
                clickable: true,
                renderBullet: (_i, className) =>
                  `<span class="gc-bullet ${className}"></span>`,
              }}
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <button
                    className="gc-tile"
                    onClick={() => open(i)}
                    aria-label={`Ouvrir l’image : ${s.alt}`}
                  >
                    <img
                      className="gc-image"
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={nextRef}
              className="gc-arrow gc-next"
              aria-label="Suivant"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
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

          {/* Pagination BELOW the track */}
          <div ref={pagRef} className="gc-pagination" />
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
            <div className="gc-lb-title" title={slides[index].caption}>
              <strong>{slides[index].caption}</strong>
            </div>
            <div className="gc-lb-right">
              <span className="gc-lb-count">
                {index + 1} / {slides.length}
              </span>
              <button
                className="gc-lb-close"
                onClick={close}
                aria-label="Fermer"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6l-12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="gc-lb-stage" onClick={(e) => e.stopPropagation()}>
            <button
              className="gc-lb-nav gc-lb-prev"
              onClick={prev}
              aria-label="Image précédente"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <img
              className="gc-lb-image"
              src={slides[index].src}
              alt={slides[index].alt}
            />

            <button
              className="gc-lb-nav gc-lb-next"
              onClick={next}
              aria-label="Image suivante"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
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

          <figcaption className="gc-lb-caption">
            {slides[index].caption}
          </figcaption>
        </div>
      )}
    </section>
  );
}
