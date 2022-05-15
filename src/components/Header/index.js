
import React from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';

const Header = (props) => {
    const { components = [{ name: "About", description: < About /> },
    { name: "Contact", description: < Contact /> },
    { name: "Projects", description: < Projects /> }], currentComponent, setCurrentComponent } = props;

    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          < Navigation
            className = 'text-center'
            components = {components}
            currentComponent = {currentComponent}
            setCurrentComponent = {setCurrentComponent}
          />
        </div>
        </header>
    );
};

export default Header;