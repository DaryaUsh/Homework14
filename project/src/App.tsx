import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Tape from './components/Tape';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <Tape />
        <TechStack />
        <Projects />
        <Footer />
      </main>

    </div>
  )
}

export default App
