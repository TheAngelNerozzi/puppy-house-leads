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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-foreground">
          Conoce a Nuestras Joyas
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-primary/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredPuppy === puppy.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{puppy.type}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      puppy.available 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {puppy.available ? 'Disponible' : 'Reservado'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp-large"
          >
            <MessageCircle className="w-5 h-5" />
            Pregunta por Disponibilidad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PuppyGallery;