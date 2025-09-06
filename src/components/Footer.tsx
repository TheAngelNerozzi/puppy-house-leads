import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/a48ca5eb-7721-4103-8e88-01fe30d27cfb.png" 
              alt="Puppy House Logo" 
              className="mx-auto w-20 h-20 object-contain filter brightness-0 invert"
            />
          </div>
          
          {/* Brand Name */}
          <h3 className="text-2xl font-bold mb-4">Puppy House</h3>
          
          {/* Description */}
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Criando French Bulldogs excepcionales con amor, dedicación y profesionalismo en México.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="#" 
              className="p-3 bg-accent rounded-full hover:bg-accent/90 transition-colors duration-300"
              aria-label="Síguenos en Instagram"
            >
              <Instagram className="w-5 h-5 text-accent-foreground" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60">
              © 2024 Puppy House. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Criadores registrados • México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;