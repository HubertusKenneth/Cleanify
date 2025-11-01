import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Team from './components/Team';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Mission />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
