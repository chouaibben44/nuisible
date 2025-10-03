import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

// ----- Validation (Zod) -----
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  // French mobile/landline: 10 digits starting with 0 (e.g., 0612345678)
  phone: z
    .string()
    .regex(/^0\d{9}$/, { message: "Téléphone au format 10 chiffres, commençant par 0 (ex: 0612345678)" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  city: z.string().min(2, { message: "La ville doit contenir au moins 2 caractères" }),
  nuisibleType: z.string().min(1, { message: "Veuillez sélectionner un type de nuisible" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
  hp: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof formSchema>;

const Devis = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      nuisibleType: "",
      message: "",
      hp: "",
    },
    mode: "onTouched",
  });

  // Keep phone input numeric-only & max 10 while typing
  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    form.setValue("phone", digits, { shouldValidate: true });
  };

  const onSubmit = async (values: FormValues) => {
    // Build payload expected by the Edge Function
    const payload = {
      name: values.name,
      phone: values.phone, // already numeric-only and validated
      email: values.email,
      city: values.city,
      service: values.nuisibleType, // map -> "service" for the function/DB
      message: values.message,
      hp: values.hp || "",
    };

    try {
      const { data, error } = await supabase.functions.invoke("submit-quote", {
        body: payload,
        headers: { "x-page-path": window.location.pathname },
      });

      if (error) throw error;

      if (data?.ok) {
        setIsSubmitted(true);
        toast({
          title: "Demande envoyée !",
          description: "Nous vous contacterons dans les plus brefs délais.",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Réponse inattendue du serveur.",
          variant: "destructive",
        });
      }
    } catch (err: any) {
      toast({
        title: "Échec de l’envoi",
        description: err?.message || "Veuillez réessayer dans un instant.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
        <div className="max-w-2xl w-full bg-background rounded-lg shadow-elegant p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
            Demande de devis envoyée !
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Merci pour votre demande. Un de nos experts va vous contacter dans les plus brefs délais pour établir un devis personnalisé et gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <a href="tel:+33123456789">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/">Retour à l'accueil</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (

    <>
    
        <Helmet>
            <title>Demande de devis gratuit – Intervention sous 24h</title>
            <meta
              name="description"
              content="Estimez votre traitement : dépigeonnage, moustiques, termites. Réponse rapide, conseils d’experts, prix transparents. Demande 100% gratuite."
            />
          </Helmet>


    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-6 sm:py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-6 leading-tight">
            Demander un devis gratuit
          </h1>
          <p className="text-sm sm:text-xl max-w-xl sm:max-w-2xl mx-auto opacity-90">
            Recevez un devis gratuit et rapide de nos experts certifiés. Intervention sous 24h partout en France.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6 sm:pt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <div className="bg-background rounded-lg shadow-elegant p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold mb-5 sm:mb-6 text-primary">
                Remplissez le formulaire
              </h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot (hidden) */}
                  <input type="text" {...form.register("hp")} className="hidden" tabIndex={-1} autoComplete="off" />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="06 12 34 56 78"
                            inputMode="numeric"
                            maxLength={10}
                            value={field.value}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            autoComplete="tel"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="votre@email.fr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* City (required by your DB/function) */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ville *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre ville" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nuisibleType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type de nuisible *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un nuisible" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pigeons">Pigeons</SelectItem>
                            <SelectItem value="moustiques">Moustiques</SelectItem>
                            <SelectItem value="termites">Termites</SelectItem>
                            <SelectItem value="autre">Autre nuisible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Décrivez votre problème *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez votre situation, la superficie à traiter, etc."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer ma demande de devis
                  </Button>
                </form>
              </Form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="bg-background rounded-lg shadow-soft p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-heading font-bold mb-5 sm:mb-6 text-primary">
                  Pourquoi nous faire confiance ?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Intervention rapide</div>
                      <div className="text-sm text-muted-foreground">Nous intervenons sous 24h partout en France</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Devis gratuit et sans engagement</div>
                      <div className="text-sm text-muted-foreground">Estimation précise de votre projet</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Experts certifiés</div>
                      <div className="text-sm text-muted-foreground">Techniciens formés et agréés</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Garantie de résultats</div>
                      <div className="text-sm text-muted-foreground">Solutions durables et efficaces</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg shadow-soft p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-5 sm:mb-6">
                  Besoin d'une réponse immédiate ?
                </h3>
                <div className="space-y-4">
                  <a href="tel:+33123456789" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-80">Appelez-nous</div>
                      <div className="font-semibold">01 23 45 67 89</div>
                    </div>
                  </a>
                  <a href="mailto:contact@expert-nuisibles.fr" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Mail className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-80">Email</div>
                      <div className="font-semibold">contact@expert-nuisibles.fr</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-80">Horaires</div>
                      <div className="font-semibold">Lun-Sam : 8h-19h</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-80">Zone d'intervention</div>
                      <div className="font-semibold">Toute la France</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* /col droite */}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Devis;
