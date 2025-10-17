import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NuisibleShowcase from '@/components/NuisibleShowcase';
import LogoShowcaseInfinite from '@/components/LogoShowcaseInfinite';


const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <NuisibleShowcase />
      <LogoShowcaseInfinite />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
