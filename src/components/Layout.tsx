import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services/pigeons" },
    { name: "Devis rapide", path: "/devis" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-foreground">ExpertNuisibles</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.path) ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="urgent" size="sm" asChild>
                <a href="tel:+33123456789">
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="border-t border-border py-4 md:hidden">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      isActive(item.path) ? "text-accent" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="urgent" size="sm" asChild className="w-full">
                  <a href="tel:+33123456789">
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">ExpertNuisibles</h3>
              <p className="text-sm text-muted-foreground">
                Entreprise experte en éradication de nuisibles en France. Intervention rapide et professionnelle.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services/pigeons" className="text-muted-foreground hover:text-foreground">
                    Éradication pigeons
                  </Link>
                </li>
                <li>
                  <Link to="/services/moustiques" className="text-muted-foreground hover:text-foreground">
                    Traitement moustiques
                  </Link>
                </li>
                <li>
                  <Link to="/services/termites" className="text-muted-foreground hover:text-foreground">
                    Traitement termites
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Tél : 01 23 45 67 89</li>
                <li>Email : contact@expertnuisibles.fr</li>
                <li>Du lundi au samedi</li>
                <li>7h - 20h</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Informations</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/mentions-legales" className="text-muted-foreground hover:text-foreground">
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ExpertNuisibles. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};
