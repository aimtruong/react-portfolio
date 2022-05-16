
import React from 'react';

const Footer = () => {
    return (
        <footer className = "footer">
        <div>
          < a href = 'https://github.com/aimtruong' target = '_blank'>
            <img src = {require('../../assets/images/github.png')} alt = 'github profile' height = '50px'></img>
          </a>
          < a href = 'https://www.linkedin.com/in/ngoc-tuyet-truong-683a3522a/' target = '_blank'>
            <img src = {require('../../assets/images/linkedin.png')} alt = 'linkedin profile' height = '50px'></img>
          </a>
          <p className="container">&copy; 2022 By Aimee Truong</p>
        </div>
      </footer>
    );
};

export default Footer;