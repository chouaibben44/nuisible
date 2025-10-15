import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import footerlogo from "@/images/Éradication-nuisibles-logo-footer.webp";
import cepa from "@/images/CEPA-logo.png";
import agreecertibiocide from "@/images/agéécertibiocide.png";
import haccp from "@/images/haccp.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Top: Certifications strip (always in a single row) */}
<div className="mb-20">
  <div className="grid grid-flow-col auto-cols-max items-center justify-around md:justify-center gap-4 md:gap-8">
    <div className="h-8 md:h-12 flex items-center">
      <img
        src={cepa}
        alt="Certification CEPA"
        className="h-full w-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="h-8 md:h-12 flex items-center">
      <img
        src={agreecertibiocide}
        alt="Agrément Certibiocide"
        className="h-full w-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="h-8 md:h-12 flex items-center">
      <img
        src={haccp}
        alt="Certification HACCP"
        className="h-full w-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
</div>


        {/* Main footer grid */}
        <div className="grid pt-5 grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <img
              src={footerlogo}
              alt="Éradication Nuisibles — logo"
              className="mb-4 w-60 sm:w-60"
              style={{ height: "auto", display: "block" }}
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Spécialiste du dépigeonnage et de la désinsectisation, Éradication Nuisibles intervient
              avec des procédés certifiés et respectueux de l’environnement. Votre tranquillité, notre
              priorité.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/depigeonnage"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Éradication de pigeons
                </Link>
              </li>
              <li>
                <Link
                  to="/services/desinsectisation-moustiques"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Lutte contre les moustiques
                </Link>
              </li>
              <li>
                <Link
                  to="/services/desinsectisation-termites"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Traitement des termites
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Appelez-nous</p>
                  <a
                    href="tel:+33698669378"
                    className="text-sm font-medium hover:text-accent transition-colors"
                  >
                    06 98 66 93 78
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Email</p>
                  <a
                    href="mailto:contact@eradication-nuisibles.fr"
                    className="text-sm font-medium hover:text-accent transition-colors"
                  >
                    contact@eradication-nuisibles.fr
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © 2025 Éradication Nuisibles. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link
                to="/mentions-legales"
                className="text-sm pb-12 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
