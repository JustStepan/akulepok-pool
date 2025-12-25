// Компонент Hero - главный баннер сайта
import { siteContent } from '../data/content';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-orange-400 to-blue-500 text-white relative overflow-hidden">
      {/* Весёлые пузырики в фоне */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full animate-bounce delay-200"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Милая акула - прыгает */}
        <div className="mb-8 animate-gentle-bounce">
          <img
            src="/shark-cute.png"
            alt="Акулёнок"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          {siteContent.hero.title}
        </h1>

        {/* Подзаголовок */}
        <p className="text-2xl md:text-4xl mb-6 font-bold text-green-300 drop-shadow-md" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          {siteContent.hero.subtitle}
        </p>

        {/* Описание */}
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-white font-semibold drop-shadow-md">
          {siteContent.hero.description}
        </p>

        {/* Кнопка призыва к действию */}
        <button
          onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}
          className="bg-green-400 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-green-500 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-110 border-4 border-white"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          🏊 Хочу плавать! 🏊
        </button>
      </div>
    </section>
  );
}

export default Hero;
