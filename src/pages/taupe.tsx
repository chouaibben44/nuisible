import { FloatingCallButton } from "@/components/FloatingCallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Award, FileText } from "lucide-react";
import serviceTaupe from "@/assets/service-taupe.webp";
import { Helmet } from "react-helmet-async";

const taupeFAQ = [
  {
    question: "Combien de temps pour éliminer les taupes ?",
    answer:
      "Le piégeage donne des résultats rapides, souvent sous 24 à 72 h sur les galeries actives. Le délai dépend de l’étendue du réseau et de l’activité du sol.",
  },
  {
    question: "Intervenez-vous sur tous types de terrains ?",
    answer:
      "Oui, jardins privés, parcs, terrains sportifs, domaines agricoles. Nous adaptons la méthode selon la nature du sol et l’usage du site.",
  },
  {
    question: "Vos méthodes sont-elles sûres pour les animaux domestiques ?",
    answer:
      "Nous privilégions des pièges professionnels placés en profondeur dans les galeries actives et balisons les zones traitées pour éviter tout accès.",
  },
  {
    question: "Faut-il plusieurs passages ?",
    answer:
      "Souvent 1 à 2 passages suffisent. Sur grands terrains, un suivi ponctuel peut être conseillé pour empêcher la recolonisation.",
  },
];

const ServiceTaupe = () => {
  return (
    <>
      <Helmet>
        <title>Traitement des taupes – Piégeage professionnel et suivi</title>
        <meta
          name="description"
          content="Suppression rapide des taupinières par piégeage professionnel. Diagnostic des galeries, placement stratégique des pièges et suivi. Devis gratuit partout en France."
        />
      </Helmet>

      <FloatingCallButton />

      {/* HERO */}
      <section className="relative h-[30vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceTaupe})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Éradication de taupes
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
              <a href="tel:+33698669378" aria-label="Appeler pour une urgence taupes">
                <Phone className="mr-2 h-5 w-5" />
                06 98 66 93 78
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* MOBILE: formulaire après le héro */}
      <section className="sm:hidden py-6">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <QuoteForm defaultService="Taupe" />
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {/* Colonne gauche */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
              {/* Pourquoi intervenir */}
              <div>
                <h2 className="mb-3 sm:mb-4 text-2xl font-bold md:text-3xl">
                  Pourquoi faire appel à un expert anti-taupes ?
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Les taupes dégradent pelouses et massifs en créant des taupinières et galeries qui fragilisent le sol.
                  Sur terrains sportifs ou jardins d’agrément, l’impact esthétique et fonctionnel peut être important.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Nos techniciens identifient les galeries actives, positionnent des pièges professionnels aux endroits
                  stratégiques et assurent un suivi pour éviter la recolonisation. L’intervention est rapide, ciblée et
                  sécurisée pour votre environnement.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-5 sm:mt-6">
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Intervention 24h</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Méthodes ciblées</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Award className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Techniciens certifiés</p>
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
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Diagnostic des galeries</h3>
                      <p className="text-sm text-muted-foreground">
                        Repérage des galeries actives, évaluation de l’activité et des zones sensibles à protéger.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Piégeage professionnel</h3>
                      <p className="text-sm text-muted-foreground">
                        Placement de pièges adaptés directement dans les galeries actives avec contrôle régulier.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Suivi &amp; prévention</h3>
                      <p className="text-sm text-muted-foreground">
                        Ajustements si nécessaire, recommandations d’entretien et plan de contrôle pour éviter le retour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">Nos solutions anti-taupes</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Piégeage mécanique</h3>
                    <p className="text-sm text-muted-foreground">
                      Pièges professionnels placés dans les galeries actives pour une efficacité rapide et ciblée.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Repérage des galeries</h3>
                    <p className="text-sm text-muted-foreground">
                      Techniques de repérage pour distinguer galeries actives et anciennes afin d’optimiser le placement.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Protection ciblée</h3>
                    <p className="text-sm text-muted-foreground">
                      Mise en place de protections locales sur zones sensibles, terrains sportifs et espaces à forte valeur.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Conseils de prévention</h3>
                    <p className="text-sm text-muted-foreground">
                      Recommandations d’entretien et de suivi pour réduire l’attractivité du terrain et prévenir la recolonisation.
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
                      <strong className="text-white">Intervention rapide :</strong> Disponibilité sous 24h partout en France
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Méthodes efficaces :</strong> Piégeage ciblé sur galeries actives, suivi rigoureux
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Techniciens certifiés :</strong> Interventions sécurisées et respectueuses du site
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Résultats durables :</strong> Conseils de prévention et plan de contrôle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite: formulaire sticky */}
            <aside className="hidden sm:block lg:col-span-1">
              <div className="sm:sticky sm:top-24">
                <QuoteForm defaultService="Taupe" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={taupeFAQ} />
    </>
  );
};

export default ServiceTaupe;
