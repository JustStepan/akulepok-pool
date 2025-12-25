// Компонент News - секция "Объявления и новости"
// В будущем данные будут добавляться админом через FastAPI
import { siteContent } from '../data/content';

function News() {
  // Функция для форматирования даты
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Новости и объявления
        </h2>

        {/* Список новостей */}
        <div className="max-w-4xl mx-auto space-y-6">
          {siteContent.news.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-r from-ocean-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-ocean-500"
            >
              {/* Заголовок новости */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Дата публикации */}
              <p className="text-sm text-gray-500 mb-4">
                📅 {formatDate(item.date)}
              </p>

              {/* Содержание */}
              <p className="text-gray-700">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Заметка для будущего функционала */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          💡 В будущем администратор сможет добавлять новости через админ-панель
        </div>
      </div>
    </section>
  );
}

export default News;
