import React from 'react';

// need a downloadable resume and proficiencies
const Resume = () => {
    return(
        <div className = 'resume'>
            <h2>Resume</h2>
            <ul>
                <a href = 'https://drive.google.com/file/d/1O89TisARBST-ME9UQboHZa8M6sf51ch2/view?usp=sharing' target = "_blank">
                    <p>Download my resume</p>
                </a>
            </ul>
            <ul>Proficient at ...</ul>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>RESTful APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>NoSQL</li>
                </ul>
            <ul>Knowledge on ...</ul>
                <ul>
                    <li>React</li>
                    <li>GraphQL</li>
                </ul>
        </div>
    );
};

export default Resume;
