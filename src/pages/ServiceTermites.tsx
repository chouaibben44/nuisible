import { FloatingCallButton } from "@/components/FloatingCallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import {
  Phone,
  CheckCircle,
  AlertTriangle,
  Shield,
  Clock,
  Award,
  FileText,
} from "lucide-react";
import serviceTermites from "@/assets/service-termites.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GalleryCarousel from "@/components/GalleryCarousel";

const termitesFAQ = [
  {
    question: "Comment savoir si j'ai des termites chez moi ?",
    answer:
      "Les signes principaux sont : bois qui sonne creux, présence de galeries ou cordonnets sur les murs, petits trous dans le bois, amas de sciure, ou présence d'insectes ailés (essaimage). Un diagnostic professionnel est recommandé en cas de doute.",
  },
  {
    question: "Le traitement termites est-il obligatoire ?",
    answer:
      "Dans les zones déclarées à risque, un état parasitaire est obligatoire lors d'une vente immobilière. Un traitement est fortement recommandé dès détection pour éviter l'aggravation des dégâts structurels.",
  },
  {
    question: "Combien de temps dure un traitement anti-termites ?",
    answer:
      "La durée d'intervention varie selon la surface et l'ampleur de l'infestation, généralement 1 à 3 jours. L'efficacité du traitement est garantie pendant 10 ans avec notre garantie décennale.",
  },
  {
    question: "Dois-je quitter mon logement pendant le traitement ?",
    answer:
      "Pour les traitements par injection, vous pouvez généralement rester chez vous. Un délai de quelques heures peut être nécessaire selon les produits utilisés. Nous vous donnons toutes les consignes lors de l'intervention.",
  },
];

