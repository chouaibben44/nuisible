import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight, Bug, Bird, Shield, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/images/Éradication-nuisibles-logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpenDesktop, setIsServicesOpenDesktop] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const openServices = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsServicesOpenDesktop(true);
  };

  const maybeCloseServices = (e: React.PointerEvent) => {
    const next = e.relatedTarget as Node | null;
    if (servicesRef.current && next && servicesRef.current.contains(next)) return;
    closeTimer.current = window.setTimeout(() => setIsServicesOpenDesktop(false), 100);
  };

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') setIsServicesOpenDesktop(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="relative z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container mx-auto flex justify-end gap-6 text-sm text-primary-foreground">
          <a href="tel:+33698669378" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">06 98 66 93 78</span>
          </a>
          <a href="mailto:contact@expert-nuisibles.fr" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">contact@expert-nuisibles.fr</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Brand / Logo */}
<Link to="/" className="flex items-center" aria-label="Accueil Éradication Nuisibles">
  <img
    src={logo}
    alt="Éradication Nuisibles"
    width={180}          // <-- control the width here
    height={44}
    className="block h-auto w-[200px] md:w-[200px]" // mobile & desktop widths
    loading="eager"
    decoding="async"
  />
  <span className="sr-only">Solutions professionnelles</span>
</Link>


          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary font-semibold' : 'text-muted-foreground'
              }`}
            >
              Accueil
            </Link>

            {/* Services with robust hover handling */}
            <div
              ref={servicesRef}
              className="relative"
              onPointerOver={openServices}
              onPointerOut={maybeCloseServices}
              onBlur={(e) => {
                if (!servicesRef.current?.contains(e.relatedTarget as Node)) setIsServicesOpenDesktop(false);
              }}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isServicesOpenDesktop}
                onFocus={openServices}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpenDesktop ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpenDesktop && (
                <div
                  role="menu"
                  aria-label="Sous-menu Services"
                  className="absolute left-1/2 top-full -translate-x-1/2 mt-3 w-[720px] rounded-2xl border bg-popover shadow-xl ring-1 ring-black/5 z-[60] pointer-events-auto"
                >
                  <div className="grid grid-cols-3 gap-4 p-4">
                    {/* Card 1 */}
                    <Link
                      to="/services/depigeonnage"
                      className="group rounded-xl border p-4 transition-colors hover:border-primary/30 hover:bg-muted/40 hover:shadow-sm focus:outline-none"
                    >
                      {/* Top row: icon + title */}
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border p-2 group-hover:border-primary/40">
                          <Bird className="h-5 w-5" />
                        </div>
                        <div className="font-semibold group-hover:text-primary">Dépigeonnage</div>
                      </div>

                      {/* Bottom container: full width text + CTA */}
                      <div className="mt-3">
                        <p className="text-sm text-muted-foreground leading-snug">
                          Filets, pics, répulsifs et solutions durables contre les volatiles.
                        </p>
                        <span className="mt-2 inline-flex items-center text-xs text-primary">
                          Découvrir <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </Link>

                    {/* Card 2 */}
                    <Link
                      to="/services/desinsectisation-moustiques"
                      className="group rounded-xl border p-4 transition-colors hover:border-primary/30 hover:bg-muted/40 hover:shadow-sm focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border p-2 group-hover:border-primary/40">
                          <Bug className="h-5 w-5" />
                        </div>
                        <div className="font-semibold group-hover:text-primary">Désinsectisation moustiques</div>
                      </div>

                      <div className="mt-3">
                        <p className="text-sm text-muted-foreground leading-snug">
                          Traitements ciblés, larvicide et plan d’action préventif.
                        </p>
                        <span className="mt-2 inline-flex items-center text-xs text-primary">
                          Découvrir <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </Link>

                    {/* Card 3 */}
                    <Link
                      to="/services/desinsectisation-termites"
                      className="group rounded-xl border p-4 transition-colors hover:border-primary/30 hover:bg-muted/40 hover:shadow-sm focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border p-2 group-hover:border-primary/40">
                          <Shield className="h-5 w-5" />
                        </div>
                        <div className="font-semibold group-hover:text-primary">Désinsectisation termites</div>
                      </div>

                      <div className="mt-3">
                        <p className="text-sm text-muted-foreground leading-snug">
                          Diagnostics, barrières et traitements curatifs certifiés.
                        </p>
                        <span className="mt-2 inline-flex items-center text-xs text-primary">
                          Découvrir <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="border-t px-4 py-3 flex items-center justify-between bg-muted/30 rounded-b-2xl">
                    <div className="text-xs text-muted-foreground">
                      Besoin d’une intervention d’urgence ? Appelez-nous immédiatement.
                    </div>
                    <Button
                      size="sm"
                      variant="default"
                      asChild
                      className="flex items-center bg-accent gap-2"
                    >
                      <a href="tel:0698669378">
                        <PhoneCall className="w-4 h-4" />
                        06 98 66 93 78
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/a-propos"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/a-propos') ? 'text-primary font-semibold' : 'text-muted-foreground'
              }`}
            >
              À propos
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>

            <Button asChild className="ml-2">
              <Link to="/devis">Demander un devis</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 pt-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>

              {/* Mobile Services accordion */}
              <div className="rounded-lg border">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium"
                  onClick={() => setIsServicesOpenMobile((v) => !v)}
                  aria-expanded={isServicesOpenMobile}
                  aria-controls="services-mobile-panel"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpenMobile ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpenMobile && (
                  <div id="services-mobile-panel" className="px-2 pb-3">
                    <Link
                      to="/services/depigeonnage"
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Bird className="h-4 w-4" /> Dépigeonnage
                    </Link>
                    <Link
                      to="/services/desinsectisation-moustiques"
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Bug className="h-4 w-4" /> Désinsectisation moustiques
                    </Link>
                    <Link
                      to="/services/desinsectisation-termites"
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Shield className="h-4 w-4" /> Désinsectisation termites
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/a-propos"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/a-propos') ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/contact') ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Demander un devis
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
