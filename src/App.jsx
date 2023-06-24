import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import './App.css';

function App() {

  return (
    <div className="home">
      <header>
        <h3 className="name">Michael Asare</h3>
        <Contact />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
