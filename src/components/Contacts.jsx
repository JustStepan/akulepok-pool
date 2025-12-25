// Компонент Contacts - секция "Контакты" с QR-кодами
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { siteContent } from '../data/content';

// Компонент для отображения QR-кода с обработкой ошибок
function QRCodeCard({ name, imagePath, link, fallbackEmoji }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-orange-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
      <div className="w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center mb-4 border-2 border-orange-200 overflow-hidden">
        {!imageError ? (
          <img
            src={imagePath}
            alt={`QR код ${name}`}
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-5xl">{fallbackEmoji}</span>
        )}
      </div>
      <p className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
        {name}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-orange-600 hover:underline font-semibold"
      >
        Перейти
      </a>
    </div>
  );
}

function Contacts() {
  const { phone, email, address, schedule, social } = siteContent.contacts;

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Контакты
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка - Контактная информация */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Свяжитесь с нами
            </h3>

            {/* Телефон */}
            <div className="flex items-start space-x-4 p-4 bg-ocean-50 rounded-lg">
              <FaPhone className="text-ocean-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Телефон</p>
                <a href={`tel:${phone}`} className="text-ocean-600 hover:underline">
                  {phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-4 bg-ocean-50 rounded-lg">
              <FaEnvelope className="text-ocean-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a href={`mailto:${email}`} className="text-ocean-600 hover:underline">
                  {email}
                </a>
              </div>
            </div>

            {/* Адрес */}
            <div className="flex items-start space-x-4 p-4 bg-ocean-50 rounded-lg">
              <FaMapMarkerAlt className="text-ocean-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Адрес</p>
                <p className="text-gray-600">{address}</p>
              </div>
            </div>

            {/* График работы */}
            <div className="flex items-start space-x-4 p-4 bg-ocean-50 rounded-lg">
              <FaClock className="text-ocean-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">График работы</p>
                <p className="text-gray-600">{schedule}</p>
              </div>
            </div>
          </div>

          {/* Правая колонка - QR-коды для соцсетей */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Мы в соцсетях
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {/* QR-коды соцсетей - теперь можно загружать свои! */}

              {/* VK */}
              <QRCodeCard
                name="VK"
                imagePath="/images/qr-codes/vk.png"
                link={social.vk}
                fallbackEmoji="📘"
              />

              {/* Telegram */}
              <QRCodeCard
                name="Telegram"
                imagePath="/images/qr-codes/telegram.png"
                link={social.telegram}
                fallbackEmoji="✈️"
              />

              {/* Instagram */}
              <QRCodeCard
                name="Instagram"
                imagePath="/images/qr-codes/instagram.png"
                link={social.instagram}
                fallbackEmoji="📷"
              />

              {/* WhatsApp */}
              <QRCodeCard
                name="WhatsApp"
                imagePath="/images/qr-codes/whatsapp.png"
                link={social.whatsapp}
                fallbackEmoji="💬"
              />
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center">
              💡 Чтобы добавить свои QR-коды, поместите файлы vk.png, telegram.png, instagram.png, whatsapp.png
              <br />в папку <code className="bg-gray-200 px-2 py-1 rounded">public/images/qr-codes/</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
