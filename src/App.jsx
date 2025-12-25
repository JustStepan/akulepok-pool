// Главный компонент приложения
// Здесь мы собираем все компоненты в одну страницу

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Trainers from './components/Trainers';
import News from './components/News';
import Pricing from './components/Pricing';
import Contacts from './components/Contacts';
import Placeholder from './components/Placeholder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header - фиксированная шапка сайта */}
      <Header />

      {/* Main content - основной контент */}
      <main className="pt-16">
        {/* Hero section - главный баннер */}
        <Hero />

        {/* About section - о нас */}
        <About />

        {/* Trainers section - тренеры */}
        <Trainers />

        {/* News section - новости и объявления */}
        <News />

        {/* Pricing section - стоимость */}
        <Pricing />

        {/* Contacts section - контакты */}
        <Contacts />

        {/* Placeholder - заглушка для будущего */}
        <Placeholder />
      </main>

      {/* Footer - подвал сайта */}
      <Footer />
    </div>
  );
}

export default App;
