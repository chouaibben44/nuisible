import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Leaf, Award } from 'lucide-react';
import aboutImage from '@/assets/about-company.jpg';

const values = [
  {
    icon: Users,
    title: 'Expertise & Professionnalisme',
    description: 'Une équipe de techniciens certifiés avec plus de 15 ans d\'expérience dans le traitement des nuisibles.',
  },
  {
    icon: Target,
    title: 'Efficacité garantie',
    description: 'Nous nous engageons sur des résultats durables avec une garantie de satisfaction client.',
  },
  {
    icon: Leaf,
    title: 'Respect de l\'environnement',
    description: 'Utilisation exclusive de produits certifiés et méthodes respectueuses de l\'écosystème.',
  },
  {
    icon: Award,
    title: 'Certifications officielles',
    description: 'Agréments ministériels, certifications Certibiocide et assurance décennale pour votre tranquillité.',
  },
];

const milestones = [
  { year: '2008', event: 'Création de l\'entreprise' },
  { year: '2012', event: 'Obtention certification Certibiocide' },
  { year: '2015', event: '1000+ interventions réussies' },
  { year: '2018', event: 'Extension géographique nationale' },
  { year: '2020', event: 'Lancement solutions écologiques' },
  { year: '2024', event: 'Leader régional reconnu' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              À propos de nous
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Votre partenaire de confiance depuis plus de 15 ans dans la lutte contre les nuisibles
            </p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-heading font-bold mb-6">Notre histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2008, Expert Nuisibles est née d'une volonté de proposer des solutions professionnelles et respectueuses de l'environnement pour l'éradication des nuisibles. Notre équipe de passionnés s'est rapidement imposée comme une référence dans le secteur.
                </p>
                <p>
                  Au fil des années, nous avons développé une expertise unique dans le traitement des pigeons, moustiques et termites, tout en maintenant notre engagement pour des méthodes écologiques et durables.
                </p>
                <p>
                  Aujourd'hui, avec plus de 5000 interventions réussies et une équipe de 20 techniciens certifiés, nous continuons à innover pour offrir les meilleures solutions à nos clients.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={aboutImage} 
                alt="Notre entreprise"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="text-center hover:shadow-soft transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Notre parcours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les étapes clés de notre développement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-3">
                    {milestone.year}
                  </div>
                  <p className="text-sm text-muted-foreground">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 animate-fade-in">
              Notre équipe
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in leading-relaxed">
              Une équipe de 20 techniciens certifiés et formés en permanence aux dernières techniques et réglementations. Chaque membre de notre équipe partage notre passion pour un service de qualité et notre engagement environnemental.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl font-heading font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Techniciens certifiés</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Interventions réussies</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
