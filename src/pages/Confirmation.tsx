import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";

export default function ThankYouQuote() {
  return (
    <>
      <Helmet>
        <title>Demande envoyée - Merci</title>
        <meta
          name="description"
          content="Merci pour votre demande de devis. Un expert vous contacte très vite."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Use dynamic viewport height + safe-area padding for iOS */}
      <div
        className="min-h-[100svh] flex items-center justify-center bg-secondary/30 px-4 py-8"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Narrower max width on mobile; scales up on larger screens */}
        <div className="w-full max-w-md sm:max-w-lg bg-background rounded-2xl shadow-elegant p-6 sm:p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>

          {/* Slightly smaller heading on mobile for better fit */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
            Demande de devis envoyée
          </h1>

          {/* Comfortable line-length on small screens */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Merci pour votre demande. Un de nos experts va vous contacter dans les plus brefs délais pour établir un devis personnalisé et gratuit.
          </p>

          {/* Full-width buttons on mobile, row on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="w-full sm:w-auto" asChild>
              <a href="tel:+33698669378" aria-label="Appeler maintenant">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </a>
            </Button>

            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="/" aria-label="Retour à l'accueil">
                Retour à l'accueil
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
