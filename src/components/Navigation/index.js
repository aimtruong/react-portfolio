
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
                            <li className = {
                                `mx-1
                                ${currentComponent.name === component.name && 'navActive'}
                                `}
                                key = {component.name}
                            >
                                <span onClick = {
                                    () => {setCurrentComponent(component)}
                                }></span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;