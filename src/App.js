
import React, { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  //const [contactSelected, setContactSelected] = useState(false);
  const [components] = useState([
    { name: "About", description: < About /> },
    { name: "Contact", description: < Contact /> },
    { name: "Projects", description: < Projects /> }
  ]);
  const [currentComponent, setCurrentComponent] = useState(components[0]);

  return (
    <div>
      < Header 
        components = {components}
        currentComponent = {currentComponent}
        setCurrentComponent = {setCurrentComponent}
      />
      <main>
        <About />
        <Contact />
        <Projects />
      </main>
      < Footer />
    </div>
  );
}

export default App;
