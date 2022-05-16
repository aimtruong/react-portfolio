
import React from 'react';
import Navigation from '../Navigation';

// pushed from App.js to bring to Nav
const Header = (props) => {
    const {
        components = [],
        currentComponent,
        setCurrentComponent
    } = props;

    return (
      <header>
        <div>
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