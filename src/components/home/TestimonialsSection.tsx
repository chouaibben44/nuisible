import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Hugo Perrin',
    role: "Chef de réception, hôtel à Montpellier",
    content:
      "Ils sont intervenus la veille d’un week-end très chargé pour un plan anti-moustiques. Le soir même, les clients prenaient l’apéro en terrasse sans se plaindre. On a un passage de suivi chaque mois, simple et efficace.",
    rating: 5,
  },
  {
    name: 'Camille Robert',
    role: 'Syndic bénévole, Lyon 6e',
    content:
      "On avait des pigeons sur les corniches et les rebords. L’équipe est montée en sécurité, a posé filets et pics dans la journée, sans rien laisser derrière. Depuis, les cours restent propres et calmes.",
    rating: 5,
  },
  {
    name: 'Nora Benali',
    role: 'Propriétaire de maison, Nanterre',
    content:
      "On nous a expliqué tranquillement le protocole pour les termites dans la charpente. Ils ont traité le bois le matin et nous ont laissé un rapport clair. Trois mois plus tard, contrôle de suivi : rien à signaler, on dort mieux.",
    rating: 5,
  },
  {
    name: 'Julien Moreau',
    role: 'Gérant de bistrot, Bordeaux',
    content:
      "Intervention programmée avant le service du midi pour les pigeons. C’était rapide et discret, et la terrasse n’est plus squattée. Du devis au contrôle, la communication a été nickel.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Ils nous font confiance
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Des retours authentiques de clients que nous accompagnons au quotidien
          </p>
        </div>

        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-1">
                  <Card className="bg-card border-border hover:shadow-soft transition-shadow h-full">
                    <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                      {/* Rating */}
                      <div
                        className="flex gap-1 mb-4"
                        aria-label={`${t.rating} sur 5`}
                      >
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-foreground mb-6 italic leading-relaxed break-words">
                        “{t.content}”
                      </p>

                      {/* Name / role */}
                      <div className="mt-auto border-t border-border pt-4">
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls: compact on mobile, larger from md */}
          <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 bg-white/90 backdrop-blur border shadow hover:bg-white">
            <span className="sr-only">Précédent</span>
          </CarouselPrevious>
          <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 bg-white/90 backdrop-blur border shadow hover:bg-white">
            <span className="sr-only">Suivant</span>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
