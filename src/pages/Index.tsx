import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import PuppyGallery from '@/components/PuppyGallery';
import AboutSection from '@/components/AboutSection';
import BreedHistorySection from '@/components/BreedHistorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <PuppyGallery />
      <AboutSection />
      <BreedHistorySection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
