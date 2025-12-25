// Компонент Admin - визуальная часть админ-панели
// Пока без функционала, только UI

import { FaPlus, FaEdit, FaTrash, FaImage } from 'react-icons/fa';

function Admin() {
  // Заглушка для примера списка новостей
  const mockNews = [
    { id: 1, title: "Открытие новых групп", date: "2024-12-20" },
    { id: 2, title: "Новогодняя акция", date: "2024-12-15" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header админки */}
      <header className="bg-ocean-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Админ-панель</h1>
            <button className="bg-ocean-700 hover:bg-ocean-800 px-4 py-2 rounded-lg transition-colors">
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Блок управления фоновым изображением */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FaImage className="mr-3 text-ocean-600" />
              Фоновое изображение
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FaImage className="mx-auto text-gray-400 text-5xl mb-4" />
                <p className="text-gray-600 mb-4">Текущее изображение фона</p>
                <button className="bg-ocean-600 text-white px-6 py-2 rounded-lg hover:bg-ocean-700 transition-colors">
                  Загрузить новое изображение
                </button>
              </div>
              <p className="text-sm text-gray-500">
                💡 В будущем здесь можно будет загрузить изображение для фона сайта
              </p>
            </div>
          </div>

          {/* Блок управления новостями */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between">
              <span className="flex items-center">
                📢 Новости и объявления
              </span>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <FaPlus className="mr-2" />
                Добавить
              </button>
            </h2>

            {/* Список новостей */}
            <div className="space-y-3">
              {mockNews.map((news) => (
                <div
                  key={news.id}
                  className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">{news.title}</h3>
                    <p className="text-sm text-gray-500">{news.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 p-2">
                      <FaEdit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800 p-2">
                      <FaTrash size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              💡 В будущем здесь можно будет добавлять, редактировать и удалять новости
            </p>
          </div>

          {/* Блок управления тренерами */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between">
              <span className="flex items-center">
                👥 Тренеры
              </span>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <FaPlus className="mr-2" />
                Добавить
              </button>
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600">Список тренеров</p>
              <p className="text-sm text-gray-500 mt-2">
                Функция добавления и редактирования тренеров
              </p>
            </div>
          </div>

          {/* Блок управления тарифами */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between">
              <span className="flex items-center">
                💰 Тарифы
              </span>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <FaPlus className="mr-2" />
                Добавить
              </button>
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600">Список тарифов</p>
              <p className="text-sm text-gray-500 mt-2">
                Функция добавления и редактирования тарифов
              </p>
            </div>
          </div>

        </div>

        {/* Информационная панель */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">ℹ️ Информация</h3>
          <p className="text-blue-700">
            Это визуальная версия админ-панели. Весь функционал будет реализован позже при интеграции с FastAPI.
          </p>
          <ul className="mt-3 text-blue-700 text-sm space-y-1">
            <li>✓ Добавление/редактирование новостей</li>
            <li>✓ Управление тренерами</li>
            <li>✓ Изменение тарифов</li>
            <li>✓ Загрузка фонового изображения</li>
            <li>✓ Авторизация администратора</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Admin;
