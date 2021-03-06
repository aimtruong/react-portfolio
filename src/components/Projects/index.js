import React from 'react';

// need six projects added with github and deployed sites
const Projects = () => {
    return (
        <div>
            <h2>
            Portfolio
            </h2>

            <div>
            <a href = 'https://aimtruong.github.io/weather-dashboard/' target = '_blank'>
            <img src = {require('../../assets/images/weather-dashboard.JPG')} alt = 'weather-dashboard' height = '120px'></img>
            </a>
            <a href = 'https://github.com/aimtruong/weather-dashboard' target = '_blank'>
                <img src = {require('../../assets/images/github.png')} alt = 'weather dashboard github' height = '30px'></img>
            </a>
            </div>

            <div>
            <a href = 'https://aimtruong.github.io/hobby-search/' target = '_blank'>
            <img src = {require('../../assets/images/hobby-search.jfif')} alt = 'hobby-search' height = '150px'></img>
            </a>
            <a href = 'https://github.com/aimtruong/hobby-search' target = '_blank'>
                <img src = {require('../../assets/images/github.png')} alt = 'hobby search github' height = '30px'></img>
            </a>
            </div>

            <div>
            <a href = 'https://warm-sands-32649.herokuapp.com/' target = '_blank'>
            <img src = {require('../../assets/images/note-taker.jfif')} alt = 'note-taker' height = '150px'></img>
            </a>
            <a href = 'https://github.com/aimtruong/note-taker' target = '_blank'>
                <img src = {require('../../assets/images/github.png')} alt = 'note taker github' height = '30px'></img>
            </a>
            </div>

            <div>
            <a href = 'https://quiet-escarpment-64080.herokuapp.com/' target = '_blank'>
            <img src = {require('../../assets/images/tech-blog.jfif')} alt = 'tech-blog' height = '150px'></img>
            </a>
            <a href = 'https://github.com/aimtruong/tech-blog' target = '_blank'>
                <img src = {require('../../assets/images/github.png')} alt = 'tech blog github' height = '30px'></img>
            </a>
            </div>

            <div>
            <a href = 'https://boiling-gorge-57801.herokuapp.com/' target = '_blank'>
            <img src = {require('../../assets/images/handy-helper.jfif')} alt = 'handy-helper' height = '100px'></img>
            </a>
            <a href = 'https://github.com/aimtruong/handy-helper' target = '_blank'>
                <img src = {require('../../assets/images/github.png')} alt = 'handy helper github' height = '30px'></img>
            </a>
            </div>

            <div>
            <a href = 'https://sleepy-basin-30656.herokuapp.com/' target = '_blank'>
            <img src = {require('../../assets/images/budget-tracker.jfif')} alt = 'budget-tracker' height = '150px'></img>
            </a>
            <a href = 'https://github.com/aimtruong/budget-tracker-pwa' target = '_blank'>
                <img src = {require('../../assets/images/github.png')} alt = 'budget tracker github' height = '30px'></img>
            </a>
            </div>

            <div>
            <a href = 'https://afternoon-fjord-21260.herokuapp.com/' target = '_blank'>
            <img src = {require('../../assets/images/get-baked.JPG')} alt = 'get-baked' height = '150px'></img>
            </a>
            <a href = 'https://github.com/aimtruong/get-baked' target = '_blank'>
                <img src = {require('../../assets/images/github.png')} alt = 'get baked github' height = '30px'></img>
            </a>
            </div>
        </div>
    );
};

export default Projects;