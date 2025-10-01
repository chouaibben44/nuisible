import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import footerlogo from "@/images/Éradication-nuisibles-logo-footer.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            {/* Logo above paragraph */}
            <img
  src={footerlogo}
  alt="Éradication Nuisibles — logo"
  className="mb-4 w-60 sm:w-60"
  style={{ height: 'auto', display: 'block' }}
  loading="lazy"
  decoding="async"
/>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Spécialiste du dépigeonnage et de la désinsectisation, Éradication Nuisibles intervient avec des procédés certifiés et respectueux de l’environnement. Votre tranquillité, notre priorité.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
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
                  <a href="tel:+33123456789" className="text-sm font-medium hover:text-accent transition-colors">
                    01 23 45 67 89
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Email</p>
                  <a href="mailto:contact@expert-nuisibles.fr" className="text-sm font-medium hover:text-accent transition-colors">
                    contact@expert-nuisibles.fr
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © 2025 Éradication Nuisibles. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Mentions légales
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
