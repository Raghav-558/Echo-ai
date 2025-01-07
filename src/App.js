import './App.css';
import Footer from './common/Footer';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ResultsAi from './components/ResultsAi';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <Hero />
      <ResultsAi />
      <Testimonials />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
