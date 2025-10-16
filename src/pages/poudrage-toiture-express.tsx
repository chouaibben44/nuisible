import { FloatingCallButton } from "@/components/FloatingCallButton";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Award, FileText } from "lucide-react";
import servicePoudrage from "@/assets/poudrage-express.webp";
import { Helmet } from "react-helmet-async";

const poudrageFAQ = [
  {
    question: "Dans quels cas utiliser le poudrage toiture ?",
    answer:
      "Le poudrage est idéal pour les nids de guêpes en hauteur ou en zone difficile d’accès (sous tuiles, rives, façades hautes) sans démontage de toiture.",
  },
  {
    question: "Faut-il retirer le nid après traitement ?",
    answer:
      "Ce n’est pas indispensable. Le poudrage neutralise la colonie à la source ; le nid se dessèche et se dégrade naturellement. Nous pouvons l’enlever si l’accès le permet.",
  },
  {
    question: "Peut-on intervenir par tous les temps ?",
    answer:
      "Nous privilégions une météo sèche et peu venteuse pour maximiser l’adhérence et l’efficacité de la poudre au point d’entrée du nid.",
  },
  {
    question: "Est-ce dangereux pour les occupants ou les animaux ?",
    answer:
      "L’intervention est réalisée en EPI, avec périmètre de sécurité et consignes claires. Les zones restent accessibles après un court délai d’aération si nécessaire.",
  },
];

const ServicePoudrageToitureExpress = () => {
  return (
    <>
      <Helmet>
        <title>Poudrage toiture express – Neutralisation rapide des nids de guêpes</title>
        <meta
          name="description"
          content="Traitement rapide et sécurisé des nids de guêpes en toiture par poudrage. Intervention en hauteur sans démontage, contrôle d’efficacité et prévention."
        />
      </Helmet>

      <FloatingCallButton />

      {/* HERO */}
      <section className="relative h-[30vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicePoudrage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl font-heading font-bold mb-4 sm:mb-6 animate-fade-in">
            Poudrage toiture express (guêpes)
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
              <a href="tel:+33698669378" aria-label="Appeler pour une urgence guêpes en toiture">
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
            <QuoteForm defaultService="Poudrage toiture exprèss (guêpes)" />
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
                  Pourquoi choisir le poudrage toiture pour les guêpes ?
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Les nids de guêpes installés sous les tuiles ou dans les hauteurs exposent les occupants et les
                  voisins. Le poudrage toiture permet de neutraliser rapidement la colonie en atteignant l’entrée du nid
                  sans démontage, grâce à des perches adaptées et un protocole sécurisé.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed break-words">
                  Nos équipes certifiées interviennent avec EPI, balisent la zone et réalisent un contrôle d’efficacité.
                  Nous donnons ensuite des conseils de prévention pour limiter les réinfestations.
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
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Repérage &amp; sécurisation</h3>
                      <p className="text-sm text-muted-foreground">
                        Localisation de l’entrée du nid, balisage du périmètre et choix de la perche pour une portée optimale.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Poudrage ciblé</h3>
                      <p className="text-sm text-muted-foreground">
                        Application de la poudre au point d’entrée pour atteindre la colonie en profondeur sans démontage.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Contrôle &amp; prévention</h3>
                      <p className="text-sm text-muted-foreground">
                        Vérification de l’efficacité, consignes d’accès et recommandations pour limiter les réinfestations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-5 sm:mb-6 text-2xl font-bold">Nos solutions pour nids en toiture</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Poudrage haute portée</h3>
                    <p className="text-sm text-muted-foreground">
                      Perches adaptées pour atteindre les rives, faitages et zones en pente en toute sécurité.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Intervention sans démontage</h3>
                    <p className="text-sm text-muted-foreground">
                      Neutralisation via l’entrée du nid, limitant les manipulations de tuiles et le risque de casse.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Sécurisation du site</h3>
                    <p className="text-sm text-muted-foreground">
                      Périmètre balisé, EPI et consignes claires pour protéger occupants et voisins.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border p-5">
                    <CheckCircle className="mb-3 h-6 w-6 text-accent" />
                    <h3 className="mb-2 font-semibold">Conseils de prévention</h3>
                    <p className="text-sm text-muted-foreground">
                      Bonnes pratiques pour réduire l’attractivité des combles et zones sous toiture.
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
                      <strong className="text-white">Méthode efficace :</strong> Poudrage ciblé sans démontage de toiture
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Techniciens certifiés :</strong> Interventions sécurisées en hauteur
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-white" />
                    <p className="text-white">
                      <strong className="text-white">Résultats durables :</strong> Contrôle d’efficacité et prévention
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : formulaire sticky */}
            <aside className="hidden sm:block lg:col-span-1">
              <div className="sticky top-6 z-10"> {/* Added z-index */}
                <div className="rounded-xl border bg-white p-6 shadow-lg">
                  <QuoteForm defaultService="Poudrage toiture exprèss (guêpes)" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={poudrageFAQ} />
    </>
  );
};

export default ServicePoudrageToitureExpress;
