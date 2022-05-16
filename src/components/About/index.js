
import React from 'react';

// need profile pic and bio
function About(){
    return (
        <section className = 'about'>
            <h1>About me</h1>
            <img src = {require('../../assets/images/Profile_pic.jpg')} alt = 'profile-pic' height = '100px'></img>
            <p>I am currently in a UC Davis coding bootcamp to learn about web development.
                I have experience in front-end and back-end development with knowledge about React, NoSQL, and Express.
                Right now, I am open to either working in front-end or back-end separately or together.
            </p>
        </section>
    );
}

export default About;