const ServiceTermites = () => {
  return (
    <>
      <Helmet>
        <title>Traitement termites – Protection & élimination durable</title>
        <meta
          name="description"
          content="Détection, pièges et barrières anti-termites. Méthodes certifiées et respectueuses. Protégez votre bien dès maintenant. Devis gratuit."
        />
      </Helmet>

      <FloatingCallButton />

      {/* HERO (same style as moustiques) */}
      <section className="relative h-[30vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceTermites})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Traitement termites certifié
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
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-lg"
            >
              <a href="tel:+33698669378" aria-label="Appeler 06 98 66 93 78">
                <Phone className="mr-2 h-5 w-5" />
                06 98 66 93 78
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* MOBILE: form right after hero (hidden from sm and up) */}
      <section className="sm:hidden py-6">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <QuoteForm defaultService="termites" />
          </div>
        </div>
      </section>

      {/* ALERT BANNER */}
      <div className="border-b border-border bg-[linear-gradient(to_right,#e52d27,#b31217)] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-urgent text-white shrink-0" />
            <p className="text-sm text-white font-medium">
              Les termites peuvent causer des dégâts structurels graves et
              invisibles. Un diagnostic précoce est essentiel pour protéger
              votre patrimoine.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE-ONLY: carousel just below the section */}
              <div className="mt-6 sm:hidden">
                <GalleryCarousel />
              </div>

      {/* MAIN CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {/* LEFT: content */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12 min-w-0">
              {/* Intro */}
              <div>
                <h2 className="mb-3 sm:mb-4 text-2xl font-bold md:text-3xl">
                  Pourquoi traiter les termites rapidement ?
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Les termites s'attaquent aux structures en bois de votre
                  habitation, causant des dommages invisibles mais
                  considérables. Une infestation non traitée peut compromettre
                  gravement la solidité de votre bâtiment et entraîner des coûts
                  de réparation très élevés.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Notre entreprise certifiée réalise un diagnostic complet et
                  met en place un traitement adapté avec garantie décennale,
                  conformément à la réglementation française. Nous protégeons
                  votre patrimoine avec des méthodes éprouvées et des produits
                  certifiés.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-5 sm:mt-6">
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Diagnostic rapide</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Certifié Certibiocide</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Award className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Garantie 10 ans</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="rounded-lg border border-border bg-muted p-6 sm:p-8">
                <h2 className="mb-4 sm:mb-6 text-2xl font-bold">
                  Notre méthode de traitement
                </h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                        Diagnostic approfondi
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Inspection complète du bâti, détection des zones
                        infectées, évaluation de l'ampleur des dégâts et
                        identification de l'espèce de termites.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                        Traitement curatif
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Injection de produits certifiés dans les bois infestés,
                        création de barrières chimiques et élimination complète
                        des colonies de termites.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                        Protection préventive
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Traitement des zones saines pour éviter une nouvelle
                        infestation, mise en place de barrières protectrices et
                        garantie décennale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">
                  Nos solutions anti-termites
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">
                      Traitement par injection
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Injection de produits termicides certifiés directement
                      dans les bois infestés et les maçonneries.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Barrière chimique</h3>
                    <p className="text-sm text-muted-foreground">
                      Création d'une zone de protection périmétrique pour
                      bloquer l'accès aux termites.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Pièges à termites</h3>
                    <p className="text-sm text-muted-foreground">
                      Installation de systèmes de détection et d'élimination
                      pour contrôle continu.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Garantie décennale</h3>
                    <p className="text-sm text-muted-foreground">
                      Protection assurée pendant 10 ans avec contrôles réguliers
                      et ré-intervention si nécessaire.
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
                      <strong className="text-white">
                        Certification Certibiocide :
                      </strong>{" "}
                      Agrément officiel pour l'utilisation de produits
                      termicides professionnels
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">
                        Diagnostic gratuit et détaillé :
                      </strong>{" "}
                      Inspection complète avec rapport photographique et plan
                      d'action
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">
                        Garantie décennale :
                      </strong>{" "}
                      Protection de 10 ans sur tous nos traitements
                      anti-termites
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">
                        Conformité réglementaire :
                      </strong>{" "}
                      Respect strict des normes et obligations légales en
                      vigueur
                    </p>
                  </div>
                </div>
              </div>

              {/* Warning signs */}
              <div className="rounded-lg bg-muted p-6">
                <h3 className="mb-4 text-xl font-bold">
                  Signes d'infestation de termites
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Faites appel à nos experts si vous observez l'un de ces signes
                  :
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-5 w-5 text-urgent shrink-0" />
                    <span className="text-sm">
                      Présence de galeries ou cordonnets sur les murs
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-5 w-5 text-urgent shrink-0" />
                    <span className="text-sm">
                      Bois qui sonne creux au toucher
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-5 w-5 text-urgent shrink-0" />
                    <span className="text-sm">
                      Petits trous d'envol dans le bois
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-5 w-5 text-urgent shrink-0" />
                    <span className="text-sm">
                      Amas de sciure ou débris de bois
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-5 w-5 text-urgent shrink-0" />
                    <span className="text-sm">
                      Présence d'insectes ailés (essaimage)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-1 h-5 w-5 text-urgent shrink-0" />
                    <span className="text-sm">
                      Déformations des portes ou fenêtres
                    </span>
                  </div>
                </div>
              </div>

              {/* Legal info */}
              <div className="rounded-lg border border-urgent bg-urgent/5 p-6">
                <h3 className="mb-3 text-xl font-bold text-urgent">
                  Obligations légales
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dans les zones déclarées à risque par arrêté préfectoral, un
                  état parasitaire est obligatoire lors d'une vente immobilière.
                  En cas de présence de termites, le propriétaire doit faire
                  réaliser un traitement dans les meilleurs délais.
                </p>
                <p className="text-sm text-muted-foreground">
                  Protégez votre patrimoine immobilier avec un traitement
                  certifié et conforme à la réglementation.
                </p>
              </div>
            </div>

            {/* RIGHT: sticky form (desktop/tablet) */}
            <aside className="hidden sm:block lg:col-span-1">
              <div className="sticky top-6 z-10">
                {" "}
                {/* Added z-index */}
                <div className="rounded-xl border bg-white p-6 shadow-lg">
                  <QuoteForm defaultService="termites" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* (Optional) Desktop/tablet only */}
      <div className="hidden sm:block">
        <GalleryCarousel />
      </div>

      {/* FAQ */}
      <FAQSection items={termitesFAQ} />
    </>
  );
};

export default ServiceTermites;
