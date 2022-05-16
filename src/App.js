
import React, { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  // variables to change useState of website
  const [components] = useState([
    { name: "About", description: < About /> },
    { name: "Portfolio", description: < Projects /> },
    { name: "Contact", description: < Contact /> },
    { name: "Resume", description: <Resume />}
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
        {(() => {
          if(currentComponent.name === 'About'){
            return (<About />)
          }
          else if(currentComponent.name === 'Contact'){
            return (<Contact />)
          }
          else if(currentComponent.name === 'Portfolio'){
            return (<Projects />)
          }
          else if(currentComponent.name === 'Resume'){
            return (<Resume />)
          }
        })()}
      </main>

    < Footer />
    </div>
  );
}

export default App;
