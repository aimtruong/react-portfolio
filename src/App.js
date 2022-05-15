
import React, { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
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
        {(() => {
          if(currentComponent.name === 'Projects'){
              return (<Projects />)
          }
          else if(currentComponent.name === 'Contact'){
            return (<Contact />)
          }
          else if(currentComponent.name === 'About'){
            return (<About />)
          }
        })()}
      </main>
      < Footer />
    </div>
  );
}

export default App;
