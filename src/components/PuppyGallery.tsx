import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import puppy1 from '@/assets/puppy-1.jpg';
import puppy2 from '@/assets/puppy-2.jpg';
import puppy3 from '@/assets/puppy-3.jpg';
import puppy4 from '@/assets/puppy-4.jpg';

const PuppyGallery = () => {
  const [hoveredPuppy, setHoveredPuppy] = useState<number | null>(null);

  const puppies = [
    { id: 1, image: puppy1, type: "Isabella Tan", available: true },
    { id: 2, image: puppy2, type: "Blue Merle", available: true },
    { id: 3, image: puppy3, type: "Chocolate Tan", available: false },
    { id: 4, image: puppy4, type: "Lilac", available: true },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/521234567890?text=Hola! Me gustaría preguntar por la disponibilidad de cachorros', '_blank');
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-accent/5 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-16 text-foreground">
          Conoce a Nuestras{' '}
          <span className="text-accent">Joyas</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12">
          {puppies.map((puppy) => (
            <div 
              key={puppy.id}
              className="relative group cursor-pointer card-hover"
              onMouseEnter={() => setHoveredPuppy(puppy.id)}
              onMouseLeave={() => setHoveredPuppy(null)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={puppy.image} 
                  alt={`French Bulldog ${puppy.type}`}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Info overlay */}
                <div className={`absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredPuppy === puppy.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">{puppy.type}</h3>
                    <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      puppy.available 
                        ? 'bg-accent text-accent-foreground shadow-lg' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {puppy.available ? '✨ Disponible' : '💤 Reservado'}
                    </span>
                  </div>
                </div>
                
                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                  <p className="text-white text-sm sm:text-base font-medium">{puppy.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp-large text-lg sm:text-xl py-4 px-6 sm:py-6 sm:px-8 hover:scale-105 transform transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">Pregunta por Disponibilidad</span>
            <span className="sm:hidden">Disponibilidad</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PuppyGallery;