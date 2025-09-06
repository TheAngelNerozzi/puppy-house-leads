import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Familia Pérez",
      location: "CDMX",
      text: "El proceso fue transparente y profesional. ¡Estamos enamorados de nuestro pequeño! La atención de Marco fue excepcional desde el primer contacto.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Sofía G.",
      location: "Monterrey",
      text: "La calidad y el cuidado que Puppy House pone en sus cachorros es inigualable. Lo recomiendo al 100%. Nuestro French Bulldog llegó sano y muy bien socializado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-accent/10 rounded-full -translate-y-20"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-accent/5 rounded-full translate-y-28"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-16 text-secondary-foreground">
          Familias Felices,{' '}
          <span className="text-accent">Vidas Completas</span>
        </h2>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 card-hover group hover:bg-white transition-all duration-500"
                 style={{ boxShadow: '0 10px 30px -5px hsl(215 68% 18% / 0.1)' }}>
              {/* Stars */}
              <div className="flex gap-1 mb-4 lg:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6 italic group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-accent transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;