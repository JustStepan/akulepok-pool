// Компонент Header - шапка сайта с навигацией и ссылками на соцсети
import { useState } from 'react'; // Хук для управления состоянием
import { FaVk, FaTelegram, FaInstagram, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { siteContent } from '../data/content';

function Header() {
  // State для управления мобильным меню (открыто/закрыто)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Массив пунктов меню
  const menuItems = [
    { id: 'about', label: 'О нас' },
    { id: 'trainers', label: 'Тренеры' },
    { id: 'news', label: 'Объявления' },
    { id: 'pricing', label: 'Стоимость' },
    { id: 'contacts', label: 'Контакты' },
  ];

  // Функция для плавной прокрутки к секции
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Закрываем меню после клика
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип / Название */}
          <div className="flex items-center space-x-2">
            <img
              src="/shark-face.png"
              alt="Акулёнок"
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-orange-500" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Акулёнок
            </span>
          </div>

          {/* Навигационное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-ocean-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Ссылки на соцсети */}
          <div className="flex items-center space-x-4">
            <a
              href={siteContent.contacts.social.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ocean-600 transition-colors duration-200"
              aria-label="VK"
            >
              <FaVk size={24} />
            </a>
            <a
              href={siteContent.contacts.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ocean-600 transition-colors duration-200"
              aria-label="Telegram"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href={siteContent.contacts.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ocean-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href={siteContent.contacts.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-ocean-600 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          {/* Кнопка мобильного меню - ТЕПЕРЬ РАБОЧАЯ! */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 text-3xl p-2 hover:text-orange-500 transition-colors"
            aria-label="Меню"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Мобильное меню - показывается при клике на гамбургер */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200 font-medium rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
