import React, { useState } from 'react';


import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      < Navigation />

      <main>
        < About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
