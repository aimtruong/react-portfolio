
import React from "react";

// need About, Portfolio, Contact, and Resume sections
function Nav(props) {
    const { components = [],
            currentComponent,
            setCurrentComponent
    } = props;

    return (
        <header className = "header">
            <h2>
                Aimee Truong
            </h2>
            <nav>
                <ul className = 'flex-row'>
                    {
                        components.map((component) => (
                            <ul className = {
                                `components
                                ${currentComponent.name === component.name && 'navActive'}
                                `}
                                key = {component.name}
                            >
                                <span onClick = {
                                    () => {setCurrentComponent(component)}
                                }>{component.name}</span>
                            </ul>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;