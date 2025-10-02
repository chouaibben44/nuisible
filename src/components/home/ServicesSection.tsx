import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bird, Bug, Home, ArrowRight, Clock3, ShieldCheck } from 'lucide-react';
import pigeonImage from '@/assets/service-pigeons.jpg';
import mosquitoImage from '@/assets/service-mosquitoes.jpg';
import termiteImage from '@/assets/service-termites.jpg';

const services = [
  {
    icon: Bird,
    title: 'Lutte contre les pigeons',
    description:
      'Filets, pics et répulsifs de qualité pro. Dispositifs discrets et durables, posés par des techniciens certifiés.',
    image: pigeonImage,
    link: '/services/depigeonnage',
    highlights: ['Intervention rapide', 'Rapport détaillé', 'Garantie de résultat durable'],
  },
  {
    icon: Bug,
    title: 'Éradication des moustiques',
    description:
      'Plan préventif et curatif à faible impact. Traitements ciblés et suivi saisonnier pour protéger vos extérieurs.',
    image: mosquitoImage,
    link: '/services/desinsectisation-moustiques',
    highlights: ['Intervention rapide', 'Procédé certifié', 'Suivi post-traitement'],
  },
  {
    icon: ShieldCheck,
    title: 'Traitement des termites',
    description:
      'Détection, barrières et curatif certifiés. Traçabilité complète pour préserver la valeur de vos structures.',
    image: termiteImage,
    link: '/services/desinsectisation-termites',
    highlights: ['Intervention rapide', 'Procédé certifié', 'Suivi post-traitement'],
  },
];

const ServicesSection = () => {
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl transition-transform duration-300 hover:-translate-y-0.5"
              >
                {/* subtle primary rim on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-primary/15 pointer-events-none" />

                <Card className="relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  {/* IMAGE with ORIGINAL OVERLAY + ORIGINAL EFFECT */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* original overlay preserved */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    {/* icon + title row over the image (bottom-left) */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-white/30 bg-white/10 backdrop-blur p-2">
                          <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold leading-none text-primary-foreground">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT block below (full width) */}
                  <div className="px-5 pt-4 pb-5">
                    <p className="text-[14.5px] leading-relaxed text-zinc-600">
                      {service.description}
                    </p>

                    {/* light chips (no gray fill) */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.highlights?.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-accent text-white px-2.5 py-1 text-[10px] tracking-wide border border-transparent shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:brightness-[1.03] focus:outline-none focus:ring-2 focus:ring-accent/40"

                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* divider */}
                    <div className="mt-5 h-px w-full bg-zinc-100" />

                    {/* CTA row with CLOCK restored */}
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
