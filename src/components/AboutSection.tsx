// Removed founder photo import as requested

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-center text-primary-foreground">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
              Pasión que se Convierte en{' '}
              <span className="text-accent bg-accent/10 px-2 py-1 rounded-lg">Familia</span>
            </h3>
            
            <div className="space-y-6 lg:space-y-8 text-base sm:text-lg lg:text-xl leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
              <p className="transform hover:scale-105 transition-transform duration-300 bg-primary-foreground/5 p-6 rounded-xl backdrop-blur-sm">
                En Puppy House, nuestra misión va más allá de la crianza. Nos dedicamos a 
                criar compañeros de vida saludables, equilibrados y extraordinarios.
              </p>
              
              <p className="transform hover:scale-105 transition-transform duration-300 bg-primary-foreground/5 p-6 rounded-xl backdrop-blur-sm">
                Mi nombre es <strong className="text-accent">Marco Estévez</strong> y te invito a conocer 
                la dedicación detrás de cada uno de nuestros cachorros. Cada French Bulldog 
                que criamos recibe atención personalizada, amor incondicional y los mejores 
                cuidados veterinarios.
              </p>
              
              <p className="transform hover:scale-105 transition-transform duration-300 bg-primary-foreground/5 p-6 rounded-xl backdrop-blur-sm">
                Creemos que encontrar al compañero perfecto es una experiencia única, 
                por eso nos comprometemos a acompañarte en cada paso del proceso, 
                desde la primera consulta hasta que tu nuevo amigo se sienta como 
                en casa contigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;