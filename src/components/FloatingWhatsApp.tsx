import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/521234567890?text=Hola! Me interesa conocer más sobre Puppy House', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="floating-whatsapp group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Floating tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Chatea con nosotros!
      </div>
    </button>
  );
};

export default FloatingWhatsApp;