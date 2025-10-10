import { FloatingCallButton } from "@/components/FloatingCallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Award, FileText } from "lucide-react";
import serviceDemoussage from "@/assets/demoussage.webp";
import { Helmet } from "react-helmet-async";

const demoussageFAQ = [
  {
    question: "À quelle fréquence faut-il démousser une toiture ou une façade ?",
    answer:
      "Généralement tous les 3 à 5 ans selon l’exposition, l’humidité et la végétation environnante. Un contrôle visuel annuel permet d’ajuster la cadence.",
  },
  {
    question: "Vos méthodes sont-elles sûres pour les matériaux ?",
    answer:
      "Oui. Nous adaptons la pression, les produits et la technique selon le support pour éviter toute altération des tuiles, ardoises, enduits ou bardages.",
  },
  {
    question: "Proposez-vous un traitement préventif après nettoyage ?",
    answer:
      "Oui. Nous appliquons un traitement anti-mousse préventif et des conseils d’entretien pour ralentir la repousse des micro-organismes.",
  },
  {
    question: "Dois-je être présent pendant l’intervention ?",
    answer:
      "Ce n’est pas obligatoire. Nous balisons les abords, protégeons les zones sensibles et vous transmettons les consignes de séchage et de remise en service.",
  },
];

const ServiceDemoussage = () => {
  return (
    <>
      <Helmet>
        <title>Démoussage toiture – Nettoyage et protection préventive</title>
        <meta
          name="description"
          content="Nettoyage et démoussage de toitures avec traitement préventif. Protection durable contre mousses, lichens et algues. Devis gratuit partout en France."
        />
      </Helmet>

      <FloatingCallButton />

      {/* HERO */}
      <section className="relative h-[30vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceDemoussage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Démoussage toitures
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
              <a href="tel:+33698669378" aria-label="Appeler pour un démoussage toiture ou façade">
                <Phone className="mr-2 h-5 w-5" />
                06 98 66 93 78
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* MOBILE: form just after hero */}
      <section className="sm:hidden py-6">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <QuoteForm defaultService="Démoussage" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
              {/* Why */}
              <div>
                <h2 className="mb-3 sm:mb-4 text-2xl font-bold md:text-3xl">
                  Pourquoi démousser régulièrement ?
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Mousses, lichens et algues retiennent l’humidité, favorisent les microfissures et ternissent l’aspect
                  des revêtements. Un démoussage adapté préserve l’étanchéité, la longévité et la valeur esthétique de vos
                  toitures et façades.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Nos techniciens ajustent la méthode selon le support et l’état du matériau, protègent les abords puis
                  appliquent un traitement préventif pour ralentir la repousse.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-5 sm:mt-6">
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Intervention 24h</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Méthodes adaptées</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Award className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Protection durable</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="rounded-lg border border-border bg-muted p-6 sm:p-8">
                <h2 className="mb-4 sm:mb-6 text-2xl font-bold">Nos étapes d'intervention</h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Inspection &amp; protection</h3>
                      <p className="text-sm text-muted-foreground">
                        Diagnostic du support, protection des abords et gestion des écoulements pour un chantier propre.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Nettoyage &amp; démoussage</h3>
                      <p className="text-sm text-muted-foreground">
                        Méthode douce et adaptée au matériau pour retirer mousses, lichens et salissures sans abîmer le support.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Traitement préventif</h3>
                      <p className="text-sm text-muted-foreground">
                        Application d’un anti-mousse préventif et recommandations d’entretien pour ralentir la repousse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">Nos solutions de démoussage</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Nettoyage adapté au support</h3>
                    <p className="text-sm text-muted-foreground">
                      Procédés ajustés aux tuiles, ardoises, enduits ou bardages pour préserver l’intégrité des matériaux.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Traitement anti-mousse</h3>
                    <p className="text-sm text-muted-foreground">
                      Application d’un traitement préventif pour retarder la réapparition des micro-organismes.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Protection des abords</h3>
                    <p className="text-sm text-muted-foreground">
                      Bâchage et gestion des ruissellements pour un chantier propre et sécurisé.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Conseils d’entretien</h3>
                    <p className="text-sm text-muted-foreground">
                      Recommandations simples pour maintenir la propreté des revêtements sur la durée.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why us */}
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
                      <strong className="text-white">Respect des matériaux :</strong> Méthodes adaptées et non agressives
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Techniciens certifiés :</strong> Procédures conformes et sécurisées
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Résultats durables :</strong> Traitement préventif et conseils d’entretien
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: sticky form */}
            <aside className="hidden sm:block lg:col-span-1">
              <div className="sm:sticky sm:top-24">
                <QuoteForm defaultService="Démoussage" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={demoussageFAQ} />
    </>
  );
};

export default ServiceDemoussage;
