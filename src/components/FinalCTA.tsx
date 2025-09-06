import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/521234567890?text=¡Hola! Quiero más información sobre los cachorros French Bulldog disponibles', '_blank');
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-8 w-3 h-3 bg-accent/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-12 w-4 h-4 bg-accent/30 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-accent/15 rounded-full animate-bounce delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            ¿Listo para Conocer al{' '}
            <span className="text-accent bg-accent/10 px-2 py-1 rounded-lg">Nuevo Miembro</span>{' '}
            de tu Familia?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
            Contáctanos directamente por WhatsApp. Estaremos encantados de resolver 
            todas tus dudas, enviarte más fotos y contarte sobre nuestros cachorros disponibles.
          </p>
          
          <div className="mb-6 lg:mb-8">
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp-large text-lg sm:text-xl lg:text-2xl py-4 px-8 sm:py-6 sm:px-12 lg:py-8 lg:px-16 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              style={{ boxShadow: '0 20px 50px -10px hsl(215 68% 18% / 0.2)' }}
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="hidden sm:inline">¡Sí, Quiero Más Información!</span>
              <span className="sm:hidden">¡Más Info!</span>
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground animate-pulse">
            ⚡ Respuesta garantizada en menos de 2 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;