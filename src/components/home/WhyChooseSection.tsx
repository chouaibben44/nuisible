import { CheckCircle2, Zap, Leaf, Award } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Expertise reconnue',
    description: 'Plus de 15 ans d\'expérience dans l\'éradication de nuisibles',
  },
  {
    icon: Zap,
    title: 'Intervention rapide',
    description: 'Disponibilité 24h/24 et 7j/7 pour répondre à vos urgences',
  },
  {
    icon: Leaf,
    title: 'Respect de l\'environnement',
    description: 'Utilisation de produits certifiés et écologiques',
  },
  {
    icon: Award,
    title: 'Garantie de résultats',
    description: 'Engagement de satisfaction avec garantie de résultat',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Des certifications officielles et un engagement qualité pour votre tranquillité d'esprit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={reason.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{reason.title}</h3>
                <p className="text-primary-foreground/80">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Certifié Certibiocide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Agréé par le Ministère</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Assurance décennale</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Norme ISO 9001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
