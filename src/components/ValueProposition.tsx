import { Dna, Heart, Shield } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Dna,
      title: "Genética de Élite",
      description: "Seleccionamos cuidadosamente linajes únicos para garantizar belleza y temperamento excepcionales."
    },
    {
      icon: Heart,
      title: "Crianza Ética y Familiar",
      description: "Nuestros cachorros crecen en un ambiente lleno de amor y socialización, como parte de nuestra familia."
    },
    {
      icon: Shield,
      title: "Salud y Bienestar Garantizados",
      description: "Entregamos a cada cachorro con esquema de vacunación completo y certificado de salud."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-16 text-secondary-foreground">
          ¿Por Qué Elegir{' '}
          <span className="text-accent">Puppy House</span>?
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:bg-white/70 transition-all duration-500 hover:-translate-y-2" 
                 style={{ boxShadow: '0 10px 30px -10px hsl(215 68% 18% / 0.1)' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-accent rounded-full mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                   style={{ boxShadow: '0 15px 35px -10px hsl(var(--accent) / 0.4)' }}>
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent-foreground" />
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-secondary-foreground group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-secondary-foreground/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;