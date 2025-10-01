import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="orange"
        size="lg"
        className="h-16 w-16 rounded-full py-2 shadow-float hover:scale-110 transition-transform md:h-auto md:w-auto md:rounded-full md:px-6"
        asChild
      >
        <a href="tel:+33123456789" aria-label="Appeler maintenant">
          <Phone className="h-6 w-6" />
          <span className="ml-2 hidden md:inline">Appel d'urgence</span>
        </a>
      </Button>
    </div>
  );
};
