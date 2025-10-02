import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export const FloatingCallButton: React.FC = () => {
  return (
    <>
      {/* Mobile: full-width sticky bottom bar */}
      <div
        className="fixed  inset-x-0 bottom-0 z-50 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }} // iOS safe area
      >
        <Button
  variant="default"
  size="lg"
  className="
    w-full h-14 rounded-none shadow-lg text-white border-0
    bg-[linear-gradient(to_right,#8BC34A,#4CAF50)]
    hover:opacity-90 active:opacity-95
    focus-visible:ring-white
  "
  asChild
>
  <a href="tel:+33698669378" aria-label="Appeler maintenant">
    <Phone className="h-5 w-5" />
    <span className="ml-2">Appeler immédiatement un expert</span>
  </a>
</Button>


      </div>
    </>
  );
};
