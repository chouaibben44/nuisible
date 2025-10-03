// components/FloatingCallButtonPortal.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function FloatingCallButtonPortal() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  // SSR-safe: only access document in the browser
  useEffect(() => {
    const el = document.createElement("div");
    el.id = "bottom-cta-portal";
    document.body.appendChild(el);
    setMountNode(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  if (!mountNode) return null;

  return createPortal(
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      // (Optional) fallback in case the button doesn’t paint the safe-area
      // style={{ backgroundImage: "linear-gradient(to right,#8BC34A,#4CAF50)" }}
    >
      <Button
        variant="default"
        size="lg"
        className="w-full rounded-none shadow-lg text-white border-0 bg-[linear-gradient(to_right,#8BC34A,#4CAF50)]"
        style={{
          height: "calc(56px + env(safe-area-inset-bottom))",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        asChild
      >
        <a href="tel:+33698669378" aria-label="Appeler immédiatement un expert">
          <Phone className="h-5 w-5" />
          <span className="ml-2">Appeler immédiatement un expert</span>
        </a>
      </Button>
    </div>,
    mountNode
  );
}
