// Компонент Placeholder - заглушка для будущего функционала
function Placeholder() {
  return (
    <section className="py-20 bg-gradient-to-br from-ocean-100 to-ocean-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-12 text-center border-4 border-dashed border-ocean-300">
          {/* Иконка */}
          <div className="text-6xl mb-6">🚧</div>

          {/* Заголовок */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Здесь будет что-то интересное
          </h2>

          {/* Описание */}
          <p className="text-lg text-gray-600 mb-6">
            Этот раздел зарезервирован для будущего функционала.
            Следите за обновлениями!
          </p>

          {/* Список возможных идей */}
          <div className="text-left max-w-md mx-auto">
            <p className="font-semibold text-gray-700 mb-3">
              Возможные варианты использования:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>📸 Галерея фотографий</li>
              <li>🏆 Достижения учеников</li>
              <li>📊 Онлайн-запись на занятия</li>
              <li>💬 Отзывы клиентов</li>
              <li>📝 Блог с полезными статьями</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placeholder;
