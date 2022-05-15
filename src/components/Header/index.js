
import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {
    const {
        components = [],
        currentComponent,
        setCurrentComponent
    } = props;

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