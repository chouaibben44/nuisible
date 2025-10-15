// src/pages/Mentionlegales.tsx
import { Helmet } from "react-helmet-async";

const Mentionlegales = () => {
  const lastUpdate = "15/10/2025"; // mets à jour la date si besoin

  return (
    <>
      <Helmet>
        <title>Mentions légales | NUISITECH</title>
        <meta
          name="description"
          content="Mentions légales du site NUISITECH, entreprise d'éradication de nuisibles à Marseille. SIREN 928 389 899, SIRET 928 389 899 00016, TVA FR76928389899."
        />
      </Helmet>

      {/* Hero compact */}
      <section className="bg-gradient-primary py-8 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">Mentions légales</h1>
            <p className="text-primary-foreground/90">Informations légales et obligations réglementaires</p>
          </div>
        </div>
      </section>

      {/* Contenu empilé mono-colonne, sans cards */}
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Éditeur du site</h2>
            <div className="text-sm leading-6">
              <dl className="space-y-1">
                <div><dt className="font-semibold inline">Dénomination:</dt> <dd className="inline">NUISITECH</dd></div>
                <div><dt className="font-semibold inline">Forme juridique:</dt> <dd className="inline">Entrepreneur individuel (micro-entreprise)</dd></div>
                <div><dt className="font-semibold inline">Adresse:</dt> <dd className="inline">Marseille, France</dd></div>
                <div><dt className="font-semibold inline">SIREN:</dt> <dd className="inline">928 389 899</dd></div>
                <div><dt className="font-semibold inline">SIRET siège:</dt> <dd className="inline">928 389 899 00016</dd></div>
                <div><dt className="font-semibold inline">N° TVA intracommunautaire:</dt> <dd className="inline">FR76928389899</dd></div>
                <div><dt className="font-semibold inline">RCS:</dt> <dd className="inline">Non inscrit</dd></div>
                <div><dt className="font-semibold inline">RNE:</dt> <dd className="inline">Inscrit</dd></div>
                <div><dt className="font-semibold inline">Activité principale déclarée:</dt> <dd className="inline">Dératisation, désinsectisation, désinfection</dd></div>
                <div><dt className="font-semibold inline">Code NAF APE:</dt> <dd className="inline">81.29A (Désinfection, désinsectisation, dératisation)</dd></div>
                <div><dt className="font-semibold inline">Date de création:</dt> <dd className="inline">02/05/2024</dd></div>
              </dl>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Contact</h2>
            <div className="text-sm leading-6">
              <p><span className="font-semibold">Téléphone:</span> <a className="text-primary hover:underline" href="tel:+33698669378">06 98 66 93 78</a></p>
              <p><span className="font-semibold">Email:</span> <a className="text-primary hover:underline break-all" href="mailto:contact@eradication-nuisibles.fr">contact@eradication-nuisibles.fr</a></p>
            </div>
          </section>

          {/* Responsable de la publication */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Responsable de la publication</h2>
            <div className="text-sm leading-6">
              <p>NUISITECH, Entrepreneur individuel. Pour toute demande relative au contenu du site, utilisez les coordonnées ci-dessus.</p>
            </div>
          </section>

          {/* Hébergeur */}
<section>
  <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Hébergeur du site</h2>
  <div className="text-sm leading-6">
    <p>
      Netlify, Inc., 2325 3rd Street, San Francisco, CA 94107, USA.{" "}
      Site:{" "}
      <a
        href="https://www.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        netlify.com
      </a>{" "}
      | Support:{" "}
      <a
        href="mailto:support@netlify.com"
        className="text-primary hover:underline"
      >
        support@netlify.com
      </a>
    </p>
  </div>
</section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Propriété intellectuelle</h2>
            <div className="text-sm leading-6">
              <p>
                Le site et l’ensemble de ses contenus
                (textes, images, logos, graphismes, vidéos, icônes, bases de données)
                sont la propriété de NUISITECH ou font l’objet d’autorisations d’utilisation.
                Toute reproduction, représentation, modification, publication ou adaptation,
                totale ou partielle, sur quelque support que ce soit, est interdite sans
                autorisation écrite préalable.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Données personnelles</h2>
            <div className="text-sm leading-6">
              <p>
                Les formulaires collectent les informations nécessaires au traitement des demandes
                (identité, coordonnées, détails de la demande). Base légale: intérêt légitime
                à répondre aux sollicitations et exécution de mesures précontractuelles.
                Les données sont conservées pour la durée nécessaire au traitement puis archivées
                selon les obligations légales. Vous disposez de droits d’accès, rectification,
                effacement, limitation et opposition. Pour les exercer, écrivez à{" "}
                <a href="mailto:contact@eradication-nuisibles.fr" className="text-primary hover:underline break-all">
                  contact@eradication-nuisibles.fr
                </a>.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Cookies</h2>
            <div className="text-sm leading-6">
              <p>
                Le site peut utiliser des cookies techniques et de mesure d’audience.
                Vous pouvez configurer vos préférences via votre navigateur. Pour une politique
                complète de confidentialité, contactez NUISITECH via les coordonnées ci-dessus.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Responsabilité</h2>
            <div className="text-sm leading-6">
              <p>
                NUISITECH s’efforce d’assurer l’exactitude des informations publiées.
                Aucune garantie n’est fournie quant à l’exhaustivité ou l’actualisation permanente.
                L’éditeur ne saurait être tenu responsable des dommages directs ou indirects
                résultant de l’utilisation du site, ni du contenu des sites tiers vers lesquels
                des liens peuvent pointer.
              </p>
            </div>
          </section>

          {/* Médiation et droit applicable */}
          <section>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Médiation et droit applicable</h2>
            <div className="text-sm leading-6">
              <p>
                Conformément aux articles L.616-1 et R.616-1 du Code de la consommation,
                le consommateur peut recourir gratuitement à un médiateur de la consommation
                en vue de la résolution amiable d’un litige. Les modalités et coordonnées
                du médiateur seront communiquées sur demande.
              </p>
              <p>
                Droit applicable: droit français. Les tribunaux compétents seront saisis
                en cas de litige si aucune solution amiable n’est trouvée.
              </p>
              <p className="text-xs text-muted-foreground pt-2">Dernière mise à jour: {lastUpdate}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Mentionlegales;
