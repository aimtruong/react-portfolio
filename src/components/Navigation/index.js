
import React from "react";

function Nav(props) {
    const { components = [],
            currentComponent,
            setCurrentComponent
    } = props;

    return (
        <header className = "flex-row px-1">
            <h2>
                <a href = '/'>
                Aimee Truong
                </a>
            </h2>
            <nav>
                <ul className = 'flex-row'>
                    {
                        components.map((component) => (
                            <ul className = {
                                `mx-2
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