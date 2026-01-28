import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
