import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
