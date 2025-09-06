import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/525530118305?text=Hola! Me interesa conocer más sobre Puppy House', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="floating-whatsapp group animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Floating tooltip */}
      <div className="absolute right-full mr-2 sm:mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs sm:text-sm">
        ¡Chatea con nosotros!
      </div>
    </button>
  );
};

export default FloatingWhatsApp;
