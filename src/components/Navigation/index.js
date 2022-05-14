
import React from "react";

function Nav() {
  return (
    <header className = "flex-row px-1">
        <h2>
            <a href = '/'>
            Aimee Truong
            </a>
        </h2>
        <nav>
            <ul className = 'flex-row'>
                <li className = 'mx-2'>
                    <a href = '#about'>About me</a>
                </li>
                <li>
                    <a href = '#contact'>Contact</a>
                </li>
                <li>
                    <a href = '#projects'>Projects</a>
                </li>
                <li>
                    <a href = '#resume'>Resume</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;