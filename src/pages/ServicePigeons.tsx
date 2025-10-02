import { FloatingCallButton } from "@/components/FloatingCallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Award, FileText } from "lucide-react";
import servicePigeons from "@/assets/service-pigeons.jpg";
import { Link } from "react-router-dom";

const pigeonsFAQ = [
  {
    question: "Quels sont les délais d'intervention pour un problème de pigeons ?",
    answer:
      "Nous intervenons sous 24h pour les situations urgentes. Pour les installations préventives, nous planifions l'intervention selon vos disponibilités, généralement sous 48-72h.",
  },
  {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer:
      "Nous intervenons partout en France métropolitaine. Notre réseau de techniciens certifiés nous permet d'assurer une présence rapide dans toutes les régions.",
  },
  {
    question: "Les solutions installées sont-elles garanties ?",
    answer:
      "Oui, tous nos systèmes anti-pigeons (filets, pics, répulsifs) sont garantis. La durée de garantie varie selon la solution choisie, de 2 à 10 ans.",
  },
  {
    question: "Est-ce que vos méthodes sont sans danger pour les pigeons ?",
    answer:
      "Absolument. Nous utilisons exclusivement des méthodes non létales conformes à la législation. Notre objectif est d'éloigner les pigeons, pas de leur nuire.",
  },
];

const ServicePigeons = () => {
  return (
    <>
      <FloatingCallButton />

      {/* HERO (même style que moustiques) */}
      <section className="relative h-[30vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicePigeons})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Éradication de pigeons professionnelle
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
              <a href="tel:+33698669378" aria-label="Appeler pour une urgence pigeons">
                <Phone className="mr-2 h-5 w-5" />
                06 98 66 93 78
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* MOBILE : formulaire juste après le héro */}
      <section className="sm:hidden py-6">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <QuoteForm defaultService="pigeons" />
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {/* Colonne gauche : contenu */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
              {/* Description */}
              <div>
                <h2 className="mb-3 sm:mb-4 text-2xl font-bold md:text-3xl">
                  Pourquoi faire appel à un expert anti-pigeons ?
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Les pigeons causent des dégâts importants aux bâtiments : leurs fientes sont corrosives et
                  détériorent les façades, toitures et structures. Ils transmettent également des maladies et
                  créent des nuisances sonores importantes.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Une intervention professionnelle est essentielle pour une éradication efficace et durable. Notre
                  entreprise agréée dispose des équipements et techniques adaptés pour traiter votre problème de
                  pigeons rapidement et en toute sécurité.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-5 sm:mt-6">
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Intervention 24h</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Certifié &amp; Assuré</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Award className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Garantie résultat</p>
                  </div>
                </div>
              </div>

              {/* Étapes d'intervention */}
              <div className="rounded-lg border border-border bg-muted p-6 sm:p-8">
                <h2 className="mb-4 sm:mb-6 text-2xl font-bold">Nos étapes d'intervention</h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Diagnostic complet</h3>
                      <p className="text-sm text-muted-foreground">
                        Inspection détaillée des zones infestées, évaluation de l'ampleur du problème et identification
                        des points d'entrée et de nidification.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Traitement &amp; Installation</h3>
                      <p className="text-sm text-muted-foreground">
                        Mise en place de solutions adaptées : installation de filets, pics anti-pigeons, systèmes
                        répulsifs et nettoyage complet des zones souillées.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Suivi &amp; Garantie</h3>
                      <p className="text-sm text-muted-foreground">
                        Contrôle post-installation, ajustements si nécessaire et garantie sur nos interventions pour
                        votre tranquillité d'esprit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">Nos solutions anti-pigeons</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Filets anti-pigeons</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation de filets discrets et résistants pour bloquer l'accès aux zones de nidification.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Pics anti-perchage</h3>
                    <p className="text-sm text-muted-foreground">
                      Pose de pics inox pour empêcher les pigeons de se poser sur rebords et corniches.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Nettoyage &amp; Désinfection</h3>
                    <p className="text-sm text-muted-foreground">
                      Élimination complète des fientes, nids et parasites avec désinfection totale.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Systèmes répulsifs</h3>
                    <p className="text-sm text-muted-foreground">
                      Solutions sonores, visuelles ou olfactives adaptées à votre environnement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pourquoi nous */}
              <div className="rounded-lg text-white bg-accent border border-accent/20 p-8">
                <h2 className="mb-6 text-2xl font-bold">Pourquoi choisir notre entreprise ?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Intervention rapide :</strong> Disponibilité sous 24h pour les urgences partout en France
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Expertise reconnue :</strong> Plus de 15 ans d'expérience et des milliers d'interventions réussies
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Certifications officielles :</strong> Entreprise agréée, assurée et conforme aux normes
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Satisfaction garantie :</strong> Garantie sur toutes nos installations et suivi personnalisé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : formulaire sticky (desktop/tablette) */}
            <aside className="hidden sm:block lg:col-span-1">
              <div className="sm:sticky sm:top-24">
                <QuoteForm defaultService="pigeons" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={pigeonsFAQ} />
    </>
  );
};

export default ServicePigeons;
