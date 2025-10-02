import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";

interface QuoteFormProps {
  defaultService?: "pigeons" | "moustiques" | "termites";
}

const pretty = (v?: string) =>
  v === "pigeons" ? "Pigeons" :
  v === "moustiques" ? "Moustiques" :
  v === "termites" ? "Termites" : v ?? "";

export const QuoteForm = ({ defaultService }: QuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState<string | undefined>(defaultService);
  const [phone, setPhone] = useState(""); // numeric-only controlled input

  // Only digits, max 10
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formEl = e.target as HTMLFormElement;
    const fd = new FormData(formEl);

    const payload = {
      name: (fd.get("name") as string) || "",
      phone, // already numeric-only
      email: (fd.get("email") as string) || "",
      city: (fd.get("city") as string) || "",
      service: (fd.get("service") as string) || "",
      message: ((fd.get("message") as string) || "").trim() || undefined,
      hp: (fd.get("hp") as string) || "",
    };

    // Front-end validation: FR number = 10 digits starting with 0
    if (!/^0\d{9}$/.test(payload.phone)) {
      toast.error("Le numéro doit contenir 10 chiffres et commencer par 0 (ex: 0612345678).");
      setIsSubmitting(false);
      return;
    }

    const missing = ["name","phone","email","city","service"].filter(k => !(payload as any)[k]);
    if (missing.length) {
      toast.error("Merci de remplir tous les champs requis.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("submit-quote", {
        body: payload,
        headers: { "x-page-path": window.location.pathname },
      });
      if (error) throw error;

      if (data?.ok) {
        toast.success("Demande de devis envoyée avec succès. Nous vous recontactons rapidement.");
        formEl.reset();
        setService(defaultService);
        setPhone("");
      } else {
        toast.error("Réponse inattendue du serveur.");
      }
    } catch (err: any) {
      toast.error(err?.message || "Échec de l’envoi. Réessaie dans un instant.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demande de devis gratuit</CardTitle>
        <CardDescription>Remplissez ce formulaire et nous vous recontactons sous 2h</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot anti-bot */}
          <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input id="name" name="name" required placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="\d{10}"
                maxLength={10}
                minLength={10}
                required
                placeholder="06 12 34 56 78"
                value={phone}
                onChange={handlePhoneChange}
                // optional: prevent wheel/scroll changes on some browsers
                onWheel={(e) => (e.currentTarget as HTMLInputElement).blur()}
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required placeholder="votre@email.fr" />
          </div>

          <div className="space-y-2">
            <Label>Type de nuisible *</Label>
            {defaultService ? (
              <>
                <div className="rounded border p-3 bg-muted text-sm">{pretty(defaultService)}</div>
                <input type="hidden" name="service" value={defaultService} />
              </>
            ) : (
              <>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pigeons">Pigeons</SelectItem>
                    <SelectItem value="moustiques">Moustiques</SelectItem>
                    <SelectItem value="termites">Termites</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="service" value={service || ""} required />
              </>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">Ville *</Label>
            <Input id="city" name="city" required placeholder="Votre ville" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Décrivez votre situation</Label>
            <Textarea id="message" name="message" placeholder="Décrivez-nous votre problème de nuisibles..." rows={4} />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            En soumettant ce formulaire, vous acceptez d&apos;être recontacté par nos services.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
