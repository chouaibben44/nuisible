import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award, PhoneCall } from 'lucide-react';
import videobg from '@/images/video-bg.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden py-14 sm:py-16 md:py-20">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
            Votre expert en éradication de nuisibles
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
            Solutions professionnelles et durables pour protéger votre environnement contre les pigeons, les moustiques et les termites. 
            Intervention rapide, efficace et respectueuse de l'environnement.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center sm:justify-start">
            <Button
              size="lg"
              asChild
              className="text-lg bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
            >
              <Link to="/devis">Demander mon devis</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg border border-transparent text-primary bg-white flex items-center justify-center gap-2
                         hover:bg-white/30 hover:backdrop-blur-sm hover:border hover:border-white/50"
            >
              <a href="tel:+33698669378">
                <PhoneCall className="w-7 h-7 fill-current" stroke="none" />
                06 98 66 93 78
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center gap-3 bg-background/20 backdrop-blur-sm rounded-lg p-4 sm:p-5">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-accent flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-primary-foreground text-sm sm:text-base">
                  Certifié & Agréé
                </h3>
                <p className="text-xs sm:text-sm text-primary-foreground/80">
                  Conformité garantie
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background/20 backdrop-blur-sm rounded-lg p-4 sm:p-5">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-accent flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-primary-foreground text-sm sm:text-base">
                  Intervention rapide
                </h3>
                <p className="text-xs sm:text-sm text-primary-foreground/80">
                  24h/24 - 7j/7
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background/20 backdrop-blur-sm rounded-lg p-4 sm:p-5">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 text-accent flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-primary-foreground text-sm sm:text-base">
                  Garantie résultats
                </h3>
                <p className="text-xs sm:text-sm text-primary-foreground/80">
                  Satisfaction 100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
