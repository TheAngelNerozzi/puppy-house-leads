import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-puppy.jpg';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/525530118305?text=Hola! Me interesa conocer más sobre los cachorros de Puppy House', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 hover:scale-100 transition-transform duration-[10s]"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-12 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-6 lg:mb-8">
          <img 
            src="/lovable-uploads/a48ca5eb-7721-4103-8e88-01fe30d27cfb.png" 
            alt="Puppy House Logo" 
            className="mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain filter drop-shadow-lg transform hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
          La Exclusividad Tiene un{' '}
          <span className="text-accent bg-accent/10 px-2 py-1 rounded-lg backdrop-blur-sm">
            Nuevo Mejor Amigo
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 lg:mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          Bulldogs Franceses Exóticos criados con pasión y profesionalismo 
          en el corazón de México
        </p>
        
        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp-large text-lg sm:text-xl font-semibold py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-12 hover:scale-105 transform transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            <span className="hidden sm:inline">Chatea con Nosotros en WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
