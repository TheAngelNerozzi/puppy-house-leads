import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-puppy.jpg';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/521234567890?text=Hola! Me interesa conocer más sobre los cachorros de Puppy House', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a48ca5eb-7721-4103-8e88-01fe30d27cfb.png" 
            alt="Puppy House Logo" 
            className="mx-auto w-32 h-32 md:w-40 md:h-40 object-contain filter drop-shadow-lg"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          La Exclusividad Tiene un{' '}
          <span className="text-accent">Nuevo Mejor Amigo</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Bulldogs Franceses Exóticos criados con pasión y profesionalismo 
          en el corazón de México
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={handleWhatsAppClick}
          className="btn-whatsapp-large text-xl font-semibold"
        >
          <MessageCircle className="w-6 h-6" />
          Chatea con Nosotros en WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;