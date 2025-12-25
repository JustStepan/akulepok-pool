// Компонент Pricing - секция "Стоимость"
import { siteContent } from '../data/content';

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-ocean-50 to-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Стоимость занятий
        </h2>

        {/* Тарифные планы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteContent.pricing.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-4 ring-ocean-500' : ''
              }`}
            >
              {/* Бейдж "Популярный" */}
              {plan.popular && (
                <div className="bg-ocean-500 text-white text-center py-2 font-bold">
                  ⭐ Популярный
                </div>
              )}

              {/* Содержимое карточки */}
              <div className="p-8">
                {/* Название тарифа */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {plan.name}
                </h3>

                {/* Цена */}
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-ocean-600">
                    {plan.price}
                  </span>
                </div>

                {/* Список особенностей */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-ocean-500 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Кнопка */}
                <button
                  onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-lg font-bold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-ocean-500 text-white hover:bg-ocean-600'
                      : 'bg-ocean-100 text-ocean-700 hover:bg-ocean-200'
                  }`}
                >
                  Выбрать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
