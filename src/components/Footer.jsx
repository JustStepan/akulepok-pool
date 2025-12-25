// Компонент Footer - подвал сайта
import { FaVk, FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { siteContent } from '../data/content';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Колонка 1 - О бассейне */}
          <div>
            <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Детский бассейн Акулёнок
            </h3>
            <p className="text-white/90 font-semibold">
              Весёлое обучение плаванию для детей!
              Научим плавать с радостью и удовольствием.
            </p>
          </div>

          {/* Колонка 2 - Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📞 {siteContent.contacts.phone}</li>
              <li>✉️ {siteContent.contacts.email}</li>
              <li>📍 {siteContent.contacts.address}</li>
              <li>🕐 {siteContent.contacts.schedule}</li>
            </ul>
          </div>

          {/* Колонка 3 - Соцсети */}
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href={siteContent.contacts.social.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocean-400 transition-colors duration-200"
                aria-label="VK"
              >
                <FaVk size={28} />
              </a>
              <a
                href={siteContent.contacts.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocean-400 transition-colors duration-200"
                aria-label="Telegram"
              >
                <FaTelegram size={28} />
              </a>
              <a
                href={siteContent.contacts.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocean-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href={siteContent.contacts.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocean-400 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Школа плавания. Все права защищены.</p>
            <p className="text-sm mt-2">
              Сделано с ❤️ для обучения и развития
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
