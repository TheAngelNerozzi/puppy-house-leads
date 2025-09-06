import { Instagram, MessageCircle, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-accent/10 rounded-full -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-accent/5 rounded-full translate-x-18 translate-y-18"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 lg:mb-8">
            <img 
              src="/lovable-uploads/a48ca5eb-7721-4103-8e88-01fe30d27cfb.png" 
              alt="Puppy House Logo" 
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain filter brightness-0 invert transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Brand Name */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Puppy House</h3>
          
          {/* Description */}
          <p className="text-primary-foreground/80 mb-6 lg:mb-8 max-w-md lg:max-w-lg mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Criando French Bulldogs excepcionales con amor, dedicación y profesionalismo en México.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-12">
            <a 
              href="#" 
              className="group p-3 lg:p-4 bg-accent rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Síguenos en Instagram"
              style={{ boxShadow: '0 8px 25px -8px hsl(var(--accent) / 0.3)' }}
            >
              <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="group p-3 lg:p-4 bg-accent rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Síguenos en TikTok"
              style={{ boxShadow: '0 8px 25px -8px hsl(var(--accent) / 0.3)' }}
            >
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="group p-3 lg:p-4 bg-accent rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Síguenos en Facebook"
              style={{ boxShadow: '0 8px 25px -8px hsl(var(--accent) / 0.3)' }}
            >
              <Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-6 lg:pt-8">
            <p className="text-primary-foreground/60 text-sm sm:text-base">
              © 2025 Puppy House - Since 2004 -. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mt-2">
              Criadores registrados • México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
