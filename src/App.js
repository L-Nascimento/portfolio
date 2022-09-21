

import About from './section/about';
import Experience from './section/experience';
import Footer from './section/footer';
import Header from './section/header';
import Home from './section/home';
import Projects from './section/projects';
import Services from './section/services';
import "./style.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header />
      
      </header>

    <Home />

    <About />

    <Experience />

    <Projects />

    <Services />


    <footer>

    <Footer /> 

    </footer>

    </div>
  );
}

export default App;
