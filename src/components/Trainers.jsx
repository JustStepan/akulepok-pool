// Компонент Trainers - секция "Тренеры"
import { siteContent } from '../data/content';

function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-gradient-to-br from-ocean-50 to-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Наши тренеры
        </h2>

        {/* Карточки тренеров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteContent.trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Аватар тренера (заглушка) */}
              <div className="h-64 bg-gradient-to-br from-ocean-300 to-ocean-500 flex items-center justify-center text-white text-6xl">
                👤
              </div>

              {/* Информация о тренере */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {trainer.name}
                </h3>
                <p className="text-ocean-600 font-semibold mb-2">
                  {trainer.specialty}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {trainer.experience}
                </p>
                <p className="text-gray-600">
                  {trainer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
