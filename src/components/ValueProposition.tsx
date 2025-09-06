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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-secondary-foreground">
          ¿Por Qué Elegir Puppy House?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-accent-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-secondary-foreground">
                {feature.title}
              </h3>
              
              <p className="text-secondary-foreground/80 leading-relaxed text-lg">
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