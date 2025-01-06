import './App.css';
import Footer from './common/Footer';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ResultsAi from './components/ResultsAi';

function App() {
  return (
    <>
      <Hero />
      <ResultsAi />
      <Testimonials />
      <Faq />
      <Footer/>
    </>
  );
}

export default App;
