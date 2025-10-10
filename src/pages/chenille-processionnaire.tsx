import { FloatingCallButton } from "@/components/FloatingCallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Award, FileText } from "lucide-react";
import serviceChenille from "@/assets/chenilles processionnaires.webp";
import { Helmet } from "react-helmet-async";

const chenilleFAQ = [
  {
    question: "Quels sont les risques liés aux chenilles processionnaires ?",
    answer:
      "Leurs poils urticants peuvent provoquer de fortes réactions cutanées et respiratoires chez l'humain et être très dangereux pour les animaux domestiques. L’intervention doit être réalisée avec EPI et protocole sécurisé.",
  },
  {
    question: "À quelle période intervenir ?",
    answer:
      "L’intervention est possible toute l’année (échenillage des nids, piégeage), avec un pic d’activité de fin d’hiver au printemps. Les actions préventives se planifient en amont de la procession.",
  },
  {
    question: "Quelles méthodes utilisez-vous ?",
    answer:
      "Diagnostic des foyers, échenillage des nids, piégeage sur troncs, traitements biologiques adaptés (selon contexte), balisage et sécurisation des zones à risque, puis plan de prévention.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    answer:
      "Oui, nous intervenons partout en France métropolitaine via notre réseau de techniciens certifiés, avec une prise en charge rapide.",
  },
];

const ServiceChenilleProcessionnaire = () => {
  return (
    <>
      <Helmet>
        <title>Traitement des chenilles processionnaires – Intervention sécurisée & prévention</title>
        <meta
          name="description"
          content="Diagnostic, échenillage et piégeage des chenilles processionnaires. Intervention sécurisée, prévention durable et conseils. Devis gratuit partout en France."
        />
      </Helmet>

      <FloatingCallButton />

      {/* HERO */}
      <section className="relative h-[30vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceChenille})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Traitement des chenilles processionnaires
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
              <a href="tel:+33698669378" aria-label="Appeler pour une urgence chenilles processionnaires">
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
            {/* Assure-toi d'avoir ajouté ce service dans le Select du QuoteForm */}
            <QuoteForm defaultService="Chenilles processionnaires" />
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {/* Colonne gauche : contenu */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12">
              {/* Pourquoi intervenir */}
              <div>
                <h2 className="mb-3 sm:mb-4 text-2xl font-bold md:text-3xl">
                  Pourquoi faire appel à un expert contre les chenilles processionnaires&nbsp;?
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Les chenilles processionnaires représentent un risque sanitaire élevé&nbsp;: poils urticants,
                  réactions cutanées et respiratoires, danger pour les animaux. Une intervention non maîtrisée
                  augmente l’exposition aux poils et la dispersion. Nos équipes certifiées interviennent en sécurité
                  avec protocoles adaptés.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Nous assurons le diagnostic, l’échenillage des nids quand c’est pertinent, le piégeage sur troncs,
                  la mise en place de solutions de prévention et le balisage temporaire des zones à risque pour
                  protéger occupants et animaux domestiques.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-5 sm:mt-6">
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Clock className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Intervention 24h</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4 text-center">
                    <Shield className="mx-auto mb-2 h-8 w-8 text-accent" />
                    <p className="font-semibold">Protocole sécurisé</p>
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
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Diagnostic &amp; sécurisation</h3>
                      <p className="text-sm text-muted-foreground">
                        Repérage des nids, trajectoires de procession et zones de contact. Balisage et choix des
                        méthodes adaptées selon l’espèce et la période.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Échenillage &amp; piégeage</h3>
                      <p className="text-sm text-muted-foreground">
                        Échenillage des nids en hauteur si pertinent, pose de pièges de tronc, interventions avec EPI
                        et perches adaptées pour limiter l’exposition aux poils urticants.
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
                        Conseils de prévention, calendrier d’interventions, contrôles et ajustements selon l’évolution
                        de la colonie et la saison.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">Nos solutions contre les chenilles processionnaires</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Échenillage des nids</h3>
                    <p className="text-sm text-muted-foreground">
                      Retrait sécurisé des nids en hauteur avec perches et EPI, selon faisabilité et contexte.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Piégeage sur troncs</h3>
                    <p className="text-sm text-muted-foreground">
                      Pose de colliers pièges sur les troncs pour intercepter les processions et limiter l’exposition.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Traitements adaptés</h3>
                    <p className="text-sm text-muted-foreground">
                      Solutions biologiques ou mécaniques en fonction de la période, de l’espèce et des contraintes du site.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Prévention &amp; conseil</h3>
                    <p className="text-sm text-muted-foreground">
                      Balisage temporaire, entretien, recommandations pour sécuriser les zones fréquentées par enfants et animaux.
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
                      <strong className="text-white">Sécurité prioritaire :</strong> Protocoles anti-urtication et EPI, périmètre balisé
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Techniciens certifiés :</strong> Méthodes conformes et respectueuses de l’environnement
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Suivi &amp; prévention :</strong> Plan d’action pour limiter les réinfestations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : formulaire sticky (desktop/tablette) */}
            <aside className="hidden sm:block lg:col-span-1">
              <div className="sm:sticky sm:top-24">
                {/* Assure-toi d'avoir ajouté ce service dans le Select du QuoteForm */}
                <QuoteForm defaultService="Chenilles processionnaires" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={chenilleFAQ} />
    </>
  );
};

export default ServiceChenilleProcessionnaire;
