import founderPhoto from '@/assets/founder-photo.jpg';

const AboutSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={founderPhoto} 
                alt="Fundadora de Puppy House con cachorro"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 text-primary-foreground">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Pasión que se Convierte en{' '}
              <span className="text-accent">Familia</span>
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed text-primary-foreground/90">
              <p>
                En Puppy House, nuestra misión va más allá de la crianza. Nos dedicamos a 
                criar compañeros de vida saludables, equilibrados y extraordinarios.
              </p>
              
              <p>
                Mi nombre es <strong className="text-accent">María González</strong> y te invito a conocer 
                la dedicación detrás de cada uno de nuestros cachorros. Cada French Bulldog 
                que criamos recibe atención personalizada, amor incondicional y los mejores 
                cuidados veterinarios.
              </p>
              
              <p>
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