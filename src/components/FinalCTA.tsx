import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/521234567890?text=¡Hola! Quiero más información sobre los cachorros French Bulldog disponibles', '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            ¿Listo para Conocer al{' '}
            <span className="text-accent">Nuevo Miembro</span>{' '}
            de tu Familia?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Contáctanos directamente por WhatsApp. Estaremos encantados de resolver 
            todas tus dudas, enviarte más fotos y contarte sobre nuestros cachorros disponibles.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp-large text-2xl py-6 px-12 shadow-luxury hover:shadow-xl"
          >
            <MessageCircle className="w-8 h-8" />
            ¡Sí, Quiero Más Información!
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Respuesta garantizada en menos de 2 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;