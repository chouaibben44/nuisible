import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bird, Bug, Home, ChevronDown, ShieldCheck } from 'lucide-react';
import pigeonImage from '@/assets/service-pigeons.jpg';
import mosquitoImage from '@/assets/service-mosquitoes.jpg';
import termiteImage from '@/assets/service-termites.jpg';

type ItemKey = 'pigeons' | 'mosquitoes' | 'termites';

type Item = {
  key: ItemKey;
  title: string;
  content: string;
  bullets: string[];
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** NEW: page link for this tab */
  link: string;
};

const ITEMS: Item[] = [
  {
    key: 'pigeons',
    title: 'Lutte contre les pigeons',
    content:
      "Après un diagnostic précis des zones de perchage et de nidification (toitures, corniches, cours intérieures), nous concevons une solution sur mesure qui combine filets, pics, câbles tendus et répulsifs selon la configuration. La pose est réalisée par des techniciens habilités au travail en hauteur, avec ancrages soignés et respect total de l’architecture. Résultat : une protection durable, discrète et conforme, qui stoppe les salissures, bruits et dégradations liées aux volatiles.",
    bullets: [
      'Audit & plan de pose',
      'Dispositifs discrets durables',
      'Intervention en hauteur',
    ],
    image: pigeonImage,
    icon: Bird,
    link: '/services/depigeonnage', // <-- set your route here
  },
  {
    key: 'mosquitoes',
    title: 'Éradication des moustiques',
    content:
      "Nous reprenons le contrôle de vos extérieurs grâce à un programme saisonnier calibré : traitement larvicide des eaux stagnantes, action adulticide ciblée et conseils de prévention pour limiter la recolonisation. Nos protocoles à faible impact respectent votre cadre de vie et maintiennent l’efficacité dans le temps grâce à un suivi et des passages planifiés en fonction des pics d’activité.",
    bullets: [
      'Traitement larvaire ciblé',
      'Programme saisonnier',
      'Prévention & suivi',
    ],
    image: mosquitoImage,
    icon: Bug,
    link: '/services/desinsectisation-moustiques', // <-- set your route here
  },
  {
    key: 'termites',
    title: 'Traitement des termites',
    content:
      "Nos équipes qualifiées réalisent la détection, cartographient les foyers et déploient des barrières et traitements curatifs certifiés. Chaque étape est tracée (percements, injections, contrôle) et fait l’objet d’un rapport détaillé afin d’assurer la protection structurelle dans la durée. Objectif : stopper la progression, sécuriser la valeur du bâti et éviter les réparations coûteuses.",
    bullets: [
      'Diagnostic & cartographie',
      'Barrières certifiées',
      'Traçabilité complète',
    ],
    image: termiteImage,
    icon: ShieldCheck,
    link: '/services/desinsectisation-termites', // <-- set your route here
  },
];

const NuisibleShowcase = () => {
  const [active, setActive] = useState<ItemKey>('pigeons');

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-10 text-center">
          {/* pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F7F7] border px-3 py-1 text-xs tracking-wide text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            Experts en dépigeonnage & désinsectisation
          </div>

          <h2 className="mt-4 text-[28px] md:text-[36px] leading-tight font-heading font-bold tracking-tight">
            Une société spécialisée en dépigeonnage et désinsectisation
          </h2>

          {/* subtitle */}
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Intervention experte, méthodes éprouvées et accompagnement de bout en bout pour traiter durablement chaque nuisible,
            en conciliant efficacité, sécurité et respect de votre patrimoine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: accordion */}
          <div>
            <div className="space-y-4">
              {ITEMS.map(({ key, title, content, bullets, icon: Icon, link }) => {
                const open = key === active;
                return (
                  <div
                    key={key}
                    className={`rounded-2xl border transition-shadow ${
                      open ? 'border-primary/30 shadow-md' : 'border-zinc-200 shadow-sm'
                    } bg-white`}
                  >
                    <button
                      id={`header-${key}`}
                      type="button"
                      aria-expanded={open}
                      aria-controls={`panel-${key}`}
                      onClick={() => setActive(key)}
                      className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`rounded-lg border p-2 transition-colors ${
                            open ? 'border-primary/40 bg-primary/5' : 'border-zinc-200 bg-white'
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${open ? 'text-primary' : ''}`} />
                        </span>
                        <span className="font-semibold">{title}</span>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={`panel-${key}`}
                      role="region"
                      aria-labelledby={`header-${key}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-5 pt-0 text-sm leading-relaxed text-zinc-600">
                          <p>{content}</p>

                          {/* Bullets: single-line chips */}
                          <ul className="mt-4 flex flex-wrap items-start gap-2">
                            {bullets.map((b) => (
                              <li
                                key={b}
                                className="inline-flex items-center rounded-full bg-accent text-white text-[12px] leading-none font-medium px-3 py-1.5 whitespace-nowrap"
                                title={b}
                              >
                                {b}
                              </li>
                            ))}
                          </ul>

                          {/* CTA row: Devis + En savoir plus (uses item.link) */}
                          <div className="mt-5 flex items-center gap-3">
                            {/* CTA: Demander un devis uses the per-item link */}
<div className="mt-5">
  <Button
    size="sm"
    asChild
    className="bg-primary text-primary-foreground hover:bg-primary/90"
  >
    <Link to={link}>
      Demander un devis
    </Link>
  </Button>
</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: linked image with PRIMARY gradient overlay */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-white">
              {ITEMS.map((item) => (
                <img
                  key={item.key}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    item.key === active ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={item.key === active ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuisibleShowcase;
