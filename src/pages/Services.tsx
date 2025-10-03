import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bird, Bug, Home as HomeIcon, CheckCircle2, Shield, Clock } from 'lucide-react';
import pigeonImage from '@/assets/service-pigeons.jpg';
import mosquitoImage from '@/assets/service-mosquitoes.jpg';
import termiteImage from '@/assets/service-termites.jpg';

const services = [
  {
    id: 'pigeons',
    icon: Bird,
    title: 'Éradication des pigeons',
    subtitle: 'Solutions anti-volatiles professionnelles',
    description: 'Les pigeons peuvent causer d\'importants dégâts aux bâtiments et poser des problèmes d\'hygiène. Notre expertise nous permet de proposer des solutions durables et respectueuses.',
    image: pigeonImage,
    methods: [
      'Installation de filets anti-pigeons discrets',
      'Mise en place de pics répulsifs inoxydables',
      'Systèmes de répulsion électroniques',
      'Nettoyage et désinfection des zones souillées',
    ],
    benefits: [
      'Protection durable de vos façades',
      'Solutions discrètes et esthétiques',
      'Conformité aux normes de bien-être animal',
      'Maintenance et garantie incluses',
    ],
    slug: "/depigeonnage"
  },
  {
    id: 'moustiques',
    icon: Bug,
    title: 'Lutte contre les moustiques',
    subtitle: 'Traitement préventif et curatif',
    description: 'Les moustiques sont plus qu\'une nuisance : ils peuvent véhiculer des maladies. Nos traitements écologiques vous protègent efficacement tout en respectant l\'environnement.',
    image: mosquitoImage,
    methods: [
      'Traitement larvicide des zones de reproduction',
      'Pulvérisation de produits certifiés biocides',
      'Installation de pièges à moustiques',
      'Conseils de prévention personnalisés',
    ],
    benefits: [
      'Produits sûrs pour les humains et les animaux',
      'Efficacité immédiate et durable',
      'Respect de la biodiversité',
      'Traitement adapté à votre environnement',
    ],
    slug: "/desinsectisation-moustiques"
  },
  {
    id: 'termites',
    icon: HomeIcon,
    title: 'Traitement des termites',
    subtitle: 'Protection des structures et bâtiments',
    description: 'Les termites s\'attaquent silencieusement aux structures en bois et peuvent causer des dommages considérables. Une détection précoce et un traitement professionnel sont essentiels.',
    image: termiteImage,
    methods: [
      'Détection par caméra thermique et détecteur',
      'Traitement par injection dans le bois',
      'Installation de barrières chimiques',
      'Traitement du sol et des fondations',
    ],
    benefits: [
      'Protection complète de votre patrimoine',
      'Garantie décennale sur les traitements',
      'Diagnostic gratuit et complet',
      'Suivi régulier post-traitement',
    ],
     slug: "/desinsectisation-termites"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nos services professionnels
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Des solutions expertes adaptées à chaque type de nuisible, avec une garantie de résultat
            </p>
          </div>
        </div>
      </section>

      {/* Services details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <Card className="overflow-hidden border-border animate-fade-in-up">
                    <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`relative h-80 md:h-auto ${!isEven ? 'md:order-2' : ''}`}>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <div className={`p-8 md:p-12 ${!isEven ? 'md:order-1' : ''}`}>
                        <CardHeader className="p-0 mb-6">
                          <CardTitle className="text-3xl font-heading mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-base text-accent">{service.subtitle}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-0 space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>

                          <div>
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <Shield className="h-5 w-5 text-primary" />
                              Nos méthodes
                            </h3>
                            <ul className="space-y-2">
                              {service.methods.map((method, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-foreground">{method}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <Clock className="h-5 w-5 text-primary" />
                              Avantages
                            </h3>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-foreground">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button size="lg" asChild className="mt-4">
                            <Link to={`/services${service.slug}`}>Demander un devis gratuit</Link>
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Besoin d'une intervention rapide ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/devis">Demander un devis</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+33698669378">Appeler maintenant</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
