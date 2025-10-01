import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface QuoteFormProps {
  defaultService?: string;
}

export const QuoteForm = ({ defaultService }: QuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Demande de devis envoyée avec succès ! Nous vous recontactons rapidement.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demande de devis gratuit</CardTitle>
        <CardDescription>Remplissez ce formulaire et nous vous recontactons sous 2h</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input id="name" required placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input id="phone" type="tel" required placeholder="06 12 34 56 78" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required placeholder="votre@email.fr" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Type de nuisible *</Label>
            <Select defaultValue={defaultService}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Sélectionnez un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pigeons">Pigeons</SelectItem>
                <SelectItem value="moustiques">Moustiques</SelectItem>
                <SelectItem value="termites">Termites</SelectItem>
                <SelectItem value="autre">Autre nuisible</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Ville *</Label>
            <Input id="city" required placeholder="Votre ville" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Décrivez votre situation</Label>
            <Textarea
              id="message"
              placeholder="Décrivez-nous votre problème de nuisibles..."
              rows={4}
            />
          </div>
          <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            En soumettant ce formulaire, vous acceptez d'être recontacté par nos services.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
