import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    hp: "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keep phone numeric-only, max 10 digits
  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    setFormData((p) => ({ ...p, phone: digits }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") return handlePhoneChange(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic guards
    if (!/^0\d{9}$/.test(formData.phone)) {
      toast.error(
        "Le numéro doit contenir 10 chiffres et commencer par 0 (ex: 0612345678)."
      );
      return;
    }
    if (
      !formData.name ||
      !formData.email ||
      !formData.city ||
      !formData.message
    ) {
      toast.error("Merci de remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);

    // Merge subject into message so it’s stored/emailed as well
    const messageWithSubject = formData.subject
      ? `Sujet: ${formData.subject}\n\n${formData.message}`
      : formData.message;

    // Build payload expected by Edge Function
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      service: "contact", // tag this submission as a contact
      message: messageWithSubject,
      hp: formData.hp,
    };

    try {
      const { data, error } = await supabase.functions.invoke("submit-quote", {
        body: payload,
        headers: { "x-page-path": window.location.pathname },
      });

      if (error) throw error;

      if (data?.ok) {
        toast.success(
          "Message envoyé avec succès ! Nous vous recontacterons rapidement."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          subject: "",
          message: "",
          hp: "",
        });
      } else {
        toast.error("Réponse inattendue du serveur.");
      }
    } catch (err: any) {
      toast.error(
        err?.message || "Échec de l’envoi. Réessayez dans un instant."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact – Parlez à un expert | Nuisicontrol</title>
        <meta
          name="description"
          content="Des questions sur nos services de dépigeonnage ou désinsectisation ? Contactez-nous : formulaire, email ou téléphone. Réponse sous 24 h."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero section */}
        <section className="bg-gradient-primary py-8 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Contactez-nous
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Notre équipe est à votre disposition pour répondre à toutes vos
                questions
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-soft transition-shadow animate-fade-in-up">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    Téléphone
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Disponible 24h/24 - 7j/7
                  </p>
                  <a
                    href="tel:+33698669378"
                    className="text-primary hover:text-primary-light font-semibold"
                  >
                    06 98 66 93 78
                  </a>
                </CardContent>
              </Card>

              <Card
                className="text-center hover:shadow-soft transition-shadow animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Réponse sous 24h
                  </p>
                  <a
                    href="mailto:contact@nuisicontrol.fr"
                    className="text-primary hover:text-primary-light font-semibold break-all"
                  >
                    contact@nuisicontrol.fr
                  </a>
                </CardContent>
              </Card>

              <Card
                className="text-center hover:shadow-soft transition-shadow animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    Adresse
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Siège social
                  </p>
                  <p className="text-primary font-semibold">Marseille</p>
                </CardContent>
              </Card>
            </div>

            {/* Swap order: info left, form right on md+ */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Additional info */}
              <div className="space-y-8 animate-fade-in md:order-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Horaires d'ouverture
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Lundi - Vendredi
                      </span>
                      <span className="font-semibold">8h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Samedi - Dimanche
                      </span>
                      <span className="font-semibold">9h00 - 17h00</span>
                    </div>
                    <div className="pt-4 mt-4 border-t">
                      <p className="text-sm text-accent font-semibold">
                        Service d'urgence 24h/24 - 7j/7 disponible
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-accent text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-heading font-bold mb-4">
                      Interventions rapides
                    </h3>
                    <p className="mb-4 text-primary-foreground/90">
                      Nous intervenons dans toute la région Île-de-France et
                      garantissons une présence sur site sous 4 heures pour les
                      urgences.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-foreground">✓</span>
                        <span>Devis gratuit et sans engagement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-foreground">✓</span>
                        <span>Diagnostic complet offert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-foreground">✓</span>
                        <span>Garantie de résultats</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Contact form on the right */}
              <Card className="animate-fade-in md:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">
                    Envoyez-nous un message
                  </CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons
                    dans les plus brefs délais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot anti-bot */}
                    <input
                      type="text"
                      name="hp"
                      value={formData.hp}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jean.dupont@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="06 12 34 56 78"
                        autoComplete="tel"
                      />
                    </div>

                    {/* New required City (DB/function needs it) */}
                    <div>
                      <Label htmlFor="city">Ville *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Votre ville"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Sujet</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Quel est l’objet de votre demande ?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Décrivez votre demande..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Envoi en cours..."
                        : "Envoyer la demande"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Champs obligatoires. Vos données sont traitées de
                      manière confidentielle.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
