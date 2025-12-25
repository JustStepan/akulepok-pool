// Компонент About - секция "О нас"
import { siteContent } from '../data/content';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {siteContent.about.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Описание */}
          <p className="text-lg text-gray-600 text-center mb-12">
            {siteContent.about.description}
          </p>

          {/* Особенности */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteContent.about.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-ocean-50 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <p className="text-lg text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
