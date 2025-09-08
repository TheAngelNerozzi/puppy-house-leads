import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const BreedHistorySection = () => {
  const [activeSection, setActiveSection] = useState('historia');
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    // Actualizar el contenido basado en la sección seleccionada
    updateContent(activeSection);
  }, [activeSection]);

  const updateContent = (section: string) => {
    switch(section) {
      case 'historia':
        setContent(historiaContent);
        break;
      case 'genetica':
        setContent(geneticaContent);
        break;
      case 'pelaje':
        setContent(pelajeContent);
        break;
      case 'caracteristicas':
        setContent(caracteristicasContent);
        break;
      default:
        setContent(historiaContent);
    }
  };

  const historiaContent = (
    <div className="bg-background p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
      <h4 className="text-xl font-semibold mb-4 text-primary">Orígenes y Evolución</h4>
      <p className="text-base sm:text-lg leading-relaxed">
        El Bulldog Francés tiene sus orígenes en Inglaterra durante el siglo XIX. Inicialmente, trabajadores de encaje de Normandía llevaron consigo pequeños bulldogs a Francia cuando emigraron en busca de trabajo. Estos perros eran utilizados como compañeros y para cazar ratas en las granjas del norte de Francia.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        En Francia, la raza evolucionó mediante cruces con otras razas como el Carlino y algunos Terriers, lo que dio como resultado el Bulldog Francés que conocemos hoy. Aunque actualmente se caracterizan por sus distintivas orejas de murciélago, en sus inicios también presentaban orejas en forma de rosa, similares a las del Bulldog Inglés.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        A finales del siglo XIX, criadores de los barrios populares de París continuaron desarrollando la raza con el objetivo de conseguir un perro ágil y atlético que también fuera un buen guardián. La raza fue reconocida oficialmente por el American Kennel Club en 1898, y en 1911 se establecieron los estándares oficiales, incluyendo las características de color y las orejas de murciélago.
      </p>
    </div>
  );

  const geneticaContent = (
    <div className="bg-background p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
      <h4 className="text-xl font-semibold mb-4 text-primary">Perfil Genético</h4>
      <p className="text-base sm:text-lg leading-relaxed">
        El Bulldog Francés es una raza braquicéfala, lo que significa que su hocico es corto en proporción al cráneo. Esta característica genética, aunque adorable, puede predisponer a estos perros a ciertos problemas respiratorios y paladar laxo.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        Genéticamente, los Bulldogs Franceses tienen una estructura ósea robusta y un cuerpo musculoso a pesar de su tamaño pequeño. Su esperanza de vida promedio oscila entre los 10 y 14 años, aunque esto puede variar según factores como la genética individual, los cuidados proporcionados y la salud general.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        Las complicaciones genéticas más frecuentes están relacionadas con desproporciones en el tamaño o exceso de peso, y pueden incluir dificultades respiratorias, complicaciones cardíacas y problemas de columna. Una nutrición adecuada y cuidados veterinarios regulares son esenciales para mantener la salud de estos perros.
      </p>
    </div>
  );

  const pelajeContent = (
    <div className="bg-background p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
      <h4 className="text-xl font-semibold mb-4 text-primary">Variedad de Colores</h4>
      <p className="text-base sm:text-lg leading-relaxed">
        El Bulldog Francés presenta un pelaje corto, brillante y ceñido al cuerpo que requiere poco mantenimiento, bastando con un cepillado semanal. La variedad de colores en esta raza es amplia y fascinante.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        Los colores clásicos y reconocidos oficialmente por el American Kennel Club (AKC) incluyen:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-2 text-base sm:text-lg">
        <li><span className="font-medium">Atigrado:</span> Patrón de rayas oscuras sobre fondo más claro</li>
        <li><span className="font-medium">Vaquita (Pied):</span> Combinación de blanco y negro</li>
        <li><span className="font-medium">Crema:</span> Tonalidad beige uniforme</li>
        <li><span className="font-medium">Blanco:</span> Pelaje completamente blanco</li>
        <li><span className="font-medium">Negro:</span> Pelaje negro uniforme</li>
      </ul>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        Además, existen colores exóticos o menos comunes como:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-2 text-base sm:text-lg">
        <li><span className="font-medium">Azul:</span> Gris azulado</li>
        <li><span className="font-medium">Chocolate:</span> Marrón oscuro</li>
        <li><span className="font-medium">Lilac:</span> Tono grisáceo con matices púrpura</li>
        <li><span className="font-medium">Merle:</span> Patrón moteado con manchas de diferentes tonos</li>
        <li><span className="font-medium">Isabella:</span> Color canela diluido</li>
      </ul>
    </div>
  );

  const caracteristicasContent = (
    <div className="bg-background p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
      <h4 className="text-xl font-semibold mb-4 text-primary">Temperamento y Rasgos Físicos</h4>
      <p className="text-base sm:text-lg leading-relaxed">
        El Bulldog Francés es conocido por su temperamento amigable, juguetón y adaptable. Son perros de compañía ideales, con una personalidad cariñosa y leal que los hace excelentes para familias con niños y otros animales.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        Físicamente, se caracterizan por:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-2 text-base sm:text-lg">
        <li>Cabeza grande y cuadrada con arrugas características</li>
        <li>Orejas distintivas en forma de murciélago, erguidas y redondeadas en las puntas</li>
        <li>Cuerpo compacto y musculoso con pecho ancho</li>
        <li>Patas cortas pero fuertes</li>
        <li>Cola corta y baja, recta o en espiral</li>
        <li>Expresión alerta e inteligente</li>
      </ul>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        Son perros tranquilos que se adaptan perfectamente a la vida en apartamentos o pisos debido a su tamaño moderado y a que no son muy ladradores. Sin embargo, son sensibles a las temperaturas extremas, especialmente al calor, debido a su estructura facial braquicéfala que puede dificultar su respiración.
      </p>
      <p className="text-base sm:text-lg leading-relaxed mt-4">
        Su nivel de actividad es moderado, necesitando ejercicio diario pero no excesivo. Son inteligentes pero pueden mostrar cierta terquedad durante el entrenamiento, por lo que requieren paciencia y consistencia.
      </p>
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full -translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
              El Fascinante Mundo del{' '}
              <span className="text-accent bg-accent/10 px-2 py-1 rounded-lg">Bulldog Francés</span>
            </h3>
            
            <div className="w-full mt-8">
              <div className="max-w-xs mx-auto mb-8">
                <Select
                  value={activeSection}
                  onValueChange={(value) => setActiveSection(value)}
                >
                  <SelectTrigger className="w-full bg-accent/10 border-accent/20 hover:bg-accent/20 transition-colors">
                    <SelectValue placeholder="Selecciona una sección" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="historia">Historia</SelectItem>
                    <SelectItem value="genetica">Genética</SelectItem>
                    <SelectItem value="pelaje">Pelaje y Colores</SelectItem>
                    <SelectItem value="caracteristicas">Características</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-6 text-left">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreedHistorySection;
