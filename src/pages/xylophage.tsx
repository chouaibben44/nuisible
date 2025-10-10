import { FloatingCallButton } from "@/components/FloatingCallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Award, FileText } from "lucide-react";
import serviceXylophage from "@/assets/xylophage.webp";
import { Helmet } from "react-helmet-async";

const xylophageFAQ = [
  {
    question: "Quels insectes xylophages traitez-vous ?",
    answer:
      "Nous traitons les insectes du bois tels que les vrillettes, les lyctus, les capricornes et autres larves de bois responsables de galeries et de vermoulure.",
  },
  {
    question: "Comment savoir si le bois est attaqué ?",
    answer:
      "Présence de petits trous d’envol, sciure fine, son creux au sondage, galeries visibles et fragilisation des pièces en sont des signes fréquents. Un diagnostic visuel et sonore permet de confirmer l’activité.",
  },
  {
    question: "Quel type de traitement appliquez-vous ?",
    answer:
      "Selon l’épaisseur et l’état du bois: brossage et dépoussiérage, puis injection en profondeur et pulvérisation en surface avec produits professionnels adaptés. Un plan de prévention complète l’intervention.",
  },
  {
    question: "Dois-je quitter les lieux pendant l’intervention ?",
    answer:
      "Selon la configuration et les produits utilisés, une aération et un temps de séchage sont recommandés. Nous vous indiquons précisément la marche à suivre pour une reprise d’usage en sécurité.",
  },
];

const ServiceXylophage = () => {
  return (
    <>
      <Helmet>
        <title>Traitement xylophages du bois – Vrillettes, lyctus, capricornes</title>
        <meta
          name="description"
          content="Diagnostic et traitement des insectes xylophages du bois: vrillettes, lyctus, capricornes et larves. Injection, pulvérisation et plan de prévention. Devis gratuit partout en France."
        />
      </Helmet>

      <FloatingCallButton />

      {/* HERO */}
      <section className="relative h-[30vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceXylophage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Traitement des xylophages
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
              <a href="tel:+33698669378" aria-label="Appeler pour une urgence xylophages">
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
            <QuoteForm defaultService="Xylophages" />
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
                  Pourquoi traiter les xylophages rapidement ?
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Les insectes xylophages
                  <strong> (vrillettes, lyctus, capricornes, larves de bois, etc.)</strong> fragilisent
                  charpentes, planchers et menuiseries en creusant des galeries. Sans traitement adapté,
                  la structure du bois s’affaiblit avec un risque de déformations et de pertes de résistance
                  mécanique.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Nos techniciens certifiés réalisent un diagnostic précis, préparent les supports puis
                  appliquent un traitement en profondeur par injection et en surface par pulvérisation,
                  accompagné d’un plan de prévention pour préserver durablement vos ouvrages.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-5 sm:mt-6">
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Intervention 24h</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Protocole certifié</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Award className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Protection durable</p>
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
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Diagnostic &amp; préparation</h3>
                      <p className="text-sm text-muted-foreground">
                        Sondage, repérage des zones attaquées, brossage et dépoussiérage pour favoriser la pénétration
                        du traitement.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Injection &amp; pulvérisation</h3>
                      <p className="text-sm text-muted-foreground">
                        Perçages et injection en profondeur, puis pulvérisation en surface selon l’épaisseur et la
                        nature des bois traités.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Prévention &amp; suivi</h3>
                      <p className="text-sm text-muted-foreground">
                        Contrôle d’efficacité, recommandations d’aération et d’hygrométrie, plan de suivi pour un
                        résultat durable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">
                  Nos solutions contre les xylophages
                  <span className="text-muted-foreground">
                  </span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Traitement par injection</h3>
                    <p className="text-sm text-muted-foreground">
                      Injection en profondeur pour neutraliser les larves dans l’âme du bois et protéger la structure.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Pulvérisation de surface</h3>
                    <p className="text-sm text-muted-foreground">
                      Application sur faces accessibles pour stopper l’activité résiduelle et prévenir les reprises.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Assainissement local</h3>
                    <p className="text-sm text-muted-foreground">
                      Brossage, dépoussiérage, comblements localisés et conseils d’aération pour limiter l’humidité.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Plan de prévention</h3>
                    <p className="text-sm text-muted-foreground">
                      Recommandations d’entretien, contrôles périodiques et ajustements pour pérenniser le traitement.
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
                      <strong className="text-white">Traitements éprouvés :</strong> Injection et pulvérisation selon l’état des bois
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Techniciens certifiés :</strong> Méthodes conformes et respectueuses des ouvrages
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Résultats durables :</strong> Plan de prévention et suivi adapté
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite: formulaire sticky */}
            <aside className="hidden sm:block lg:col-span-1">
              <div className="sm:sticky sm:top-24">
                <QuoteForm defaultService="Xylophages" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={xylophageFAQ} />
    </>
  );
};

export default ServiceXylophage;
