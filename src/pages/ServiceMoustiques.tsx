import  FloatingCallButtonPortal from "@/components/FloatingCallButtonPortal";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Award, FileText } from "lucide-react";
import serviceImage from "@/assets/service-mosquitoes.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const moustiquesFAQ = [
  {
    question: "Quel est le meilleur moment pour traiter les moustiques ?",
    answer:
      "Le traitement est plus efficace au printemps (avril-mai) avant la prolifération massive. Cependant, nous intervenons toute l'année avec des traitements adaptés à chaque saison.",
  },
  {
    question: "Les produits utilisés sont-ils dangereux pour les animaux domestiques ?",
    answer:
      "Nous utilisons des produits certifiés et respectueux de l'environnement. Après traitement, un délai de sécurité de quelques heures est recommandé avant de laisser vos animaux accéder à la zone traitée.",
  },
  {
    question: "Combien de temps dure l'efficacité du traitement ?",
    answer:
      "Un traitement standard est efficace pendant 3 à 6 mois selon les conditions climatiques et l'environnement. Nous recommandons 2 à 3 traitements par an pour une protection optimale.",
  },
  {
    question: "Intervenez-vous aussi dans les jardins privés ?",
    answer:
      "Oui, nous intervenons chez les particuliers comme chez les professionnels : jardins, terrasses, espaces verts, bassins, zones humides et tout type d'extérieur.",
  },
];

const ServiceMoustiques = () => {
  return (
    <>
    
        <Helmet>
            <title>Traitement anti-moustiques – Désinsectisation efficace</title>
            <meta
              name="description"
              content="Lutte anti-moustiques pour maisons & locaux : diagnostics, traitements ciblés, conseils préventifs. Résultats rapides. Devis gratuit."
            />
          </Helmet>


      <FloatingCallButtonPortal />

      {/* Hero Section */}
      <section className="relative h-[35vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Traitement professionnel contre les moustiques
          </h1>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Intervention rapide
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Devis gratuit
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Experts agréés
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-lg">
              <a href="tel:+33698669378" aria-label="Appeler 06 98 66 93 78">
                <Phone className="mr-2 h-5 w-5" />
                06 98 66 93 78
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile-first: show the form right after the hero */}
      <section className="sm:hidden py-6">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <QuoteForm defaultService="moustiques" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
              {/* Service Description */}
              <div>
                <h2 className="mb-3 sm:mb-4 text-2xl font-bold md:text-3xl">
                  Protection anti-moustiques professionnelle
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Les moustiques représentent une menace pour le confort et la santé. Porteurs
                  potentiels de maladies, ils prolifèrent rapidement dans les zones humides et
                  peuvent transformer vos espaces extérieurs en zones invivables durant l'été.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Notre entreprise propose des solutions professionnelles adaptées à chaque
                  situation, du jardin privé aux grands espaces publics. Nos traitements combinent
                  efficacité et respect de l'environnement pour une protection durable.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-5 sm:mt-6">
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Intervention rapide</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Produits écologiques</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Award className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Efficacité prouvée</p>
                  </div>
                </div>
              </div>

              {/* Intervention Steps */}
              <div className="rounded-lg border border-border bg-muted p-6 sm:p-8">
                <h2 className="mb-4 sm:mb-6 text-2xl font-bold">Nos étapes d'intervention</h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                        Diagnostic des zones à risque
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Inspection complète de votre propriété, identification des points d'eau
                        stagnante et des zones de reproduction des moustiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Traitement ciblé</h3>
                      <p className="text-sm text-muted-foreground">
                        Application de traitements larvicides et adulticides adaptés, pulvérisation
                        des zones à traiter et installation de barrières préventives.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Suivi & Prévention</h3>
                      <p className="text-sm text-muted-foreground">
                        Contrôle de l'efficacité du traitement, conseils personnalisés et programme
                        de prévention pour éviter les récidives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">Nos traitements anti-moustiques</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Traitement larvicide</h3>
                    <p className="text-sm text-muted-foreground">
                      Élimination des larves dans les points d'eau avec des produits biologiques
                      longue durée.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Traitement adulticide</h3>
                    <p className="text-sm text-muted-foreground">
                      Pulvérisation ciblée contre les moustiques adultes dans les zones de repos.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Solutions préventives</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation de barrières physiques et répulsifs longue durée pour protection
                      continue.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Produits écologiques</h3>
                    <p className="text-sm text-muted-foreground">
                      Traitements respectueux de l'environnement, sans danger pour la faune utile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-lg bg-accent border border-accent/20 p-6 sm:p-8">
                <h2 className="mb-4 sm:mb-6 text-2xl text-white font-bold">
                  Pourquoi choisir notre entreprise ?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Méthodes écologiques :</strong> Produits certifiés
                      respectueux de l'environnement et de la biodiversité
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Efficacité durable :</strong> Traitements longue durée
                      pour une protection de plusieurs mois
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Équipe spécialisée :</strong> Techniciens formés aux
                      dernières techniques de démoustication
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Conseils personnalisés :</strong> Recommandations
                      adaptées pour prévenir les infestations futures
                    </p>
                  </div>
                </div>
              </div>

              {/* Zones d'intervention */}
              <div className="rounded-lg bg-muted p-6">
                <h3 className="mb-4 text-xl font-bold">Zones d'intervention</h3>
                <p className="mb-4 text-muted-foreground">
                  Nous intervenons sur tous types d'espaces touchés par les moustiques :
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Jardins et terrasses privés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Espaces verts collectifs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Zones humides et bassins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Entreprises et collectivités</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form (desktop / tablet only) */}
            <div className="lg:col-span-1 hidden sm:block">
              <div className="sm:sticky sm:top-24">
                <QuoteForm defaultService="moustiques" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={moustiquesFAQ} />
    </>
  );
};

export default ServiceMoustiques;
